webpackJsonp([4],{128:function(t,e,r){r(172);var n=r(46)(r(197),r(185),null,null);t.exports=n.exports},139:function(t,e,r){"use strict";e.__esModule=!0;var n=r(50),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(a,o){try{var s=e[a](o),c=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},140:function(t,e,r){t.exports=r(147)},147:function(t,e,r){(function(e){var n="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(148),i)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}).call(e,r(47))},148:function(t,e,r){(function(e){!function(e){"use strict";function r(t,e,r,n){var a=e&&e.prototype instanceof i?e:i,o=Object.create(a.prototype),s=new p(n||[]);return o._invoke=l(t,r,s),o}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function o(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function r(e,i,a,o){var s=n(t[e],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,a,o)},function(t){r("throw",t,a,o)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},o)}o(s.arg)}function i(t,e){function n(){return new Promise(function(n,i){r(t,e,n,i)})}return a=a?a.then(n,n):n()}"object"==typeof e.process&&e.process.domain&&(r=e.process.domain.bind(r));var a;this._invoke=i}function l(t,e,r){var i=C;return function(a,o){if(i===N)throw new Error("Generator is already running");if(i===j){if("throw"===a)throw o;return v()}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var c=u(s,r);if(c){if(c===L)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===C)throw i=j,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=N;var l=n(t,e,r);if("normal"===l.type){if(i=r.done?j:E,l.arg===L)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=j,r.method="throw",r.arg=l.arg)}}}function u(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,u(t,e),"throw"===e.method))return L;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,L;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,L):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,L)}function d(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(d,this),this.reset(!0)}function h(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,g=Object.prototype,y=g.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",_=w.toStringTag||"@@toStringTag",k="object"==typeof t,D=e.regeneratorRuntime;if(D)return void(k&&(t.exports=D));D=e.regeneratorRuntime=k?t.exports:{},D.wrap=r;var C="suspendedStart",E="suspendedYield",N="executing",j="completed",L={},V={};V[x]=function(){return this};var P=Object.getPrototypeOf,A=P&&P(P(h([])));A&&A!==g&&y.call(A,x)&&(V=A);var O=o.prototype=i.prototype=Object.create(V);a.prototype=O.constructor=o,o.constructor=a,o[_]=a.displayName="GeneratorFunction",D.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},D.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,o):(t.__proto__=o,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(O),t},D.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[b]=function(){return this},D.AsyncIterator=c,D.async=function(t,e,n,i){var a=new c(r(t,e,n,i));return D.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},s(O),O[_]="Generator",O[x]=function(){return this},O.toString=function(){return"[object Generator]"},D.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},D.values=h,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var o=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,L):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),L},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),f(r),L}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;f(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),L}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,r(47))},149:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[r("div",{staticClass:"loading-inner"},[r("div",{staticClass:"ball-spin-fade-loader"},[r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div")])])])}]}},151:function(t,e,r){r(149);var n=r(46)(null,r(150),"data-v-462b25ae",null);t.exports=n.exports},156:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},157:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip-dialog"},[r("div",{staticClass:"tip-content"},[r("p",[t._v(t._s(t.alertText))])])])},staticRenderFns:[]}},158:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"content",data:function(){return{}},props:["alertText"]}},159:function(t,e,r){r(156);var n=r(46)(r(158),r(157),null,null);t.exports=n.exports},170:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},172:function(t,e){throw new Error('Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (E:\\vue\\vue-perfume\\node_modules\\._extract-text-webpack-plugin@2.1.2@extract-text-webpack-plugin\\loader.js:25:9)')},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slideDialog"},[r("div",{class:["Procity-list","dialog-list",{"more-wp-open":t.openCity}]},[r("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[r("i",{staticClass:"icon-left"}),t._v(" "),r("h4",[t._v("选择城市")])]),t._v(" "),r("ul",{staticClass:"selProvince dialog-start-list"},t._l(t.province,function(e){return r("li",{key:e.ProID,on:{click:function(r){t.getCity(e.ProID,e.ProName)}}},[t._v(t._s(e.ProName))])})),t._v(" "),r("ul",{staticClass:"selCity dialog-end-list"},t._l(t.city,function(e){return r("li",{key:e.CityID,on:{click:function(r){t.getDistrict(e.CityID,e.CityName)}}},[t._v(t._s(e.CityName))])}))]),t._v(" "),r("div",{class:["zone-list","dialog-list",{"more-wp-open":t.openDis}]},[r("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[r("i",{staticClass:"icon-left"}),t._v(" "),r("h4",[t._v("选择地区")])]),t._v(" "),r("ul",{staticClass:"selDistrict dialog-end-list whole-list"},t._l(t.zone,function(e){return r("li",{key:e.CityID,on:{click:function(r){t.getDisName(e.DisName)}}},[t._v(t._s(e.DisName))])}))])])},staticRenderFns:[]}},185:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addAddress"},[r("ul",{staticClass:"form-list border-list"},[r("li",[r("label",[t._v("收货人")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.name,expression:"ads.name"}],attrs:{type:"text",placeholder:"请输入收货人姓名"},domProps:{value:t.ads.name},on:{input:function(e){e.target.composing||(t.ads.name=e.target.value)}}})]),t._v(" "),r("li",[r("label",[t._v("联系电话")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.mobile,expression:"ads.mobile"}],attrs:{type:"tel",placeholder:"请输入联系电话"},domProps:{value:t.ads.mobile},on:{input:function(e){e.target.composing||(t.ads.mobile=e.target.value)}}})]),t._v(" "),r("li",{staticClass:"btn-city",on:{click:t.showCityDialog}},[r("label",[t._v("所在城市")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.cityVal,expression:"ads.cityVal"}],staticClass:"cityValue nowrap",attrs:{type:"text",placeholder:"选择城市",readonly:""},domProps:{value:t.ads.cityVal},on:{input:function(e){e.target.composing||(t.ads.cityVal=e.target.value)}}}),t._v(" "),r("i",{staticClass:"icon-right"})]),t._v(" "),r("li",{staticClass:"btn-zone",on:{click:t.showDisDialog}},[r("label",[t._v("所在地区")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.disVal,expression:"ads.disVal"}],staticClass:"zoneValue",attrs:{type:"text",placeholder:"选择区县",readonly:""},domProps:{value:t.ads.disVal},on:{input:function(e){e.target.composing||(t.ads.disVal=e.target.value)}}}),t._v(" "),r("i",{staticClass:"icon-right"})]),t._v(" "),r("li",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ads.detailVal,expression:"ads.detailVal"}],staticClass:"list-info",attrs:{cols:"30",rows:"3",placeholder:"详细地址"},domProps:{value:t.ads.detailVal},on:{input:function(e){e.target.composing||(t.ads.detailVal=e.target.value)}}})])]),t._v(" "),r("label",{staticClass:"list-box",staticStyle:{margin:"0"}},[r("div",{staticClass:"checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.whetherDefault,expression:"whetherDefault"}],attrs:{type:"checkbox",value:"isDefault"},domProps:{checked:Array.isArray(t.whetherDefault)?t._i(t.whetherDefault,"isDefault")>-1:t.whetherDefault},on:{change:t.check,__c:function(e){var r=t.whetherDefault,n=e.target,i=!!n.checked;if(Array.isArray(r)){var a=t._i(r,"isDefault");i?a<0&&(t.whetherDefault=r.concat("isDefault")):a>-1&&(t.whetherDefault=r.slice(0,a).concat(r.slice(a+1)))}else t.whetherDefault=i}}}),t._v(" "),r("i",{staticClass:"icon-hook"})]),t._v(" "),r("span",{staticClass:"list-info"},[t._v("设为默认地址")])]),t._v(" "),r("div",{staticClass:"btn"},[r("p",{staticClass:"btn-theme",on:{click:function(e){t.saveAddress({addID:t.addressId,name:t.ads.name,mobile:t.ads.mobile,address_detail:t.ads.cityVal+" "+t.ads.disVal+" "+t.ads.detailVal,userDefault:t.flag})}}},[t._v("保存")])]),t._v(" "),r("select-dialog",{attrs:{"open-city":t.openCity,"open-dis":t.openDis,zone:t.district},on:{closeDialog:t.closeDialog,cityName:t.cityName,disName:t.disName}}),t._v(" "),r("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{alertText:t.alertText}})],1)},staticRenderFns:[]}},195:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(140),i=r.n(n),a=r(139),o=r.n(a),s=r(48);e.default={name:"slideDialog",data:function(){return{province:[],city:[],zone:[],cityName:"",disName:""}},props:["openCity","openDis"],mounted:function(){this.getProvince()},methods:{getProvince:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(s.g)();case 2:t.province=e.sent;case 3:case"end":return e.stop()}},e,t)}))()},getCity:function(t,e){var n=this;return o()(i.a.mark(function a(){var o,c;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n.cityName=e,i.next=3,r.i(s.h)();case 3:o=i.sent,c=[],o.forEach(function(e){e.ProID===t&&c.push(e)}),n.city=c;case 7:case"end":return i.stop()}},a,n)}))()},getDistrict:function(t,e){var n=this;return o()(i.a.mark(function a(){var o,c;return i.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n.cityName!=e&&(n.cityName+=e),i.next=3,r.i(s.i)();case 3:o=i.sent,c=[],o.forEach(function(e){e.CityID===t&&c.push(e)}),n.zone=c,n.$emit("closeDialog"),n.$emit("cityName",n.cityName),n.$emit("disName","");case 10:case"end":return i.stop()}},a,n)}))()},closeDialog:function(){this.$emit("closeDialog")},getDisName:function(t){this.disName=t,this.$emit("disName",this.disName),this.$emit("closeDialog")}}}},197:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(140),i=r.n(n),a=r(139),o=r.n(a),s=r(213),c=r.n(s),l=r(159),u=r.n(l),d=(r(49),r(151)),f=r.n(d),p=r(48);e.default={name:"addAddress",data:function(){return{showLoading:!0,openCity:!1,openDis:!1,district:[],alertText:"",showAlertTip:!1,whetherDefault:"",flag:!1,addressId:"",ads:{name:"",mobile:"",cityVal:"",disVal:"",detailVal:""}}},mounted:function(){this.initData()},components:{loading:f.a,selectDialog:c.a,alertTip:u.a},computed:{rightMobile:function(){return/^(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/.test(this.ads.mobile)}},methods:{initData:function(){var t=this;return o()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.addressId=t.$route.query.addressId,!t.addressId){e.next=6;break}return e.next=4,r.i(p.c)();case 4:n=e.sent,n.forEach(function(e,r){if(e.addID==t.addressId){t.ads.name=e.name,t.ads.mobile=e.mobile;var n=e.address_detail.split(" ");t.ads.cityVal=n[0],t.ads.disVal=n[1],t.ads.detailVal=n[2],e.userDefault&&(t.whetherDefault="isDefault",t.flag=!0)}});case 6:case"end":return e.stop()}},e,t)}))()},saveAddress:function(t){var e=this;return o()(i.a.mark(function n(){var a,o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.ads.name){n.next=4;break}e.showHideAlert("收货人不能为空"),n.next=36;break;case 4:if(e.rightMobile){n.next=8;break}e.showHideAlert("手机号不正确"),n.next=36;break;case 8:if(e.ads.cityVal){n.next=12;break}e.showHideAlert("城市不能为空"),n.next=36;break;case 12:if(e.ads.disVal){n.next=16;break}e.showHideAlert("县区不能为空"),n.next=36;break;case 16:if(e.ads.cityVal){n.next=20;break}e.showHideAlert("城市不能为空"),n.next=36;break;case 20:if(e.ads.detailVal){n.next=24;break}e.showHideAlert("详细地址不能为空"),n.next=36;break;case 24:if(!e.addressId){n.next=30;break}return n.next=27,r.i(p.e)(t);case 27:a=n.sent,n.next=34;break;case 30:return delete t.addID,n.next=33,r.i(p.f)(t);case 33:o=n.sent;case 34:console.log(t),e.$router.go(-1);case 36:case"end":return n.stop()}},n,e)}))()},check:function(){this.whetherDefault?this.flag=!0:this.flag=!1},showCityDialog:function(){this.openCity=!0},showDisDialog:function(){this.openDis=!0},closeDialog:function(){this.openCity=!1,this.openDis=!1},cityName:function(t){this.ads.cityVal=t},disName:function(t){this.ads.disVal=t},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}}}},213:function(t,e,r){r(170);var n=r(46)(r(195),r(183),null,null);t.exports=n.exports}});
//# sourceMappingURL=4.8a4b9de95ddb3cfe6df4.js.map