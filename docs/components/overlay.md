---
title: Overlay 遮罩层
description: 半透明遮罩，用于突出弹出内容并拦截背景交互。
generated: true
---

# Overlay 遮罩层

半透明遮罩，用于突出弹出内容并拦截背景交互。

<PlatformBadges component="overlay" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPOverlay(show: true) {
    showOverlay = false
}
```

<small>示例来源 `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

### 遮罩

```kotlin
import net.lingyun.ultraui.android.components.UPOverlay
import net.lingyun.ultraui.android.components.UPOverlayProps

UPOverlay(props = UPOverlayProps(show = true, opacity = 0.35), onClick = { eventText = "遮罩：点击" })
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPOverlay, UPOverlayProps } from '@lingyun/ultra-ui-hos';

UPOverlay({ props: new UPOverlayProps({
  show: this.showOverlay,
  opacity: 0.55,
  onClickOverlay: (event: UPOverlayClickEvent): void => {
    this.message = '已点击 ' + event.source;
  },
  onShowChange: (show: boolean): void => {
    this.showOverlay = show;
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/OverlayDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPOverlay(
  show: true,
  rootOverlay: false,
  onClick: () => setState(() => _showBase = false),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/overlay_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPOverlay } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPOverlay } from '@ultra-ui'

<UPOverlay show={current === 'basic'} onClick={close} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/overlay/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-overlay
    :show="show"
    @click="show = !show"
></up-overlay>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/overlay/overlay.uvue`</small>

</template>

<template #uniappx>

```vue
<up-overlay
    :show="show"
    @click="show = !show"
></up-overlay>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/overlay/overlay.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 是否显示遮罩 | `Boolean` | `false` |
| `zIndex` | 层级z-index | `String / Number` | `10070` |
| `duration` | 遮罩的过渡时间，单位为ms | `String / Number` | `300` |
| `opacity` | 不透明度值，当做rgba的第四个参数 | `String / Number` | `0.5` |

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
| iOS · SwiftUI | `UPOverlay` | `UltraUI/Sources/UltraUI/Components/UPOverlay.swift` |
| Android · Jetpack Compose | `UPOverlay` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPOverlay.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPOverlay` | `ultra-ui/src/main/ets/components/UPOverlay.ets` |
| Flutter · Dart | `UPOverlay` | `packages/ultra_ui/lib/src/widgets/up_overlay.dart` |
| React Native · TypeScript | `UPOverlay` | `src/components/overlay` |
| Taro · React + TypeScript | `UPOverlay` | `src/ultra-ui/components/up-overlay` |
| uni-app · Vue 3 | `up-overlay` | `uni_modules/uview-ultra/components/up-overlay` |
| uni-app-x · UTS / UVUE | `up-overlay` | `uni_modules/uview-ultra/components/up-overlay` |

