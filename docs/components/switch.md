---
title: Switch 开关
description: 两种状态之间的切换控件，支持异步确认后再改变状态。
generated: true
---

# Switch 开关

两种状态之间的切换控件，支持异步确认后再改变状态。

<PlatformBadges component="switch" show-missing />

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
import net.lingyun.ultraui.android.components.UPSwitch

UPSwitch(value = switchValue, onChange = {
    switchValue = it
    eventText = "开关：$it"
})
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSwitch, UPSwitchProps } from '@lingyun/ultra-ui-hos';

UPSwitch({ props: new UPSwitchProps({ modelValue: this.switchEnabled, onChange: (event: UPSwitchChangeEvent): void => { this.change(event); } }) })
```

```typescript
UPSwitch({ props: new UPSwitchProps({ value: true, activeColor: 'success', size: 30 }) })
```

```typescript
UPSwitch({ props: new UPSwitchProps({ value: false, disabled: true }) })
```

```typescript
UPSwitch({ props: new UPSwitchProps({ value: true, loading: true }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/SwitchDemo.ets`</small>

</template>

<template #flutter>

#### 异步控制

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSwitch(
  value: value,
  loading: loading,
  disabled: disabled,
  size: size,
  activeColor: activeColor,
  inactiveColor: inactiveColor,
  space: space,
  asyncChange: asyncChange,
  onChange: onChange,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/switch_page.dart`</small>

</template>

<template #reactnative>

#### 禁用状态

```tsx
import { UPSwitch } from 'ultra-ui-rn';

<UPSwitch disabled value={value5} />
```

#### 异步控制

```tsx
<UPSwitch asyncChange onChange={asyncChange} value={value13} />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/SwitchDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

value + onChange 受控绑定

```tsx
import { UPSwitch } from '@ultra-ui'

<UPSwitch value={basic} onChange={setBasic} />
```

#### 尺寸

size 单位 px，默认 25

```tsx
<UPSwitch size={18} value={small} onChange={setSmall} />
```

#### 加载中

loading 时圆点显示 loading 图标且不可点

```tsx
<UPSwitch loading value={loading} onChange={setLoading} />
```

#### 自定义颜色

activeColor / inactiveColor

```tsx
<UPSwitch
  activeColor='#19be6b'
  value={activeColor}
  onChange={setActiveColor}
/>
```

#### 圆点颜色

dotActiveColor / dotInactiveColor 单独设置圆点

```tsx
<UPSwitch
  activeColor='#7232dd'
  inactiveColor='#e4e7ed'
  dotActiveColor='#ffe6b3'
  dotInactiveColor='#c0c4cc'
  value={dotColor}
  onChange={setDotColor}
/>
```

#### 圆点间距

space 拉开圆点与外框的距离

```tsx
<UPSwitch space={3} value={spaced} onChange={setSpaced} />
```

#### 自定义绑定值

activeValue='开' / inactiveValue='关'，onChange 回传的是它们

```tsx
<UPSwitch
  activeValue='开'
  inactiveValue='关'
  value={custom}
  onChange={setCustom}
/>
```

#### 异步变更

asyncChange 时组件不自动切换，等外部请求成功后再更新 value

```tsx
<UPSwitch
  asyncChange
  loading={asyncLoading}
  value={asyncValue}
  onChange={handleAsyncChange}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/switch/index.tsx`</small>

</template>

<template #uniapp>

#### 基础使用

通过`v-model`绑定一个`布尔值`变量，这个变量是双向绑定的，当用户开或关选择器的时候，在父组件的该值也会相应的变为`true`或者`false`，也就是说，
您不用监听`change`事件，也能知道选择器当前处于**开**或者**关**的状态。

我们为其提供了`加载中 禁用 自定义尺寸 自定义颜色 自定义样式 异步控制`等六种能力，并在以下案例中为您展示

```vue
<template>
  <up-switch v-model="value" @change="change"></up-switch>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)

const change = (e) => {
  console.log('change', e);
}
</script>
```

#### 加载中

设置`loading`属性，默认为`true`，可以让`switch`处于加载中的状态，这时`switch`是不可操作的，您可以通过`:loading='loading'`以动态设置加载状态

```vue
<template>
  <up-switch v-model="value3" loading></up-switch>
  <up-switch v-model="value4" loading></up-switch>
</template>

<script setup>
import { ref } from 'vue'

const value3 = ref(false)
const value4 = ref(true)
</script>
```

#### 禁用switch

设置`disabled`属性,默认为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态：

- 一是关闭情况下的禁用，这时只显示一个白色的区域。
- 二是打开后再禁用，这时会在原有的颜色上加一个`opacity`透明度，但此时依然是不可操作的。

```vue
<template>
  <up-switch v-model="value" disabled></up-switch>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>
```

#### 自定义尺寸

设置`size`属性，可以让您自定义`switch`的尺寸，单位为`px`

```vue
<template>
  <up-switch v-model="value3" size="28"></up-switch>
  <up-switch v-model="value4" size="20"></up-switch>
</template>

<script setup>
import { ref } from 'vue'

const value3 = ref(false)
const value4 = ref(true)
</script>
```

#### 自定义颜色

设置`activeColor`属性，可以让您自定义`switch`的颜色，支持多种设置方式，如：`activeColor="#f56c6c" activeColor="red" activeColor="rgb(0,0,0)" `

```vue
<template>
  <up-switch v-model="value" activeColor="#f56c6c" loading></up-switch>
  <up-switch v-model="value1" activeColor="#5ac725" loading></up-switch>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(true)
const value1 = ref(true)
</script>
```

#### 自定义样式

同时设置`activeColor`和`inactiveColor`属性，可以让您自定义`switch`的样式，同样支持多种设置方式

```vue
<template>
  <up-switch space="2" v-model="value11" activeColor="#f9ae3d" inactiveColor="rgb(230, 230, 230)"></up-switch>
  <up-switch space="2" v-model="value12" activeColor="#f9ae3d" inactiveColor="rgb(230, 230, 230)"></up-switch>
</template>

<script setup>
import { ref } from 'vue'

const value11 = ref(false)
const value12 = ref(true)
</script>
```

#### 异步控制

异步控制场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。  
同时您也可以组合使用，例如根据接口结果添加`disabled`，`loading`属性等

:::warning 注意
请添加`asyncChange`属性来支持异步控制操作，否则您将先操作`v-model`绑定的值，并失去控制效果
:::

```vue
<template>
  <up-switch v-model="value13" asyncChange @change="asyncChange"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const value13 = ref(true);

const asyncChange = (e) => {
  uni.showModal({
    content: e ? '确定要打开吗' : '确定要关闭吗',
    success: (res) => {
      if (res.confirm) {
        value13.value = e;
      }
    },
  });
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/switch.md`</small>

</template>

<template #uniappx>

#### 基础使用

通过`v-model`绑定一个`布尔值`变量，这个变量是双向绑定的，当用户开或关选择器的时候，在父组件的该值也会相应的变为`true`或者`false`，也就是说，
您不用监听`change`事件，也能知道选择器当前处于**开**或者**关**的状态。

我们为其提供了`加载中 禁用 自定义尺寸 自定义颜色 自定义样式 异步控制`等六种能力，并在以下案例中为您展示

```vue
<up-switch v-model="value" @change="change"></up-switch>
<!-- methods -->
change(e) {
	console.log('change', e);
},
```

#### 加载中

设置`loading`属性，默认为`true`，可以让`switch`处于加载中的状态，这时`switch`是不可操作的，您可以通过`:loading='loading'`以动态设置加载状态

```vue
<up-switch v-model="value3" loading ></up-switch>
<up-switch v-model="value4" loading ></up-switch>
<!-- data -->
value3: false,
value4: true,
```

#### 禁用switch

设置`disabled`属性,默认为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态：

- 一是关闭情况下的禁用，这时只显示一个白色的区域。
- 二是打开后再禁用，这时会在原有的颜色上加一个`opacity`透明度，但此时依然是不可操作的。

```vue
<up-switch v-model="value" disabled ></up-switch>
```

#### 自定义尺寸

设置`size`属性，可以让您自定义`switch`的尺寸，单位为`px`

```vue
<up-switch v-model="value3" size="28" ></up-switch>
<up-switch v-model="value4" size="20" ></up-switch>
<!-- data -->
value3: false,
value4: true,
```

#### 自定义颜色

设置`activeColor`属性，可以让您自定义`switch`的颜色，支持多种设置方式，如：`activeColor="#f56c6c" activeColor="red" activeColor="rgb(0,0,0)" `

```vue
<up-switch v-model="value" activeColor="#f56c6c" loading ></up-switch>
<up-switch v-model="value1" activeColor="#5ac725" loading ></up-switch>
<!-- data -->
value: true,
value1: true,
```

#### 自定义样式

同时设置`activeColor`和`inactiveColor`属性，可以让您自定义`switch`的样式，同样支持多种设置方式

```vue
<up-switch
	space="2" v-model="value11" activeColor="#f9ae3d" 
	inactiveColor="rgb(230, 230, 230)">
</up-switch>
<up-switch
	space="2" v-model="value12" activeColor="#f9ae3d"
	inactiveColor="rgb(230, 230, 230)">
</up-switch>
<!-- data -->
value11: false,
value12: true,
```

#### 异步控制

异步控制场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。  
同时您也可以组合使用，例如根据接口结果添加`disabled`，`loading`属性等

:::warning 注意
请添加`asyncChange`属性来支持异步控制操作，否则您将先操作`v-model`绑定的值，并失去控制效果
:::

```vue
<template>
	<up-switch v-model="value13" asyncChange @change="asyncChange" ></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const value13 = ref(true);

const asyncChange = (e) => {
  uni.showModal({
    content: e ? '确定要打开吗' : '确定要关闭吗',
    success: (res) => {
      if (res.confirm) {
        value13.value = e;
      }
    },
  });
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/switch.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 是否为加载中状态 | `Boolean` | `false` |
| `disabled` | 是否为禁用装填 | `Boolean` | `false` |
| `size` | 开关尺寸，单位px | `String / Number` | `25` |
| `activeColor` | 打开时的背景颜色 | `String` | `'var(--up-switch-active-color, var(--up-prima…` |
| `inactiveColor` | 关闭时的背景颜色 | `String` | `'var(--up-switch-inactive-color, #ffffff)'` |
| `modelValue` | 通过v-model双向绑定的值 | `Boolean / String / Number` | `—` |
| `value` | — | `Boolean / String / Number` | `false` |
| `activeValue` | switch打开时的值 | `String / Number / Boolean` | `true` |
| `inactiveValue` | switch关闭时的值 | `String / Number / Boolean` | `false` |
| `asyncChange` | 是否开启异步变更，开启后需要手动控制输入值 | `Boolean` | `false` |
| `space` | 圆点与外边框的距离 | `String / Number` | `0` |

### 事件

| 事件名 |
| --- |
| `change` |
| `input` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPSwitch` | `UltraUI/Sources/UltraUI/Components/UPSwitch.swift` |
| Android · Jetpack Compose | `UPSwitch` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPSwitch.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSwitch` | `ultra-ui/src/main/ets/components/UPSwitch.ets` |
| Flutter · Dart | `UPSwitch` | `packages/ultra_ui/lib/src/widgets/up_switch.dart` |
| React Native · TypeScript | `UPSwitch` | `src/components/switch` |
| Taro · React + TypeScript | `UPSwitch` | `src/ultra-ui/components/up-switch` |
| uni-app · Vue 3 | `up-switch` | `uni_modules/uview-ultra/components/up-switch` |
| uni-app-x · UTS / UVUE | `up-switch` | `uni_modules/uview-ultra/components/up-switch` |

