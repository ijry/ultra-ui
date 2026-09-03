---
title: Back to top
description: A back-to-top button that appears after scrolling far enough.
generated: true
---

# Back to top

A back-to-top button that appears after scrolling far enough.

<PlatformBadges component="back-top" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### 返回顶部

```typescript
import { UPBackTop, UPBackTopProps } from '@lingyun/ultra-ui-hos';

UPBackTop({ props: new UPBackTopProps({ scrollTop: this.scrollTop, top: 400, bottom: 16, right: 4, onBackToTop: (): void => { this.scrollTop = 0; this.message = '调用方已处理返回顶部请求'; } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/BackTopDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/back_top_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBackTop } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### 滚动内容

本页使用页面原生滚动，右下角浮动返回顶部按钮

```tsx
import { UPBackTop } from '@ultra-ui'

<UPBackTop scrollTop={scrollTop} top={200} right={20} bottom={120} icon='arrow-upward' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/back-top/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

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

```vue
<up-back-top :scroll-top="scrollTop" top="600"></up-back-top>
```

#### 自定义返回顶部的图标和提示

```vue
<up-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></up-back-top>
```

#### 其他自定义样式

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/backTop.md`</small>

</template>

<template #uniappx>

#### 基本使用

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

```vue
<up-back-top :scroll-top="scrollTop" top="600"></up-back-top>
```

#### 自定义返回顶部的图标和提示

```vue
<up-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></up-back-top>
```

#### 其他自定义样式

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/backTop.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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
| iOS · SwiftUI | `UPBackTop` | `UltraUI/Sources/UltraUI/Components/UPBackTop.swift` |
| Android · Jetpack Compose | `UPBackTop` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPBackTop.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPBackTop` | `ultra-ui/src/main/ets/components/UPBackTop.ets` |
| Flutter · Dart | `UPBackTop` | `packages/ultra_ui/lib/src/widgets/up_back_top.dart` |
| React Native · TypeScript | `UPBackTop` | `src/components/back-top` |
| Taro · React + TypeScript | `UPBackTop` | `src/ultra-ui/components/up-back-top` |
| uni-app · Vue 3 | `up-back-top` | `uni_modules/uview-ultra/components/up-back-top` |
| uni-app-x · UTS / UVUE | `up-back-top` | `uni_modules/uview-ultra/components/up-back-top` |

