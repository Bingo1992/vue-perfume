import axios from 'axios'
import * as zone from './data/PlaceJson'

// import * as pro from './data/proList'
// import * as ads from './data/address'
// import * as cart from './data/cart'
// import * as order from './data/orderList'
// import * as login from './data/userInfo'
/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
};

// 使用代理
const HOST = '/api';

const fetch = (type,url,data) => {
	// if (process.env.NODE_ENV != 'development') {
		url = HOST+ url;
	// }
	return new Promise((resolve, reject)=> {
	    axios({
	    	method: type,
	    	url: url,
	    	data: data,
	    	headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
      		}
	    }).then(response => {
          resolve(response.data);
        }).catch(error => {
        	reject(error);
        })
	})
};


//开发环境
// if (process.env.NODE_ENV != 'development') {
	 
	export const sendLogin = (params) =>  fetch('post','/userInfo',params);
	export const checkExsis = (params) =>  fetch('post','/checkExsis',params);
	// 商品列表
	export const proList = () => fetch('get','/proList');
	export const proDetail = (params) => fetch('get','/proDetail',params);

	// 订单
	export const orderList = () => fetch('get','/orderList');

	// 购物车
	export const getCartList = () => fetch('get','/cartList');
	export const addCart = (params) => fetch('post','/addCart',params);
	export const delCart = (params) => fetch('post','/delCart',params);
	export const editCart = (params) => fetch('post','/editCart',params);
	
	export const editCheckAll = (params) => fetch('post','/editCheckAll',params);

	// 地址
	export const addAddress = (params) => fetch('post','/addAddress',params);
	export const addressList = (params) => fetch('post','/address',params);
	export const updateAddress = (params) => fetch('post','/updateAddress',params);
	export const delAddress = (params) => fetch('post','/delAddress',params);

	// // 省市区
	export const province = () => setpromise(zone.province);
	export const city = () => setpromise(zone.city);
	export const district = () => setpromise(zone.district);
// }
// else {
	// 商品
	// var proList = () => setpromise(pro.proList);
	// var proDetail = (params) => setpromise(pro.proDetail);
	// // 订单
	// var orderList = () => setpromise(order.orderList);
 //    // 购物车
	// var getCartList = () => setpromise(cart.cartList);
	// var addCart = (params) => setpromise(cart.addCart);
	// var editCart = (params) => setpromise(cart.editCart);
	// var delCart = (params) => setpromise(cart.delCart);
	// var editCheckAll = (params) => setpromise(cart.editCheckAll);
	// // 地址
	// var updateAddress = (params) => setpromise(ads.updateAddress);
	// var delAddress = (params) => setpromise(ads.delAddress);
	// var addAddress = (params) => setpromise(ads.addAddress);
	// var addressList = (params) => setpromise(ads.address);
	// // 用户信息
	// var sendLogin = (code, mobile, validate_token) => setpromise(login.login);	
	// var checkExsis = (code, mobile, validate_token) => setpromise(login.checkExsis);
	// // 省市区
	// var province = () => setpromise(zone.province);
	// var city = () => setpromise(zone.city);
	// var district = () => setpromise(zone.district);
// }

// export{sendLogin,mobileCode,checkExsis,proList,proDetail,orderList,addAddress,addressList,updateAddress,delAddress, getCartList,addCart,delCart,editCart,editCheckAll,province,city,district}