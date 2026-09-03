---
title: Switch
description: Toggles between two states, optionally awaiting async confirmation first.
generated: true
---

# Switch

Toggles between two states, optionally awaiting async confirmation first.

<PlatformBadges component="switch" show-missing />

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

### 开关

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SwitchDemo.ets`</small>

</template>

<template #flutter>

### 异步控制

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

```tsx
import { UPSwitch } from 'ultra-ui-rn';

<UPSwitch disabled value={value5} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SwitchDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

value + onChange 受控绑定

```tsx
import { UPSwitch } from '@ultra-ui'

<UPSwitch value={basic} onChange={setBasic} />
```

### 尺寸

size 单位 px，默认 25

```tsx
<UPSwitch size={18} value={small} onChange={setSmall} />
```

### 加载中

loading 时圆点显示 loading 图标且不可点

```tsx
<UPSwitch loading value={loading} onChange={setLoading} />
```

### 自定义颜色

activeColor / inactiveColor

```tsx
<UPSwitch
  activeColor='#19be6b'
  value={activeColor}
  onChange={setActiveColor}
/>
```

### 圆点颜色

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

### 圆点间距

space 拉开圆点与外框的距离

```tsx
<UPSwitch space={3} value={spaced} onChange={setSpaced} />
```

### 异步变更

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

### 基础功能

```vue
<up-switch
    v-model="value1"
    @change="change"
></up-switch>
```

### 加载中

```vue
<up-switch
    v-model="value3"
    loading
></up-switch>
```

### 禁用状态

```vue
<up-switch
    v-model="value5"
    disabled
></up-switch>
```

### 自定义尺寸

```vue
<up-switch
    v-model="value7"
    size="28"
></up-switch>
```

### 自定义颜色

```vue
<up-switch
    v-model="value9"
    activeColor="#f56c6c"
    loading
></up-switch>
```

### 自定义样式

```vue
<up-switch
    :space="2"
    v-model="value11"
    activeColor="#f56c6c"
    inactiveColor="rgb(230, 230, 230)"
></up-switch>
```

### 异步控制

```vue
<up-switch
    v-model="value13"
    asyncChange
    @change="asyncChange"
></up-switch>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/switch/switch.uvue`</small>

</template>

<template #uniappx>

### 基础功能

```vue
<up-switch
    v-model="value1"
    @change="change"
></up-switch>
```

### 加载中

```vue
<up-switch
    v-model="value3"
    loading
></up-switch>
```

### 禁用状态

```vue
<up-switch
    v-model="value5"
    disabled
></up-switch>
```

### 自定义尺寸

```vue
<up-switch
    v-model="value7"
    size="28"
></up-switch>
```

### 自定义颜色

```vue
<up-switch
    v-model="value9"
    activeColor="#f56c6c"
    loading
></up-switch>
```

### 自定义样式

```vue
<up-switch
    :space="2"
    v-model="value11"
    activeColor="#f56c6c"
    inactiveColor="rgb(230, 230, 230)"
></up-switch>
```

### 异步控制

```vue
<up-switch
    v-model="value13"
    asyncChange
    @change="asyncChange"
></up-switch>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/switch/switch.uvue`</small>

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

