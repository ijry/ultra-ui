---
title: Loading icon
description: A loading indicator drawn natively, in circle, flower or semicircle form.
generated: true
---

# Loading icon

A loading indicator drawn natively, in circle, flower or semicircle form.

<PlatformBadges component="loading-icon" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPLoadingIcon(color: "primary", text: "spinner")
```

<small>Snippet from `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPLoadingIcon

UPLoadingIcon(props = demoCase.props)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LoadingIconDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLoadingIcon, UPLoadingIconProps } from '@lingyun/ultra-ui-hos';

UPLoadingIcon({ props: new UPLoadingIconProps({ mode: 'spinner', color: 'primary', text: 'spinner 模式' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadingIconDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_LoadingBlock('基本案例', UPLoadingIcon()
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/loading_icon_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLoadingIcon } from 'ultra-ui-rn';

loading={<UPLoadingIcon color="red" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/ImageDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPLoadingIcon } from '@ultra-ui'

<UPLoadingIcon mode='spinner' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/loading-icon/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-loading-icon></up-loading-icon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/loading-icon/loading-icon.nvue`</small>

</template>

<template #uniappx>

```vue
<up-loading-icon></up-loading-icon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/loading-icon/loading-icon.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否显示组件 | `Boolean` | `true` |
| `color` | 颜色 | `String` | `color['u-tips-color']` |
| `textColor` | 提示文字颜色 | `String` | `color['u-tips-color']` |
| `vertical` | 文字和图标是否垂直排列 | `Boolean` | `false` |
| `mode` | 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形 | `String` | `'spinner'` |
| `size` | 图标大小，单位默认px | `String / Number` | `24` |
| `textSize` | 文字大小 | `String / Number` | `15` |
| `text` | 文字内容 | `String / Number` | `''` |
| `timingFunction` | 动画模式 | `String` | `'ease-in-out'` |
| `duration` | 动画执行周期时间 | `String / Number` | `1200` |
| `inactiveColor` | mode=circle时的暗边颜色 | `String` | `''` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadingIcon` | `UltraUI/Sources/UltraUI/Components/UPLoadingIcon.swift` |
| Android · Jetpack Compose | `UPLoadingIcon` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadingIcon.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadingIcon` | `ultra-ui/src/main/ets/components/UPLoadingIcon.ets` |
| Flutter · Dart | `UPLoadingIcon` | `packages/ultra_ui/lib/src/widgets/up_loading_icon.dart` |
| React Native · TypeScript | `UPLoadingIcon` | `src/components/loading-icon` |
| Taro · React + TypeScript | `UPLoadingIcon` | `src/ultra-ui/components/up-loading-icon` |
| uni-app · Vue 3 | `up-loading-icon` | `src/uni_modules/uview-plus/components/u-loading-icon` |
| uni-app-x · UTS / UVUE | `up-loading-icon` | `uni_modules/uview-ultra/components/up-loading-icon` |

