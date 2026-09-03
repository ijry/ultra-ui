---
title: Radio 单选框
description: 单选控件，支持组合校验、横竖排列与自定义图标。
generated: true
---

# Radio 单选框

单选控件，支持组合校验、横竖排列与自定义图标。

<PlatformBadges component="radio" show-missing />

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
import net.lingyun.ultraui.android.components.UPRadio
import net.lingyun.ultraui.android.components.UPRadioProps

UPRadio(props = UPRadioProps(name = "android", label = "Android"))
```

```kotlin
UPRadio(props = UPRadioProps(name = "ios", label = "iOS"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPRadio, UPRadioProps } from '@lingyun/ultra-ui-hos';

UPRadio({ props: new UPRadioProps({ name: 'A', label: '选项 A', checked: this.selected === 'A', onChange: (event: UPRadioChangeEvent): void => { this.change(event); } }) })
```

```typescript
UPRadio({ props: new UPRadioProps({ name: 'B', label: '选项 B', checked: this.selected === 'B', onChange: (event: UPRadioChangeEvent): void => { this.change(event); } }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/RadioDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/radio_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/RadioDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/radio/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 该组件需要搭配`radioGroup`组件使用，以便用户进行操作时，获得当前单选框组的选中情况
- 通过`v-model`给`radioGroup`组件绑定一个变量，对应的` name`将会被选中

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

可以通过设置`shape`为`square`或者`circle`，将单选框设置为方形或者圆形

```vue
<up-radio-group v-model="value">
	<up-radio shape="circle" label="月明人倚楼"></up-radio>
</up-radio-group>
```

#### 禁用radio

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击

```vue
<up-radio-group v-model="value">
	<up-radio :disabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 是否禁止点击提示语选中复选框

设置`labelDisabled`为`true`，即可禁止点击提示语选中复选框

```vue
<up-radio-group v-model="value">
	<up-radio :labelDisabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 自定义颜色

此处所指的颜色，为`radio`选中时的背景颜色，参数为`activeColor`

```vue
<up-radio-group v-model="value">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向排列形式

可以通过设置`placement`为`row`或者`column`，将复选框设置为横向排列或者竖向排列

```vue
<up-radio-group 
    v-model="value"
    placement="row">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向两端排列形式

可以通过设置`iconPlacement`为`left`或者`right`，将复选框勾选图标的对齐设置为左对齐或者右对齐

```vue
<up-radio-group 
    v-model="value"
    iconPlacement="right">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/radio.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 该组件需要搭配`radioGroup`组件使用，以便用户进行操作时，获得当前单选框组的选中情况
- 通过`v-model`给`radioGroup`组件绑定一个变量，对应的` name`将会被选中

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

可以通过设置`shape`为`square`或者`circle`，将单选框设置为方形或者圆形

```vue
<up-radio-group v-model="value">
	<up-radio shape="circle" label="月明人倚楼"></up-radio>
</up-radio-group>
```

#### 禁用radio

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击

```vue
<up-radio-group v-model="value">
	<up-radio :disabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 是否禁止点击提示语选中复选框

设置`labelDisabled`为`true`，即可禁止点击提示语选中复选框

```vue
<up-radio-group v-model="value">
	<up-radio :labelDisabled="true" label="明月几时有"></up-radio>
</up-radio-group>
```

#### 自定义颜色

此处所指的颜色，为`radio`选中时的背景颜色，参数为`activeColor`

```vue
<up-radio-group v-model="value">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向排列形式

可以通过设置`placement`为`row`或者`column`，将复选框设置为横向排列或者竖向排列

```vue
<up-radio-group 
    v-model="value"
    placement="row">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

#### 横向两端排列形式

可以通过设置`iconPlacement`为`left`或者`right`，将复选框勾选图标的对齐设置为左对齐或者右对齐

```vue
<up-radio-group 
    v-model="value"
    iconPlacement="right">
	<up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
</up-radio-group>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/radio.md`</small>

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
| uni-app · Vue 3 | `up-radio` | `uni_modules/uview-ultra/components/up-radio` |
| uni-app-x · UTS / UVUE | `up-radio` | `uni_modules/uview-ultra/components/up-radio` |

