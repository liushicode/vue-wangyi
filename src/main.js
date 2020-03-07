import Vue from 'vue'
import App from './App.vue'
// 移动端适配
import './tools/rem';

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  // 注册组件
  components: {
    App
  },
  template:'<App />'
})
