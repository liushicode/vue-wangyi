<template>
  <div class="category_container">
    <div class="header">
      <input class='search iconfont' type="text" :placeholder="icon" @click="$router.push('/search')">
    </div>
    <div class="category_content">
      <div class="side_nav">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="(nav,index) in navdatas" :key="index" :title="nav.name" />
        </van-sidebar>
      </div>
      <div class="category_datas">
        <div class="categoryImg">
          <img :src="activeNav.bannerUrl" alt="">
        </div>
        <!-- <img :src="activeNav.bannerUrl" alt=""> -->
        <div class="categoryList">
          <ul v-if="activeKey<4">
            <li v-for="(categoryItem,index) in categoryList" :key="index">
              <img :src="categoryItem.bannerUrl" alt="">
              <span>{{categoryItem.name}}</span>
            </li>
          </ul>
          <ul v-else>
            <li v-for="(categoryItem,index) in categoryList" :key="index">
              <img :src="categoryItem.wapBannerUrl" alt="">
              <span>{{categoryItem.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Notify } from 'vant'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data () {
    return {
      icon: '\ue618搜索商品，共24028款好物',//字体图标在placeholder中应用,
      activeKey: localStorage.getItem('nav_key'),//侧边栏当前索引
      activeNav: {},//左侧选中的导航对象
      categoryList: [],//每个导航对应分类数据
    }
  },
  methods: {
    onChange (index) {
      // 点击后将index存储起来，方便右边对应显示
      this.activeKey = index
      localStorage.setItem('nav_key',this.activeKey)
    }
  },
  computed: {
    ...mapState({
      navdatas: state => state.category.navdatas,
      categoryDatas: state => state.category.categoryDatas
    }),
  },
  async mounted () {
    await this.$store.dispatch('getNavDatas')
    await this.$store.dispatch('getCategoryDatas')
    // 初始化右边显示的数据
    this.categoryList = this.categoryDatas[this.activeKey].categoryList
    this.activeNav = this.navdatas[this.activeKey]
    // 侧边栏可滑动
    this.leftscroll = new BScroll('.side_nav', {
      click: true
    })
  },
  watch: {
    activeKey () {
      // 根据左侧索引显示右面对应内容
      this.activeNav = this.navdatas[this.activeKey]
      this.categoryList = this.categoryDatas[this.activeKey].categoryList || this.categoryDatas[this.activeKey].subCateList
      // 右边可滑动
      this.rightScroll = new BScroll('.categoryList', {
        click: true
      })
      console.log(this.rightScroll)
      return
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.category_container
  width 100%
  height 100%
  overflow hidden
  .header
    position relative
    width 100%
    height 30px
    padding 15px 0
    background-color #fff
    z-index 10
    .search
      display block
      width 90%
      margin 0 auto
      height 30px
      font-size 14px
      border-radius 5px
      background-color #ededed
      text-align center
  .category_content
    display flex
    .side_nav
      flex 1
      height 500px
      .van-sidebar-item
        height 25px
        display flex
        align-items center
        margin-bottom  20px
    .category_datas
      flex 4
      .categoryImg
        position relative
        z-index 10
        background-color #fff
        img
          margin 10px 10px 10px
          width 90%
          height 100px
          position relative
          z-index 10
      .categoryList
        height 400px
        ul
          display flex
          flex-wrap wrap
          li
            width 32%
            display flex
            flex-direction column
            align-items center
            img
              width 60px
              height 60px
              border-radius 50%
            span
              font-size 14px
              text-align center
</style>