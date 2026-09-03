---
title: Copy
description: Writes text to the system clipboard with consistent success feedback.
generated: true
---

# Copy

Writes text to the system clipboard with consistent success feedback.

<PlatformBadges component="copy" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCopy(
  key: const ValueKey('copy-page-text'),
  content: 'uview-plus is great !',
  onSuccess: _recordSuccess,
  child: const Text('点击复制'),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/copy_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCopy } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCopy } from '@ultra-ui'

<UPCopy text={SNIPPET}>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/copy/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-copy content="uview-plus is great !">
    <text>点击复制</text>
</up-copy>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/copy/copy.nvue`</small>

</template>

<template #uniappx>

```vue
<up-copy content="uview-plus is great !">
    <text>点击复制</text>
</up-copy>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/copy/copy.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `content` | — | `String` | `—` |
| `alertStyle` | — | `String` | `—` |
| `notice` | — | `String` | `—` |

### Events

| Event |
| --- |
| `success` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCopy` | `packages/ultra_ui/lib/src/widgets/up_copy.dart` |
| React Native · TypeScript | `UPCopy` | `src/components/copy` |
| Taro · React + TypeScript | `UPCopy` | `src/ultra-ui/components/up-copy` |
| uni-app · Vue 3 | `up-copy` | `src/uni_modules/uview-plus/components/u-copy` |
| uni-app-x · UTS / UVUE | `up-copy` | `uni_modules/uview-ultra/components/up-copy` |

