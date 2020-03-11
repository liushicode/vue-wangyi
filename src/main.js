import Vue from 'vue'
import App from './App.vue'
// 移动端适配
import './tools/rem'
// 引入路由
import router from './router'
// 引入vuex仓库
import store from './store'
// 引入mock
import './mock/mock-server'
// 引入validate校验
import './validate.js'
// 引入公共组件
import Footer from './components/Footer/Footer.vue'
// 注册公共组件
Vue.component(Footer.name, Footer)
// vantui引入组件
import { Button, Icon, Sidebar, SidebarItem, Sticky, NavBar, Form, Field } from 'vant'
// 声明使用vantui组件
Vue.use(Button)
Vue.use(Icon)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Sticky)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)

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
  router,
  // 注册vuex仓库
  store
})
