(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea27136c"],{"04d6":function(t,e,s){},"2dd9":function(t,e,s){"use strict";var a=s("04d6"),i=s.n(a);i.a},"61ca":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Studyvideo"},[s("div",{staticClass:"Studyvideo-Studytitle"},[s("Studytitle",{attrs:{Message:t.Message}})],1),s("div",{staticClass:"Studycontent"},[s("Studycontent",{attrs:{Message:t.Message}})],1)])},i=[],n=s("ca2d"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Studycontent"},[s("div",{staticClass:"content"},[t._l(t.Message.result,function(e){return t._l(e,function(e,a){return s("li",{key:a,on:{click:function(s){return t.goStudyvideo(e)}}},[s("div",{staticClass:"group"},[s("div",{staticClass:"img-group"},[s("img",{attrs:{src:e.videoThumbnail}})]),s("div",{staticClass:"text-group"},[s("h2",[t._v(t._s(e.title))]),s("p",[parseInt(e.videoDuration/60)<10?s("span",[t._v("0")]):t._e(),s("span",[t._v(t._s(parseInt(e.videoDuration/60))+":")]),parseInt(e.videoDuration%60)<10?s("span",[t._v("0")]):t._e(),s("span",[t._v(t._s(parseInt(e.videoDuration%60)))])])]),t._m(0,!0)])])})})],2)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon-group"},[s("i",{staticClass:"fa fa-angle-right"})])}],c={name:"Studycontent",props:["Message"],methods:{goStudyvideo:function(t){this.$router.push({name:"studyvideocontent",params:{title:t.title,videoThumbnail:t.videoThumbnail,videosrc:t.src,videotext:t.text}})}}},r=c,l=(s("6fb1"),s("2877")),d=Object(l["a"])(r,u,o,!1,null,null,null),v=d.exports,f={name:"Studyvideo",data:function(){return{Message:{result:this.$route.params.result,data:{title:this.$route.query.title}}}},components:{Studytitle:n["a"],Studycontent:v},created:function(){console.log(this.$route)}},p=f,_=(s("b4d0"),Object(l["a"])(p,a,i,!1,null,"60ca6789",null));e["default"]=_.exports},"6fb1":function(t,e,s){"use strict";var a=s("c83b"),i=s.n(a);i.a},b1db:function(t,e,s){},b4d0:function(t,e,s){"use strict";var a=s("b1db"),i=s.n(a);i.a},c83b:function(t,e,s){},ca2d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Studytitle"},[s("div",{staticClass:"title"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-angle-left",on:{click:t.goState}})]),s("div",{staticClass:"title-text"},[t.Message?s("p",[t._v(t._s(t.Message.data.title))]):t._e(),t.routeData?s("p",[t._v(t._s(t.routeData.title))]):t._e()])])])},i=[],n={name:"Studytitle",props:["Message","routeData"],methods:{goState:function(){this.$router.go(-1)}}},u=n,o=(s("2dd9"),s("2877")),c=Object(o["a"])(u,a,i,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-ea27136c.3f4227e5.js.map