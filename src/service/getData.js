import axios from 'axios'
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

const getpromise = (type,url,data) => {
	if (process.env.NODE_ENV != 'development') {
		url = HOST+ url;
	}
	return new Promise((resolve, reject)=> {
	    // axios.get(url)
	    //     .then(response => {
	    //       resolve(response.data);
	    //     }).catch(error => {
	    //     	reject(error);
	    //     })
	    axios({
	    	methods: type,
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
if (process.env.NODE_ENV != 'development') {

	// var sendLogin = (code, mobile, validate_token) =>  getpromise('post','userInfo.json');

	// var proList = () => getpromise('get','proList.json');

	// var proDetail = (proID) => getpromise('get','proDetail'+proID+'.json');

	// var orderList = () => getpromise('get','orderList.json');

	// var cartList = () => getpromise('get','cart.json');

}
else {
	// 编译环境
	var sendLogin = (code, mobile, validate_token) =>  getpromise('post','./static/json/userInfo.json');
	// 商品列表
	var proList = () => getpromise('get','./static/json/proList.json');

	// var proDetail = (proID) => getpromise('get','./static/json/proDetail'+proID+'.json');
	var proDetail = (params) => getpromise('get','./static/json/proDetail.json',params);
	// 订单
	var orderList = () => getpromise('get','./static/json/orderList.json');

	// 购物车
	var cartList = () => getpromise('get','./static/json/cart.json');
	var addCart = (params) => getpromise('post','./static/json/addCart.json',params);
	var delCart = (params) => getpromise('post','./static/json/delCart.json',params);
	var editCart = (params) => getpromise('post','./static/json/editCart.json',params);
	var delAllCart = (params) => getpromise('post','./static/json/delAllCart.json',params);

	// 地址
	var addAddress = (params) => getpromise('post','./static/json/addAddress.json',params);
	var addressList = (params) => getpromise('post','./static/json/address.json',params);
}
	
export{sendLogin,getUser,mobileCode,checkExsis,proList,proDetail,orderList,addAddress,addressList,cartList,addCart,delCart,editCart,delAllCart}