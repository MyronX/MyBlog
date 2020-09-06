module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    }
  },

  home: true,
  heroImage: "/myron.png",
  heroText: null,

  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
    // 作者
  author: 'Myron',
    // 备案号
  record: '粤ICP备20026988号',
  recordLink: 'http://www.beian.miit.gov.cn/',

  //icp:"nihao",
  //icpLink:'http://www.qq.com',s
  cyberSecurityRecord: '粤公网安备 44030502005230号',
  cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502005230',
    // 项目开始时间
  startYear: '2020',

  
  
  
}

