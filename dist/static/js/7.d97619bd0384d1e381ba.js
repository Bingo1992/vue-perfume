webpackJsonp([7],{139:function(t,e,r){var n=r(52)(r(185),r(237),null,null);t.exports=n.exports},146:function(t,e,r){"use strict";e.__esModule=!0;var n=r(149),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}},147:function(t,e,r){"use strict";e.__esModule=!0;var n=r(55),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var u=e[i](a),c=u.value}catch(t){return void r(t)}if(!u.done)return o.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},148:function(t,e,r){t.exports=r(155)},149:function(t,e,r){t.exports={default:r(150),__esModule:!0}},150:function(t,e,r){r(154),t.exports=r(3).Object.assign},151:function(t,e,r){"use strict";var n=r(57),o=r(152),i=r(153),a=r(58),u=r(56),c=Object.assign;t.exports=!c||r(26)(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[r]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var r=a(t),c=arguments.length,s=1,l=o.f,f=i.f;c>s;)for(var p,h=u(arguments[s++]),d=l?n(h).concat(l(h)):n(h),m=d.length,v=0;m>v;)f.call(h,p=d[v++])&&(r[p]=h[p]);return r}:c},152:function(t,e){e.f=Object.getOwnPropertySymbols},153:function(t,e){e.f={}.propertyIsEnumerable},154:function(t,e,r){var n=r(7);n(n.S+n.F,"Object",{assign:r(151)})},155:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(156),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},156:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new h(n||[]);return a._invoke=s(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=k;return function(i,a){if(o===L)throw new Error("Generator is already running");if(o===O){if("throw"===i)throw a;return m()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=l(u,r);if(c){if(c===T)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=O,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=L;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?O:E,s.arg===T)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=O,r.method="throw",r.arg=s.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,l(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,T;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=v,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},x=b.iterator||"@@iterator",A=b.asyncIterator||"@@asyncIterator",w=b.toStringTag||"@@toStringTag",_="object"==typeof t,C=e.regeneratorRuntime;if(C)return void(_&&(t.exports=C));C=e.regeneratorRuntime=_?t.exports:{},C.wrap=r;var k="suspendedStart",E="suspendedYield",L="executing",O="completed",T={},j={};j[x]=function(){return this};var N=Object.getPrototypeOf,B=N&&N(N(d([])));B&&B!==g&&y.call(B,x)&&(j=B);var R=a.prototype=o.prototype=Object.create(j);i.prototype=R.constructor=a,a.constructor=i,a[w]=i.displayName="GeneratorFunction",C.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},C.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,w in t||(t[w]="GeneratorFunction")),t.prototype=Object.create(R),t},C.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[A]=function(){return this},C.AsyncIterator=c,C.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return C.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(R),R[w]="Generator",R[x]=function(){return this},R.toString=function(){return"[object Generator]"},C.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},C.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),u=y.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),T}}}(function(){return this}()||Function("return this")())},166:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"content",data:function(){return{}},props:["alertText"]}},167:function(t,e,r){e=t.exports=r(132)(!0),e.push([t.i,".tip-dialog{position:fixed;left:0;width:100%;z-index:5;top:0;bottom:0;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;z-index:20}.tip-content{padding:10px;line-height:20px;max-width:12rem;background-color:rgba(0,0,0,.65);border-radius:4px;color:#fff;font-size:12px}","",{version:3,sources:["e:/vue/vue-perfume/src/components/alertTip.vue"],names:[],mappings:"AACA,YACE,eAAgB,AAChB,OAAQ,AACR,WAAY,AACZ,UAAW,AAGX,MAAO,AACP,SAAU,AAGV,oBAAqB,AACrB,wBAAyB,AACzB,yBAA0B,AAC1B,UAAY,CATb,AAWD,aACE,aAAc,AACd,iBAAkB,AAClB,gBAAiB,AACjB,iCAAsC,AACtC,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CACjB",file:"alertTip.vue",sourcesContent:["\n.tip-dialog {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n}\n.tip-dialog {\n  top: 0;\n  bottom: 0;\n}\n.tip-dialog {\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  z-index: 20;\n}\n.tip-content {\n  padding: 10px;\n  line-height: 20px;\n  max-width: 12rem;\n  background-color: rgba(0, 0, 0, 0.65);\n  border-radius: 4px;\n  color: #fff;\n  font-size: 12px;\n}\n"],sourceRoot:""}])},168:function(t,e,r){var n=r(167);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(133)("6c815931",n,!0)},169:function(t,e,r){r(168);var n=r(52)(r(166),r(170),null,null);t.exports=n.exports},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip-dialog"},[r("div",{staticClass:"tip-content"},[r("p",[t._v(t._s(t.alertText))])])])},staticRenderFns:[]}},185:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(148),o=r.n(n),i=r(147),a=r.n(i),u=r(146),c=r.n(u),s=r(169),l=r.n(s),f=r(54),p=r(53);e.default={name:"login",data:function(){return{mobileNum:null,computedTime:0,validate_token:null,mobileCode:null,alertText:"",showAlertTip:!1,arr:[]}},components:{alertTip:l.a},computed:{rightMobile:function(){return/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/.test(this.mobileNum)},rightCode:function(){return/^\d{6}$/gi.test(this.mobileCode)}},methods:c()({},r.i(f.c)(["RECORD_USERINFO"]),r.i(f.b)(["userInfo"]),{getVerifyCode:function(){var t=this;return a()(o.a.mark(function e(){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.rightMobile){e.next=21;break}return t.computedTime=30,t.timer=setInterval(function(){0==--t.computedTime&&clearInterval(t.timer)},1e3),e.next=5,r.i(p.p)(t.mobileNum,"mobile");case 5:if(n=e.sent,!n.message){e.next=11;break}return t.showHideAlert(n.message),e.abrupt("return");case 11:if(n.is_exists){e.next=14;break}return t.showHideAlert("您输入的手机号尚未绑定"),e.abrupt("return");case 14:return e.next=16,r.i(p.q)(t.mobileNum,"mobile");case 16:if(i=e.sent,!i.message){e.next=20;break}return alert("hehe"),e.abrupt("return");case 20:t.validate_token=i.validate_token;case 21:case"end":return e.stop()}},e,t)}))()},mobileLogin:function(){var t=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.rightMobile){e.next=5;break}return t.showHideAlert("手机号码不正确"),e.abrupt("return");case 5:if(t.rightCode){e.next=8;break}return t.showHideAlert("短信验证码不正确"),e.abrupt("return");case 8:return e.next=10,r.i(p.r)(t.mobileCode,t.mobileNum,t.validate_token);case 10:t.arr=e.sent,t.userInfo=t.arr,t.userInfo.user_id?(t.RECORD_USERINFO(t.userInfo),t.$router.go(-1)):alert(t.userInfo.message);case 13:case"end":return e.stop()}},e,t)}))()},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}})}},237:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("form",{attrs:{action:"#"}},[r("ul",{staticClass:"form-list border-list"},[r("li",[r("label",[t._v("登录账户")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileNum,expression:"mobileNum"}],attrs:{name:"mobile",maxlength:"11",type:"tel",placeholder:"请输入注册的手机号"},domProps:{value:t.mobileNum},on:{input:function(e){e.target.composing||(t.mobileNum=e.target.value)}}})]),t._v(" "),r("li",[r("label",[t._v("短信验证码")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileCode,expression:"mobileCode"}],attrs:{type:"tel",placeholder:"填写手机验证码",name:"mobileCode",maxlength:"6"},domProps:{value:t.mobileCode},on:{input:function(e){e.target.composing||(t.mobileCode=e.target.value)}}}),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.computedTime,expression:"!computedTime"}],staticClass:"btn-getCode",class:{disbtn:!t.rightMobile},on:{click:function(e){e.preventDefault(),t.getVerifyCode(e)}}},[t._v("获取验证码")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.computedTime,expression:"computedTime"}],staticClass:"btn-getCode disbtn",on:{click:function(e){e.preventDefault(),t.getVerifyCode(e)}}},[t._v("已发送("+t._s(t.computedTime)+"s)")])])]),t._v(" "),r("div",{staticClass:"btn"},[r("a",{staticClass:"btn-theme",on:{click:t.mobileLogin}},[t._v("登录")])])]),t._v(" "),t.showAlertTip?r("alert-tip",{attrs:{alertText:t.alertText}}):t._e()],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.d97619bd0384d1e381ba.js.map