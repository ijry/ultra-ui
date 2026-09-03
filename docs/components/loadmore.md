---
title: Load more 加载更多
description: 列表底部的加载状态提示，包含加载中、加载完成与没有更多三态。
generated: true
---

# Load more 加载更多

列表底部的加载状态提示，包含加载中、加载完成与没有更多三态。

<PlatformBadges component="loadmore" show-missing />

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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLoadmore, UPLoadmoreProps } from '@lingyun/ultra-ui-hos';

UPLoadmore({ props: new UPLoadmoreProps({ status: 'loadmore', line: true }) })
```

```typescript
UPLoadmore({ props: new UPLoadmoreProps({ status: 'loading', loadingText: '努力加载中', icon: true }) })
```

```typescript
UPLoadmore({ props: new UPLoadmoreProps({ status: 'nomore', nomoreText: '到底了', line: true, dashed: true }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadmoreDemo.ets`</small>

</template>

<template #flutter>

#### 基础使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLoadmore(status: 'loading', isDot: true, iconSize: 17)
```

#### 无更多数据

```dart
UPLoadmore(line: true, status: 'nomore')
```

#### 自定义图标

```dart
UPLoadmore(status: 'loading', loadingIcon: 'circle')
```

#### 显示点

```dart
UPLoadmore(
  status: 'nomore',
  isDot: true,
  line: true,
  color: '#909399',
)
```

#### 自定义提示语

```dart
UPLoadmore(
  status: 'loading',
  loadingText: '努力加载中,先喝杯茶',
  color: '#909399',
)
```

#### 自定义线条颜色

```dart
UPLoadmore(
  loadmoreText: '看,我和别人不一样',
  color: '#1CD29B',
  lineColor: '#1CD29B',
  dashed: true,
  line: true,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/loadmore_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLoadmore } from 'ultra-ui-rn';

<UPLoadmore status={status} onLoadmore={getData} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/LazyLoadDemo.tsx`</small>

</template>

<template #taro>

#### 加载图标

icon / iconSize / loadingIcon

```tsx
import { UPLoadmore } from '@ultra-ui'

<UPLoadmore status='loading' icon loadingText='加载中' />
```

#### 分割线

line / dashed / lineColor

```tsx
<UPLoadmore status='nomore' nomoreText='没有更多了' line />
```

#### 点状结尾

isDot，nomore 时以粗点替代文字

```tsx
<UPLoadmore status='nomore' isDot />
```

#### 自定义颜色

color / bgColor

```tsx
<UPLoadmore status='loadmore' color='#3c9cff' loadmoreText='加载更多' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/loadmore/index.tsx`</small>

</template>

<template #uniapp>

#### 基础使用

```vue
<up-loadmore
    status="loading"
    :isDot="true"
    :iconSize="17"
></up-loadmore>
```

#### 无更多数据

```vue
<up-loadmore
    :line="true"
    status="nomore"
></up-loadmore>
```

#### 加载更多(点击触发事件)

```vue
<up-loadmore
    :line="true"
    status="loadmore"
    @loadmore="loadmore"
></up-loadmore>
```

#### 自定义图标

```vue
<up-loadmore
    status="loading"
    loadingIcon="circle"
></up-loadmore>
```

#### 显示点

```vue
<up-loadmore
    status="nomore"
    :isDot="true"
    :line="true"
    color="#909399"
></up-loadmore>
```

#### 自定义提示语

```vue
<up-loadmore
    status="loading"
    loadingText="努力加载中,先喝杯茶"
    color="#909399"
></up-loadmore>
```

#### 自定义线条颜色

```vue
<up-loadmore
    loadmoreText="看,我和别人不一样"
    color="#1CD29B"
    lineColor="#1CD29B"
    dashed
    :line="true"
></up-loadmore>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/loadmore/loadmore.uvue`</small>

</template>

<template #uniappx>

#### 基础使用

```vue
<up-loadmore
    status="loading"
    :isDot="true"
    :iconSize="17"
></up-loadmore>
```

#### 无更多数据

```vue
<up-loadmore
    :line="true"
    status="nomore"
></up-loadmore>
```

#### 加载更多(点击触发事件)

```vue
<up-loadmore
    :line="true"
    status="loadmore"
    @loadmore="loadmore"
></up-loadmore>
```

#### 自定义图标

```vue
<up-loadmore
    status="loading"
    loadingIcon="circle"
></up-loadmore>
```

#### 显示点

```vue
<up-loadmore
    status="nomore"
    :isDot="true"
    :line="true"
    color="#909399"
></up-loadmore>
```

#### 自定义提示语

```vue
<up-loadmore
    status="loading"
    loadingText="努力加载中,先喝杯茶"
    color="#909399"
></up-loadmore>
```

#### 自定义线条颜色

```vue
<up-loadmore
    loadmoreText="看,我和别人不一样"
    color="#1CD29B"
    lineColor="#1CD29B"
    dashed
    :line="true"
></up-loadmore>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/loadmore/loadmore.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `status` | 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态 | `String` | `'loadmore'` |
| `bgColor` | 组件背景色 | `String` | `'transparent'` |
| `icon` | 是否显示加载中的图标 | `Boolean` | `true` |
| `fontSize` | 字体大小 | `String / Number` | `14` |
| `iconSize` | 图标大小 | `String / Number` | `17` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `loadingIcon` | 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆 | `String` | `'spinner'` |
| `loadmoreText` | 加载前的提示语 | `String` | `'加载更多'` |
| `loadingText` | 加载中提示语 | `String` | `'正在加载...'` |
| `nomoreText` | 没有更多的提示语 | `String` | `'没有更多了'` |
| `isDot` | 在“没有更多”状态下，是否显示粗点 | `Boolean` | `false` |
| `iconColor` | 加载中图标的颜色 | `String` | `'#b7b7b7'` |
| `marginTop` | 上边距 | `String / Number` | `10` |
| `marginBottom` | 下边距 | `String / Number` | `10` |
| `height` | 高度，单位px | `String / Number` | `'auto'` |
| `line` | 是否显示左边分割线 | `Boolean` | `false` |
| `lineColor` | 线条颜色 | `String` | `'#E6E8EB'` |
| `dashed` | 是否虚线，true-虚线，false-实线 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `loadmore` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadmore` | `UltraUI/Sources/UltraUI/Components/UPLoadmore.swift` |
| Android · Jetpack Compose | `UPLoadmore` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadmore.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadmore` | `ultra-ui/src/main/ets/components/UPLoadmore.ets` |
| Flutter · Dart | `UPLoadmore` | `packages/ultra_ui/lib/src/widgets/up_loadmore.dart` |
| React Native · TypeScript | `UPLoadmore` | `src/components/loadmore` |
| Taro · React + TypeScript | `UPLoadmore` | `src/ultra-ui/components/up-loadmore` |
| uni-app · Vue 3 | `up-loadmore` | `uni_modules/uview-ultra/components/up-loadmore` |
| uni-app-x · UTS / UVUE | `up-loadmore` | `uni_modules/uview-ultra/components/up-loadmore` |

