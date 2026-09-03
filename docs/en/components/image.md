---
title: Image
description: An enhanced image with loading and error placeholders plus a fade-in transition.
generated: true
---

# Image

An enhanced image with loading and error placeholders plus a fade-in transition.

<PlatformBadges component="image" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

### 图片

```kotlin
import net.lingyun.ultraui.android.components.UPImage
import net.lingyun.ultraui.android.components.UPImageProps

UPImage(
    props = UPImageProps(src = "", width = 72, height = 72, radius = 8, showError = true),
    onError = { eventText = "图片：本地错误占位" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/ImageDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/image_page.dart`</small>

</template>

<template #reactnative>

### 自定义形状

```tsx
import { UPImage } from 'ultra-ui-rn';

<UPImage shape="circle" src={SRC} width="80px" height="80px" />
```

### 自定义圆角

```tsx
<UPImage radius="12" src={SRC} width="80px" height="80px" />
```

### 宽度100%

```tsx
<UPImage radius="12" src={SRC} width="100%" height="80px" />
```

### 图片模式(widthFix)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="widthFix" />
```

### 图片模式(heightFix)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="heightFix" />
```

### 图片模式(scaleToFill)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="scaleToFill" />
```

### 图片模式(aspectFit)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="aspectFit" />
```

### 图片模式(aspectFill)

```tsx
<UPImage src={SRC} width="80px" height="80px" mode="aspectFill" />
```

### 自定义图片加载插槽

```tsx
<UPImage
  src={src1}
  width="80px"
  height="80px"
  mode="widthFix"
  loading={<UPLoadingIcon color="red" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/ImageDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

width / height，数字按 px 语义处理

```tsx
import { UPImage } from '@ultra-ui'

<UPImage src={PIC} width='100%' height='160px' />
```

### 裁剪模式

mode 取值同 Taro Image

```tsx
<UPImage src={PIC2} mode={mode} width='90px' height='90px' />
```

### 加载中占位

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

### 淡入效果

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

### 其它能力

lazyLoad 懒加载 / showMenuByLongpress 长按识别小程序码

```tsx
<UPImage src={PIC2} width='90px' height='90px' lazyLoad />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/image/index.tsx`</small>

</template>

<template #uniapp>

### 基本案例

```vue
<up-image
    :showLoading="true"
    :src="src"
    width="80px"
    height="80px"
    @click="click"
></up-image>
```

### 自定义形状

```vue
<up-image
    shape="circle"
    :src="src"
    width="80px"
    height="80px"
></up-image>
```

### 自定义圆角

```vue
<up-image
    radius="4"
    :src="src"
    width="80px"
    height="80px"
></up-image>
```

### 图片模式(widthFix)

```vue
<up-image
    :src="src"
    width="80px"
    height="80px"
    mode="widthFix"
></up-image>
```

### 自定义图片加载插槽

```vue
<up-image
    :src="src1"
    width="80px"
    height="80px"
    mode="widthFix"
>
    <template v-slot:loading>
        <up-loading-icon color="red"></up-loading-icon>
    </template>
</up-image>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/image/image.uvue`</small>

</template>

<template #uniappx>

### 基本案例

```vue
<up-image
    :showLoading="true"
    :src="src"
    width="80px"
    height="80px"
    @click="click"
></up-image>
```

### 自定义形状

```vue
<up-image
    shape="circle"
    :src="src"
    width="80px"
    height="80px"
></up-image>
```

### 自定义圆角

```vue
<up-image
    radius="4"
    :src="src"
    width="80px"
    height="80px"
></up-image>
```

### 图片模式(widthFix)

```vue
<up-image
    :src="src"
    width="80px"
    height="80px"
    mode="widthFix"
></up-image>
```

### 自定义图片加载插槽

```vue
<up-image
    :src="src1"
    width="80px"
    height="80px"
    mode="widthFix"
>
    <template v-slot:loading>
        <up-loading-icon color="red"></up-loading-icon>
    </template>
</up-image>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/image/image.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `click` |
| `error` |
| `load` |

### Slots

| Slot |
| --- |
| `error` |
| `loading` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPImage` | `UltraUI/Sources/UltraUI/Components/UPImage.swift` |
| Android · Jetpack Compose | `UPImage` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPImage.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPImage` | `ultra-ui/src/main/ets/components/UPImage.ets` |
| Flutter · Dart | `UPImage` | `packages/ultra_ui/lib/src/widgets/up_image.dart` |
| React Native · TypeScript | `UPImage` | `src/components/image` |
| Taro · React + TypeScript | `UPImage` | `src/ultra-ui/components/up-image` |
| uni-app · Vue 3 | `up-image` | `uni_modules/uview-ultra/components/up-image` |
| uni-app-x · UTS / UVUE | `up-image` | `uni_modules/uview-ultra/components/up-image` |

