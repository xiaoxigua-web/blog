module.exports = {
  title: '小西瓜',
  base:'/blog/',
  description: 'Just do it',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件库', link: '/UI/' },
    ],
    sidebar:{
      '/UI/': [
        {
            title: 'Vue组件库',
            sidebarDepth: 2,
            children: [
                {
                  title: 'Pagination 分页器',
                  path: '/UI/Pagination/Pagination'
              }
            ]
        }
    ]
    }
  }
}