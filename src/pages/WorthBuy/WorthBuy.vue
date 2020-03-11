<template>
  <div class="buy_container">
    <van-sticky>
      <div class="buy_header">
        <i class="iconfont icon-home" @click="$router.replace('/home')"></i>
        <span class="title">值得买</span>
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche1" @click="$router.replace('/shopcart')"></i>
      </div>
    </van-sticky>
    <div class="buy_content" ref="buyContent">
      <div class="mask">
        <span class="text">值得买</span>
        <span class="title">严选好物，用心生活</span>
      </div>
      <div class="nav_list">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
              <a href="javascript:;" v-for="(nav,index) in categorys" :key="index">
                <img :src="nav.picUrl" alt="">
                <span class="name">{{nav.mainTitle}}</span>
                <span class="descText">{{nav.viceTitle}}</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="lookList">
        <ul class="shopdatas">
          <li class="ad">
            <img class="adImg" :src="adPicUrl" alt="">
          </li>
          <li v-for="(topic,index) in topics" :key="index">
            <img class="shopImg" :src="topic.newAppBanner || topic.picUrl" alt="">
            <p class="title">{{topic.title}}</p>
            <div class="user_info">
              <div class="info">
                <img :src="topic.avatar" alt="">
                <span class="name">{{topic.nickname}}</span>
              </div>
              <div class="count">
                <van-icon name="eye-o" />
                <span>{{topic.readCount}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// 引入轮播图相关数据
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      adPicUrl: '',
      topics: []//存储商品列表数据
    }
  },
  computed: {
    ...mapState({
      navList: state => state.worthBuy.navList,
      lookList: state => state.worthBuy.lookList,
      // lazyList: state => state.worthBuy.lazyList
    }),
    categorysArr () {
      const bigArr = []
      let smallArr = []
      // 获取商品分类信息
      const categorys = this.navList
      categorys.forEach(category => {
        if (smallArr.length === 0) {
          bigArr.push(smallArr)
        }
        // 往小数组中添加商品分类
        smallArr.push(category)
        // 小数组中长度为8，再清空，重新添加
        if (smallArr.length === 8) {
          smallArr = []
        }
      })
      // 返回一个大数组，里面包含两个小数组，每个小数组有8个商品分类信息
      return bigArr
    }
  },
  async mounted () {
    // 获取轮播导航数据
    await this.$store.dispatch('getNavList')
    // 获取推荐列表数据
    await this.$store.dispatch('getLookList')
    // 
    // await this.$store.dispatch('getLazyList')
    // 广告图片
    this.adPicUrl = this.lookList[0].ad.picUrl
    this.lookList.forEach((look, index) => {
      look.topics.forEach((topic, index) => {
        this.topics.push(topic)
      })
    })
    // // const viewHeight = document.documentElement.clientHeight
    // // const contentHeight = this.$refs.buyContent.clientHeight
    // this.lazyList.forEach((lazyItem,index)=>{
    //   lazyItem.topics.forEach((topic, index) => {
    //     this.topics.push(topic)
    //   })
    // })
    this.$nextTick(() => {
      /* eslint-disable */
      var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.buy_container
  width 100%
  height 100%
  background-color #eee
  .buy_header
    width 100%
    height 50px
    background-color #fff
    border-bottom 1px solid #000
    box-sizing border-box
    padding 10px
    display flex
    align-items center
    position relative
    .title
      position absolute
      left 50%
      transform translateX(-50%)
      font-size 18px
    .iconfont
      font-size 25px
    .icon-sousuo
      position absolute
      right 50px
    .icon-gouwuche1
      position absolute
      right 10px
  .buy_content
    width 100%
    .mask
      width 100%
      height 260px
      background-color #e2c995
      position relative
      padding 25px 0 0
      box-sizing border-box
      .text
        font-size 20px
        margin-left 30px
        color #fff
      .title
        font-size 14px
        color #fff
        font-family 'PingFangSC-Regular'
        margin-left 10px
  .nav_list
    position relative
    z-index 10
    width 355px
    height 270px
    margin -190px auto 10px
    padding-top 10px
    box-sizing border-box
    background-color #fff
    border-radius 10px
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 355px
          display flex
          justify-content center
          align-items center
          flex-wrap wrap
          a
            width 84px
            display flex
            flex-direction column
            align-items center
            justify-content center
            margin-bottom 30px
            img
              width 60px
              height 60px
              border-radius 50%
              margin-bottom 5px
            .name
              font-size 16px
              font-weight bold
              margin-bottom 2px
            .descText
              font-size 12px
  .lookList
    box-sizing border-box
    padding 10px 10px
    overflow hidden
    margin-bottom 50px
    .shopdatas
      width 100%
      overflow hidden
      .ad
        width 172px
        float right
        .adImg
          width 172px
          height 95px
          margin 0
          border-radius 10px
      li
        width 172px
        background-color #fff
        display flex
        flex-direction column
        align-items center
        border-radius 10px
        overflow auto
        margin-bottom 10px
        &:nth-child(2n+1)
          float right
        &:nth-child(2n)
          float left
        img
          width 172px
          margin-bottom 5px
        .title
          font-size 12px
          width 155px
          padding 9px 8px 0
        .user_info
          display flex
          align-items center
          justify-content space-between
          width 155px
          padding 8px 8px 12px
          .info
            display flex
            align-items center
            img
              width 24px
              height 24px
              border-radius 50%
              margin-right 2px
            .name
              font-size 10px
          .count
            font-size 12px
            display flex
            align-items center
            span
              margin-left 5px
</style>