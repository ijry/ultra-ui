import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'
import { ORG, REPO } from './shared.mts'

export const en: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} = {
  label: 'English',
  lang: 'en-US',
  title: 'ultra-ui',
  titleTemplate: ':title | ultra-ui',
  description:
    'ultra-ui is a genuinely cross-platform component library: one design language across iOS SwiftUI, Android Compose, HarmonyOS Next, Flutter, React Native, Taro, uni-app and uni-app-x.',

  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'ultra-ui,cross-platform UI,component library,SwiftUI,Jetpack Compose,HarmonyOS,ArkTS,Flutter,React Native,Taro,uni-app,uni-app-x,uview-plus'
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/en/guide/introduction', activeMatch: '/en/guide/' },
      {
        text: 'Components',
        link: '/en/components/',
        activeMatch: '/en/components/'
      },
      { text: 'Platforms', link: '/en/guide/platforms' },
      {
        text: 'Ecosystem',
        items: [
          { text: 'Changelog', link: '/en/guide/changelog' },
          { text: 'Contributing', link: '/en/guide/contributing' },
          { text: 'FAQ', link: '/en/guide/faq' },
          { text: 'uview-plus docs', link: 'https://uview-plus.jiangruyi.com/' }
        ]
      }
    ],

    sidebar: sidebar('en'),

    outline: { level: [2, 3], label: 'On this page' },
    externalLinkIcon: true,

    editLink: {
      pattern: `${REPO}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${new Date().getFullYear()} ultra-ui`
    }
  }
}
