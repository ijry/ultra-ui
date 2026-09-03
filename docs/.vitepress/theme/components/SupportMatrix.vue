<script setup lang="ts">
import { computed } from 'vue'
import { platforms } from '../../data/platforms'
import { groups } from '../../data/groups'
import { components, coverage, totalComponents } from '../../data/registry'
import { useLocalePath } from '../composables/useLocalePath'

const { zh, path } = useLocalePath()
const locale = computed<'zh' | 'en'>(() => (zh.value ? 'zh' : 'en'))

const counts = coverage()
const sections = computed(() =>
  groups
    .map((g) => ({ ...g, items: components.filter((c) => c.group === g.id) }))
    .filter((g) => g.items.length > 0)
)
</script>

<template>
  <div class="matrix-scroll">
    <table class="matrix">
      <thead>
        <tr>
          <th class="matrix-corner">{{ zh ? '组件' : 'Component' }}</th>
          <th v-for="p in platforms" :key="p.id" class="matrix-ph">
            <span
              class="uui-chip-dot"
              :style="{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }"
              >{{ p.abbr }}</span
            >
            <span class="matrix-ph-name">{{ p.name }}</span>
          </th>
        </tr>
        <tr class="matrix-total">
          <th>{{ zh ? '合计' : 'Total' }}</th>
          <td v-for="p in platforms" :key="p.id">
            {{ counts[p.id] }}/{{ totalComponents }}
          </td>
        </tr>
      </thead>

      <tbody v-for="g in sections" :key="g.id">
        <tr class="matrix-group">
          <th :colspan="platforms.length + 1">{{ g.label[locale] }}</th>
        </tr>
        <tr v-for="c in g.items" :key="c.id">
          <th class="matrix-row-head">
            <a :href="path(`/components/${c.id}`)">{{ c.name.en }}</a>
          </th>
          <td v-for="p in platforms" :key="p.id" class="matrix-cell">
            <span v-if="c.platforms[p.id]" class="yes" :title="c.platforms[p.id].symbol">
              ●
            </span>
            <span v-else class="no" aria-label="—">·</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.matrix-scroll {
  margin: 24px 0;
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.matrix {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.matrix th,
.matrix td {
  padding: 7px 10px;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: center;
  white-space: nowrap;
}

.matrix thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

.matrix-corner,
.matrix-row-head {
  position: sticky;
  left: 0;
  z-index: 1;
  min-width: 148px;
  text-align: left;
  background: var(--vp-c-bg);
}
.matrix-corner {
  z-index: 3;
  background: var(--vp-c-bg-soft);
}

.matrix-ph {
  min-width: 62px;
}
.matrix-ph .uui-chip-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
}
.matrix-ph-name {
  display: block;
  margin-top: 3px;
  font-size: 10.5px;
  font-weight: 500;
  color: var(--vp-c-text-3);
}

.matrix-total th,
.matrix-total td {
  top: 58px;
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
}
.matrix-total td {
  position: sticky;
}

.matrix-group th {
  padding: 8px 10px;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  background: var(--vp-c-default-soft);
}

.matrix-row-head a {
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.matrix-row-head a:hover {
  color: var(--vp-c-brand-1);
}

.matrix-cell .yes {
  color: #22c55e;
  font-size: 11px;
}
.matrix-cell .no {
  color: var(--vp-c-divider);
  font-weight: 700;
}

.matrix tbody tr:hover .matrix-row-head,
.matrix tbody tr:hover td {
  background: var(--vp-c-bg-soft);
}
</style>
