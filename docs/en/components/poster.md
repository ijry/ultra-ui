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

```tsx
import { UPPoster } from '@ultra-ui'

<UPPoster ref={basicRef} json={basicJson} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/poster/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-poster 
    ref="poster" 
    :json="posterConfig"
    @export="onPosterExport"
></up-poster>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/poster/poster.nvue`</small>

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

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `json` | — | `Object` | `—` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPPoster` | `packages/ultra_ui/lib/src/widgets/up_poster.dart` |
| React Native · TypeScript | `UPPoster` | `src/components/poster` |
| Taro · React + TypeScript | `UPPoster` | `src/ultra-ui/components/up-poster` |
| uni-app · Vue 3 | `up-poster` | `src/uni_modules/uview-plus/components/u-poster` |
| uni-app-x · UTS / UVUE | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |

