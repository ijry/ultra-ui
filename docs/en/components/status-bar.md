---
title: Status bar
description: A spacer as tall as the system status bar, for custom nav bars.
generated: true
---

# Status bar

A spacer as tall as the system status bar, for custom nav bars.

<PlatformBadges component="status-bar" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPStatusBar

DemoSection("状态栏") { UPStatusBar()
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPStatusBar, UPStatusBarProps } from '@lingyun/ultra-ui-hos';

UPStatusBar({ props: new UPStatusBarProps({ bgColor: '#2979ff', onHeightChange: (height: number): void => { this.statusBarHeight = height; } }) })
```

```typescript
UPStatusBar({ props: new UPStatusBarProps({ height: 18, bgColor: '#ecf5ff' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/StatusBarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

```tsx
import { UPStatusBar } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPStatusBar } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

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
| `bgColor` | — | `String` | `'transparent'` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPStatusBar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPStatusBar` | `ultra-ui/src/main/ets/components/UPStatusBar.ets` |
| Flutter · Dart | `UPStatusBar` | `packages/ultra_ui/lib/src/widgets/up_status_bar.dart` |
| React Native · TypeScript | `UPStatusBar` | `src/components/status-bar` |
| Taro · React + TypeScript | `UPStatusBar` | `src/ultra-ui/components/up-status-bar` |
| uni-app · Vue 3 | `up-status-bar` | `uni_modules/uview-ultra/components/up-status-bar` |
| uni-app-x · UTS / UVUE | `up-status-bar` | `uni_modules/uview-ultra/components/up-status-bar` |

