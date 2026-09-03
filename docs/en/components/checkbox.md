---
title: Checkbox
description: Multi-select control with group validation, layout options and custom icons.
generated: true
---

# Checkbox

Multi-select control with group validation, layout options and custom icons.

<PlatformBadges component="checkbox" show-missing />

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
import net.lingyun.ultraui.android.components.UPCheckbox

UPCheckbox(
    checked = singleChecked,
    name = "single",
    label = "单个复选框",
    onUpdateChecked = {
        singleChecked = it
        eventText = "复选框：$it"
    },
)
```

```kotlin
UPCheckbox(props = UPCheckboxProps(name = "apple", label = "苹果"))
```

```kotlin
UPCheckbox(props = UPCheckboxProps(name = "banana", label = "香蕉"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCheckbox, UPCheckboxProps } from '@lingyun/ultra-ui-hos';

UPCheckbox({ props: new UPCheckboxProps({ name: 'alone', label: '同意服务条款', checked: this.checked, onChange: (event: UPCheckboxChangeEvent): void => { this.change(event); } }) })
```

```typescript
UPCheckbox({ props: new UPCheckboxProps({ label: '禁用项', checked: true, disabled: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/CheckboxDemo.ets`</small>

</template>

<template #flutter>

#### 单独使用checkbox

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCheckbox(
  label: '同意用户协议与隐私条款',
  name: 'agree',
  usedAlone: true,
  checked: aloneChecked,
  onChange: (value) => setState(() => aloneChecked = value),
)
```

#### 横向两端排列形式

```dart
(option) => UPCheckbox(
  name: option.value,
  label: option.label,
  disabled: option.disabled,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/checkbox_page.dart`</small>

</template>

<template #reactnative>

#### 基本案例

```tsx
import { UPCheckbox } from 'ultra-ui-rn';

<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 单独使用checkbox

```tsx
<UPCheckbox
  checked={aloneChecked}
  customStyle={s.stacked}
  label="同意用户协议与隐私条款"
  name="agree"
  onChange={setAloneChecked}
  usedAlone
/>
```

#### 自定义形状

```tsx
<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 是否禁用

```tsx
<UPCheckbox
  customStyle={s.stacked}
  disabled={index === 0}
  key={name}
  label={name}
  name={name}
/>
```

#### 是否禁止点击提示语选中复选框

```tsx
<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 自定义颜色

```tsx
<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 横向排列形式

```tsx
<UPCheckbox customStyle={s.inline} key={name} label={name} name={name} />
```

#### 横向两端排列形式

```tsx
<UPCheckbox customStyle={s.stackedWide} key={name} label={name} name={name} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/CheckboxDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

Group 持有选中数组，onChange 回传最新数组

```tsx
import { UPCheckbox } from '@ultra-ui'

<UPCheckbox key={item} name={item} label={item} />
```

#### 形状

shape：square（默认） / circle

```tsx
<UPCheckbox name='square' label='方形' />
```

#### 禁用

Group 整体禁用 / 单项禁用

```tsx
<UPCheckbox name='已选中' label='已选中' />
```

#### 自定义颜色

activeColor / inactiveColor / iconColor

```tsx
<UPCheckbox name='红色' label='Group 红色' />
```

#### 尺寸与文字

size / iconSize / labelSize / labelColor

```tsx
<UPCheckbox name='小号' label='小号' size={16} iconSize={10} labelSize={12} />
```

#### 竖向排列

placement=column，配合 borderBottom 显示分割线

```tsx
<UPCheckbox key={item} name={item} label={item} />
```

#### 图标靠右

iconPlacement=right，整行两端对齐，点击整行即可切换

```tsx
<UPCheckbox key={item} name={item} label={item} />
```

#### 禁止点击文字

labelDisabled 时只有图标可点

```tsx
<UPCheckbox name='只能点图标' label='只能点图标' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/checkbox/index.tsx`</small>

</template>

<template #uniapp>

#### 基本案例

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList1"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 自定义形状

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList2"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 是否禁用

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList3"
    :key="index"
    :label="item['name']"
    :name="item['name']"
    :disabled="index == 0"
>
</up-checkbox>
```

#### 是否禁止点击提示语选中复选框

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList4"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 自定义颜色

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList5"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 横向排列形式

```vue
<up-checkbox
    :customStyle="{marginRight: '16px'}"
    v-for="(item, index) in checkboxList6"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 横向两端排列形式

```vue
<up-checkbox
    :customStyle="{marginBottom: '16px'}"
    v-for="(item, index) in checkboxList7"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/checkbox/checkbox.uvue`</small>

</template>

<template #uniappx>

#### 基本案例

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList1"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 自定义形状

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList2"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 是否禁用

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList3"
    :key="index"
    :label="item['name']"
    :name="item['name']"
    :disabled="index == 0"
>
</up-checkbox>
```

#### 是否禁止点击提示语选中复选框

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList4"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 自定义颜色

```vue
<up-checkbox
    :customStyle="{marginBottom: '8px'}"
    v-for="(item, index) in checkboxList5"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 横向排列形式

```vue
<up-checkbox
    :customStyle="{marginRight: '16px'}"
    v-for="(item, index) in checkboxList6"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

#### 横向两端排列形式

```vue
<up-checkbox
    :customStyle="{marginBottom: '16px'}"
    v-for="(item, index) in checkboxList7"
    :key="index"
    :label="item['name']"
    :name="item['name']"
>
</up-checkbox>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/checkbox/checkbox.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-checkbox>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | checkbox的名称 | `String / Number / Boolean` | `''` |
| `shape` | 形状，square为方形，circle为圆型 | `String` | `''` |
| `size` | 整体的大小 | `String / Number` | `''` |
| `checked` | 是否默认选中 | `Boolean` | `false` |
| `disabled` | 是否禁用 | `String / Boolean` | `''` |
| `activeColor` | 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值 | `String` | `''` |
| `inactiveColor` | 未选中的颜色 | `String` | `''` |
| `iconSize` | 图标的大小，单位px | `String / Number` | `''` |
| `iconColor` | 图标颜色 | `String` | `''` |
| `label` | label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式 | `String / Number` | `''` |
| `labelSize` | label的字体大小，px单位 | `String / Number` | `''` |
| `labelColor` | label的颜色 | `String` | `''` |
| `labelDisabled` | 是否禁止点击提示语选中复选框 | `String / Boolean` | `''` |
| `usedAlone` | 是否独立使用 | `Boolean` | `—` |

#### Events

| Event |
| --- |
| `change` |
| `update:checked` |

#### Slots

| Slot |
| --- |
| `icon` |
| `label` |

### `<up-checkbox-group>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | 标识符 | `String` | `''` |
| `modelValue` | 绑定的值 | `Array` | `—` |
| `value` | 绑定的值 | `Array` | `[]` |
| `shape` | 形状，circle-圆形，square-方形 | `String` | `'square'` |
| `disabled` | 是否禁用全部checkbox | `Boolean` | `false` |
| `activeColor` | 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值 | `String` | `'#2979ff'` |
| `inactiveColor` | 未选中的颜色 | `String` | `'#c8c9cc'` |
| `size` | 整个组件的尺寸，默认px | `String / Number` | `18` |
| `placement` | 布局方式，row-横向，column-纵向 | `String` | `'row'` |
| `labelSize` | label的字体大小，px单位 | `String / Number` | `14` |
| `labelColor` | label的字体颜色 | `String` | `'#303133'` |
| `labelDisabled` | 是否禁止点击文本操作 | `Boolean` | `false` |
| `iconColor` | 图标颜色 | `String` | `'#ffffff'` |
| `iconSize` | 图标的大小，单位px | `String / Number` | `12` |
| `iconPlacement` | 勾选图标的对齐方式，left-左边，right-右边 | `String` | `'left'` |
| `borderBottom` | 竖向配列时，是否显示下划线 | `Boolean` | `false` |

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
| iOS · SwiftUI | `UPCheckbox` | `UltraUI/Sources/UltraUI/Components/UPCheckbox.swift` |
| Android · Jetpack Compose | `UPCheckbox` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCheckbox.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCheckbox` | `ultra-ui/src/main/ets/components/UPCheckbox.ets` |
| Flutter · Dart | `UPCheckbox` | `packages/ultra_ui/lib/src/widgets/up_checkbox.dart` |
| React Native · TypeScript | `UPCheckbox` | `src/components/checkbox` |
| Taro · React + TypeScript | `UPCheckbox` | `src/ultra-ui/components/up-checkbox` |
| uni-app · Vue 3 | `up-checkbox` | `uni_modules/uview-ultra/components/up-checkbox` |
| uni-app-x · UTS / UVUE | `up-checkbox` | `uni_modules/uview-ultra/components/up-checkbox` |

