<template>
  <div class="home_content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(swiper,index) in swipers" :key="index">
          <img :src="swiper.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="home_desc">
      <ul>
        <li v-for="(desc,index) in descList" :key="index">
          <img :src="desc.icon" alt="">
          <span>{{desc.desc}}</span>
        </li>
      </ul>
    </div>
    <div class="home_category">
      <ul>
        <li v-for="(category,index) in categorys" :key="index" @click="goDetail(index)">
          <img :src="category.picUrl" alt="">
          <span>{{category.text}}</span>
        </li>
      </ul>
    </div>
    <div class="home_recommend">
      <a href="javascript:;"><img src="../../../common/imgs/home/left.png" alt=""></a>
      <a href="javascript:;"><img src="../../../common/imgs/home/right.png" alt=""></a>
    </div>
    <div class="newPerson_container">
      <h3 class="title">- 新人专享礼 -</h3>
      <div class="card">
        <div class="left">
          <img src="../../../common/imgs/home/card1.png" alt="">
          <span class="text">新人专享礼包</span>
        </div>
        <div class="right">
          <div class="right_top">
            <img src="../../../common/imgs/home/card2.webp" alt="">
            <p>福利社</p>
            <span>今日特价</span>
          </div>
          <div class="right_bottom">
            <span class="text1">新人拼团</span>
            <p class="text2">1元起包邮</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hot_sell">
      <p class="title">类目热销榜</p>
      <ul>
        <li v-for="(sell,index) in hotsell" :key="index">
          <span>{{sell.categoryName}}</span>
          <img :src="sell.picUrl" alt="">
        </li>
      </ul>
    </div>
    <div class="home_footer">
      <div class="footerBtns">
        <a>下载App</a>
        <a>电脑版</a>
      </div>
      <div class="footerContent">
        <p>网易公司版权所有 &copy; 1997-2020</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>
<script>
// 引入轮播图相关文件
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
// 引入mapState
import { mapState } from 'vuex'
// 引入better-scroll
import BScroll from 'better-scroll'
// 引入组件
export default {
  name: 'First',
  computed: {
    ...mapState({
      swipers: state => state.swipers,
      descList: state => state.home.descList,
      categorys: state => state.home.categorys,
      hotsell: state => state.home.hotsell
    })
  },
  async mounted () {
    await this.$store.dispatch('getSwipers')
    await this.$store.dispatch('getDescList')
    this.$store.dispatch('getHotSell')
    this.$nextTick(() => {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000,//1秒切换一次
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    })
  },
  methods: {
    goDetail (path) {
      this.$router.push('/categorydetail')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home_content
  width 100%
  background-color #ededed
  .swiper-container
    width 100%
    height 200px
    .swiper-wrapper
      width 100%
      .swiper-slide
        width 100%
        img
          width 100%
          height 200px
    .swiper-pagination
      .swiper-pagination-bullet
        width 20px
        height 2px
        background-color #fff
        &.swiper-pagination-bullet-active
          background-color #000
  .home_desc
    background-color #fff
    ul
      display flex
      align-items center
      justify-content space-around
      li
        height 40px
        display flex
        align-items center
        img
          width 14px
          height 14px
        span
          font-size 14px
  .home_category
    width 100%
    background-color #fff
    padding-bottom 10px
    ul
      width 100%
      display flex
      flex-wrap wrap
      li
        width 20%
        display flex
        flex-direction column
        align-items center
        justify-content center
        img
          width 80%
          height 60px
        span
          font-size 12px
  
  .home_recommend
    width 100%
    height 120px
    display flex
    justify-content space-around
    align-items center
    a 
      img
        width 180px
        height 100px
  .newPerson_container
    width 100%
    background-color #fff
    padding-top 5px
    .title
      margin-top 20px
      font-size 14px
      text-align center
      margin 5px auto
    .card
      width 355px
      height 220px
      margin 10px auto
      background-color #fff
      display flex
      .left
        width 175px
        height 200px
        background-color #f9e9cf
        font-size 14px
        position relative
        margin-right 5px
        img
          position absolute
          left 20px
          top 50px
          width 130px
          height 130px
        span
          position absolute
          left 10px
          top 10px
      .right
        width 175px
        height 200px
        font-size 14px
        position relative
        .right_top
          width 100%
          height 99px
          background-color #fbe2d3
          position relative
          margin-bottom 2px
          img
            position absolute
            width 100px
            height 100px
            right 2px
            top 2px
          p
            position absolute
            left 10px
            top 10px
          span
            position absolute
            left 10px
            top 30px
            font-size 12px
        .right_bottom
          width 100%
          height 99px
          background-color #ffecc2
          position relative
          .text1
            position absolute
            left 10px
            top 10px
          .text2
            position absolute
            left 10px
            top 30px
            width 70px
            height 20px
            font-size 12px
            color #fff
            background-color #cbb693
            text-align center
            line-height 20px
  .hot_sell
    width 100%
    background-color #fff
    .title
      margin-left 10px
      font-size 16px
    ul
      width 355px
      margin 10px auto
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        width 85px
        background-color #f5f5f5
        height 80px
        margin-bottom 5px
        display flex
        flex-direction column
        align-items center
        &:first-child, &:nth-child(2)
          width 175px
          height 100px
          background-color #f9f3e4
          display flex
          flex-direction row
          span
            display block
            width 50px
            font-size 16px
            padding 0
          img
            width 100px
        &:nth-child(2)
          background-color #ebeff6
        &:nth-child(2n+1)
          margin-right 2px
        img
          width 50px
          height 50px
        span
          margin 10px auto
          text-align center
          font-size 14px
  .home_footer
    width 100%
    padding 30px 0 20px
    background-color #414141
    margin-bottom 50px
    .footerBtns
      width 100%
      margin-bottom 20px
      display flex
      justify-content center
      a 
        margin 0 10px
        display inline-block
        font-size 12px
        color #fff
        width 85px
        height 30px
        text-align center
        line-height 30px
        background-color transparent
        border 1px solid #ccc
        border-radius 3px
    .footerContent
      display flex
      flex-direction column
      align-items center
      margin-bottom 10px
      p
        font-size 12px
        color #999
        margin-bottom 5px



</style>