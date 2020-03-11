<template>
  <div class="main">
    <div class="home_container">
      <van-sticky>
        <div class="header">
          <div class="home_header">
            <a class="logo" href="javascript:;">网易严选</a>
            <input class='search iconfont' type="text" :placeholder='icon' @click="$router.push('/search')">
            <van-button plain class="loginBtn" size="mini" type="danger" @click="$router.replace('/person')">登录</van-button>
          </div>
          <div class="home_nav">
            <div class="pullDown">
              <van-icon name="arrow-down" @click="isShowPullNav=!isShowPullNav" />
            </div>
            <div class="pullNav" v-show="isShowPullNav">
              <p class="allNav">
                <span>全部频道</span>
                <van-icon name="arrow-up" class="rightArrow" @click="isShowPullNav=!isShowPullNav" />
              </p>
              <ul>
                <li @click="goHome" :class="{on:$route.path==='/home/first'}">推荐</li>
                <li v-for="(category,index) in categorys" :key="index" @click="goPath(index)" :class="{on:$route.path === `/home/second:${index}`}">
                  {{category.text}}
                </li>
              </ul>
              <div class="mask"></div>
            </div>
            <div class="navBar">
              <ul class="nav_ul" ref="navUl">
                <li @click="goHome" :class="{on:$route.path==='/home/first'}">推荐</li>
                <li v-for="(category,index) in categorys" :key="index" @click="goPath(index)" :class="{on:$route.path === `/home/second:${index}`}">
                  {{category.text}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </van-sticky>

      <!-- 首页显示内容 -->
      <div class="content">
        <First v-if="showFirst" />
        <Second v-else />
      </div>
    </div>
  </div>

</template>
<script>
// 引入mapState
import { mapState } from 'vuex'
// 引入组件
import First from './First/First'
import Second from './Second/Second'
// 引入better-scroll
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data () {
    return {
      icon: '\ue618搜索商品，共24028款好物',//字体图标在placeholder中应用,
      showFirst: true,// 首页第一页内容是否展示
      isShowPullNav: false,//是否显示下拉菜单导航
    }
  },
  components: {
    First, Second
  },
  computed: {
    ...mapState({
      categorys: state => state.home.categorys.slice(1, -1)
    })
  },
  methods: {
    // 跳转首页
    goHome () {
      this.$router.replace('/home')
      this.showFirst = true
    },
    // 点击导航分类跳转
    goPath (index) {
      this.$router.replace(`/home/second:${index}`)
      this.showFirst = false
    }
  },
  async mounted () {
    await this.$store.dispatch('getCategorys')
    // 设置ul的宽度
    const list = this.$refs.navUl.children
    const length = list.length
    let width = Array.prototype.slice.call(list).reduce((prev, item) => prev += (item.style.width + 10) * length, 0)
    this.$refs.navUl.style.width = width
    // 设置导航栏可滑动
    let scrollUl = new BScroll('.navBar', {
      click: true,
      scrollX: true
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
  width 100%
  .home_container
    width 100%
    .header
      width 100%
      position relative
      height 73px
      background-color #fff
      z-index 100
      .home_header
        width 100%
        height 40px
        padding 5px
        box-sizing border-box
        display flex
        align-items center
        justify-content space-around
        .logo
          font-family KaiTi
          font-size 25px
          color #000
        .search
          width 200px
          height 30px
          font-size 14px
          border-radius 5px
          background-color #ededed
          text-align center
        .loginBtn
          border-radius 5px
          font-size 12px
      .home_nav
        width 100%
        // overflow hidden
        padding-left 20px
        position relative
        .pullDown
          position absolute
          z-index 10
          right 18px
          top 2px
          width 50px
          height 30px
          line-height 30px
          font-size 20px
          text-align center
          background-color #fff
        .pullNav
          background-color #fff
          position absolute
          top 0
          left 0
          width 100%
          z-index 1000!important
          .allNav
            position relative
            margin-left 15px
            height 35px
            line-height 35px
            font-size 14px
            margin-bottom 10px
            .rightArrow
              position absolute
              font-size 20px
              left 330px
              top 8px
          ul
            display flex
            flex-wrap wrap
            li
              width 75px
              height 28px
              font-size 12px
              box-sizing border-box
              border 1px solid #ccc
              margin-left 15px
              margin-bottom 20px
              text-align center
              line-height 28px
              border-radius 3px
              &.on
                border 1px solid #dd1a21
          .mask
            position fixed
            left 0
            top 230px
            background-color rgba(0,0,0,.3)
            width 100%
            height 100%
        .navBar
          ul
            width 800px
            display flex
            padding 0 10px
            li
              width 70px
              height 30px
              line-height 30px
              font-size 14px
              text-align center
              margin-right 10px
              &:first-child
                width 40px
              &.on
                border-bottom 3px solid #dd1a21
    .content
      height 500px
</style>

