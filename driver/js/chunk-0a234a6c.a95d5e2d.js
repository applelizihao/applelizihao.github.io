(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a234a6c"],{"01aa":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"errorbooktitle"},[e("div",{staticClass:"title"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-angle-left",on:{click:t.goState}})]),e("div",{staticClass:"title-text"},[t._v("\n            错题本\n        ")])])])},o=[],a={name:"errorbooktitle",methods:{goState:function(){this.$router.push("/home")}}},i=a,s=(e("fd11"),e("2877")),l=Object(s["a"])(i,n,o,!1,null,null,null);r["a"]=l.exports},"0bed":function(t,r,e){"use strict";var n=e("8d48"),o=e.n(n);o.a},3122:function(t,r,e){"use strict";var n=e("d118"),o=e.n(n);o.a},3254:function(t,r,e){},"36bd":function(t,r,e){"use strict";var n=e("4bf8"),o=e("77f1"),a=e("9def");t.exports=function(t){var r=n(this),e=a(r.length),i=arguments.length,s=o(i>1?arguments[1]:void 0,e),l=i>2?arguments[2]:void 0,c=void 0===l?e:o(l,e);while(c>s)r[s++]=t;return r}},"36d4":function(t,r,e){},"3a63":function(t,r,e){"use strict";e.r(r);var n,o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"errorcontent"},[e("transition",{attrs:{name:"erroralertanimate"}},[e("Erroralert",{directives:[{name:"show",rawName:"v-show",value:t.Erroralert.active,expression:"Erroralert.active"}],on:{Erroralerttoggle:t.Erroralerttogglefn}})],1),e("div",{staticClass:"errorbook-title"},[e("div",{staticClass:"header-title"},[e("Errorbooktitle")],1),e("Errorbookcontent",{attrs:{ErrorNum:t.ErrorNum}})],1),e("div",{staticClass:"ErrorbookTips"},[e("ErrorbookTips")],1),e("div",{staticClass:"errorbook-btn"},[e("button",{on:{click:function(r){return t.Erroralerttogglefn(!0)}}},[t._v("清空我的错题")])])],1)},a=[],i=e("01aa"),s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"errorbookcontent"},[e("div",{staticClass:"canvas-content"},[e("canvas",{ref:"canvas",attrs:{id:"canvas",width:"200",height:"200"}}),e("div",{staticClass:"btn-groups"},[e("button",[t._v("今日错题")]),e("button",{on:{click:function(r){return t.goState("Errortest")}}},[t._v("全部错题")])])])])},l=[],c=(e("6c7b"),{props:["ErrorNum"],name:"Errorbookcontent",data:function(){return{newErrorNum:this.ErrorNum}},methods:{goState:function(t){this.$router.push(t)}},mounted:function(){var t=this.$refs.canvas,r=t.getContext("2d");r.arc(100,100,85,0,2*Math.PI),r.fillStyle="#ffffff29",r.fill(),r.beginPath(),r.arc(100,100,70,0,2*Math.PI),r.fillStyle="#ffffff",r.fill(),r.beginPath(),r.fillStyle="green",r.textAlign="center",r.font="4.5rem sans-serif",r.fillText(this.ErrorNum,100,100,200),r.beginPath(),r.fillStyle="green",r.textAlign="center",r.font="1.3rem sans-serif",r.fillText("我的错题",100,130,200),r.beginPath()},watch:{ErrorNum:function(){var t=this;n=setInterval(function(){t.newErrorNum===t.ErrorNum&&clearInterval(n);var r=t.$refs.canvas,e=r.getContext("2d");e.clearRect(0,0,200,200),e.arc(100,100,85,0,2*Math.PI),e.fillStyle="#ffffff29",e.fill(),e.beginPath(),e.arc(100,100,70,0,2*Math.PI),e.fillStyle="#ffffff",e.fill(),e.beginPath(),e.fillStyle="green",e.textAlign="center",e.font="4.5rem sans-serif",e.fillText(t.newErrorNum,100,100,200),e.beginPath(),e.fillStyle="green",e.textAlign="center",e.font="1.3rem sans-serif",e.fillText("我的错题",100,130,200),e.beginPath(),t.newErrorNum--},10)}}}),f=c,u=(e("8263"),e("2877")),v=Object(u["a"])(f,s,l,!1,null,null,null),d=v.exports,m=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"errorbookTips"},[e("div",{staticClass:"Compentposterone"},[e("Compentposterone")],1),e("ul",{staticClass:"error-lis"},t._l(t.errorMessage,function(r,n){return e("li",{key:n},[e("span",[t._v(t._s(r.title))]),e("i",{staticClass:"fa fa-angle-right"})])}),0)])},E=[],h=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"compent-poster-one"},[e("div",{staticClass:"poster-one-left"},[e("i",{staticClass:"fa fa-money"}),e("div",{staticClass:"test"},[e("p",{staticClass:"test-title"},[t._v("专家课程，减少错题")]),e("p",{staticClass:"test-content"},[t._v("考试不过，赔付100元")])])]),e("div",{staticClass:"poster-one-right"},[e("button",{staticClass:"btn-look"},[t._v("去看看")])])])}],b={name:"compent-poster-one"},p=b,C=(e("52a4"),Object(u["a"])(p,h,g,!1,null,null,null)),_=C.exports,k={name:"errorbookTips",components:{Compentposterone:_},data:function(){return{errorMessage:[{title:"道路交通安全法律，法规和规章"},{title:"道路交通信号"},{title:"安全行车，文明驾驶基础知识"},{title:"机动车驾驶相关基础知识"}]}}},w=k,N=(e("3122"),Object(u["a"])(w,m,E,!1,null,null,null)),x=N.exports,S=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"Erroralert"},[e("div",{staticClass:"Erroralert-content"},[t._m(0),e("div",{staticClass:"content"},[t._v('\n            清空的错题将被设置为"未做题",是否继续清空错题\n        ')]),e("div",{staticClass:"btn-groups"},[e("button",{staticClass:"goback",on:{click:function(r){return t.$emit("Erroralerttoggle",!1,!1)}}},[t._v("取消")]),e("button",{staticClass:"nextempty",on:{click:t.ErrorNumEmptyfn}},[t._v("继续清空")])])])])},y=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"title"},[e("h3",[t._v("清空错题")])])}],$={data:function(){return{locationErrorNum:window.localStorage.ErrorNum,ErrorInfomation:{active:!1}}},methods:{ErrorNumEmptyfn:function(){this.$emit("Erroralerttoggle",!1,!0),window.localStorage.ErrorNum=0}}},P=$,T=(e("0bed"),Object(u["a"])(P,S,y,!1,null,null,null)),I=T.exports,j={name:"errorcontent",components:{Errorbooktitle:i["a"],Errorbookcontent:d,ErrorbookTips:x,Erroralert:I},data:function(){return{Erroralert:{active:!1},ErrorNum:window.localStorage.ErrorNum}},methods:{Erroralerttogglefn:function(t,r){this.Erroralert.active=t,!0===r&&(this.ErrorNum=0,window.localStorage.ErrorBook="",console.log(this.ErrorNum))}},beforeRouteEnter:function(t,r,e){0==window.localStorage.ErrorNum?e("/errorbook/Errorcontentno"):e()}},M=j,O=(e("5173"),Object(u["a"])(M,o,a,!1,null,null,null));r["default"]=O.exports},5173:function(t,r,e){"use strict";var n=e("de5e"),o=e.n(n);o.a},"52a4":function(t,r,e){"use strict";var n=e("69f9"),o=e.n(n);o.a},"69f9":function(t,r,e){},"6c7b":function(t,r,e){var n=e("5ca1");n(n.P,"Array",{fill:e("36bd")}),e("9c6c")("fill")},8263:function(t,r,e){"use strict";var n=e("36d4"),o=e.n(n);o.a},"8d48":function(t,r,e){},d118:function(t,r,e){},de5e:function(t,r,e){},fd11:function(t,r,e){"use strict";var n=e("3254"),o=e.n(n);o.a}}]);
//# sourceMappingURL=chunk-0a234a6c.a95d5e2d.js.map