from django.shortcuts import get_object_or_404
from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.utils.timezone import now
from django.conf import settings
from django.http import HttpRequest

import requests

from .authentication import CsrfExemptSessionAuthentication
from app.models import (
    Print, Printer, GCodeFile, PrintShotFeedback, PrinterPrediction, MobileDevice,
    calc_normalized_p)
from .serializers import (
    UserSerializer, GCodeFileSerializer, PrinterSerializer, PrintSerializer, MobileDeviceSerializer,
    PrintShotFeedbackSerializer)
from lib.channels import send_status_to_web
from lib import cache
from config.celery import celery_app

PREDICTION_FETCH_TIMEOUT = 20


class UserViewSet(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication,)
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = self.serializer_class(request.user, many=False)
        return Response(serializer.data)


class PrinterViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication,)
    serializer_class = PrinterSerializer

    def get_queryset(self):
        if self.request.query_params.get('with_archived') == 'true':
            return Printer.with_archived.filter(user=self.request.user)
        else:
            return Printer.objects.filter(user=self.request.user)

    # TODO: Should these be removed, or changed to POST after switching to Vue?

    @action(detail=True, methods=['get'])
    def cancel_print(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        succeeded = printer.cancel_print()

        return self.send_command_response(printer, succeeded)

    @action(detail=True, methods=['get'])
    def pause_print(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        succeeded = printer.pause_print()

        return self.send_command_response(printer, succeeded)

    @action(detail=True, methods=['get'])
    def resume_print(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        succeeded = printer.resume_print()

        return self.send_command_response(printer, succeeded)

    @action(detail=True, methods=['get'])
    def mute_current_print(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        printer.mute_current_print(request.GET.get('mute_alert', 'false').lower() == 'true')

        return self.send_command_response(printer, True)

    @action(detail=True, methods=['get'])
    def acknowledge_alert(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        printer.acknowledge_alert(request.GET.get('alert_overwrite'))

        return self.send_command_response(printer, True)

    @action(detail=True, methods=['post'])
    def send_command(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        printer.send_octoprint_command(request.data['cmd'], request.data['args'])

        return self.send_command_response(printer, True)

    @action(detail=True, methods=['get'])
    def send_webhook_test(self, request, pk=None):
        printer = self.current_printer_or_404(pk)
        req = requests.post(
            url=settings.EXT_3D_GEEKS_ENDPOINT,
            json=dict(
                token=printer.service_token,
                event="test"))
        req.raise_for_status()

        return Response(dict(status='okay'))

    def partial_update(self, request, pk=None):
        self.get_queryset().filter(pk=pk).update(**request.data)
        printer = self.current_printer_or_404(pk)
        printer.send_should_watch_status()

        return self.send_command_response(printer, True)

    def send_command_response(self, printer, succeeded):
        send_status_to_web(printer.id)
        serializer = self.serializer_class(printer)

        return Response(dict(succeeded=succeeded, printer=serializer.data))

    def current_printer_or_404(self, pk):
        return get_object_or_404(Printer.with_archived.filter(user=self.request.user), pk=pk)


class PrintViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication,)
    serializer_class = PrintSerializer

    def get_queryset(self):
        return Print.objects.filter(user=self.request.user)

    @action(detail=True, methods=['post'])
    def alert_overwrite(self, request, pk=None):
        print = get_object_or_404(self.get_queryset(), pk=pk)
        print.alert_overwrite = request.data.get('value', None)
        print.save()
        serializer = self.serializer_class(print, many=False)
        return Response(serializer.data)

    def list(self, request):
        queryset = self.get_queryset().prefetch_related('printshotfeedback_set').filter(video_url__isnull=False)
        filter = request.GET.get('filter', 'none')
        if filter == 'cancelled':
            queryset = queryset.filter(cancelled_at__isnull=False)
        if filter == 'finished':
            queryset = queryset.filter(finished_at__isnull=False)
        if filter == 'need_alert_overwrite':
            queryset = queryset.filter(alert_overwrite__isnull=True, tagged_video_url__isnull=False)
        if filter == 'need_print_shot_feedback':
            queryset = queryset.filter(printshotfeedback__isnull=False, printshotfeedback__answered_at__isnull=True).distinct()

        sorting = request.GET.get('sorting', 'date_desc')
        if sorting == 'date_asc':
            queryset = queryset.order_by('id')
        else:
            queryset = queryset.order_by('-id')

        start = int(request.GET.get('start', '0'))
        limit = int(request.GET.get('limit', '12'))
        # The "right" way to do it is `queryset[start:start+limit]`. However, it slows down the query by 100x because of the "offset 12 limit 12" clause. Weird.
        # Maybe related to https://stackoverflow.com/questions/21385555/postgresql-query-very-slow-with-limit-1
        results = list(queryset)[start:start + limit]

        serializer = self.serializer_class(results, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def bulk_delete(self, request):
        select_prints_ids = request.data.get('print_ids', [])
        self.get_queryset().filter(id__in=select_prints_ids).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['get'])
    def prediction_json(self, request, pk) -> Response:
        p: Print = get_object_or_404(
            self.get_queryset().select_related('printer'),
            pk=pk)

        # check as it's null=True
        if not p.prediction_json_url:
            return Response([])

        headers = {
            'If-Modified-Since': request.headers.get('if-modified-since'),
            'If-None-Match': request.headers.get('if-none-match'),
        }

        r = requests.get(url=p.prediction_json_url,
                         timeout=PREDICTION_FETCH_TIMEOUT,
                         headers={k: v for k, v in headers.items() if v is not None})
        r.raise_for_status()

        resp_headers = {
            'Last-Modified': r.headers.get('Last-Modified'),
            'Etag': r.headers.get('Etag')
        }

        # might be cached already
        if r.status_code == 304:
            return Response(
                None,
                status=304,
                headers={k: v for k, v in resp_headers.items() if v is not None}
            )

        data = r.json()

        detective_sensitivity: float = (
            p.printer.detective_sensitivity
            if p.printer is not None else
            Printer._meta.get_field('detective_sensitivity').get_default()
        )

        for raw_pred in data:
            if 'fields' not in raw_pred:
                # once upon a time in production
                # should not happen, exact cause is TODO/FIXME
                raw_pred['fields'] = {'normalized_p': 0.0}
            else:
                pred = PrinterPrediction(**raw_pred['fields'])
                raw_pred['fields']['normalized_p'] = calc_normalized_p(
                    detective_sensitivity, pred)

        return Response(
            data,
            headers={k: v for k, v in resp_headers.items() if v is not None}
        )


class GCodeFileViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication,)
    serializer_class = GCodeFileSerializer

    def get_queryset(self):
        return GCodeFile.objects.filter(user=self.request.user).order_by('-created_at')


class PrintShotFeedbackViewSet(mixins.RetrieveModelMixin,
                               mixins.UpdateModelMixin,
                               mixins.ListModelMixin,
                               viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication,)
    serializer_class = PrintShotFeedbackSerializer

    def get_queryset(self):
        try:
            print_id = int(self.request.query_params.get('print_id'))
        except (ValueError, TypeError):
            print_id = None

        qs = PrintShotFeedback.objects.filter(
            print__user=self.request.user
        )

        if print_id:
            qs = qs.filter(print_id=print_id)

        return qs

    def update(self, request, *args, **kwargs):
        unanswered_print_shots = self.get_queryset().filter(answered_at__isnull=True)
        should_credit = len(unanswered_print_shots) == 1 and unanswered_print_shots.first().id == int(kwargs['pk'])

        if should_credit:
            _print = unanswered_print_shots.first().print
            celery_app.send_task('app_ent.tasks.credit_dh_for_contribution',
                                 args=[request.user.id, 2, f'Credit | Focused Feedback - "{_print.filename[:100]}"', f'ff:p:{_print.id}']
                                 )

        resp = super(PrintShotFeedbackViewSet, self).update(request, *args, **kwargs)
        return Response({'instance': resp.data, 'credited_dhs': 2 if should_credit else 0})


class OctoPrintTunnelUsageViewSet(mixins.ListModelMixin,
                                  viewsets.GenericViewSet):

    def list(self, request, *args, **kwargs):
        return Response({'total': cache.octoprinttunnel_get_stats(self.request.user.id)})


class MobileDeviceViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptSessionAuthentication,)
    serializer_class = MobileDeviceSerializer

    def create(self, request):
        device, _ = MobileDevice.with_inactive.get_or_create(
            user=request.user,
            device_token=request.data['device_token'],
            defaults=request.data
        )
        if device.deactivated_at or device.app_version != request.data['app_version']:
            device.deactivated_at = None
            device.app_version = request.data['app_version']
            device.save()

        return Response(self.serializer_class(device, many=False).data)
