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

```typescript
UPRate({ props: new UPRateProps({ value: 4, count: 6, activeColor: 'warning', size: 24 }) })
```

```typescript
UPRate({ props: new UPRateProps({ value: 2, disabled: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/RateDemo.ets`</small>

</template>

<template #flutter>

#### 是否禁用评分

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPRate(size: 20, disabled: true)
```

#### 是否只读评分

```dart
const UPRate(size: 20, readonly: true)
```

#### 禁止触摸选择

```dart
const UPRate(size: 20, touchable: false)
```

#### 自定义选中的图标

```dart
UPRate(
  key: rateKey,
  size: size,
  count: count,
  minCount: minCount,
  value: value,
  allowHalf: allowHalf,
  activeColor: activeColor,
  inactiveColor: inactiveColor,
  activeIcon: activeIcon,
  inactiveIcon: inactiveIcon,
  onChange: onChange,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/rate_page.dart`</small>

</template>

<template #reactnative>

#### 基本案例

```tsx
import { UPRate } from 'ultra-ui-rn';

<UPRate size="20" />
```

#### 自定义星星大小

```tsx
<UPRate count="4" size="30" />
```

#### 是否禁用评分

```tsx
<UPRate disabled size="20" />
```

#### 是否只读评分

```tsx
<UPRate readonly size="20" />
```

#### 自定义选中星星颜色

```tsx
<UPRate
  activeColor="#2979ff"
  onChange={setActiveColorValue}
  size="20"
  value={activeColorValue}
/>
```

#### 自定义未选中星星颜色

```tsx
<UPRate
  inactiveColor="#2979ff"
  onChange={setValue1}
  size="20"
  value={value1}
/>
```

#### 禁止触摸选择

```tsx
<UPRate size="20" touchable={false} />
```

#### 允许触摸选择

```tsx
<UPRate size="20" touchable />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/RateDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

value + onChange 受控绑定，默认 5 颗星

```tsx
import { UPRate } from '@ultra-ui'

<UPRate value={basic} onChange={setBasic} />
```

#### 星星数量

count 指定总数

```tsx
<UPRate count={3} value={count3} onChange={setCount3} />
```

#### 尺寸

size 单位 px，默认 18

```tsx
<UPRate size={14} value={small} onChange={setSmall} />
```

#### 间距

gutter 控制星星之间的距离，默认 4

```tsx
<UPRate gutter={0} value={gutter0} onChange={setGutter0} />
```

#### 自定义颜色

activeColor / inactiveColor

```tsx
<UPRate
  activeColor='#fa3534'
  inactiveColor='#f0c6c6'
  value={colored}
  onChange={setColored}
/>
```

#### 自定义图标

activeIcon / inactiveIcon 换成爱心

```tsx
<UPRate
  activeIcon='heart-fill'
  inactiveIcon='heart'
  activeColor='#fa3534'
  size={24}
  value={heart}
  onChange={setHeart}
/>
```

#### 半星

allowHalf，需要滑动到星星左半边

```tsx
<UPRate allowHalf size={26} value={half} onChange={setHalf} />
```

#### 最少选择数

minCount=0 时允许取消到 0 分

```tsx
<UPRate minCount={0} value={zero} onChange={setZero} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/rate/index.tsx`</small>

</template>

<template #uniapp>

#### 基本案例

```vue
<up-rate size="20"></up-rate>
```

#### 自定义选中星星数量

```vue
<up-rate
    size="20"
    v-model="value"
    @change="change"
></up-rate>
```

#### 自定义星星大小

```vue
<up-rate size="30" count="4"></up-rate>
```

#### 是否禁用评分

```vue
<up-rate size="20" disabled></up-rate>
```

#### 是否只读评分

```vue
<up-rate size="20" readonly></up-rate>
```

#### 自定义选中星星颜色

```vue
<up-rate
    size="20"
    v-model="activeColorValue"
    activeColor="#2979ff"
></up-rate>
```

#### 自定义未选中星星颜色

```vue
<up-rate
    size="20"
    v-model="value1"
    inactiveColor="#2979ff"
></up-rate>
```

#### 禁止触摸选择

```vue
<up-rate size="20" :touchable="false"></up-rate>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/rate/rate.uvue`</small>

</template>

<template #uniappx>

#### 基本案例

```vue
<up-rate size="20"></up-rate>
```

#### 自定义选中星星数量

```vue
<up-rate
    size="20"
    v-model="value"
    @change="change"
></up-rate>
```

#### 自定义星星大小

```vue
<up-rate size="30" count="4"></up-rate>
```

#### 是否禁用评分

```vue
<up-rate size="20" disabled></up-rate>
```

#### 是否只读评分

```vue
<up-rate size="20" readonly></up-rate>
```

#### 自定义选中星星颜色

```vue
<up-rate
    size="20"
    v-model="activeColorValue"
    activeColor="#2979ff"
></up-rate>
```

#### 自定义未选中星星颜色

```vue
<up-rate
    size="20"
    v-model="value1"
    inactiveColor="#2979ff"
></up-rate>
```

#### 禁止触摸选择

```vue
<up-rate size="20" :touchable="false"></up-rate>
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
| `inactiveColor` | 未选中时的颜色 | `String` | `'#b2b2b2'` |
| `activeColor` | 选中的颜色 | `String` | `'#FA3534'` |
| `gutter` | 星星之间的间距，单位px | `String / Number` | `4` |
| `minCount` | 最少能选择的星星个数 | `String / Number` | `1` |
| `allowHalf` | 是否允许半星 | `Boolean` | `false` |
| `activeIcon` | 选中时的图标(星星) | `String` | `'star-fill'` |
| `inactiveIcon` | 未选中时的图标(星星) | `String` | `'star'` |
| `touchable` | 是否可以通过滑动手势选择评分 | `Boolean` | `true` |

### Events

| Event |
| --- |
| `// #endif 	'change` |
| `// #ifdef VUE3 	'update:modelValue` |
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
| uni-app · Vue 3 | `up-rate` | `uni_modules/uview-ultra/components/up-rate` |
| uni-app-x · UTS / UVUE | `up-rate` | `uni_modules/uview-ultra/components/up-rate` |

