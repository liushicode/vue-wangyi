import { RECEIVE_NAVDATAS,RECEIVE_CATEGOTYDATAS } from '../mutation-type'
import { reqNavDatas,reqCategoryDatas } from '../../api/index'
export const state = {
  navdatas: [],
  categoryDatas:[]
}
export const mutations = {
  [RECEIVE_NAVDATAS] (state, navdatas) {
    state.navdatas = navdatas
  },
  [RECEIVE_CATEGOTYDATAS] (state, categoryDatas) {
    state.categoryDatas = categoryDatas
  }
}
export const actions = {
  async getNavDatas ({ commit }) {
    const result = await reqNavDatas()
    if (result) {
      const navdatas = result.data
      commit(RECEIVE_NAVDATAS, navdatas)
    }
  },
  async getCategoryDatas ({commit}) {
    const result = await reqCategoryDatas()
    if (result) {
      const categoryDatas = result.data
      commit(RECEIVE_CATEGOTYDATAS,categoryDatas)
    }
  }
}
export const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}