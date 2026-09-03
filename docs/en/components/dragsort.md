---
title: Drag sort
description: A list or grid reordered by long-press and drag.
generated: true
---

# Drag sort

A list or grid reordered by long-press and drag.

<PlatformBadges component="dragsort" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### One column, several rows

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

#### Custom drag handle

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

#### Several rows and columns

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

#### Single-row horizontal drag

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/dragsort_page.dart`</small>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/DragsortDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPDragsort } from '@ultra-ui'

<UPDragsort list={plain} onChange={setPlain} />
```

#### Array of objects

```tsx
<UPDragsort list={objects} onChange={setObjects} />
```

#### Disabled state

```tsx
<UPDragsort list={plain} onChange={setPlain} draggable={false} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/dragsort/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

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

#### 1. Disable dragging for some items

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

#### 2. Custom grid styling

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

#### 3. Responsive column count

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

#### Custom content

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/dragsort.md`</small>

</template>

<template #uniappx>

#### Basic usage

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

#### 1. Disable dragging for some items

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

#### 2. Custom grid styling

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

#### 3. Responsive column count

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

#### Custom content

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/dragsort.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `drag-end` |

### Slots

| Slot |
| --- |
| `default` |
| `handler` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPDragSort` | `packages/ultra_ui/lib/src/widgets/up_drag_sort.dart` |
| React Native · TypeScript | `UPDragsort` | `src/components/dragsort` |
| Taro · React + TypeScript | `UPDragsort` | `src/ultra-ui/components/up-dragsort` |
| uni-app · Vue 3 | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |
| uni-app-x · UTS / UVUE | `up-dragsort` | `uni_modules/uview-ultra/components/up-dragsort` |

