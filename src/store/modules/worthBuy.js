import { RECEIVE_NAVLIST, RECEIVE_LOOKLIST, RECEIVE_LAZYLIST } from '../mutation-type'
import { reqNavList, reqLookList, reqLazyList } from '../../api/index'
export const state = {
  navList: [],
  lookList: [],
  lazyList: []
}
export const mutations = {
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList
  },
  [RECEIVE_LOOKLIST] (state, lookList) {
    state.lookList = lookList
  },
  [RECEIVE_LAZYLIST] (state, lazylist) {
    state.lazylist = lazylist
  }
}
export const actions = {
  async getNavList ({ commit }) {
    const result = await reqNavList()
    if (result.data.code === 0) {
      const navList = result.data.data
      commit(RECEIVE_NAVLIST, navList)
    }
  },
  async getLookList ({ commit }) {
    const result = await reqLookList()
    if (result.data.code === 0) {
      const lookList = result.data.data
      commit(RECEIVE_LOOKLIST, lookList)
    }
  },
  async getLazyList ({commit}) {
    const result = await reqLazyList()
    if (result.data.code === 0) {
      const lazyList = result.data.data
      commit(RECEIVE_LAZYLIST, lazyList)
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