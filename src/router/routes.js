// 引入组件
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import WorthBuy from '../pages/WorthBuy/WorthBuy.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Person from '../pages/Person/Person.vue'
import First from '../pages/Home/First/First.vue'
import Second from '../pages/Home/Second/Second.vue'
import Search from '../pages/Search/Search.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/home/first',
        component: First,
        meta: {
          isShowFooter: true
        },
      },
      {
        path: '/home/second:id',
        component: Second,
        meta: {
          isShowFooter: true
        },
      },
      {
        path: '/home',
        redirect: '/home/first'
      }
    ]
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/buy',
    component: WorthBuy,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/search',
    component:Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]