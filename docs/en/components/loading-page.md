---
title: Loading page
description: A full-page loading cover for first paint or route transitions.
generated: true
---

# Loading page

A full-page loading cover for first paint or route transitions.

<PlatformBadges component="loading-page" show-missing />

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
import net.lingyun.ultraui.android.components.UPLoadingPage
import net.lingyun.ultraui.android.components.UPLoadingPageProps

UPLoadingPage(
    props = UPLoadingPageProps(loading = true, loadingText = "加载中", bgColor = "#ffffff"),
    modifier = Modifier.fillMaxSize(),
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLoadingPage, UPLoadingPageProps } from '@lingyun/ultra-ui-hos';

UPLoadingPage({ props: new UPLoadingPageProps({
  loading: this.loading,
  loadingText: '正在加载示例内容',
  loadingMode: 'semicircle',
  bgColor: '#ffffff'
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadingPageDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLoadingPage(
  loading: true,
  loadingText: _preset.loadingText,
  image: _preset.image,
  iconSize: _preset.iconSize,
  loadingMode: _preset.loadingMode,
  bgColor: _preset.bgColor,
  color: _preset.color,
  loadingColor: _preset.loadingColor,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/loading_page_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLoadingPage } from 'ultra-ui-rn';

<UPLoadingPage loading={show} loadingText="加载中..." />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/LoadingPageDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPLoadingPage } from '@ultra-ui'

<UPLoadingPage loading={loading} text='加载中...' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/loading-page/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-loading-page
    :loadingText="loadingPageData.loadingText"
    :image="loadingPageData.image"
    :iconSize="loadingPageData.iconSize"
    :loadingMode="loadingPageData.loadingMode"
    :bgColor="loadingPageData.bgColor"
    :loading="loading"
    :color="loadingPageData.color"
    :loadingColor="loadingPageData.loadingColor"
>
</up-loading-page>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/loading-page/loading-page.nvue`</small>

</template>

<template #uniappx>

```vue
<up-loading-page
    :loadingText="loadingPageData['loadingText']"
    :image="loadingPageData['image']"
    :iconSize="loadingPageData['iconSize']"
    :loadingMode="loadingPageData['loadingMode']"
    :bgColor="loadingPageData['bgColor']"
    :loading="loading"
    :color="loadingPageData['color']"
    :loadingColor="loadingPageData['loadingColor']"
>
</up-loading-page>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/loading-page/loading-page.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `loadingText` | 提示内容 | `String / Number` | `t("up.common.loading2")` |
| `image` | 文字上方用于替换loading动画的图片 | `String` | `''` |
| `loadingMode` | 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形 | `String` | `'circle'` |
| `loading` | 是否加载中 | `Boolean` | `false` |
| `bgColor` | 背景色 | `String` | `''` |
| `color` | 文字颜色 | `String` | `'#C8C8C8'` |
| `fontSize` | 文字大小 | `String / Number` | `19` |
| `iconSize` | 图标大小 | `String / Number` | `28` |
| `loadingColor` | 加载中图标的颜色，只能rgb或者十六进制颜色值 | `String` | `'#C8C8C8'` |
| `zIndex` | 层级 | `Number` | `10` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadingPage` | `UltraUI/Sources/UltraUI/Components/UPLoadingPage.swift` |
| Android · Jetpack Compose | `UPLoadingPage` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadingPage.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadingPage` | `ultra-ui/src/main/ets/components/UPLoadingPage.ets` |
| Flutter · Dart | `UPLoadingPage` | `packages/ultra_ui/lib/src/widgets/up_loading_page.dart` |
| React Native · TypeScript | `UPLoadingPage` | `src/components/loading-page` |
| Taro · React + TypeScript | `UPLoadingPage` | `src/ultra-ui/components/up-loading-page` |
| uni-app · Vue 3 | `up-loading-page` | `src/uni_modules/uview-plus/components/u-loading-page` |
| uni-app-x · UTS / UVUE | `up-loading-page` | `uni_modules/uview-ultra/components/up-loading-page` |

