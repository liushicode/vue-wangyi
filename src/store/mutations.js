import { RECEIVE_SWIPERS } from './mutation-type'
export default ({
  [RECEIVE_SWIPERS] (state,swipers) {
    state.swipers = swipers
  }
})