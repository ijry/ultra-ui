---
title: Subsection
description: A segmented control for switching between a few options.
generated: true
---

# Subsection

A segmented control for switching between a few options.

<PlatformBadges component="subsection" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSubsection
import net.lingyun.ultraui.android.components.UPSubsectionProps

DemoSection("分段器") { UPSubsection(UPSubsectionProps(list = listOf("日", "周", "月"), current = subsection), onChange = { subsection = it })
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSubsection, UPSubsectionProps } from '@lingyun/ultra-ui-hos';

UPSubsection({ props: new UPSubsectionProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onChange: (index: number): void => { this.message = 'button 选择：' + String(index); } }) })
```

```typescript
UPSubsection({ props: new UPSubsectionProps({ list: this.list, current: this.current, mode: 'subsection', bold: false, onChange: (index: number): void => { this.message = 'subsection 选择：' + String(index); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SubsectionDemo.ets`</small>

</template>

<template #flutter>

#### Basic usage

```dart
import 'package:ultra_ui/ultra_ui.dart';

subsection: UPSubsection(
  key: const ValueKey('subsection-page-basic'),
  list: _items,
  mode: 'subsection',
  current: _basicIndex,
  onChange: _setBasic,
)
```

#### Button mode

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-button'),
  list: _items,
  mode: 'button',
  current: _buttonIndex,
  onChange: _setButton,
)
```

#### Switching theme

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-theme'),
  list: _items,
  mode: 'subsection',
  current: _themeIndex,
  activeColor: '#f56c6c',
  onChange: _setTheme,
)
```

#### Default position

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-default'),
  list: _items,
  mode: 'button',
  current: _defaultIndex,
  activeColor: '#f9ae3d',
  onChange: _setDefault,
)
```

#### Button mode with per-item colours

```dart
subsection: UPSubsection(
  key: const ValueKey('subsection-page-custom-colors'),
  list: _customItems,
  mode: 'button',
  current: _customIndex,
  activeColorKeyName: 'textColor',
  onChange: _setCustom,
)
```

#### Disabled

```dart
UPSubsection(
  key: const ValueKey('subsection-page-disabled-button'),
  list: _customItems,
  mode: 'button',
  disabled: true,
  activeColorKeyName: 'textColor',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/subsection_page.dart`</small>

</template>

<template #reactnative>

#### Basic usage

```tsx
import { UPSubsection } from 'ultra-ui-rn';

<UPSubsection current={current1} list={list} mode="subsection" onChange={setCurrent1} />
```

#### Button mode

```tsx
<UPSubsection current={current2} list={list} mode="button" onChange={setCurrent2} />
```

#### Switching theme

```tsx
<UPSubsection
  activeColor="#f56c6c"
  current={current3}
  list={list}
  mode="subsection"
  onChange={setCurrent3}
/>
```

#### Default position

```tsx
<UPSubsection
  activeColor="#f9ae3d"
  current={current4}
  list={list}
  mode="button"
  onChange={setCurrent4}
/>
```

#### Button mode with per-item colours

```tsx
<UPSubsection
  activeColorKeyName="textColor"
  current={current5}
  list={list3}
  mode="button"
  onChange={setCurrent5}
/>
```

#### Disabled

```tsx
<UPSubsection
  activeColorKeyName="textColor"
  current={current5}
  disabled
  list={list3}
  mode="button"
  onChange={setCurrent5}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/SubsectionDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPSubsection } from '@ultra-ui'

<UPSubsection list={SIMPLE_LIST} current={basic} onChange={setBasic} />
```

#### Custom colour

```tsx
<UPSubsection
  list={SIMPLE_LIST}
  current={color}
  activeColor='#f56c6c'
  inactiveColor='#909399'
  onChange={setColor}
/>
```

#### Background colour

```tsx
<UPSubsection
  list={SIMPLE_LIST}
  current={bg}
  bgColor='#e1f3d8'
  activeColor='#5ac725'
  onChange={setBg}
/>
```

#### Font size

```tsx
<UPSubsection
  list={SIMPLE_LIST}
  current={font}
  fontSize={12}
  onChange={setFont}
/>
```

#### Bold for the active item

```tsx
<UPSubsection list={SIMPLE_LIST} current={bold} bold onChange={setBold} />
```

#### Custom field names

```tsx
<UPSubsection
  list={KEY_NAME_LIST}
  keyName='title'
  current={keyName}
  onChange={setKeyName}
/>
```

#### Per-item colours

```tsx
<UPSubsection
  list={COLOR_KEY_LIST}
  current={colorKey}
  onChange={setColorKey}
/>
```

#### Item count adapts

```tsx
<UPSubsection list={TWO_LIST} current={two} onChange={setTwo} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/subsection/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<up-subsection :list="list" :current="1"></up-subsection>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
const list = ref(['未付款', '待评价', '已付款']);  
// 或者如果您想要使用对象数组  
// const list = ref([  
//   { name: '未付款' },  
//   { name: '待评价' },  
//   { name: '已付款' }  
// ]);  
  
const current = ref(1);  
</script>
```

#### Choosing a mode

```vue
<up-subsection :list="list" mode="subsection" :current="1"></up-subsection>
```

#### Colour configuration

```vue
<up-subsection activeColor="#f56c6c"></up-subsection>
```

#### Notes

```vue
<template>
    <up-subsection :list="list" :current="curNow" @change="sectionChange"></up-subsection>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式引用  
const list = ref(['未付款', '待评价', '已付款']);  
const curNow = ref(0);  
  
// 定义方法，注意在 setup 中不需要 this，直接访问响应式引用  
function sectionChange(index) {  
  curNow.value = index;  
}  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/subsection.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<up-subsection :list="list" :current="1"></up-subsection>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
const list = ref(['未付款', '待评价', '已付款']);  
// 或者如果您想要使用对象数组  
// const list = ref([  
//   { name: '未付款' },  
//   { name: '待评价' },  
//   { name: '已付款' }  
// ]);  
  
const current = ref(1);  
</script>
```

#### Choosing a mode

```vue
<up-subsection :list="list" mode="subsection" :current="1"></up-subsection>
```

#### Colour configuration

```vue
<up-subsection activeColor="#f56c6c"></up-subsection>
```

#### Notes

```vue
<template>
    <up-subsection :list="list" :current="curNow" @change="sectionChange"></up-subsection>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 创建响应式引用  
const list = ref(['未付款', '待评价', '已付款']);  
const curNow = ref(0);  
  
// 定义方法，注意在 setup 中不需要 this，直接访问响应式引用  
function sectionChange(index) {  
  curNow.value = index;  
}  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/subsection.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `list` | tab的数据 | `Array` | `[]` |
| `current` | 当前活动的tab的index | `String / Number` | `0` |
| `activeColor` | 激活的颜色 | `String` | `'var(--up-primary, #3c9cff)'` |
| `inactiveColor` | 未激活的颜色 | `String` | `'var(--up-content-color, #606266)'` |
| `mode` | 模式选择，mode=button为按钮形式，mode=subsection时为分段模式 | `String` | `'button'` |
| `fontSize` | 字体大小 | `String / Number` | `12` |
| `bold` | 激活tab的字体是否加粗 | `Boolean` | `true` |
| `bgColor` | mode = button时，组件背景颜色 | `String` | `'var(--up-hover-bg-color, #eeeeef)'` |
| `keyName` | 从list元素对象中读取的键名 | `String` | `'name'` |
| `activeColorKeyName` | 从list元素对象中读取激活时的颜色  如果存在字段 优先级大于 activeColor | `String` | `'activeColorKey'` |
| `inactiveColorKeyName` | 从list元素对象中读取未激活时的颜色 如果存在字段 优先级大于 inactiveColor | `String` | `'inactiveColorKey'` |
| `disabled` | 是否禁用 | `Boolean` | `false` |

### Events

| Event |
| --- |
| `change` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSubsection` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSubsection` | `ultra-ui/src/main/ets/components/UPSubsection.ets` |
| Flutter · Dart | `UPSubsection` | `packages/ultra_ui/lib/src/widgets/up_subsection.dart` |
| React Native · TypeScript | `UPSubsection` | `src/components/subsection` |
| Taro · React + TypeScript | `UPSubsection` | `src/ultra-ui/components/up-subsection` |
| uni-app · Vue 3 | `up-subsection` | `uni_modules/uview-ultra/components/up-subsection` |
| uni-app-x · UTS / UVUE | `up-subsection` | `uni_modules/uview-ultra/components/up-subsection` |

