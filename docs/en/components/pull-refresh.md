---
title: Pull refresh
description: A pull-to-refresh container with a customisable pull area.
generated: true
---

# Pull refresh

A pull-to-refresh container with a customisable pull area.

<PlatformBadges component="pull-refresh" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 基本使用

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPullRefresh(
  key: const ValueKey('pull-refresh-page-basic'),
  threshold: 50,
  refreshing: _basicRefreshing,
  onRefresh: _refreshBasic,
  child: _buildRows(_items),
)
```

#### 自定义下拉动画

```dart
UPPullRefresh(
  key: const ValueKey('pull-refresh-page-custom'),
  refreshing: _customRefreshing,
  onRefresh: _refreshCustom,
  pullSlot: const _RefreshStatus(
    icon: 'arrow-downward',
    text: '下拉刷新',
  ),
  releaseSlot: const _RefreshStatus(
    icon: 'arrow-upward',
    text: '释放刷新',
  ),
  refreshingSlot: const _RefreshStatus(
    icon: 'loading',
    text: '正在刷新...',
    loading: true,
  ),
  child: _buildRows(_items),
)
```

#### 结合虚拟列表

```dart
UPPullRefresh(
  key: const ValueKey('pull-refresh-page-virtual'),
  useScrollView: false,
  refreshing: _virtualRefreshing,
  onRefresh: _refreshVirtual,
  child: UPVirtualList(
    listData: _items,
    itemHeight: 32,
    height: 180,
    itemBuilder: (context, item, index) => Text(
      'Item ${item['id']}: ${item['name']}',
    ),
  ),
)
```

#### 上拉加载

```dart
UPPullRefresh(
  key: const ValueKey('pull-refresh-page-loadmore'),
  showLoadmore: true,
  refreshing: _loadmoreRefreshing,
  onRefresh: _refreshLoadmore,
  onLoadmore: _loadMore,
  loadmoreProps: <String, dynamic>{
    'status': _loadmoreStatus,
    'loadmoreText': '上拉加载更多',
    'loadingText': '努力加载中...',
    'nomoreText': '我们是有底线的',
    'iconSize': 18,
  },
  child: _buildRows(_loadmoreItems),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/pull_refresh_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPullRefresh } from 'ultra-ui-rn';

<UPPullRefresh
  height={200}
  refreshing={refreshing}
  threshold={50}
  useScrollView
  onRefresh={onRefresh}
>
  <View style={s.listContent}>
    {listData.map((item) => (
      <View key={item.id} style={s.listItem}>
        <Text style={s.listItemText}>{item.name}</Text>
      </View>
    ))}
  </View>
</UPPullRefresh>
```

```tsx
<UPPullRefresh
  height={200}
  pull={PullContent}
  refreshing={refreshing1}
  refreshingNode={RefreshingContent}
  release={ReleaseContent}
  threshold={60}
  useScrollView
  onRefresh={onRefresh1}
>
  <View style={s.listContent}>
    {listData.map((item) => (
      <View key={item.id} style={s.listItem}>
        <Text style={s.listItemText}>{item.name}</Text>
      </View>
    ))}
  </View>
</UPPullRefresh>
```

```tsx
<UPPullRefresh
  height={150}
  refreshing={refreshing3}
  useScrollView
  onRefresh={onRefresh3}
>
  {/* // 上游结合 up-virtual-list，本地无该组件，用普通 ScrollView 替代 */}
  <View style={s.listContent}>
    {listData3.map((item) => (
      <View key={item.id} style={s.listItem}>
        <Text style={s.listItemText}>Item {item.id}: {item.name}</Text>
      </View>
    ))}
  </View>
</UPPullRefresh>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/PullRefreshDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

下拉到阈值松手触发 onRefresh；高度固定，内部可滚动

```tsx
import { UPPullRefresh } from '@ultra-ui'

<UPPullRefresh
  customClass="pull-refresh-demo__box"
  height="500px"
  refreshing={refreshing}
  onRefresh={handleRefresh}
>
  {list.map((item) => (
    <View
      key={item}
      className="pull-refresh-demo__cell"
      style={{ backgroundColor: COLORS[item % COLORS.length] }}
    >
      <Text className="pull-refresh-demo__cell-text">列表项 #{item}</Text>
    </View>
  ))}
</UPPullRefresh>
```

#### 自定义文案

通过 pullSlot / releaseSlot 自定义下拉文案

```tsx
<UPPullRefresh
  customClass="pull-refresh-demo__box"
  height="360px"
  refreshing={customRefreshing}
  onRefresh={handleCustomRefresh}
  pullSlot={renderCustomIndicator}
  releaseSlot={renderCustomIndicator}
>
  {Array.from({ length: 6 }, (_, i) => (
    <View key={i} className="pull-refresh-demo__cell pull-refresh-demo__cell--plain">
      <Text className="pull-refresh-demo__cell-text">内容 #{i + 1}</Text>
    </View>
  ))}
</UPPullRefresh>
```

#### 触底加载

showLoadmore + onLoadmore 组合上拉加载更多

```tsx
<UPPullRefresh
  customClass="pull-refresh-demo__box"
  height="460px"
  showLoadmore
  loadmoreProps={{ status: loadStatus, loadmoreText: '上拉加载更多' }}
  onLoadmore={handleLoadmore}
>
  {loadList.map((item) => (
    <View key={item} className="pull-refresh-demo__cell pull-refresh-demo__cell--plain">
      <Text className="pull-refresh-demo__cell-text">记录 #{item}</Text>
    </View>
  ))}
</UPPullRefresh>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/pull-refresh/index.tsx`</small>

</template>

<template #uniapp>

#### 1. 自定义下拉动画

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    :threshold="60"
    @refresh="onRefresh"
  >
    <!-- 自定义下拉状态 -->
    <template #pull="{ distance, threshold }">
      <view class="custom-refresh-content">
        <view class="pull-animation">
          <text>👇</text>
        </view>
        <text class="refresh-text">下拉刷新 ({{ Math.round(distance) }}px)</text>
      </view>
    </template>
    
    <!-- 自定义释放状态 -->
    <template #release="{ distance, threshold }">
      <view class="custom-refresh-content">
        <view class="release-animation">
          <text>👆</text>
        </view>
        <text class="refresh-text">释放刷新</text>
      </view>
    </template>
    
    <!-- 自定义刷新中状态 -->
    <template #refreshing>
      <view class="custom-refresh-content" style="background-color: gray;">
        <view class="refreshing-animation">
          <up-icon size="100px" name="https://s3.bmp.ovh/imgs/2025/07/25/772bb6ae58cbd2c1.gif"></up-icon>
        </view>
      </view>
    </template>
    
    <!-- 列表内容 -->
    <view class="list-content">
      <view 
        v-for="item in listData" 
        :key="item.id"
        class="list-item"
      >
        <text>{{ item.name }}</text>
      </view>
    </view>
  </up-pull-refresh>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const refreshing = ref(false);
const listData = ref([]);

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    loadData();
    refreshing.value = false;
  }, 2000);
};

const loadData = () => {
  // 模拟加载数据
  listData.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
  }));
};
</script>
```

#### 2. 结合虚拟列表

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    @refresh="onRefresh"
  >
    <up-virtual-list
      :list-data="listData"
      :item-height="32"
      height="150px"
      @scroll="onScroll"
    >
      <template #default="{ item, index }">
        <view class="list-item">
          <text>Item {{ item.id }}: {{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </up-pull-refresh>
</template>

<script>
export default {
  data() {
    return {
      refreshing: false,
      listData: []
    };
  },
  methods: {
    onRefresh() {
      this.refreshing = true
      // 模拟网络请求
      setTimeout(() => {
        this.loadData()
        this.refreshing = false
      }, 2000)
    },
    
    onScroll() {}
  }
};
</script>
```

#### 3. 结合上拉加载

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    :showLoadmore="true"
    :loadmoreProps="loadmoreConfig"
    @refresh="onRefresh"
    @loadmore="onLoadmore"
  >
    <!-- 使用外部 scroll-view 或其他可滚动组件 -->
    <scroll-view
      class="scroll-area"
      style="height: 100px;"
      :scroll-y="true"
      @scrolltolower="onScrollToLower"
    >
      <view class="list-content">
        <view 
          v-for="item in listData" 
          :key="item.id"
          class="list-item"
        >
          <text>{{ item.name }}</text>
        </view>
      </view>
    </scroll-view>
  </up-pull-refresh>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const refreshing = ref(false);
const listData = ref([]);

const loadmoreConfig = ref({
  status: 'loadmore', // loadmore, loading, nomore
  loadmoreText: '上拉加载更多',
  loadingText: '努力加载中...',
  nomoreText: '我们是有底线的',
  iconSize: 18
});

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    loadData();
    refreshing.value = false;
  }, 2000);
};

const onLoadmore = () => {};

const onScrollToLower = () => {
  loadmoreConfig.value.status = 'loading';
  setTimeout(() => {
    listData.value.push({
      id: listData.value.length,
      name: 'Item ' + listData.value.length
    });
    loadmoreConfig.value.status = 'loadmore';
  }, 2000);
};

const loadData = () => {
  // 模拟加载数据
  listData.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
  }));
};
</script>
```

#### 自定义内容

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    @refresh="onRefresh"
  >
    <!-- 下拉状态 -->
    <template #pull="{ distance, threshold }">
      <view>下拉状态，当前下拉距离: {{ distance }}</view>
    </template>
    
    <!-- 释放状态 -->
    <template #release="{ distance, threshold }">
      <view>释放状态，达到阈值: {{ threshold }}</view>
    </template>
    
    <!-- 刷新中状态 -->
    <template #refreshing>
      <view>正在刷新中...</view>
    </template>
    
    <!-- 内容区域 -->
    <view>内容区域</view>
  </up-pull-refresh>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const refreshing = ref(false);

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    refreshing.value = false;
  }, 2000);
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/pullRefresh.md`</small>

</template>

<template #uniappx>

#### 1. 自定义下拉动画

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    :threshold="60"
    @refresh="onRefresh"
  >
    <!-- 自定义下拉状态 -->
    <template #pull="{ distance, threshold }">
      <view class="custom-refresh-content">
        <view class="pull-animation">
          <text>👇</text>
        </view>
        <text class="refresh-text">下拉刷新 ({{ Math.round(distance) }}px)</text>
      </view>
    </template>
    
    <!-- 自定义释放状态 -->
    <template #release="{ distance, threshold }">
      <view class="custom-refresh-content">
        <view class="release-animation">
          <text>👆</text>
        </view>
        <text class="refresh-text">释放刷新</text>
      </view>
    </template>
    
    <!-- 自定义刷新中状态 -->
    <template #refreshing>
      <view class="custom-refresh-content" style="background-color: gray;">
        <view class="refreshing-animation">
          <up-icon size="100px" name="https://s3.bmp.ovh/imgs/2025/07/25/772bb6ae58cbd2c1.gif"></up-icon>
        </view>
      </view>
    </template>
    
    <!-- 列表内容 -->
    <view class="list-content">
      <view 
        v-for="item in listData" 
        :key="item.id"
        class="list-item"
      >
        <text>{{ item.name }}</text>
      </view>
    </view>
  </up-pull-refresh>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const refreshing = ref(false);
const listData = ref([]);

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    loadData();
    refreshing.value = false;
  }, 2000);
};

const loadData = () => {
  // 模拟加载数据
  listData.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
  }));
};
</script>
```

#### 2. 结合虚拟列表

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    @refresh="onRefresh"
  >
    <up-virtual-list
      :list-data="listData"
      :item-height="32"
      height="150px"
      @scroll="onScroll"
    >
      <template #default="{ item, index }">
        <view class="list-item">
          <text>Item {{ item.id }}: {{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </up-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';

const refreshing = ref(false);
const listData = ref([]);

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    loadData();
    refreshing.value = false;
  }, 2000);
};

const onScroll = () => {};
</script>
```

#### 3. 结合上拉加载

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    :showLoadmore="true"
    :loadmoreProps="loadmoreConfig"
    @refresh="onRefresh"
    @loadmore="onLoadmore"
  >
    <!-- 使用外部 scroll-view 或其他可滚动组件 -->
    <scroll-view
      class="scroll-area"
      style="height: 100px;"
      :scroll-y="true"
      @scrolltolower="onScrollToLower"
    >
      <view class="list-content">
        <view 
          v-for="item in listData" 
          :key="item.id"
          class="list-item"
        >
          <text>{{ item.name }}</text>
        </view>
      </view>
    </scroll-view>
  </up-pull-refresh>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const refreshing = ref(false);
const listData = ref([]);

const loadmoreConfig = ref({
  status: 'loadmore', // loadmore, loading, nomore
  loadmoreText: '上拉加载更多',
  loadingText: '努力加载中...',
  nomoreText: '我们是有底线的',
  iconSize: 18
});

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    loadData();
    refreshing.value = false;
  }, 2000);
};

const onLoadmore = () => {};

const onScrollToLower = () => {
  loadmoreConfig.value.status = 'loading';
  setTimeout(() => {
    listData.value.push({
      id: listData.value.length,
      name: 'Item ' + listData.value.length
    });
    loadmoreConfig.value.status = 'loadmore';
  }, 2000);
};

const loadData = () => {
  // 模拟加载数据
  listData.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
  }));
};
</script>
```

#### 自定义内容

```vue
<template>
  <up-pull-refresh
    :refreshing="refreshing"
    @refresh="onRefresh"
  >
    <!-- 下拉状态 -->
    <template #pull="{ distance, threshold }">
      <view>下拉状态，当前下拉距离: {{ distance }}</view>
    </template>
    
    <!-- 释放状态 -->
    <template #release="{ distance, threshold }">
      <view>释放状态，达到阈值: {{ threshold }}</view>
    </template>
    
    <!-- 刷新中状态 -->
    <template #refreshing>
      <view>正在刷新中...</view>
    </template>
    
    <!-- 内容区域 -->
    <view>内容区域</view>
  </up-pull-refresh>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const refreshing = ref(false);

const onRefresh = () => {
  refreshing.value = true;
  // 模拟网络请求
  setTimeout(() => {
    refreshing.value = false;
  }, 2000);
};
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/pullRefresh.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `loadmore` |
| `refresh` |
| `scroll` |

### Slots

| Slot |
| --- |
| `default` |
| `pull` |
| `refreshing` |
| `release` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPPullRefresh` | `packages/ultra_ui/lib/src/widgets/up_pull_refresh.dart` |
| React Native · TypeScript | `UPPullRefresh` | `src/components/pull-refresh` |
| Taro · React + TypeScript | `UPPullRefresh` | `src/ultra-ui/components/up-pull-refresh` |
| uni-app · Vue 3 | `up-pull-refresh` | `uni_modules/uview-ultra/components/up-pull-refresh` |
| uni-app-x · UTS / UVUE | `up-pull-refresh` | `uni_modules/uview-ultra/components/up-pull-refresh` |

