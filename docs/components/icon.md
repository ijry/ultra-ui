---
title: Icon 图标
description: 内置字体图标库，同时支持传入图片路径作为图标使用。
generated: true
---

# Icon 图标

内置字体图标库，同时支持传入图片路径作为图标使用。

<PlatformBadges component="icon" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPIcon(name: icon, color: "primary", size: "30px")
```

<small>示例来源 `ultra-ui-ios/Demo/IconDemoView.swift`</small>

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPIcon
import net.lingyun.ultraui.android.components.UPIconProps

UPIcon(
    props = UPIconProps(
        name = name,
        size = 30,
        color = "#909399",
        stop = true,
    ),
    modifier = Modifier.padding(bottom = 10.dp),
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/IconDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPIcon, UPIconProps } from '@lingyun/ultra-ui-hos';

UPIcon({ props: new UPIconProps({
  name: 'check', color: 'success', size: 28, label: '完成', labelPos: 'bottom', index: 'check',
  onClick: (index: UPRawValue): void => {
    this.select(String(index));
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/IconDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPIcon(name: name, size: 30, color: '#909399')
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/icon_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPIcon } from 'ultra-ui-rn';

<UPIcon customPrefix="xyicon" name="light-mode" size="30" color="#909399" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/IconDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPIcon } from '@ultra-ui'

<UPIcon
  name={name}
  size='26px'
  label={name}
  labelPos='bottom'
  labelSize='10px'
  labelColor='tipsColor'
  space='6px'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/icon/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-icon
    stop
    :name="item.name"
    size="30"
    color="#909399"
    @click="test"
></up-icon>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/icon/icon.nvue`</small>

</template>

<template #uniappx>

```vue
<up-icon
    :name="item.name"
    size="30px"
    color="#909399"
    @click="test"
></up-icon>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/icon/icon.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 图标类名 | `String` | `''` |
| `color` | 图标颜色，可接受主题色 | `String` | `color['u-content-color']` |
| `size` | 字体大小，单位px | `String / Number` | `'16px'` |
| `bold` | 是否显示粗体 | `Boolean` | `false` |
| `index` | 点击图标的时候传递事件出去的index（用于区分点击了哪一个） | `String / Number` | `''` |
| `hoverClass` | 触摸图标时的类名 | `String` | `''` |
| `customPrefix` | 自定义扩展前缀，方便用户扩展自己的图标库 | `String` | `'uicon'` |
| `label` | 图标右边或者下面的文字 | `String / Number` | `''` |
| `labelPos` | label的位置，只能右边或者下边 | `String` | `'right'` |
| `labelSize` | label的大小 | `String / Number` | `'15px'` |
| `labelColor` | label的颜色 | `String` | `color['u-content-color']` |
| `space` | label与图标的距离 | `String / Number` | `'3px'` |
| `imgMode` | 图片的mode | `String` | `''` |
| `width` | 用于显示图片小图标时，图片的宽度 | `String / Number` | `''` |
| `height` | 用于显示图片小图标时，图片的高度 | `String / Number` | `''` |
| `top` | 用于解决某些情况下，让图标垂直居中的用途 | `String / Number` | `0` |
| `stop` | 是否阻止事件传播 | `Boolean` | `false` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPIcon` | `UltraUI/Sources/UltraUI/Components/UPIcon.swift` |
| Android · Jetpack Compose | `UPIcon` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPIcon.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPIcon` | `ultra-ui/src/main/ets/components/UPIcon.ets` |
| Flutter · Dart | `UPIcon` | `packages/ultra_ui/lib/src/widgets/up_icon.dart` |
| React Native · TypeScript | `UPIcon` | `src/components/icon` |
| Taro · React + TypeScript | `UPIcon` | `src/ultra-ui/components/up-icon` |
| uni-app · Vue 3 | `up-icon` | `src/uni_modules/uview-plus/components/u-icon` |
| uni-app-x · UTS / UVUE | `up-icon` | `uni_modules/uview-ultra/components/up-icon` |

