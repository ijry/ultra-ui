---
title: Load more
description: A list footer with loading, loaded and no-more states.
generated: true
---

# Load more

A list footer with loading, loaded and no-more states.

<PlatformBadges component="loadmore" show-missing />

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
import net.lingyun.ultraui.android.components.UPLoadmore
import net.lingyun.ultraui.android.components.UPLoadmoreProps

UPLoadmore(
    props = UPLoadmoreProps(status = loadmoreStatus, line = true),
    onLoadmore = {
        loadmoreStatus = if (loadmoreStatus == "loadmore") "loading" else "loadmore"
        eventText = "加载更多：$loadmoreStatus"
    },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLoadmore, UPLoadmoreProps } from '@lingyun/ultra-ui-hos';

UPLoadmore({ props: new UPLoadmoreProps({ status: 'loadmore', line: true }) })
```

```typescript
UPLoadmore({ props: new UPLoadmoreProps({ status: 'loading', loadingText: '努力加载中', icon: true }) })
```

```typescript
UPLoadmore({ props: new UPLoadmoreProps({ status: 'nomore', nomoreText: '到底了', line: true, dashed: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LoadmoreDemo.ets`</small>

</template>

<template #flutter>

#### 基础使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLoadmore(status: 'loading', isDot: true, iconSize: 17)
```

#### 无更多数据

```dart
UPLoadmore(line: true, status: 'nomore')
```

#### 自定义图标

```dart
UPLoadmore(status: 'loading', loadingIcon: 'circle')
```

#### 显示点

```dart
UPLoadmore(
  status: 'nomore',
  isDot: true,
  line: true,
  color: '#909399',
)
```

#### 自定义提示语

```dart
UPLoadmore(
  status: 'loading',
  loadingText: '努力加载中,先喝杯茶',
  color: '#909399',
)
```

#### 自定义线条颜色

```dart
UPLoadmore(
  loadmoreText: '看,我和别人不一样',
  color: '#1CD29B',
  lineColor: '#1CD29B',
  dashed: true,
  line: true,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/loadmore_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPLoadmore } from 'ultra-ui-rn';

<UPLoadmore status={status} onLoadmore={getData} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/LazyLoadDemo.tsx`</small>

</template>

<template #taro>

#### 加载图标

icon / iconSize / loadingIcon

```tsx
import { UPLoadmore } from '@ultra-ui'

<UPLoadmore status='loading' icon loadingText='加载中' />
```

#### 分割线

line / dashed / lineColor

```tsx
<UPLoadmore status='nomore' nomoreText='没有更多了' line />
```

#### 点状结尾

isDot，nomore 时以粗点替代文字

```tsx
<UPLoadmore status='nomore' isDot />
```

#### 自定义颜色

color / bgColor

```tsx
<UPLoadmore status='loadmore' color='#3c9cff' loadmoreText='加载更多' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/loadmore/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<view class="wrap">
		<view class="item up-border-bottom" v-for="(item, index) in list" :key="index">
			{{'第' + item + '条数据'}}
		</view>
		<up-loadmore :status="status" />
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const status = ref('loadmore');  
const list = ref(15);  
const page = ref(0);  
  
// 定义方法  
function onReachBottom() {  
  if (page.value >= 3) return;  
  status.value = 'loading';  
  page.value++;  
  setTimeout(() => {  
    list.value += 10;  
    if (page.value >= 3) status.value = 'nomore';  
    else status.value = 'loading';  
  }, 2000);  
}  
</script>
```

```vue
<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.item {
		padding: 24rpx 0;
		color: $u-content-color;
		font-size: 28rpx;
	}
</style>
```

#### 控制组件的提示以及动画效果

```vue
<template>
	<up-loadmore 
        :status="status" 
        :loading-text="loadingText" 
        :loadmore-text="loadmoreText" 
        :nomore-text="nomoreText" 
    />
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const status = ref('loadmore');  
const loadingText = ref('努力加载中');  
const loadmoreText = ref('轻轻上拉');  
const nomoreText = ref('实在没有了');  
</script>
```

#### 线条自定义颜色和设置为虚线 <badge text="2.0.32" />

```vue
<template>
	<up-loadmore 
		loadmoreText="看,我和别人不一样"
		color="#1CD29B"
		lineColor="#1CD29B"
		dashed
		line
    />
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const status = ref('loadmore');  
const loadingText = ref('努力加载中');  
const loadmoreText = ref('轻轻上拉');  
const nomoreText = ref('实在没有了');  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/loadMore.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<view class="wrap">
		<view class="item up-border-bottom" v-for="(item, index) in list" :key="index">
			{{'第' + item + '条数据'}}
		</view>
		<up-loadmore :status="status" />
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const status = ref('loadmore');  
const list = ref(15);  
const page = ref(0);  
  
// 定义方法  
function onReachBottom() {  
  if (page.value >= 3) return;  
  status.value = 'loading';  
  page.value++;  
  setTimeout(() => {  
    list.value += 10;  
    if (page.value >= 3) status.value = 'nomore';  
    else status.value = 'loading';  
  }, 2000);  
}  
</script>
```

```vue
<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.item {
		padding: 24rpx 0;
		color: $up-content-color;
		font-size: 28rpx;
	}
</style>
```

#### 控制组件的提示以及动画效果

```vue
<template>
	<up-loadmore 
        :status="status" 
        :loading-text="loadingText" 
        :loadmore-text="loadmoreText" 
        :nomore-text="nomoreText" 
    />
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const status = ref('loadmore');  
const loadingText = ref('努力加载中');  
const loadmoreText = ref('轻轻上拉');  
const nomoreText = ref('实在没有了');  
</script>
```

#### 线条自定义颜色和设置为虚线 <badge text="2.0.32" />

```vue
<template>
	<up-loadmore 
		loadmoreText="看,我和别人不一样"
		color="#1CD29B"
		lineColor="#1CD29B"
		dashed
		line
    />
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const status = ref('loadmore');  
const loadingText = ref('努力加载中');  
const loadmoreText = ref('轻轻上拉');  
const nomoreText = ref('实在没有了');  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/loadMore.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `status` | 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态 | `String` | `'loadmore'` |
| `bgColor` | 组件背景色 | `String` | `'transparent'` |
| `icon` | 是否显示加载中的图标 | `Boolean` | `true` |
| `fontSize` | 字体大小 | `String / Number` | `14` |
| `iconSize` | 图标大小 | `String / Number` | `17` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `loadingIcon` | 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆 | `String` | `'spinner'` |
| `loadmoreText` | 加载前的提示语 | `String` | `'加载更多'` |
| `loadingText` | 加载中提示语 | `String` | `'正在加载...'` |
| `nomoreText` | 没有更多的提示语 | `String` | `'没有更多了'` |
| `isDot` | 在“没有更多”状态下，是否显示粗点 | `Boolean` | `false` |
| `iconColor` | 加载中图标的颜色 | `String` | `'#b7b7b7'` |
| `marginTop` | 上边距 | `String / Number` | `10` |
| `marginBottom` | 下边距 | `String / Number` | `10` |
| `height` | 高度，单位px | `String / Number` | `'auto'` |
| `line` | 是否显示左边分割线 | `Boolean` | `false` |
| `lineColor` | 线条颜色 | `String` | `'#E6E8EB'` |
| `dashed` | 是否虚线，true-虚线，false-实线 | `Boolean` | `false` |

### Events

| Event |
| --- |
| `loadmore` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLoadmore` | `UltraUI/Sources/UltraUI/Components/UPLoadmore.swift` |
| Android · Jetpack Compose | `UPLoadmore` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLoadmore.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLoadmore` | `ultra-ui/src/main/ets/components/UPLoadmore.ets` |
| Flutter · Dart | `UPLoadmore` | `packages/ultra_ui/lib/src/widgets/up_loadmore.dart` |
| React Native · TypeScript | `UPLoadmore` | `src/components/loadmore` |
| Taro · React + TypeScript | `UPLoadmore` | `src/ultra-ui/components/up-loadmore` |
| uni-app · Vue 3 | `up-loadmore` | `uni_modules/uview-ultra/components/up-loadmore` |
| uni-app-x · UTS / UVUE | `up-loadmore` | `uni_modules/uview-ultra/components/up-loadmore` |

