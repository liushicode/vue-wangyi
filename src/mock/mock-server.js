import Mock from 'mockjs'
// 值得买界面nav模块数据
let navWap = require('./datas/buy/navWap.json')
let recManual = require('./datas/buy/recManual.json')
let secAuto = require('./datas/recAuto.json')
// 搜索界面数据
let search = require('./datas/search.json')
// 拦截请求，生成值得买界面数据
Mock.mock('/navwap', { code: 0, data: navWap.data.navList })
Mock.mock('/looklist', { code: 0, data: recManual.data })
Mock.mock('/lazylist', { code: 0, data: secAuto.data.result })

// 搜索界面数据
Mock.mock('/search', { code: 0, data: search.data })
