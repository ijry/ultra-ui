---
title: Cell 单元格
description: 列表项的通用容器，可组合标题、描述、图标、右侧箭头与自定义内容。
generated: true
---

# Cell 单元格

列表项的通用容器，可组合标题、描述、图标、右侧箭头与自定义内容。

<PlatformBadges component="cell" show-missing />

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
import net.lingyun.ultraui.android.components.UPCell
import net.lingyun.ultraui.android.components.UPCellProps

UPCell(
    props = UPCellProps(title = "账户资料", label = "公开 UPCellProps", value = "查看", isLink = true, clickable = true),
    onClick = { eventText = "单元格：$it" },
)
```

```kotlin
UPCell(props = UPCellProps(title = "昵称", value = "UltraUI"))
```

```kotlin
UPCell(props = UPCellProps(title = "状态", value = "已启用", border = false))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPCell, UPCellProps } from '@lingyun/ultra-ui-hos';

UPCell({ props: new UPCellProps({
  title: '头像',
  value: '默认头像',
  icon: 'home',
  arrow: true,
  clickable: true,
  name: 1001,
  onClick: (event: UPCellClickEvent): void => {
    this.select(event);
  }
}) })
```

```typescript
UPCell({ props: new UPCellProps({
  title: '昵称',
  label: '展示给其他用户',
  value: 'UltraUI',
  required: true,
  arrow: true,
  clickable: true,
  name: 'nickname',
  onClick: (event: UPCellClickEvent): void => {
    this.select(event);
  }
}) })
```

```typescript
UPCell({ props: new UPCellProps({
  title: '路由兼容字段',
  value: '仅诊断，不自动导航',
  url: '/pages/demo',
  linkType: 'navigateTo',
  arrow: true,
  clickable: true,
  name: 'no-op',
  onClick: (event: UPCellClickEvent): void => {
    this.select(event, '由调用方处理：');
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/CellDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCell(title: 'uview-plus', value: '内容', isLink: true)
```

```dart
UPCell(title: '利剑出鞘,一统江湖', value: '内容', label: '挣脱束缚,向往自由')
```

```dart
UPCell(title: '单元格', icon: 'lock-fill')
```

```dart
UPCell(
  title: '单元格',
  iconSlot: Image(
      image: AssetImage('assets/uview/demo/cell/tag.png'),
      width: 18,
      height: 18),
)
```

```dart
UPCell(size: 'large', title: '单元格', value: '内容', isLink: true)
```

```dart
UPCell(size: 'large', title: '单元格', value: '内容', label: '描述信息')
```

```dart
UPCell(required: true, title: '单元格', value: '组件', isLink: true)
```

```dart
UPCell(
    title: '单元格',
    value: '工具',
    arrowDirection: 'up',
    isLink: true)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/cell_page.dart`</small>

</template>

<template #reactnative>

#### 基础用法

```tsx
import { UPCell } from 'ultra-ui-rn';

<UPCell title="单元格" value="内容" />
```

#### 无标题

```tsx
<UPCell title="单元格" value="内容" />
```

#### 无边框

```tsx
<UPCell title="单元格" value="内容" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/CellGroupDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

title / value / label

```tsx
import { UPCell } from '@ultra-ui'

<UPCell title='单元格' />
```

#### 分组标题

cell-group 的 title

```tsx
<UPCell title='单元格一' value='内容' />
```

#### 左侧图标

icon / iconStyle

```tsx
<UPCell icon='setting' title='设置' />
```

#### 右侧箭头

isLink / rightIcon / arrowDirection

```tsx
<UPCell title='默认箭头' isLink />
```

#### 单元格大小

size：normal（默认） / large

```tsx
<UPCell icon='photo' title='默认大小' label='描述信息' value='内容' />
```

#### 垂直居中

center=true

```tsx
<UPCell title='未居中' label='右侧内容顶部对齐' value='内容' />
```

#### 必填与禁用

required / disabled

```tsx
<UPCell required title='必填项' value='标题前有红色星号' />
```

#### 下边框

cell 的 border 优先于 cell-group 的 border

```tsx
<UPCell title='分组关闭边框' value='border=false' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/cell/index.tsx`</small>

</template>

<template #uniapp>

#### 基础功能

- 该组件需要搭配`cell-group`使用，并由它实现列表组的上下边框，如不需要上下边框，配置`cellGroup`的`border`参数为`false`即可。
- 通过`title`设置左侧标题，`value`设置右侧内容。
- 通过`icon`字段设置图标，，或者图片链接(本地文件建议使用绝对地址)。

**注意：** 由于`cell`组件需要由`cellGroup`组件提供参数值，这些父子组件间通过Vue的"provide/inject"特性注入依赖，
所以您必须使用`cellGroup`包裹`cell`组件才能正常使用。

```vue
<template>
	<up-cell-group>
		<up-cell icon="setting-fill" title="个人设置"></up-cell>
		<up-cell icon="integral-fill" title="会员等级" value="新版本"></up-cell>
	</up-cell-group>
</template>
```

#### 自定义内容

- 通过插槽`icon`可以自定义图标，内容会替换左边图标位置
- 通过插槽`title`定义左边标题部分
- 通过插槽`right-icon`定义右边内容部分

```vue
<up-cell-group>
	<up-cell  title="夕阳无限好" arrow-direction="down">
		<template #icon>
			<up-icon size="32" name="search"></up-icon>
		</template>
		<!-- <up-badge count="99" :absolute="false" slot="right-icon"></up-badge> -->
		<template #right-icon>
			<up-switch v-model="checked"></up-switch>
		</template>
	</up-cell>
	<up-cell icon="setting-fill" title="只是近黄昏"></up-cell>
</up-cell-group>
```

如上所示，可以给`cell`组件通过`slot="right-icon"`设定右边uview-plus自带的`badge`或者`switch`组件：
- 如果搭配的是`badge`组件，注意设置`absolute`参数为`false`去掉绝对定位，否则其位于右侧的恰当位置，详见Badge 徽标数。
- 如果搭配的是`switch`组件，注意要通过`v-model`绑定一个内容为布尔值的变量，否则无法操作`switch`，详见Switch 开关选择器。

#### 自定义大小

设置`size`可自定义大小

```vue

<up-cell-group>
	<up-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    isLink
	></up-cell>
	<up-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    label="描述信息"
	></up-cell>
</up-cell-group>
```

#### 展示右箭头

设置`isLink`为`true`，将会显示右侧的箭头，可以通过arrow-direction控制箭头的方向

```vue
<up-cell-group>
	<up-cell icon="share" title="停车坐爱枫林晚" :isLink="true" arrow-direction="down"></up-cell>
	<up-cell icon="map" title="霜叶红于二月花" :isLink="false"></up-cell>
</up-cell-group>
```

#### 跳转页面

设置`isLink`为`true`，单元格点击可跳转页面,传入`url`设置跳转地址

```vue
<up-cell-group>
	<up-cell
	    title="打开标签页"
	    isLink
	    url="/pages/componentsB/tag/tag"
	></up-cell>
	<up-cell
	    title="打开徽标页"
	    isLink
	    url="/pages/componentsB/badge/badge"
	></up-cell>
</up-cell-group>
```

#### 右侧内容垂直居中

设置`center`为`true`，可将右侧内容垂直居中

```vue
<up-cell-group>
    <up-cell
        title="单元格"
        value="内容"
        label="描述信息"
        center
    ></up-cell>
</up-cell-group>
```

#### 自定义插槽

设置`slot`为`title`，可自定义左侧区域内容
设置`slot`为`value`，可自定义右侧区域内容

```vue
<up-cell-group>
    <up-cell value="内容">
		<template #title>
			<view
				class="u-slot-title"
			>
				<text class="u-cell-text">单元格</text>
				<up-tag
					text="标签"
					plain
					size="mini"
					type="warning"
				>
				</up-tag>
			</view>
		</template>
    </up-cell>
    <up-cell
        title="单元格"
    	isLink
    >
		<template #value>
			<text
					class="u-slot-value"
				>99</text>
		</template>
    </up-cell>
</up-cell-group>
```

```css
/* App.vue */
.cell-hover-class {
	background-color: rgb(235, 237, 238);
}

/* 或者单是设置透明度 */
.cell-hover-class {
	opacity: 0.5;
}
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/cell.md`</small>

</template>

<template #uniappx>

#### 基础功能

- 该组件需要搭配`cell-group`使用，并由它实现列表组的上下边框，如不需要上下边框，配置`cellGroup`的`border`参数为`false`即可。
- 通过`title`设置左侧标题，`value`设置右侧内容。
- 通过`icon`字段设置图标，，或者图片链接(本地文件建议使用绝对地址)。

**注意：** 由于`cell`组件需要由`cellGroup`组件提供参数值，这些父子组件间通过Vue的"provide/inject"特性注入依赖，
所以您必须使用`cellGroup`包裹`cell`组件才能正常使用。

```vue
<template>
	<up-cell-group>
		<up-cell icon="setting-fill" title="个人设置"></up-cell>
		<up-cell icon="integral-fill" title="会员等级" value="新版本"></up-cell>
	</up-cell-group>
</template>
```

#### 自定义内容

- 通过插槽`icon`可以自定义图标，内容会替换左边图标位置
- 通过插槽`title`定义左边标题部分
- 通过插槽`right-icon`定义右边内容部分

```vue
<up-cell-group>
	<up-cell  title="夕阳无限好" arrow-direction="down">
		<template #icon>
			<up-icon size="32" name="search"></up-icon>
		</template>
		<!-- <up-badge count="99" :absolute="false" slot="right-icon"></up-badge> -->
		<template #right-icon>
			<up-switch v-model="checked"></up-switch>
		</template>
	</up-cell>
	<up-cell icon="setting-fill" title="只是近黄昏"></up-cell>
</up-cell-group>
```

如上所示，可以给`cell`组件通过`slot="right-icon"`设定右边uview-ultra自带的`badge`或者`switch`组件：
- 如果搭配的是`badge`组件，注意设置`absolute`参数为`false`去掉绝对定位，否则其位于右侧的恰当位置，详见Badge 徽标数。
- 如果搭配的是`switch`组件，注意要通过`v-model`绑定一个内容为布尔值的变量，否则无法操作`switch`，详见Switch 开关选择器。

#### 自定义大小

设置`size`可自定义大小

```vue

<up-cell-group>
	<up-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    isLink
	></up-cell>
	<up-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    label="描述信息"
	></up-cell>
</up-cell-group>
```

#### 展示右箭头

设置`isLink`为`true`，将会显示右侧的箭头，可以通过arrow-direction控制箭头的方向

```vue
<up-cell-group>
	<up-cell icon="share" title="停车坐爱枫林晚" :isLink="true" arrow-direction="down"></up-cell>
	<up-cell icon="map" title="霜叶红于二月花" :isLink="false"></up-cell>
</up-cell-group>
```

#### 跳转页面

设置`isLink`为`true`，单元格点击可跳转页面,传入`url`设置跳转地址

```vue
<up-cell-group>
	<up-cell
	    title="打开标签页"
	    isLink
	    url="/pages/componentsB/tag/tag"
	></up-cell>
	<up-cell
	    title="打开徽标页"
	    isLink
	    url="/pages/componentsB/badge/badge"
	></up-cell>
</up-cell-group>
```

#### 右侧内容垂直居中

设置`center`为`true`，可将右侧内容垂直居中

```vue
<up-cell-group>
    <up-cell
        title="单元格"
        value="内容"
        label="描述信息"
        center
    ></up-cell>
</up-cell-group>
```

#### 自定义插槽

设置`slot`为`title`，可自定义左侧区域内容
设置`slot`为`value`，可自定义右侧区域内容

```vue
<up-cell-group>
    <up-cell value="内容">
		<template #title>
			<view
				class="u-slot-title"
			>
				<text class="u-cell-text">单元格</text>
				<up-tag
					text="标签"
					plain
					size="mini"
					type="warning"
				>
				</up-tag>
			</view>
		</template>
    </up-cell>
    <up-cell
        title="单元格"
    	isLink
    >
		<template #value>
			<text
					class="u-slot-value"
				>99</text>
		</template>
    </up-cell>
</up-cell-group>
```

```css
/* App.vue */
.cell-hover-class {
	background-color: rgb(235, 237, 238);
}

/* 或者单是设置透明度 */
.cell-hover-class {
	opacity: 0.5;
}
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/cell.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-cell>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 标题 | `String / Number` | `''` |
| `label` | 标题下方的描述信息 | `String / Number` | `''` |
| `value` | 右侧的内容 | `String / Number` | `''` |
| `icon` | 左侧图标名称，或者图片链接(本地文件建议使用绝对地址) | `String` | `''` |
| `disabled` | 是否禁用cell | `Boolean` | `false` |
| `border` | 是否显示下边框 | `Boolean` | `true` |
| `center` | 内容是否垂直居中(主要是针对右侧的value部分) | `Boolean` | `false` |
| `url` | 点击后跳转的URL地址 | `String` | `''` |
| `linkType` | 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作 | `String` | `'navigateTo'` |
| `clickable` | 是否开启点击反馈(表现为点击时加上灰色背景) | `Boolean` | `false` |
| `isLink` | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| `required` | 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件) | `Boolean` | `false` |
| `rightIcon` | 右侧的图标箭头 | `String` | `'arrow-right'` |
| `arrowDirection` | 右侧箭头的方向，可选值为：left，up，down | `String` | `''` |
| `iconStyle` | 左侧图标样式 | `Object / String` | `{}` |
| `rightIconStyle` | 右侧箭头图标的样式 | `Object / String` | `{}` |
| `titleStyle` | 标题的样式 | `Object / String` | `{}` |
| `size` | 单位元的大小，可选值为large | `String` | `''` |
| `stop` | 点击cell是否阻止事件传播 | `Boolean` | `true` |
| `name` | 标识符，cell被点击时返回 | `Number / String` | `''` |

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `icon` |
| `label` |
| `right-icon` |
| `righticon` |
| `title` |
| `value` |

### `<up-cell-group>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 分组标题 | `String` | `''` |
| `border` | 是否显示外边框 | `Boolean` | `true` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `title` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPCell` | `UltraUI/Sources/UltraUI/Components/UPCell.swift` |
| Android · Jetpack Compose | `UPCell` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCell.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPCell` | `ultra-ui/src/main/ets/components/UPCell.ets` |
| Flutter · Dart | `UPCell` | `packages/ultra_ui/lib/src/widgets/up_cell.dart` |
| React Native · TypeScript | `UPCell` | `src/components/cell` |
| Taro · React + TypeScript | `UPCell` | `src/ultra-ui/components/up-cell` |
| uni-app · Vue 3 | `up-cell` | `uni_modules/uview-ultra/components/up-cell` |
| uni-app-x · UTS / UVUE | `up-cell` | `uni_modules/uview-ultra/components/up-cell` |

