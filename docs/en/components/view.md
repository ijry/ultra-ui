---
title: View
description: The lowest-level view container, unifying the box model across platforms.
generated: true
---

# View

The lowest-level view container, unifying the box model across platforms.

<PlatformBadges component="view" show-missing />

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
import { UPView } from 'ultra-ui-rn';

<UPView backgroundColor="#e3f2fd" padding={12}>
<Text>基础 View</Text>
</UPView>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/ViewDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPView } from '@ultra-ui'

<UPView customClass='view-demo__box' backgroundColor='#ecf5ff' padding='16'>
  这是一个基础 View 容器
</UPView>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/view/index.tsx`</small>

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

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPView` | `packages/ultra_ui/lib/src/widgets/up_view.dart` |
| React Native · TypeScript | `UPView` | `src/components/view` |
| Taro · React + TypeScript | `UPView` | `src/ultra-ui/components/up-view` |
| uni-app · Vue 3 | `up-view` | `src/uni_modules/uview-plus/components/u-view` |
| uni-app-x · UTS / UVUE | `up-view` | `uni_modules/uview-ultra/components/up-view` |

