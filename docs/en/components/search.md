---
title: Search
description: A search field with built-in search and clear buttons.
generated: true
---

# Search

A search field with built-in search and clear buttons.

<PlatformBadges component="search" show-missing />

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
import net.lingyun.ultraui.android.components.UPSearch
import net.lingyun.ultraui.android.components.UPSearchProps

UPSearch(
    props = UPSearchProps(modelValue = searchValue, placeholder = "搜索组件", showAction = true, actionText = "搜索"),
    onInput = {
        searchValue = it
        eventText = "搜索框：$it"
    },
    onSearch = { eventText = "搜索框：提交 $searchValue" },
    onCustom = { eventText = "搜索框：动作按钮" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/InputSelectionDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSearch, UPSearchProps } from '@lingyun/ultra-ui-hos';

UPSearch({ props: new UPSearchProps({
  modelValue: this.value,
  label: '商品',
  placeholder: '请输入商品名称',
  maxlength: 12,
  actionText: '查找',
  onInput: (event: UPSearchChangeEvent): void => { this.change(event); },
  onChange: (event: UPSearchChangeEvent): void => { this.message = '变更：' + (event.value.length > 0 ? event.value : '空'); },
  onClear: (): void => { this.message = '已清除'; },
  onSearch: (event: UPSearchConfirmEvent): void => { this.confirm(event); },
  onCustom: (event: UPSearchConfirmEvent): void => { this.confirm(event); },
  onFocus: (event: UPSearchChangeEvent): void => { this.message = '获得焦点：' + event.value; },
  onBlur: (event: UPSearchChangeEvent): void => { this.message = '失去焦点：' + event.value; },
  onClick: (): void => { this.message = '点击搜索框'; },
  onClickIcon: (event: UPSearchConfirmEvent): void => { this.message = '点击图标：' + event.action; }
}) })
```

```typescript
UPSearch({ props: new UPSearchProps({
  value: '不可编辑',
  disabled: true,
  showAction: false,
  shape: 'square'
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SearchDemo.ets`</small>

</template>

<template #flutter>

#### Basic features

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSearch(
  value: _value1,
  showAction: false,
  onChange: (value) => setState(() => _value1 = value),
)
```

#### Setting an initial value

```dart
UPSearch(
  value: _value2,
  showAction: false,
  onChange: (value) => setState(() => _value2 = value),
)
```

#### Search box shape

```dart
UPSearch(
  value: _value3,
  showAction: false,
  shape: 'round',
  onChange: (value) => setState(() => _value3 = value),
)
```

#### Trailing control

```dart
UPSearch(
  value: _value5,
  animation: true,
  onChange: (value) => setState(() => _value5 = value),
)
```

#### Clearable (clear icon on focus only)

```dart
UPSearch(
  value: _value2,
  showAction: false,
  clearable: true,
  onChange: (value) => setState(() => _value2 = value),
)
```

#### Clearable (clear icon always visible)

```dart
UPSearch(
  value: _value2,
  showAction: false,
  clearable: true,
  onlyClearableOnFocused: false,
  onChange: (value) => setState(() => _value2 = value),
)
```

#### Disabled input

```dart
UPSearch(
  placeholder: '输入框被禁用,可以监听点击事件进行跳转',
  disabled: true,
  showAction: false,
)
```

#### Tapping the leading icon

```dart
UPSearch(
  value: _value6,
  showAction: false,
  onClickIcon: (_) => _showIconToast(),
  onChange: (value) => setState(() => _value6 = value),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/search_page.dart`</small>

</template>

<template #reactnative>

#### Setting an initial value

```tsx
import { UPSearch } from 'ultra-ui-rn';

<UPSearch onChange={setValue2} showAction={false} value={value2} />
```

#### Search box shape

```tsx
<UPSearch onChange={setValue3} shape="round" showAction={false} value={value3} />
```

#### Trailing control

```tsx
<UPSearch animation onChange={setValue5} value={value5} />
```

#### Clearable (clear icon on focus only)

```tsx
<UPSearch clearabled onChange={setValue2} showAction={false} value={value2} />
```

#### Clearable (clear icon always visible)

```tsx
<UPSearch
  clearabled
  onChange={setValue2}
  onlyClearableOnFocused={false}
  showAction={false}
  value={value2}
/>
```

#### Disabled input

```tsx
<UPSearch
  disabled
  placeholder="输入框被禁用,可以监听点击事件进行跳转"
  showAction={false}
/>
```

#### Tapping the leading icon

```tsx
<UPSearch onChange={setValue6} onClickIcon={clickIcon} showAction={false} value={value6} />
```

#### Horizontal alignment inside the search box

```tsx
<UPSearch inputAlign="left" onChange={setValue7} showAction={false} value={value7} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SearchDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPSearch } from '@ultra-ui'

<UPSearch value={basic} onChange={setBasic} />
```

#### Shapes

```tsx
<UPSearch
  shape='square'
  placeholder='方角搜索框'
  value={square}
  onChange={setSquare}
/>
```

#### Hiding the search button

```tsx
<UPSearch
  showAction={false}
  placeholder='右侧没有搜索按钮'
  value={noAction}
  onChange={setNoAction}
/>
```

#### Background colour

```tsx
<UPSearch
  bgColor='#eaf2ff'
  placeholder='淡蓝色背景'
  value={bgColor}
  onChange={setBgColor}
/>
```

#### Border

```tsx
<UPSearch
  bgColor='#ffffff'
  borderColor='#2979ff'
  placeholder='带主题色边框'
  value={bordered}
  onChange={setBordered}
/>
```

#### Icon position

```tsx
<UPSearch
  iconPosition='right'
  placeholder='搜索图标在右边'
  value={iconRight}
  onChange={setIconRight}
/>
```

#### Custom icon

```tsx
<UPSearch
  searchIcon='map-fill'
  searchIconColor='#fa3534'
  searchIconSize={20}
  placeholder='搜索附近的门店'
  value={customIcon}
  onChange={setCustomIcon}
/>
```

#### Text alignment

```tsx
<UPSearch
  inputAlign='center'
  placeholder='居中显示'
  value={center}
  onChange={setCenter}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/search/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<up-search placeholder="日照香炉生紫烟" v-model="keyword"></up-search>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const keyword = ref('遥看瀑布挂前川');  
</script>
```

#### Input shape

```vue
<up-search shape="round"></up-search>
```

#### Whether the clear button shows

```vue
<up-search :clearabled="true"></up-search>
```

#### Whether the trailing control shows

```vue
<up-search :show-action="true" actionText="搜索" :animation="true"></up-search>
```

#### Custom styling

```vue
<up-search inputAlign="center" height="70"></up-search>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/search.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<up-search placeholder="日照香炉生紫烟" v-model="keyword"></up-search>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const keyword = ref('遥看瀑布挂前川');  
</script>
```

#### Input shape

```vue
<up-search shape="round"></up-search>
```

#### Whether the clear button shows

```vue
<up-search :clearabled="true"></up-search>
```

#### Whether the trailing control shows

```vue
<up-search :show-action="true" actionText="搜索" :animation="true"></up-search>
```

#### Custom styling

```vue
<up-search inputAlign="center" height="70"></up-search>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/search.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `modelValue` | 绑定的值 | `String / Number` | `—` |
| `value` | 绑定的值 | `String / Number` | `''` |
| `shape` | 搜索框形状，round-圆形，square-方形 | `String` | `'round'` |
| `bgColor` | 搜索框背景色 | `String` | `'#f2f2f2'` |
| `placeholder` | 占位提示文字 | `String` | `t("up.search.placeholder")` |
| `clearabled` | 是否启用清除控件 | `Boolean` | `true` |
| `onlyClearableOnFocused` | 是否仅聚焦时显示清除控件 | `Boolean` | `—` |
| `focus` | 是否自动聚焦 | `Boolean` | `false` |
| `showAction` | 是否在搜索框右侧显示取消按钮 | `Boolean` | `true` |
| `actionText` | 右侧取消按钮文字 | `String` | `t("up.common.search")` |
| `label` | 搜索框左侧文本 | `String / Number` | `null` |
| `inputAlign` | 输入框内容对齐方式，可选值为：left&#124;center&#124;right | `String` | `'left'` |
| `disabled` | 是否启用输入框 | `Boolean` | `false` |
| `animation` | 开启showAction时，是否在input获取焦点时才显示 | `Boolean` | `false` |
| `borderColor` | 边框颜色，只要配置了颜色，才会有边框 | `String` | `'transparent'` |
| `searchIconColor` | 搜索图标的颜色，默认同输入框字体颜色 | `String` | `'#909399'` |
| `searchIconSize` | 搜索图标的大小 | `Number / String` | `22` |
| `color` | 输入框字体颜色 | `String` | `'#606266'` |
| `placeholderColor` | placeholder的颜色 | `String` | `'#909399'` |
| `searchIcon` | 左边输入框的图标，可以为uView图标名称或图片路径 | `String` | `'search'` |
| `margin` | 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30px" | `String` | `'0'` |
| `iconPosition` | 应该是uView-plus版本新增的，用于控制搜索图标的插槽位置 | `String` | `'left'` |
| `maxlength` | 输入框最大能输入的长度，-1为不限制长度 | `String / Number` | `'-1'` |
| `height` | 输入框高度，单位px | `String / Number` | `32` |
| `adjustPosition` | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| `autoBlur` | 键盘收起时，是否自动失去焦点 | `Boolean` | `true` |
| `inputStyle` | 输入框的样式，对象形式 | `Object` | `{}` |
| `actionStyle` | 右侧控件的样式，对象形式 | `Object` | `{}` |
| `customStyle` | 自定义样式，对象形式 | `Object` | `—` |

### Events

| Event |
| --- |
| `blur` |
| `change` |
| `clear` |
| `click` |
| `clickIcon` |
| `custom` |
| `focus` |
| `input` |
| `search` |

### Slots

| Slot |
| --- |
| `inputRight` |
| `label` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPSearch` | `UltraUI/Sources/UltraUI/Components/UPSearch.swift` |
| Android · Jetpack Compose | `UPSearch` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPSearch.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSearch` | `ultra-ui/src/main/ets/components/UPSearch.ets` |
| Flutter · Dart | `UPSearch` | `packages/ultra_ui/lib/src/widgets/up_search.dart` |
| React Native · TypeScript | `UPSearch` | `src/components/search` |
| Taro · React + TypeScript | `UPSearch` | `src/ultra-ui/components/up-search` |
| uni-app · Vue 3 | `up-search` | `uni_modules/uview-ultra/components/up-search` |
| uni-app-x · UTS / UVUE | `up-search` | `uni_modules/uview-ultra/components/up-search` |

