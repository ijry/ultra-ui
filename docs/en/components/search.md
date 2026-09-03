---
title: Search
description: A search field with built-in search and clear buttons.
generated: true
---

# Search

A search field with built-in search and clear buttons.

<PlatformBadges component="search" show-missing />

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

### 搜索框

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SearchDemo.ets`</small>

</template>

<template #flutter>

### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSearch(
  value: _value1,
  showAction: false,
  onChange: (value) => setState(() => _value1 = value),
)
```

### 设置初始值

```dart
UPSearch(
  value: _value2,
  showAction: false,
  onChange: (value) => setState(() => _value2 = value),
)
```

### 搜索框形状

```dart
UPSearch(
  value: _value3,
  showAction: false,
  shape: 'round',
  onChange: (value) => setState(() => _value3 = value),
)
```

### 右侧控件

```dart
UPSearch(
  value: _value5,
  animation: true,
  onChange: (value) => setState(() => _value5 = value),
)
```

### 可清空内容(仅focus时显示清除图标)

```dart
UPSearch(
  value: _value2,
  showAction: false,
  clearable: true,
  onChange: (value) => setState(() => _value2 = value),
)
```

### 可清空内容(始终显示清除图标)

```dart
UPSearch(
  value: _value2,
  showAction: false,
  clearable: true,
  onlyClearableOnFocused: false,
  onChange: (value) => setState(() => _value2 = value),
)
```

### 禁用输入框

```dart
UPSearch(
  placeholder: '输入框被禁用,可以监听点击事件进行跳转',
  disabled: true,
  showAction: false,
)
```

### 点击左侧图标

```dart
UPSearch(
  value: _value6,
  showAction: false,
  onClickIcon: (_) => _showIconToast(),
  onChange: (value) => setState(() => _value6 = value),
)
```

### 搜索框内容水平对齐

```dart
UPSearch(
  value: _value7,
  showAction: false,
  inputAlign: 'left',
  onChange: (value) => setState(() => _value7 = value),
)
```

### 自定义

```dart
UPSearch(
  value: _value10,
  showAction: false,
  borderColor: 'rgb(230, 230, 230)',
  onChange: (value) => setState(() => _value10 = value),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/search_page.dart`</small>

</template>

<template #reactnative>

### 设置初始值

```tsx
import { UPSearch } from 'ultra-ui-rn';

<UPSearch onChange={setValue2} showAction={false} value={value2} />
```

### 搜索框形状

```tsx
<UPSearch onChange={setValue3} shape="round" showAction={false} value={value3} />
```

### 右侧控件

```tsx
<UPSearch animation onChange={setValue5} value={value5} />
```

### 可清空内容(仅focus时显示清除图标)

```tsx
<UPSearch clearabled onChange={setValue2} showAction={false} value={value2} />
```

### 可清空内容(始终显示清除图标)

```tsx
<UPSearch
  clearabled
  onChange={setValue2}
  onlyClearableOnFocused={false}
  showAction={false}
  value={value2}
/>
```

### 禁用输入框

```tsx
<UPSearch
  disabled
  placeholder="输入框被禁用,可以监听点击事件进行跳转"
  showAction={false}
/>
```

### 点击左侧图标

```tsx
<UPSearch onChange={setValue6} onClickIcon={clickIcon} showAction={false} value={value6} />
```

### 搜索框内容水平对齐

```tsx
<UPSearch inputAlign="left" onChange={setValue7} showAction={false} value={value7} />
```

### 自定义

```tsx
<UPSearch
  borderColor="rgb(230, 230, 230)"
  onChange={setValue10}
  showAction={false}
  value={value10}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SearchDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

value + onChange 受控绑定

```tsx
import { UPSearch } from '@ultra-ui'

<UPSearch value={basic} onChange={setBasic} />
```

### 形状

shape：round（默认圆角） / square 方角

```tsx
<UPSearch
  shape='square'
  placeholder='方角搜索框'
  value={square}
  onChange={setSquare}
/>
```

### 隐藏搜索按钮

showAction=false

```tsx
<UPSearch
  showAction={false}
  placeholder='右侧没有搜索按钮'
  value={noAction}
  onChange={setNoAction}
/>
```

### 背景色

bgColor 自定义输入区背景

```tsx
<UPSearch
  bgColor='#eaf2ff'
  placeholder='淡蓝色背景'
  value={bgColor}
  onChange={setBgColor}
/>
```

### 边框

borderColor 给输入区加一圈描边

```tsx
<UPSearch
  bgColor='#ffffff'
  borderColor='#2979ff'
  placeholder='带主题色边框'
  value={bordered}
  onChange={setBordered}
/>
```

### 图标位置

iconPosition：left（默认） / right

```tsx
<UPSearch
  iconPosition='right'
  placeholder='搜索图标在右边'
  value={iconRight}
  onChange={setIconRight}
/>
```

### 自定义图标

searchIcon / searchIconColor / searchIconSize

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

### 文字对齐

inputAlign：left / center / right

```tsx
<UPSearch
  inputAlign='center'
  placeholder='居中显示'
  value={center}
  onChange={setCenter}
/>
```

### 尺寸与外边距

height / margin

```tsx
<UPSearch
  height={44}
  margin='0 0 10px 0'
  placeholder='高度 44px'
  color='#7232dd'
  value={sized}
  onChange={setSized}
/>
```

### 左侧标签

label 在输入框左侧插入一段文字

```tsx
<UPSearch
  label='深圳'
  placeholder='搜索深圳的商家'
  value={labeled}
  onChange={setLabeled}
/>
```

### 禁用与长度限制

disabled 不可输入；maxlength 限制字数

```tsx
<UPSearch
  maxlength={8}
  placeholder='最多 8 个字'
  value={limited}
  onChange={setLimited}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/search/index.tsx`</small>

</template>

<template #uniapp>

### 基础功能

```vue
<up-search
    v-model="value1"
    :show-action="false"
    @change="change"
></up-search>
```

### 设置初始值

```vue
<up-search
    v-model="value2"
    :show-action="false"
></up-search>
```

### 搜索框形状

```vue
<up-search
    v-model="value3"
    :show-action="false"
    shape="round"
></up-search>
```

### 右侧控件

```vue
<up-search v-model="value5"></up-search>
```

### 禁用输入框

```vue
<up-search
    placeholder="输入框被禁用,可以监听点击事件进行跳转"
    disabled
    :show-action="false"
></up-search>
```

### 点击左侧图标

```vue
<up-search
    v-model="value6"
    :show-action="false"
    @clickIcon="clickIcon"
></up-search>
```

### 搜索框内容水平对齐

```vue
<up-search
    v-model="value7"
    :show-action="false"
    input-align="left"
></up-search>
```

### 自定义

```vue
<up-search
    v-model="value10"
    :show-action="false"
    borderColor="rgb(230, 230, 230)"
    bgColor="#fff"
></up-search>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/search/search.uvue`</small>

</template>

<template #uniappx>

### 基础功能

```vue
<up-search
    v-model="value1"
    :show-action="false"
    @change="change"
></up-search>
```

### 设置初始值

```vue
<up-search
    v-model="value2"
    :show-action="false"
></up-search>
```

### 搜索框形状

```vue
<up-search
    v-model="value3"
    :show-action="false"
    shape="round"
></up-search>
```

### 右侧控件

```vue
<up-search v-model="value5"></up-search>
```

### 禁用输入框

```vue
<up-search
    placeholder="输入框被禁用,可以监听点击事件进行跳转"
    disabled
    :show-action="false"
></up-search>
```

### 点击左侧图标

```vue
<up-search
    v-model="value6"
    :show-action="false"
    @clickIcon="clickIcon"
></up-search>
```

### 搜索框内容水平对齐

```vue
<up-search
    v-model="value7"
    :show-action="false"
    input-align="left"
></up-search>
```

### 自定义

```vue
<up-search
    v-model="value10"
    :show-action="false"
    borderColor="rgb(230, 230, 230)"
    bgColor="#fff"
></up-search>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/search/search.uvue`</small>

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

