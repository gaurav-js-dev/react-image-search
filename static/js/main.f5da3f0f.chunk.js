(this["webpackJsonpreact-final-project"]=this["webpackJsonpreact-final-project"]||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);a(72);var n=a(1),r=a.n(n),c=a(26),s=a.n(c),l=a(8),i=a(4),u="SET_ERROR",o={message:"",code:void 0},m=function(e){return{type:u,payload:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(i.a)(Object(i.a)({},e),t.payload):e},b=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.error.message}));return t?r.a.createElement("div",{className:"Error d-flex justify-content-center mt-4","data-testid":"Error"},r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},r.a.createElement("p",{className:"m-0"},"Oops! there is an error. ",r.a.createElement("br",null),t),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return e(m(o))}},r.a.createElement("span",{"aria-hidden":"true","data-testid":"close"},"\xd7")))):null},p=(a(81),function(){return Object(l.c)((function(e){return e.loader.isLoading}))?r.a.createElement("div",{className:"Loader d-flex flex-column justify-content-center align-items-center text-center"},r.a.createElement("div",{className:"Loader__spinner spinner-border text-dark",role:"status"}),r.a.createElement("h1",null,"Loading")):null}),f=(a(82),function(){return r.a.createElement("header",null," ",r.a.createElement("span",{role:"img","aria-label":"camera"},"\ud83d\udcf8")," ","Imagica Image Search Engine!")}),O=a(68),E=a.n(O),g=a(16),h="FETCH_IMAGES_LIST",j="SET_IMAGES_LIST",v="LOAD_MORE_IMAGES",x="FETCH_USER_SEARCH_DATA",y="SET_USER_SEARCH_DATA",_="CLEAR_IMAGES_LIST",k=function(){return{type:v}},L=function(e){return{type:x,payload:e}},w={imagesList:[],page:1,searchText:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{imagesList:[].concat(Object(g.a)(e.imagesList),Object(g.a)(a.map((function(e){return{url:e.urls.small,likes:e.likes,id:e.id,height:e.height,width:e.width}}))))});case v:return Object(i.a)(Object(i.a)({},e),{},{page:e.page+1});case x:return Object(i.a)(Object(i.a)({},e),{},{searchText:a});case y:return Object(i.a)(Object(i.a)({},e),{},{imagesList:[].concat(Object(g.a)(e.imagesList),Object(g.a)(a.map((function(e){return{url:e.urls.small,likes:e.likes,id:e.id,height:e.height,width:e.width}}))))});case _:return Object(i.a)(Object(i.a)({},e),{},{imagesList:w.imagesList});default:return e}},N=(a(98),function(){var e=Object(l.c)((function(e){return e.images.imagesList})),t=Object(l.c)((function(e){return e.images.searchText})),a=Object(l.b)(),c=Object(n.useCallback)((function(){a({type:h})}),[a]);Object(n.useEffect)((function(){c()}),[c]);var s=Object(n.useCallback)((function(){a(k()),a(L(t))}),[t,a]),i=E()(e),u=Object(n.useCallback)((function(){a(k()),c()}),[a,c]);return r.a.createElement("div",{className:"container py-4"},r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement("div",{className:"col-lg-4 text-center ",key:e.id},r.a.createElement("span",{className:"stats"},"".concat(e.likes," \ud83e\udde1")),r.a.createElement("img",{className:"py-1",height:400,width:400,src:e.url,alt:e.url}))}))),r.a.createElement("div",{className:"text-center py-4"},i&&r.a.createElement("p",null,"No Images Found !!"),!i&&r.a.createElement("button",{className:"btn btn-dark btn-md",onClick:t?s:u},"Show More..")))}),C=function(){var e=Object(l.b)(),t=Object(n.useCallback)((function(t){e({type:_}),e(L(t))}),[e]);return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",autoComplete:"off",name:"search",className:"form-control",id:"search",placeholder:"Search for Images",onKeyDown:function(e){if(13===e.keyCode){var a=e.target.value;t(a)}},onBlur:function(e){return e.target.blur()}}),r.a.createElement("label",{className:"btn btn-dark",htmlFor:"search",onClick:function(){return t("Jaipur")}},r.a.createElement("span",{role:"img","aria-label":"search"},"\ud83d\udd0d"),"Search")))},T=function(){return r.a.createElement("section",{className:"HomePage"},r.a.createElement(C,null),r.a.createElement(N,null))},A=a(12),I=a(70),R=a(11),D=a.n(R),H=a(5),M=a(41),U=a.n(M),X="?client_id=eVds9XQ51U2XJR5eUixrQUKhKqHXiLocNllQRpWHjvQ",F="https://api.unsplash.com/photos/".concat(X,"&per_page=6"),G="https://api.unsplash.com/search/photos/".concat(X,"&per_page=6&query="),J=function(e){var t="".concat(F,"&page=").concat(e);return U.a.get(t)},Q=function(e,t){var a="".concat(G,"&query=").concat(e,"&page=").concat(t);return U.a.get(a)},q="SHOW_LOADER",K="HIDE_LOADER",B=function(){return{type:q}},P=function(){return{type:K}},V={isLoading:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case K:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1});default:return e}},z=D.a.mark(te),Y=D.a.mark(ae),Z=D.a.mark(ne),$=D.a.mark(re),ee=function(e){return e.images.page};function te(e){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.response,a.next=3,Object(H.b)(m({code:null===t||void 0===t?void 0:t.status,message:null===t||void 0===t?void 0:t.data.errors}));case 3:return a.next=5,Object(H.b)(P());case 5:case"end":return a.stop()}}),z)}function ae(){var e,t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(H.c)(ee);case 3:return e=a.sent,a.next=6,Object(H.b)(B());case 6:return a.next=8,Object(H.a)(J,e);case 8:return t=a.sent,a.next=11,Object(H.b)((n=t.data,{type:j,payload:n}));case 11:return a.next=13,Object(H.b)(P());case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(0),a.next=19,Object(H.a)(te,a.t0);case 19:case"end":return a.stop()}var n}),Y,null,[[0,15]])}function ne(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(H.b)(B());case 3:return n.next=5,Object(H.c)(ee);case 5:return t=n.sent,n.next=8,Object(H.a)(Q,e.payload,t);case 8:return a=n.sent,n.next=11,Object(H.b)((r=a.data.results,{type:y,payload:r}));case 11:return n.next=13,Object(H.b)(P());case 13:n.next=19;break;case 15:return n.prev=15,n.t0=n.catch(0),n.next=19,Object(H.a)(te,n.t0);case 19:case"end":return n.stop()}var r}),Z,null,[[0,15]])}function re(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(h,ae);case 2:return e.next=4,Object(H.d)(x,ne);case 4:case"end":return e.stop()}}),$)}var ce={images:S,loader:W,error:d},se=Object(A.b)(ce),le=(a(69),{images:w,loader:V,error:o}),ie=le;var ue=function(){var e=function(){var e=Object(I.a)(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,a=Object(A.d)(se,ie,t(Object(A.a)(e)));return e.run(re),a}();return r.a.createElement(l.a,{store:e},r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(T,null),";")};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a(171)},72:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},98:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.f5da3f0f.chunk.js.map