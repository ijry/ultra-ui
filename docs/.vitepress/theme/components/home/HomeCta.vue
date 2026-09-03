<script setup lang="ts">
import { useLocalePath } from '../../composables/useLocalePath'

const { zh, path } = useLocalePath()
</script>

<template>
  <section class="cta">
    <div class="cta-glow" aria-hidden="true" />
    <div class="uui-wrap cta-inner">
      <h2 class="cta-title">
        {{ zh ? '下一个项目，换个平台也不用重写 UI' : 'Change platforms without rewriting your UI' }}
      </h2>
      <p class="cta-lede">
        {{
          zh
            ? '从任意一个平台开始，剩下七个的写法你已经会了。'
            : 'Start on any one platform — you already know how to write the other seven.'
        }}
      </p>
      <div class="cta-actions">
        <a class="btn btn-primary" :href="path('/guide/quickstart')">
          {{ zh ? '开始使用' : 'Get started' }}
        </a>
        <a
          class="btn btn-ghost"
          href="https://github.com/ijry"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  padding: 96px 24px 112px;
  border-top: 1px solid var(--vp-c-divider);
  overflow: hidden;
  text-align: center;
}

.cta-glow {
  position: absolute;
  bottom: -260px;
  left: 50%;
  width: 900px;
  height: 520px;
  transform: translateX(-50%);
  background: var(--uui-grad);
  opacity: 0.15;
  filter: blur(110px);
  pointer-events: none;
}
.dark .cta-glow {
  opacity: 0.22;
}

.cta-inner {
  position: relative;
}

.cta-title {
  max-width: 22em;
  margin: 0 auto;
  font-size: clamp(26px, 3.6vw, 40px);
  font-weight: 800;
  line-height: 1.22;
  letter-spacing: -0.025em;
  color: var(--vp-c-text-1);
}

.cta-lede {
  max-width: 44ch;
  margin: 18px auto 0;
  font-size: 17px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}
.btn {
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 24px;
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

@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover {
    transform: none;
  }
}
</style>
