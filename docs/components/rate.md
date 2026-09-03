---
title: Rate 评分
description: 星级评分控件，支持半星、只读与自定义图标。
generated: true
---

# Rate 评分

星级评分控件，支持半星、只读与自定义图标。

<PlatformBadges component="rate" show-missing />

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

```typescript
UPRate({ props: new UPRateProps({ value: 4, count: 6, activeColor: 'warning', size: 24 }) })
```

```typescript
UPRate({ props: new UPRateProps({ value: 2, disabled: true }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/RateDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/rate_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/RateDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/rate/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`count`参数设置总共有多少颗星星可选择
- 通过`v-model`双向绑定初始化时默认选中的星星数量

```vue
<template>
	<up-rate :count="count" v-model="value"></up-rate>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
const count = ref(4);  
const value = ref(2);  
</script>
```

#### 自定义样式

- 通过`active-color`设置选中的星星的颜色
- 通过`inactive-color`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占`gutter`的一半

```vue
<up-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></up-rate>
```

#### 自定义图标

- 通过`active-icon`设置激活的图标
- 通过`inactive-icon`设置未激活的图标

下方示例为使用心形图标替代默认的星星图标：

```vue
<up-rate activeIcon="heart-fill" inactiveIcon="heart"></up-rate>
```

#### 最少选中的数量

```vue
<up-rate :minCount="5"></up-rate>
```

#### 禁用状态

禁用下，无法点击或者滑动选择，但是可以通过`value`设置默认选中的数量，禁用状态下用来展示分数，允许出现半星

```vue
<up-rate :value="3.7" disabled></up-rate>
```

#### 只读状态

只读下，无法点击或者滑动选择，但是可以通过`value`设置默认选中的数量，禁用状态下用来展示分数，允许出现半星

```vue
<up-rate :value="3.7" readonly></up-rate>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/rate.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`count`参数设置总共有多少颗星星可选择
- 通过`v-model`双向绑定初始化时默认选中的星星数量

```vue
<template>
	<up-rate :count="count" v-model="value"></up-rate>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
const count = ref(4);  
const value = ref(2);  
</script>
```

#### 自定义样式

- 通过`active-color`设置选中的星星的颜色
- 通过`inactive-color`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占`gutter`的一半

```vue
<up-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></up-rate>
```

#### 自定义图标

- 通过`active-icon`设置激活的图标
- 通过`inactive-icon`设置未激活的图标

下方示例为使用心形图标替代默认的星星图标：

```vue
<up-rate activeIcon="heart-fill" inactiveIcon="heart"></up-rate>
```

#### 最少选中的数量

```vue
<up-rate :minCount="5"></up-rate>
```

#### 禁用状态

禁用下，无法点击或者滑动选择，但是可以通过`value`设置默认选中的数量，禁用状态下用来展示分数，允许出现半星

```vue
<up-rate :value="3.7" disabled></up-rate>
```

#### 只读状态

只读下，无法点击或者滑动选择，但是可以通过`value`设置默认选中的数量，禁用状态下用来展示分数，允许出现半星

```vue
<up-rate :value="3.7" readonly></up-rate>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/rate.md`</small>

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
| `inactiveColor` | 未选中时的颜色 | `String` | `'#b2b2b2'` |
| `activeColor` | 选中的颜色 | `String` | `'#FA3534'` |
| `gutter` | 星星之间的间距，单位px | `String / Number` | `4` |
| `minCount` | 最少能选择的星星个数 | `String / Number` | `1` |
| `allowHalf` | 是否允许半星 | `Boolean` | `false` |
| `activeIcon` | 选中时的图标(星星) | `String` | `'star-fill'` |
| `inactiveIcon` | 未选中时的图标(星星) | `String` | `'star'` |
| `touchable` | 是否可以通过滑动手势选择评分 | `Boolean` | `true` |

### 事件

| 事件名 |
| --- |
| `// #endif 	'change` |
| `// #ifdef VUE3 	'update:modelValue` |
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
| uni-app · Vue 3 | `up-rate` | `uni_modules/uview-ultra/components/up-rate` |
| uni-app-x · UTS / UVUE | `up-rate` | `uni_modules/uview-ultra/components/up-rate` |

