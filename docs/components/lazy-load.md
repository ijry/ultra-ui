---
title: Lazy load 图片懒加载
description: 进入视口后才真正加载图片，减少首屏请求。
generated: true
---

# Lazy load 图片懒加载

进入视口后才真正加载图片，减少首屏请求。

<PlatformBadges component="lazy-load" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLazyLoad(
  index: index,
  image: _images[index],
  threshold: -450,
  height: '100px',
  imgMode: 'aspectFill',
  borderRadius: 10,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/lazy_load_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLazyLoad } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPLazyLoad } from '@ultra-ui'

<UPLazyLoad
  key={index}
  src={src}
  width='100%'
  height='360rpx'
  placeholder='#ecf5ff'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/lazy-load/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-lazy-load threshold="-450" height="100px" img-mode="aspectFill" border-radius="10" :image="item.src"
    :index="index" @statusChange="statusChange" @clickImg="clickImg"></up-lazy-load>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/lazyLoad/lazyLoad.nvue`</small>

</template>

<template #uniappx>

```vue
<up-lazy-load threshold="-450" height="100px" img-mode="aspectFill" border-radius="10" :image="item.src"
    :index="index" @statusChange="statusChange" @clickImg="clickImg"></up-lazy-load>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/lazyLoad/lazyLoad.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `index` | — | `Number / String` | `—` |
| `image` | 要显示的图片 | `String` | `—` |
| `imgMode` | 图片裁剪模式 | `String` | `—` |
| `loadingImg` | 占位图片路径 | `String` | `—` |
| `errorImg` | 加载失败的错误占位图 | `String` | `—` |
| `threshold` | 图片进入可见区域前多少像素时，单位rpx，开始加载图片 负数为图片超出屏幕底部多少距离后触发懒加载，正数为图片顶部距离屏幕底部多少距离时触发(图片还没出现在屏幕上) | `Number / String` | `—` |
| `duration` | 淡入淡出动画的过渡时间 | `Number / String` | `—` |
| `effect` | 渡效果的速度曲线，各个之间差别不大，因为这是淡入淡出，且时间很短，不是那些变形或者移动的情况，会明显 linear&#124;ease&#124;ease-in&#124;ease-out&#124;ease-in-out&#124;cubic-bezier(n,n,n,n); | `String` | `—` |
| `isEffect` | 是否使用过渡效果 | `Boolean` | `—` |
| `borderRadius` | 圆角值 | `Number / String` | `—` |
| `height` | 图片高度，单位rpx | `Number / String` | `—` |

### 事件

| 事件名 |
| --- |
| `click` |
| `error` |
| `load` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPLazyLoad` | `packages/ultra_ui/lib/src/widgets/up_lazy_load.dart` |
| React Native · TypeScript | `UPLazyLoad` | `src/components/lazy-load` |
| Taro · React + TypeScript | `UPLazyLoad` | `src/ultra-ui/components/up-lazy-load` |
| uni-app · Vue 3 | `up-lazy-load` | `src/uni_modules/uview-plus/components/u-lazy-load` |
| uni-app-x · UTS / UVUE | `up-lazy-load` | `uni_modules/uview-ultra/components/up-lazy-load` |

