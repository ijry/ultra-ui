---
title: Virtual list
description: Renders only the visible window, so it scales to tens of thousands of rows.
generated: true
---

# Virtual list

Renders only the visible window, so it scales to tens of thousands of rows.

<PlatformBadges component="virtual-list" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 基本使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPVirtualList(
  key: const ValueKey('virtual-list-page-basic'),
  listData: _items,
  itemHeight: 49,
  height: '800px',
  keyField: 'id',
  scrollTop: _scrollTop,
  onUpdateScrollTop: (value) {
    setState(() => _scrollTop = value);
  },
  itemBuilder: (context, item, index) => UPCell(
    title: 'Item ${item['id']}',
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/virtual_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPVirtualList } from 'ultra-ui-rn';

<UPVirtualList
  height="800px"
  itemHeight={49}
  listData={listData3}
  onUpdateScrollTop={(top) => {
    scrollTop.current = top;
  }}
>
  {/* 上游 `@scroll="onScroll3"` 为空实现，无可复刻的反馈 */}
  {({ item }) => <UPCell title={`Item${item.id}`} />}
</UPVirtualList>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/VirtualListDemo.tsx`</small>

</template>

<template #taro>

#### 一万条数据

滚动时观察渲染项数是否恒定，内存与帧率不随总量增长

```tsx
import { UPVirtualList } from '@ultra-ui'

<UPVirtualList
  ref={listRef}
  listData={BIG}
  itemHeight={64}
  height={320}
  buffer={4}
  renderItem={renderRow}
  onRangeChange={setRange}
/>
```

#### 数据量小于一屏

仅 5 条数据，底部不应出现多余空白

```tsx
<UPVirtualList
  listData={SMALL}
  itemHeight={64}
  height={320}
  renderItem={renderRow}
/>
```

#### 缓冲区

buffer 越大预渲染越多，滚动时空白概率越低但开销略增

```tsx
<UPVirtualList
  listData={BIG}
  itemHeight={48}
  height={200}
  buffer={10}
  renderItem={renderRow}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/virtual-list/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
    >
      <template #item="{ item, index }">
        <view class="list-item">
          <text>Item {{ item.id }}: {{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>
<style scoped>
.list-item {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
```

```vue
<script setup>
import { ref, onMounted } from 'vue';

const list = ref([]);

onMounted(() => {
  // 模拟大量数据
  list.value = Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`
  }));
});
</script>
```

#### 设置列表高度

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :height="400"
      :item-height="50"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));
</script>
```

#### 自定义缓冲区

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
      :buffer="10"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 5000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));
</script>
```

#### 监听滚动事件

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
      :height="400"
      :scroll-top.sync="currentScrollTop"
      @scroll="handleScroll"
    >
      <template #default="{ item, index }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
    
    <view class="scroll-info">
      <text>当前滚动位置: {{ currentScrollTop }}</text>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 3000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));

const currentScrollTop = ref(0);

const handleScroll = (scrollTop) => {
  console.log('滚动位置:', scrollTop);
};
</script>
```

```vue

### 注意事项

1. 每个列表项的高度必须固定且一致，通过`itemHeight`属性设置
2. 数据量越大，虚拟列表的性能优势越明显
3. 如果需要动态高度的列表项，请使用其他解决方案
4. 使用`keyField`指定唯一标识字段，避免渲染异常
5. 可通过[buffer]调整缓冲区大小以平衡性能和体验
6. 组件会自动测量容器高度，也可以通过[height]属性手动指定
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/virtualList.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
    >
      <template #item="{ item, index }">
        <view class="list-item">
          <text>Item {{ item.id }}: {{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>
<style scoped>
.list-item {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
```

```vue
<script setup>
import { ref, onMounted } from 'vue';

const list = ref([]);

onMounted(() => {
  // 模拟大量数据
  list.value = Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`
  }));
});
</script>
```

#### 设置列表高度

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :height="400"
      :item-height="50"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));
</script>
```

#### 自定义缓冲区

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
      :buffer="10"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 5000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));
</script>
```

#### 监听滚动事件

```vue
<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
      :height="400"
      :scroll-top.sync="currentScrollTop"
      @scroll="handleScroll"
    >
      <template #default="{ item, index }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
    
    <view class="scroll-info">
      <text>当前滚动位置: {{ currentScrollTop }}</text>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 3000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));

const currentScrollTop = ref(0);

const handleScroll = (scrollTop) => {
  console.log('滚动位置:', scrollTop);
};
</script>
```

```vue

### 注意事项

1. 每个列表项的高度必须固定且一致，通过`itemHeight`属性设置
2. 数据量越大，虚拟列表的性能优势越明显
3. 如果需要动态高度的列表项，请使用其他解决方案
4. 使用`keyField`指定唯一标识字段，避免渲染异常
5. 可通过[buffer]调整缓冲区大小以平衡性能和体验
6. 组件会自动测量容器高度，也可以通过[height]属性手动指定
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/virtualList.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-virtual-list>`

#### Events

| Event |
| --- |
| `scroll` |
| `update:scrollTop` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-refresh-virtual-list>`

#### Events

| Event |
| --- |
| `refresh` |
| `scroll` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPVirtualList` | `packages/ultra_ui/lib/src/widgets/up_virtual_list.dart` |
| React Native · TypeScript | `UPVirtualList` | `src/components/virtual-list` |
| Taro · React + TypeScript | `UPVirtualList` | `src/ultra-ui/components/up-virtual-list` |
| uni-app · Vue 3 | `up-virtual-list` | `uni_modules/uview-ultra/components/up-virtual-list` |
| uni-app-x · UTS / UVUE | `up-virtual-list` | `uni_modules/uview-ultra/components/up-virtual-list` |

