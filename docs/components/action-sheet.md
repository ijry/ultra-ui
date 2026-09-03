---
title: Action sheet 操作菜单
description: 从底部弹起的操作列表，支持标题、描述与危险操作样式。
generated: true
---

# Action sheet 操作菜单

从底部弹起的操作列表，支持标题、描述与危险操作样式。

<PlatformBadges component="action-sheet" show-missing />

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
import net.lingyun.ultraui.android.components.UPActionSheet
import net.lingyun.ultraui.android.components.UPActionSheetProps

UPActionSheet(
    props = UPActionSheetProps(
        show = actionSheetVisible,
        title = "选择操作",
        actions = listOf(
            mapOf("name" to "拍照"),
            mapOf("name" to "从相册选择"),
        ),
        cancelText = "取消",
    ),
    onUpdateShow = {
        actionSheetVisible = it
        eventText = "操作菜单：${if (it) "打开" else "关闭"}"
    },
    onSelect = { eventText = "操作菜单：选择 ${it.toString()}" },
    onCancel = { eventText = "操作菜单：取消" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### 操作面板

```typescript
import { UPActionSheet, UPActionSheetProps } from '@lingyun/ultra-ui-hos';

UPActionSheet({ props: new UPActionSheetProps({
  show: this.show, title: '本地操作', description: '禁用项和加载项不会触发选择', actions: this.actions, round: 12,
  onShowChange: (show: boolean): void => { this.show = show; },
  onSelect: (event: UPActionSheetSelectEvent): void => { this.message = '已选择第 ' + String(event.index + 1) + ' 项'; },
  onCancel: (): void => { this.message = '已取消'; }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ActionSheetDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPActionSheet(
  show: true,
  actions: preset == 0
      ? _normalActions
      : preset == 1
          ? _statusActions
          : preset == 4
              ? const <Map<String, dynamic>>[]
              : _standardActions,
  closeOnClickOverlay: preset != 0,
  cancelText: preset == 2 ? '取消' : '',
  description: preset == 3 ? '这是一段描述文本,字号偏小,颜色偏淡' : '',
  title: preset == 4 ? '标题位置' : '',
  round: preset == 4 ? 10 : 0,
  onClose: _close,
  onUpdateShow: (show) {
    if (!show) _close();
  },
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/action_sheet_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPActionSheet } from 'ultra-ui-rn';

<UPActionSheet
  actions={actions0}
  closeOnClickOverlay={false}
  onClose={close}
  onSelect={select}
  show={active === 0}
/>
```

```tsx
<UPActionSheet actions={actions1} onClose={() => setActive(-1)} show={active === 1} />
<UPActionSheet
  actions={actions2}
  cancelText="取消"
  onClose={() => setActive(-1)}
  show={active === 2}
/>
<UPActionSheet
  actions={actions3}
  description="这是一段描述文本,字号偏小,颜色偏淡"
  onClose={() => setActive(-1)}
  show={active === 3}
/>
<UPActionSheet onClose={() => setActive(-1)} round={10} show={active === 4} title="标题位置">
  <Text style={s.slotText}>
    这是一段通过slot传入的内容,您可以在此自定义操作面板
  </Text>
</UPActionSheet>
```

```tsx
<UPActionSheet
  actions={actions2}
  cancelText="取消"
  onClose={() => setActive(-1)}
  show={active === 2}
/>
<UPActionSheet
  actions={actions3}
  description="这是一段描述文本,字号偏小,颜色偏淡"
  onClose={() => setActive(-1)}
  show={active === 3}
/>
<UPActionSheet onClose={() => setActive(-1)} round={10} show={active === 4} title="标题位置">
  <Text style={s.slotText}>
    这是一段通过slot传入的内容,您可以在此自定义操作面板
  </Text>
</UPActionSheet>
```

```tsx
<UPActionSheet
  actions={actions3}
  description="这是一段描述文本,字号偏小,颜色偏淡"
  onClose={() => setActive(-1)}
  show={active === 3}
/>
<UPActionSheet onClose={() => setActive(-1)} round={10} show={active === 4} title="标题位置">
  <Text style={s.slotText}>
    这是一段通过slot传入的内容,您可以在此自定义操作面板
  </Text>
</UPActionSheet>
```

```tsx
<UPActionSheet onClose={() => setActive(-1)} round={10} show={active === 4} title="标题位置">
  <Text style={s.slotText}>
    这是一段通过slot传入的内容,您可以在此自定义操作面板
  </Text>
</UPActionSheet>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/feedback/ActionSheetDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPActionSheet } from '@ultra-ui'

<UPActionSheet
  show={current === 'base'}
  actions={BASE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'title'}
  title='分享到'
  actions={BASE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'desc'}
  description='请选择一种分享方式，分享后对方即可查看内容'
  actions={BASE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'titleDesc'}
  title='分享到'
  description='请选择一种分享方式'
  actions={BASE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'state'}
  title='选项状态'
  cancelText='取消'
  actions={STATE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'subname'}
  title='分享到'
  subnameKey='subname'
  actions={SUBNAME_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'customKey'}
  title='导出方式'
  nameKey='label'
  subnameKey='tips'
  cancelText='取消'
  actions={CUSTOM_KEY_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

```tsx
<UPActionSheet
  show={current === 'round'}
  title='圆角菜单'
  round={12}
  cancelText='取消'
  actions={BASE_ACTIONS}
  onSelect={onSelect}
  onChangeShow={close}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/action-sheet/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`title`(设置标题)，`cancelText`(取消按钮的文字，不为空时显示按钮)，`description`(选项上方的描述信息)
- 通过`actions`设置需要显示的菜单，该值为一个数组，元素为对象，对象至少要提供`name`属性，另外可选的有`subname`(描述)，`disabled`(是否禁用)，`loading`(加载动画)，
`color`(字体颜色)，`fontSize`(字体大小)，
- 通过`show`绑定一个值为布尔值的变量控制组件的弹出与收起，`show`的值是双向绑定的

```vue
<template>
	<view>
		<up-action-sheet :actions="list" :title="title" :show="show"></up-action-sheet>
		<up-button @click="show = true">打开ActionSheet</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const title = ref('标题');  
const list = ref([  
  {  
    name: '选项一',  
    subname: "选项一描述",  
    color: '#ffaa7f',  
    fontSize: '20'  
  },  
  {  
    name: '选项二禁用',  
    disabled: true  
  },  
  {  
    name: '开启load加载', // 开启后文字不显示  
    loading: true  
  }  
]);  
const show = ref(false);  
</script>
```

#### 配置点击遮罩关闭和点击某个菜单项时关闭弹窗

- 通过`closeOnClickAction`参数来配置点击某个菜单项时是否关闭弹窗。
- 通过`closeOnClickOverlay`参数配置点击遮罩是否允许关闭（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）

```vue
<template>
	<view>
		<up-action-sheet :actions="list" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title" :show="show"></up-action-sheet>
		<up-button @click="show = true">打开ActionSheet</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
const title = ref('标题');  
const list = ref([  
  { name: '选项一' },  
  { name: '选项二' }  
]);  
const show = ref(false);  
  
</script>
```

#### 点击获取所点击选项name

`select`回调事件带有一个`object`值，这个索引值为传递的`select`数组的name值，根据回调事件，能获得点击了
该项的内容

```vue
<template>
	<view>
		<up-action-sheet :actions="list" @select="selectClick" :title="title" :show="show"></up-action-sheet>
		<up-button @click="show = true">打开ActionSheet</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const title = ref('标题');  
const list = ref([  
  { name: '选项一' },  
  { name: '选项二' }  
]);  
const show = ref(false);
  
// 方法  
const selectClick = (index) => {  
  console.log(index);  
};  
</script>
```

#### 快捷组件使用

为了在up-form表单等场景下更方便的使用，减少代码量，可以使用up-action-sheet-data快捷组件，快捷组件由数据驱动，更贴近Vue组件的使用方式。
<Badge text="3.4.6" />以上版本

```vue
<template>
	<view>
		<up-action-sheet-data
			v-model="info.gender"
			title="请选择性别"
			:options="[
				{
					name: '男',
					value: 1,
				},
				{
					name: '女',
					value: 2,
				},
			]">
		</up-action-sheet-data>
	</view>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/actionSheet.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`title`(设置标题)，`cancelText`(取消按钮的文字，不为空时显示按钮)，`description`(选项上方的描述信息)
- 通过`actions`设置需要显示的菜单，该值为一个数组，元素为对象，对象至少要提供`name`属性，另外可选的有`subname`(描述)，`disabled`(是否禁用)，`loading`(加载动画)，
`color`(字体颜色)，`fontSize`(字体大小)，
- 通过`show`绑定一个值为布尔值的变量控制组件的弹出与收起，`show`的值是双向绑定的

```vue
<template>
	<view>
		<up-action-sheet :actions="list" :title="title" :show="show"></up-action-sheet>
		<up-button @click="show = true">打开ActionSheet</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const title = ref('标题');  
const list = ref([  
  {  
    name: '选项一',  
    subname: "选项一描述",  
    color: '#ffaa7f',  
    fontSize: '20'  
  },  
  {  
    name: '选项二禁用',  
    disabled: true  
  },  
  {  
    name: '开启load加载', // 开启后文字不显示  
    loading: true  
  }  
]);  
const show = ref(false);  
</script>
```

#### 配置点击遮罩关闭和点击某个菜单项时关闭弹窗

- 通过`closeOnClickAction`参数来配置点击某个菜单项时是否关闭弹窗。
- 通过`closeOnClickOverlay`参数配置点击遮罩是否允许关闭（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）

```vue
<template>
	<view>
		<up-action-sheet :actions="list" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title" :show="show"></up-action-sheet>
		<up-button @click="show = true">打开ActionSheet</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
const title = ref('标题');  
const list = ref([  
  { name: '选项一' },  
  { name: '选项二' }  
]);  
const show = ref(false);  
  
</script>
```

#### 点击获取所点击选项name

`select`回调事件带有一个`object`值，这个索引值为传递的`select`数组的name值，根据回调事件，能获得点击了
该项的内容

```vue
<template>
	<view>
		<up-action-sheet :actions="list" @select="selectClick" :title="title" :show="show"></up-action-sheet>
		<up-button @click="show = true">打开ActionSheet</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const title = ref('标题');  
const list = ref([  
  { name: '选项一' },  
  { name: '选项二' }  
]);  
const show = ref(false);
  
// 方法  
const selectClick = (index) => {  
  console.log(index);  
};  
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/actionSheet.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-action-sheet>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show` | 操作菜单是否展示 （默认false） | `Boolean` | `false` |
| `title` | 标题 | `String` | `''` |
| `description` | 选项上方的描述信息 | `String` | `''` |
| `actions` | 数据 | `Array` | `[]` |
| `cancelText` | 取消按钮的文字，不为空时显示按钮 | `String` | `''` |
| `closeOnClickAction` | 点击某个菜单项时是否关闭弹窗 | `Boolean` | `true` |
| `safeAreaInsetBottom` | 处理底部安全区（默认true） | `Boolean` | `true` |
| `openType` | 小程序的打开方式 | `String` | `''` |
| `closeOnClickOverlay` | 点击遮罩是否允许关闭 (默认true) | `Boolean` | `true` |
| `round` | 圆角值 | `Boolean / String / Number` | `0` |
| `wrapMaxHeight` | 选项区域最大高度 | `String` | `'600px'` |

#### 事件

| 事件名 |
| --- |
| `close` |
| `closed` |
| `contact` |
| `error` |
| `getphonenumber` |
| `getuserinfo` |
| `launchapp` |
| `opensetting` |
| `select` |
| `update:show` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-action-sheet-data>`

#### 插槽

| 插槽名 |
| --- |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPActionSheet` | `UltraUI/Sources/UltraUI/Components/UPActionSheet.swift` |
| Android · Jetpack Compose | `UPActionSheet` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPActionSheet.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPActionSheet` | `ultra-ui/src/main/ets/components/UPActionSheet.ets` |
| Flutter · Dart | `UPActionSheet` | `packages/ultra_ui/lib/src/widgets/up_action_sheet.dart` |
| React Native · TypeScript | `UPActionSheet` | `src/components/action-sheet` |
| Taro · React + TypeScript | `UPActionSheet` | `src/ultra-ui/components/up-action-sheet` |
| uni-app · Vue 3 | `up-action-sheet` | `uni_modules/uview-ultra/components/up-action-sheet` |
| uni-app-x · UTS / UVUE | `up-action-sheet` | `uni_modules/uview-ultra/components/up-action-sheet` |

