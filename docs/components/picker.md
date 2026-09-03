---
title: Picker 选择器
description: 单列或多列的滚动选择器，支持联动数据。
generated: true
---

# Picker 选择器

单列或多列的滚动选择器，支持联动数据。

<PlatformBadges component="picker" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPicker
import net.lingyun.ultraui.android.components.UPPickerProps

DemoSection("选择器") { UPPicker(UPPickerProps(show = true, title = "城市", columns = listOf(listOf(mapOf("text" to "北京", "value" to "bj")))))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPicker(
  key: const ValueKey('picker-page-basic'),
  show: _activePicker == 0,
  columns: <List<dynamic>>[_countries],
  toolbarRightSlot: true,
  toolbarRight: const Padding(
    padding: EdgeInsets.symmetric(horizontal: 15),
    child: Text('右侧'),
  ),
  pageInline: false,
  onConfirm: _confirmBasic,
  onCancel: () => _close(0),
  onClose: () => _close(0),
  onUpdateShow: (show) => _updateShow(0, show),
)
```

```dart
UPPicker(
  key: const ValueKey('picker-page-default'),
  show: _activePicker == 1,
  columns: <List<dynamic>>[_countries],
  defaultIndex: const <int>[1],
  onConfirm: _confirmDefault,
  onCancel: () => _close(1),
  onClose: () => _close(1),
  onUpdateShow: (show) => _updateShow(1, show),
)
```

```dart
UPPicker(
  key: const ValueKey('picker-page-title'),
  show: _activePicker == 4,
  title: '标题太长就会显示省略号',
  value: const <dynamic>['日本'],
  columns: <List<dynamic>>[_countries],
  toolbarBottom: Padding(
    padding: const EdgeInsets.only(bottom: 8),
    child: Text('对象值示例：${_fruitOptions.first['label']}'),
  ),
  onConfirm: (_, __) => _close(4),
  onCancel: () => _close(4),
  onClose: () => _close(4),
  onUpdateShow: (show) => _updateShow(4, show),
)
```

```dart
UPPicker(
  key: const ValueKey('picker-page-overlay'),
  show: _activePicker == 5,
  columns: <List<dynamic>>[_countries],
  closeOnClickOverlay: true,
  onConfirm: (_, __) => _close(5),
  onCancel: () => _close(5),
  onClose: () => _close(5),
  onUpdateShow: (show) => _updateShow(5, show),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/picker_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPicker } from 'ultra-ui-rn';

<UPPicker
  columns={[['中国', '美国', '日本']]}
  defaultIndex={[1]}
  onCancel={close}
  onChange={change}
  onConfirm={close}
  show={active === 2}
/>
```

```tsx
<UPPicker
  columns={[['中国', '美国'], ['深圳', '厦门', '上海', '拉萨']]}
  onCancel={close}
  onChange={changeHandler1}
  onConfirm={close}
  ref={picker3}
  show={active === 3}
/>
```

```tsx
<UPPicker
  columns={[['中国', '美国'], ['深圳', '厦门', '上海', '拉萨']]}
  loading={loading}
  onCancel={close}
  onChange={changeHandler2}
  onConfirm={close}
  ref={picker4}
  show={active === 4}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/form/PickerDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPPicker } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 基本使用

- 通过`show`绑定一个布尔值变量，用于控制组件的弹出与收起。
- 都通过传入数组`columns`配置选择项。

```vue
<template>
	<view>
		<up-picker :show="show" :columns="columns"></up-picker>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(false);
const columns = reactive([
  ['中国', '美国', '日本']
]);
</script>
```

#### 单选快捷组件使用

为了在up-form表单等场景下更方便的使用，减少代码量，可以使用up-picker-data快捷组件(目前适用于单选，类似下拉框的功能)，快捷组件由数据驱动，更贴近Vue组件的使用方式。
<Badge text="3.4.6" />以上版本

```vue
<template>
	<view>
		<up-picker-data
        v-model="info.cate"
        title="请选择文章分类"
        :options="cateList"
        valueKey="id"
        labelKey="name">
    </up-picker-data>
	</view>
</template>
<script setup>
import {ref} from 'vue'
// 注意这里只需要一层数组，与基础用法不一样，基础用法是两层数组。
const cateList = ref([
  {
    'id' => 1,
    'name' => '分类1'
  },
  {
    'id' => 2,
    'name' => '分类2'
  }

])
</script
```

#### 多列模式与多列联动

此模式通过传入`columns`参数，此参数为二维数组，通过`change`事件完成联动操作。

```vue
<template>
    <up-picker :show="show" ref="uPickerRef" :columns="columns" @confirm="confirm" @change="changeHandler"></up-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);
const columnData = reactive([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
]);

const uPickerRef = ref(null)
const changeHandler = (e) => {
  const {
    columnIndex,
    value,
    values,
    index,
  } = e;

  if (columnIndex === 0) {
    uPickerRef.value.setColumnValues(1, columnData[index]);
  }
};

const confirm = (e) => {
  console.log('confirm', e);
  show.value = false;
};
</script>
```

#### 加载状态

由于需要多列联动，此模式和上面的"多列模式"基本相同，在加载之前将`loading`设置为`true`，数据获取完成之后再置为`false`即可。

```vue
<template>
    <up-picker :show="show" ref="uPickerRef" :loading="loading" :columns="columns" @change="changeHandler"></up-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const loading = ref(false);
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);
const columnData = reactive([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
]);

const uPickerRef = ref(null)
const changeHandler = (e) => {
  const {
    columnIndex,
    index,
    picker
  } = e;

  if (columnIndex === 0) {
    loading.value = true;
    // 模拟网络请求
    setTimeout(() => {
      uPickerRef.value.setColumnValues(1, columnData[index]);
      loading.value = false;
    }, 1500);
  }
};
</script>
```

#### 自定义选项值

参数`columns`可以传入自定义选项值，可以通过`keyName`和`valueName`参数控制对应的显示属性及双向绑定值属性。

```vue
<template>
    <up-cell
				@click="show = true"
				title="双向绑定"
				isLink
			>
				<template #value>
					<view>
						{{selected.join('|')}}
					</view>
				</template>
		</up-cell>
    <up-picker v-model:show="show" v-model="selected" :columns="columns" keyName="label" valueName="id"></up-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const selected = ref([804]);
const columns = reactive([
  [
    {
      label: '雪月夜',
      // 其他属性值
      id: 2021
      // ...
    },
    {
      label: '冷夜雨',
      id: 804
    }
  ]
]);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/picker.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`show`绑定一个布尔值变量，用于控制组件的弹出与收起。
- 都通过传入数组`columns`配置选择项。

```vue
<template>
	<view>
		<up-picker :show="show" :columns="columns"></up-picker>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(false);
const columns = reactive([
  ['中国', '美国', '日本']
]);
</script>
```

#### 多列模式与多列联动

此模式通过传入`columns`参数，此参数为二维数组，通过`change`事件完成联动操作。

```vue
<template>
    <up-picker :show="show" ref="uPickerRef" :columns="columns" @confirm="confirm" @change="changeHandler"></up-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);
const columnData = reactive([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
]);

const uPickerRef = ref(null)
const changeHandler = (e) => {
  const {
    columnIndex,
    value,
    values,
    index,
  } = e;

  if (columnIndex === 0) {
    uPickerRef.value.setColumnValues(1, columnData[index]);
  }
};

const confirm = (e) => {
  console.log('confirm', e);
  show.value = false;
};
</script>
```

#### 加载状态

由于需要多列联动，此模式和上面的"多列模式"基本相同，在加载之前将`loading`设置为`true`，数据获取完成之后再置为`false`即可。

```vue
<template>
    <up-picker :show="show" ref="uPickerRef" :loading="loading" :columns="columns" @change="changeHandler"></up-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const loading = ref(false);
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);
const columnData = reactive([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
]);

const uPickerRef = ref(null)
const changeHandler = (e) => {
  const {
    columnIndex,
    index,
    picker
  } = e;

  if (columnIndex === 0) {
    loading.value = true;
    // 模拟网络请求
    setTimeout(() => {
      uPickerRef.value.setColumnValues(1, columnData[index]);
      loading.value = false;
    }, 1500);
  }
};
</script>
```

#### 自定义选项值

参数`columns`可以传入自定义选项值，可以通过`keyName`参数控制对应的显示属性。

```vue
<template>
    <up-picker :show="show" :columns="columns" keyName="label"></up-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
  [
    {
      label: '雪月夜',
      // 其他属性值
      id: 2021
      // ...
    },
    {
      label: '冷夜雨',
      id: 804
    }
  ]
]);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/picker.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-picker>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | — | `Array` | `—` |
| `hasInput` | — | `Boolean` | `—` |
| `placeholder` | — | `String` | `—` |
| `show` | 是否展示picker弹窗 | `Boolean` | `false` |
| `popupMode` | 弹出的方向，可选值为 top bottom right left center | `String` | `'bottom'` |
| `showToolbar` | 是否展示顶部的操作栏 | `Boolean` | `true` |
| `title` | 顶部标题 | `String` | `''` |
| `columns` | 对象数组，设置每一列的数据 | `Array` | `[]` |
| `loading` | 是否显示加载中状态 | `Boolean` | `false` |
| `itemHeight` | 各列中，单个选项的高度 | `String / Number` | `44` |
| `cancelText` | 取消按钮的文字 | `String` | `'取消'` |
| `confirmText` | 确认按钮的文字 | `String` | `'确定'` |
| `cancelColor` | 取消按钮的颜色 | `String` | `'#909193'` |
| `confirmColor` | 确认按钮的颜色 | `String` | `'#3c9cff'` |
| `visibleItemCount` | 每列中可见选项的数量 | `String / Number` | `5` |
| `keyName` | 选项对象中，需要展示的属性键名 | `String` | `'text'` |
| `closeOnClickOverlay` | 是否允许点击遮罩关闭选择器 | `Boolean` | `false` |
| `defaultIndex` | 各列的默认索引 | `Array` | `[]` |
| `immediateChange` | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效 | `Boolean` | `true` |
| `toolbarRightSlot` | 工具栏右侧插槽是否开启 | `Boolean` | `—` |
| `pageInline` | 是否内联在页面中（不使用弹窗形式） | `Boolean` | `false` |

#### 事件

| 事件名 |
| --- |
| `cancel` |
| `change` |
| `close` |
| `closed` |
| `confirm` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `toolbar-bottom` |
| `toolbar-right` |

### `<up-picker-data>`

#### 事件

| 事件名 |
| --- |
| `cancel` |
| `close` |
| `closed` |
| `confirm` |

#### 插槽

| 插槽名 |
| --- |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPicker` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPPicker` | `packages/ultra_ui/lib/src/widgets/up_picker.dart` |
| React Native · TypeScript | `UPPicker` | `src/components/picker` |
| Taro · React + TypeScript | `UPPicker` | `src/ultra-ui/components/up-picker` |
| uni-app · Vue 3 | `up-picker` | `uni_modules/uview-ultra/components/up-picker` |
| uni-app-x · UTS / UVUE | `up-picker` | `uni_modules/uview-ultra/components/up-picker` |

