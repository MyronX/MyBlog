const themeMy = require('./themeMy.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

//这里其实就是themeconfig
module.exports = Object.assign({}, themeMy, {
    nav,
    sidebar,
    logo: '/sun.png',
    //搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    sidebarDepth: 3,
    authorAvatar: '/sun.png',

    
    //jiami
    // keyPage: {
    //     keys: ['90195ef78b13fa12f3310c3f48354b56']  //0926
    // }
})