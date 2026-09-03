<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { platforms } from '../../data/platforms'
import { usePlatform } from '../composables/usePlatform'

const { lang } = useData()
const { active, setPlatform } = usePlatform()
const zh = computed(() => lang.value.startsWith('zh'))

interface Recipe {
  /** what the user runs or pastes */
  code: string
  /** language for the code block styling */
  lang: string
  note: { zh: string; en: string }
}

const recipes: Record<string, Recipe> = {
  ios: {
    lang: 'swift',
    code: `// Package.swift
dependencies: [
  .package(path: "../ultra-ui-ios/UltraUI")
]

// App.swift
import UltraUI

init() { UltraUI.registerFonts() }`,
    note: {
      zh: '以本地 Swift Package 方式引入，首次启动需调用 registerFonts() 注册图标字体。',
      en: 'Added as a local Swift Package; call registerFonts() once at start-up to register the icon font.'
    }
  },
  android: {
    lang: 'kotlin',
    code: `// settings.gradle.kts
include(":ultra-ui")

// app/build.gradle.kts
dependencies {
  implementation(project(":ultra-ui"))
}`,
    note: {
      zh: '当前以本地 Gradle 模块引入，尚未发布到 Maven Central。',
      en: 'Consumed as a local Gradle module; not published to Maven Central yet.'
    }
  },
  harmony: {
    lang: 'json',
    code: `// oh-package.json5
"dependencies": {
  "@lingyun/ultra-ui-hos": "file:../ultra-ui/build/default/outputs/default/ultra_ui.har"
}`,
    note: {
      zh: '以 HAR 静态包引入，也可从 DevEco 的 ohpm 私仓安装。最低 API 24。',
      en: 'Installed as a HAR static library, or from an ohpm registry. Requires API 24 or newer.'
    }
  },
  flutter: {
    lang: 'yaml',
    code: `# pubspec.yaml
dependencies:
  ultra_ui:
    path: ../ultra-ui-flutter/packages/ultra_ui`,
    note: {
      zh: '通过 path 依赖引入；ultra_ui_media 是可选包，提供真实的 PDF 与视频后端。',
      en: 'Added as a path dependency. The optional ultra_ui_media package supplies real PDF and video backends.'
    }
  },
  reactnative: {
    lang: 'bash',
    code: `npm install ultra-ui-rn
# peer deps
npm install react-native-gesture-handler react-native-reanimated \\
            react-native-safe-area-context`,
    note: {
      zh: '安装后在应用根节点挂载 <UPRoot />，Toast 与 Notify 的全局调用依赖它。',
      en: 'Mount <UPRoot /> at the app root afterwards — the global toast and notify APIs depend on it.'
    }
  },
  taro: {
    lang: 'ts',
    code: `// tsconfig.json
"paths": { "@ultra-ui": ["src/ultra-ui"] }

// app.tsx
import '@ultra-ui/styles/index.scss'
import { UPRoot } from '@ultra-ui'`,
    note: {
      zh: '库与示例同仓，通过 @ultra-ui 路径别名引用，未发布到 npm。',
      en: 'Library and demo live in one repo and are referenced through the @ultra-ui path alias; not on npm.'
    }
  },
  uniapp: {
    lang: 'bash',
    code: `npm install uview-plus`,
    note: {
      zh: '再在 pages.json 配置 easycom 规则，组件即可直接以 <up-xxx> 使用，无需 import。',
      en: 'Then add the easycom rule to pages.json and use <up-xxx> directly, with no import.'
    }
  },
  uniappx: {
    lang: 'bash',
    code: `# 从 DCloud 插件市场导入 uview-ultra
# https://ext.dcloud.net.cn/plugin?name=uview-ultra`,
    note: {
      zh: '通过插件市场导入到 uni_modules 目录，需要 HBuilderX 与 uni-app-x 4.87 以上。',
      en: 'Imported into uni_modules from the DCloud plugin market; needs HBuilderX and uni-app-x 4.87+.'
    }
  }
}

const current = computed(
  () => platforms.find((p) => p.id === active.value) ?? platforms[0]
)
const recipe = computed(() => recipes[current.value.id])
</script>

<template>
  <div class="install">
    <div class="install-tabs" role="tablist" :aria-label="zh ? '平台' : 'Platform'">
      <button
        v-for="p in platforms"
        :key="p.id"
        class="install-tab"
        :class="{ 'is-active': p.id === current.id }"
        type="button"
        role="tab"
        :aria-selected="p.id === current.id"
        @click="setPlatform(p.id)"
      >
        <span
          class="uui-chip-dot"
          :style="{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }"
          aria-hidden="true"
          >{{ p.abbr }}</span
        >
        {{ p.name }}
      </button>
    </div>

    <div class="install-body">
      <p class="install-meta">
        <code>{{ current.pkg }}</code>
        <span class="install-kind">{{ current.pkgKind }}</span>
        <span v-if="current.version !== '—'" class="install-ver">
          v{{ current.version }}
        </span>
      </p>
      <pre class="install-code"><code>{{ recipe.code }}</code></pre>
      <p class="install-note">{{ recipe.note[zh ? 'zh' : 'en'] }}</p>
    </div>
  </div>
</template>

<style scoped>
.install {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  overflow: hidden;
}

.install-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.install-tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 11px 5px 4px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  transition:
    color 0.2s,
    background-color 0.2s,
    border-color 0.2s;
}
.install-tab:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}
.install-tab.is-active {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}

.install-body {
  padding: 20px;
}

.install-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  font-size: 13px;
}
.install-meta code {
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.install-kind,
.install-ver {
  color: var(--vp-c-text-3);
}
.install-ver {
  font-variant-numeric: tabular-nums;
}

.install-code {
  margin: 0;
  padding: 16px 18px;
  border-radius: 10px;
  background: var(--vp-code-block-bg, var(--vp-c-bg-alt));
  overflow-x: auto;
}
.install-code code {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.75;
  color: var(--vp-c-text-1);
  white-space: pre;
}

.install-note {
  margin: 14px 0 0;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
</style>
