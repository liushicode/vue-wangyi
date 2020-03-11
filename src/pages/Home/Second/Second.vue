<template>
  <div class="liveContainer">
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(swiper,index) in swipers" :key="index">
            <img :src="swiper.picUrl" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="live_content">
        <div class="title">
          <p>抑菌防螨</p>
          <span>抑菌防螨,健康居家</span>
        </div>
        <ul>
          <li v-for="(item,index) in liveModule.subCateList" :key="index">
            <img :src="item.wapBannerUrl" alt="">
            <p class="text">
              <span>{{item.name}}</span>
              <span>{{item.frontDesc}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Second',
  data () {
    return {
      liveModule: []
    }
  },
  computed: {
    ...mapState({
      module: state => state.home.module,
      swipers: state => state.swipers.slice(4),
    })
  },
  async mounted () {
    await this.$store.dispatch('getModule')
    await this.$store.dispatch('getSwipers')
    this.liveModule = this.module[0]
    this.$nextTick(() => {
      var smallSwiper = new Swiper('.swiper-container', {
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
    // console.log(this.liveModule);
    let mScroll = new BScroll('.liveContainer', {
      click: true,
      bounce: false
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.liveContainer
  width 100%
  height 500px
  background-color #ededed
  .swiper-container
    width 100%
    height 200px
    margin-bottom 10px
    .swiper-wrapper
      width 100%
      .swiper-slide
        width 100%
        img
          width 100%
          height 200px
  .live_content
    width 100%
    background-color #fff
    .title
      width 100%
      padding 10px 0
      display flex
      flex-direction column
      align-items center
      p
        font-size 18px
        margin-bottom 5px
      span
        text-align center
        font-size 12px
    ul
      width 100%
      display flex
      flex-wrap wrap
      li
        width 50%
        display flex
        flex-direction column
        align-items center
        img
          width 170px
          height 170px
          background-color #e4dad2
        p
          width 150px
          margin 10px 0
          font-size 14px
</style>