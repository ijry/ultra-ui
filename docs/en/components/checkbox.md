---
title: Checkbox
description: Multi-select control with group validation, layout options and custom icons.
generated: true
---

# Checkbox

Multi-select control with group validation, layout options and custom icons.

<PlatformBadges component="checkbox" show-missing />

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

#### Using a checkbox on its own

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

#### Space-between row layout

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

#### Basic example

```tsx
import { UPCheckbox } from 'ultra-ui-rn';

<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### Using a checkbox on its own

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

#### Custom shape

```tsx
<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### Disabled or not

```tsx
<UPCheckbox
  customStyle={s.stacked}
  disabled={index === 0}
  key={name}
  label={name}
  name={name}
/>
```

#### Whether the label toggles the checkbox

```tsx
<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### Custom colour

```tsx
<UPCheckbox customStyle={s.stacked} key={name} label={name} name={name} />
```

#### Row layout

```tsx
<UPCheckbox customStyle={s.inline} key={name} label={name} name={name} />
```

#### Space-between row layout

```tsx
<UPCheckbox customStyle={s.stackedWide} key={name} label={name} name={name} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/CheckboxDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPCheckbox } from '@ultra-ui'

<UPCheckbox key={item} name={item} label={item} />
```

#### Shapes

```tsx
<UPCheckbox name='square' label='方形' />
```

#### Disabled

```tsx
<UPCheckbox name='已选中' label='已选中' />
```

#### Custom colour

```tsx
<UPCheckbox name='红色' label='Group 红色' />
```

#### Size and text

```tsx
<UPCheckbox name='小号' label='小号' size={16} iconSize={10} labelSize={12} />
```

#### Vertical layout

```tsx
<UPCheckbox key={item} name={item} label={item} />
```

#### Icon on the right

```tsx
<UPCheckbox key={item} name={item} label={item} />
```

#### Ignore taps on the label

```tsx
<UPCheckbox name='只能点图标' label='只能点图标' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/checkbox/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>
<script setup>
import { ref,reactive } from 'vue';

const checkboxValue1 = reactive([]);

// 基本案列数据
const checkboxList1 = reactive([
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
]);

const checkboxChange = (n) => {
  console.log('change', n);
};
</script>
```

#### Using up-checkbox on its own

```vue
<template>
    <up-checkbox
        :customStyle="{marginBottom: '8px'}"
        label="同意用户协议与隐私条款"
        name="agree"
        usedAlone
        v-model:checked="aloneChecked"
    >
    </up-checkbox>
</template>
<script setup>
import { ref } from 'vue'

const aloneChecked = ref(false)
</script>
```

#### Custom shape

```vue
<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>
<script setup>
import { ref,reactive } from 'vue';

const checkboxValue1 = reactive([]);

// 基本案列数据
const checkboxList1 = reactive([
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
]);

const checkboxChange = (n) => {
  console.log('change', n);
};
</script>
```

#### Disabled checkbox

```vue
<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
                :disabled="item.disabled"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>
<script setup>
import { reactive } from 'vue';

const checkboxValue1 = reactive([]);

// 基本案列数据
const checkboxList1 = reactive([
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
    disabled: true,
  },
]);

const checkboxChange = (n) => {
  console.log('change', n);
};
</script>
```

#### Custom shape

```vue
<up-checkbox-group>
	<up-checkbox v-model="checked" shape="circle" label="明月"></up-checkbox>
</up-checkbox-group>
```

#### Custom colour

```vue
<up-checkbox-group v-model="checked">
	<up-checkbox  activeColor="red" label="光影"></up-checkbox>
</up-checkbox-group>
```

#### Row layout

```vue
<up-checkbox-group v-model="checked" placement="row">
	<up-checkbox activeColor="red" label="红色"></up-checkbox>
	<up-checkbox activeColor="green" label="绿色"></up-checkbox>
</up-checkbox-group>
```

#### Space-between row layout

```vue
<up-checkbox-group 
    v-model="checked"
    iconPlacement="right" 
    placement="row">
	<up-checkbox activeColor="red" label="红色"></up-checkbox>
	<up-checkbox activeColor="green" label="绿色"></up-checkbox>
</up-checkbox-group>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/checkbox.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>
<script setup>
import { ref,reactive } from 'vue';

const checkboxValue1 = reactive([]);

// 基本案列数据
const checkboxList1 = reactive([
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
]);

const checkboxChange = (n) => {
  console.log('change', n);
};
</script>
```

#### Using up-checkbox on its own

```vue
<template>
    <up-checkbox
        :customStyle="{marginBottom: '8px'}"
        label="同意用户协议与隐私条款"
        name="agree"
        usedAlone
        v-model:checked="aloneChecked"
    >
    </up-checkbox>
</template>
<script setup>
import { ref } from 'vue'

const aloneChecked = ref(false)
</script>
```

#### Custom shape

```vue
<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>
<script setup>
import { ref,reactive } from 'vue';

const checkboxValue1 = reactive([]);

// 基本案列数据
const checkboxList1 = reactive([
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
]);

const checkboxChange = (n) => {
  console.log('change', n);
};
</script>
```

#### Disabled checkbox

```vue
<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
                :disabled="item.disabled"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>
<script setup>
import { reactive } from 'vue';

const checkboxValue1 = reactive([]);

// 基本案列数据
const checkboxList1 = reactive([
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
    disabled: true,
  },
]);

const checkboxChange = (n) => {
  console.log('change', n);
};
</script>
```

#### Custom shape

```vue
<up-checkbox-group>
	<up-checkbox v-model="checked" shape="circle" label="明月"></up-checkbox>
</up-checkbox-group>
```

#### Custom colour

```vue
<up-checkbox-group v-model="checked">
	<up-checkbox  activeColor="red" label="光影"></up-checkbox>
</up-checkbox-group>
```

#### Row layout

```vue
<up-checkbox-group v-model="checked" placement="row">
	<up-checkbox activeColor="red" label="红色"></up-checkbox>
	<up-checkbox activeColor="green" label="绿色"></up-checkbox>
</up-checkbox-group>
```

#### Space-between row layout

```vue
<up-checkbox-group 
    v-model="checked"
    iconPlacement="right" 
    placement="row">
	<up-checkbox activeColor="red" label="红色"></up-checkbox>
	<up-checkbox activeColor="green" label="绿色"></up-checkbox>
</up-checkbox-group>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/checkbox.md`</small>

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

