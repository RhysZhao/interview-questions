/*
 * Author  rhys.zhao
 * Date  2023-03-02 14:02:43
 * LastEditors  rhys.zhao
 * LastEditTime  2023-04-10 16:36:26
 * Description
 */

module.exports = {
  base: '/interview-questions/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.ico' }]],
  title: '前端知识点',
  description: '前端知识点整理',

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
        text: '🪛 前端基础',
        link: '/base/'
      },
      {
        text: '🪜 前端进阶',
        link: '/senior/'
      },
      {
        text: '🗡️ 学习 / 面试技巧',
        link: '/skill/'
      }
    ],
    sidebar: {
      '/base/': [
        {
          text: '前端基础',
          children: [
            '/base/README.md',
            '/base/js.md',
            '/base/es6.md',
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
          children: ['/senior/README.md', '/senior/v8.md']
        }
      ],
      '/skill/': [
        {
          text: '学习 / 面试技巧',
          children: ['/skill/README.md', '/skill/study.md', '/skill/interview.md']
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
