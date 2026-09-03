---
title: Lazy load
description: Defers image loading until it enters the viewport.
generated: true
---

# Lazy load

Defers image loading until it enters the viewport.

<PlatformBadges component="lazy-load" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLazyLoad(
  index: index,
  image: _images[index],
  threshold: -450,
  height: '100px',
  imgMode: 'aspectFill',
  borderRadius: 10,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/lazy_load_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLazyLoad } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPLazyLoad } from '@ultra-ui'

<UPLazyLoad
  key={index}
  src={src}
  width='100%'
  height='360rpx'
  placeholder='#ecf5ff'
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/lazy-load/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-lazy-load threshold="-450" height="100px" img-mode="aspectFill" border-radius="10" :image="item.src"
    :index="index" @statusChange="statusChange" @clickImg="clickImg"></up-lazy-load>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/lazyLoad/lazyLoad.nvue`</small>

</template>

<template #uniappx>

```vue
<up-lazy-load threshold="-450" height="100px" img-mode="aspectFill" border-radius="10" :image="item.src"
    :index="index" @statusChange="statusChange" @clickImg="clickImg"></up-lazy-load>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/lazyLoad/lazyLoad.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `index` | — | `Number / String` | `—` |
| `image` | 要显示的图片 | `String` | `—` |
| `imgMode` | 图片裁剪模式 | `String` | `—` |
| `loadingImg` | 占位图片路径 | `String` | `—` |
| `errorImg` | 加载失败的错误占位图 | `String` | `—` |
| `threshold` | 图片进入可见区域前多少像素时，单位rpx，开始加载图片 负数为图片超出屏幕底部多少距离后触发懒加载，正数为图片顶部距离屏幕底部多少距离时触发(图片还没出现在屏幕上) | `Number / String` | `—` |
| `duration` | 淡入淡出动画的过渡时间 | `Number / String` | `—` |
| `effect` | 渡效果的速度曲线，各个之间差别不大，因为这是淡入淡出，且时间很短，不是那些变形或者移动的情况，会明显 linear&#124;ease&#124;ease-in&#124;ease-out&#124;ease-in-out&#124;cubic-bezier(n,n,n,n); | `String` | `—` |
| `isEffect` | 是否使用过渡效果 | `Boolean` | `—` |
| `borderRadius` | 圆角值 | `Number / String` | `—` |
| `height` | 图片高度，单位rpx | `Number / String` | `—` |

### Events

| Event |
| --- |
| `click` |
| `error` |
| `load` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPLazyLoad` | `packages/ultra_ui/lib/src/widgets/up_lazy_load.dart` |
| React Native · TypeScript | `UPLazyLoad` | `src/components/lazy-load` |
| Taro · React + TypeScript | `UPLazyLoad` | `src/ultra-ui/components/up-lazy-load` |
| uni-app · Vue 3 | `up-lazy-load` | `src/uni_modules/uview-plus/components/u-lazy-load` |
| uni-app-x · UTS / UVUE | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |

