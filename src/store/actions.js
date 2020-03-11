import { RECEIVE_SWIPERS } from './mutation-type'
import { reqSwiper } from '../api/index'

export default ({
  async getSwipers ({ commit }) {
    const result = await reqSwiper()
    if (result) {
      const swipers = result.data
      commit(RECEIVE_SWIPERS,swipers)
    }
  }
})