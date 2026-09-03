<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { platforms } from '../../data/platforms'
import { usePlatform } from '../composables/usePlatform'

const { active, setPlatform } = usePlatform()
const { lang } = useData()

const zh = computed(() => lang.value.startsWith('zh'))
const current = computed(
  () => platforms.find((p) => p.id === active.value) ?? platforms[0]
)

/** The monogram already says "iOS" — don't print it twice. */
const label = computed(() =>
  current.value.abbr.toLowerCase() === current.value.name.toLowerCase()
    ? current.value.stack
    : current.value.name
)
</script>

<template>
  <div class="uui-picker" :title="zh ? '切换平台' : 'Switch platform'">
    <span
      class="uui-picker-tile"
      :style="{
        backgroundImage: `linear-gradient(135deg, ${current.from}, ${current.to})`
      }"
      aria-hidden="true"
      >{{ current.abbr }}</span
    >
    <span class="uui-picker-name">{{ label }}</span>
    <svg
      class="uui-picker-chevron"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
    >
      <path
        d="M1.5 3.5 5 7l3.5-3.5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <select
      class="uui-picker-select"
      :aria-label="zh ? '切换平台' : 'Switch platform'"
      :value="active"
      @change="setPlatform(($event.target as HTMLSelectElement).value)"
    >
      <option v-for="p in platforms" :key="p.id" :value="p.id">
        {{ p.name }} · {{ p.stack }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.uui-picker {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 32px;
  padding: 0 8px 0 4px;
  margin-right: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  transition: border-color 0.2s;
}

.uui-picker:hover {
  border-color: var(--vp-c-brand-1);
}

.uui-picker:focus-within {
  border-color: var(--vp-c-brand-1);
  outline: 2px solid var(--vp-c-brand-soft);
}

.uui-picker-tile {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 20px;
  padding: 0 5px;
  border-radius: 5px;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 0.2);
}

.uui-picker-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

.uui-picker-chevron {
  color: var(--vp-c-text-3);
  flex: 0 0 auto;
}

/* Native select, invisible but on top — gives us free keyboard and mobile UX. */
.uui-picker-select {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  appearance: none;
  border: 0;
}
</style>
