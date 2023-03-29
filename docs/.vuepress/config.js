/*
 * Author  rhys.zhao
 * Date  2023-03-02 14:02:43
 * LastEditors  rhys.zhao
 * LastEditTime  2023-03-29 16:09:29
 * Description
 */

module.exports = {
  base: '/interview-questions/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.ico' }]],
  title: '前端面试题',
  description: '前端面试题整理',

  port: '8888',
  open: true,

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/imgs/logo.svg',
    repo: 'RhysZhao/interview-questions',
    repoLabel: '点亮⭐收藏',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '为该章节纠错',
    lastUpdated: '上次更新',
    search: true,
    navbar: [
      {
        text: '😶‍🌫️ 前端基础',
        link: '/base/'
      },
      {
        text: '😶‍🌫️ 前端进阶',
        link: '/senior/'
      }
    ],
    sidebar: {
      '/base/': [
        {
          text: '前端基础',
          children: [
            '/base/README.md',
            '/base/js.md',
            '/base/css.md',
            '/base/http.md',
            '/base/react.md',
            '/base/webpack.md',
            '/base/design-mode.md',
            '/base/git.md',
            '/base/algorithm.md',
            '/base/operation-system.md'
          ]
        }
      ],
      '/senior/': [
        {
          text: '前端进阶',
          children: ['/senior/README.md']
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search'
          },
          '/zh/': {
            placeholder: '搜索'
          }
        }
      }
    ]
  ]
};
