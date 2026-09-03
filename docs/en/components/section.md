---
title: Section
description: A block heading with an optional "more" affordance on the right.
generated: true
---

# Section

A block heading with an optional "more" affordance on the right.

<PlatformBadges component="section" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### 基础用法

```tsx
import { UPSection } from 'ultra-ui-rn';

<UPSection title="物流状态">
<View style={{ padding: 12, backgroundColor: '#f5f5f5' }}>
<Text>快递信息展示区域</Text>
</View>
</UPSection>
```

#### 副标题 + 右箭头

```tsx
<UPSection title="我的订单" subTitle="查看全部" arrow>
<View style={{ padding: 12, backgroundColor: '#f5f5f5' }}>
<Text>订单列表区域</Text>
</View>
</UPSection>
```

#### 标题靠右

```tsx
<UPSection title="右侧标题" right>
<View style={{ padding: 12, backgroundColor: '#f5f5f5' }}>
<Text>内容区域</Text>
</View>
</UPSection>
```

#### 自定义颜色和字号

```tsx
<UPSection title="自定义样式" color="#3c9cff" fontSize={18} lineColor="#3c9cff">
<View style={{ padding: 12, backgroundColor: '#f5f5f5' }}>
<Text>自定义颜色和字号</Text>
</View>
</UPSection>
```

#### 无左侧线条

```tsx
<UPSection title="无线条" showLine={false}>
<View style={{ padding: 12, backgroundColor: '#f5f5f5' }}>
<Text>无左侧线条</Text>
</View>
</UPSection>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/SectionDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

带标题的分节卡片

```tsx
import { UPSection } from '@ultra-ui'

<UPSection title='标题'>内容区</UPSection>
```

#### 隐藏右侧入口

right=false 只保留标题与内容

```tsx
<UPSection title='系统通知' right={false}>
  这里是分节的正文内容，可放置任意子节点，例如一段说明文字、列表或表单。
</UPSection>
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
| uni-app · Vue 3 | `up-section` | `uni_modules/uview-ultra/components/up-section` |
| uni-app-x · UTS / UVUE | `up-section` | `uni_modules/uview-ultra/components/up-section` |

