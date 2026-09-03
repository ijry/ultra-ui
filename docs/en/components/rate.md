---
title: Rate
description: A star rating control with half stars, read-only mode and custom icons.
generated: true
---

# Rate

A star rating control with half stars, read-only mode and custom icons.

<PlatformBadges component="rate" show-missing />

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRate, UPRateProps } from '@lingyun/ultra-ui-hos';

UPRate({ props: new UPRateProps({ modelValue: this.value, onChange: (event: UPRateChangeEvent): void => { this.change(event); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/RateDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPRate(size: 20, disabled: true)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/rate_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPRate } from 'ultra-ui-rn';

<UPRate size="20" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/RateDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPRate } from '@ultra-ui'

<UPRate value={basic} onChange={setBasic} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/rate/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-rate size="20"></up-rate>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/rate/rate.nvue`</small>

</template>

<template #uniappx>

```vue
<up-rate size="20"></up-rate>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/rate/rate.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `change` |
| `input` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPRate` | `UltraUI/Sources/UltraUI/Components/UPRate.swift` |
| Android · Jetpack Compose | `UPRate` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPRate.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPRate` | `ultra-ui/src/main/ets/components/UPRate.ets` |
| Flutter · Dart | `UPRate` | `packages/ultra_ui/lib/src/widgets/up_rate.dart` |
| React Native · TypeScript | `UPRate` | `src/components/rate` |
| Taro · React + TypeScript | `UPRate` | `src/ultra-ui/components/up-rate` |
| uni-app · Vue 3 | `up-rate` | `src/uni_modules/uview-plus/components/u-rate` |
| uni-app-x · UTS / UVUE | `up-rate` | `uni_modules/uview-ultra/components/up-rate` |

