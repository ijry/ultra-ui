---
title: Swiper
description: A carousel for images or custom content, with several indicator styles.
generated: true
---

# Swiper

A carousel for images or custom content, with several indicator styles.

<PlatformBadges component="swiper" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSwiper
import net.lingyun.ultraui.android.components.UPSwiperProps

DemoSection("轮播图") { UPSwiper(UPSwiperProps(list = listOf("第一页", "第二页"), indicator = true))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSwiper(
  key: const ValueKey('swiper-page-basic'),
  list: _swiperImages,
  autoplay: false,
  onChange: _onChange,
  onClick: _onClick,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/swiper_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSwiper } from 'ultra-ui-rn';

<UPSwiper
  autoplay={false}
  height="200"
  indicator
  indicatorMode="dot"
  list={list1}
  vertical
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/SwiperDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSwiper } from '@ultra-ui'

<UPSwiper list={LIST} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/swiper/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-swiper
    :list="list1"
    @change="change"
    @click="click"
></up-swiper>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/swiper/swiper.nvue`</small>

</template>

<template #uniappx>

```vue
<up-swiper
    :list="list1"
    @change="change"
    @click="click"
></up-swiper>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/swiper/swiper.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-swiper>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `list` | 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名 | `Array` | `[]` |
| `indicator` | 是否显示面板指示器 | `Boolean` | `false` |
| `indicatorActiveColor` | 指示器非激活颜色 | `String` | `'#FFFFFF'` |
| `indicatorInactiveColor` | 指示器的激活颜色 | `String` | `'rgba(255, 255, 255, 0.35)'` |
| `indicatorStyle` | 指示器样式，可通过bottom，left，right进行定位 | `String / Object` | `''` |
| `indicatorMode` | 指示器模式，line-线型，dot-点型 | `String` | `'line'` |
| `autoplay` | 是否自动切换 | `Boolean` | `true` |
| `current` | 当前所在滑块的 index | `String / Number` | `0` |
| `currentItemId` | 当前所在滑块的 item-id ，不能与 current 被同时指定 | `String` | `''` |
| `interval` | 滑块自动切换时间间隔 | `String / Number` | `3000` |
| `duration` | 滑块切换过程所需时间 | `String / Number` | `300` |
| `circular` | 播放到末尾后是否重新回到开头 | `Boolean` | `false` |
| `vertical` | 滑动方向是否为纵向 | `Boolean` | `false` |
| `previousMargin` | 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持 | `String / Number` | `0` |
| `nextMargin` | 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持 | `String / Number` | `0` |
| `acceleration` | 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持 | `Boolean` | `false` |
| `displayMultipleItems` | 同时显示的滑块数量，nvue、支付宝小程序不支持 | `Number` | `1` |
| `easingFunction` | 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic 只对微信小程序有效 | `String` | `'default'` |
| `keyName` | list数组中指定对象的目标属性名 | `String` | `'url'` |
| `imgMode` | 图片的裁剪模式 | `String` | `'aspectFill'` |
| `height` | 组件高度 | `String / Number` | `130` |
| `bgColor` | 背景颜色 | `String` | `'#f3f4f6'` |
| `radius` | 组件圆角，数值或带单位的字符串 | `String / Number` | `4` |
| `loading` | 是否加载中 | `Boolean` | `false` |
| `showTitle` | 是否显示标题，要求数组对象中有title属性 | `Boolean` | `false` |

#### Events

| Event |
| --- |
| `change` |
| `click` |
| `update:current` |

#### Slots

| Slot |
| --- |
| `default` |
| `indicator` |

### `<up-swiper-indicator>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `length` | 轮播的长度 | `String / Number` | `0` |
| `current` | 当前处于活动状态的轮播的索引 | `String / Number` | `0` |
| `indicatorActiveColor` | 指示器非激活颜色 | `String` | `''` |
| `indicatorInactiveColor` | 指示器的激活颜色 | `String` | `''` |
| `indicatorMode` | 指示器模式，line-线型，dot-点型 | `String` | `'line'` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSwiper` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPSwiper` | `packages/ultra_ui/lib/src/widgets/up_swiper.dart` |
| React Native · TypeScript | `UPSwiper` | `src/components/swiper` |
| Taro · React + TypeScript | `UPSwiper` | `src/ultra-ui/components/up-swiper` |
| uni-app · Vue 3 | `up-swiper` | `src/uni_modules/uview-plus/components/u-swiper` |
| uni-app-x · UTS / UVUE | `up-swiper` | `uni_modules/uview-ultra/components/up-swiper` |

