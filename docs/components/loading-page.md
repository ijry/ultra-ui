---
title: Loading page 加载页
description: 覆盖整个页面的加载遮罩，适合首屏或路由切换时使用。
generated: true
---

# Loading page 加载页

覆盖整个页面的加载遮罩，适合首屏或路由切换时使用。

<PlatformBadges component="loading-page" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #android>

### 加载页

```kotlin
import net.lingyun.ultraui.android.components.UPLoadingPage
import net.lingyun.ultraui.android.components.UPLoadingPageProps

UPLoadingPage(
    props = UPLoadingPageProps(loading = true, loadingText = "加载中", bgColor = "#ffffff"),
    modifier = Modifier.fillMaxSize(),
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadingPageDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/loading_page_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLoadingPage } from 'ultra-ui-rn';

<UPLoadingPage
  bgColor={data.bgColor}
  color={data.color}
  iconSize={data.iconSize}
  image={data.image}
  loading={loading}
  loadingColor={data.loadingColor}
  loadingMode={data.loadingMode}
  loadingText={data.loadingText}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/LoadingPageDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

loading 为 true 时展示全屏遮罩

```tsx
import { UPLoadingPage } from '@ultra-ui'

<UPLoadingPage loading={loading} text='加载中...' />
```

### 自定义颜色

color / bgColor

```tsx
<UPLoadingPage
  loading={colored}
  text='加载中...'
  color='#2979ff'
  bgColor='#ecf5ff'
/>
```

### 自定义内容

children 覆盖默认图标 + 文本

```tsx
<UPLoadingPage loading={custom}>
  <UPButton size='small' type='primary' text='自定义内容' />
</UPLoadingPage>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/loading-page/index.tsx`</small>

</template>

<template #uniapp>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/loading-page/loading-page.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/loading-page/loading-page.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loadingText` | 提示内容 | `String / Number` | `'正在加载'` |
| `image` | 文字上方用于替换loading动画的图片 | `String` | `''` |
| `loadingMode` | 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形 | `String` | `'circle'` |
| `loading` | 是否加载中 | `Boolean` | `false` |
| `bgColor` | 背景色 | `String` | `'#ffffff'` |
| `color` | 文字颜色 | `String` | `'#C8C8C8'` |
| `fontSize` | 文字大小 | `String / Number` | `19` |
| `iconSize` | 图标大小 | `String / Number` | `28` |
| `loadingColor` | 加载中图标的颜色，只能rgb或者十六进制颜色值 | `String` | `'#C8C8C8'` |
| `zIndex` | 层级 | `Number` | `10` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadingPage` | `UltraUI/Sources/UltraUI/Components/UPLoadingPage.swift` |
| Android · Jetpack Compose | `UPLoadingPage` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadingPage.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadingPage` | `ultra-ui/src/main/ets/components/UPLoadingPage.ets` |
| Flutter · Dart | `UPLoadingPage` | `packages/ultra_ui/lib/src/widgets/up_loading_page.dart` |
| React Native · TypeScript | `UPLoadingPage` | `src/components/loading-page` |
| Taro · React + TypeScript | `UPLoadingPage` | `src/ultra-ui/components/up-loading-page` |
| uni-app · Vue 3 | `up-loading-page` | `uni_modules/uview-ultra/components/up-loading-page` |
| uni-app-x · UTS / UVUE | `up-loading-page` | `uni_modules/uview-ultra/components/up-loading-page` |

