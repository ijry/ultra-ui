import type { DefaultTheme, UserConfig } from 'vitepress'

const ORG = 'https://github.com/ly-ultra-ui'
const REPO = `${ORG}/ly-ultra-ui.github.io`

const SITE_ORIGIN = 'https://ly-ultra-ui.github.io'

/**
 * Deploy base. This repository *is* the ly-ultra-ui organisation's Pages site,
 * so it is served from the domain root. To publish to a project sub-path
 * instead, set this to '/<repo-name>/' — assets, the favicon, the sitemap and
 * every link built by useLocalePath() follow from here.
 */
export const BASE = '/'

export const shared: UserConfig<DefaultTheme.Config> = {
  srcDir: '.',
  outDir: '../dist',
  base: BASE,
  // Verified against the live deploy: GitHub Pages answers /components/button
  // with the contents of components/button.html (200, no redirect), and
  // normalises /components to /components/. Clean URLs are safe here.
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#4f5bff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'ultra-ui' }]
  ],

  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  sitemap: {
    hostname: `${SITE_ORIGIN}${BASE}`
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: ORG }],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  }
}

export { ORG, REPO, SITE_ORIGIN }
