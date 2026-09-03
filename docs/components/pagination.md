---
title: Pagination 分页器
description: 分页导航控件，支持上下页与页码跳转。
generated: true
---

# Pagination 分页器

分页导航控件，支持上下页与页码跳转。

<PlatformBadges component="pagination" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/pagination_page.dart`</small>

</template>

<template #reactnative>

### 基础

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

### 上一页下一页文案

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

### 显示分页切换

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

### 基础用法

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

### 图标箭头

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

### 禁用

disabled 整体禁止交互

```tsx
<UPPagination total={100} pageSize={10} current={3} disabled />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/pagination/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-pagination
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    :page-sizes="pageSizes"
    layout="prev, total, next"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/pagination/pagination.uvue`</small>

</template>

<template #uniappx>

```vue
<up-pagination
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    :page-sizes="pageSizes"
    layout="prev, total, next"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/pagination/pagination.uvue`</small>

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

