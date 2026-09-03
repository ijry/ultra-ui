---
title: Radio
description: Single-select control with group validation, layout options and custom icons.
generated: true
---

# Radio

Single-select control with group validation, layout options and custom icons.

<PlatformBadges component="radio" show-missing />

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
import net.lingyun.ultraui.android.components.UPRadio
import net.lingyun.ultraui.android.components.UPRadioProps

UPRadio(props = UPRadioProps(name = "android", label = "Android"))
```

```kotlin
UPRadio(props = UPRadioProps(name = "ios", label = "iOS"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRadio, UPRadioProps } from '@lingyun/ultra-ui-hos';

UPRadio({ props: new UPRadioProps({ name: 'A', label: '选项 A', checked: this.selected === 'A', onChange: (event: UPRadioChangeEvent): void => { this.change(event); } }) })
```

```typescript
UPRadio({ props: new UPRadioProps({ name: 'B', label: '选项 B', checked: this.selected === 'B', onChange: (event: UPRadioChangeEvent): void => { this.change(event); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/RadioDemo.ets`</small>

</template>

<template #flutter>

#### 横向两端排列形式

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

#### 基本案例

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

#### 自定义形状

```tsx
<UPRadio customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 是否禁用

```tsx
<UPRadio
  customStyle={s.stacked}
  disabled={index === 0}
  key={name}
  label={name}
  name={name}
/>
```

#### 纵向排列

```tsx
<UPRadio customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 自定义颜色？

```tsx
<UPRadio customStyle={s.stacked} key={name} label={name} name={name} />
```

#### 横向排列形式？

```tsx
<UPRadio customStyle={s.inline} key={name} label={name} name={name} />
```

#### 横向两端排列形式？

```tsx
<UPRadio customStyle={s.stackedWide} key={name} label={name} name={name} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/RadioDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

Group 持有单个值，onChange 回传选中的 name

```tsx
import { UPRadio } from '@ultra-ui'

<UPRadio key={item} name={item} label={item} />
```

#### 形状

shape：circle（默认） / square

```tsx
<UPRadio name='circle' label='圆形' />
```

#### 禁用

Group 整体禁用 / 单项禁用

```tsx
<UPRadio name='已选中' label='已选中' />
```

#### 自定义颜色

activeColor / inactiveColor / iconColor

```tsx
<UPRadio name='红色' label='Group 红色' />
```

#### 尺寸与文字

size / iconSize / labelSize / labelColor

```tsx
<UPRadio name='小号' label='小号' size={16} iconSize={10} labelSize={12} />
```

#### 竖向排列

placement=column，配合 borderBottom 显示分割线

```tsx
<UPRadio key={item} name={item} label={item} />
```

#### 图标靠右

iconPlacement=right，整行两端对齐，点击整行即可选中

```tsx
<UPRadio key={item} name={item} label={item} />
```

#### 禁止点击文字

labelDisabled 时只有图标可点

```tsx
<UPRadio name='只能点图标' label='只能点图标' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/radio/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
  <up-radio-group
    v-model="radiovalue1"
    placement="column"
    @change="groupChange"
  >
    <up-radio
      :customStyle="{marginBottom: '8px'}"
      v-for="(item, index) in radiolist1"
      :key="index"
      :label="item.name"
      :name="item.name"
      @change="radioChange"
    >
    </up-radio>
  </up-radio-group>
</template>

<script setup>
import { ref,reactive } from 'vue';

// 基本案列数据
const radiolist1 = reactive([
  {
    name: '苹果',
    disabled: false,
  },
  {
    name: '香蕉',
    disabled: false,
  },
  {
    name: '橙子',
    disabled: false,
  },
  {
    name: '榴莲',
    disabled: false,
  },
]);

// up-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
const radiovalue1 = ref('苹果');

const groupChange = (n) => {
  console.log('groupChange', n);
};

const radioChange = (n) => {
  console.log('radioChange', n);
};
</script>
```

#### 自定义形状

```vue
<up-radio-group v-model="value">
	<up-radio shape="circle" label="月明人倚楼"></up-radio>
</up-radio-group>
```

#### 禁用radio

```vue
<up-radio-group v-model="value">
	<up-radio :disabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 是否禁止点击提示语选中复选框

```vue
<up-radio-group v-model="value">
	<up-radio :labelDisabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 自定义颜色

```vue
<up-radio-group v-model="value">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向排列形式

```vue
<up-radio-group 
    v-model="value"
    placement="row">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向两端排列形式

```vue
<up-radio-group 
    v-model="value"
    iconPlacement="right">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/radio.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
  <up-radio-group
    v-model="radiovalue1"
    placement="column"
    @change="groupChange"
  >
    <up-radio
      :customStyle="{marginBottom: '8px'}"
      v-for="(item, index) in radiolist1"
      :key="index"
      :label="item.name"
      :name="item.name"
      @change="radioChange"
    >
    </up-radio>
  </up-radio-group>
</template>

<script setup>
import { ref,reactive } from 'vue';

// 基本案列数据
const radiolist1 = reactive([
  {
    name: '苹果',
    disabled: false,
  },
  {
    name: '香蕉',
    disabled: false,
  },
  {
    name: '橙子',
    disabled: false,
  },
  {
    name: '榴莲',
    disabled: false,
  },
]);

// up-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
const radiovalue1 = ref('苹果');

const groupChange = (n) => {
  console.log('groupChange', n);
};

const radioChange = (n) => {
  console.log('radioChange', n);
};
</script>
```

#### 自定义形状

```vue
<up-radio-group v-model="value">
	<up-radio shape="circle" label="月明人倚楼"></up-radio>
</up-radio-group>
```

#### 禁用radio

```vue
<up-radio-group v-model="value">
	<up-radio :disabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 是否禁止点击提示语选中复选框

```vue
<up-radio-group v-model="value">
	<up-radio :labelDisabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 自定义颜色

```vue
<up-radio-group v-model="value">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向排列形式

```vue
<up-radio-group 
    v-model="value"
    placement="row">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向两端排列形式

```vue
<up-radio-group 
    v-model="value"
    iconPlacement="right">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/radio.md`</small>

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
| uni-app · Vue 3 | `up-radio` | `uni_modules/uview-ultra/components/up-radio` |
| uni-app-x · UTS / UVUE | `up-radio` | `uni_modules/uview-ultra/components/up-radio` |

