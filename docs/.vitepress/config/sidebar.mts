import type { DefaultTheme } from 'vitepress'
import { groups } from '../data/groups'
import { components } from '../data/registry'

type Locale = 'zh' | 'en'

/** '' for the root (Chinese) locale, '/en' for English. */
function prefix(locale: Locale): string {
  return locale === 'zh' ? '' : '/en'
}

const guideText = {
  zh: {
    start: '开始',
    intro: '介绍',
    platforms: '平台支持',
    quickstart: '快速上手',
    deep: '进阶',
    conventions: '通用约定',
    theme: '主题定制',
    i18n: '国际化',
    faq: '常见问题',
    project: '项目',
    contributing: '参与贡献',
    changelog: '更新日志',
    overview: '组件总览'
  },
  en: {
    start: 'Getting started',
    intro: 'Introduction',
    platforms: 'Platform support',
    quickstart: 'Quick start',
    deep: 'In depth',
    conventions: 'Conventions',
    theme: 'Theming',
    i18n: 'Internationalization',
    faq: 'FAQ',
    project: 'Project',
    contributing: 'Contributing',
    changelog: 'Changelog',
    overview: 'All components'
  }
} as const

export function guideSidebar(locale: Locale): DefaultTheme.SidebarItem[] {
  const p = prefix(locale)
  const t = guideText[locale]
  return [
    {
      text: t.start,
      collapsed: false,
      items: [
        { text: t.intro, link: `${p}/guide/introduction` },
        { text: t.platforms, link: `${p}/guide/platforms` },
        { text: t.quickstart, link: `${p}/guide/quickstart` }
      ]
    },
    {
      text: t.deep,
      collapsed: false,
      items: [
        { text: t.conventions, link: `${p}/guide/conventions` },
        { text: t.theme, link: `${p}/guide/theme` },
        { text: t.i18n, link: `${p}/guide/i18n` },
        { text: t.faq, link: `${p}/guide/faq` }
      ]
    },
    {
      text: t.project,
      collapsed: false,
      items: [
        { text: t.contributing, link: `${p}/guide/contributing` },
        { text: t.changelog, link: `${p}/guide/changelog` }
      ]
    }
  ]
}

/**
 * Component sidebar, generated from the registry so adding a component to a
 * source repo and re-running `npm run gen` is enough to make it appear here.
 */
export function componentSidebar(locale: Locale): DefaultTheme.SidebarItem[] {
  const p = prefix(locale)
  const t = guideText[locale]

  const sections = groups
    .map((g) => {
      const items = components
        .filter((c) => c.group === g.id)
        .map((c) => ({
          text: locale === 'zh' ? c.name.zh : c.name.en,
          link: `${p}/components/${c.id}`
        }))
      return { text: `${g.label[locale]} (${items.length})`, collapsed: false, items }
    })
    .filter((s) => s.items.length > 0)

  return [
    { text: t.overview, link: `${p}/components/` },
    ...sections
  ]
}

export function sidebar(locale: Locale): DefaultTheme.Sidebar {
  const p = prefix(locale)
  return {
    [`${p}/guide/`]: guideSidebar(locale),
    [`${p}/components/`]: componentSidebar(locale)
  }
}
