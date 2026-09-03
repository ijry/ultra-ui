---
title: Popup
description: A generic container popping from any edge or the centre; the base of many components.
generated: true
---

# Popup

A generic container popping from any edge or the centre; the base of many components.

<PlatformBadges component="popup" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPPopup(show: $showPopup,
        mode: mode,
        closeable: true,
        closeOnClickOverlay: true) {
    VStack(spacing: 14) {
        Text("u-popup")
            .font(.headline)
        Text("当前弹出方向：\(mode)")
            .foregroundStyle(.secondary)
        UPButton(type: "primary", text: "关闭") {
            showPopup = false
        }
    }
    .padding(24)
    .frame(maxWidth: mode == "center" ? 280 : nil)
}
```

<small>Snippet from `ultra-ui-ios/Demo/PopupDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPopup
import net.lingyun.ultraui.android.components.UPPopupProps

UPPopup(
    props = UPPopupProps(show = popupVisible, pageInline = true, overlay = false, mode = "center", round = 8),
    onUpdateShow = { popupVisible = it },
    onClick = { eventText = "弹窗：内容点击" },
) {
    Text("内联 popup 内容", color = UPTheme.Main, modifier = Modifier.padding(16.dp))
}
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPPopup, UPPopupProps } from '@lingyun/ultra-ui-hos';

UPPopup({ props: new UPPopupProps({
  show: this.showPopup,
  mode: this.mode,
  round: true,
  closeable: true,
  safeAreaInsetBottom: true,
  onClose: (event: UPPopupCloseEvent): void => {
    this.message = '关闭原因：' + event.reason;
  },
  onShowChange: (show: boolean): void => {
    this.showPopup = show;
  }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/PopupDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPopup(
  show: _show,
  safeAreaInsetBottom: true,
  safeAreaInsetTop: true,
  mode: _preset.mode,
  round: _preset.round,
  overlay: _preset.overlay,
  closeable: _preset.closeable,
  closeOnClickOverlay: _preset.closeOnClickOverlay,
  touchable: _preset.touchable,
  minHeight: _preset.minHeight,
  maxHeight: _preset.maxHeight,
  onClose: _close,
  onUpdateShow: (show) => setState(() => _show = show),
  child: _PopupContent(
    mode: _preset.mode,
    scrollHeight: _preset.scrollHeight,
    onClose: _close,
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/popup_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPopup } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPPopup } from '@ultra-ui'

<UPPopup show={current === 'top'} mode='top' onClose={close}>
  <Panel title='顶部弹出' tips='mode="top"，点击遮罩关闭' />
</UPPopup>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/popup/index.tsx`</small>

</template>

<template #uniapp>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否展示弹窗 | `Boolean` | `false` |
| `overlay` | 是否显示遮罩 | `Boolean` | `true` |
| `mode` | 弹出的方向，可选值为 top bottom right left center | `String` | `'bottom'` |
| `duration` | 动画时长，单位ms | `String / Number` | `300` |
| `closeable` | 是否显示关闭图标 | `Boolean` | `false` |
| `overlayStyle` | 自定义遮罩的样式 | `Object / String` | `{}` |
| `closeOnClickOverlay` | 点击遮罩是否关闭弹窗 | `Boolean` | `true` |
| `zIndex` | 层级 | `String / Number` | `10075` |
| `safeAreaInsetBottom` | 是否为iPhoneX留出底部安全距离 | `Boolean` | `true` |
| `safeAreaInsetTop` | 是否留出顶部安全距离（状态栏高度） | `Boolean` | `false` |
| `closeIconPos` | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角 | `String` | `'top-right'` |
| `round` | 是否显示圆角 | `Boolean / String / Number` | `'20px'` |
| `zoom` | mode=center，也即中部弹出时，是否使用缩放模式 | `Boolean` | `true` |
| `bgColor` | 弹窗背景色，设置为transparent可去除白色背景 | `String` | `''` |
| `overlayOpacity` | 遮罩的透明度，0-1之间 | `Number / String` | `0.5` |
| `pageInline` | 是否页面内展示 | `Boolean` | `false` |
| `touchable` | 是否页开启手势滑动 | `Boolean` | `false` |
| `minHeight` | 手势滑动最小高度 | `String` | `'200px'` |
| `maxHeight` | 手势滑动最大高度 | `String` | `'600px'` |

### Events

| Event |
| --- |
| `click` |
| `close` |
| `closed` |
| `open` |
| `update:show` |

### Slots

| Slot |
| --- |
| `bottom` |
| `default` |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPPopup` | `UltraUI/Sources/UltraUI/Components/UPPopup.swift` |
| Android · Jetpack Compose | `UPPopup` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopup.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPPopup` | `ultra-ui/src/main/ets/components/UPPopup.ets` |
| Flutter · Dart | `UPPopup` | `packages/ultra_ui/lib/src/widgets/up_popup.dart` |
| React Native · TypeScript | `UPPopup` | `src/components/popup` |
| Taro · React + TypeScript | `UPPopup` | `src/ultra-ui/components/up-popup` |
| uni-app · Vue 3 | `up-popup` | `src/uni_modules/uview-plus/components/u-popup` |
| uni-app-x · UTS / UVUE | `up-popup` | `uni_modules/uview-ultra/components/up-popup` |

