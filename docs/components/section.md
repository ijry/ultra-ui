---
title: Section 章节标题
description: 带右侧"更多"入口的区块标题。
generated: true
---

# Section 章节标题

带右侧"更多"入口的区块标题。

<PlatformBadges component="section" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-rn/example/pages/components/display/SectionDemo.tsx`</small>

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
| uni-app · Vue 3 | `up-section` | `uni_modules/uview-ultra/components/up-section` |
| uni-app-x · UTS / UVUE | `up-section` | `uni_modules/uview-ultra/components/up-section` |

