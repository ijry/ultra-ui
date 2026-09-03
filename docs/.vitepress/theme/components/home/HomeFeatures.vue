<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const zh = computed(() => lang.value.startsWith('zh'))

interface Feature {
  icon: string
  zh: [string, string]
  en: [string, string]
}

const features: Feature[] = [
  {
    icon: 'M4 7h16M4 12h16M4 17h10',
    zh: [
      '同名属性，同样的默认值',
      'type、size、shape、plain 在八个平台上叫同一个名字、行为一致。换端不用重学 API，只需要换语法。'
    ],
    en: [
      'Same props, same defaults',
      'type, size, shape and plain mean the same thing on all eight platforms. Moving stacks means changing syntax, not relearning an API.'
    ]
  },
  {
    icon: 'M7.5 3h9a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16.5 21h-9A1.5 1.5 0 0 1 6 19.5v-15A1.5 1.5 0 0 1 7.5 3Zm3 15h3',
    zh: [
      '真正的原生实现',
      'SwiftUI、Compose、ArkUI、Flutter、React Native 各自用平台自己的渲染管线，没有 WebView，也没有折损的手势。'
    ],
    en: [
      'Genuinely native',
      'SwiftUI, Compose, ArkUI, Flutter and React Native each use their own render pipeline — no WebView, no degraded gestures.'
    ]
  },
  {
    icon: 'M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H13a1.5 1.5 0 0 1 0-3h4a4 4 0 0 0 4-4c0-4.4-4-8-9-8ZM8 8.5h.01M7 13h.01M11 6.5h.01',
    zh: [
      '浅色与深色主题',
      '所有组件都基于一组语义化颜色变量，切换深色模式无需额外适配，主题色也可以整体替换。'
    ],
    en: [
      'Light and dark themes',
      'Every component reads from one set of semantic colour tokens, so dark mode needs no extra work and the brand colour is a single swap.'
    ]
  },
  {
    icon: 'm8 6-5 6 5 6M16 6l5 6-5 6',
    zh: [
      '完整的类型定义',
      'TypeScript、UTS、ArkTS、Swift、Kotlin、Dart 全部带类型声明，属性写错在编译期就会被拦住。'
    ],
    en: [
      'Fully typed',
      'TypeScript, UTS, ArkTS, Swift, Kotlin and Dart all ship type declarations, so a mistyped prop fails at compile time.'
    ]
  },
  {
    icon: 'm12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 18v-9m0 0 8-4.5M12 12 4 7.5',
    zh: [
      '按需引入，体积可控',
      'uni-app 侧通过 easycom 自动按需编译，其余平台按符号引入，没用到的组件不会进包。'
    ],
    en: [
      'Tree-shakeable',
      'uni-app compiles on demand through easycom; elsewhere you import symbols, so unused components never reach your bundle.'
    ]
  },
  {
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9Z',
    zh: [
      '内置国际化',
      '组件内的文案、日期与数字格式都走同一套 locale 配置，中英文之外还可以自行注册语言包。'
    ],
    en: [
      'i18n built in',
      'Component copy, dates and number formats all read one locale config, and you can register additional language packs.'
    ]
  }
]
</script>

<template>
  <section class="uui-section">
    <div class="uui-wrap">
      <header class="uui-head uui-head--center">
        <p class="uui-eyebrow">{{ zh ? '为什么是它' : 'Why ultra-ui' }}</p>
        <h2 class="uui-h2">
          {{ zh ? '跨端，但不将就' : 'Cross-platform without the compromise' }}
        </h2>
      </header>

      <div class="uui-grid uui-grid--3">
        <article v-for="(f, i) in features" :key="i" class="uui-card fcard">
          <span class="fcard-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                :d="f.icon"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h3 class="fcard-title">{{ (zh ? f.zh : f.en)[0] }}</h3>
          <p class="fcard-text">{{ (zh ? f.zh : f.en)[1] }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fcard-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  color: #fff;
  background: var(--uui-grad);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.28);
}
.fcard-title {
  margin: 18px 0 0;
  font-size: 16.5px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}
.fcard-text {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.72;
  color: var(--vp-c-text-2);
}
</style>
