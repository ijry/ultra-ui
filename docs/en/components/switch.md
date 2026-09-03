---
title: Switch
description: Toggles between two states, optionally awaiting async confirmation first.
generated: true
---

# Switch

Toggles between two states, optionally awaiting async confirmation first.

<PlatformBadges component="switch" show-missing />

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
import net.lingyun.ultraui.android.components.UPSwitch

UPSwitch(value = switchValue, onChange = {
    switchValue = it
    eventText = "开关：$it"
})
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SwitchDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/switch_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SwitchDemo.tsx`</small>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/switch/index.tsx`</small>

</template>

<template #uniapp>

#### 基础使用

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/switch.md`</small>

</template>

<template #uniappx>

#### 基础使用

```vue
<up-switch v-model="value" @change="change"></up-switch>
<!-- methods -->
change(e) {
	console.log('change', e);
},
```

#### 加载中

```vue
<up-switch v-model="value3" loading ></up-switch>
<up-switch v-model="value4" loading ></up-switch>
<!-- data -->
value3: false,
value4: true,
```

#### 禁用switch

```vue
<up-switch v-model="value" disabled ></up-switch>
```

#### 自定义尺寸

```vue
<up-switch v-model="value3" size="28" ></up-switch>
<up-switch v-model="value4" size="20" ></up-switch>
<!-- data -->
value3: false,
value4: true,
```

#### 自定义颜色

```vue
<up-switch v-model="value" activeColor="#f56c6c" loading ></up-switch>
<up-switch v-model="value1" activeColor="#5ac725" loading ></up-switch>
<!-- data -->
value: true,
value1: true,
```

#### 自定义样式

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/switch.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
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

### Events

| Event |
| --- |
| `change` |
| `input` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPSwitch` | `UltraUI/Sources/UltraUI/Components/UPSwitch.swift` |
| Android · Jetpack Compose | `UPSwitch` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPSwitch.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSwitch` | `ultra-ui/src/main/ets/components/UPSwitch.ets` |
| Flutter · Dart | `UPSwitch` | `packages/ultra_ui/lib/src/widgets/up_switch.dart` |
| React Native · TypeScript | `UPSwitch` | `src/components/switch` |
| Taro · React + TypeScript | `UPSwitch` | `src/ultra-ui/components/up-switch` |
| uni-app · Vue 3 | `up-switch` | `uni_modules/uview-ultra/components/up-switch` |
| uni-app-x · UTS / UVUE | `up-switch` | `uni_modules/uview-ultra/components/up-switch` |

