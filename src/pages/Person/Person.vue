<template>
  <div class="person_container">
    <div class="person_header">
      <i class="iconfont icon-home" @click="$router.replace('/home')"></i>
      <span class="title">网易严选</span>
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche1" @click="$router.replace('/shopcart')"></i>
    </div>
    <div class="person_content" v-if="!isShowLogin">
      <div class="logoImg">
        <img src="../.../../../common/loginImg.png" alt="">
      </div>
      <div class="btns">
        <van-button type="danger" class="phoneBtn" @click="showLogin('phone')">手机号快捷登录</van-button>
        <van-button type="danger" plain class="mailBtn" @click="showLogin('mail')">邮箱账号登录</van-button>
      </div>
      <div class="person_footer">
        <ul class="link">
          <li><i class="iconfont icon-weixin"></i> <span>微信</span></li>
          <li><i class="iconfont icon-QQ"></i> <span>QQ</span></li>
          <li><i class="iconfont icon-weibo"></i> <span>微博</span></li>
        </ul>
      </div>
    </div>
    <Login :loginWay="loginWay" :hiddenLogin="showLogin" v-else />
  </div>
</template>
<script>
import Login from '../Login/login'
export default {
  name: 'Person',
  data () {
    return {
      isShowLogin: false,
      loginWay: 'phone'
    }
  },
  components: {
    Login
  },
  methods: {
    showLogin (loginWay, hiddenLogin) {
      // 如果传入第二个参数，判断为true，关闭login组件显示
      if (hiddenLogin) {
        this.isShowLogin = false
        return 
      }
      // 只传入第一个参数，显示login
      this.loginWay = loginWay
      this.isShowLogin = true
    },
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.person_container
  width 100%
  height 667px
  background-color #f2f5f4
  .person_header
    width 100%
    height 50px
    background-color #fff
    box-sizing border-box
    border-bottom 1px solid #ccc
    padding 10px
    display flex
    align-items center
    position relative
    .title
      position absolute
      left 50%
      transform translateX(-50%)
      font-size 22px
      font-family KaiTi
    .iconfont
      font-size 25px
    .icon-sousuo
      position absolute
      right 50px
    .icon-gouwuche1
      position absolute
      right 10px
  .person_content
    width 100%
    .logoImg
      width 100%
      padding 80px 0 116px
      img
        display block
        margin 0 auto
        width 134px
        height 45px
    .btns
      width 100%
      display flex
      flex-direction column
      align-items center
      .phoneBtn, .mailBtn
        width 335px
        height 47px
        margin-bottom 16px
        font-size 16px
  .person_footer
    width 100%
    position fixed
    bottom 50px
    display flex
    justify-content center
    align-items center
    .link
      display flex
      li
        padding 0 15px
        width 60px
        height 20px
        font-size 14px
        text-align center
        border-right 1px solid #000
        &:last-child
          border none
        i
          width 10px
          height 10px
</style>