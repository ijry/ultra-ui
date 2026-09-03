---
title: Badge
description: A number or dot pinned to the corner of an icon to signal unread items.
generated: true
---

# Badge

A number or dot pinned to the corner of an icon to signal unread items.

<PlatformBadges component="badge" show-missing />

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
import net.lingyun.ultraui.android.components.UPBadge
import net.lingyun.ultraui.android.components.UPBadgeProps

UPBadge(
    props = UPBadgeProps(value = 8, type = "error"),
    content = {
        Box(
        modifier = Modifier
            .size(48.dp)
            .background(UPTheme.Light, RoundedCornerShape(8.dp))
            .border(0.5.dp, UPTheme.Border, RoundedCornerShape(8.dp)),
        contentAlignment = Alignment.Center,
    ) {
        Text("消息", color = UPTheme.Content)
        }
    },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

#### 数字徽标

```typescript
import { UPBadge, UPBadgeProps } from '@lingyun/ultra-ui-hos';

UPBadge({ props: new UPBadgeProps({ value: 8 }) })
```

#### 圆点与反色

```typescript
UPBadge({ props: new UPBadgeProps({ isDot: true, type: 'success' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/BadgeDemo.ets`</small>

</template>

<template #flutter>

#### 直角边形状

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPBadge(value: 1500, shape: 'horn')
```

#### 徽标数显示方式

```dart
UPBadge(value: 5132, numberType: 'ellipsis')
```

#### 显示圆点

```dart
UPBadge(value: 1011, numberType: 'overflow', isDot: true)
```

#### 自定义主题

```dart
UPBadge(value: 9, type: 'error')
```

#### 反转色

```dart
UPBadge(value: 9, type: 'error', inverted: true)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/badge_page.dart`</small>

</template>

<template #reactnative>

#### 直角边形状

```tsx
import { UPBadge } from 'ultra-ui-rn';

<UPBadge value={1500} shape="horn" />
```

#### 徽标数显示方式

```tsx
<UPBadge value={5132} numberType="ellipsis" />
```

#### 显示圆点

```tsx
<UPBadge value={1011} numberType="overflow" isDot />
```

#### 自定义主题

```tsx
<UPBadge value={9} type="error" />
```

#### 反转色

```tsx
<UPBadge value={9} type="error" inverted />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/BadgeDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

value 为显示内容，支持数字与文字

```tsx
import { UPBadge } from '@ultra-ui'

<UPBadge value={1} />
```

#### 主题类型

type：error / warning / success / primary / info

```tsx
<UPBadge type='error' value={8} />
```

#### 圆点

isDot 为 true 时忽略 value，只显示小红点

```tsx
<UPBadge isDot />
```

#### 反色

inverted 反转背景与文字颜色

```tsx
<UPBadge inverted type='error' value={9} />
```

#### 形状

shape：circle 四角圆润 / horn 左下角为直角

```tsx
<UPBadge shape='circle' value={12} />
```

#### 最大值

numberType=overflow（默认），超过 max 显示 max+

```tsx
<UPBadge max={9} value={5} />
```

#### 超出显示方式

numberType：overflow / ellipsis / limit

```tsx
<UPBadge numberType='overflow' max={99} value={1000} />
```

#### 显示零

showZero 决定 value 为 0 时是否展示

```tsx
<UPBadge value={0} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/badge/index.tsx`</small>

</template>

<template #uniapp>

#### 直角边形状

```vue
<up-badge
    :value="1500"
    shape="horn"
></up-badge>
```

#### 徽标数显示方式

```vue
<up-badge
    :value="5132"
    numberType="ellipsis"
></up-badge>
```

#### 显示圆点

```vue
<up-badge
    :value="1011"
    numberType="overflow"
    isDot
>
</up-badge>
```

#### 自定义主题

```vue
<up-badge
    :value="9"
    type="error"
>
</up-badge>
```

#### 反转色

```vue
<up-badge
    :value="9"
    type="error"
    inverted
>
</up-badge>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/badge/badge.uvue`</small>

</template>

<template #uniappx>

#### 直角边形状

```vue
<up-badge
    :value="1500"
    shape="horn"
></up-badge>
```

#### 徽标数显示方式

```vue
<up-badge
    :value="5132"
    numberType="ellipsis"
></up-badge>
```

#### 显示圆点

```vue
<up-badge
    :value="1011"
    numberType="overflow"
    isDot
>
</up-badge>
```

#### 自定义主题

```vue
<up-badge
    :value="9"
    type="error"
>
</up-badge>
```

#### 反转色

```vue
<up-badge
    :value="9"
    type="error"
    inverted
>
</up-badge>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/badge/badge.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `isDot` | 是否显示圆点 | `Boolean` | `false` |
| `value` | 显示的内容 | `Number / String` | `''` |
| `modelValue` | 显示的内容 | `Number / String` | `—` |
| `show` | 是否显示 | `Boolean` | `true` |
| `max` | 最大值，超过最大值会显示 '{max}+' | `Number / String` | `999` |
| `type` | 主题类型，error&#124;warning&#124;success&#124;primary | `String` | `'error'` |
| `showZero` | 当数值为 0 时，是否展示 Badge | `Boolean` | `false` |
| `bgColor` | 背景颜色，优先级比type高，如设置，type参数会失效 | `String / null` | `null` |
| `color` | 字体颜色 | `String / null` | `null` |
| `shape` | 徽标形状，circle-四角均为圆角，horn-左下角为直角 | `String` | `'circle'` |
| `numberType` | 设置数字的显示方式，overflow&#124;ellipsis&#124;limit overflow会根据max字段判断，超出显示`${max}+` ellipsis会根据max判断，超出显示`${max}...` limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数 | `String` | `'overflow'` |
| `offset` | 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效 | `Array` | `[]` |
| `inverted` | 是否反转背景和字体颜色 | `Boolean` | `false` |
| `absolute` | 是否绝对定位 | `Boolean` | `false` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPBadge` | `UltraUI/Sources/UltraUI/Components/UPBadge.swift` |
| Android · Jetpack Compose | `UPBadge` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPBadge.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPBadge` | `ultra-ui/src/main/ets/components/UPBadge.ets` |
| Flutter · Dart | `UPBadge` | `packages/ultra_ui/lib/src/widgets/up_badge.dart` |
| React Native · TypeScript | `UPBadge` | `src/components/badge` |
| Taro · React + TypeScript | `UPBadge` | `src/ultra-ui/components/up-badge` |
| uni-app · Vue 3 | `up-badge` | `uni_modules/uview-ultra/components/up-badge` |
| uni-app-x · UTS / UVUE | `up-badge` | `uni_modules/uview-ultra/components/up-badge` |

