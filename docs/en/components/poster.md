---
title: Poster
description: Composites text and images into a shareable poster.
generated: true
---

# Poster

Composites text and images into a shareable poster.

<PlatformBadges component="poster" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPoster(
  key: _poster,
  json: _posterConfig,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/poster_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPoster } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

### 基础用法

view 色块 + text 多行截断 + qrcode 二维码

```tsx
import { UPPoster } from '@ultra-ui'

<UPPoster ref={basicRef} json={basicJson} />
```

### 渐变与圆角

linear-gradient 背景、圆角卡片、圆角图片裁剪

```tsx
<UPPoster ref={gradientRef} json={gradientJson} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/poster/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-poster
    ref="poster"
    :json="posterConfig"
    @export="onPosterExport"
    @error="onPosterError"
></up-poster>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/poster/poster.uvue`</small>

</template>

<template #uniappx>

```vue
<up-poster
    ref="poster"
    :json="posterConfig"
    @export="onPosterExport"
    @error="onPosterError"
></up-poster>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/poster/poster.uvue`</small>

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
| Flutter · Dart | `UPPoster` | `packages/ultra_ui/lib/src/widgets/up_poster.dart` |
| React Native · TypeScript | `UPPoster` | `src/components/poster` |
| Taro · React + TypeScript | `UPPoster` | `src/ultra-ui/components/up-poster` |
| uni-app · Vue 3 | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |
| uni-app-x · UTS / UVUE | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |

