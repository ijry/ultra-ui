---
title: Pagination 分页器
description: 分页导航控件，支持上下页与页码跳转。
generated: true
---

# Pagination 分页器

分页导航控件，支持上下页与页码跳转。

<PlatformBadges component="pagination" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPagination
import net.lingyun.ultraui.android.components.UPPaginationProps

DemoSection("分页") { UPPagination(UPPaginationProps(total = 42))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #flutter>

#### 基础

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPagination(
  key: const ValueKey('pagination-page-basic'),
  currentPage: _currentPage,
  pageSize: _pageSize,
  total: _total,
  pageSizes: _pageSizes,
  layout: 'prev, total, next',
  onCurrentChange: _handleCurrentChange,
  onSizeChange: _handleSizeChange,
)
```

#### 上一页下一页文案

```dart
UPPagination(
  key: const ValueKey('pagination-page-text'),
  prevText: '上一页',
  nextText: '下一页',
  currentPage: _currentPage,
  pageSize: _pageSize,
  total: _total,
  pageSizes: _pageSizes,
  layout: 'prev, total, next',
  onCurrentChange: _handleCurrentChange,
  onSizeChange: _handleSizeChange,
)
```

#### 显示分页切换

```dart
UPPagination(
  key: const ValueKey('pagination-page-pager'),
  currentPage: _currentPage,
  pageSize: _pageSize,
  total: _total,
  pageSizes: _pageSizes,
  layout: 'prev, pager, next',
  onCurrentChange: _handleCurrentChange,
  onSizeChange: _handleSizeChange,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/pagination_page.dart`</small>

</template>

<template #reactnative>

#### 基础

```tsx
import { UPPagination } from 'ultra-ui-rn';

<UPPagination
  currentPage={currentPage}
  layout="prev, total, next"
  onCurrentChange={handleCurrentChange}
  onSizeChange={handleSizeChange}
  pageSize={pageSize}
  pageSizes={pageSizes}
  total={100}
/>
```

#### 上一页下一页文案

```tsx
<UPPagination
  currentPage={currentPage}
  layout="prev, total, next"
  nextText="下一页"
  onCurrentChange={handleCurrentChange}
  onSizeChange={handleSizeChange}
  pageSize={pageSize}
  pageSizes={pageSizes}
  prevText="上一页"
  total={100}
/>
```

#### 显示分页切换

```tsx
<UPPagination
  currentPage={currentPage}
  layout="prev, pager, next"
  onCurrentChange={handleCurrentChange}
  onSizeChange={handleSizeChange}
  pageSize={pageSize}
  pageSizes={pageSizes}
  total={100}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/navigation/PaginationDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

total / pageSize / current 受控

```tsx
import { UPPagination } from '@ultra-ui'

<UPPagination
  total={100}
  pageSize={10}
  current={current}
  onChange={setCurrent}
/>
```

#### 图标箭头

icon 开启 prev/next 箭头

```tsx
<UPPagination
  total={200}
  pageSize={20}
  current={iconCurrent}
  icon
  onChange={setIconCurrent}
/>
```

#### 禁用

disabled 整体禁止交互

```tsx
<UPPagination total={100} pageSize={10} current={3} disabled />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/pagination/index.tsx`</small>

</template>

<template #uniapp>

#### 使用示例

```vue
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__title">基础</view>
			<view class="u-demo-block__content">
				<up-pagination
				    :current-page="currentPage"
				    :page-size="pageSize"
				    :total="total"
				    :page-sizes="pageSizes"
				    layout="prev, total, next"
				    @current-change="handleCurrentChange"
				    @size-change="handleSizeChange"
				  />
			</view>
		</view>
		<view class="u-demo-block">
			<view class="u-demo-block__title">上一页下一页文案</view>
			<view class="u-demo-block__content">
				<up-pagination
					prevText="上一页"
					nextText="下一页"
				    :current-page="currentPage"
				    :page-size="pageSize"
				    :total="total"
				    :page-sizes="pageSizes"
				    layout="prev, total, next"
				    @current-change="handleCurrentChange"
				    @size-change="handleSizeChange"
				  />
			</view>
		</view>
		<view class="u-demo-block">
			<view class="u-demo-block__title">显示分页切换</view>
			<view class="u-demo-block__content">
				<up-pagination
				    :current-page="currentPage"
				    :page-size="pageSize"
				    :total="total"
				    :page-sizes="pageSizes"
				    layout="prev, pager, next"
				    @current-change="handleCurrentChange"
				    @size-change="handleSizeChange"
				  />
			</view>
		</view>
	</view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);

const handleCurrentChange = (page) => {
  console.log('当前页:', page);
  currentPage.value = page;
};

const handleSizeChange = (size) => {
  console.log('每页条数:', size);
  pageSize.value = size;
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/pagination.md`</small>

</template>

<template #uniappx>

#### 使用示例

```vue
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__title">基础</view>
			<view class="u-demo-block__content">
				<u-pagination
				    :current-page="currentPage"
				    :page-size="pageSize"
				    :total="total"
				    :page-sizes="pageSizes"
				    layout="prev, total, next"
				    @current-change="handleCurrentChange"
				    @size-change="handleSizeChange"
				  />
			</view>
		</view>
		<view class="u-demo-block">
			<view class="u-demo-block__title">上一页下一页文案</view>
			<view class="u-demo-block__content">
				<u-pagination
					prevText="上一页"
					nextText="下一页"
				    :current-page="currentPage"
				    :page-size="pageSize"
				    :total="total"
				    :page-sizes="pageSizes"
				    layout="prev, total, next"
				    @current-change="handleCurrentChange"
				    @size-change="handleSizeChange"
				  />
			</view>
		</view>
		<view class="u-demo-block">
			<view class="u-demo-block__title">显示分页切换</view>
			<view class="u-demo-block__content">
				<u-pagination
				    :current-page="currentPage"
				    :page-size="pageSize"
				    :total="total"
				    :page-sizes="pageSizes"
				    layout="prev, pager, next"
				    @current-change="handleCurrentChange"
				    @size-change="handleSizeChange"
				  />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  currentPage: 1,
			  pageSize: 10,
			  total: 100
			}
		},
		methods: {
			handleCurrentChange(page) {
			  console.log('当前页:', page);
			  this.currentPage = page;
			},
			handleSizeChange(size) {
			  console.log('每页条数:', size);
			  this.pageSize = size;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
</style>
```

## ### 📄 Props 参数说明

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| currentPage | 当前页码 | `Number` | `1` | - |
| pageSize | 每页条目数 | `Number` | `10` | - |
| total | 总数据条目数 | `Number` | `0` | - |
| prevText | 上一页按钮自定义文本 | `String` | `''` | - |
| nextText | 下一页按钮自定义文本 | `String` | `''` | - |
| buttonBgColor | 分页按钮的背景颜色 | `String` | `#f5f7fa` | - |
| buttonBorderColor | 分页按钮的边框颜色 | `String` | `#dcdfe6` | - |
| pageSizes | 每页显示条目个数选择器的选项 | `Array` | `[10, 20, 30, 40, 50]` | - |
| layout | 组件布局，子组件名用逗号分隔。支持：`prev`, `pager`, `next`, `total` | `String` | `'prev, pager, next'` | - |
| hideOnSinglePage | 是否在只有一页时隐藏分页器 | `Boolean` | `false` | `true / false` |

---

## ### 📢 Events 事件说明

| 事件名 | 说明 | 参数 |
|--------|------|------|
| @update:currentPage | 页码改变时触发（v-model） | `page` |
| @update:pageSize | 每页数量改变时触发（v-model） | `size` |
| @current-change | 页码改变时触发 | `page` |
| @size-change | 每页条目数改变时触发 | `size` |

---

## ### 🧩 插槽说明（Slot）

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 默认插槽（暂未使用） | - |

---

## ✅ 支持的 layout 项

| layout 项 | 说明 |
|----------|------|
| `prev` | 上一页按钮 |
| `pager` | 页码列表 |
| `next` | 下一页按钮 |
| `total` | 显示总页数信息 |

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/pagination.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `current-change` |
| `size-change` |
| `update:currentPage` |
| `update:pageSize` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPagination` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPPagination` | `packages/ultra_ui/lib/src/widgets/up_pagination.dart` |
| React Native · TypeScript | `UPPagination` | `src/components/pagination` |
| Taro · React + TypeScript | `UPPagination` | `src/ultra-ui/components/up-pagination` |
| uni-app · Vue 3 | `up-pagination` | `uni_modules/uview-ultra/components/up-pagination` |
| uni-app-x · UTS / UVUE | `up-pagination` | `uni_modules/uview-ultra/components/up-pagination` |

