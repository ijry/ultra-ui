import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

/**
 * Build an in-site href from a locale-agnostic path.
 *
 * Two things have to be applied that a raw `href` in a template would miss:
 * the locale prefix (`/en` for English, nothing for the root Chinese locale)
 * and the deploy base. The `.html` suffix is added only when `cleanUrls` is
 * off, so switching that config setting cannot leave dead links behind.
 * Directory paths ending in `/` resolve to `index.html` on their own.
 *
 *   path('/guide/quickstart')  ->  /en/guide/quickstart
 *   path('/components/')       ->  /en/components/
 */
export function useLocalePath() {
  const { lang, site } = useData()
  const zh = computed(() => lang.value.startsWith('zh'))

  function path(p: string): string {
    const prefix = zh.value ? '' : '/en'
    const needsHtml =
      !site.value.cleanUrls && !p.endsWith('/') && !p.endsWith('.html')
    return withBase(`${prefix}${p}${needsHtml ? '.html' : ''}`)
  }

  return { zh, path }
}
