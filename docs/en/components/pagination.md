---
title: Pagination
description: Page navigation with prev/next and direct page jumps.
generated: true
---

# Pagination

Page navigation with prev/next and direct page jumps.

<PlatformBadges component="pagination" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPPagination
import net.lingyun.ultraui.android.components.UPPaginationProps

DemoSection("分页") { UPPagination(UPPaginationProps(total = 42))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/pagination_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/PaginationDemo.tsx`</small>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/pagination/index.tsx`</small>

</template>

<template #uniapp>

#### 基础

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

#### 上一页下一页文案

```vue
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
```

#### 显示分页切换

```vue
<up-pagination
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    :page-sizes="pageSizes"
    layout="prev, pager, next"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/pagination/pagination.uvue`</small>

</template>

<template #uniappx>

#### 基础

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

#### 上一页下一页文案

```vue
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
```

#### 显示分页切换

```vue
<up-pagination
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    :page-sizes="pageSizes"
    layout="prev, pager, next"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/pagination/pagination.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `current-change` |
| `size-change` |
| `update:currentPage` |
| `update:pageSize` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPPagination` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPickerComponents.kt` |
| Flutter · Dart | `UPPagination` | `packages/ultra_ui/lib/src/widgets/up_pagination.dart` |
| React Native · TypeScript | `UPPagination` | `src/components/pagination` |
| Taro · React + TypeScript | `UPPagination` | `src/ultra-ui/components/up-pagination` |
| uni-app · Vue 3 | `up-pagination` | `uni_modules/uview-ultra/components/up-pagination` |
| uni-app-x · UTS / UVUE | `up-pagination` | `uni_modules/uview-ultra/components/up-pagination` |

