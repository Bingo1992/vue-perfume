import axios from 'axios'
import * as zone from './data/PlaceJson'

import * as pro from './data/proList'
import * as ads from './data/address'
import * as cart from './data/cart'
import * as order from './data/orderList'
import * as login from './data/userInfo'
/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
};

// 使用代理
const HOST = '/api/';

const fetch = (type,url,data) => {
	if (process.env.NODE_ENV != 'development') {
		url = HOST+ url;
	}
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
        // axios.get(url)
	    //     .then(response => {
	    //       resolve(response.data);
	    //     }).catch(error => {
	    //     	reject(error);
	    //     })
	})
};


//开发环境
if (process.env.NODE_ENV != 'development') {
	// // 编译环境
	// var sendLogin = (code, mobile, validate_token) =>  fetch('post','./static/json/userInfo');
	// // 商品列表
	// var proList = () => fetch('get','./static/json/proList');

	// var proDetail = (params) => fetch('get','./static/json/proDetail',params);
	// // 订单
	// var orderList = () => fetch('get','./static/json/orderList');

	// // 购物车
	// var getCartList = () => fetch('get','./static/json/cart');
	// var addCart = (params) => fetch('post','./static/json/addCart',params);
	// var delCart = (params) => fetch('post','./static/json/delCart',params);
	// var editCart = (params) => fetch('post','./static/json/editCart',params);
	
	// var editCheckAll = (params) => fetch('post','./static/json/editCheckAll',params);

	// // 地址
	// var addAddress = (params) => fetch('post','./static/json/addAddress',params);
	// var addressList = (params) => fetch('post','./static/json/address',params);

}
else {
	// 商品
	var proList = () => setpromise(pro.proList);
	var proDetail = (params) => setpromise(pro.proDetail);
	// 订单
	var orderList = () => setpromise(order.orderList);
    // 购物车
	var getCartList = () => setpromise(cart.cartList);
	var addCart = (params) => setpromise(cart.addCart);
	var editCart = (params) => setpromise(cart.editCart);
	var delCart = (params) => setpromise(cart.delCart);
	var editCheckAll = (params) => setpromise(cart.editCheckAll);
	// 地址
	var updateAddress = (params) => setpromise(ads.updateAddress);
	var delAddress = (params) => setpromise(ads.delAddress);
	var addAddress = (params) => setpromise(ads.addAddress);
	var addressList = (params) => setpromise(ads.address);
	// 用户信息
	var sendLogin = (code, mobile, validate_token) => setpromise(login.login);	
	var checkExsis = (code, mobile, validate_token) => setpromise(login.checkExsis);
	// 省市区
	var province = () => setpromise(zone.province);
	var city = () => setpromise(zone.city);
	var district = () => setpromise(zone.district);
}

export{sendLogin,mobileCode,checkExsis,proList,proDetail,orderList,addAddress,addressList,updateAddress,delAddress, getCartList,addCart,delCart,editCart,editCheckAll,province,city,district}