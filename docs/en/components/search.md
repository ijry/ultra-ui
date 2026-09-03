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

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSearch(
  value: _value1,
  showAction: false,
  onChange: (value) => setState(() => _value1 = value),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/search_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSearch } from 'ultra-ui-rn';

<UPSearch onChange={setValue2} showAction={false} value={value2} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/SearchDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSearch } from '@ultra-ui'

<UPSearch value={basic} onChange={setBasic} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/search/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-search
    v-model="value1"
    :show-action="false"
    @change="change"
></up-search>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsB/search/search.nvue`</small>

</template>

<template #uniappx>

```vue
<up-search
    v-model="value1"
    :show-action="false"
    @change="change"
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
| `bgColor` | 搜索框背景色 | `String` | `''` |
| `placeholder` | 占位提示文字 | `String` | `t("up.search.placeholder")` |
| `clearabled` | 是否启用清除控件 | `Boolean` | `true` |
| `onlyClearableOnFocused` | 是否仅聚焦时显示清除控件 | `Boolean` | `—` |
| `focus` | 是否自动聚焦 | `Boolean` | `false` |
| `showAction` | 是否在搜索框右侧显示取消按钮 | `Boolean` | `true` |
| `actionText` | 右侧取消按钮文字 | `String` | `t("up.common.search")` |
| `label` | 搜索框左侧文本 | `String / Number / null` | `null` |
| `inputAlign` | 输入框内容对齐方式，可选值为：left&#124;center&#124;right | `String` | `'left'` |
| `disabled` | 是否启用输入框 | `Boolean` | `false` |
| `animation` | 开启showAction时，是否在input获取焦点时才显示 | `Boolean` | `false` |
| `borderColor` | 边框颜色，只要配置了颜色，才会有边框 | `String` | `'transparent'` |
| `searchIconColor` | 搜索图标的颜色，默认同输入框字体颜色 | `String` | `'#909399'` |
| `searchIconSize` | 搜索图标的大小 | `Number / String` | `22` |
| `color` | 输入框字体颜色 | `String` | `''` |
| `placeholderColor` | placeholder的颜色 | `String` | `''` |
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
| uni-app · Vue 3 | `up-search` | `src/uni_modules/uview-plus/components/u-search` |
| uni-app-x · UTS / UVUE | `up-search` | `uni_modules/uview-ultra/components/up-search` |

