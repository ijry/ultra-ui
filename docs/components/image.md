---
title: Image 图片
description: 增强版图片组件，提供加载中、加载失败占位与淡入动画。
generated: true
---

# Image 图片

增强版图片组件，提供加载中、加载失败占位与淡入动画。

<PlatformBadges component="image" show-missing />

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
import net.lingyun.ultraui.android.components.UPImage
import net.lingyun.ultraui.android.components.UPImageProps

UPImage(
    props = UPImageProps(src = "", width = 72, height = 72, radius = 8, showError = true),
    onError = { eventText = "图片：本地错误占位" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPImage, UPImageProps } from '@lingyun/ultra-ui-hos';

UPImage({ props: new UPImageProps({
  src: '$rawfile:app_icon.png',
  width: 88,
  height: 88,
  shape: 'round',
  radius: 12,
  mode: 'aspectFit',
  onClick: (event: UPImageClickEvent): void => { this.selected(event); }
}) })
```

```typescript
UPImage({ props: new UPImageProps({
  src: '',
  width: 88,
  height: 88,
  shape: 'circle',
  errorIcon: 'photo',
  bgColor: '#f3f4f6'
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ImageDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPImage(
    src: _image,
    width: 80,
    height: 80,
    onClick: () => UPToast.show(context, message: '点击图片'))
```

```dart
UPImage(src: _image, shape: 'circle', width: 80, height: 80)
```

```dart
UPImage(src: _image, radius: 12, width: 80, height: 80)
```

```dart
UPImage(src: _image, radius: 12, width: '100%', height: 80)
```

```dart
UPImage(src: _image, mode: 'widthFix', width: 80, height: 80)
```

```dart
UPImage(src: _image, mode: 'heightFix', width: 80, height: 80)
```

```dart
UPImage(
    src: _image, mode: 'scaleToFill', width: 80, height: 80)
```

```dart
UPImage(src: _image, mode: 'aspectFit', width: 80, height: 80)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/image_page.dart`</small>

</template>

<template #reactnative>

#### 自定义形状

```tsx
import { UPImage } from 'ultra-ui-rn';

<UPImage shape="circle" src={SRC} width="80px" height="80px" />
```

#### 自定义圆角

```tsx
<UPImage radius="12" src={SRC} width="80px" height="80px" />
```

#### 宽度100%

```tsx
<UPImage radius="12" src={SRC} width="100%" height="80px" />
```

#### 图片模式(widthFix)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="widthFix" />
```

#### 图片模式(heightFix)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="heightFix" />
```

#### 图片模式(scaleToFill)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="scaleToFill" />
```

#### 图片模式(aspectFit)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="aspectFit" />
```

#### 图片模式(aspectFill)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="aspectFill" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/ImageDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

width / height，数字按 px 语义处理

```tsx
import { UPImage } from '@ultra-ui'

<UPImage src={PIC} width='100%' height='160px' />
```

#### 裁剪模式

mode 取值同 Taro Image

```tsx
<UPImage src={PIC2} mode={mode} width='90px' height='90px' />
```

#### 形状

shape：square 方形 / circle 圆形

```tsx
<UPImage src={PIC} shape='square' width='90px' height='90px' />
```

#### 圆角

radius 自定义圆角值

```tsx
<UPImage src={PIC3} radius={0} width='80px' height='80px' />
```

#### 加载中占位

showLoading + loadingIcon，加载完成后消失

```tsx
<UPImage
  key={`loading-${version}`}
  src={PIC}
  width='90px'
  height='90px'
  showLoading
/>
```

#### 加载失败

showError + errorIcon

```tsx
<UPImage src={BROKEN} width='90px' height='90px' showError />
```

#### 淡入效果

fade + duration，点上方「重新挂载」可重复观察

```tsx
<UPImage
  key={`fade-${version}`}
  src={PIC}
  width='90px'
  height='90px'
  fade
  duration={1200}
/>
```

#### 背景色

bgColor 用于占位区与深色背景融合

```tsx
<UPImage
  key={`bg-${version}`}
  src={BROKEN}
  width='90px'
  height='90px'
  showError
  bgColor='#ebedf0'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/image/index.tsx`</small>

</template>

<template #uniapp>

#### 配置manifest

在项目的manifest.json中增加mergeVirtualHostAttributes配置

```vue
"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}
```

#### 基本使用

配置图片的`width`宽和`height`高，以及`src`路径即可使用。

```vue
<template>
  <up-image :show-loading="true" :src="src" width="80px" height="80px" @click="click"></up-image>
</template>

<script setup>
import { ref } from 'vue';

const src = ref('https://cdn.uviewui.com/uview/album/1.jpg');

const click = () => {
  // 点击事件处理逻辑
};
</script>
```

#### 裁剪模式

通过`mode`参数配置填充模式，此模式用法与uni-app的`image`组件的`mode`参数完全一致，详见：[Image](https://uniapp.dcloud.io/component/image)

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" mode="widthFix"></up-image>
```

#### 图片形状

- 通过`shape`参数设置图片的形状，`circle`为圆形，`square`为方形
- 如果为方形时，还可以通过`radius`属性设置圆角值

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></up-image>
```

#### 懒加载

注意：此功能只对微信小程序、App、百度小程序、字节跳动小程序有效，默认开启。

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" :lazy-load="true"></up-image>
```

#### 加载中提示

图片加载过程中，为加载中状态(默认显示一个小图标)，可以通过`loading`自定义插槽，结合uview-plus的`u-loading`组件，实现加载的动画效果。

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg">
  <template v-slot:loading>
    <up-loading-icon color="red"></up-loading-icon>
  </template>
</up-image>
```

#### 加载错误提示

图片加载失败时，默认显示一个错误提示图标，可以通过`error`自定义插槽，实现个性化的提示方式。

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg">
	<template #error>
		<view style="font-size: 24rpx;">加载失败</view>
	</template>
</up-image>
```

#### 淡入动画

组件自带了加载完成时的淡入动画效果：

- 通过`fade`参数配置是否开启动画效果
- 通过`duration`参数配置动画的过渡时间，单位ms

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" :fade="true" duration="450"></up-image>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/image.md`</small>

</template>

<template #uniappx>

#### 配置manifest

在项目的manifest.json中增加mergeVirtualHostAttributes配置

```vue
"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}
```

#### 基本使用

配置图片的`width`宽和`height`高，以及`src`路径即可使用。

```vue
<template>
  <up-image :show-loading="true" :src="src" width="80px" height="80px" @click="click"></up-image>
</template>

<script setup>
import { ref } from 'vue';

const src = ref('https://cdn.uviewui.com/uview/album/1.jpg');

const click = () => {
  // 点击事件处理逻辑
};
</script>
```

#### 裁剪模式

通过`mode`参数配置填充模式，此模式用法与uni-app的`image`组件的`mode`参数完全一致，详见：[Image](https://uniapp.dcloud.io/component/image)

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" mode="widthFix"></up-image>
```

#### 图片形状

- 通过`shape`参数设置图片的形状，`circle`为圆形，`square`为方形
- 如果为方形时，还可以通过`radius`属性设置圆角值

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></up-image>
```

#### 懒加载

注意：此功能只对微信小程序、App、百度小程序、字节跳动小程序有效，默认开启。

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" :lazy-load="true"></up-image>
```

#### 加载中提示

图片加载过程中，为加载中状态(默认显示一个小图标)，可以通过`loading`自定义插槽，结合uview-ultra的`u-loading`组件，实现加载的动画效果。

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg">
  <template v-slot:loading>
    <up-loading-icon color="red"></up-loading-icon>
  </template>
</up-image>
```

#### 加载错误提示

图片加载失败时，默认显示一个错误提示图标，可以通过`error`自定义插槽，实现个性化的提示方式。

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg">
	<template #error>
		<view style="font-size: 24rpx;">加载失败</view>
	</template>
</up-image>
```

#### 淡入动画

组件自带了加载完成时的淡入动画效果：

- 通过`fade`参数配置是否开启动画效果
- 通过`duration`参数配置动画的过渡时间，单位ms

```vue
<up-image src="https://cdn.uviewui.com/uview/album/1.jpg" :fade="true" duration="450"></up-image>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/image.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 图片地址 | `String` | `''` |
| `mode` | 裁剪模式 | `String` | `'aspectFill'` |
| `width` | 宽度，单位任意 | `String / Number` | `'300'` |
| `height` | 高度，单位任意 | `String / Number` | `'225'` |
| `shape` | 图片形状，circle-圆形，square-方形 | `String` | `'square'` |
| `radius` | 圆角，单位任意 | `String / Number` | `0` |
| `lazyLoad` | 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序 | `Boolean` | `true` |
| `showMenuByLongpress` | 开启长按图片显示识别微信小程序码菜单 | `Boolean` | `true` |
| `loadingIcon` | 加载中的图标，或者小图片 | `String` | `'photo'` |
| `errorIcon` | 加载失败的图标，或者小图片 | `String` | `'error-circle'` |
| `showLoading` | 是否显示加载中的图标或者自定义的slot | `Boolean` | `true` |
| `showError` | 是否显示加载错误的图标或者自定义的slot | `Boolean` | `true` |
| `fade` | 是否需要淡入效果 | `Boolean` | `true` |
| `webp` | 只支持网络资源，只对微信小程序有效 | `Boolean` | `false` |
| `duration` | 过渡时间，单位ms | `String / Number` | `500` |
| `bgColor` | 背景颜色，用于深色页面加载图片时，为了和背景色融合 | `String` | `'#f3f4f6'` |

### 事件

| 事件名 |
| --- |
| `click` |
| `error` |
| `load` |

### 插槽

| 插槽名 |
| --- |
| `error` |
| `loading` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPImage` | `UltraUI/Sources/UltraUI/Components/UPImage.swift` |
| Android · Jetpack Compose | `UPImage` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPImage.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPImage` | `ultra-ui/src/main/ets/components/UPImage.ets` |
| Flutter · Dart | `UPImage` | `packages/ultra_ui/lib/src/widgets/up_image.dart` |
| React Native · TypeScript | `UPImage` | `src/components/image` |
| Taro · React + TypeScript | `UPImage` | `src/ultra-ui/components/up-image` |
| uni-app · Vue 3 | `up-image` | `uni_modules/uview-ultra/components/up-image` |
| uni-app-x · UTS / UVUE | `up-image` | `uni_modules/uview-ultra/components/up-image` |

