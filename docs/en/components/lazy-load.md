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

### 自定义占位色

placeholder 传颜色字符串

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/lazyLoad/lazyLoad.uvue`</small>

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
| uni-app · Vue 3 | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |
| uni-app-x · UTS / UVUE | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |

