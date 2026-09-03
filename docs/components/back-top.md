---
title: Back to top 返回顶部
description: 滚动一段距离后出现的回到顶部按钮。
generated: true
---

# Back to top 返回顶部

滚动一段距离后出现的回到顶部按钮。

<PlatformBadges component="back-top" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPBackTop
import net.lingyun.ultraui.android.components.UPBackTopProps

UPBackTop(
    props = UPBackTopProps(scrollTop = 800, text = "顶部"),
    onClick = { eventText = "返回顶部：点击" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### 返回顶部

```typescript
import { UPBackTop, UPBackTopProps } from '@lingyun/ultra-ui-hos';

UPBackTop({ props: new UPBackTopProps({ scrollTop: this.scrollTop, top: 400, bottom: 16, right: 4, onBackToTop: (): void => { this.scrollTop = 0; this.message = '调用方已处理返回顶部请求'; } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/BackTopDemo.ets`</small>

</template>

<template #flutter>

#### 自定义backTop(滚动页面即可在右下角看到图标)

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPBackTop(
  mode: square ? 'square' : 'circle',
  icon: customIcon ? 'arrow-up' : 'arrow-upward',
  bottom: 0,
  right: 0,
  duration: longDuration ? 1500 : 300,
  scrollTop: _scrollTop,
  scrollController: _scrollController,
  customStyle: customStyle
      ? const BoxDecoration(color: Color(0xFF2979FF))
      : null,
  iconStyle: customStyle
      ? const <String, dynamic>{'color': '#ffffff'}
      : null,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/back_top_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBackTop } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 滚动内容

本页使用页面原生滚动，右下角浮动返回顶部按钮

```tsx
import { UPBackTop } from '@ultra-ui'

<UPBackTop scrollTop={scrollTop} top={200} right={20} bottom={120} icon='arrow-upward' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/back-top/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

由于返回顶部需要实时监听滚动条的位置，从而判断返回的按钮该出现还是隐藏，由于组件无法得知页面的滚动条信息，只能在**页面**的`onPageScroll`生命周期
中获得滚动条的位置，故需要在页面监听`onPageScroll`生命周期，实时获得滚动条的位置，通过Props传递给组件。

```vue
<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<up-back-top :scroll-top="scrollTop"></up-back-top>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
import { onPageScroll } from '@dcloudio/uni-app';
  
// 创建响应式数据 scrollTop  
const scrollTop = ref(0);  
  
// onPageScroll 方法来更新 scrollTop 的值  
onPageScroll((e) => {
	scrollTop.value = e.scrollTop;
});
</script>
```

```vue
<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```

#### 改变返回顶部按钮的出现时机

可以通过`top`参数，修改页面滚动多少距离时，出现返回顶部的按钮

```vue
<up-back-top :scroll-top="scrollTop" top="600"></up-back-top>
```

#### 自定义返回顶部的图标和提示

- 通过`icon`修改返回顶部按钮的图标，可以是uview-plus内置的图标，或者图片路径
- 通过`text`参数修改返回顶部按钮的文字提示信息，如果需要修改文字的颜色和大小，可以通过`customStyle`参数

```vue
<up-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></up-back-top>
```

#### 其他自定义样式

- 通过`iconStyle`参数自定义图标的样式，比如颜色，大小等
- 通过`customStyle`修改返回按钮的背景颜色，大小等
- 通过`mode`修改按钮的形状，`circle`为圆形，`square`为方形

注意：如果通过`icon`参数传入图片路径的话，需要通过`iconStyle`参数设置图片的`width`和`height`属性

```vue
<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<up-back-top :scrollTop="scrollTop" :mode="mode" :iconStyle="iconStyle"></up-back-top>
	</view>
</template>
```

```vue
<script setup>  
import { ref, reactive } from 'vue';  
import { onPageScroll } from '@dcloudio/uni-app';

// 使用 ref 创建响应式基本类型数据  
const scrollTop = ref(0);  
const mode = ref('square');  
  
// 使用 reactive 创建响应式对象数据  
const iconStyle = reactive({  
  fontSize: '32rpx',  
  color: '#2979ff'  
});  
  
// onPageScroll 方法来更新 scrollTop 的值  
onPageScroll((e) => {
	scrollTop.value = e.scrollTop;
}); 
</script>
```

```vue
<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/backTop.md`</small>

</template>

<template #uniappx>

#### 基本使用

由于返回顶部需要实时监听滚动条的位置，从而判断返回的按钮该出现还是隐藏，由于组件无法得知页面的滚动条信息，只能在**页面**的`onPageScroll`生命周期
中获得滚动条的位置，故需要在页面监听`onPageScroll`生命周期，实时获得滚动条的位置，通过Props传递给组件。

```vue
<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<up-back-top :scroll-top="scrollTop"></up-back-top>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
import { onPageScroll } from '@dcloudio/uni-app';
  
// 创建响应式数据 scrollTop  
const scrollTop = ref(0);  
  
// onPageScroll 方法来更新 scrollTop 的值  
onPageScroll((e) => {
	scrollTop.value = e.scrollTop;
});
</script>
```

```vue
<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```

#### 改变返回顶部按钮的出现时机

可以通过`top`参数，修改页面滚动多少距离时，出现返回顶部的按钮

```vue
<up-back-top :scroll-top="scrollTop" top="600"></up-back-top>
```

#### 自定义返回顶部的图标和提示

- 通过`icon`修改返回顶部按钮的图标，可以是uview-ultra内置的图标，或者图片路径
- 通过`text`参数修改返回顶部按钮的文字提示信息，如果需要修改文字的颜色和大小，可以通过`customStyle`参数

```vue
<up-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></up-back-top>
```

#### 其他自定义样式

- 通过`iconStyle`参数自定义图标的样式，比如颜色，大小等
- 通过`customStyle`修改返回按钮的背景颜色，大小等
- 通过`mode`修改按钮的形状，`circle`为圆形，`square`为方形

注意：如果通过`icon`参数传入图片路径的话，需要通过`iconStyle`参数设置图片的`width`和`height`属性

```vue
<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<up-back-top :scrollTop="scrollTop" :mode="mode" :iconStyle="iconStyle"></up-back-top>
	</view>
</template>
```

```vue
<script setup>  
import { ref, reactive } from 'vue';  
import { onPageScroll } from '@dcloudio/uni-app';

// 使用 ref 创建响应式基本类型数据  
const scrollTop = ref(0);  
const mode = ref('square');  
  
// 使用 reactive 创建响应式对象数据  
const iconStyle = reactive({  
  fontSize: '32rpx',  
  color: '#2979ff'  
});  
  
// onPageScroll 方法来更新 scrollTop 的值  
onPageScroll((e) => {
	scrollTop.value = e.scrollTop;
}); 
</script>
```

```vue
<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/backTop.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mode` | 返回顶部的形状，circle-圆形，square-方形 | `String` | `'circle'` |
| `icon` | 自定义图标 | `String` | `'arrow-upward'` |
| `text` | 提示文字 | `String` | `''` |
| `duration` | 返回顶部滚动时间 | `String / Number` | `100` |
| `scrollTop` | 滚动距离 | `String / Number` | `0` |
| `top` | 距离顶部多少距离显示，单位px | `String / Number` | `400` |
| `bottom` | 返回顶部按钮到底部的距离，单位px | `String / Number` | `100` |
| `right` | 返回顶部按钮到右边的距离，单位px | `String / Number` | `20` |
| `zIndex` | 层级 | `String / Number` | `9` |
| `iconStyle` | 图标的样式，对象形式 | `Object` | `{ color: '#909399', fontSize: '19px' }` |

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
| iOS · SwiftUI | `UPBackTop` | `UltraUI/Sources/UltraUI/Components/UPBackTop.swift` |
| Android · Jetpack Compose | `UPBackTop` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPBackTop.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPBackTop` | `ultra-ui/src/main/ets/components/UPBackTop.ets` |
| Flutter · Dart | `UPBackTop` | `packages/ultra_ui/lib/src/widgets/up_back_top.dart` |
| React Native · TypeScript | `UPBackTop` | `src/components/back-top` |
| Taro · React + TypeScript | `UPBackTop` | `src/ultra-ui/components/up-back-top` |
| uni-app · Vue 3 | `up-back-top` | `uni_modules/uview-ultra/components/up-back-top` |
| uni-app-x · UTS / UVUE | `up-back-top` | `uni_modules/uview-ultra/components/up-back-top` |

