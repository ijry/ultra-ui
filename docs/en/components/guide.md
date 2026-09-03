---
title: Guide
description: An onboarding overlay that spotlights part of the screen and explains it.
generated: true
---

# Guide

An onboarding overlay that spotlights part of the screen and explains it.

<PlatformBadges component="guide" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

<small>Snippet from `ultra-ui-taro/src/pages/components/guide/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

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

