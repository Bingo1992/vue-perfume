webpackJsonp([5],{142:function(t,e,n){n(217);var r=n(52)(n(188),n(236),null,null);t.exports=r.exports},146:function(t,e,n){"use strict";e.__esModule=!0;var r=n(149),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},147:function(t,e,n){"use strict";e.__esModule=!0;var r=n(55),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,a){try{var s=e[i](a),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},148:function(t,e,n){t.exports=n(155)},149:function(t,e,n){t.exports={default:n(150),__esModule:!0}},150:function(t,e,n){n(154),t.exports=n(3).Object.assign},151:function(t,e,n){"use strict";var r=n(57),o=n(152),i=n(153),a=n(58),s=n(56),c=Object.assign;t.exports=!c||n(26)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,l=1,u=o.f,f=i.f;c>l;)for(var v,h=s(arguments[l++]),p=u?r(h).concat(u(h)):r(h),d=p.length,A=0;d>A;)f.call(h,v=p[A++])&&(n[v]=h[v]);return n}:c},152:function(t,e){e.f=Object.getOwnPropertySymbols},153:function(t,e){e.f={}.propertyIsEnumerable},154:function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(151)})},155:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(156),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},156:function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new h(r||[]);return a._invoke=l(t,n,s),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,o,i,a){var s=r(t[n],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&m.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(t,e,n){var o=B;return function(i,a){if(o===k)throw new Error("Generator is already running");if(o===E){if("throw"===i)throw a;return d()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===O)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===B)throw o=E,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=k;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?E:L,l.arg===O)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=E,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===A){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=A,u(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,O;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=A),e.delegate=null,O):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function v(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[g];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=A,e.done=!0,e};return r.next=r}}return{next:d}}function d(){return{value:A,done:!0}}var A,_=Object.prototype,m=_.hasOwnProperty,C="function"==typeof Symbol?Symbol:{},g=C.iterator||"@@iterator",b=C.asyncIterator||"@@asyncIterator",y=C.toStringTag||"@@toStringTag",x="object"==typeof t,w=e.regeneratorRuntime;if(w)return void(x&&(t.exports=w));w=e.regeneratorRuntime=x?t.exports:{},w.wrap=n;var B="suspendedStart",L="suspendedYield",k="executing",E="completed",O={},j={};j[g]=function(){return this};var I=Object.getPrototypeOf,N=I&&I(I(p([])));N&&N!==_&&m.call(N,g)&&(j=N);var R=a.prototype=o.prototype=Object.create(j);i.prototype=R.constructor=a,a.constructor=i,a[y]=i.displayName="GeneratorFunction",w.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},w.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,y in t||(t[y]="GeneratorFunction")),t.prototype=Object.create(R),t},w.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[b]=function(){return this},w.AsyncIterator=c,w.async=function(t,e,r,o){var i=new c(n(t,e,r,o));return w.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(R),R[y]="Generator",R[g]=function(){return this},R.toString=function(){return"[object Generator]"},w.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},w.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=A,this.done=!1,this.delegate=null,this.method="next",this.arg=A,this.tryEntries.forEach(v),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=A)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=A),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),s=m.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),v(n),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;v(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=A),O}}}(function(){return this}()||Function("return this")())},161:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(146),o=n.n(r),i=n(54),a=n(53),s=n(59);e.default={name:"nav-bar",data:function(){return{}},computed:o()({},n.i(i.b)(["userInfo","cartList"]),{cartNum:function(){var t=0;if(this.userInfo)return this.cartList&&this.cartList.forEach(function(e){t+=e.proNum}),t}}),mounted:function(){this.userInfo?this._getCartList():this.INIT_BUYCART()},methods:o()({},n.i(i.c)(["INIT_BUYCART","EDIT_CART"]),{_getCartList:function(){n.i(a.j)().then(function(t){n.i(s.b)("buyCart",t.result)}).then(this.INIT_BUYCART)}})}},162:function(t,e,n){e=t.exports=n(132)(!0),e.push([t.i,'.fixed-bottom{position:fixed;left:0;width:100%;z-index:5;bottom:0}.nav-bar:after{position:absolute;display:block;content:"";top:0;left:0;width:200%;height:200%;pointer-events:none;transform-origin:left top;transform:scale(.5);box-sizing:border-box}.nav-bar{background-color:#f9f9f9}.nav-bar li{padding:4px 0}.nav-bar i{color:#d5dadd;font-size:28px}.nav-bar a{color:#999}.nav-bar:after{border-top:1px solid #e1e1e1}.nav-bar .router-link-active i,.nav-bar .router-link-active p{color:#fe007f}',"",{version:3,sources:["e:/vue/vue-perfume/src/components/Footer.vue"],names:[],mappings:"AACA,cACE,eAAgB,AAChB,OAAQ,AACR,WAAY,AACZ,UAAW,AAGX,QAAU,CAFX,AAID,eACE,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,0BAA2B,AAC3B,oBAAsB,AACtB,qBAAuB,CACxB,AACD,SACE,wBAA0B,CAC3B,AACD,YACI,aAAe,CAClB,AACD,WACI,cAAe,AACf,cAAgB,CACnB,AACD,WACI,UAAY,CACf,AACD,eACI,4BAA8B,CACjC,AACD,8DACE,aAAe,CAChB",file:"Footer.vue",sourcesContent:['\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n}\n.fixed-bottom {\n  bottom: 0;\n}\n.nav-bar:after {\n  position: absolute;\n  display: block;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  pointer-events: none;\n  transform-origin: left top;\n  transform: scale(0.5);\n  box-sizing: border-box;\n}\n.nav-bar {\n  background-color: #f9f9f9;\n}\n.nav-bar li {\n    padding: 4px 0;\n}\n.nav-bar i {\n    color: #d5dadd;\n    font-size: 28px;\n}\n.nav-bar a {\n    color: #999;\n}\n.nav-bar:after {\n    border-top: 1px solid #e1e1e1;\n}\n.nav-bar .router-link-active p, .nav-bar .router-link-active i {\n  color: #fe007f;\n}\n'],sourceRoot:""}])},163:function(t,e,n){var r=n(162);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(133)("2e92e5cc",r,!0)},164:function(t,e,n){n(163);var r=n(52)(n(161),n(165),null,null);t.exports=r.exports},165:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav-bar flex-layout fixed-bottom"},[n("li",[n("router-link",{attrs:{to:"/home"}},[n("i",{staticClass:"icon-home_1"}),t._v(" "),n("p",[t._v("首页")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/cart"}},[n("i",{staticClass:"icon-cart"}),t._v(" "),n("p",[t._v("购物车")]),t._v(" "),t.cartNum&&0!=t.cartNum?n("span",{staticClass:"circlePoint"},[t._v(t._s(t.cartNum))]):t._e()])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/order"}},[n("i",{staticClass:"icon-order"}),t._v(" "),n("p",[t._v("订单")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/personal"}},[n("i",{staticClass:"icon-user_1"}),t._v(" "),n("p",[t._v("我的")])])],1)])},staticRenderFns:[]}},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(148),o=n.n(r),i=n(147),a=n.n(i),s=n(146),c=n.n(s),l=n(164),u=n.n(l),f=n(53),v=n(54);e.default={name:"order",data:function(){return{tabs:["全部","待付款","待收货"],num:0,orderList1:[],orderList2:[],orderList3:[]}},computed:c()({},n.i(v.b)(["userInfo"])),components:{FooterNav:u.a},mounted:function(){this.getOrderList()},methods:{changeTab:function(t){this.num=t},getOrderList:function(){var t=this;return a()(o.a.mark(function e(){var r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(f.k)();case 2:r=e.sent,i=r.result,i.forEach(function(e,n){0==e.statusId?t.orderList1=e.order:1==e.statusId?t.orderList2=e.order:2==e.statusId&&(t.orderList3=e.order)});case 5:case"end":return e.stop()}},e,t)}))()}}}},202:function(t,e,n){e=t.exports=n(132)(!0),e.push([t.i,'.nav-tabs{font-size:12px}.nav-tabs .active{color:#fe007f}.nav-tabs .active:after{display:block;content:"";height:6px;line-height:6px;border-radius:6px;width:6px;text-align:center;background-color:#fe007f;position:absolute;bottom:6px;left:50%;margin-left:-3px}.btn-pay{overflow:hidden;padding:10px}.btn-pay .btn-theme{float:right;width:80px;height:30px;line-height:30px}',"",{version:3,sources:["e:/vue/vue-perfume/src/views/order/orderList.vue"],names:[],mappings:"AACA,UACE,cAAgB,CACjB,AACD,kBACI,aAAe,CAClB,AACD,wBACM,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,yBAA0B,AAC1B,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAkB,CACvB,AACD,SACE,gBAAiB,AACjB,YAAc,CACf,AACD,oBACI,YAAa,AACb,WAAY,AACZ,YAAa,AACb,gBAAkB,CACrB",file:"orderList.vue",sourcesContent:['\n.nav-tabs {\n  font-size: 12px;\n}\n.nav-tabs .active {\n    color: #fe007f;\n}\n.nav-tabs .active:after {\n      display: block;\n      content: "";\n      height: 6px;\n      line-height: 6px;\n      border-radius: 6px;\n      width: 6px;\n      text-align: center;\n      background-color: #fe007f;\n      position: absolute;\n      bottom: 6px;\n      left: 50%;\n      margin-left: -3px;\n}\n.btn-pay {\n  overflow: hidden;\n  padding: 10px;\n}\n.btn-pay .btn-theme {\n    float: right;\n    width: 80px;\n    height: 30px;\n    line-height: 30px;\n}\n'],sourceRoot:""}])},217:function(t,e,n){var r=n(202);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(133)("f80220dc",r,!0)},236:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order banner"},[t.userInfo?t._e():n("div",{staticClass:"nothing"},[n("i",{staticClass:"bg-red icon-gantan"}),t._v(" "),n("p",[t._v("请"),n("router-link",{staticClass:"font-blue lg-font",attrs:{to:"/login"}},[t._v("登录")]),t._v("后查看更多信息")],1)]),t._v(" "),t.userInfo?n("div",[n("div",{staticClass:"fixed-top"},[n("ul",{staticClass:"nav-tabs flex-layout bg-show border-bottom"},t._l(t.tabs,function(e,r){return n("li",{class:{active:r==t.num},on:{click:function(e){t.changeTab(r)}}},[t._v(t._s(e))])}))]),t._v(" "),n("div",{staticClass:"banner-bt"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:0==t.num,expression:"num == 0"}]},[0==t.orderList1.length?n("li",{staticClass:"nothing"},[n("i",{staticClass:"icon-order"}),t._v(" "),n("h4",[t._v("暂无相关订单")])]):t._e(),t._v(" "),t._l(t.orderList1,function(e,r){return n("li",{staticClass:"border-list"},[n("label",{staticClass:"list-title list-box border-bottom"},[n("span",{staticClass:"list-info"},[n("h4",[t._v("订单号："),n("span",{staticClass:"font-gray"},[t._v(t._s(e.ordNum))])])]),t._v(" "),n("span",{staticClass:"font-theme"},[t._v(t._s(e.status))])]),t._v(" "),n("ul",t._l(e.list,function(e,r){return n("li",{staticClass:"list-box"},[n("img",{staticClass:"list-img",attrs:{src:e.images}}),t._v(" "),n("div",{staticClass:"list-info"},[n("h4",{staticClass:"nowrap-2"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v("已选择："+t._s(e.attr))]),t._v(" "),n("p",[t._v("\n                              数量："),n("span",{staticClass:"num"},[t._v(t._s(e.count))]),t._v("\n                              价格："),n("span",{staticClass:"font-theme"},[t._v("￥ "),n("span",[t._v(t._s(e.price))])])])])])})),t._v(" "),"待付款"==e.status?n("div",{staticClass:"btn-pay"},[n("router-link",{staticClass:"btn-theme",attrs:{to:{path:"/orderPay"}}},[t._v("去付款")])],1):t._e(),t._v(" "),"待收货"==e.status?n("div",{staticClass:"btn-pay"},[n("div",{staticClass:"btn-theme"},[t._v("确认收货")])]):t._e()])})],2),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:1==t.num,expression:"num == 1"}]},[0==t.orderList2.length?n("li",{staticClass:"nothing"},[n("i",{staticClass:"icon-order"}),t._v(" "),n("h4",[t._v("暂无相关订单")])]):t._e(),t._v(" "),t._l(t.orderList2,function(e,r){return n("li",{staticClass:"border-list"},[n("label",{staticClass:"list-title list-box border-bottom"},[n("span",{staticClass:"list-info"},[n("h4",[t._v("订单号："),n("span",{staticClass:"font-gray"},[t._v(t._s(e.ordNum))])])]),t._v(" "),n("span",{staticClass:"font-theme"},[t._v(t._s(e.status))])]),t._v(" "),n("ul",t._l(e.list,function(e,r){return n("li",{staticClass:"list-box"},[n("img",{staticClass:"list-img",attrs:{src:e.images}}),t._v(" "),n("div",{staticClass:"list-info"},[n("h4",{staticClass:"nowrap-2"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v("已选择："+t._s(e.attr))]),t._v(" "),n("p",[t._v("\n                              数量："),n("span",{staticClass:"num"},[t._v(t._s(e.count))]),t._v("\n                              价格："),n("span",{staticClass:"font-theme"},[t._v("￥ "),n("span",[t._v(t._s(e.price))])])])])])})),t._v(" "),n("div",{staticClass:"btn-pay"},[n("router-link",{staticClass:"btn-theme",attrs:{to:{path:"/orderPay"}}},[t._v("去付款")])],1)])})],2),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:2==t.num,expression:"num == 2"}]},[0==t.orderList3.length?n("li",{staticClass:"nothing"},[n("i",{staticClass:"icon-order"}),t._v(" "),n("h4",[t._v("暂无相关订单")])]):t._e(),t._v(" "),t._l(t.orderList3,function(e,r){return n("li",{staticClass:"border-list"},[n("label",{staticClass:"list-title list-box border-bottom"},[n("span",{staticClass:"list-info"},[n("h4",[t._v("订单号："),n("span",{staticClass:"font-gray"},[t._v(t._s(e.ordNum))])])]),t._v(" "),n("span",{staticClass:"font-theme"},[t._v(t._s(t.itm3.status))])]),t._v(" "),n("ul",t._l(e.list,function(r,o){return n("li",{staticClass:"list-box"},[n("img",{staticClass:"list-img",attrs:{src:r.images}}),t._v(" "),n("div",{staticClass:"list-info"},[n("h4",{staticClass:"nowrap-2"},[t._v(t._s(r.title))]),t._v(" "),n("p",[t._v("已选择："+t._s(e.attr))]),t._v(" "),n("p",[t._v("\n                              数量："),n("span",{staticClass:"num"},[t._v(t._s(r.count))]),t._v("\n                              价格："),n("span",{staticClass:"font-theme"},[t._v("￥ "),n("span",[t._v(t._s(r.price))])])])])])})),t._v(" "),t._m(0,!0)])})],2)])]):t._e(),t._v(" "),n("footer-nav")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-pay"},[n("div",{staticClass:"btn-theme"},[t._v("确认收货")])])}]}}});
//# sourceMappingURL=5.50a3891320242ca86664.js.map