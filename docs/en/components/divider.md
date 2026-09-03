---
title: Divider
description: A content separator that can carry centred or aligned text.
generated: true
---

# Divider

A content separator that can carry centred or aligned text.

<PlatformBadges component="divider" show-missing />

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
import net.lingyun.ultraui.android.components.UPDivider
import net.lingyun.ultraui.android.components.UPDividerProps

UPDivider(props = UPDividerProps(text = "分割线", textPosition = "center"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPDivider, UPDividerProps } from '@lingyun/ultra-ui-hos';

UPDivider({ props: new UPDividerProps() })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/DividerDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_DividerBlock('基本案例', UPDivider(text: '分割线')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/divider_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDivider } from 'ultra-ui-rn';

<UPDivider text="分割线" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/DividerDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPDivider } from '@ultra-ui'

<UPDivider />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/divider/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-divider text="分割线"></up-divider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/divider/divider.nvue`</small>

</template>

<template #uniappx>

```vue
<up-divider text="分割线"></up-divider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/divider/divider.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `dashed` | 是否虚线 | `Boolean` | `false` |
| `hairline` | 是否细线 | `Boolean` | `true` |
| `dot` | 是否以点替代文字，优先于text字段起作用 | `Boolean` | `false` |
| `textPosition` | 内容文本的位置，left-左边，center-中间，right-右边 | `String` | `'center'` |
| `text` | 文本内容 | `String / Number` | `''` |
| `textSize` | 文本大小 | `String / Number` | `14` |
| `textColor` | 文本颜色 | `String` | `'#909399'` |
| `lineColor` | 线条颜色 | `String` | `'#dcdfe6'` |

### Events

| Event |
| --- |
| `click` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPDivider` | `UltraUI/Sources/UltraUI/Components/UPDivider.swift` |
| Android · Jetpack Compose | `UPDivider` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDivider.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPDivider` | `ultra-ui/src/main/ets/components/UPDivider.ets` |
| Flutter · Dart | `UPDivider` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPDivider` | `src/components/divider` |
| Taro · React + TypeScript | `UPDivider` | `src/ultra-ui/components/up-divider` |
| uni-app · Vue 3 | `up-divider` | `src/uni_modules/uview-plus/components/u-divider` |
| uni-app-x · UTS / UVUE | `up-divider` | `uni_modules/uview-ultra/components/up-divider` |

