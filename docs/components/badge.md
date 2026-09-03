---
title: Badge 徽标数
description: 出现在图标或文字右上角的数字或圆点，用于提示未读数量。
generated: true
---

# Badge 徽标数

出现在图标或文字右上角的数字或圆点，用于提示未读数量。

<PlatformBadges component="badge" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/BadgeDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/badge_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/BadgeDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/badge/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`value`参数定义徽标内容
- 通过`type`设置主题。重申一次，uview-plus中，所有组件的`type`参数都只有5个固定的可选值，分别是`primary`(蓝色-主色)，`warning`(黄色-警告)，
`error`(红色-错误)，`success`(绿色-成功)，`info`(灰色-信息)
- 通过`max`参数控制最大值，超过最大值会显示 '{max}+'

::: warning 注意
此组件内部默认为`absulote`绝对定位，所以需要给`badge`父组件(元素)设置`position: relative`相对定位，
再通过调整`offset`偏移值(数组，两个元素，第一个元素为`top`值，第二个元素为`right`值，单位rpx，可为负值，如"[-10, -10]")设置到合适的位置即可。  
如果不需要组件内容默认的自动绝对定位，设置`absolute`参数为`false`即可。
:::

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

#### 设置徽标的类型为一个圆点

通过`isDot`参数设置，该形式组件没有内容，只显示一个圆点

```vue
<up-badge :isDot="true" type="success"></up-badge>
```

#### 设置数字的显示方式 overflow|ellipsis|limit

- overflow会根据max字段判断，超出显示`${max}+`
- ellipsis会根据max判断，超出显示`${max}...`
- limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/badge.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`value`参数定义徽标内容
- 通过`type`设置主题。重申一次，uview-ultra中，所有组件的`type`参数都只有5个固定的可选值，分别是`primary`(蓝色-主色)，`warning`(黄色-警告)，
`error`(红色-错误)，`success`(绿色-成功)，`info`(灰色-信息)
- 通过`max`参数控制最大值，超过最大值会显示 '{max}+'

::: warning 注意
此组件内部默认为`absulote`绝对定位，所以需要给`badge`父组件(元素)设置`position: relative`相对定位，
再通过调整`offset`偏移值(数组，两个元素，第一个元素为`top`值，第二个元素为`right`值，单位rpx，可为负值，如"[-10, -10]")设置到合适的位置即可。  
如果不需要组件内容默认的自动绝对定位，设置`absolute`参数为`false`即可。
:::

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

#### 设置徽标的类型为一个圆点

通过`isDot`参数设置，该形式组件没有内容，只显示一个圆点

```vue
<up-badge :isDot="true" type="success"></up-badge>
```

#### 设置数字的显示方式 overflow|ellipsis|limit

- overflow会根据max字段判断，超出显示`${max}+`
- ellipsis会根据max判断，超出显示`${max}...`
- limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/badge.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPBadge` | `UltraUI/Sources/UltraUI/Components/UPBadge.swift` |
| Android · Jetpack Compose | `UPBadge` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPBadge.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPBadge` | `ultra-ui/src/main/ets/components/UPBadge.ets` |
| Flutter · Dart | `UPBadge` | `packages/ultra_ui/lib/src/widgets/up_badge.dart` |
| React Native · TypeScript | `UPBadge` | `src/components/badge` |
| Taro · React + TypeScript | `UPBadge` | `src/ultra-ui/components/up-badge` |
| uni-app · Vue 3 | `up-badge` | `uni_modules/uview-ultra/components/up-badge` |
| uni-app-x · UTS / UVUE | `up-badge` | `uni_modules/uview-ultra/components/up-badge` |

