webpackJsonp([5],{124:function(t,e,r){var n=r(46)(r(186),r(177),null,null);t.exports=n.exports},131:function(t,e,r){"use strict";e.__esModule=!0;var n=r(50),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var u=e[i](a),c=u.value}catch(t){return void r(t)}if(!u.done)return o.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},132:function(t,e,r){t.exports=r(133)},133:function(t,e,r){(function(e){var n="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(134),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}).call(e,r(47))},134:function(t,e,r){(function(e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new p(n||[]);return a._invoke=s(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function r(e,o,i,a){var u=n(t[e],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function o(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return i=i?i.then(n,n):n()}"object"==typeof e.process&&e.process.domain&&(r=e.process.domain.bind(r));var i;this._invoke=o}function s(t,e,r){var o=k;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===C){if("throw"===i)throw a;return m()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=l(u,r);if(c){if(c===T)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=C,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=O;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?C:L,s.arg===T)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=C,r.method="throw",r.arg=s.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,l(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,T;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=v,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",_=b.toStringTag||"@@toStringTag",E="object"==typeof t,j=e.regeneratorRuntime;if(j)return void(E&&(t.exports=j));j=e.regeneratorRuntime=E?t.exports:{},j.wrap=r;var k="suspendedStart",L="suspendedYield",O="executing",C="completed",T={},N={};N[w]=function(){return this};var R=Object.getPrototypeOf,P=R&&R(R(d([])));P&&P!==g&&y.call(P,w)&&(N=P);var I=a.prototype=o.prototype=Object.create(N);i.prototype=I.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(I),t},j.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[x]=function(){return this},j.AsyncIterator=c,j.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return j.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(I),I[_]="Generator",I[w]=function(){return this},I.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),u=y.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),T}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,r(47))},135:function(t,e,r){"use strict";e.__esModule=!0;var n=r(138),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}},138:function(t,e,r){t.exports={default:r(139),__esModule:!0}},139:function(t,e,r){r(143),t.exports=r(3).Object.assign},140:function(t,e,r){"use strict";var n=r(53),o=r(141),i=r(142),a=r(54),u=r(52),c=Object.assign;t.exports=!c||r(24)(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[r]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var r=a(t),c=arguments.length,s=1,l=o.f,f=i.f;c>s;)for(var h,p=u(arguments[s++]),d=l?n(p).concat(l(p)):n(p),m=d.length,v=0;m>v;)f.call(p,h=d[v++])&&(r[h]=p[h]);return r}:c},141:function(t,e){e.f=Object.getOwnPropertySymbols},142:function(t,e){e.f={}.propertyIsEnumerable},143:function(t,e,r){var n=r(14);n(n.S+n.F,"Object",{assign:r(140)})},149:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip-dialog"},[r("div",{staticClass:"tip-content"},[r("p",[t._v(t._s(t.alertText))])])])},staticRenderFns:[]}},151:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"content",data:function(){return{}},props:["alertText"]}},152:function(t,e,r){r(149);var n=r(46)(r(151),r(150),null,null);t.exports=n.exports},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("form",{attrs:{action:"#"}},[r("ul",{staticClass:"form-list border-list"},[r("li",[r("label",[t._v("登录账户")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileNum,expression:"mobileNum"}],attrs:{name:"mobile",maxlength:"11",type:"tel",placeholder:"请输入注册的手机号"},domProps:{value:t.mobileNum},on:{input:function(e){e.target.composing||(t.mobileNum=e.target.value)}}})]),t._v(" "),r("li",[r("label",[t._v("短信验证码")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileCode,expression:"mobileCode"}],attrs:{type:"tel",placeholder:"填写手机验证码",name:"mobileCode",maxlength:"6"},domProps:{value:t.mobileCode},on:{input:function(e){e.target.composing||(t.mobileCode=e.target.value)}}}),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.computedTime,expression:"!computedTime"}],staticClass:"btn-getCode",class:{disbtn:!t.rightMobile},on:{click:function(e){e.preventDefault(),t.getVerifyCode(e)}}},[t._v("获取验证码")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.computedTime,expression:"computedTime"}],staticClass:"btn-getCode disbtn",on:{click:function(e){e.preventDefault(),t.getVerifyCode(e)}}},[t._v("已发送("+t._s(t.computedTime)+"s)")])])]),t._v(" "),r("div",{staticClass:"btn"},[r("a",{staticClass:"btn-theme",on:{click:t.mobileLogin}},[t._v("登录")])])]),t._v(" "),t.showAlertTip?r("alert-tip",{attrs:{alertText:t.alertText}}):t._e()],1)},staticRenderFns:[]}},186:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(132),o=r.n(n),i=r(131),a=r.n(i),u=r(135),c=r.n(u),s=r(152),l=r.n(s),f=r(49),h=r(48);e.default={name:"login",data:function(){return{mobileNum:null,computedTime:0,validate_token:null,mobileCode:null,alertText:"",showAlertTip:!1,arr:[]}},components:{alertTip:l.a},computed:{rightMobile:function(){return/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/.test(this.mobileNum)},rightCode:function(){return/^\d{6}$/gi.test(this.mobileCode)}},methods:c()({},r.i(f.c)(["RECORD_USERINFO"]),r.i(f.b)(["userInfo"]),{getVerifyCode:function(){var t=this;return a()(o.a.mark(function e(){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.rightMobile){e.next=21;break}return t.computedTime=30,t.timer=setInterval(function(){0==--t.computedTime&&clearInterval(t.timer)},1e3),e.next=5,r.i(h.m)(t.mobileNum,"mobile");case 5:if(n=e.sent,!n.message){e.next=11;break}return t.showHideAlert(n.message),e.abrupt("return");case 11:if(n.is_exists){e.next=14;break}return t.showHideAlert("您输入的手机号尚未绑定"),e.abrupt("return");case 14:return e.next=16,r.i(h.n)(t.mobileNum,"mobile");case 16:if(i=e.sent,!i.message){e.next=20;break}return alert("hehe"),e.abrupt("return");case 20:t.validate_token=i.validate_token;case 21:case"end":return e.stop()}},e,t)}))()},mobileLogin:function(){var t=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.rightMobile){e.next=5;break}return t.showHideAlert("手机号码不正确"),e.abrupt("return");case 5:if(t.rightCode){e.next=8;break}return t.showHideAlert("短信验证码不正确"),e.abrupt("return");case 8:return e.next=10,r.i(h.o)(t.mobileCode,t.mobileNum,t.validate_token);case 10:t.arr=e.sent,t.userInfo=t.arr[0],t.userInfo.user_id?(t.RECORD_USERINFO(t.userInfo),t.$router.go(-1)):alert(t.userInfo.message);case 13:case"end":return e.stop()}},e,t)}))()},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}})}}});
//# sourceMappingURL=5.64bcd2871992421d6e1b.js.map