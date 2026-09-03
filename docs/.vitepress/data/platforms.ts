/**
 * Single source of truth for the platforms ultra-ui ships on.
 * Consumed by the theme components (platform tabs, home page, support matrix)
 * and by scripts/gen-components.mjs when it scans the sibling source repos.
 */

export interface Platform {
  /** stable id — used as the PlatformTabs slot name and in localStorage */
  id: string
  /** 2-4 char monogram rendered inside the coloured tile */
  abbr: string
  /** display name (identical in both locales) */
  name: string
  /** language / stack shown under the name */
  stack: string
  /** shiki language id for fenced code blocks */
  lang: string
  /** brand gradient */
  from: string
  to: string
  /** folder name of the source repo, relative to the docs-site root */
  dir: string
  /** where components live inside that repo */
  srcDir: string
  /** demo/sample app root, used to lift real usage snippets */
  demoDir: string
  /** file extensions worth scanning inside demoDir */
  demoExts: string[]
  /** `tag` = markup like `<up-button>`, `call` = `UPButton(...)` */
  syntax: 'tag' | 'call'
  /** package identifier a user installs */
  pkg: string
  /** how that package is consumed — shown on the install card */
  pkgKind: string
  /** version currently in the source tree */
  version: string
  /** short pitch, per locale */
  tagline: { zh: string; en: string }
}

export const platforms: Platform[] = [
  {
    id: 'ios',
    abbr: 'iOS',
    name: 'iOS',
    stack: 'SwiftUI',
    lang: 'swift',
    from: '#3b82f6',
    to: '#0ea5e9',
    dir: 'ultra-ui-ios',
    srcDir: 'UltraUI/Sources/UltraUI/Components',
    demoDir: 'Demo',
    demoExts: ['.swift'],
    syntax: 'call',
    pkg: 'UltraUI',
    pkgKind: 'Swift Package',
    version: '0.1.0',
    tagline: {
      zh: '原生 SwiftUI 实现，iOS 17+ / macOS 14+，完整适配深色模式。',
      en: 'Native SwiftUI for iOS 17+ and macOS 14+, dark mode included.'
    }
  },
  {
    id: 'android',
    abbr: 'AND',
    name: 'Android',
    stack: 'Jetpack Compose',
    lang: 'kotlin',
    from: '#22c55e',
    to: '#4ade80',
    dir: 'ultra-ui-android',
    srcDir: 'ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components',
    demoDir: 'sample/src/main/kotlin/net/lingyun/ultraui/android/sample',
    demoExts: ['.kt'],
    syntax: 'call',
    pkg: 'net.lingyun.ultraui.android',
    pkgKind: 'Gradle module',
    version: '—',
    tagline: {
      zh: '基于 Jetpack Compose 的声明式实现，可直接接入 Material 3 主题。',
      en: 'Declarative Jetpack Compose implementation that plugs into Material 3.'
    }
  },
  {
    id: 'harmony',
    abbr: 'HOS',
    name: 'HarmonyOS Next',
    stack: 'ArkTS / ArkUI',
    lang: 'typescript',
    from: '#0a59f7',
    to: '#38bdf8',
    dir: 'ultra-ui-hos',
    srcDir: 'ultra-ui/src/main/ets/components',
    demoDir: 'sample/entry/src/main/ets/demos',
    demoExts: ['.ets'],
    syntax: 'call',
    pkg: '@lingyun/ultra-ui-hos',
    pkgKind: 'ohpm HAR',
    version: '1.0.0',
    tagline: {
      zh: '纯 ArkTS 编写的鸿蒙原生组件，最低 API 24，遵循 HarmonyOS 设计规范。',
      en: 'Pure ArkTS components for HarmonyOS Next (API 24+), native by design.'
    }
  },
  {
    id: 'flutter',
    abbr: 'FLU',
    name: 'Flutter',
    stack: 'Dart',
    lang: 'dart',
    from: '#0ea5e9',
    to: '#5eead4',
    dir: 'ultra-ui-flutter',
    srcDir: 'packages/ultra_ui/lib/src/widgets',
    demoDir: 'example/lib/pages',
    demoExts: ['.dart'],
    syntax: 'call',
    pkg: 'ultra_ui',
    pkgKind: 'Dart package',
    version: '0.1.0',
    tagline: {
      zh: '一套 Dart 代码跨 iOS / Android / Web / 桌面运行。',
      en: 'One Dart codebase running on iOS, Android, web and desktop.'
    }
  },
  {
    id: 'reactnative',
    abbr: 'RN',
    name: 'React Native',
    stack: 'TypeScript',
    lang: 'tsx',
    from: '#38bdf8',
    to: '#818cf8',
    dir: 'ultra-ui-rn',
    srcDir: 'src/components',
    demoDir: 'example/pages',
    demoExts: ['.tsx'],
    syntax: 'tag',
    pkg: 'ultra-ui-rn',
    pkgKind: 'npm',
    version: '0.1.0',
    tagline: {
      zh: '完整 TypeScript 类型，兼容 Expo 与裸 RN 工程。',
      en: 'Fully typed, works with both Expo and bare React Native projects.'
    }
  },
  {
    id: 'taro',
    abbr: 'TARO',
    name: 'Taro',
    stack: 'React + TypeScript',
    lang: 'tsx',
    from: '#6366f1',
    to: '#a78bfa',
    dir: 'ultra-ui-taro',
    srcDir: 'src/ultra-ui/components',
    demoDir: 'src/pages/components',
    demoExts: ['.tsx'],
    syntax: 'tag',
    pkg: '@ultra-ui',
    pkgKind: 'path alias',
    version: '1.0.0',
    tagline: {
      zh: '一次编写，编译到微信 / 支付宝 / 抖音等各家小程序与 H5。',
      en: 'Write once, compile to WeChat, Alipay and ByteDance mini programs plus H5.'
    }
  },
  {
    id: 'uniapp',
    abbr: 'UNI',
    name: 'uni-app',
    stack: 'Vue 3',
    lang: 'vue',
    from: '#16a34a',
    to: '#84cc16',
    dir: 'uview-plus4',
    srcDir: 'uni_modules/uview-ultra/components',
    demoDir: 'pages',
    demoExts: ['.uvue', '.vue'],
    syntax: 'tag',
    pkg: 'uview-plus',
    pkgKind: 'npm',
    version: '3.8.116',
    tagline: {
      zh: 'uview-plus 3.x，Vue 3 + easycom，覆盖 App / H5 / 全端小程序。',
      en: 'uview-plus 3.x — Vue 3 with easycom, covering app, H5 and every mini program.'
    }
  },
  {
    id: 'uniappx',
    abbr: 'UVX',
    name: 'uni-app-x',
    stack: 'UTS / UVUE',
    lang: 'vue',
    from: '#a855f7',
    to: '#f472b6',
    dir: 'uview-plus4',
    srcDir: 'uni_modules/uview-ultra/components',
    demoDir: 'pages',
    demoExts: ['.uvue', '.vue'],
    syntax: 'tag',
    pkg: 'uview-ultra',
    pkgKind: 'DCloud 插件市场',
    version: '4.5.36',
    tagline: {
      zh: 'uview-ultra 4.x，UTS 编译为原生代码，性能对齐原生应用。',
      en: 'uview-ultra 4.x — UTS compiled to native code for true native performance.'
    }
  }
]

export const platformIds = platforms.map((p) => p.id)

export const platformMap: Record<string, Platform> = Object.fromEntries(
  platforms.map((p) => [p.id, p])
)

export function getPlatform(id: string): Platform | undefined {
  return platformMap[id]
}
