---
title: Cascader
description: A cascading picker for tree data such as regions or categories.
generated: true
---

# Cascader

A cascading picker for tree data such as regions or categories.

<PlatformBadges component="cascader" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/SelectionNavigationDemoPage.kt`</small>

</template>

<template #flutter>

#### Basic usage

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

#### With a default value

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

#### Custom field names

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

#### Vertical header with a single column

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/cascader_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCascader } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCascader } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### Basic usage

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

#### Setting a default value

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

#### Custom field names

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

#### Vertical header with a single column

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

#### Closing automatically

```vue
<up-cascader 
	v-model:show="show"
	v-model="value"
	:data="areaData"
	:auto-close="true"
></up-cascader>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/cascader.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### Setting a default value

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

#### Custom field names

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

#### Vertical header with a single column

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

#### Closing automatically

```vue
<up-cascader 
	v-model:show="show"
	v-model="value"
	:data="areaData"
	:auto-close="true"
></up-cascader>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/cascader.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `cancel` |
| `change` |
| `confirm` |
| `update:show` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPCascader` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPCascaderComponents.kt` |
| Flutter · Dart | `UPCascader` | `packages/ultra_ui/lib/src/widgets/up_cascader.dart` |
| React Native · TypeScript | `UPCascader` | `src/components/cascader` |
| Taro · React + TypeScript | `UPCascader` | `src/ultra-ui/components/up-cascader` |
| uni-app · Vue 3 | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |
| uni-app-x · UTS / UVUE | `up-cascader` | `uni_modules/uview-ultra/components/up-cascader` |

