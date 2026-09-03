---
title: Back to top 返回顶部
description: 滚动一段距离后出现的回到顶部按钮。
generated: true
---

# Back to top 返回顶部

滚动一段距离后出现的回到顶部按钮。

<PlatformBadges component="back-top" show-missing />

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

### 返回顶部

```kotlin
import net.lingyun.ultraui.android.components.UPBackTop
import net.lingyun.ultraui.android.components.UPBackTopProps

UPBackTop(
    props = UPBackTopProps(scrollTop = 800, text = "顶部"),
    onClick = { eventText = "返回顶部：点击" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPBackTop, UPBackTopProps } from '@lingyun/ultra-ui-hos';

UPBackTop({ props: new UPBackTopProps({ scrollTop: this.scrollTop, top: 400, bottom: 16, right: 4, onBackToTop: (): void => { this.scrollTop = 0; this.message = '调用方已处理返回顶部请求'; } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/BackTopDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPBackTop(
  mode: square ? 'square' : 'circle',
  icon: customIcon ? 'arrow-up' : 'arrow-upward',
  bottom: 0,
  right: 0,
  duration: longDuration ? 1500 : 300,
  scrollTop: _scrollTop,
  scrollController: _scrollController,
  customStyle: customStyle
      ? const BoxDecoration(color: Color(0xFF2979FF))
      : null,
  iconStyle: customStyle
      ? const <String, dynamic>{'color': '#ffffff'}
      : null,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/back_top_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBackTop } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPBackTop } from '@ultra-ui'

<UPBackTop scrollTop={scrollTop} top={200} right={20} bottom={120} icon='arrow-upward' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/back-top/index.tsx`</small>

</template>

<template #uniapp>

### 自定义backTop(滚动页面即可在右下角看到图标)

```vue
<up-back-top
    :right="backTopData['right']"
    :customStyle="backTopData['customStyle']"
    :bottom="backTopData['bottom']"
    :icon="backTopData['icon']"
    :mode="backTopData['mode']"
    :iconStyle="backTopData['iconStyle']"
    :duration="backTopData['duration']"
    :scrollTop="scrollTop"
    @click="click"
></up-back-top>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/backtop/backtop.uvue`</small>

</template>

<template #uniappx>

### 自定义backTop(滚动页面即可在右下角看到图标)

```vue
<up-back-top
    :right="backTopData['right']"
    :customStyle="backTopData['customStyle']"
    :bottom="backTopData['bottom']"
    :icon="backTopData['icon']"
    :mode="backTopData['mode']"
    :iconStyle="backTopData['iconStyle']"
    :duration="backTopData['duration']"
    :scrollTop="scrollTop"
    @click="click"
></up-back-top>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/backtop/backtop.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mode` | 返回顶部的形状，circle-圆形，square-方形 | `String` | `'circle'` |
| `icon` | 自定义图标 | `String` | `'arrow-upward'` |
| `text` | 提示文字 | `String` | `''` |
| `duration` | 返回顶部滚动时间 | `String / Number` | `100` |
| `scrollTop` | 滚动距离 | `String / Number` | `0` |
| `top` | 距离顶部多少距离显示，单位px | `String / Number` | `400` |
| `bottom` | 返回顶部按钮到底部的距离，单位px | `String / Number` | `100` |
| `right` | 返回顶部按钮到右边的距离，单位px | `String / Number` | `20` |
| `zIndex` | 层级 | `String / Number` | `9` |
| `iconStyle` | 图标的样式，对象形式 | `Object` | `{ color: '#909399', fontSize: '19px' }` |

### 事件

| 事件名 |
| --- |
| `click` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPBackTop` | `UltraUI/Sources/UltraUI/Components/UPBackTop.swift` |
| Android · Jetpack Compose | `UPBackTop` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPBackTop.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPBackTop` | `ultra-ui/src/main/ets/components/UPBackTop.ets` |
| Flutter · Dart | `UPBackTop` | `packages/ultra_ui/lib/src/widgets/up_back_top.dart` |
| React Native · TypeScript | `UPBackTop` | `src/components/back-top` |
| Taro · React + TypeScript | `UPBackTop` | `src/ultra-ui/components/up-back-top` |
| uni-app · Vue 3 | `up-back-top` | `uni_modules/uview-ultra/components/up-back-top` |
| uni-app-x · UTS / UVUE | `up-back-top` | `uni_modules/uview-ultra/components/up-back-top` |

