---
title: Load more
description: A list footer with loading, loaded and no-more states.
generated: true
---

# Load more

A list footer with loading, loaded and no-more states.

<PlatformBadges component="loadmore" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPLoadmore
import net.lingyun.ultraui.android.components.UPLoadmoreProps

UPLoadmore(
    props = UPLoadmoreProps(status = loadmoreStatus, line = true),
    onLoadmore = {
        loadmoreStatus = if (loadmoreStatus == "loadmore") "loading" else "loadmore"
        eventText = "加载更多：$loadmoreStatus"
    },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLoadmore, UPLoadmoreProps } from '@lingyun/ultra-ui-hos';

UPLoadmore({ props: new UPLoadmoreProps({ status: 'loadmore', line: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadmoreDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLoadmore(status: 'loading', isDot: true, iconSize: 17)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/loadmore_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLoadmore } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPLoadmore } from '@ultra-ui'

<UPLoadmore status='loading' icon loadingText='加载中' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/loadmore/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-loadmore
    status="loading"
    :isDot="true"
    :iconSize="17"
></up-loadmore>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/loadmore/loadmore.nvue`</small>

</template>

<template #uniappx>

```vue
<up-loadmore
    status="loading"
    :isDot="true"
    :iconSize="17"
></up-loadmore>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/loadmore/loadmore.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `status` | 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态 | `String` | `'loadmore'` |
| `bgColor` | 组件背景色 | `String` | `'transparent'` |
| `icon` | 是否显示加载中的图标 | `Boolean` | `true` |
| `fontSize` | 字体大小 | `String / Number` | `14` |
| `iconSize` | 图标大小 | `String / Number` | `17` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `loadingIcon` | 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆 | `String` | `'spinner'` |
| `loadmoreText` | 加载前的提示语 | `String` | `t("up.loadmoe.loadmore")` |
| `loadingText` | 加载中提示语 | `String` | `t("up.common.loading2") + '...'` |
| `nomoreText` | 没有更多的提示语 | `String` | `t("up.loadmoe.nomore")` |
| `isDot` | 在“没有更多”状态下，是否显示粗点 | `Boolean` | `false` |
| `iconColor` | 加载中图标的颜色 | `String` | `'#b7b7b7'` |
| `marginTop` | 上边距 | `String / Number` | `10` |
| `marginBottom` | 下边距 | `String / Number` | `10` |
| `height` | 高度，单位px | `String / Number` | `'auto'` |
| `line` | 是否显示左边分割线 | `Boolean` | `false` |
| `lineColor` | 线条颜色 | `String` | `'#E6E8EB'` |
| `dashed` | 是否虚线，true-虚线，false-实线 | `Boolean` | `false` |

### Events

| Event |
| --- |
| `loadmore` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadmore` | `UltraUI/Sources/UltraUI/Components/UPLoadmore.swift` |
| Android · Jetpack Compose | `UPLoadmore` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadmore.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadmore` | `ultra-ui/src/main/ets/components/UPLoadmore.ets` |
| Flutter · Dart | `UPLoadmore` | `packages/ultra_ui/lib/src/widgets/up_loadmore.dart` |
| React Native · TypeScript | `UPLoadmore` | `src/components/loadmore` |
| Taro · React + TypeScript | `UPLoadmore` | `src/ultra-ui/components/up-loadmore` |
| uni-app · Vue 3 | `up-loadmore` | `src/uni_modules/uview-plus/components/u-loadmore` |
| uni-app-x · UTS / UVUE | `up-loadmore` | `uni_modules/uview-ultra/components/up-loadmore` |

