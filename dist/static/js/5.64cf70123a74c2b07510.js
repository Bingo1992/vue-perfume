webpackJsonp([5],{121:function(n,t,e){e(174);var o=e(46)(e(155),e(187),null,null);n.exports=o.exports},124:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nav-bar",data:function(){return{}}}},134:function(n,t,e){t=n.exports=e(116)(!0),t.push([n.i,'.fixed-bottom{position:fixed;left:0;width:100%;z-index:5;bottom:0}.nav-bar:after{position:absolute;display:block;content:"";top:0;left:0;width:200%;height:200%;pointer-events:none;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box}.nav-bar{background-color:#f9f9f9}.nav-bar li{-webkit-box-orient:vertical;padding:4px 0}.nav-bar i{color:#d5dadd;font-size:28px}.nav-bar a{color:#999}.nav-bar:after{border-top:1px solid #e1e1e1}.router-link-active i,.router-link-active p{color:#fe007f}',"",{version:3,sources:["e:/vue/vue-perfume/src/components/Footer.vue"],names:[],mappings:"AACA,cACE,eAAgB,AAChB,OAAQ,AACR,WAAY,AACZ,UAAW,AAGX,QAAU,CAFX,AAID,eACE,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,kCAAmC,AACnC,0BAA2B,AAC3B,4BAA8B,AAC9B,oBAAsB,AACtB,qBAAuB,CACxB,AACD,SACE,wBAA0B,CAC3B,AACD,YACI,4BAA6B,AAC7B,aAAe,CAClB,AACD,WACI,cAAe,AACf,cAAgB,CACnB,AACD,WACI,UAAY,CACf,AACD,eACI,4BAA8B,CACjC,AACD,4CACE,aAAe,CAChB",file:"Footer.vue",sourcesContent:['\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n}\n.fixed-bottom {\n  bottom: 0;\n}\n.nav-bar:after {\n  position: absolute;\n  display: block;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  pointer-events: none;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  box-sizing: border-box;\n}\n.nav-bar {\n  background-color: #f9f9f9;\n}\n.nav-bar li {\n    -webkit-box-orient: vertical;\n    padding: 4px 0;\n}\n.nav-bar i {\n    color: #d5dadd;\n    font-size: 28px;\n}\n.nav-bar a {\n    color: #999;\n}\n.nav-bar:after {\n    border-top: 1px solid #e1e1e1;\n}\n.router-link-active p, .router-link-active i {\n  color: #fe007f;\n}\n'],sourceRoot:""}])},135:function(n,t,e){var o=e(134);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(117)("52111c10",o,!0)},138:function(n,t,e){e(135);var o=e(46)(e(124),e(139),null,null);n.exports=o.exports},139:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ul",{staticClass:"nav-bar flex-layout fixed-bottom"},[e("li",[e("router-link",{attrs:{to:"/home"}},[e("i",{staticClass:"icon-home_1"}),n._v(" "),e("p",[n._v("首页")])])],1),n._v(" "),e("li",[e("router-link",{attrs:{to:"/cart"}},[e("i",{staticClass:"icon-cart"}),n._v(" "),e("p",[n._v("购物车")])])],1),n._v(" "),e("li",[e("router-link",{attrs:{to:"/order"}},[e("i",{staticClass:"icon-order"}),n._v(" "),e("p",[n._v("订单")])])],1),n._v(" "),e("li",[e("router-link",{attrs:{to:"/personal"}},[e("i",{staticClass:"icon-user_1"}),n._v(" "),e("p",[n._v("我的")])])],1)])},staticRenderFns:[]}},155:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(138),r=e.n(o);t.default={name:"order",data:function(){return{msg:"I am order"}},components:{FooterNav:r.a}}},164:function(n,t,e){t=n.exports=e(116)(!0),t.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"orderList.vue",sourceRoot:""}])},174:function(n,t,e){var o=e(164);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(117)("858ad754",o,!0)},187:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"order banner"},[e("h1",[n._v(n._s(n.msg))]),n._v(" "),e("footer-nav")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.64cf70123a74c2b07510.js.map