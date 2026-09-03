import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

/**
 * Build an in-site href from a locale-agnostic path.
 *
 * Two things have to be applied that a raw `href` in a template would miss:
 * the locale prefix (`/en` for English, nothing for the root Chinese locale)
 * and the deploy base (`/ultra-ui/` on GitHub Pages). Because `cleanUrls` is
 * off for Pages, page paths also need their `.html` suffix — directory paths
 * ending in `/` resolve to `index.html` on their own and are left alone.
 *
 *   path('/guide/quickstart')  ->  /ultra-ui/en/guide/quickstart.html
 *   path('/components/')       ->  /ultra-ui/en/components/
 */
export function useLocalePath() {
  const { lang } = useData()
  const zh = computed(() => lang.value.startsWith('zh'))

  function path(p: string): string {
    const prefix = zh.value ? '' : '/en'
    const suffix = p.endsWith('/') || p.endsWith('.html') ? '' : '.html'
    return withBase(`${prefix}${p}${suffix}`)
  }

  return { zh, path }
}
