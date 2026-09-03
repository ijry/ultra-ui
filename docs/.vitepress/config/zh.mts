import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'
import { ORG } from './shared.mts'

export const zh: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} = {
  label: '简体中文',
  lang: 'zh-CN',
  title: 'ultra-ui',
  titleTemplate: ':title | ultra-ui',
  description:
    'ultra-ui 是一套真正跨端的超级 UI 组件库，同一份设计语言覆盖 iOS SwiftUI、Android Compose、鸿蒙 Next、Flutter、React Native、Taro、uni-app 与 uni-app-x 八大平台。',

  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'ultra-ui,跨平台UI,组件库,SwiftUI,Jetpack Compose,鸿蒙,HarmonyOS,ArkTS,Flutter,React Native,Taro,uni-app,uni-app-x,uview-plus'
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
      { text: '平台支持', link: '/guide/platforms' },
      {
        text: '生态',
        items: [
          { text: '更新日志', link: '/guide/changelog' },
          { text: '参与贡献', link: '/guide/contributing' },
          { text: '常见问题', link: '/guide/faq' },
          { text: 'uview-plus 文档', link: 'https://uview-plus.jiangruyi.com/' }
        ]
      }
    ],

    sidebar: sidebar('zh'),

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: '切换语言',
    externalLinkIcon: true,

    editLink: {
      pattern: `${ORG}/docs-site/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `Copyright © 2024-${new Date().getFullYear()} ultra-ui`
    },

    notFound: {
      title: '页面不存在',
      quote: '这个链接可能已经失效，或者页面还没有写完。',
      linkText: '返回首页'
    }
  }
}
