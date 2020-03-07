// 引入组件
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import WorthBuy from '../pages/WorthBuy/WorthBuy.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Person from '../pages/Person/Person.vue'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/buy',
    component: WorthBuy
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/',
    redirect: '/home'
  }
]