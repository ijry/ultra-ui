<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useData } from 'vitepress'
import { platforms } from '../../../data/platforms'
import { totalComponents } from '../../../data/registry'
import { usePlatform } from '../../composables/usePlatform'
import { useLocalePath } from '../../composables/useLocalePath'

const slots = useSlots()
const { active, setPlatform } = usePlatform()
const { zh, path } = useLocalePath()

const available = computed(() => platforms.filter((p) => slots[p.id]))
const current = computed(() => {
  const ids = available.value.map((p) => p.id)
  return ids.includes(active.value) ? active.value : ids[0]
})
const shown = computed(() => platforms.find((p) => p.id === current.value))
</script>

<template>
  <section class="hero">
    <div class="hero-glow" aria-hidden="true" />

    <div class="uui-wrap hero-grid">
      <div class="hero-copy">
        <p class="hero-eyebrow">
          <span class="hero-dot" />
          {{ zh ? '开源 · MIT 许可' : 'Open source · MIT licensed' }}
        </p>

        <h1 class="hero-title">
          <template v-if="zh">
            一套设计语言<br />
            <span class="grad">八端原生实现</span>
          </template>
          <template v-else>
            One design language<br />
            <span class="grad">eight native runtimes</span>
          </template>
        </h1>

        <p class="hero-lede">
          <template v-if="zh">
            iOS SwiftUI、Android Compose、鸿蒙 Next ArkTS、Flutter、React
            Native、Taro、uni-app、uni-app-x —— 相同的属性名，相同的视觉，
            各自平台的原生渲染。
          </template>
          <template v-else>
            iOS SwiftUI, Android Compose, HarmonyOS Next ArkTS, Flutter, React
            Native, Taro, uni-app and uni-app-x — the same property names, the
            same visuals, rendered natively on each platform.
          </template>
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" :href="path('/guide/quickstart')">
            {{ zh ? '快速上手' : 'Get started' }}
          </a>
          <a class="btn btn-ghost" :href="path('/components/')">
            {{ zh ? '浏览组件' : 'Browse components' }}
          </a>
        </div>

        <dl class="hero-stats">
          <div>
            <dt>{{ totalComponents }}</dt>
            <dd>{{ zh ? '个组件' : 'components' }}</dd>
          </div>
          <div>
            <dt>{{ platforms.length }}</dt>
            <dd>{{ zh ? '个平台' : 'platforms' }}</dd>
          </div>
          <div>
            <dt>100%</dt>
            <dd>{{ zh ? '开源' : 'open source' }}</dd>
          </div>
        </dl>
      </div>

      <div class="hero-visual">
        <div class="win">
          <div class="win-bar">
            <span class="win-dots" aria-hidden="true">
              <i /><i /><i />
            </span>
            <span class="win-title">{{ shown?.name }} · {{ shown?.stack }}</span>
          </div>

          <div class="win-tabs" role="tablist" :aria-label="zh ? '平台' : 'Platform'">
            <button
              v-for="p in available"
              :key="p.id"
              class="win-tab"
              :class="{ 'is-active': p.id === current }"
              type="button"
              role="tab"
              :aria-selected="p.id === current"
              :title="`${p.name} · ${p.stack}`"
              @click="setPlatform(p.id)"
            >
              <span
                class="win-tile"
                :style="{
                  backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})`
                }"
                >{{ p.abbr }}</span
              >
            </button>
          </div>

          <div class="win-body">
            <div v-for="p in available" v-show="p.id === current" :key="p.id">
              <slot :name="p.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 72px 24px 88px;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -320px;
  left: 50%;
  width: 1100px;
  height: 620px;
  transform: translateX(-50%);
  background: var(--uui-grad);
  opacity: 0.16;
  filter: blur(120px);
  pointer-events: none;
}
.dark .hero-glow {
  opacity: 0.24;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
}

/* --- copy ---------------------------------------------------------- */

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px;
  padding: 5px 12px 5px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}
.hero-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgb(34 197 94 / 0.18);
}

.hero-title {
  margin: 0;
  font-size: clamp(34px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}
.grad {
  background: var(--uui-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-lede {
  max-width: 34em;
  margin: 22px 0 0;
  font-size: 17px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.btn {
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 22px;
  border-radius: 22px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
}
.btn-primary {
  color: #fff;
  background: var(--uui-grad);
  box-shadow: 0 6px 20px -8px rgb(79 91 255 / 0.7);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 28px -8px rgb(79 91 255 / 0.8);
}
.btn-ghost {
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}
.btn-ghost:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin: 44px 0 0;
}
.hero-stats dt {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}
.hero-stats dd {
  margin: 2px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

/* --- code window --------------------------------------------------- */

.win {
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-alt);
  box-shadow: var(--uui-shadow-lg);
  overflow: hidden;
}

.win-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 40px;
  padding: 0 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.win-dots {
  display: inline-flex;
  gap: 6px;
}
.win-dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--vp-c-divider);
}
.win-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-3);
}

.win-tabs {
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  overflow-x: auto;
  scrollbar-width: none;
  border-bottom: 1px solid var(--vp-c-divider);
}
.win-tabs::-webkit-scrollbar {
  display: none;
}
.win-tab {
  flex: 0 0 auto;
  padding: 2px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  opacity: 0.42;
  transition:
    opacity 0.2s,
    border-color 0.2s;
}
.win-tab:hover {
  opacity: 0.8;
}
.win-tab.is-active {
  opacity: 1;
  border-color: var(--vp-c-brand-1);
}
.win-tile {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  height: 22px;
  padding: 0 6px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 0.2);
}

.win-body {
  min-height: 230px;
  padding: 4px 0;
}
.win-body :deep(div[class*='language-']) {
  margin: 0;
  border-radius: 0;
  background: transparent;
}
.win-body :deep(div[class*='language-'] pre) {
  padding: 16px 20px;
  font-size: 13px;
  line-height: 1.7;
}
.win-body :deep(.lang),
.win-body :deep(button.copy) {
  display: none;
}

@media (max-width: 960px) {
  .hero {
    padding: 44px 20px 64px;
  }
  .hero-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
  .hero-stats {
    gap: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover {
    transform: none;
  }
}
</style>
