import { RECEIVE_DESClIST, RECEIVE_CATEGORYS,RECEIVE_HOTSELL,RECEIVE_MODULE } from '../mutation-type'
import { reqDescList,reqCategorys,reqHotSell,reqModule } from '../../api'
const state = {
  descList: [],
  categorys: [],
  hotsell: [],
  module:[]
}
const mutations = {
  [RECEIVE_DESClIST] (state,descList) {
    state.descList = descList
  },
  [RECEIVE_CATEGORYS] (state,categorys) {
    state.categorys = categorys
  },
  [RECEIVE_HOTSELL] (state,hotsell) {
    state.hotsell = hotsell
  },
  [RECEIVE_MODULE] (state, module) {
    state.module = module
  }
}
const actions = {
  async getDescList ({ commit }) {
    const result = await reqDescList()
    if (result) {
      const descList = result.data
      commit(RECEIVE_DESClIST,descList)
    }
  },
  async getCategorys ({ commit }) {
    const result = await reqCategorys()
    if (result) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },
  async getHotSell ({commit}) {
    const result = await reqHotSell()
    if (result) {
      const hotsell = result.data
      commit(RECEIVE_HOTSELL,hotsell)
    }
  },
  async getModule ({commit}) {
    const result = await reqModule()
    if (result) {
      const module = result.data
      commit(RECEIVE_MODULE,module)
    }
  }
  
}
  
const getters = {}
export default ({
  state,
  mutations,
  actions,
  getters
})