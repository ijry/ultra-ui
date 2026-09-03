---
title: Action sheet
description: A bottom action list with title, description and destructive styling.
generated: true
---

# Action sheet

A bottom action list with title, description and destructive styling.

<PlatformBadges component="action-sheet" show-missing />

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NativeInteractionDemoPage.kt`</small>

</template>

<template #harmony>

#### Action panel

```typescript
import { UPActionSheet, UPActionSheetProps } from '@lingyun/ultra-ui-hos';

UPActionSheet({ props: new UPActionSheetProps({
  show: this.show, title: '本地操作', description: '禁用项和加载项不会触发选择', actions: this.actions, round: 12,
  onShowChange: (show: boolean): void => { this.show = show; },
  onSelect: (event: UPActionSheetSelectEvent): void => { this.message = '已选择第 ' + String(event.index + 1) + ' 项'; },
  onCancel: (): void => { this.message = '已取消'; }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/ActionSheetDemo.ets`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/action_sheet_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/feedback/ActionSheetDemo.tsx`</small>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/action-sheet/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

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

#### Closing on mask tap or option tap

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

#### Reading the tapped option name

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

#### Using the shorthand component

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/actionSheet.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### Closing on mask tap or option tap

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

#### Reading the tapped option name

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/actionSheet.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-action-sheet>`

#### Props

| Prop | Description | Type | Default |
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

#### Events

| Event |
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

#### Slots

| Slot |
| --- |
| `default` |

### `<up-action-sheet-data>`

#### Slots

| Slot |
| --- |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPActionSheet` | `UltraUI/Sources/UltraUI/Components/UPActionSheet.swift` |
| Android · Jetpack Compose | `UPActionSheet` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPActionSheet.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPActionSheet` | `ultra-ui/src/main/ets/components/UPActionSheet.ets` |
| Flutter · Dart | `UPActionSheet` | `packages/ultra_ui/lib/src/widgets/up_action_sheet.dart` |
| React Native · TypeScript | `UPActionSheet` | `src/components/action-sheet` |
| Taro · React + TypeScript | `UPActionSheet` | `src/ultra-ui/components/up-action-sheet` |
| uni-app · Vue 3 | `up-action-sheet` | `uni_modules/uview-ultra/components/up-action-sheet` |
| uni-app-x · UTS / UVUE | `up-action-sheet` | `uni_modules/uview-ultra/components/up-action-sheet` |

