<template>
  <div class="loginContainer">
    <div class="logoImg">
      <img src="../.../../../common/loginImg.png" alt="">
    </div>
    <div v-if="loginWay==='phone'" class="phoneLogin" :class="{on:!isCode}">
      <div class="phoneInput">
        <input type="phone" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'changePhone'">
      </div>
      <div class="codeInput" v-show="isCode">
        <input type="text" placeholder="请输入短信验证码" v-model="code">
        <button class="getCodeBtn" :disabled="!isRightPhone||count>0"
           @click="sendCode">{{count>0?`${count}s后重发`:'获取验证码'}}</button>
        <span class="error_title" style="color:red">{{errors.first('phone')}}</span>
      </div>
      <div class="pwdInput" v-show="!isCode">
        <input type="pwd" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="switch" v-if="isCode">
        <a href="javascript:;">遇到问题?</a>
        <span @click="isCode=!isCode">使用密码验证登录</span>
      </div>
      <div class="switch" v-else>
        <a href="javascript:;">忘记密码?</a>
        <span @click="isCode=!isCode">短信快捷登录</span>
      </div>
      <van-button class="loginBtn" type="danger">登录</van-button>
    </div>
    <div v-else class="mailLogin">
      <div class="mailNameInput">
        <input type="phone" placeholder="邮箱账号" v-model="mailName" name="mailName" v-validate="'changeMailName'">
      </div>
      <div class="mailPwdInput">
        <input type="pwd" placeholder="密码" v-model="mailPwd">
        <span class="error_title" style="color:red">{{errors.first('mailName')}}</span>
      </div>
      <div class="register" v-if="isCode">
        <a href="javascript:;">注册账号</a>
        <span @click="isCode=!isCode">忘记密码</span>
      </div>
      <van-button class="loginBtn" type="danger">登录</van-button>
    </div>
    <div class="switchWay" @click="closeLogin">其他登录方式 ></div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: ['loginWay','hiddenLogin'],
  data () {
    return {
      phone: '',//手机号
      code: '',//验证码
      pwd:'',//密码
      isCode:true,//用来切换短信/密码登录,默认短信登录
      mailName:'',//邮箱账号
      mailPwd:'',//邮箱密码
      count:0// 短信发送倒计时
    }
  },
  computed: {
    isRightPhone(){
      return /^1(3|4|5|7|8)\d{9}$/.test(this.phone)
    }
  },
  methods: {
    // 子级组件不能直接修改父级组件传过来的属性，需要调用父级的方法进行调用
    closeLogin(){
      this.hiddenLogin(this.loginWay,true)
    },
    sendCode(){
      this.count = 30
      this.timeId = setInterval(() => {
        this.count --
        if(this.count <= 0){
          this.count = 0
          // 清除定时
          clearInterval(this.timeId)
        }
      }, 1000);
      // 调用接口，发送验证码
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
  width 100%
  height 617px
  background-color #fff
  .logoImg
    width 100%
    padding 20px 0 30px
    img
      display block
      margin 0 auto
      width 134px
      height 45px
  .phoneLogin
    padding 0 20px
    &.on
      margin-top 50px
    .phoneInput,.codeInput,.pwdInput
      width 100%
      height 45px
      border-bottom  1px solid #ccc
      display flex
      align-items center
      justify-content space-between
      position relative
      input 
        width 300px
        height 20px
        font-size 14px
      .error_title
        font-size 12px
        position absolute
        left 0
        top 50px
      .getCodeBtn
        width 100px
        height 26px
        text-align center
        line-height 26px
        font-size 14px
        color #333
        border 1px solid #ccc
        background-color #fff
    .switch
      display flex
      justify-content space-between
      align-items center
      height 70px
      font-size 14px
    .loginBtn
      width 100%
  .mailLogin
    margin-top 50px
    padding 0 20px
    .mailNameInput,.mailPwdInput
      width 100%
      height 45px
      border-bottom  1px solid #ccc
      display flex
      align-items center
      justify-content space-between
      position relative
      input 
        width 300px
        height 20px
        font-size 14px
      .error_title
        font-size 12px
        position absolute
        left 0
        top 50px
    .register
      display flex
      justify-content space-between
      align-items center
      height 70px
      font-size 14px
    .loginBtn
      width 100%
  
  
  .switchWay
    margin-top 30px
    text-align center
    font-size 14px
</style>