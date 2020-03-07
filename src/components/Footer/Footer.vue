<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="iconfont icon-home" :class="{on:$route.path==='/home'}" @click="goPath('/home')">
      <span class="iconText">首页</span>
    </a>
    <a href="javascript:;" class="iconfont icon-fenlei" :class="{on:$route.path==='/category'}" @click="goPath('/category')">
      <span class="iconText">分类</span>
    </a>
    <a href="javascript:;" class="iconfont icon-tuku" :class="{on:$route.path==='/buy'}" @click="goPath('/buy')">
      <span class="iconText">值得买</span>
    </a>
    <a href="javascript:;" class="iconfont icon-gouwuche1" :class="{on:$route.path==='/shopcart'}" @click="goPath('/shopcart')">
      <span class="iconText">购物车</span>
    </a>
    <a href="javascript:;" class="iconfont icon-geren" :class="{on:$route.path==='/person'}" @click="goPath('/person')">
      <span class="iconText">个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  methods: {
    goPath(path){
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer_guide
  width 100%
  position fixed
  bottom 0
  padding 5px 0
  display flex
  .iconfont
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-size 20px
    &.on
      color #dd1a21
    .iconText, text-align center
      margin-top 5px
      font-size 14px
</style>