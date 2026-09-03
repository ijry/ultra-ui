---
title: Count to 数字滚动
description: 数字从起始值滚动到目标值的动画。
generated: true
---

# Count to 数字滚动

数字从起始值滚动到目标值的动画。

<PlatformBadges component="count-to" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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
import net.lingyun.ultraui.android.components.UPCountTo
import net.lingyun.ultraui.android.components.UPCountToProps

DemoSection("数字滚动") { UPCountTo(UPCountToProps(startVal = 0, endVal = 128, autoplay = false))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCountTo(endVal: 3000, onEnd: _end)
```

### 倒计数

```dart
UPCountTo(startVal: 300)
```

### 显示小数位

```dart
UPCountTo(
  startVal: 100.00,
  endVal: 10.55,
  decimals: 2,
)
```

### 千分位分隔符

```dart
UPCountTo(
  startVal: 2000,
  endVal: 1542,
  separator: ',',
  decimals: 2,
)
```

### 自定义控制

```dart
UPCountTo(
  key: _manualKey,
  endVal: 3000,
  autoplay: false,
)
```

### 自定义

```dart
UPCountTo(
  endVal: 3000,
  color: '#909399',
  fontSize: 40,
  bold: true,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/count_to_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCountTo } from 'ultra-ui-rn';

<UPCountTo endVal={3000} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CountToDemo.tsx`</small>

</template>

<template #taro>

### 自动滚动

autoplay 加载即滚动到目标值

```tsx
import { UPCountTo } from '@ultra-ui'

<UPCountTo startVal={0} endVal={2000} duration={2000} autoplay separator=',' />
```

### 小数与千位分隔

decimals / separator

```tsx
<UPCountTo
  startVal={0}
  endVal={1234.567}
  decimals={3}
  separator=','
  duration={2500}
  autoplay
  color='#5ac725'
  fontSize={24}
/>
```

### 受控与命令式

value 绑定 + ref 控制 start / reset

```tsx
<UPCountTo ref={ref} startVal={0} endVal={val} duration={1500} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/count-to/index.tsx`</small>

</template>

<template #uniapp>

### 基础功能

```vue
<up-count-to
    :endVal="value"
    @end="end"
></up-count-to>
```

### 倒计数

```vue
<up-count-to :startVal="startVal1"></up-count-to>
```

### 显示小数位

```vue
<up-count-to
    :startVal="startVal2"
    :endVal="endVal"
    :decimals="decimals"
></up-count-to>
```

### 千分位分隔符

```vue
<up-count-to
    :startVal="startVal3"
    :endVal="endVal2"
    separator=","
    :decimals="decimals"
></up-count-to>
```

### 自定义控制

```vue
<up-count-to
    ref="uCountToRef"
    :endVal="endVal3"
    :autoplay="autoplay"
></up-count-to>
```

### 自定义

```vue
<up-count-to
    :endVal="value"
    color="#909399"
    :fontSize="fontSize"
    :bold="true"
></up-count-to>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/countTo/countTo.uvue`</small>

</template>

<template #uniappx>

### 基础功能

```vue
<up-count-to
    :endVal="value"
    @end="end"
></up-count-to>
```

### 倒计数

```vue
<up-count-to :startVal="startVal1"></up-count-to>
```

### 显示小数位

```vue
<up-count-to
    :startVal="startVal2"
    :endVal="endVal"
    :decimals="decimals"
></up-count-to>
```

### 千分位分隔符

```vue
<up-count-to
    :startVal="startVal3"
    :endVal="endVal2"
    separator=","
    :decimals="decimals"
></up-count-to>
```

### 自定义控制

```vue
<up-count-to
    ref="uCountToRef"
    :endVal="endVal3"
    :autoplay="autoplay"
></up-count-to>
```

### 自定义

```vue
<up-count-to
    :endVal="value"
    color="#909399"
    :fontSize="fontSize"
    :bold="true"
></up-count-to>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/countTo/countTo.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `startVal` | 开始的数值，默认从0增长到某一个数 | `String / Number` | `0` |
| `endVal` | 要滚动的目标数值，必须 | `String / Number` | `0` |
| `duration` | 滚动到目标数值的动画持续时间，单位为毫秒（ms） | `String / Number` | `2000` |
| `autoplay` | 设置数值后是否自动开始滚动 | `Boolean` | `true` |
| `decimals` | 要显示的小数位数 | `String / Number` | `0` |
| `useEasing` | 是否在即将到达目标数值的时候，使用缓慢滚动的效果 | `Boolean` | `true` |
| `decimal` | 十进制分割 | `String / Number` | `'.'` |
| `color` | 字体颜色 | `String` | `'#606266'` |
| `fontSize` | 字体大小 | `String / Number` | `22` |
| `bold` | 是否加粗字体 | `Boolean` | `false` |
| `separator` | 千位分隔符，类似金额的分割(￥23,321.05中的",") | `String` | `''` |

### 事件

| 事件名 |
| --- |
| `end` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCountTo` | `UltraUI/Sources/UltraUI/Components/UPCountTo.swift` |
| Android · Jetpack Compose | `UPCountTo` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPStatusNumericComponents.kt` |
| Flutter · Dart | `UPCountTo` | `packages/ultra_ui/lib/src/widgets/up_count_to.dart` |
| React Native · TypeScript | `UPCountTo` | `src/components/count-to` |
| Taro · React + TypeScript | `UPCountTo` | `src/ultra-ui/components/up-count-to` |
| uni-app · Vue 3 | `up-count-to` | `uni_modules/uview-ultra/components/up-count-to` |
| uni-app-x · UTS / UVUE | `up-count-to` | `uni_modules/uview-ultra/components/up-count-to` |

