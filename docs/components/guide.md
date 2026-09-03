---
title: Guide 引导蒙层
description: 高亮页面局部并配以说明的新手引导蒙层。
generated: true
---

# Guide 引导蒙层

高亮页面局部并配以说明的新手引导蒙层。

<PlatformBadges component="guide" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPGuide } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 基础用法

点击按钮高亮指定元素并弹出引导气泡

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

#### 带图片

引导内容支持配图

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

#### 可跳过

showSkip 显示右上角跳过入口

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

<small>示例来源 `ultra-ui-taro/src/pages/components/guide/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过 `v-model:show` 控制显隐，`list` 传入引导页数据。

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

#### 仅展示一次与重置

- `once` 默认为 `true`，点击“跳过”或“立即体验”后会写入本地存储。
- 通过 `storageKey` 区分不同业务引导。
- 可通过 `ref` 调用 `reset()` 清理已读标记后重新展示。

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

#### 监听事件

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/guide.md`</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 事件

| 事件名 |
| --- |
| `change` |
| `close` |
| `finish` |
| `skip` |
| `update:show` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPGuide` | `packages/ultra_ui/lib/src/widgets/up_guide.dart` |
| React Native · TypeScript | `UPGuide` | `src/components/guide` |
| Taro · React + TypeScript | `UPGuide` | `src/ultra-ui/components/up-guide` |
| uni-app · Vue 3 | `up-guide` | `uni_modules/uview-ultra/components/up-guide` |
| uni-app-x · UTS / UVUE | `up-guide` | `uni_modules/uview-ultra/components/up-guide` |

