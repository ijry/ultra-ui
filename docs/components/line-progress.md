---
title: Line progress 线形进度条
description: 横向进度条，可在条内显示百分比。
generated: true
---

# Line progress 线形进度条

横向进度条，可在条内显示百分比。

<PlatformBadges component="line-progress" show-missing />

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

### 线性进度

```kotlin
import net.lingyun.ultraui.android.components.UPLineProgress

UPLineProgress(percentage = percentage, showText = true, height = 18)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLineProgress, UPLineProgressProps } from '@lingyun/ultra-ui-hos';

UPLineProgress({ props: new UPLineProgressProps({ percentage: 20 }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LineProgressDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPLineProgress } from 'ultra-ui-rn';

<UPLineProgress />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/LineProgressDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

percentage 控制进度，默认显示在右侧外部

```tsx
import { UPLineProgress } from '@ultra-ui'

<UPLineProgress percentage={30} customClass='line-progress-demo__item' />
```

### 文字内显

textInside，百分比文字显示在进度条内部

```tsx
<UPLineProgress percentage={45} textInside customClass='line-progress-demo__item' />
```

### 圆角与斑马纹

round 胶囊形，striped 动态条纹

```tsx
<UPLineProgress percentage={70} round striped customClass='line-progress-demo__item' />
```

### 自定义高度

height

```tsx
<UPLineProgress percentage={40} height={24} customClass='line-progress-demo__item' />
```

### 受控动画

定时器驱动 percentage 自动增长

```tsx
<UPLineProgress
  percentage={percent}
  round
  showText={false}
  customClass='line-progress-demo__item'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/line-progress/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-line-progress :percentage="percentage1">
</up-line-progress>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/progress/progress.uvue`</small>

</template>

<template #uniappx>

```vue
<up-line-progress :percentage="percentage1">
</up-line-progress>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/progress/progress.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `activeColor` | 激活部分的颜色 | `String` | `'#19be6b'` |
| `inactiveColor` | — | `String` | `'#ececec'` |
| `percentage` | 进度百分比，数值 | `String / Number` | `0` |
| `showText` | 是否在进度条内部显示百分比的值 | `Boolean` | `true` |
| `height` | 进度条的高度，单位px | `String / Number` | `12` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLineProgress` | `UltraUI/Sources/UltraUI/Components/UPLineProgress.swift` |
| Android · Jetpack Compose | `UPLineProgress` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLineProgress.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLineProgress` | `ultra-ui/src/main/ets/components/UPLineProgress.ets` |
| Flutter · Dart | `UPLineProgress` | `packages/ultra_ui/lib/src/widgets/up_line_progress.dart` |
| React Native · TypeScript | `UPLineProgress` | `src/components/line-progress` |
| Taro · React + TypeScript | `UPLineProgress` | `src/ultra-ui/components/up-line-progress` |
| uni-app · Vue 3 | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |
| uni-app-x · UTS / UVUE | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |

