import { reqSearch } from '../../api/index'
import { RECEIVE_SEARCH  } from '../mutation-type'
const state = {
  searchInfo:{}
}
const mutations = {
  [RECEIVE_SEARCH] (state, searchInfo) {
    state.searchInfo = searchInfo
  }
}
const actions = {
  async getSearchInfo ({commit}) {
    const result = await reqSearch()
    if (result.data.code === 0) {
      const searchInfo = result.data.data
      commit(RECEIVE_SEARCH,searchInfo)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
