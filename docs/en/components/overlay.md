---
title: Overlay
description: A translucent scrim that highlights a layer and blocks background interaction.
generated: true
---

# Overlay

A translucent scrim that highlights a layer and blocks background interaction.

<PlatformBadges component="overlay" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPOverlay(show: true) {
    showOverlay = false
}
```

<small>Snippet from `ultra-ui-ios/Demo/MiscDemoView.swift`</small>

</template>

<template #android>

### 遮罩

```kotlin
import net.lingyun.ultraui.android.components.UPOverlay
import net.lingyun.ultraui.android.components.UPOverlayProps

UPOverlay(props = UPOverlayProps(show = true, opacity = 0.35), onClick = { eventText = "遮罩：点击" })
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/OverlayDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/overlay_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPOverlay } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPOverlay } from '@ultra-ui'

<UPOverlay show={current === 'basic'} onClick={close} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/overlay/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-overlay
    :show="show"
    @click="show = !show"
></up-overlay>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/overlay/overlay.uvue`</small>

</template>

<template #uniappx>

```vue
<up-overlay
    :show="show"
    @click="show = !show"
></up-overlay>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/overlay/overlay.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `show` | 是否显示遮罩 | `Boolean` | `false` |
| `zIndex` | 层级z-index | `String / Number` | `10070` |
| `duration` | 遮罩的过渡时间，单位为ms | `String / Number` | `300` |
| `opacity` | 不透明度值，当做rgba的第四个参数 | `String / Number` | `0.5` |

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
| iOS · SwiftUI | `UPOverlay` | `UltraUI/Sources/UltraUI/Components/UPOverlay.swift` |
| Android · Jetpack Compose | `UPOverlay` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPOverlay.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPOverlay` | `ultra-ui/src/main/ets/components/UPOverlay.ets` |
| Flutter · Dart | `UPOverlay` | `packages/ultra_ui/lib/src/widgets/up_overlay.dart` |
| React Native · TypeScript | `UPOverlay` | `src/components/overlay` |
| Taro · React + TypeScript | `UPOverlay` | `src/ultra-ui/components/up-overlay` |
| uni-app · Vue 3 | `up-overlay` | `uni_modules/uview-ultra/components/up-overlay` |
| uni-app-x · UTS / UVUE | `up-overlay` | `uni_modules/uview-ultra/components/up-overlay` |

