<script setup lang="ts">
import InstallCard from '../InstallCard.vue'
import { useLocalePath } from '../../composables/useLocalePath'

const { zh, path } = useLocalePath()
</script>

<template>
  <section class="uui-section uui-section--tint">
    <div class="uui-wrap install-grid">
      <div>
        <p class="uui-eyebrow">{{ zh ? '装上就能用' : 'Install' }}</p>
        <h2 class="uui-h2">
          {{ zh ? '选好平台，一次配置' : 'Pick a platform, wire it up once' }}
        </h2>
        <p class="uui-lede">
          {{
            zh
              ? '每个平台的接入方式都跟随该生态的习惯：npm、Gradle、Swift Package、ohpm、pub 或插件市场。配置完成后组件就能直接使用。'
              : 'Each platform is installed the way its ecosystem expects: npm, Gradle, Swift Package, ohpm, pub or the plugin market. After that, components just work.'
          }}
        </p>
        <p class="install-more">
          <a :href="path('/guide/quickstart')">
            {{ zh ? '查看完整的快速上手 →' : 'Read the full quick start →' }}
          </a>
        </p>
      </div>

      <InstallCard />
    </div>
  </section>
</template>

<style scoped>
.install-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 56px;
  align-items: start;
}
.install-more {
  margin: 24px 0 0;
  font-size: 15px;
  font-weight: 500;
}
.install-more a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.install-more a:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .install-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
}
</style>
