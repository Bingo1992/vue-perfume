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

//编译环境
if (process.env.NODE_ENV != 'development') {

	var sendLogin = (code, mobile, validate_token) =>  getpromise('post','userInfo.json');

	var proList = () => getpromise('get','proList.json');

	var proDetail = (proID) => getpromise('get','proDetail'+proID+'.json');

	var cartList = () => getpromise('get','cart.json');

}
else {
	var sendLogin = (code, mobile, validate_token) =>  getpromise('post','./static/json/userInfo.json');

	var proList = () => getpromise('get','./static/json/proList.json');

	var proDetail = (proID) => getpromise('get','./static/json/proDetail'+proID+'.json');

	var cartList = () => getpromise('get','./static/json/cart.json');
}
	
export{sendLogin,getUser,mobileCode,checkExsis,proList,proDetail,cartList}