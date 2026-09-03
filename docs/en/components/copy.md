---
title: Copy
description: Writes text to the system clipboard with consistent success feedback.
generated: true
---

# Copy

Writes text to the system clipboard with consistent success feedback.

<PlatformBadges component="copy" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### Copy from the text

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCopy(
  key: const ValueKey('copy-page-text'),
  content: 'uview-plus is great !',
  onSuccess: _recordSuccess,
  child: const Text('点击复制'),
)
```

#### Copy from a button

```dart
UPCopy(
  key: const ValueKey('copy-page-button'),
  content: 'uview-plus is great !',
  onSuccess: _recordSuccess,
  child: const IgnorePointer(
    child: UPButton(
      type: 'primary',
      text: '点击复制',
    ),
  ),
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

#### Basic usage

```tsx
import { UPCopy } from '@ultra-ui'

<UPCopy text={SNIPPET}>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

#### Custom icon

```tsx
<UPCopy text={SNIPPET} size={20} color='primary'>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

#### Hiding the icon

```tsx
<UPCopy text={SNIPPET} icon={false}>
  <View className='copy-demo__snippet'>{SNIPPET}</View>
</UPCopy>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/copy/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view>
		<up-copy content="uview-plus is great !">
            <text>点击复制</text>
        </up-copy>
        <up-copy content="uview-plus is great !">
            <up-button type="primary">点击复制</up-button>
        </up-copy>
	</view>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/copy.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view>
		<up-copy content="uview-ultra is great !">
            <text>点击复制</text>
        </up-copy>
        <up-copy content="uview-ultra is great !">
            <up-button type="primary">点击复制</up-button>
        </up-copy>
	</view>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/copy.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

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
| uni-app · Vue 3 | `up-copy` | `uni_modules/uview-ultra/components/up-copy` |
| uni-app-x · UTS / UVUE | `up-copy` | `uni_modules/uview-ultra/components/up-copy` |

