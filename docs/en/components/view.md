---
title: View
description: The lowest-level view container, unifying the box model across platforms.
generated: true
---

# View

The lowest-level view container, unifying the box model across platforms.

<PlatformBadges component="view" show-missing />

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

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/ViewDemo.tsx`</small>

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

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPView` | `packages/ultra_ui/lib/src/widgets/up_view.dart` |
| React Native · TypeScript | `UPView` | `src/components/view` |
| Taro · React + TypeScript | `UPView` | `src/ultra-ui/components/up-view` |
| uni-app · Vue 3 | `up-view` | `uni_modules/uview-ultra/components/up-view` |
| uni-app-x · UTS / UVUE | `up-view` | `uni_modules/uview-ultra/components/up-view` |

