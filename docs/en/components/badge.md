---
title: Badge
description: A number or dot pinned to the corner of an icon to signal unread items.
generated: true
---

# Badge

A number or dot pinned to the corner of an icon to signal unread items.

<PlatformBadges component="badge" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Numeric badge

```typescript
import { UPBadge, UPBadgeProps } from '@lingyun/ultra-ui-hos';

UPBadge({ props: new UPBadgeProps({ value: 8 }) })
```

#### Dots and inverted colours

```typescript
UPBadge({ props: new UPBadgeProps({ isDot: true, type: 'success' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/BadgeDemo.ets`</small>

</template>

<template #flutter>

#### Square corners

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPBadge(value: 1500, shape: 'horn')
```

#### Badge display modes

```dart
UPBadge(value: 5132, numberType: 'ellipsis')
```

#### Showing a dot

```dart
UPBadge(value: 1011, numberType: 'overflow', isDot: true)
```

#### Custom theme

```dart
UPBadge(value: 9, type: 'error')
```

#### Inverted colours

```dart
UPBadge(value: 9, type: 'error', inverted: true)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/badge_page.dart`</small>

</template>

<template #reactnative>

#### Square corners

```tsx
import { UPBadge } from 'ultra-ui-rn';

<UPBadge value={1500} shape="horn" />
```

#### Badge display modes

```tsx
<UPBadge value={5132} numberType="ellipsis" />
```

#### Showing a dot

```tsx
<UPBadge value={1011} numberType="overflow" isDot />
```

#### Custom theme

```tsx
<UPBadge value={9} type="error" />
```

#### Inverted colours

```tsx
<UPBadge value={9} type="error" inverted />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/BadgeDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPBadge } from '@ultra-ui'

<UPBadge value={1} />
```

#### Theme types

```tsx
<UPBadge type='error' value={8} />
```

#### Dot

```tsx
<UPBadge isDot />
```

#### Inverted

```tsx
<UPBadge inverted type='error' value={9} />
```

#### Shapes

```tsx
<UPBadge shape='circle' value={12} />
```

#### Maximum value

```tsx
<UPBadge max={9} value={5} />
```

#### Overflow behaviour

```tsx
<UPBadge numberType='overflow' max={99} value={1000} />
```

#### Showing leading zeros

```tsx
<UPBadge value={0} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/badge/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view style="padding: 20px;">
		<view class="box">
			 <up-badge :type="type" max="99" :value="value"></up-badge>
		</view>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const type = ref('warning');  
const value = ref(100);  
</script>
```

```vue
<style lang="scss" scoped>
	.box{
		width: 100px; 
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
```

#### Badge as a plain dot

```vue
<up-badge :isDot="true" type="success"></up-badge>
```

#### Number display: overflow, ellipsis, limit

```vue
<template>
	<view style="padding: 20px;">
		<view class="box">
			 <up-badge numberType="overflow" :type="type" max="99" :value="value"></up-badge>
		</view>
		<view class="box">
			 <up-badge numberType="ellipsis" :type="type" max="99" :value="value"></up-badge>
		</view>
		<view class="box">
			 <up-badge numberType="limit" :type="type" max="99" :value="value"></up-badge>
		</view>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const type = ref('warning');  
const value = ref(99999);  
</script>
```

```vue
<style lang="scss" scoped>
	.box{
		width: 100px; 
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/badge.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view style="padding: 20px;">
		<view class="box">
			 <up-badge :type="type" max="99" :value="value"></up-badge>
		</view>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const type = ref('warning');  
const value = ref(100);  
</script>
```

```vue
<style lang="scss" scoped>
	.box{
		width: 100px; 
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
```

#### Badge as a plain dot

```vue
<up-badge :isDot="true" type="success"></up-badge>
```

#### Number display: overflow, ellipsis, limit

```vue
<template>
	<view style="padding: 20px;">
		<view class="box">
			 <up-badge numberType="overflow" :type="type" max="99" :value="value"></up-badge>
		</view>
		<view class="box">
			 <up-badge numberType="ellipsis" :type="type" max="99" :value="value"></up-badge>
		</view>
		<view class="box">
			 <up-badge numberType="limit" :type="type" max="99" :value="value"></up-badge>
		</view>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const type = ref('warning');  
const value = ref(99999);  
</script>
```

```vue
<style lang="scss" scoped>
	.box{
		width: 100px; 
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/badge.md`</small>

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

