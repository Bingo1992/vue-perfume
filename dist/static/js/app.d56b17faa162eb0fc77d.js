webpackJsonp([7],{42:function(n,t){!function(n,t){var e=n.documentElement,o="orientationchange"in window?"orientationchange":"resize",r=function(){var n=e.clientWidth;n&&(e.style.fontSize=n/320*20+"px")};n.addEventListener&&(t.addEventListener(o,r,!1),n.addEventListener("DOMContentLoaded",r,!1))}(document,window)},43:function(n,t,e){"use strict";var o=e(13),r=e(100);o.a.use(r.a);var i=function(n){return e.e(3).then(function(){return n(e(123))}.bind(null,e)).catch(e.oe)},u=function(n){return e.e(0).then(function(){return n(e(122))}.bind(null,e)).catch(e.oe)},a=function(n){return e.e(1).then(function(){return n(e(121))}.bind(null,e)).catch(e.oe)},c=function(n){return e.e(4).then(function(){return n(e(125))}.bind(null,e)).catch(e.oe)},s=function(n){return e.e(5).then(function(){return n(e(124))}.bind(null,e)).catch(e.oe)},f=function(n){return e.e(2).then(function(){return n(e(126))}.bind(null,e)).catch(e.oe)};t.a=new r.a({routes:[{path:"",redirect:"/home"},{path:"/home",name:"home",component:u},{path:"/cart",name:"cart",meta:"购物车",component:a},{path:"/personal",name:"personal",meta:"个人中心",component:c},{path:"/order",name:"order",meta:"我的订单",component:s},{path:"/productDetail/:id",name:"ProDetail",meta:"产品详情",component:f},{path:"/login",name:"login",meta:"登录页面",component:i}]})},44:function(n,t,e){"use strict";var o=e(13),r=e(49),i=e(60),u=e(58),a=e(59);o.a.use(r.a);var c={items:[],name:"",userInfo:null,login:!1};t.a=new r.a.Store({state:c,mutations:i.a,actions:u.a,getters:a.a})},45:function(n,t){},46:function(n,t){},47:function(n,t,e){e(96);var o=e(48)(e(56),e(99),null,null);n.exports=o.exports},50:function(n,t,e){"use strict";var o=e(51),r=e.n(o),i=e(22),u=e.n(i);e.d(t,"f",function(){return a}),e.d(t,"e",function(){return mobileCode}),e.d(t,"d",function(){return checkExsis}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return s}),e.d(t,"b",function(){return f});var a,c,s,f,d=function(n,t,e){return t="/api/"+t,new r.a(function(o,r){u()({methods:n,url:t,data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){o(n.data)}).catch(function(n){r(n)})})},a=function(n,t,e){return d("post","userInfo.json")},c=function(){return d("get","proList.json")},s=function(n){return d("get","proDetail"+n+".json")},f=function(){return d("get","cart.json")}},56:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},57:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(13),r=e(47),i=e.n(r),u=e(44),a=e(43),c=e(22),s=e.n(c),f=e(45),d=(e.n(f),e(46)),p=(e.n(d),e(42));e.n(p);o.a.config.productionTip=!1,o.a.prototype.$http=s.a,new o.a({el:"#app",router:a.a,store:u.a,axios:s.a,template:"<App/>",components:{App:i.a}})},58:function(n,t,e){"use strict";e(50);t.a={addItem:function(n,t){var e=n.commit;n.state;e("ADD_ITEM",t)},deleteItem:function(n){var t=n.commit;n.state;t("DELETE_ITEM")}}},59:function(n,t,e){"use strict";t.a={getItems:function(n){return n.items}}},60:function(n,t,e){"use strict";var o,r=e(62),i=e.n(r);t.a=(o={},i()(o,"ADD_ITEM",function(n,t){n.items.push(t)}),i()(o,"DELETE_ITEM",function(n){n.items.pop()}),i()(o,"RECORD_USERINFO",function(n,t){n.userInfo=t,n.login=!0;var e=new Date;e.setTime(e.getTime()+2592e6),document.cookie="USERID="+t.user_id+";expires="+e.toGMTString(),document.cookie="SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw;expires="+e.toGMTString()}),o)},96:function(n,t){},99:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}}},[57]);
//# sourceMappingURL=app.d56b17faa162eb0fc77d.js.map