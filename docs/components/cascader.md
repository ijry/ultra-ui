---
title: Cascader 级联选择
description: 多级联动选择器，常用于省市区、分类等树形数据。
generated: true
---

# Cascader 级联选择

多级联动选择器，常用于省市区、分类等树形数据。

<PlatformBadges component="cascader" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPCascader
import net.lingyun.ultraui.android.components.UPCascaderProps

UPCascader(
    props = UPCascaderProps(show = true, data = cascaderData, modelValue = cascaderValue),
    onUpdateModelValue = { cascaderValue = it },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCascader(
  show: _show1,
  data: _areaData,
  // Source keys results by label in this demo.
  valueKey: 'label',
  value: _result1,
  onUpdateShow: (value) => setState(() => _show1 = value),
  onUpdateModelValue: (value) =>
      setState(() => _result1 = value),
)
```

#### 带默认值

```dart
UPCascader(
  show: _show2,
  data: _categoryData,
  headerDirection: 'column',
  value: _defaultCategory,
  onUpdateShow: (value) => setState(() => _show2 = value),
  onConfirm: (value) => setState(() => _result2 = value),
)
```

#### 自定义字段名

```dart
UPCascader(
  show: _show3,
  data: _orgData,
  valueKey: 'id',
  labelKey: 'name',
  childrenKey: 'childs',
  onUpdateShow: (value) => setState(() => _show3 = value),
  onConfirm: (value) => setState(() => _result3 = value),
)
```

#### 垂直头部及单列选项

```dart
UPCascader(
  show: _show4,
  data: _categoryData,
  headerDirection: 'column',
  optionsCols: 1,
  value: _defaultCategory,
  onUpdateShow: (value) => setState(() => _show4 = value),
  onConfirm: (value) => setState(() => _result4 = value),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/cascader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCascader } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCascader } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 基本使用

- 通过 `data` 设置级联数据
- 通过 `v-model` 绑定选中的值
- 通过 `v-model:show` 控制组件显示与隐藏

```vue
<template>
	<view>
		<up-button @click="show = true">选择地区</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			:data="areaData"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref([]);

const areaData = ref([
	{
		label: '北京市',
		value: '11',
		children: [
			{
				label: '北京市',
				value: '1101',
				children: [
					{ label: '东城区', value: '110101' },
					{ label: '西城区', value: '110102' },
					{ label: '朝阳区', value: '110105' }
				]
			}
		]
	}
]);
</script>
```

#### 设置默认值

通过 `v-model` 可以设置默认选中值。

```vue
<template>
	<view>
		<up-button @click="show = true">选择商品分类</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			:data="categoryData"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref(['2', '2-2']); // 默认选中"数码" -> "电脑"

const categoryData = ref([
	{
		label: '服装',
		value: '1',
		children: [
			{
				label: '上装',
				value: '1-1',
				children: [
					{ label: 'T恤', value: '1-1-1' },
					{ label: '衬衫', value: '1-1-2' }
				]
			}
		]
	},
	{
		label: '数码',
		value: '2',
		children: [
			{
				label: '电脑',
				value: '2-2',
				children: [
					{ label: '笔记本', value: '2-2-1' },
					{ label: '台式机', value: '2-2-2' }
				]
			}
		]
	}
]);
</script>
```

#### 自定义字段名

通过 `value-key`、`label-key`、`children-key` 可自定义数据字段名。

```vue
<template>
	<view>
		<up-button @click="show = true">选择组织架构</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			:data="orgData"
			value-key="id"
			label-key="name"
			children-key="childs"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref([]);

const orgData = ref([
	{
		name: '总部',
		id: '1',
		childs: [
			{
				name: '研发部',
				id: '1-1',
				childs: [
					{ name: '前端组', id: '1-1-1' },
					{ name: '后端组', id: '1-1-2' }
				]
			}
		]
	}
]);
</script>
```

#### 垂直头部及单列选项

如果选项的文案较长，可以配置headerDirection="column"和:optionsCols="1"来展示

```vue
<template>
	<view>
		<up-button @click="show = true">选择商品分类</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			headerDirection="column"
            :optionsCols="1"
			:data="categoryData"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref(['2', '2-2']); // 默认选中"数码" -> "电脑"

const categoryData = ref([
	{
		label: '服装',
		value: '1',
		children: [
			{
				label: '上装',
				value: '1-1',
				children: [
					{ label: 'T恤', value: '1-1-1' },
					{ label: '衬衫', value: '1-1-2' }
				]
			}
		]
	},
	{
		label: '数码',
		value: '2',
		children: [
			{
				label: '电脑',
				value: '2-2',
				children: [
					{ label: '笔记本', value: '2-2-1' },
					{ label: '台式机', value: '2-2-2' }
				]
			}
		]
	}
]);
</script>
```

#### 自动关闭

通过 `auto-close` 设置是否在选择最后一级时自动关闭并触发 confirm 事件。

```vue
<up-cascader 
	v-model:show="show"
	v-model="value"
	:data="areaData"
	:auto-close="true"
></up-cascader>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/cascader.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过 `data` 设置级联数据
- 通过 `v-model` 绑定选中的值
- 通过 `v-model:show` 控制组件显示与隐藏

```vue
<template>
	<view>
		<up-button @click="show = true">选择地区</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			:data="areaData"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref([]);

const areaData = ref([
	{
		label: '北京市',
		value: '11',
		children: [
			{
				label: '北京市',
				value: '1101',
				children: [
					{ label: '东城区', value: '110101' },
					{ label: '西城区', value: '110102' },
					{ label: '朝阳区', value: '110105' }
				]
			}
		]
	}
]);
</script>
```

#### 设置默认值

通过 `v-model` 可以设置默认选中值。

```vue
<template>
	<view>
		<up-button @click="show = true">选择商品分类</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			:data="categoryData"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref(['2', '2-2']); // 默认选中"数码" -> "电脑"

const categoryData = ref([
	{
		label: '服装',
		value: '1',
		children: [
			{
				label: '上装',
				value: '1-1',
				children: [
					{ label: 'T恤', value: '1-1-1' },
					{ label: '衬衫', value: '1-1-2' }
				]
			}
		]
	},
	{
		label: '数码',
		value: '2',
		children: [
			{
				label: '电脑',
				value: '2-2',
				children: [
					{ label: '笔记本', value: '2-2-1' },
					{ label: '台式机', value: '2-2-2' }
				]
			}
		]
	}
]);
</script>
```

#### 自定义字段名

通过 `value-key`、`label-key`、`children-key` 可自定义数据字段名。

```vue
<template>
	<view>
		<up-button @click="show = true">选择组织架构</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			:data="orgData"
			value-key="id"
			label-key="name"
			children-key="childs"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref([]);

const orgData = ref([
	{
		name: '总部',
		id: '1',
		childs: [
			{
				name: '研发部',
				id: '1-1',
				childs: [
					{ name: '前端组', id: '1-1-1' },
					{ name: '后端组', id: '1-1-2' }
				]
			}
		]
	}
]);
</script>
```

#### 垂直头部及单列选项

如果选项的文案较长，可以配置headerDirection="column"和:optionsCols="1"来展示

```vue
<template>
	<view>
		<up-button @click="show = true">选择商品分类</up-button>
		<up-cascader 
			v-model:show="show"
			v-model="value"
			headerDirection="column"
            :optionsCols="1"
			:data="categoryData"
		></up-cascader>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref(['2', '2-2']); // 默认选中"数码" -> "电脑"

const categoryData = ref([
	{
		label: '服装',
		value: '1',
		children: [
			{
				label: '上装',
				value: '1-1',
				children: [
					{ label: 'T恤', value: '1-1-1' },
					{ label: '衬衫', value: '1-1-2' }
				]
			}
		]
	},
	{
		label: '数码',
		value: '2',
		children: [
			{
				label: '电脑',
				value: '2-2',
				children: [
					{ label: '笔记本', value: '2-2-1' },
					{ label: '台式机', value: '2-2-2' }
				]
			}
		]
	}
]);
</script>
```

#### 自动关闭

通过 `auto-close` 设置是否在选择最后一级时自动关闭并触发 confirm 事件。

```vue
<up-cascader 
	v-model:show="show"
	v-model="value"
	:data="areaData"
	:auto-close="true"
></up-cascader>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/cascader.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `cancel` |
| `change` |
| `confirm` |
| `update:show` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPCascader` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCascaderComponents.kt` |
| Flutter · Dart | `UPCascader` | `packages/ultra_ui/lib/src/widgets/up_cascader.dart` |
| React Native · TypeScript | `UPCascader` | `src/components/cascader` |
| Taro · React + TypeScript | `UPCascader` | `src/ultra-ui/components/up-cascader` |
| uni-app · Vue 3 | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |
| uni-app-x · UTS / UVUE | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |

