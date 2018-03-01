import Vue from 'vue'
import Router from 'vue-router'

const Login = r => require.ensure([], () => r(require('views/login/login')), 'login');
const Home = r => require.ensure([], () => r(require('views/home/home')), 'home');
const Cart = r => require.ensure([], () => r(require('views/cart/cart')), 'cart');
const Personal = r => require.ensure([], () => r(require('views/personal/personal')), 'personal');
const OrderList = r => require.ensure([], () => r(require('views/order/orderList')), 'orderList');
const OrderConfirm = r => require.ensure([], () => r(require('views/orderConfirm/orderConfirm')), 'orderConfirm');
const OrderPay = r => require.ensure([], () => r(require('views/orderConfirm/orderPay')), 'orderPay');
const ChooseAddress = r => require.ensure([], () => r(require('views/address/chooseAddress')), 'chooseAddress');
const AddAddress = r => require.ensure([], () => r(require('views/address/children/addAddress')), 'addAddress');
const AddressManage = r => require.ensure([], () => r(require('views/address/addressManage')), 'addressManage');
const ProDetail = r => require.ensure([], () => r(require('views/product/productDetail')), 'proDetail');

Vue.use(Router)
export default new Router({
  routes: [
    {
     //地址为空时跳转home页面 
      path: '',
      redirect: '/home'//重定向
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      meta:'购物车',
      component: Cart
    },
    {
      path: '/personal',
      meta:'个人中心',
      component: Personal
    },
    {
      path: '/chooseAddress',
      meta:'选择地址',
      component: ChooseAddress,
      children:[{
        path: 'addAddress',
        meta:'添加地址',
        component: AddAddress,
      }] 
    },
    {
      path: '/addressManage',
      meta:'地址管理',
      component: AddressManage,
      children:[{
        path: 'addAddress',
        meta:'添加地址',
        component: AddAddress,
      }]
    },
    {
      path: '/order',
      meta:'我的订单',
      component: OrderList
    },
    {
      path: '/orderConfirm',
      meta:'确认订单',
      component: OrderConfirm
    },
    {
      path: '/orderPay',
      meta:'订单支付',
      component: OrderPay
    },
    {
      path: '/productDetail',
      meta:'产品详情',
      component: ProDetail
    },
    {
      path: '/login',
      meta:'登录页面',
      component: Login
    }
  ]
})
