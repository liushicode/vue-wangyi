import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  const { method, data } = config
  // post请求转换格式
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
})

axios.interceptors.response.use(response => {
  return response
}, err => {
  alert(err)
  return new Promise(() => { })
})

export default axios