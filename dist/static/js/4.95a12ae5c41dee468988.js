webpackJsonp([4],{125:function(t,e,r){r(166);var n=r(46)(r(187),r(179),null,null);t.exports=n.exports},131:function(t,e,r){"use strict";e.__esModule=!0;var n=r(50),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,a){try{var s=e[o](a),c=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},132:function(t,e,r){t.exports=r(133)},133:function(t,e,r){(function(e){var n="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(134),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}).call(e,r(47))},134:function(t,e,r){(function(e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),s=new f(n||[]);return a._invoke=l(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function r(e,i,o,a){var s=n(t[e],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,o,a)},function(t){r("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},a)}a(s.arg)}function i(t,e){function n(){return new Promise(function(n,i){r(t,e,n,i)})}return o=o?o.then(n,n):n()}"object"==typeof e.process&&e.process.domain&&(r=e.process.domain.bind(r));var o;this._invoke=i}function l(t,e,r){var i=E;return function(o,a){if(i===D)throw new Error("Generator is already running");if(i===j){if("throw"===o)throw a;return v()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=u(s,r);if(c){if(c===L)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===E)throw i=j,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=D;var l=n(t,e,r);if("normal"===l.type){if(i=r.done?j:N,l.arg===L)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=j,r.method="throw",r.arg=l.arg)}}}function u(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,u(t,e),"throw"===e.method))return L;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,L;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,L):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,L)}function d(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(d,this),this.reset(!0)}function h(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,g=Object.prototype,y=g.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",_=w.asyncIterator||"@@asyncIterator",b=w.toStringTag||"@@toStringTag",k="object"==typeof t,C=e.regeneratorRuntime;if(C)return void(k&&(t.exports=C));C=e.regeneratorRuntime=k?t.exports:{},C.wrap=r;var E="suspendedStart",N="suspendedYield",D="executing",j="completed",L={},P={};P[x]=function(){return this};var V=Object.getPrototypeOf,O=V&&V(V(h([])));O&&O!==g&&y.call(O,x)&&(P=O);var A=a.prototype=i.prototype=Object.create(P);o.prototype=A.constructor=a,a.constructor=o,a[b]=o.displayName="GeneratorFunction",C.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},C.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(A),t},C.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[_]=function(){return this},C.AsyncIterator=c,C.async=function(t,e,n,i){var o=new c(r(t,e,n,i));return C.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(A),A[b]="Generator",A[x]=function(){return this},A.toString=function(){return"[object Generator]"},C.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},C.values=h,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,L):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),L},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),L}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;p(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),L}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,r(47))},136:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},137:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[r("div",{staticClass:"loading-inner"},[r("div",{staticClass:"ball-spin-fade-loader"},[r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div")])])])}]}},144:function(t,e,r){r(136);var n=r(46)(null,r(137),"data-v-462b25ae",null);t.exports=n.exports},149:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip-dialog"},[r("div",{staticClass:"tip-content"},[r("p",[t._v(t._s(t.alertText))])])])},staticRenderFns:[]}},151:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"content",data:function(){return{}},props:["alertText"]}},152:function(t,e,r){r(149);var n=r(46)(r(151),r(150),null,null);t.exports=n.exports},159:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},166:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slideDialog"},[r("div",{class:["Procity-list","dialog-list",{"more-wp-open":t.openCity}]},[r("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[r("i",{staticClass:"icon-left"}),t._v(" "),r("h4",[t._v("选择城市")])]),t._v(" "),r("ul",{staticClass:"selProvince dialog-start-list"},t._l(t.province,function(e){return r("li",{key:e.ProID,on:{click:function(r){t.getCity(e.ProID,e.ProName)}}},[t._v(t._s(e.ProName))])})),t._v(" "),r("ul",{staticClass:"selCity dialog-end-list"},t._l(t.city,function(e){return r("li",{key:e.CityID,on:{click:function(r){t.getDistrict(e.CityID,e.CityName)}}},[t._v(t._s(e.CityName))])}))]),t._v(" "),r("div",{class:["zone-list","dialog-list",{"more-wp-open":t.openDis}]},[r("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[r("i",{staticClass:"icon-left"}),t._v(" "),r("h4",[t._v("选择地区")])]),t._v(" "),r("ul",{staticClass:"selDistrict dialog-end-list whole-list"},t._l(t.zone,function(e){return r("li",{key:e.CityID,on:{click:function(r){t.getDisName(e.DisName)}}},[t._v(t._s(e.DisName))])}))])])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addAddress"},[r("ul",{staticClass:"form-list border-list"},[r("li",[r("label",[t._v("收货人")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.name,expression:"ads.name"}],attrs:{type:"text",placeholder:"请输入收货人姓名"},domProps:{value:t.ads.name},on:{input:function(e){e.target.composing||(t.ads.name=e.target.value)}}})]),t._v(" "),r("li",[r("label",[t._v("联系电话")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.mobile,expression:"ads.mobile"}],attrs:{type:"tel",placeholder:"请输入联系电话"},domProps:{value:t.ads.mobile},on:{input:function(e){e.target.composing||(t.ads.mobile=e.target.value)}}})]),t._v(" "),r("li",{staticClass:"btn-city",on:{click:t.showCityDialog}},[r("label",[t._v("所在城市")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.cityVal,expression:"ads.cityVal"}],staticClass:"cityValue nowrap",attrs:{type:"text",placeholder:"选择城市",readonly:""},domProps:{value:t.ads.cityVal},on:{input:function(e){e.target.composing||(t.ads.cityVal=e.target.value)}}}),t._v(" "),r("i",{staticClass:"icon-right"})]),t._v(" "),r("li",{staticClass:"btn-zone",on:{click:t.showDisDialog}},[r("label",[t._v("所在地区")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.disVal,expression:"ads.disVal"}],staticClass:"zoneValue",attrs:{type:"text",placeholder:"选择区县",readonly:""},domProps:{value:t.ads.disVal},on:{input:function(e){e.target.composing||(t.ads.disVal=e.target.value)}}}),t._v(" "),r("i",{staticClass:"icon-right"})]),t._v(" "),r("li",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ads.detailVal,expression:"ads.detailVal"}],staticClass:"list-info",attrs:{cols:"30",rows:"3",placeholder:"详细地址"},domProps:{value:t.ads.detailVal},on:{input:function(e){e.target.composing||(t.ads.detailVal=e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"btn"},[r("p",{staticClass:"btn-theme",on:{click:t.saveAddress}},[t._v("保存")])]),t._v(" "),r("select-dialog",{attrs:{"open-city":t.openCity,"open-dis":t.openDis,zone:t.district},on:{closeDialog:t.closeDialog,cityName:t.cityName,disName:t.disName}}),t._v(" "),r("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{alertText:t.alertText}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"list-box",staticStyle:{margin:"0"}},[r("div",{staticClass:"checkbox"},[r("input",{attrs:{type:"checkbox"}}),t._v(" "),r("i",{staticClass:"icon-hook"})]),t._v(" "),r("span",{staticClass:"list-info"},[t._v("设为默认地址")])])}]}},183:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(132),i=r.n(n),o=r(131),a=r.n(o),s=r(48);e.default={name:"slideDialog",data:function(){return{province:[],city:[],zone:[],cityName:"",disName:""}},props:["openCity","openDis"],mounted:function(){this.getProvince()},methods:{getProvince:function(){var t=this;return a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(s.c)();case 2:t.province=e.sent;case 3:case"end":return e.stop()}},e,t)}))()},getCity:function(t,e){var n=this;return a()(i.a.mark(function o(){var a,c;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n.cityName=e,i.next=3,r.i(s.d)();case 3:a=i.sent,c=[],a.forEach(function(e){e.ProID===t&&c.push(e)}),n.city=c;case 7:case"end":return i.stop()}},o,n)}))()},getDistrict:function(t,e){var n=this;return a()(i.a.mark(function o(){var a,c;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n.cityName!=e&&(n.cityName+=e),i.next=3,r.i(s.e)();case 3:a=i.sent,c=[],a.forEach(function(e){e.CityID===t&&c.push(e)}),n.zone=c,n.$emit("closeDialog"),n.$emit("cityName",n.cityName),n.$emit("disName","");case 10:case"end":return i.stop()}},o,n)}))()},closeDialog:function(){this.$emit("closeDialog")},getDisName:function(t){this.disName=t,this.$emit("disName",this.disName),this.$emit("closeDialog")}}}},187:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(200),i=r.n(n),o=r(152),a=r.n(o),s=(r(49),r(144)),c=r.n(s);e.default={name:"addAddress",data:function(){return{showLoading:!0,openCity:!1,openDis:!1,district:[],alertText:"",showAlertTip:!1,ads:{name:"",mobile:"",cityVal:"",disVal:"",detailVal:""}}},components:{loading:c.a,selectDialog:i.a,alertTip:a.a},computed:{rightMobile:function(){return/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/.test(this.ads.mobile)}},methods:{saveAddress:function(){this.ads.name?this.rightMobile?this.ads.cityVal?this.ads.disVal?this.ads.cityVal?this.ads.detailVal?this.$router.go(-1):this.showHideAlert("详细地址不能为空"):this.showHideAlert("城市不能为空"):this.showHideAlert("县区不能为空"):this.showHideAlert("城市不能为空"):this.showHideAlert("手机号不正确"):this.showHideAlert("收货人不能为空")},showCityDialog:function(){this.openCity=!0},showDisDialog:function(){this.openDis=!0},closeDialog:function(){this.openCity=!1,this.openDis=!1},cityName:function(t){this.ads.cityVal=t},disName:function(t){this.ads.disVal=t},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}}}},200:function(t,e,r){r(159);var n=r(46)(r(183),r(171),null,null);t.exports=n.exports}});
//# sourceMappingURL=4.95a12ae5c41dee468988.js.map