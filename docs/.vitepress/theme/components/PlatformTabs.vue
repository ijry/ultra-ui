<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useData } from 'vitepress'
import { platforms } from '../../data/platforms'
import { usePlatform } from '../composables/usePlatform'

const props = defineProps<{
  /** Restrict + reorder the tabs. Defaults to whatever slots were provided. */
  only?: string[]
}>()

const slots = useSlots()
const { active, setPlatform } = usePlatform()
const { lang } = useData()

const groupId = Math.random().toString(36).slice(2, 9)

const zh = computed(() => lang.value.startsWith('zh'))

/** Canonical platform order, filtered down to the slots this instance received. */
const available = computed(() => {
  const allow = props.only
  return platforms.filter(
    (p) => Boolean(slots[p.id]) && (!allow || allow.includes(p.id))
  )
})

/** The globally selected platform, or the closest thing this group can show. */
const current = computed(() => {
  const ids = available.value.map((p) => p.id)
  return ids.includes(active.value) ? active.value : ids[0]
})

/** True when we had to fall back, i.e. this component is missing a platform. */
const fellBack = computed(
  () => available.value.length > 0 && current.value !== active.value
)

const requested = computed(() => platforms.find((p) => p.id === active.value))
const shown = computed(() => platforms.find((p) => p.id === current.value))

function onKeydown(event: KeyboardEvent, index: number) {
  const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End']
  if (!keys.includes(event.key)) return
  event.preventDefault()

  const list = available.value
  const next =
    event.key === 'ArrowRight'
      ? (index + 1) % list.length
      : event.key === 'ArrowLeft'
        ? (index - 1 + list.length) % list.length
        : event.key === 'Home'
          ? 0
          : list.length - 1

  setPlatform(list[next].id)
  const el = document.querySelectorAll<HTMLButtonElement>(
    '.pt-tab[data-group="' + groupId + '"]'
  )[next]
  el?.focus()
}
</script>

<template>
  <div class="platform-tabs" :class="{ 'is-single': available.length === 1 }">
    <div
      class="pt-tablist"
      role="tablist"
      :aria-label="zh ? '平台' : 'Platform'"
    >
      <button
        v-for="(p, i) in available"
        :key="p.id"
        class="pt-tab"
        :class="{ 'is-active': p.id === current }"
        :data-group="groupId"
        role="tab"
        type="button"
        :aria-selected="p.id === current"
        :tabindex="p.id === current ? 0 : -1"
        @click="setPlatform(p.id)"
        @keydown="onKeydown($event, i)"
      >
        <span
          class="pt-badge"
          :style="{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }"
          aria-hidden="true"
          >{{ p.abbr }}</span
        >
        <span class="pt-name">{{ p.name }}</span>
      </button>
    </div>

    <p v-if="fellBack" class="pt-fallback">
      <template v-if="zh">
        {{ requested?.name }} 暂未提供该内容，当前显示 {{ shown?.name }}。
      </template>
      <template v-else>
        Not available for {{ requested?.name }} yet — showing
        {{ shown?.name }} instead.
      </template>
    </p>

    <div
      v-for="p in available"
      v-show="p.id === current"
      :key="p.id"
      class="pt-panel"
      role="tabpanel"
      :aria-label="p.name"
    >
      <slot :name="p.id" />
    </div>
  </div>
</template>

<style scoped>
.platform-tabs {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.pt-tablist {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.is-single .pt-tablist {
  padding-bottom: 10px;
}

.pt-tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex: 0 0 auto;
  padding: 5px 11px 5px 4px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 0.2s,
    background-color 0.2s,
    border-color 0.2s;
}

.pt-tab:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.pt-tab.is-active {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}

.pt-tab:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

.pt-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 18px;
  padding: 0 5px;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 0.18);
}

.pt-fallback {
  margin: 0;
  padding: 10px 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-warning-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.pt-panel {
  padding: 4px 20px 8px;
  background: var(--vp-c-bg);
}

/* Let fenced code sit flush inside the panel instead of double-padding. */
.pt-panel :deep(div[class*='language-']) {
  margin: 16px -20px;
  border-radius: 0;
}
.pt-panel :deep(> :first-child) {
  margin-top: 16px;
}
.pt-panel :deep(> :last-child) {
  margin-bottom: 16px;
}

@media (max-width: 640px) {
  .pt-panel {
    padding: 4px 12px 8px;
  }
  .pt-panel :deep(div[class*='language-']) {
    margin-left: -12px;
    margin-right: -12px;
  }
  .pt-name {
    display: none;
  }
  .pt-tab {
    padding: 5px 6px;
  }
}
</style>
