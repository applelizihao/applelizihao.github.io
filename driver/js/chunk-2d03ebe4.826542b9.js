(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d03ebe4"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,o,u=String(i(e)),a=r(n),f=u.length;return a<0||a>=f?t?"":void 0:(c=u.charCodeAt(a),c<55296||c>56319||a+1===f||(o=u.charCodeAt(a+1))<56320||o>57343?t?u.charAt(a):c:t?u.slice(a,a+2):o-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),c=n("6821"),o=n("6a99"),u=n("69a8"),a=n("c69a"),f=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?f:function(t,e){if(t=c(t),e=o(e,!0),a)try{return f(t,e)}catch(n){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},"1c4c":function(t,e,n){"use strict";var r=n("9b43"),i=n("5ca1"),c=n("4bf8"),o=n("1fa8"),u=n("33a4"),a=n("9def"),f=n("f1ae"),s=n("27ee");i(i.S+i.F*!n("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,l,v=c(t),p="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,g=void 0!==d,b=0,_=s(v);if(g&&(d=r(d,h>2?arguments[2]:void 0,2)),void 0==_||p==Array&&u(_))for(e=a(v.length),n=new p(e);e>b;b++)f(n,b,g?d(v[b],b):v[b]);else for(l=_.call(v),n=new p;!(i=l.next()).done;b++)f(n,b,g?o(l,d,[i.value,b],!0):i.value);return n.length=b,n}})},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),c=n("79e5"),o=n("be13"),u=n("2b4c"),a=n("520a"),f=u("species"),s=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var v=u(t),p=!c(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),h=p?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[f]=function(){return n}),n[v](""),!e}):void 0;if(!p||!h||"replace"===t&&!s||"split"===t&&!l){var d=/./[v],g=n(o,v,""[t],function(t,e,n,r,i){return e.exec===a?p&&!i?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),b=g[0],_=g[1];r(String.prototype,t,b),i(RegExp.prototype,v,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),c=n("ebd6"),o=n("0390"),u=n("9def"),a=n("5f1b"),f=n("520a"),s=n("79e5"),l=Math.min,v=[].push,p="split",h="length",d="lastIndex",g=4294967295,b=!s(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,s){var _;return _="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var c,o,u,a=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===e?g:e>>>0,b=new RegExp(t.source,s+"g");while(c=f.call(b,i)){if(o=b[d],o>l&&(a.push(i.slice(l,c.index)),c[h]>1&&c.index<i[h]&&v.apply(a,c.slice(1)),u=c[0][h],l=o,a[h]>=p))break;b[d]===c.index&&b[d]++}return l===i[h]?!u&&b.test("")||a.push(""):a.push(i.slice(l)),a[h]>p?a.slice(0,p):a}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):_.call(String(i),n,r)},function(t,e){var r=s(_,t,this,e,_!==n);if(r.done)return r.value;var f=i(t),v=String(this),p=c(f,RegExp),h=f.unicode,d=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(b?"y":"g"),x=new p(b?f:"^(?:"+f.source+")",d),y=void 0===e?g:e>>>0;if(0===y)return[];if(0===v.length)return null===a(x,v)?[v]:[];var E=0,w=0,m=[];while(w<v.length){x.lastIndex=b?w:0;var S,k=a(x,b?v:v.slice(w));if(null===k||(S=l(u(x.lastIndex+(b?0:w)),v.length))===E)w=o(v,w,h);else{if(m.push(v.slice(E,w)),m.length===y)return m;for(var R=1;R<=k.length-1;R++)if(m.push(k[R]),m.length===y)return m;w=E=S}}return m.push(v.slice(E)),m}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3faf":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Practicetitle"},[n("div",{staticClass:"Practicetitle-title"},[n("div",{staticClass:"Practicetitle-icon"},[n("i",{staticClass:"fa fa-angle-left",on:{click:t.goState}})]),t._m(0),n("div",{staticClass:"Practicetitle-setting"},[t._v("\n            设置\n        ")])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Practicetitle-title-content"},[n("button",{staticClass:"active"},[t._v("答题模式")]),n("button",[t._v("背题模式")])])}],c={name:"Practicetitle",props:["goStateurl"],methods:{goState:function(){this.$router.go(-1)}}},o=c,u=(n("f324"),n("2877")),a=Object(u["a"])(o,r,i,!1,null,null,null);e["a"]=a.exports},"4f7f":function(t,e,n){"use strict";var r=n("c26b"),i=n("b39a"),c="Set";t.exports=n("e0b8")(c,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,c),t=0===t?0:t,t)}},r)},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,u="lastIndex",a=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[u]||0!==e[u]}(),f=void 0!==/()??/.exec("")[1],s=a||f;s&&(o=function(t){var e,n,o,s,l=this;return f&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),a&&(e=l[u]),o=i.call(l,t),a&&o&&(l[u]=l.global?o.index+o[0].length:e),f&&o&&o.length>1&&c.call(o[0],n,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)}),o}),t.exports=o},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var c,o=e.constructor;return o!==n&&"function"==typeof o&&(c=o.prototype)!==n.prototype&&r(c)&&i&&i(t,c),t}},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),c=n("69a8"),o=n("86cc").f,u=0,a=Object.isExtensible||function(){return!0},f=!n("79e5")(function(){return a(Object.preventExtensions({}))}),s=function(t){o(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},v=function(t,e){if(!c(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},p=function(t){return f&&h.NEED&&a(t)&&!c(t,r)&&s(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:v,onFreeze:p}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),i=n("0bfb"),c=n("9e1e"),o="toString",u=/./[o],a=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?a(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?i.call(t):void 0)}):u.name!=o&&a(function(){return u.call(this)})},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),c=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:c}},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),c=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b39a:function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,n){"use strict";var r=n("86cc").f,i=n("2aeb"),c=n("dcbc"),o=n("9b43"),u=n("f605"),a=n("4a59"),f=n("01f9"),s=n("d53b"),l=n("7a56"),v=n("9e1e"),p=n("67ab").fastKey,h=n("b39a"),d=v?"_s":"size",g=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var s=t(function(t,r){u(t,s,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&a(r,n,t[f],t)});return c(s.prototype,{clear:function(){for(var t=h(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=h(this,e),r=g(n,t);if(r){var i=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=i),i&&(i.p=c),n._f==r&&(n._f=i),n._l==r&&(n._l=c),n[d]--}return!!r},forEach:function(t){h(this,e);var n,r=o(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){r(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!g(h(this,e),t)}}),v&&r(s.prototype,"size",{get:function(){return h(this,e)[d]}}),s},def:function(t,e,n){var r,i,c=g(t,e);return c?c.v=n:(t._l=c={i:i=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[d]++,"F"!==i&&(t._i[i]=c)),t},getEntry:g,setStrong:function(t,e,n){f(t,e,function(t,n){this._t=h(t,e),this._k=n,this._l=void 0},function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?s(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,s(1))},n?"entries":"values",!n,!0),l(e)}}},c49c:function(t,e,n){},e0b8:function(t,e,n){"use strict";var r=n("7726"),i=n("5ca1"),c=n("2aba"),o=n("dcbc"),u=n("67ab"),a=n("4a59"),f=n("f605"),s=n("d3f4"),l=n("79e5"),v=n("5cc5"),p=n("7f20"),h=n("5dbc");t.exports=function(t,e,n,d,g,b){var _=r[t],x=_,y=g?"set":"add",E=x&&x.prototype,w={},m=function(t){var e=E[t];c(E,t,"delete"==t?function(t){return!(b&&!s(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!s(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!s(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof x&&(b||E.forEach&&!l(function(){(new x).entries().next()}))){var S=new x,k=S[y](b?{}:-0,1)!=S,R=l(function(){S.has(1)}),C=v(function(t){new x(t)}),O=!b&&l(function(){var t=new x,e=5;while(e--)t[y](e,e);return!t.has(-0)});C||(x=e(function(e,n){f(e,x,t);var r=h(new _,e,x);return void 0!=n&&a(n,g,r[y],r),r}),x.prototype=E,E.constructor=x),(R||O)&&(m("delete"),m("has"),g&&m("get")),(O||k)&&m(y),b&&E.clear&&delete E.clear}else x=d.getConstructor(e,t,g,y),o(x.prototype,n),u.NEED=!0;return p(x,t),w[t]=x,i(i.G+i.W+i.F*(x!=_),w),b||d.setStrong(x,t,g),x}},f1ae:function(t,e,n){"use strict";var r=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},f324:function(t,e,n){"use strict";var r=n("c49c"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-2d03ebe4.826542b9.js.map