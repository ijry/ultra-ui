---
title: Radio
description: Single-select control with group validation, layout options and custom icons.
generated: true
---

# Radio

Single-select control with group validation, layout options and custom icons.

<PlatformBadges component="radio" show-missing />

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
import net.lingyun.ultraui.android.components.UPRadio
import net.lingyun.ultraui.android.components.UPRadioProps

UPRadio(props = UPRadioProps(name = "android", label = "Android"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRadio, UPRadioProps } from '@lingyun/ultra-ui-hos';

UPRadio({ props: new UPRadioProps({ name: 'A', label: '选项 A', checked: this.selected === 'A', onChange: (event: UPRadioChangeEvent): void => { this.change(event); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/RadioDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

(option) => UPRadio(
  name: option.value,
  label: option.label,
  disabled: option.disabled,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/radio_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPRadio } from 'ultra-ui-rn';

<UPRadio
  customStyle={s.stacked}
  key={name}
  label={name}
  name={name}
  onChange={radioChange}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/RadioDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPRadio } from '@ultra-ui'

<UPRadio key={item} name={item} label={item} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/radio/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-radio
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in radiolist1"
    :key="index"
    :label="item.name"
    :name="item.name"
    @change="radioChange"
>
</up-radio>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/radio/radio.nvue`</small>

</template>

<template #uniappx>

```vue
<up-radio
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in radiolist1"
    :key="index"
    :label="item['name']"
    :name="item['name']"
    @change="radioChange"
>
</up-radio>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/radio/radio.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-radio>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | radio的名称 | `String / Number / Boolean` | `''` |
| `shape` | 形状，square为方形，circle为圆型 | `String` | `''` |
| `disabled` | 是否禁用 | `String / Boolean` | `''` |
| `labelDisabled` | 是否禁止点击提示语选中单选框 | `String / Boolean` | `''` |
| `activeColor` | 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值 | `String` | `''` |
| `inactiveColor` | 未选中的颜色 | `String` | `''` |
| `iconSize` | 图标的大小，单位px | `String / Number` | `''` |
| `labelSize` | label的字体大小，px单位 | `String / Number` | `''` |
| `label` | label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式 | `String / Number` | `''` |
| `size` | 整体的大小 | `String / Number` | `''` |
| `color` | 图标颜色 | `String` | `—` |
| `labelColor` | label的颜色 | `String` | `''` |
| `iconColor` | 图标颜色 | `String` | `''` |

#### Events

| Event |
| --- |
| `change` |

#### Slots

| Slot |
| --- |
| `icon` |
| `label` |

### `<up-radio-group>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | 绑定的值 | `String / Number / Boolean` | `—` |
| `value` | 绑定的值 | `String / Number / Boolean` | `''` |
| `disabled` | 是否禁用全部radio | `Boolean` | `false` |
| `shape` | 形状，circle-圆形，square-方形 | `String` | `'circle'` |
| `activeColor` | 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值 | `String` | `'#2979ff'` |
| `inactiveColor` | 未选中的颜色 | `String` | `'#c8c9cc'` |
| `name` | 标识符 | `String` | `''` |
| `size` | 整个组件的尺寸，默认px | `String / Number` | `18` |
| `placement` | 布局方式，row-横向，column-纵向 | `String` | `'row'` |
| `label` | label的文本 | `String` | `''` |
| `labelColor` | label的颜色 （默认 '#303133' ） | `String` | `'#303133'` |
| `labelSize` | label的字体大小，px单位 | `String / Number` | `14` |
| `labelDisabled` | 是否禁止点击文本操作checkbox(默认 false ) | `Boolean` | `false` |
| `iconColor` | 图标颜色 | `String` | `'#ffffff'` |
| `iconSize` | 图标的大小，单位px | `String / Number` | `12` |
| `borderBottom` | 竖向配列时，是否显示下划线 | `Boolean` | `false` |
| `iconPlacement` | 图标与文字的对齐方式 | `String` | `'left'` |
| `gap` | item 之间的间距 | `String / Number` | `"10px"` |

#### Events

| Event |
| --- |
| `change` |
| `input` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPRadio` | `UltraUI/Sources/UltraUI/Components/UPRadio.swift` |
| Android · Jetpack Compose | `UPRadio` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPRadio.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPRadio` | `ultra-ui/src/main/ets/components/UPRadio.ets` |
| Flutter · Dart | `UPRadio` | `packages/ultra_ui/lib/src/widgets/up_radio.dart` |
| React Native · TypeScript | `UPRadio` | `src/components/radio` |
| Taro · React + TypeScript | `UPRadio` | `src/ultra-ui/components/up-radio` |
| uni-app · Vue 3 | `up-radio` | `src/uni_modules/uview-plus/components/u-radio` |
| uni-app-x · UTS / UVUE | `up-radio` | `uni_modules/uview-ultra/components/up-radio` |

