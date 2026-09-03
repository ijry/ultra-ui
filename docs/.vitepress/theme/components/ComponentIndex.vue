<script setup lang="ts">
import { computed, ref } from 'vue'
import { platforms } from '../../data/platforms'
import { groups } from '../../data/groups'
import { components, totalComponents } from '../../data/registry'
import { useLocalePath } from '../composables/useLocalePath'

const { zh, path } = useLocalePath()
const locale = computed<'zh' | 'en'>(() => (zh.value ? 'zh' : 'en'))

const query = ref('')
/** null = every platform; otherwise only components available on that one */
const only = ref<string | null>(null)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return components.filter((c) => {
    if (only.value && !c.platforms[only.value]) return false
    if (!q) return true
    return (
      c.id.includes(q) ||
      c.name.en.toLowerCase().includes(q) ||
      c.name.zh.toLowerCase().includes(q)
    )
  })
})

const sections = computed(() =>
  groups
    .map((g) => ({ ...g, items: filtered.value.filter((c) => c.group === g.id) }))
    .filter((g) => g.items.length > 0)
)
</script>

<template>
  <div class="cindex">
    <div class="cindex-bar">
      <label class="cindex-search">
        <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2" />
          <path d="m16.5 16.5 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <input
          v-model="query"
          type="search"
          :placeholder="zh ? '搜索组件名…' : 'Search components…'"
          :aria-label="zh ? '搜索组件' : 'Search components'"
        />
      </label>

      <div class="cindex-filters">
        <button
          class="cindex-pill"
          :class="{ 'is-active': only === null }"
          type="button"
          @click="only = null"
        >
          {{ zh ? '全部平台' : 'All platforms' }}
        </button>
        <button
          v-for="p in platforms"
          :key="p.id"
          class="cindex-pill"
          :class="{ 'is-active': only === p.id }"
          type="button"
          @click="only = only === p.id ? null : p.id"
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

      <p class="cindex-count">
        {{ filtered.length }} / {{ totalComponents }}
      </p>
    </div>

    <section v-for="g in sections" :key="g.id" class="cindex-group">
      <h3 class="cindex-gname">
        {{ g.label[locale] }}
        <span>{{ g.items.length }}</span>
      </h3>
      <div class="cindex-items">
        <a
          v-for="c in g.items"
          :key="c.id"
          class="cindex-item"
          :href="path(`/components/${c.id}`)"
        >
          <span class="cindex-item-name">{{ c.name.en }}</span>
          <span v-if="zh" class="cindex-item-zh">{{ c.name.zh.replace(c.name.en, '').trim() }}</span>
          <span class="cindex-item-dots">
            <i
              v-for="p in platforms"
              :key="p.id"
              :class="{ off: !c.platforms[p.id] }"
              :style="
                c.platforms[p.id]
                  ? { backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }
                  : undefined
              "
              :title="p.name"
            />
          </span>
        </a>
      </div>
    </section>

    <p v-if="sections.length === 0" class="cindex-empty">
      {{ zh ? '没有匹配的组件。' : 'No components match that filter.' }}
    </p>
  </div>
</template>

<style scoped>
.cindex {
  margin: 28px 0 0;
}

.cindex-bar {
  position: relative;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.cindex-search {
  display: flex;
  align-items: center;
  gap: 9px;
  height: 38px;
  padding: 0 13px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 9px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-3);
}
.cindex-search:focus-within {
  border-color: var(--vp-c-brand-1);
}
.cindex-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.cindex-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.cindex-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 4px 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  cursor: pointer;
  transition:
    color 0.18s,
    border-color 0.18s;
}
.cindex-pill:first-child {
  padding-left: 10px;
}
.cindex-pill:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}
.cindex-pill.is-active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.cindex-count {
  position: absolute;
  top: 26px;
  right: 30px;
  margin: 0;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
  pointer-events: none;
}

.cindex-group {
  margin-top: 36px;
}
.cindex-gname {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  padding: 0;
  border: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.cindex-gname span {
  padding: 1px 7px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-text-3);
  background: var(--vp-c-default-soft);
}

.cindex-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
  gap: 10px;
}

.cindex-item {
  display: block;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  text-decoration: none;
  transition:
    border-color 0.18s,
    box-shadow 0.18s;
}
.cindex-item:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--uui-shadow);
}
.cindex-item-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.cindex-item-zh {
  display: block;
  margin-top: 1px;
  font-size: 12px;
  color: var(--vp-c-text-3);
}
.cindex-item-dots {
  display: flex;
  gap: 3px;
  margin-top: 10px;
}
.cindex-item-dots i {
  width: 12px;
  height: 4px;
  border-radius: 2px;
}
.cindex-item-dots i.off {
  background: var(--vp-c-divider);
}

.cindex-empty {
  margin: 32px 0;
  text-align: center;
  color: var(--vp-c-text-3);
}
</style>
