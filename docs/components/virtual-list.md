---
title: Virtual list 虚拟列表
description: 只渲染可视区域的虚拟滚动列表，可承载上万条数据。
generated: true
---

# Virtual list 虚拟列表

只渲染可视区域的虚拟滚动列表，可承载上万条数据。

<PlatformBadges component="virtual-list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/virtual_list_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/VirtualListDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/virtual-list/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过[listData]传入需要渲染的数据列表，通过插槽自定义列表项内容。

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

通过[height]设置虚拟列表容器的高度。

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

通过[buffer]设置可视区域外的缓冲区大小，提升滚动体验。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/virtualList.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过[listData]传入需要渲染的数据列表，通过插槽自定义列表项内容。

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

通过[height]设置虚拟列表容器的高度。

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

通过[buffer]设置可视区域外的缓冲区大小，提升滚动体验。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/virtualList.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-virtual-list>`

#### 事件

| 事件名 |
| --- |
| `scroll` |
| `update:scrollTop` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-refresh-virtual-list>`

#### 事件

| 事件名 |
| --- |
| `refresh` |
| `scroll` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPVirtualList` | `packages/ultra_ui/lib/src/widgets/up_virtual_list.dart` |
| React Native · TypeScript | `UPVirtualList` | `src/components/virtual-list` |
| Taro · React + TypeScript | `UPVirtualList` | `src/ultra-ui/components/up-virtual-list` |
| uni-app · Vue 3 | `up-virtual-list` | `uni_modules/uview-ultra/components/up-virtual-list` |
| uni-app-x · UTS / UVUE | `up-virtual-list` | `uni_modules/uview-ultra/components/up-virtual-list` |

