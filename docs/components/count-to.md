---
title: Count to 数字滚动
description: 数字从起始值滚动到目标值的动画。
generated: true
---

# Count to 数字滚动

数字从起始值滚动到目标值的动画。

<PlatformBadges component="count-to" show-missing />

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
import net.lingyun.ultraui.android.components.UPCountTo
import net.lingyun.ultraui.android.components.UPCountToProps

DemoSection("数字滚动") { UPCountTo(UPCountToProps(startVal = 0, endVal = 128, autoplay = false))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCountTo(endVal: 3000, onEnd: _end)
```

#### 倒计数

```dart
UPCountTo(startVal: 300)
```

#### 显示小数位

```dart
UPCountTo(
  startVal: 100.00,
  endVal: 10.55,
  decimals: 2,
)
```

#### 千分位分隔符

```dart
UPCountTo(
  startVal: 2000,
  endVal: 1542,
  separator: ',',
  decimals: 2,
)
```

#### 自定义控制

```dart
UPCountTo(
  key: _manualKey,
  endVal: 3000,
  autoplay: false,
)
```

#### 自定义

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

#### 基础功能

```tsx
import { UPCountTo } from 'ultra-ui-rn';

<UPCountTo endVal={3000} />
```

#### 倒计数

```tsx
<UPCountTo startVal={300} />
```

#### 显示小数位

```tsx
<UPCountTo decimals={2} endVal={10.55} startVal={100.0} />
```

#### 千分位分隔符

```tsx
<UPCountTo decimals={2} endVal={1542} separator="," startVal={2000} />
```

#### 自定义控制

```tsx
<UPCountTo autoplay={false} endVal={3000} ref={countTo} />
```

#### 自定义

```tsx
<UPCountTo bold color="#909399" endVal={3000} fontSize={40} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CountToDemo.tsx`</small>

</template>

<template #taro>

#### 自动滚动

autoplay 加载即滚动到目标值

```tsx
import { UPCountTo } from '@ultra-ui'

<UPCountTo startVal={0} endVal={2000} duration={2000} autoplay separator=',' />
```

#### 小数与千位分隔

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

#### 受控与命令式

value 绑定 + ref 控制 start / reset

```tsx
<UPCountTo ref={ref} startVal={0} endVal={val} duration={1500} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/count-to/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过`startVal`设置开始值，`endVal`设置结束值

```vue
<up-count-to :startVal="30" :endVal="500"></up-count-to>
```

#### 设置滚动相关参数

- 通过`duration`设置从开始值到结束值整个滚动过程所需的时间，单位`ms`
- 通过`useEasing`设置滚动快结尾的时候，是否放慢滚动的速度，给用户更好的视觉效果

```vue
<up-count-to :start-val="30" :end-val="500" :duration="2000" :useEasing="false"></up-count-to>
```

#### 是否显示小数位

通过`decimals`设置显示的小数位，如果设置了，在滚动过程中，小数位会一起变化。如果`startVal`和`endVal`是带小数的，应该设置`decimals`为
`startVal`和`endVal`一样的小数位数值，如`endVal`为1200.55，那么`decimals`应该设置为2。

```vue
<up-count-to :startVal="30" :endVal="500.55" :decimals="2"></up-count-to>
```

#### 千分位分隔符

通过`separator`配置千分位分隔符，默认为空字符串，可以设置英文逗号","，此参数表现为`endVal`值超过1000时，比如为"1257"，那么滚动后会变成"1,245"，在金额数值时，
该参数可能会用上。

```vue
<up-count-to :endVal="1542" separator=","></up-count-to>
```

#### 滚动执行的时机

可以通过`autoplay`设置是否需要初始化时就开始滚动，默认为`true`，如果设置为`false`，可以通过组件的`ref`去控制组件内部的`start()`和`paused()`
方法来开始或暂停。

```vue
<template>
	<up-count-to ref="uCountToRef" :endVal="endVal" :autoplay="autoplay"></up-count-to>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const endVal = ref(5000.55);  
const autoplay = ref(false);  
  
// 创建对子组件的引用  
const uCountToRef = ref(null);  
  
// 定义方法  
const start = () => {  
  if (uCountToRef.value) {  
    uCountToRef.value.start();  
  }  
};  
  
const paused = () => {  
  if (uCountToRef.value) {  
    uCountToRef.value.paused();  
  }  
};  
  
const reStart = () => {  
  if (uCountToRef.value) {  
    uCountToRef.value.reStart();  
  }  
};  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/countTo.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过`startVal`设置开始值，`endVal`设置结束值

```vue
<up-count-to :startVal="30" :endVal="500"></up-count-to>
```

#### 设置滚动相关参数

- 通过`duration`设置从开始值到结束值整个滚动过程所需的时间，单位`ms`
- 通过`useEasing`设置滚动快结尾的时候，是否放慢滚动的速度，给用户更好的视觉效果

```vue
<up-count-to :start-val="30" :end-val="500" :duration="2000" :useEasing="false"></up-count-to>
```

#### 是否显示小数位

通过`decimals`设置显示的小数位，如果设置了，在滚动过程中，小数位会一起变化。如果`startVal`和`endVal`是带小数的，应该设置`decimals`为
`startVal`和`endVal`一样的小数位数值，如`endVal`为1200.55，那么`decimals`应该设置为2。

```vue
<up-count-to :startVal="30" :endVal="500.55" :decimals="2"></up-count-to>
```

#### 千分位分隔符

通过`separator`配置千分位分隔符，默认为空字符串，可以设置英文逗号","，此参数表现为`endVal`值超过1000时，比如为"1257"，那么滚动后会变成"1,245"，在金额数值时，
该参数可能会用上。

```vue
<up-count-to :endVal="1542" separator=","></up-count-to>
```

#### 滚动执行的时机

可以通过`autoplay`设置是否需要初始化时就开始滚动，默认为`true`，如果设置为`false`，可以通过组件的`ref`去控制组件内部的`start()`和`paused()`
方法来开始或暂停。

```vue
<template>
	<up-count-to ref="uCountToRef" :endVal="endVal" :autoplay="autoplay"></up-count-to>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式数据  
const endVal = ref(5000.55);  
const autoplay = ref(false);  
  
// 创建对子组件的引用  
const uCountToRef = ref(null);  
  
// 定义方法  
const start = () => {  
  if (uCountToRef.value) {  
    uCountToRef.value.start();  
  }  
};  
  
const paused = () => {  
  if (uCountToRef.value) {  
    uCountToRef.value.paused();  
  }  
};  
  
const reStart = () => {  
  if (uCountToRef.value) {  
    uCountToRef.value.reStart();  
  }  
};  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/countTo.md`</small>

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

