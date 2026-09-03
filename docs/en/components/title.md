---
title: Title
description: Consistent heading typography with several levels and an optional prefix accent.
generated: true
---

# Title

Consistent heading typography with several levels and an optional prefix accent.

<PlatformBadges component="title" show-missing />

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
import net.lingyun.ultraui.android.components.UPTitle

UPTitle(text = "u-title 标题")
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTitle, UPTitleProps } from '@lingyun/ultra-ui-hos';

UPTitle({ props: new UPTitleProps({ title: '基础标题', subTitle: '默认主要色前缀' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TitleDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTitle(
  key: ValueKey('title-page-default'),
  text: '默认标题',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/title_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPTitle } from 'ultra-ui-rn';

<UPTitle>默认标题</UPTitle>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/TitleDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPTitle } from '@ultra-ui'

<UPTitle text='标题文字' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/title/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-title>
    默认标题
</up-title>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/title/title.nvue`</small>

</template>

<template #uniappx>

```vue
<up-title>
    默认标题
</up-title>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/title/title.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Slots

| Slot |
| --- |
| `default` |
| `prefix` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPTitle` | `UltraUI/Sources/UltraUI/Components/UPTitle.swift` |
| Android · Jetpack Compose | `UPTitle` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTitle.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTitle` | `ultra-ui/src/main/ets/components/UPTitle.ets` |
| Flutter · Dart | `UPTitle` | `packages/ultra_ui/lib/src/widgets/up_title.dart` |
| React Native · TypeScript | `UPTitle` | `src/components/title` |
| Taro · React + TypeScript | `UPTitle` | `src/ultra-ui/components/up-title` |
| uni-app · Vue 3 | `up-title` | `src/uni_modules/uview-plus/components/u-title` |
| uni-app-x · UTS / UVUE | `up-title` | `uni_modules/uview-ultra/components/up-title` |

