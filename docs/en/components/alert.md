---
title: Alert
description: An inline banner for information that matters but should not interrupt.
generated: true
---

# Alert

An inline banner for information that matters but should not interrupt.

<PlatformBadges component="alert" show-missing />

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
import net.lingyun.ultraui.android.components.UPAlert
import net.lingyun.ultraui.android.components.UPAlertProps

UPAlert(
    props = UPAlertProps(
        title = "系统提示",
        description = "这是原生 Compose 的 u-alert",
        type = "warning",
        showIcon = true,
        closable = true,
        modelValue = alertVisible,
    ),
    onUpdateModelValue = {
        alertVisible = it
        eventText = "警告提示：${if (it) "打开" else "关闭"}"
    },
    onClick = { eventText = "警告提示：点击" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPAlert, UPAlertProps } from '@lingyun/ultra-ui-hos';

UPAlert({ props: new UPAlertProps({ title: '操作成功', description: '页面状态控制提示条的显示与关闭。', type: 'success', closable: true, modelValue: this.visible, onVisibleChange: (value: boolean): void => { this.visible = value; } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/AlertDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPAlert(description: '山不在于高，有了神仙就出名')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/alert_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPAlert } from 'ultra-ui-rn';

<UPAlert description="山不在于高，有了神仙就出名" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/AlertDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPAlert } from '@ultra-ui'

<UPAlert type='primary' title='primary 主要提示' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/alert/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-alert
    description="山不在于高，有了神仙就出名"
></up-alert>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/alert/alert.nvue`</small>

</template>

<template #uniappx>

```vue
<up-alert
    description="山不在于高，有了神仙就出名"
    type="warning"
></up-alert>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/alert/alert.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 显示文字 | `String` | `''` |
| `type` | 主题，success/warning/info/error | `String` | `'warning'` |
| `description` | 辅助性文字 | `String` | `''` |
| `closable` | 是否可关闭 | `Boolean` | `false` |
| `showIcon` | 是否显示图标 | `Boolean` | `false` |
| `effect` | 浅或深色调，light-浅色，dark-深色 | `String` | `'light'` |
| `center` | 文字是否居中 | `Boolean` | `false` |
| `fontSize` | 字体大小 | `String / Number` | `14` |
| `transitionMode` | 动画类型 | `String` | `'fade'` |
| `duration` | 自动定时关闭毫秒 | `Number` | `0` |
| `icon` | 自定义图标 | `String` | `''` |
| `modelValue` | 是否显示 | `Boolean` | `—` |

### Events

| Event |
| --- |
| `click` |
| `close` |
| `closed` |

### Slots

| Slot |
| --- |
| `close` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPAlert` | `UltraUI/Sources/UltraUI/Components/UPAlert.swift` |
| Android · Jetpack Compose | `UPAlert` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPAlert.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPAlert` | `ultra-ui/src/main/ets/components/UPAlert.ets` |
| Flutter · Dart | `UPAlert` | `packages/ultra_ui/lib/src/widgets/up_alert.dart` |
| React Native · TypeScript | `UPAlert` | `src/components/alert` |
| Taro · React + TypeScript | `UPAlert` | `src/ultra-ui/components/up-alert` |
| uni-app · Vue 3 | `up-alert` | `src/uni_modules/uview-plus/components/u-alert` |
| uni-app-x · UTS / UVUE | `up-alert` | `uni_modules/uview-ultra/components/up-alert` |

