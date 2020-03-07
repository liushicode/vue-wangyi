<template>
  <div class="home_container">
    <div class="home_header">
      <a class="logo" href="javascript:;">网易严选</a>
      <input class='search' type="text" placeholder="搜索商品，共24254款好物">
      <mt-button class="loginBtn" type="danger" plain small>登录</mt-button>
    </div>
    <div class="home_nav">
      <ul>
        <li class="active"><span class="nav_text">推荐</span></li>
        <li class="nav_text">居家生活</li>
        <li class="nav_text">服饰鞋包</li>
        <li class="nav_text">服饰鞋包</li>
        <li class="nav_text">服饰鞋包</li>
        <li class="nav_text">服饰鞋包</li>
      </ul>
    </div>
    <div class="home_content">
      <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
    </div>
  </div>
</template>
<script>
import { reqNavDatas } from '../../api/index'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import axios from 'axios'
export default {
  name: 'Home',
  async mounted () {
    const result = await reqNavDatas()
    console.log(result)
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.home_container
  width 100%
  height 100%
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
      font-size 14px
      padding 1px 2px
      width 40px
      height 25px
  .home_nav
    width 100%
    padding 5px
    overflow hidden
    ul
      overflow hidden
      li
        float left
        width 60px
        height 25px
        line-height 25px
        font-size 16px
        text-align center
        &.active
          border-bottom 2px solid #dd1a21
</style>
