---
title: Section
description: A block heading with an optional "more" affordance on the right.
generated: true
---

# Section

A block heading with an optional "more" affordance on the right.

<PlatformBadges component="section" show-missing />

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
import { UPSection } from 'ultra-ui-rn';

<UPSection title="物流状态">
<View style={{ padding: 12, backgroundColor: '#f5f5f5' }}>
<Text>快递信息展示区域</Text>
</View>
</UPSection>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/SectionDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSection } from '@ultra-ui'

<UPSection title='标题'>内容区</UPSection>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/section/index.tsx`</small>

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

::: tip
This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.
:::

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPSection` | `packages/ultra_ui/lib/src/widgets/up_section.dart` |
| React Native · TypeScript | `UPSection` | `src/components/section` |
| Taro · React + TypeScript | `UPSection` | `src/ultra-ui/components/up-section` |
| uni-app · Vue 3 | `up-section` | `src/uni_modules/uview-plus/components/u-section` |
| uni-app-x · UTS / UVUE | `up-section` | `uni_modules/uview-ultra/components/up-section` |

