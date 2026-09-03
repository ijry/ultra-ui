<script setup lang="ts">
import { platforms } from '../../../data/platforms'
import { coverage, totalComponents } from '../../../data/registry'
import { usePlatform } from '../../composables/usePlatform'
import { useLocalePath } from '../../composables/useLocalePath'

const { setPlatform } = usePlatform()
const { zh, path } = useLocalePath()
const counts = coverage()
</script>

<template>
  <section class="uui-section uui-section--tint">
    <div class="uui-wrap">
      <header class="uui-head uui-head--center">
        <p class="uui-eyebrow">{{ zh ? '八个平台' : 'Eight platforms' }}</p>
        <h2 class="uui-h2">
          {{ zh ? '每一端都是原生渲染' : 'Native rendering everywhere' }}
        </h2>
        <p class="uui-lede">
          {{
            zh
              ? '不是 WebView 套壳。每个平台都用它自己的声明式 UI 框架重新实现了同一套组件，因此手势、滚动与动画都跟系统控件一致。'
              : 'Not a WebView shell. Each platform reimplements the same components in its own declarative UI framework, so gestures, scrolling and animation match the system.'
          }}
        </p>
      </header>

      <div class="uui-grid uui-grid--4">
        <a
          v-for="p in platforms"
          :key="p.id"
          class="uui-card pcard"
          :href="path('/guide/quickstart')"
          @click="setPlatform(p.id)"
        >
          <span
            class="uui-tile"
            :style="{
              backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})`
            }"
            >{{ p.abbr }}</span
          >
          <h3 class="pcard-name">{{ p.name }}</h3>
          <p class="pcard-stack">{{ p.stack }}</p>
          <p class="pcard-tag">{{ p.tagline[zh ? 'zh' : 'en'] }}</p>

          <div class="pcard-meter" :aria-hidden="true">
            <span
              :style="{
                width: `${(counts[p.id] / totalComponents) * 100}%`,
                backgroundImage: `linear-gradient(90deg, ${p.from}, ${p.to})`
              }"
            />
          </div>
          <p class="pcard-count">
            {{ counts[p.id] }} / {{ totalComponents }}
            {{ zh ? '个组件' : 'components' }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pcard {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}
.pcard-name {
  margin: 16px 0 2px;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}
.pcard-stack {
  margin: 0;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}
.pcard-tag {
  flex: 1;
  margin: 12px 0 20px;
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}
.pcard-meter {
  height: 4px;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
  overflow: hidden;
}
.pcard-meter span {
  display: block;
  height: 100%;
  border-radius: 999px;
}
.pcard-count {
  margin: 8px 0 0;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
}
</style>
