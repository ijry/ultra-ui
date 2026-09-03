---
title: Toast
description: A lightweight global message with success, error and loading themes plus a completion callback.
generated: true
---

# Toast

A lightweight global message with success, error and loading themes plus a completion callback.

<PlatformBadges component="toast" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPToast.show(message: "这是一条默认消息")
```

<small>Snippet from `ultra-ui-ios/Demo/ToastDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPToast
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #harmony>

```typescript
import { UPToastHost } from '@lingyun/ultra-ui-hos';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPToast.show(
  context,
  message: preset.message,
  type: preset.hideIcon ? '' : preset.type,
  icon: preset.icon,
  loading: preset.loading,
  overlay: true,
  position: preset.position,
  duration: 2000,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/toast_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPToast } from 'ultra-ui-rn';

<UPToast ref={toast} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/ToastDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPToast } from '@ultra-ui'

<UPToast
  show={inlineShow}
  message='我是组件式 UPToast'
  type='primary'
  icon={true}
  position='center'
  duration={-1}
  onChangeShow={setInlineShow}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/toast/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-toast ref="upToastRef"></up-toast>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/toast/toast.uvue`</small>

</template>

<template #uniappx>

```vue
<up-toast ref="upToastRef"></up-toast>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/toast/toast.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

::: tip
This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.
:::

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPToast` | `UltraUI/Sources/UltraUI/Components/UPToast.swift` |
| Android · Jetpack Compose | `UPToast` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPToast.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPToastHost` | `ultra-ui/src/main/ets/components/UPToastHost.ets` |
| Flutter · Dart | `UPToast` | `packages/ultra_ui/lib/src/widgets/up_toast.dart` |
| React Native · TypeScript | `UPToast` | `src/components/toast` |
| Taro · React + TypeScript | `UPToast` | `src/ultra-ui/components/up-toast` |
| uni-app · Vue 3 | `up-toast` | `uni_modules/uview-ultra/components/up-toast` |
| uni-app-x · UTS / UVUE | `up-toast` | `uni_modules/uview-ultra/components/up-toast` |

