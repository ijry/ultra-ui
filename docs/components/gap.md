---
title: Gap 间隔槽
description: 用于制造区块之间的留白，可设置高度与背景色。
generated: true
---

# Gap 间隔槽

用于制造区块之间的留白，可设置高度与背景色。

<PlatformBadges component="gap" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPGap(bgColor: "bg", height: 30)
```

<small>示例来源 `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPGap
import net.lingyun.ultraui.android.components.UPGapProps

UPGap(props = UPGapProps(height = "12px", bgColor = "#f4f4f5"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPGap, UPGapProps } from '@lingyun/ultra-ui-hos';

UPGap({ props: new UPGapProps({ height: 16, bgColor: '#f2f3f5' }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/GapDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_GapBlock('基本案例', UPGap(bgColor: '#f3f4f6')
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/gap_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPGap } from 'ultra-ui-rn';

<UPGap bgColor="#f3f4f6" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/GapDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPGap } from '@ultra-ui'

<UPGap />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/gap/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-gap :bgColor="upThemeVar('--up-bg-color', '#f3f4f6')"></up-gap>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/gap/gap.nvue`</small>

</template>

<template #uniappx>

```vue
<up-gap bgColor="#f3f4f6"></up-gap>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/gap/gap.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bgColor` | 背景颜色（默认transparent） | `String` | `'transparent'` |
| `height` | 分割槽高度，单位px（默认30） | `String / Number` | `20` |
| `marginTop` | 与上一个组件的距离 | `String / Number` | `0` |
| `marginBottom` | 与下一个组件的距离 | `String / Number` | `0` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPGap` | `UltraUI/Sources/UltraUI/Components/UPGap.swift` |
| Android · Jetpack Compose | `UPGap` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPGap.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPGap` | `ultra-ui/src/main/ets/components/UPGap.ets` |
| Flutter · Dart | `UPGap` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPGap` | `src/components/gap` |
| Taro · React + TypeScript | `UPGap` | `src/ultra-ui/components/up-gap` |
| uni-app · Vue 3 | `up-gap` | `src/uni_modules/uview-plus/components/u-gap` |
| uni-app-x · UTS / UVUE | `up-gap` | `uni_modules/uview-ultra/components/up-gap` |

