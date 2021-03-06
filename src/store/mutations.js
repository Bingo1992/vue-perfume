// import * as type from './mutation-type'
import { setStore, getStore } from 'utils/storage'

export default {　
  ['ADD_ITEM'](state, item) {　　 state.items.push(item);　 },
  　 ['DELETE_ITEM'](state) {
    state.items.pop();　
  },
  // 记录用户信息
  ['RECORD_USERINFO'](state, info) {
    state.userInfo = info;
    state.login = true;
    let validity = 30;
    let now = new Date();
    now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
    document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
    document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
  },
  // 网页初始化时从本地缓存获取购物车数据
  ['INIT_BUYCART'](state) {
    let initCart = getStore('buyCart');
    if (initCart) {
      state.cartList = JSON.parse(initCart);
    }
  },
  // 加入购物车
  ['ADD_CART'](state, { proID, proPrice, proName, proImg, proAttr, check = true, proNum = 1 }) {
    let cart = state.cartList; // 购物车
    let falg = true;
    let goods = {
      proID,
      proPrice,
      proName,
      proImg,
      proAttr
    }
    if (cart.length) { // 有内容
      cart.forEach(item => {
        if (item.proID === proID) {
          if (item.proNum >= 0) {
            falg = false;
            item.proNum += proNum;
          }
        }
      })
    }
    if (!cart.length || falg) {
      goods.proNum = proNum;
      goods.check = true;
      cart.push(goods);
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', cart);
  },
  // 修改购物车
  ['EDIT_CART'] (state, {proID, type, check}) {
    let cart = state.cartList;
     
    // if (proNum) {
    //   cart.forEach((item, i) => {
    //     if (item.proID === proID) {
    //       item.proNum = proNum
    //     }
    //   })
    // } else if (proID) {
    //   cart.forEach((item, i) => {
    //     if (item.proID === proID) {
    //       cart.splice(i, 1)
    //     }
    //   })
    // } 
    if(type != 0 && proID){//修改数量
     
      cart.forEach((item,i) => {
        if(item.proID === proID) {
          if(type < 0 && item.proNum > 1 || type > 0) {
             item.proNum += type;
          }
        }
      })
    } else if(proID) {//单个勾选
      cart.forEach((item) => {
        if(item.proID === proID) {
          item.check = check;
        }
      })
    } else { //全选
      cart.forEach((item) => {
        item.check = check ? true : false;
        //console.log(item.check)
      })
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', state.cartList);
    
  },
  //删除购物车
  ['DELETE_CART'] (state, proID) {
    let cart = state.cartList;
    cart.forEach((item,i) => {
      if(item.proID === proID) {
        cart.splice(i, 1);
      }
    })
   state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', state.cartList);
  },
  //选择的地址
  ['CHOOSE_ADDRESS'](state, address) {
    state.choosedAddress = address;
 
  },
  //获取用户信息存入vuex
  // ['GET_USERINFO'](state, info) {
  // 	if (state.userInfo && (state.userInfo.username !== info.username)) {
  // 		return;
  // 	};
  // 	if (!state.login) {
  // 		return
  // 	}
  // 	if (!info.message) {
  // 		state.userInfo = {...info};
  // 		let validity = 30;
  // 		let now = new Date();
  // 		now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
  // 		document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
  // 		document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
  // 	} else {
  // 		state.userInfo = null;
  // 	}
  // },

};
