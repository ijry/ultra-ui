<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { platforms } from '../../data/platforms'
import { supportedPlatforms } from '../../data/registry'
import { usePlatform } from '../composables/usePlatform'

const props = defineProps<{
  /** component id from the registry — resolves supported platforms for you */
  component?: string
  /** explicit override, e.g. ['ios','flutter'] */
  on?: string[]
  /** also render greyed-out chips for platforms that lack the component */
  showMissing?: boolean
}>()

const { lang } = useData()
const { setPlatform } = usePlatform()

const zh = computed(() => lang.value.startsWith('zh'))

const supported = computed(() => {
  if (props.on) return props.on
  return props.component ? supportedPlatforms(props.component) : []
})

const shown = computed(() =>
  props.showMissing
    ? platforms
    : platforms.filter((p) => supported.value.includes(p.id))
)

function has(id: string) {
  return supported.value.includes(id)
}
</script>

<template>
  <div class="uui-comp-meta">
    <button
      v-for="p in shown"
      :key="p.id"
      class="uui-chip"
      :class="{ 'is-off': !has(p.id) }"
      type="button"
      :disabled="!has(p.id)"
      :title="
        has(p.id)
          ? (zh ? '查看 ' : 'View ') + p.name
          : (zh ? '暂未支持 ' : 'Not available on ') + p.name
      "
      @click="setPlatform(p.id)"
    >
      <span
        class="uui-chip-dot"
        :style="{
          backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})`
        }"
        aria-hidden="true"
        >{{ p.abbr }}</span
      >
      {{ p.name }}
    </button>
  </div>
</template>

<style scoped>
button.uui-chip {
  cursor: pointer;
}
button.uui-chip:disabled {
  cursor: default;
}
button.uui-chip:not(:disabled):hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}
</style>
