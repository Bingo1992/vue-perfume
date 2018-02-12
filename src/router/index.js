import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Login = r => require.ensure([], () => r(require('views/login/login')), 'login');
const Home = r => require.ensure([], () => r(require('views/home/home')), 'home');
const Cart = r => require.ensure([], () => r(require('views/cart/cart')), 'cart');
const Personal = r => require.ensure([], () => r(require('views/personal/personal')), 'personal');
const OrderList = r => require.ensure([], () => r(require('views/order/orderList')), 'orderList');
const OrderConfirm = r => require.ensure([], () => r(require('views/orderConfirm/orderConfirm')), 'orderConfirm');
const ChooseAddress = r => require.ensure([], () => r(require('views/orderConfirm/chooseAddress')), 'chooseAddress');
const AddAddress = r => require.ensure([], () => r(require('views/orderConfirm/addAddress')), 'addAddress');
const ProDetail = r => require.ensure([], () => r(require('views/product/productDetail')), 'ProDetail');
export default new Router({
  routes: [
    {
     //地址为空时跳转home页面 
      path: '',
      redirect: '/home'//重定向
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      meta:'购物车',
      component: Cart
    },
    {
      path: '/personal',
      name: 'personal',
      meta:'个人中心',
      component: Personal
    },
    {
      path: '/order',
      name: 'order',
      meta:'我的订单',
      component: OrderList
    },
    {
      path: '/orderConfirm',
      // name: 'orderConfirm',
      meta:'确认订单',
      component: OrderConfirm
    },
    {
       path: '/chooseAddress',
        // name: 'chooseAddress',
        meta:'选择地址',
        component: ChooseAddress,
       
    },
    {
       path: '/addAddress',
        // name: 'chooseAddress',
        meta:'添加地址',
        component: AddAddress,
       
    },
    {
      path: '/productDetail',
      name: 'ProDetail',
      meta:'产品详情',
      component: ProDetail
    },
    {
      path: '/login',
      name: 'login',
      meta:'登录页面',
      component: Login
    },
    {path: '*', redirect: '/home'}
  ]
})
