---
title: View 视图容器
description: 最底层的视图容器，统一各端的盒模型与样式写法。
generated: true
---

# View 视图容器

最底层的视图容器，统一各端的盒模型与样式写法。

<PlatformBadges component="view" show-missing />

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

#### 基础视图

```tsx
import { UPView } from 'ultra-ui-rn';

<UPView backgroundColor="#e3f2fd" padding={12}>
<Text>基础 View</Text>
</UPView>
```

#### flex-direction: row

```tsx
<UPView backgroundColor="#f3e5f5" flexDirection="row" padding={12} justifyContent="space-around">
<Text>项目1</Text>
<Text>项目2</Text>
<Text>项目3</Text>
</UPView>
```

#### 居中 + 边框

```tsx
<UPView backgroundColor="#e8f5e9" justifyContent="center" alignItems="center" height={100} borderColor="#4caf50">
<Text>居中内容</Text>
</UPView>
```

#### flex1 等分

```tsx
<UPView flexDirection="row" height={60}>
<UPView flex1 backgroundColor="#ff6600" justifyContent="center" alignItems="center">
<Text style={{ color: '#fff' }}>1</Text>
</UPView>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/ViewDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

通用视图容器，可承载任意子节点

```tsx
import { UPView } from '@ultra-ui'

<UPView customClass='view-demo__box' backgroundColor='#ecf5ff' padding='16'>
  这是一个基础 View 容器
</UPView>
```

#### 布局

flexDirection / justifyContent / alignItems

```tsx
<UPView
  customClass='view-demo__row'
  flexDirection='row'
  justifyContent='space-between'
  alignItems='center'
  padding='16'
  backgroundColor='#f5f5f5'
>
  <View className='view-demo__cell'>左</View>
  <View className='view-demo__cell'>中</View>
  <View className='view-demo__cell'>右</View>
</UPView>
```

#### 尺寸与圆角

width / height / radius / margin

```tsx
<UPView
  customClass='view-demo__box'
  width='120'
  height='120'
  radius='16'
  backgroundColor='#3c9cff'
  color='#fff'
  alignItems='center'
  justifyContent='center'
  margin='0 12'
>
  120 × 120
</UPView>
```

#### 占满剩余空间

flex1 撑满父容器剩余高度

```tsx
<UPView customClass='view-demo__fill-wrap' flexDirection='column' height='200'>
  <UPView customClass='view-demo__header' padding='12' backgroundColor='#f0f0f0'>
    顶部固定
  </UPView>
```

#### 可点击

onClick 触发，带按压反馈

```tsx
<UPView
  customClass='view-demo__clickable'
  padding='16'
  backgroundColor='#19be6b'
  color='#fff'
  alignItems='center'
  justifyContent='center'
  onClick={() => toast.show({ message: 'View 被点击了', type: 'success' })}
>
  点我
</UPView>
```

#### 边框与内边距

borderColor / padding 简写

```tsx
<UPView
  customClass='view-demo__bordered'
  padding='20 16'
  borderColor='#3c9cff'
  radius='8'
>
  带蓝色边框与内边距的容器
</UPView>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/view/index.tsx`</small>

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

### 事件

| 事件名 |
| --- |
| `click` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPView` | `packages/ultra_ui/lib/src/widgets/up_view.dart` |
| React Native · TypeScript | `UPView` | `src/components/view` |
| Taro · React + TypeScript | `UPView` | `src/ultra-ui/components/up-view` |
| uni-app · Vue 3 | `up-view` | `uni_modules/uview-ultra/components/up-view` |
| uni-app-x · UTS / UVUE | `up-view` | `uni_modules/uview-ultra/components/up-view` |

