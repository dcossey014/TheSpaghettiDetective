(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={prints:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([5,"chunk-vendors"]),n()})({0:function(t,e){},1807:function(t,e,n){"use strict";n("99af");e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWS:function(t){return"/ws/web/".concat(t,"/")},printerSharedWS:function(t){return"/ws/share_token/web/".concat(t,"/")}}},"1e2d":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),r=n("f357"),a=n("5f5b"),o=n("c0eb"),s=n("2ead"),l=n.n(s);n("4de4");i["default"].filter("floor",(function(t){return Math.floor(t)}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timelapse",attrs:{"sticky-container":""}},[n("div",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"menu-bar px-sm-4 d-flex justify-content-between",attrs:{"sticky-offset":"{top: 0, bottom: 30}","sticky-side":"both","on-stick":"onMenuStick"}},[t._m(0),n("div",[n("b-dropdown",{attrs:{"toggle-class":"text-decoration-none no-corner no-border no-shadow",variant:t.filterBtnVariant,"no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-filter"})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("none")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"none"===t.filter?"visible":"hidden"}}),t._v("All ")]),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("finished")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"finished"===t.filter?"visible":"hidden"}}),t._v("Finished ")]),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("cancelled")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"cancelled"===t.filter?"visible":"hidden"}}),t._v("Cancelled ")]),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("need_alert_overwrite")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"need_alert_overwrite"===t.filter?"visible":"hidden"}}),t._v("Review needed ")]),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("need_print_shot_feedback")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"need_print_shot_feedback"===t.filter?"visible":"hidden"}}),t._v("Focused-review needed ")])],1),n("b-dropdown",{attrs:{"toggle-class":"text-decoration-none no-corner no-border no-shadow",variant:"outline-secondary","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas",class:t.sortingBtnClasses})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(e){return t.onSortingClick("date_desc")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"date_desc"===t.sorting?"visible":"hidden"}}),t._v("Newest to oldest ")]),n("b-dropdown-item",{on:{click:function(e){return t.onSortingClick("date_asc")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"date_asc"===t.sorting?"visible":"hidden"}}),t._v("Oldest to newest ")])],1),n("button",{staticClass:"btn ml-3",class:{"btn-light":!t.anyPrintsSelected,"btn-danger":t.anyPrintsSelected},attrs:{type:"button",disabled:!t.anyPrintsSelected},on:{click:t.onDeleteBtnClick}},[n("i",{staticClass:"fas fa-trash-alt"}),t._v(" Delete "+t._s(t.anyPrintsSelected?" ("+t.selectedPrintIds.size+")":"")+" ")])],1)]),n("div",{staticClass:"row"},t._l(t.prints,(function(e){return n("print-card",{key:e.id,attrs:{print:e},on:{selectedChanged:t.onSelectedChanged,printDeleted:t.onPrintDeleted,printDataChanged:t.printDataChanged,fullscreen:t.openFullScreen}})})),1),n("mugen-scroll",{staticClass:"text-center p-4",attrs:{handler:t.fetchMoreData,"should-handle":!t.loading}},[t.noMoreData?n("div",{staticClass:"text-center p-2"},[t._v("End of your time-lapse list.")]):t._e(),t.noMoreData?t._e():n("b-spinner",{attrs:{label:"Loading..."}})],1),n("b-modal",{attrs:{id:"tl-fullscreen-modal",size:"full",hideHeader:!0,hideFooter:!0},on:{hidden:t.fullScreenClosed}},[n("FullScreenPrintCard",{attrs:{print:t.fullScreenPrint,videoUrl:t.fullScreenPrintVideoUrl,autoplay:!0}})],1)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-outline-primary",attrs:{role:"button",href:"/prints/upload/"}},[n("i",{staticClass:"fas fa-upload fa-lg mx-2"})])}],u=(n("4160"),n("a630"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("d0ff")),f=n("bc3a"),p=n.n(f),h=n("51f5"),v=n.n(h),m=n("996c"),b=n.n(m),g=n("1807"),_=n("502a"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 pt-3"},[i("div",{staticClass:"card vld-parent"},[i("loading",{attrs:{active:t.videoDownloading,"is-full-page":!0}}),i("div",{staticClass:"card-header"},[i("div",{style:{visibility:t.hasSelectedChangedListener?"visible":"hidden"}},[i("b-form-checkbox",{staticClass:"text-decoration-none",attrs:{size:"lg"},on:{change:t.onSelectedChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),i("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-primary",name:"radio-btn-outline"},model:{value:t.selectedCardView,callback:function(e){t.selectedCardView=e},expression:"selectedCardView"}},[i("b-form-radio",{staticClass:"no-corner no-shadow",attrs:{value:"detective",disabled:!t.canShowDetectiveView}},[i("img",{staticClass:"seg-control-icon",attrs:{src:n("fbc4")}})]),i("b-form-radio",{staticClass:"no-corner no-shadow",attrs:{value:"info"}},[i("img",{staticClass:"seg-control-icon",attrs:{src:n("8f11")}})])],1),i("div",{staticClass:"dropdown"},[t._m(0),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuButton"}},[this.print.video_url?i("a",{staticClass:"dropdown-item",on:{click:function(e){return t.downloadVideo(!1)}}},[i("i",{staticClass:"fas fa-download"}),t._v("Download Original Time-lapse ")]):t._e(),this.print.tagged_video_url?i("a",{staticClass:"dropdown-item",on:{click:function(e){return t.downloadVideo(!0)}}},[i("i",{staticClass:"fas fa-download"}),t._v("Download Detective Time-lapse ")]):t._e(),i("div",{staticClass:"dropdown-divider"}),i("a",{staticClass:"dropdown-item text-danger",on:{click:t.deleteVideo}},[i("i",{staticClass:"fas fa-trash-alt"}),t._v("Delete ")])])])],1),i("div",[t.videoUrl?i("video-box",{attrs:{videoUrl:t.videoUrl,posterUrl:t.print.poster_url,fluid:!0,fullscreenBtn:t.hasFullscreenListener},on:{timeupdate:t.onTimeUpdate,fullscreen:function(e){return t.$emit("fullscreen",t.print.id,t.videoUrl)}}}):i("div",[i("detective-working")],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"info"==t.cardView,expression:"cardView == 'info'"}]},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(1),i("div",{staticClass:"col-8"},[t._v(t._s(t.print.filename))])]),i("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"row",attrs:{title:t._f("moment")(t.wasTimelapseUploaded?t.print.uploaded_at:t.print.ended_at,"LLLL")}},[i("div",{staticClass:"text-muted col-4"},[t._v(" "+t._s(t.wasTimelapseUploaded?"Uploaded":"Printed")+" "),i("span",{staticClass:"float-right"},[t._v(":")])]),i("div",{staticClass:"col-8"},[t._v(t._s(t.wasTimelapseUploaded?t.print.uploaded_at.fromNow():t.print.ended_at.fromNow())+" "+t._s(t.endStatus))])]),t.wasTimelapseUploaded?t._e():i("div",{staticClass:"row",attrs:{id:"dur-"+t.print.id}},[i("b-tooltip",{attrs:{target:"dur-"+t.print.id,triggers:"hover"}},[t._v(" "+t._s(t._f("floor")(t._f("duration")(t.duration,"asHours")))+":"+t._s(t._f("duration")(t.duration,"minutes"))+":"+t._s(t._f("duration")(t.duration,"seconds"))+" ")]),t._m(2),i("div",{staticClass:"col-8"},[t._v(t._s(t.duration.humanize()))])],1)])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"detective"==t.cardView,expression:"cardView == 'detective'"}]},[t.print.prediction_json_url?i("gauge",{attrs:{normalizedP:t.normalizedP}}):t._e(),i("div",{staticClass:"feedback-section"},[i("div",{staticClass:"text-center py-2 px-3"},[i("div",{staticClass:"lead",class:[t.print.alerted_at?"text-danger":"text-success"]},[t._v(t._s(t.print.alerted_at?"The Detective found spaghetti":"The Detective found nothing fishy"))]),i("div",{staticClass:"py-2"},[t._v(" Did she get it right? "),i("b-button",{staticClass:"mx-2 btn-sm",attrs:{variant:t.thumbedUp?"primary":"outline"},on:{click:t.onThumbUpClick}},[t.inflightAlertOverwrite?i("b-spinner",{attrs:{type:"grow",small:""}}):i("i",{staticClass:"fas fa-thumbs-up"})],1),i("b-button",{staticClass:"mx-2 btn-sm",attrs:{variant:t.thumbedDown?"primary":"outline"},on:{click:t.onThumbDownClick}},[t.inflightAlertOverwrite?i("b-spinner",{attrs:{type:"grow",small:""}}):i("i",{staticClass:"fas fa-thumbs-down"})],1)],1),i("transition",{attrs:{name:"bounce"}},[t.focusedFeedbackEligible?i("div",{staticClass:"pt-2"},[i("a",{staticClass:"btn btn-sm btn-outline-primary px-4",attrs:{role:"button",href:t.focusedFeedbackLink}},[t._v(" F "),i("i",{staticClass:"fas fa-search focused-feedback-icon"}),t._v("CUSED FEEDBACK "),t.focusedFeedbackCompleted?t._e():i("img",{staticClass:"seg-control-icon ml-1",attrs:{src:n("b639")}})])]):t._e()])],1),i("div",{staticClass:"text-muted py-2 px-3 help-text"},[t.focusedFeedbackEligible?i("small",[t.focusedFeedbackCompleted?i("span",[t._v("Thank you for completing the Focused Feedback for The Detective. You have earned 2 non-expirable Detective Hours. You can click the botton again to change your feedback.")]):i("span",[t._v(" With Focused Feedback, you can tell The Detective exactly where she got it wrong. This is the most effective way to help her improve. "),i("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#you-earn-detective-hours-for-giving-focused-feedback"}},[t._v("You will earn 2 Detective Hours once you finish the Focused Feedback")]),t._v(". ")])]):i("small",[t._v(" Every time you give The Detective feedback, "),i("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/help-the-detective-improve/"}},[t._v("you help her get better at detecting spaghetti")]),t._v(". ")])])])],1)],1)],1)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn icon-btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-label":"Controls"}},[n("i",{staticClass:"fas fa-ellipsis-v"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted col-4"},[t._v(" File "),n("span",{staticClass:"float-right"},[t._v(":")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted col-4"},[t._v(" Duration "),n("span",{staticClass:"float-right"},[t._v(":")])])}],y=(n("99af"),n("19de")),k=n.n(y),D=n("c1df"),P=n.n(D),x=n("9380"),S=n.n(x),O=n("9062"),T=n.n(O),j=(n("e40d"),n("c1ee")),B=n("6868"),F=n("5237"),E={name:"PrintCard",components:{Loading:T.a,VideoBox:j["a"],Gauge:B["a"],DetectiveWorking:F["a"]},data:function(){return{videoDownloading:!1,currentPosition:0,predictions:[],selectedCardView:"detective",selected:!1,inflightAlertOverwrite:null}},props:{print:Object},computed:{wasTimelapseUploaded:function(){return null!==this.print.uploaded_at},endStatus:function(){return this.print.cancelled_at?"(Cancelled)":""},duration:function(){return P.a.duration(this.print.ended_at.diff(this.print.started_at))},canShowDetectiveView:function(){return null!==this.print.prediction_json_url&&null!==this.print.tagged_video_url||!!(this.print.ended_at&&P()().diff(this.print.ended_at,"hours")<24||this.print.uploaded_at&&P()().diff(this.print.uploaded_at,"hours")<24)},cardView:function(){return this.canShowDetectiveView?this.selectedCardView:"info"},videoUrl:function(){return"info"==this.cardView?this.print.video_url:this.print.tagged_video_url},thumbedUp:function(){return!!this.print.alert_overwrite&&this.print.has_alerts^"NOT_FAILED"===this.print.alert_overwrite},thumbedDown:function(){return!!this.print.alert_overwrite&&this.print.has_alerts^"FAILED"===this.print.alert_overwrite},focusedFeedbackEligible:function(){return this.print.printshotfeedback_set.length>0&&this.print.alert_overwrite},focusedFeedbackCompleted:function(){return this.print.printshotfeedback_set.length>0&&0==S()(this.print.printshotfeedback_set,(function(t){return!t.answered_at})).length},focusedFeedbackLink:function(){return"/prints/shot-feedback/".concat(this.print.id,"/")},hasSelectedChangedListener:function(){return Boolean(this.$listeners&&this.$listeners.selectedChanged)},hasFullscreenListener:function(){return Boolean(this.$listeners&&this.$listeners.fullscreen)},normalizedP:function(){return Object(_["a"])(this.predictions,this.currentPosition)}},methods:{onTimeUpdate:function(t){this.currentPosition=t},onSelectedChange:function(){this.$emit("selectedChanged",this.print.id,!this.selected)},downloadVideo:function(t){var e=this;this.videoDownloading=!0;var n=new XMLHttpRequest,i="".concat(this.print.filename).concat(t?"_detective_view":"",".mp4");n.open("GET",t?this.print.tagged_video_url:this.print.video_url,!0),n.responseType="blob",n.onload=function(t){k()(t.target.response,i),e.videoDownloading=!1},n.send()},deleteVideo:function(){var t=this;p.a.delete(g["a"].print(this.print.id)).then((function(){t.$emit("printDeleted",t.print.id)}))},onThumbUpClick:function(){this.inflightAlertOverwrite=this.print.has_alerts?"FAILED":"NOT_FAILED",this.alertOverwrite(this.inflightAlertOverwrite)},onThumbDownClick:function(){this.inflightAlertOverwrite=this.print.has_alerts?"NOT_FAILED":"FAILED",this.alertOverwrite(this.inflightAlertOverwrite)},alertOverwrite:function(t){var e=this;p.a.post(g["a"].printAlertOverwrite(this.print.id),{value:t}).then((function(t){e.$emit("printDataChanged",t.data),e.inflightAlertOverwrite=null}))},fetchPredictions:function(){var t=this;p.a.get(this.print.prediction_json_url).then((function(e){t.predictions=e.data}))}},mounted:function(){this.print.prediction_json_url&&this.fetchPredictions(),this.print.tagged_video_url||(this.selectedCardView="info")}},U=E,$=(n("2b6b"),n("2877")),V=Object($["a"])(U,w,C,!1,null,"7c98a2de",null),A=V.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video-box",{attrs:{videoUrl:t.videoUrl,posterUrl:t.print.poster_url,fluid:!1,autoplay:t.autoplay,fullScreenBtn:!1},on:{timeupdate:t.onTimeUpdate}}),n("gauge",{attrs:{normalizedP:t.normalizedP}})],1)},I=[],L=(n("a9e3"),{name:"FullScreenPrintCard",components:{VideoBox:j["a"],Gauge:B["a"]},props:{print:{type:Object,required:!0},videoUrl:{type:String,required:!0},initialPosition:{type:Number,default:function(){return 0}},autoplay:{type:Boolean,default:function(){return!1}}},data:function(){return{currentPosition:0,predictions:[]}},computed:{normalizedP:function(){return Object(_["a"])(this.predictions,this.currentPosition)}},methods:{onTimeUpdate:function(t){this.currentPosition=t},fetchPredictions:function(){var t=this;p.a.get(this.print.prediction_json_url).then((function(e){t.predictions=e.data}))}},mounted:function(){this.print.prediction_json_url&&this.fetchPredictions()}}),N=L,z=Object($["a"])(N,M,I,!1,null,"569d8700",null),W=z.exports,G={name:"PrintsPage",components:{MugenScroll:b.a,PrintCard:A,FullScreenPrintCard:W},data:function(){return{prints:[],selectedPrintIds:new Set,loading:!1,noMoreData:!1,filter:"none",sorting:"date_desc",fullScreenPrint:null,fullScreenPrintVideoUrl:null}},computed:{filterBtnVariant:function(){return"none"===this.filter?"outline-secondary":"outline-primary"},sortingBtnClasses:function(){return"date_asc"===this.sorting?" fa-sort-amount-up":"fa-sort-amount-down"},anyPrintsSelected:function(){return this.selectedPrintIds.size>0}},methods:{fetchMoreData:function(){var t=this;this.noMoreData||(this.loading=!0,p.a.get(g["a"].prints(),{params:{start:this.prints.length,limit:6,filter:this.filter,sorting:this.sorting}}).then((function(e){var n;t.loading=!1,t.noMoreData=e.data.length<6,(n=t.prints).push.apply(n,Object(u["a"])(e.data.map((function(t){return Object(_["b"])(t)}))))})))},refetchData:function(){this.prints=[],this.selectedPrintIds=[],this.noMoreData=!1,this.fetchMoreData()},onSelectedChanged:function(t,e){var n=new Set(this.selectedPrintIds);e?n.add(t):n.delete(t),this.selectedPrintIds=n},onMenuStick:function(t){console.log(t)},onFilterClick:function(t){this.filter=t,this.refetchData()},onSortingClick:function(t){this.sorting=t,this.refetchData()},onDeleteBtnClick:function(){var t=this,e=Array.from(this.selectedPrintIds);this.$swal({title:"Are you sure?",text:"Delete ".concat(this.selectedPrintIds.size," print(s)? This action can not be undone."),showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(n){n.isConfirmed&&p.a.post(g["a"].printsBulkDelete(),{print_ids:e}).then((function(){e.forEach((function(e){return t.onPrintDeleted(e,!1)})),t.$swal.Toast.fire({title:"".concat(e.length," time-lapse(s) deleted!")}),t.selectedPrintIds=[]}))}))},onPrintDeleted:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=v()(this.prints,(function(e){return e.id==t})),i=this.prints[n];this.$delete(this.prints,n),e&&this.$swal.Toast.fire({title:"Time-lapse ".concat(i.filename," deleted!")})},printDataChanged:function(t){var e=v()(this.prints,(function(e){return e.id==t.id}));this.$set(this.prints,e,Object(_["b"])(t))},openFullScreen:function(t,e){var n=v()(this.prints,(function(e){return e.id==t}));-1!=n&&(this.fullScreenPrint=this.prints[n],this.fullScreenPrintVideoUrl=e,this.$bvModal.show("tl-fullscreen-modal"))},fullScreenClosed:function(){this.fullScreenPrint=null,this.fullScreenPrintVideoUrl=null}}},q=G,H=(n("d2ad"),Object($["a"])(q,c,d,!1,null,null,null)),R=H.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-5"},[n("div",{staticClass:"row justify-content-center"},[t.print?n("print-card",{attrs:{print:t.print},on:{printDeleted:t.onPrintDeleted,printDataChanged:t.printDataChanged}}):t._e()],1)])},J=[],K={name:"PrintPage",components:{PrintCard:A},props:{config:Object},data:function(){return{print:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;p.a.get(g["a"].print(this.config.printId)).then((function(e){t.print=Object(_["b"])(e.data)}))},onPrintDeleted:function(){window.location.href="/prints/"},printDataChanged:function(){this.fetchData()}}},X=K,Q=Object($["a"])(X,Y,J,!1,null,"28537294",null),Z=Q.exports;i["default"].use(a["a"]),i["default"].use(r["a"]),i["default"].use(o["a"]),i["default"].use(l.a),document.getElementById("prints-mount")&&new i["default"]({components:{PrintsPage:R}}).$mount("#prints-mount"),document.getElementById("print-mount")&&new i["default"]({components:{PrintPage:Z}}).$mount("#print-mount")},"2b6b":function(t,e,n){"use strict";var i=n("c6bf"),r=n.n(i);r.a},3477:function(t,e,n){},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(i){return n}},r=function(t,e){return localStorage.setItem(t,e)}},5:function(t,e,n){t.exports=n("1e2d")},"502a":function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return d}));n("caad"),n("b0c0"),n("d3b7"),n("25f0"),n("2532");var i=n("c1df"),r=n.n(i),a=n("9b02"),o=n.n(a),s=function(t){return t?r()(t):null},l=function(t){return t.ended_at=s(t.cancelled_at||t.finished_at),t.started_at=s(t.started_at),t.uploaded_at=s(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},c=function(t){return t.name=t.name||"Printer #"+t.id.toString(),t.created_at=s(t.created_at),t.isOffline=null===o()(t,"status",null),t.isPaused=o()(t,"status.state.flags.paused",!1),t.isIdle="Operational"===o()(t,"status.state.text",""),t.isDisconnected=o()(t,"status.state.flags.closedOrError",!0),t.isPrinting=!t.isDisconnected&&"Operational"!==o()(t,"status.state.text",""),t.hasError=o()(t,"status.state.flags.error")||o()(t,"status.state.text","").toLowerCase().includes("error"),t.alertUnacknowledged=o()(t,"current_print.alerted_at")&&r()(o()(t,"current_print.alerted_at")).isAfter(r()(o()(t,"current_print.alert_acknowledged_at")||0)),t},d=function(t,e){var n=Math.round(t.length*e);return o()(t[n],"fields.normalized_p",0)}},5237:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card bg-dark text-white"},[i("img",{staticClass:"card-img",attrs:{src:n("6e05"),alt:"The Detective is still working"}}),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-overlay",staticStyle:{"background-color":"rgba(0,0,0,0.6)"}},[n("h5",{staticClass:"card-title text-center",staticStyle:{padding:"70px 0"}},[t._v("The Detective is still busy working on your time-lapse")])])}],a={name:"DetectiveWorking"},o=a,s=n("2877"),l=Object(s["a"])(o,i,r,!1,null,null,null);e["a"]=l.exports},6295:function(t,e,n){"use strict";var i=n("3477"),r=n.n(i);r.a},6868:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsd-gauge-container"},[n("span",{style:{color:t.titleColor},attrs:{id:"title"}},[t._v(t._s(t.titleText))]),n("div",{staticClass:"tsd-gauge"},[n("radial-gauge",{attrs:{value:t.value,options:t.options}})],1),n("hr")])},r=[],a=(n("a9e3"),n("7489")),o={name:"Gauge",components:{RadialGauge:a["a"]},data:function(){return{}},props:{normalizedP:{type:Number},options:{type:Object,default:function(){return{valueDec:0,valueInt:0,width:240,height:240,units:!1,box:!1,minValue:0,maxValue:100,majorTicks:["","","",""],minorTicks:4,highlights:[{from:0,to:33,color:"#5cb85c"},{from:33,to:67,color:"#f0ad4e"},{from:67,to:100,color:"#d9534f"}],colorPlate:"rgba(255,255,255,.0)",colorTitle:"#5cb85c",colorStrokeTicks:"#EBEBEB",colorNeedleStart:"rgba(240, 128, 128, 1)",colorNneedleEnd:"rgba(255, 160, 122, .9)",valueBox:!1,animationRule:"bounce",animationDuration:500,animatedValue:!0,startAngle:90,ticksAngle:180,borders:!1}}}},computed:{value:function(){return 100*this.normalizedP},titleText:function(){switch(this.level()){case 0:return"Looking Good";case 1:return"Fishy...";case 2:return"Failing!";default:return"Looking Good"}},titleColor:function(){switch(this.level()){case 0:return"#5cb85c";case 1:return"#f0ad4e";case 2:return"#d9534f";default:return"#5cb85c"}}},methods:{level:function(){return this.value>66?2:this.value>33?1:0}}},s=o,l=(n("6295"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"38f5df61",null);e["a"]=c.exports},"6e05":function(t,e,n){t.exports=n.p+"img/detective-working.gif"},"7a8a":function(t,e,n){"use strict";var i=n("c8fe"),r=n.n(i);r.a},"8f11":function(t,e,n){t.exports=n.p+"img/info-inverted.png"},"9e23":function(t,e,n){},b639:function(t,e,n){t.exports=n.p+"img/detective-hour-2-primary.png"},c1ee:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-top"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-default-skin vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0},on:{timeupdate:t.onTimeUpdate}}),t.fullscreenBtn?n("a",{staticClass:"fullscreen-btn",attrs:{role:"button"},on:{click:function(e){return t.$emit("fullscreen")}}},[n("i",{staticClass:"fa fa-expand fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()],1)},r=[],a=n("d6d3"),o={name:"VideoBox",components:{videoPlayer:a["videoPlayer"]},props:{videoUrl:String,posterUrl:String,fullscreenBtn:{default:function(){return!0},type:Boolean},fluid:{type:Boolean,default:function(){return!0}},autoplay:{type:Boolean,default:function(){return!1}}},computed:{playerOptions:function(){return{muted:!0,preload:"none",language:"en",playbackRates:[.5,1,1.5,2],fluid:this.fluid,fill:!this.fluid,autoplay:this.autoplay,sources:[{type:"video/mp4",src:this.videoUrl}],controlBar:{fullscreenToggle:!1},poster:this.posterUrl}}},methods:{onTimeUpdate:function(t){this.$emit("timeupdate",t.currentTime()/t.duration())}}},s=o,l=(n("7a8a"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"2ae6d05e",null);e["a"]=c.exports},c6bf:function(t,e,n){},c8fe:function(t,e,n){},d2ad:function(t,e,n){"use strict";var i=n("9e23"),r=n.n(i);r.a},f357:function(t,e,n){"use strict";var i=n("f3f3"),r=n("a026"),a=n("5886"),o=n("3c33"),s=function(t,e,n){var a=document.createElement("div"),o=new r["default"]({render:function(n){return n(t,{props:e})}}).$mount(a);return r["default"].swal(Object(i["a"])(Object(i["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(o.$el)},onDestroy:function(){o.$destroy(),a.remove()}}))},l=function(t,e,n){return r["default"].swal(Object(i["a"])(Object(i["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},c=function(t,e){t.use(a["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),r=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),c=function(e,n){if(!Object(o["a"])(n,!1)){var r=Object(i["a"])(Object(i["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(r).then((function(t){t.value&&(Object(o["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=s,t.prototype.$swal["openModalWithElement"]=l,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=r,t.prototype.$swal["DismissableToast"]=c};e["a"]={install:c}},fbc4:function(t,e,n){t.exports=n.p+"img/logo-square-inverted.png"}});
//# sourceMappingURL=prints.js.map