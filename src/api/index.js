
import axios from 'axios'
const base = '/api'
// 获取首页轮播图数据
export const reqSwiper = () => axios.get(base + '/swiper')
// 获取首页轮播图下面描述数据
export const reqDescList = () => axios.get(base + '/descList')
// 获取首页分类数据
export const reqCategorys = () => axios.get(base + '/category')
// 获取首页各模块信息
export const reqModule = () => axios.get(base + '/module')
// 获取热卖榜信息
export const reqHotSell = () => axios.get(base + 'hotsell')
// 获取分类页面导航信息
export const reqNavDatas = () => axios.get(base + '/navdatas')
// 获取分类页面内容数据
export const reqCategoryDatas = () => axios.get(base + '/categoryDatas')

// 请求值得买页面导航数据和列表数据
export const reqNavList = () => axios.get('/navwap')
export const reqLookList = () => axios.get('/looklist')
export const reqLazyList = () => axios.get('/lazylist')

// 请求搜索界面数据
export const reqSearch = () => axios.get('/search')
