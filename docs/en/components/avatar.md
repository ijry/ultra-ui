---
title: Avatar
description: Shows a user avatar from an image, text or icon, and can stack into a group.
generated: true
---

# Avatar

Shows a user avatar from an image, text or icon, and can stack into a group.

<PlatformBadges component="avatar" show-missing />

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

### 头像

```kotlin
import net.lingyun.ultraui.android.components.UPAvatar
import net.lingyun.ultraui.android.components.UPAvatarProps

UPAvatar(props = UPAvatarProps(text = "U", randomBgColor = true, name = "avatar-u"), onClick = {
    eventText = "头像：$it"
})
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPAvatar, UPAvatarProps } from '@lingyun/ultra-ui-hos';

UPAvatar({ props: new UPAvatarProps({ text: '林', name: 'lingyun', randomBgColor: true, onClick: (event: UPAvatarClickEvent): void => { this.select(event); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/AvatarDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPAvatar(
  key: ValueKey('avatar-page-basic'),
  src: '${_base}1.jpg',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/avatar_page.dart`</small>

</template>

<template #reactnative>

### 基础演示

```tsx
import { UPAvatar } from 'ultra-ui-rn';

<UPAvatar src={src1} />
```

### 头像形状

```tsx
<UPAvatar src={src3} shape="square" />
```

### 头像尺寸

```tsx
<UPAvatar src={src4} size="30" />
```

### 图标头像

```tsx
<UPAvatar icon="red-packet-fill" fontSize="22" />
```

### 文字头像(自动背景色)

```tsx
<UPAvatar text="U" fontSize="20" randomBgColor colorIndex={0} />
```

### 图片加载失败(显示默认头像)

```tsx
<UPAvatar src={src7} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/AvatarDemo.tsx`</small>

</template>

<template #taro>

### 裁剪模式

mode 取值同 Taro Image

```tsx
import { UPAvatar } from '@ultra-ui'

<UPAvatar src={PIC} size={56} shape='square' mode={mode} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/avatar/index.tsx`</small>

</template>

<template #uniapp>

### 基础演示

```vue
<up-avatar :src="src1"></up-avatar>
```

### 头像形状

```vue
<up-avatar
    :src="src2"
    shape="circle"
    @click="click"
></up-avatar>
```

### 头像尺寸

```vue
<up-avatar
    :src="src4"
    size="30"
></up-avatar>
```

### 图标头像

```vue
<up-avatar
    icon="red-packet-fill"
    fontSize="22"
></up-avatar>
```

### 文字头像(自动背景色)

```vue
<up-avatar
    text="U"
    fontSize="20"
    randomBgColor
    :colorIndex="0"
></up-avatar>
```

### 图片加载失败(显示默认头像)

```vue
<up-avatar :src="src7"></up-avatar>
```

### 小程序开放能力

```vue
<up-avatar
    mpAvatar
    size="60"
></up-avatar>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/avatar/avatar.uvue`</small>

</template>

<template #uniappx>

### 基础演示

```vue
<up-avatar :src="src1"></up-avatar>
```

### 头像形状

```vue
<up-avatar
    :src="src2"
    shape="circle"
    @click="click"
></up-avatar>
```

### 头像尺寸

```vue
<up-avatar
    :src="src4"
    size="30"
></up-avatar>
```

### 图标头像

```vue
<up-avatar
    icon="red-packet-fill"
    fontSize="22"
></up-avatar>
```

### 文字头像(自动背景色)

```vue
<up-avatar
    text="U"
    fontSize="20"
    randomBgColor
    :colorIndex="0"
></up-avatar>
```

### 图片加载失败(显示默认头像)

```vue
<up-avatar :src="src7"></up-avatar>
```

### 小程序开放能力

```vue
<up-avatar
    mpAvatar
    size="60"
></up-avatar>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/avatar/avatar.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-avatar>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `src` | 头像图片路径(不能为相对路径) | `String` | `''` |
| `shape` | 头像形状，circle-圆形，square-方形 | `String` | `'circle'` |
| `size` | 头像尺寸 | `String / Number` | `40` |
| `mode` | 裁剪模式 | `String` | `'scaleToFill'` |
| `text` | 显示的文字 | `String` | `''` |
| `bgColor` | 背景色 | `String` | `'#c0c4cc'` |
| `color` | 文字颜色 | `String` | `'#ffffff'` |
| `fontSize` | 文字大小 | `String / Number` | `18` |
| `icon` | 显示的图标 | `String` | `''` |
| `mpAvatar` | 显示小程序头像，只对百度，微信，QQ小程序有效 | `Boolean` | `false` |
| `randomBgColor` | 是否使用随机背景色 | `Boolean` | `false` |
| `defaultUrl` | 加载失败的默认头像(组件有内置默认图片) | `String` | `''` |
| `colorIndex` | 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间 | `String / Number` | `''` |
| `name` | 组件标识符 | `String` | `''` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-avatar-group>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `urls` | 头像图片组 | `Array` | `[]` |
| `maxCount` | 最多展示的头像数量 | `String / Number` | `5` |
| `shape` | 头像形状 | `String` | `'circle'` |
| `mode` | 图片裁剪模式 | `String` | `'scaleToFill'` |
| `showMore` | 超出maxCount时是否显示查看更多的提示 | `Boolean` | `true` |
| `size` | 头像大小 | `String / Number` | `40` |
| `keyName` | 指定从数组的对象元素中读取哪个属性作为图片地址 | `String` | `''` |
| `gap` | 头像之间的遮挡比例 | `String / Number` | `0.5` |
| `extraValue` | 需额外显示的值 | `Number / String` | `0` |

#### Events

| Event |
| --- |
| `showMore` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPAvatar` | `UltraUI/Sources/UltraUI/Components/UPAvatar.swift` |
| Android · Jetpack Compose | `UPAvatar` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPAvatar.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPAvatar` | `ultra-ui/src/main/ets/components/UPAvatar.ets` |
| Flutter · Dart | `UPAvatar` | `packages/ultra_ui/lib/src/widgets/up_avatar.dart` |
| React Native · TypeScript | `UPAvatar` | `src/components/avatar` |
| Taro · React + TypeScript | `UPAvatar` | `src/ultra-ui/components/up-avatar` |
| uni-app · Vue 3 | `up-avatar` | `uni_modules/uview-ultra/components/up-avatar` |
| uni-app-x · UTS / UVUE | `up-avatar` | `uni_modules/uview-ultra/components/up-avatar` |

