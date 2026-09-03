---
title: Section 章节标题
description: 带右侧"更多"入口的区块标题。
generated: true
---

# Section 章节标题

带右侧"更多"入口的区块标题。

<PlatformBadges component="section" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-rn/example/pages/components/display/SectionDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSection } from '@ultra-ui'

<UPSection title='标题'>内容区</UPSection>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/section/index.tsx`</small>

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

::: tip
该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。
:::

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPSection` | `packages/ultra_ui/lib/src/widgets/up_section.dart` |
| React Native · TypeScript | `UPSection` | `src/components/section` |
| Taro · React + TypeScript | `UPSection` | `src/ultra-ui/components/up-section` |
| uni-app · Vue 3 | `up-section` | `src/uni_modules/uview-plus/components/u-section` |
| uni-app-x · UTS / UVUE | `up-section` | `uni_modules/uview-ultra/components/up-section` |

