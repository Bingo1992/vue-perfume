import Vue from 'vue'
import Vuex from 'vuex'
import   mutations  from './mutations'
import   actions  from './actions'
import   getters  from './getters'

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
	items: [],　// items为元素列表,
	login: false,
	userInfo: null, //用户信息
	cartList: [] //购物车
}

export default new Vuex.Store({
　  state,
　  mutations,
	  actions,
	  getters
});

