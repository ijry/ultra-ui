<script setup lang="ts">
import { computed } from 'vue'
import { groups } from '../../../data/groups'
import { components, totalComponents } from '../../../data/registry'
import { useLocalePath } from '../../composables/useLocalePath'

const { zh, path } = useLocalePath()

const sections = computed(() =>
  groups
    .map((g) => ({
      ...g,
      items: components.filter((c) => c.group === g.id)
    }))
    .filter((g) => g.items.length > 0)
)

const locale = computed<'zh' | 'en'>(() => (zh.value ? 'zh' : 'en'))
</script>

<template>
  <section class="uui-section">
    <div class="uui-wrap">
      <header class="uui-head uui-head--center">
        <p class="uui-eyebrow">{{ zh ? '组件' : 'Components' }}</p>
        <h2 class="uui-h2">
          {{
            zh
              ? `${totalComponents} 个组件，七个分类`
              : `${totalComponents} components, seven categories`
          }}
        </h2>
        <p class="uui-lede">
          {{
            zh
              ? '从按钮、单元格这样的基础件，到日历、级联选择、瀑布流、富文本解析这类重型组件，业务里常见的场景基本都有现成实现。'
              : 'From buttons and cells to calendars, cascaders, waterfalls and rich-text parsing — the components real apps keep needing.'
          }}
        </p>
      </header>

      <div class="cat-grid">
        <section v-for="g in sections" :key="g.id" class="uui-card cat">
          <header class="cat-head">
            <h3 class="cat-name">{{ g.label[locale] }}</h3>
            <span class="cat-count">{{ g.items.length }}</span>
          </header>
          <p class="cat-blurb">{{ g.blurb[locale] }}</p>
          <ul class="cat-list">
            <li v-for="c in g.items" :key="c.id">
              <a :href="path(`/components/${c.id}`)">{{ c.name.en }}</a>
            </li>
          </ul>
        </section>
      </div>

      <p class="cat-all">
        <a class="cat-all-link" :href="path('/components/')">
          {{ zh ? '查看组件总览与平台支持矩阵 →' : 'See all components and the support matrix →' }}
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.cat-grid {
  /* Multi-column rather than grid: category cards vary a lot in height, and a
     grid row would stretch the short ones into large empty boxes. */
  columns: 4 258px;
  column-gap: 20px;
}

.cat {
  display: block;
  break-inside: avoid;
  margin-bottom: 20px;
}
.cat:hover {
  transform: none;
}

.cat-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}
.cat-name {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.cat-count {
  font-size: 12px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  padding: 2px 8px;
  border-radius: 999px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.cat-blurb {
  margin: 10px 0 16px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--vp-c-text-3);
}

.cat-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.cat-list a {
  display: inline-block;
  padding: 3px 9px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  font-size: 12.5px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition:
    color 0.18s,
    border-color 0.18s,
    background-color 0.18s;
}
.cat-list a:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.cat-all {
  margin: 40px 0 0;
  text-align: center;
}
.cat-all-link {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.cat-all-link:hover {
  text-decoration: underline;
}
</style>
