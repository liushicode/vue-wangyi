<template>
  <div class="shopcart-container">
    <div class="cart_header">
      <span class="left">购物车</span>
      <span class="right" @click="$router.replace('/login')">领券</span>
    </div>
    <div class="cart_service">
      <ul>
        <li>
          <van-icon name="circle" size="2px" /> 30天无忧退货</li>
        <li>
          <van-icon name="circle" size="2px" /> 48小时快速退款</li>
        <li>
          <van-icon name="circle" size="2px" /> 满88元免邮费</li>
      </ul>
    </div>
    <div class="cart_page">
      <div class="cart_img">
        <img src="../../common/shopcart.png" alt="">
        <span class="text">去添加点什么吧</span>
      </div>
      <van-button type="danger" class="loginBtn" @click="$router.replace('/person')">登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopCart'
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopcart-container
  width 100%
  height 667px
  background-color #f4f4f4
  .cart_header
    padding 0 20px
    height 44px
    background-color #fff
    display flex
    align-items center
    justify-content space-between
    span
      font-size 18px
      &.right
        color red
        font-size 14px
  .cart_service
    padding 0 15px
    height 35px
    background-color #eee
    ul
      display flex
      align-items center
      justify-content space-between
      li
        height 35px
        line-height 35px
        text-align center
        font-size 12px
        .icon
          font-size 6px
  .cart_page
    width 100%
    .cart_img
      margin 180px auto 20px
      display flex
      flex-direction column
      align-items center
      img 
        width 125px
        height 125px
        margin-bottom 5px
      .text
        font-size 16px
    .loginBtn
      width 60%
      display block
      margin 0 auto
    

</style>