---
title: Drag sort 拖拽排序
description: 长按拖动重新排序的列表或宫格。
generated: true
---

# Drag sort 拖拽排序

长按拖动重新排序的列表或宫格。

<PlatformBadges component="dragsort" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 单列多行模式

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPDragSort(
  key: const ValueKey('dragsort-page-vertical'),
  initialList: _list,
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) =>
      _item(tokens, item, index: index),
)
```

#### 自定义拖动句柄

```dart
UPDragSort(
  key: const ValueKey('dragsort-page-handler'),
  initialList: _list,
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) =>
      _item(tokens, item, index: index),
  // Source `handler` slot: a grip drawn beside each row.
  handlerBuilder: (context, item, index) => Container(
    width: 24,
    alignment: Alignment.center,
    child: Container(
      width: 14,
      height: 3,
      decoration: BoxDecoration(
        color: tokens.tipsColor,
        borderRadius: BorderRadius.circular(2),
      ),
    ),
  ),
)
```

#### 多行多列模式

```dart
UPDragSort(
  key: const ValueKey('dragsort-page-grid'),
  initialList: _list,
  draggable: true,
  columns: 3,
  direction: 'all',
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) => _item(tokens, item),
)
```

#### 单行横向拖动

```dart
UPDragSort(
  key: const ValueKey('dragsort-page-horizontal'),
  initialList: _list2,
  draggable: true,
  direction: 'horizontal',
  onDragEnd: _handleDragEnd,
  itemBuilder: (context, item, index) => _item(tokens, item),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/dragsort_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPDragsort } from 'ultra-ui-rn';

<UPDragsort initialList={list} onDragEnd={handleDragEnd}>
  {({ item, index }) => (
    <View style={s.customItem}>
      <Text>序号：{index + 1}</Text>
      <Text> - </Text>
      <Text>{item.label}</Text>
    </View>
  )}
</UPDragsort>
```

```tsx
<UPDragsort
  initialList={list}
  onDragEnd={handleDragEnd}
  renderHandler={() => (
    <View style={s.customItemHandler}>
      <View style={s.handle} />
    </View>
  )}
>
  {({ item, index }) => (
    <View style={s.customItem}>
      <Text>序号：{index + 1}</Text>
      <Text> - </Text>
      <Text>{item.label}</Text>
    </View>
  )}
</UPDragsort>
```

```tsx
<UPDragsort
  columns={3}
  direction="all"
  draggable
  initialList={list}
  onDragEnd={handleDragEnd}
>
  {({ item }) => (
    <View style={s.wrapper}>
      <View style={s.customItemH}>
        <Text>{item.label}</Text>
      </View>
    </View>
  )}
</UPDragsort>
```

```tsx
<UPDragsort
  direction="horizontal"
  draggable
  initialList={list2}
  onDragEnd={handleDragEnd}
>
  {({ item }) => (
    <View style={s.wrapper}>
      <View style={s.customItemH}>
        <Text>{item.label}</Text>
      </View>
    </View>
  )}
</UPDragsort>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/DragsortDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

长按并上下拖拽「列表」图标即可重排

```tsx
import { UPDragsort } from '@ultra-ui'

<UPDragsort list={plain} onChange={setPlain} />
```

#### 对象数组

每个条目带 key / label，拖拽后顺序写回数据源

```tsx
<UPDragsort list={objects} onChange={setObjects} />
```

#### 禁用态

draggable=false 时不可拖拽

```tsx
<UPDragsort list={plain} onChange={setPlain} draggable={false} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/dragsort/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过 `initialList` 设置初始数据列表
- 通过 [direction]设置拖拽方向：vertical（垂直）、horizontal（水平）、all（网格）
- 通过 [columns] 设置网格模式下的列数
- 通过 [draggable] 控制是否允许拖拽

```vue
<template>
  <view class="p-4 bg-white">
    <!-- 垂直拖拽排序 -->
    <up-dragsort 
      :initialList="verticalList" 
      direction="vertical"
      @drag-end="onVerticalDragEnd"
    />
    
    <!-- 水平拖拽排序 -->
    <up-dragsort 
      :initialList="horizontalList" 
      direction="horizontal"
      class="mt-4"
      @drag-end="onHorizontalDragEnd"
    />
    
    <!-- 网格拖拽排序 -->
    <up-dragsort 
      :initialList="gridList" 
      direction="all"
      :columns="3"
      class="mt-4"
      @drag-end="onGridDragEnd"
    />
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const verticalList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' },
  { id: 4, label: '项目4' }
]);

const horizontalList = ref([
  { id: 1, label: '项目A' },
  { id: 2, label: '项目B' },
  { id: 3, label: '项目C' },
  { id: 4, label: '项目D' }
]);

const gridList = ref([
  { id: 1, label: '格子1' },
  { id: 2, label: '格子2' },
  { id: 3, label: '格子3' },
  { id: 4, label: '格子4' },
  { id: 5, label: '格子5' },
  { id: 6, label: '格子6' }
]);

const onVerticalDragEnd = (list) => {
  console.log('垂直拖拽结束', list);
  verticalList.value = list;
};

const onHorizontalDragEnd = (list) => {
  console.log('水平拖拽结束', list);
  horizontalList.value = list;
};

const onGridDragEnd = (list) => {
  console.log('网格拖拽结束', list);
  gridList.value = list;
};
</script>
```

#### 1. 部分项目禁用拖拽

可以通过给列表项添加 `draggable: false` 属性来禁用特定项目的拖拽功能：

```vue
<up-dragsort 
  :initialList="listWithFixedItems" 
  direction="vertical"
  @drag-end="onDragEnd"
>
  <template #default="{ item, index }">
    <view class="custom-item" :class="{ 'fixed-item': item.draggable === false }">
      <text>{{ item.label }}</text>
      <text v-if="item.draggable === false" class="fixed-label">(固定)</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref } from 'vue';

const listWithFixedItems = ref([
  { id: 1, label: '可拖拽项目1', draggable: true },
  { id: 2, label: '固定项目', draggable: false },
  { id: 3, label: '可拖拽项目2', draggable: true },
  { id: 4, label: '可拖拽项目3', draggable: true }
]);

const onDragEnd = (list) => {
  console.log('拖拽结束', list);
  listWithFixedItems.value = list;
};
</script>
```

#### 2. 自定义网格样式

网格模式下可以实现图标类应用的拖拽排序：

```vue
<up-dragsort 
  :initialList="appList" 
  direction="all"
  :columns="4"
  @drag-end="onDragEnd"
>
  <template #default="{ item, index }">
    <view class="app-item">
      <view class="app-icon">
        <text>{{ item.icon }}</text>
      </view>
      <text class="app-label">{{ item.label }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref } from 'vue';

const appList = ref([
  { id: 1, label: '电话', icon: '📞' },
  { id: 2, label: '短信', icon: '💬' },
  { id: 3, label: '相机', icon: '📷' },
  { id: 4, label: '设置', icon: '⚙️' },
  { id: 5, label: '音乐', icon: '🎵' },
  { id: 6, label: '视频', icon: '🎬' }
]);

const onDragEnd = (list) => {
  console.log('拖拽结束', list);
  appList.value = list;
};
</script>

<style>
.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.app-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.app-label {
  font-size: 12px;
}
</style>
```

#### 3. 响应式列数

根据不同屏幕尺寸调整网格列数：

```vue
<up-dragsort 
  :initialList="responsiveList" 
  direction="all"
  :columns="gridColumns"
  @drag-end="onDragEnd"
>
  <template #default="{ item }">
    <view class="grid-item">
      <text>{{ item.label }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref, computed } from 'vue';

const responsiveList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' },
  // ...更多项目
]);

const gridColumns = computed(() => {
  // 根据屏幕宽度动态计算列数
  const screenWidth = uni.getSystemInfoSync().windowWidth;
  if (screenWidth < 375) {
    return 2; // 小屏手机
  } else if (screenWidth < 414) {
    return 3; // 中屏手机
  } else {
    return 4; // 大屏手机/平板
  }
});

const onDragEnd = (list) => {
  console.log('拖拽结束', list);
  responsiveList.value = list;
};
</script>
```

#### 自定义内容

通过默认插槽可以自定义每个拖拽项的内容：

```vue
<up-dragsort 
  :initialList="customList" 
  direction="vertical"
  @drag-end="onCustomDragEnd"
>
  <template #default="{ item, index }">
    <view class="custom-item">
      <text>{{ index + 1 }}. {{ item.label }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref } from 'vue';

const customList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' }
]);

const onCustomDragEnd = (list) => {
  console.log('自定义拖拽结束', list);
  customList.value = list;
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/dragsort.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过 `initialList` 设置初始数据列表
- 通过 [direction]设置拖拽方向：vertical（垂直）、horizontal（水平）、all（网格）
- 通过 [columns] 设置网格模式下的列数
- 通过 [draggable] 控制是否允许拖拽

```vue
<template>
  <view class="p-4 bg-white">
    <!-- 垂直拖拽排序 -->
    <up-dragsort 
      :initialList="verticalList" 
      direction="vertical"
      @drag-end="onVerticalDragEnd"
    />
    
    <!-- 水平拖拽排序 -->
    <up-dragsort 
      :initialList="horizontalList" 
      direction="horizontal"
      class="mt-4"
      @drag-end="onHorizontalDragEnd"
    />
    
    <!-- 网格拖拽排序 -->
    <up-dragsort 
      :initialList="gridList" 
      direction="all"
      :columns="3"
      class="mt-4"
      @drag-end="onGridDragEnd"
    />
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const verticalList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' },
  { id: 4, label: '项目4' }
]);

const horizontalList = ref([
  { id: 1, label: '项目A' },
  { id: 2, label: '项目B' },
  { id: 3, label: '项目C' },
  { id: 4, label: '项目D' }
]);

const gridList = ref([
  { id: 1, label: '格子1' },
  { id: 2, label: '格子2' },
  { id: 3, label: '格子3' },
  { id: 4, label: '格子4' },
  { id: 5, label: '格子5' },
  { id: 6, label: '格子6' }
]);

const onVerticalDragEnd = (list) => {
  console.log('垂直拖拽结束', list);
  verticalList.value = list;
};

const onHorizontalDragEnd = (list) => {
  console.log('水平拖拽结束', list);
  horizontalList.value = list;
};

const onGridDragEnd = (list) => {
  console.log('网格拖拽结束', list);
  gridList.value = list;
};
</script>
```

#### 1. 部分项目禁用拖拽

可以通过给列表项添加 `draggable: false` 属性来禁用特定项目的拖拽功能：

```vue
<up-dragsort 
  :initialList="listWithFixedItems" 
  direction="vertical"
  @drag-end="onDragEnd"
>
  <template #default="{ item, index }">
    <view class="custom-item" :class="{ 'fixed-item': item.draggable === false }">
      <text>{{ item.label }}</text>
      <text v-if="item.draggable === false" class="fixed-label">(固定)</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref } from 'vue';

const listWithFixedItems = ref([
  { id: 1, label: '可拖拽项目1', draggable: true },
  { id: 2, label: '固定项目', draggable: false },
  { id: 3, label: '可拖拽项目2', draggable: true },
  { id: 4, label: '可拖拽项目3', draggable: true }
]);

const onDragEnd = (list) => {
  console.log('拖拽结束', list);
  listWithFixedItems.value = list;
};
</script>
```

#### 2. 自定义网格样式

网格模式下可以实现图标类应用的拖拽排序：

```vue
<up-dragsort 
  :initialList="appList" 
  direction="all"
  :columns="4"
  @drag-end="onDragEnd"
>
  <template #default="{ item, index }">
    <view class="app-item">
      <view class="app-icon">
        <text>{{ item.icon }}</text>
      </view>
      <text class="app-label">{{ item.label }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref } from 'vue';

const appList = ref([
  { id: 1, label: '电话', icon: '📞' },
  { id: 2, label: '短信', icon: '💬' },
  { id: 3, label: '相机', icon: '📷' },
  { id: 4, label: '设置', icon: '⚙️' },
  { id: 5, label: '音乐', icon: '🎵' },
  { id: 6, label: '视频', icon: '🎬' }
]);

const onDragEnd = (list) => {
  console.log('拖拽结束', list);
  appList.value = list;
};
</script>

<style>
.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.app-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.app-label {
  font-size: 12px;
}
</style>
```

#### 3. 响应式列数

根据不同屏幕尺寸调整网格列数：

```vue
<up-dragsort 
  :initialList="responsiveList" 
  direction="all"
  :columns="gridColumns"
  @drag-end="onDragEnd"
>
  <template #default="{ item }">
    <view class="grid-item">
      <text>{{ item.label }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref, computed } from 'vue';

const responsiveList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' },
  // ...更多项目
]);

const gridColumns = computed(() => {
  // 根据屏幕宽度动态计算列数
  const screenWidth = uni.getSystemInfoSync().windowWidth;
  if (screenWidth < 375) {
    return 2; // 小屏手机
  } else if (screenWidth < 414) {
    return 3; // 中屏手机
  } else {
    return 4; // 大屏手机/平板
  }
});

const onDragEnd = (list) => {
  console.log('拖拽结束', list);
  responsiveList.value = list;
};
</script>
```

#### 自定义内容

通过默认插槽可以自定义每个拖拽项的内容：

```vue
<up-dragsort 
  :initialList="customList" 
  direction="vertical"
  @drag-end="onCustomDragEnd"
>
  <template #default="{ item, index }">
    <view class="custom-item">
      <text>{{ index + 1 }}. {{ item.label }}</text>
    </view>
  </template>
</up-dragsort>
```

```vue
<script setup>
import { ref } from 'vue';

const customList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' }
]);

const onCustomDragEnd = (list) => {
  console.log('自定义拖拽结束', list);
  customList.value = list;
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/dragsort.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `drag-end` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `handler` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPDragSort` | `packages/ultra_ui/lib/src/widgets/up_drag_sort.dart` |
| React Native · TypeScript | `UPDragsort` | `src/components/dragsort` |
| Taro · React + TypeScript | `UPDragsort` | `src/ultra-ui/components/up-dragsort` |
| uni-app · Vue 3 | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |
| uni-app-x · UTS / UVUE | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |

