import Vue from 'vue'
import Vuex from 'vuex'
// 声明使用vuex
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// vuex模块化引入
import home from './modules/home'
import category from './modules/category'
import worthBuy from './modules/worthBuy'
import search from './modules/search'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    category,
    worthBuy,
    search
  }
})