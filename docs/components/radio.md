---
title: Radio 单选框
description: 单选控件，支持组合校验、横竖排列与自定义图标。
generated: true
---

# Radio 单选框

单选控件，支持组合校验、横竖排列与自定义图标。

<PlatformBadges component="radio" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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
import net.lingyun.ultraui.android.components.UPRadio
import net.lingyun.ultraui.android.components.UPRadioProps

UPRadio(props = UPRadioProps(name = "android", label = "Android"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRadio, UPRadioProps } from '@lingyun/ultra-ui-hos';

UPRadio({ props: new UPRadioProps({ name: 'A', label: '选项 A', checked: this.selected === 'A', onChange: (event: UPRadioChangeEvent): void => { this.change(event); } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/RadioDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/radio_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/RadioDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPRadio } from '@ultra-ui'

<UPRadio key={item} name={item} label={item} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/radio/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/radio/radio.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/radio/radio.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-radio>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
| --- |
| `change` |

#### 插槽

| 插槽名 |
| --- |
| `icon` |
| `label` |

### `<up-radio-group>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
| --- |
| `change` |
| `input` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPRadio` | `UltraUI/Sources/UltraUI/Components/UPRadio.swift` |
| Android · Jetpack Compose | `UPRadio` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPRadio.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPRadio` | `ultra-ui/src/main/ets/components/UPRadio.ets` |
| Flutter · Dart | `UPRadio` | `packages/ultra_ui/lib/src/widgets/up_radio.dart` |
| React Native · TypeScript | `UPRadio` | `src/components/radio` |
| Taro · React + TypeScript | `UPRadio` | `src/ultra-ui/components/up-radio` |
| uni-app · Vue 3 | `up-radio` | `src/uni_modules/uview-plus/components/u-radio` |
| uni-app-x · UTS / UVUE | `up-radio` | `uni_modules/uview-ultra/components/up-radio` |

