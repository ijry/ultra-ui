---
title: Tooltip
description: A text bubble on tap or long press, optionally with a copy action.
generated: true
---

# Tooltip

A text bubble on tap or long press, optionally with a copy action.

<PlatformBadges component="tooltip" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTooltip
import net.lingyun.ultraui.android.components.UPTooltipProps

DemoSection("文字提示") { UPTooltip(UPTooltipProps(text = "提示内容", triggerMode = "click"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTooltip(
  text: '长按文本，上方提示',
  overlay: true,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/tooltip_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTooltip } from 'ultra-ui-rn';

<UPTooltip overlay text="长按文本，上方提示" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/TooltipDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPTooltip } from '@ultra-ui'

<UPTooltip text='这是一条上方的文字提示' placement='top'>
  <Text className='tooltip-demo__trigger'>点我查看提示</Text>
</UPTooltip>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/tooltip/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-tooltip
    :text="text1"
    overlay
></up-tooltip>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/tooltip/tooltip.vue`</small>

</template>

<template #uniappx>

```vue
<up-tooltip
    :text="text1"
    overlay
></up-tooltip>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/tooltip/tooltip.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `text` | 需要显示的提示文字 | `String / Number` | `''` |
| `copyText` | 点击复制按钮时，复制的文本，为空则使用text值 | `String / Number` | `''` |
| `size` | 文本大小 | `String / Number` | `14` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `bgColor` | 弹出提示框时，文本的背景色 | `String` | `'transparent'` |
| `popupBgColor` | 弹出提示框的背景色 | `String` | `''` |
| `direction` | 弹出提示的方向，top-上方，bottom-下方，left-左方，right-右方 | `String` | `'top'` |
| `zIndex` | 弹出提示的z-index，nvue无效 | `String / Number` | `10071` |
| `showCopy` | 是否显示复制按钮 | `Boolean` | `true` |
| `buttons` | 扩展的按钮组 | `Array` | `[]` |
| `overlay` | 是否显示透明遮罩以防止触摸穿透 | `Boolean` | `true` |
| `showToast` | 是否显示复制成功或者失败的toast | `Boolean` | `true` |
| `triggerMode` | 触发方式，可选值：longpress/click | `String` | `'longpress'` |
| `forcePosition` | 强制定位 | `Object` | `{}` |
| `show` | 是否显示，triggerMode为manual时使用 | `Boolean` | `false` |
| `singleton` | 是否开启单例模式，开启该属性的tooltip同一页面同时只显示一个 | `Boolean` | `false` |

### Events

| Event |
| --- |
| `click` |
| `close` |
| `open` |
| `update:show` |

### Slots

| Slot |
| --- |
| `content` |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTooltip` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPTooltip` | `packages/ultra_ui/lib/src/widgets/up_tooltip.dart` |
| React Native · TypeScript | `UPTooltip` | `src/components/tooltip` |
| Taro · React + TypeScript | `UPTooltip` | `src/ultra-ui/components/up-tooltip` |
| uni-app · Vue 3 | `up-tooltip` | `src/uni_modules/uview-plus/components/u-tooltip` |
| uni-app-x · UTS / UVUE | `up-tooltip` | `uni_modules/uview-ultra/components/up-tooltip` |

