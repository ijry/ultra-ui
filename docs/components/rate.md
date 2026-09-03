---
title: Rate 评分
description: 星级评分控件，支持半星、只读与自定义图标。
generated: true
---

# Rate 评分

星级评分控件，支持半星、只读与自定义图标。

<PlatformBadges component="rate" show-missing />

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
import net.lingyun.ultraui.android.components.UPRate
import net.lingyun.ultraui.android.components.UPRateProps

UPRate(
    props = UPRateProps(modelValue = rateValue, value = rateValue, allowHalf = true),
    onInput = {
        rateValue = it
        eventText = "评分：$it"
    },
    onChange = { eventText = "评分确认：$it" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRate, UPRateProps } from '@lingyun/ultra-ui-hos';

UPRate({ props: new UPRateProps({ modelValue: this.value, onChange: (event: UPRateChangeEvent): void => { this.change(event); } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/RateDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPRate(size: 20, disabled: true)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/rate_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPRate } from 'ultra-ui-rn';

<UPRate size="20" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/RateDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPRate } from '@ultra-ui'

<UPRate value={basic} onChange={setBasic} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/rate/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-rate size="20"></up-rate>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/rate/rate.nvue`</small>

</template>

<template #uniappx>

```vue
<up-rate size="20"></up-rate>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/rate/rate.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 用于v-model双向绑定选中的星星数量 | `String / Number` | `—` |
| `value` | 用于v-model双向绑定选中的星星数量 | `String / Number` | `1` |
| `count` | 要显示的星星数量 | `String / Number` | `5` |
| `disabled` | 是否不可选中 | `Boolean` | `false` |
| `readonly` | 是否只读 | `Boolean` | `—` |
| `size` | 星星的大小，单位px | `String / Number` | `18` |
| `inactiveColor` | 未选中时的颜色 | `String` | `''` |
| `activeColor` | 选中的颜色 | `String` | `''` |
| `gutter` | 星星之间的间距，单位px | `String / Number` | `4` |
| `minCount` | 最少能选择的星星个数 | `String / Number` | `1` |
| `allowHalf` | 是否允许半星 | `Boolean` | `false` |
| `activeIcon` | 选中时的图标(星星) | `String` | `'star-fill'` |
| `inactiveIcon` | 未选中时的图标(星星) | `String` | `'star'` |
| `touchable` | 是否可以通过滑动手势选择评分 | `Boolean` | `true` |

### 事件

| 事件名 |
| --- |
| `change` |
| `input` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPRate` | `UltraUI/Sources/UltraUI/Components/UPRate.swift` |
| Android · Jetpack Compose | `UPRate` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPRate.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPRate` | `ultra-ui/src/main/ets/components/UPRate.ets` |
| Flutter · Dart | `UPRate` | `packages/ultra_ui/lib/src/widgets/up_rate.dart` |
| React Native · TypeScript | `UPRate` | `src/components/rate` |
| Taro · React + TypeScript | `UPRate` | `src/ultra-ui/components/up-rate` |
| uni-app · Vue 3 | `up-rate` | `src/uni_modules/uview-plus/components/u-rate` |
| uni-app-x · UTS / UVUE | `up-rate` | `uni_modules/uview-ultra/components/up-rate` |

