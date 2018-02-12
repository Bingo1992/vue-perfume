// import * as type from './mutation-type.js'
import {
    getUser
} from 'service/getData'
export default {
    addItem({ commit, state }, item) {
        commit('ADD_ITEM', item);
    },

    deleteItem({ commit, state }) {
        commit('DELETE_ITEM');
    }
        // async getUserInfo({commit,state}) {
        // 	let res = await getUser();
        // 	commit('GET_USERINFO', res)
        // }
}
