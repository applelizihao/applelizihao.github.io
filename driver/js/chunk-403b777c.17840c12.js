(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403b777c"],{"261d":function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"answercontent"},[e("div",{staticClass:"answercontent-title"},[e("Answertitle",{attrs:{hsMessageactive:s.titleMessage.hsMessageactive,hsMessagevalue:s.titleMessage.hsMessagevalue,hsMessage:s.titleMessage.hsMessage,spanMessage:s.titleMessage.spanMessage},on:{backtitle:s.backtitlefn}})],1),e("div",{staticClass:"content"},[s._m(0),s._m(1),s._m(2),e("div",{staticClass:"test-subject"},s._l(s.testSubject,function(t,n){return e("li",{key:n},[e("span",[s._v(s._s(t.testName))]),e("span",[s._v(s._s(t.testContent))])])}),0),s._m(3),e("div",{staticClass:"test-btn"},[e("button",{on:{click:function(t){return s.goState()}}},[s._v("全真模拟考试")])])])])},a=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"student-img"},[n("img",{attrs:{src:e("7458"),alt:""}})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"student-name"},[e("h4",[s._v("一点通学院")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"student-tips"},[e("span",[s._v("你还可以登陆学院中心更新个人资料")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"answer-tips"},[e("span",[s._v("答题不可修改，累计错题分数达到不及格标时,系统自动提醒交卷，考试不通过")])])}],i=e("adc5"),c={components:{Answertitle:i["a"]},name:"answercontent",methods:{goState:function(){this.$router.push("Answercontenttest")},backtitlefn:function(s){this.titleMessage.hsMessageactive=s}},data:function(){return{titleMessage:{hsMessage:"模拟考试",hsMessageactive:!0,hsMessagevalue:"/home",spanMessage:"成绩单"},testSubject:[{testName:"考试科目",testContent:"科目一理论考试"},{testName:"考试题库",testContent:"小车C1/C2/C3"},{testName:"考试标准",testContent:"100题，45分钟"},{testName:"合格标准",testContent:"90分及格"},{testName:"出题规则",testContent:"交警局出题规则"}]}}},u=c,l=(e("8f56"),e("2877")),o=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=o.exports},7458:function(s,t,e){s.exports=e.p+"img/xueche.ede5e252.jpg"},"7c49":function(s,t,e){},"8f56":function(s,t,e){"use strict";var n=e("fefb"),a=e.n(n);a.a},adc5:function(s,t,e){"use strict";var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"answertitle"},[e("div",{staticClass:"title"},[e("i",{staticClass:"fa fa-angle-left",on:{click:s.goState}}),s.hsMessageactive?e("h3",[s._v(s._s(s.hsMessage))]):e("h3",[s._v("\n            "+s._s(s.mins)+":"+s._s(s.secounds)+"\n            "),s.testtimevalue?e("span",[s._v(s._s(s.testTime))]):s._e()]),e("span",[s._v(s._s(s.spanMessage))])])])},a=[],i={props:["spanMessage","hsMessage","testTime","testtimevalue","hsMessagevalue","hsMessageactive"],name:"answertitle",data:function(){return{mins:null,secounds:null}},mounted:function(){this.mins=parseInt(this.hsMessage/60),this.secounds=parseInt(this.hsMessage%60),this.secounds<10&&(this.secounds="0"+this.secounds),this.mins<10&&(this.mins="0"+this.mins)},watch:{hsMessage:function(){this.mins=parseInt(this.hsMessage/60),this.secounds=parseInt(this.hsMessage%60),this.secounds<10&&(this.secounds="0"+this.secounds),this.mins<10&&(this.mins="0"+this.mins)}},methods:{goState:function(){this.$router.push(this.hsMessagevalue)}}},c=i,u=(e("c1c2"),e("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);t["a"]=l.exports},c1c2:function(s,t,e){"use strict";var n=e("7c49"),a=e.n(n);a.a},fefb:function(s,t,e){}}]);
//# sourceMappingURL=chunk-403b777c.17840c12.js.map