---
title: Canvas
description: A canvas wrapper that hides platform differences; the base for QR codes and posters.
generated: true
---

# Canvas

A canvas wrapper that hides platform differences; the base for QR codes and posters.

<PlatformBadges component="canvas" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

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
import { UPCanvas } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCanvas } from '@ultra-ui'
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
| `canvasId` | — | `String` | `—` |
| `width` | — | `String / Number` | `—` |
| `height` | — | `String / Number` | `—` |
| `unit` | — | `String` | `—` |
| `useRootHeightAndWidth` | — | `Boolean` | `—` |
| `bgColor` | — | `String` | `—` |
| `disableScroll` | — | `Boolean` | `—` |

### Events

| Event |
| --- |
| `ready` |
| `touchend` |
| `touchmove` |
| `touchstart` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCanvas` | `packages/ultra_ui/lib/src/widgets/up_canvas.dart` |
| React Native · TypeScript | `UPCanvas` | `src/components/canvas` |
| Taro · React + TypeScript | `UPCanvas` | `src/ultra-ui/components/up-canvas` |
| uni-app · Vue 3 | `up-canvas` | `src/uni_modules/uview-plus/components/u-canvas` |
| uni-app-x · UTS / UVUE | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |

