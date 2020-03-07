import Vue from 'vue'
import App from './App.vue'
// 移动端适配
import './tools/rem'
// 引入路由
import router from './router'
// 引入公共组件
import Footer from './components/Footer/Footer.vue'
import {Button} from 'mint-ui'
// 注册公共组件
Vue.component(Footer.name, Footer)
Vue.component(Button.name, Button)




Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  // 注册组件
  components: {
    App
  },
  // 模板
  template: '<App />',
  // 注册路由
  router
})
