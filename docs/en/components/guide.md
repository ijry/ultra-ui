---
title: Guide
description: An onboarding overlay that spotlights part of the screen and explains it.
generated: true
---

# Guide

An onboarding overlay that spotlights part of the screen and explains it.

<PlatformBadges component="guide" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

```tsx
import { UPGuide } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### Basic usage

```tsx
import { UPGuide } from '@ultra-ui'

<UPGuide
  show={showBasic}
  onUpdateShow={setShowBasic}
  list={[
    {
      selector: '#up-guide-demo-basic',
      title: '欢迎使用',
      desc: '这里是最核心的操作入口，点击它可以开始你的任务。',
    },
  ]}
/>
```

#### With an image

```tsx
<UPGuide
  show={showImage}
  onUpdateShow={setShowImage}
  list={[
    {
      selector: '#up-guide-demo-image',
      image: DEMO_IMAGE,
      title: '功能图解',
      desc: '通过配图可以更直观地说明这个功能的使用场景。',
    },
  ]}
/>
```

#### Skippable

```tsx
<UPGuide
  show={showSkip}
  onUpdateShow={setShowSkip}
  showSkip
  skipText='跳过'
  list={[
    {
      selector: '#up-guide-demo-skip',
      title: '可跳过的引导',
      desc: '右上角的「跳过」可以一次性关闭全部引导。',
    },
  ]}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/guide/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
  <up-guide
    v-model:show="show"
    :list="list"
    storage-key="demo-up-guide-once"
  />
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([
  {
    image: '/static/uview/common/logo.png',
    title: '欢迎使用 uview-plus',
    desc: '一套跨端可复用的高质量组件库。'
  },
  {
    image: '/static/uview/common/gray-logo.png',
    title: '引导页支持多页滑动',
    desc: '可配置跳过、下一步和立即体验。'
  },
  {
    image: '/static/uview/common/logo.jpg',
    title: '只显示一次',
    desc: '默认内置本地存储记忆能力。'
  }
])
</script>
```

#### Show once, and resetting

```vue
<template>
  <up-guide
    ref="guideRef"
    v-model:show="show"
    :list="list"
    storage-key="demo-up-guide-once"
  />
  <up-button text="重置首次标记" @click="resetGuide"></up-button>
</template>
```

```vue
<script setup>
import { ref } from 'vue'

const show = ref(false)
const guideRef = ref(null)

function resetGuide() {
  guideRef.value?.reset?.()
  show.value = true
}
</script>
```

#### Listening for events

```vue
<up-guide
  v-model:show="show"
  :list="list"
  @change="onChange"
  @skip="onSkip"
  @finish="onFinish"
  @close="onClose"
/>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/guide.md`</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | — | `Boolean` | `false` |
| `list` | — | `Array` | `[]` |
| `storageKey` | — | `String` | `'up-guide-default'` |
| `once` | — | `Boolean` | `true` |
| `showSkip` | — | `Boolean` | `true` |
| `skipText` | — | `String` | `'跳过'` |
| `nextText` | — | `String` | `'下一步'` |
| `finishText` | — | `String` | `'立即体验'` |
| `indicator` | — | `Boolean` | `true` |
| `bgColor` | — | `String` | `'#111111'` |
| `zIndex` | — | `String / Number` | `10075` |

### Events

| Event |
| --- |
| `change` |
| `close` |
| `finish` |
| `skip` |
| `update:show` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPGuide` | `packages/ultra_ui/lib/src/widgets/up_guide.dart` |
| React Native · TypeScript | `UPGuide` | `src/components/guide` |
| Taro · React + TypeScript | `UPGuide` | `src/ultra-ui/components/up-guide` |
| uni-app · Vue 3 | `up-guide` | `uni_modules/uview-ultra/components/up-guide` |
| uni-app-x · UTS / UVUE | `up-guide` | `uni_modules/uview-ultra/components/up-guide` |

