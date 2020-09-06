const themeConfig = require('./config/theme')

module.exports = {
    title: 'Myron',
    description: '拼尽全力之后才能说无能为力.',  //Enjoy when you can, and endure when you must
    dest: './dist',
    head: [
      ['link', { rel: 'icon', href: '/sun.png' }],
      ['meta', { name: 'viewport', 
      content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig,
    markdown: {
      lineNumbers: true
    },
    plugins: [
        ['@vuepress/medium-zoom', 'flowchart'],
        ['@vuepress/last-updated'],
        ['@vuepress/pwa']
    ],

  }