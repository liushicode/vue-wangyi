import Vue from 'vue'
// 引入校验表单插件
import VeeValidate, { Validator } from 'vee-validate'
// 声明使用插件包
Vue.use(VeeValidate);
// 引入汉化
import zh_CN from 'vee-validate/dist/locale/zh_CN';

// 提示语汉化
Validator.localize("zh_CN", {
  // 汉化
  messages: zh_CN.messages,
  attributes: {
    phone: "手机号码",
    code: "短信验证码",
    pwd: "密码",
    mailName: '邮箱账号',
    mailPwd: '邮箱密码'
  }
})
// 自定义表单校验规则
// 校验手机号
Validator.extend('changePhone', {
  getMessage: (field) => field + `格式错误`,
  validate: (value) => {
    const reg = /^1(3|4|5|7|8)\d{9}$/
    return reg.test(value)
  }
})
// 校验邮箱账号
Validator.extend('changeMailName', {
  getMessage: (field) => field + `格式错误`,
  validate: (value) => {
    // 邮箱正则
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return value.length == 11 || reg.test(value)
  }
})
