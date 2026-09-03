---
title: Pull refresh 下拉刷新
description: 下拉触发刷新的容器，支持自定义下拉区域内容。
generated: true
---

# Pull refresh 下拉刷新

下拉触发刷新的容器，支持自定义下拉区域内容。

<PlatformBadges component="pull-refresh" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/pull_refresh_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/PullRefreshDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/pull-refresh/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-pull-refresh
    :refreshing="refreshing"
    :threshold="50"
    @refresh="onRefresh"
  >
    <!-- 列表内容 -->
    <view class="list-content">
          <view 
            v-for="item in listData" 
            :key="getItemId(item)"
            class="list-item"
          >
            <text>{{ getItemName(item) }}</text>
          </view>
      </view>
  </up-pull-refresh>
```

```vue
<up-pull-refresh
  :refreshing="refreshing3"
  @refresh="onRefresh3"
>
  <up-virtual-list
    :list-data="listData3"
    :item-height="32"
    height="150px"
    @scroll="onScroll3"
  >
    <template #default="{ item, index }">
      <view class="list-item">
        <text>Item {{ getAnyItemId(item) }}: {{ getAnyItemName(item) }}</text>
      </view>
    </template>
  </up-virtual-list>
</up-pull-refresh>
```

```vue
<up-pull-refresh
        :refreshing="refreshing2"
        :showLoadmore="true"
        :loadmoreProps="loadmoreConfig"
        @refresh="onRefresh2"
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
                v-for="item in listData2" 
                :key="getItemId(item)"
                class="list-item"
              >
                <text>{{ getItemName(item) }}</text>
              </view>
            </view>
          </scroll-view>
      </up-pull-refresh>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/pullRefresh/pullRefresh.uvue`</small>

</template>

<template #uniappx>

```vue
<up-pull-refresh
    :refreshing="refreshing"
    :threshold="50"
    @refresh="onRefresh"
  >
    <!-- 列表内容 -->
    <view class="list-content">
          <view 
            v-for="item in listData" 
            :key="getItemId(item)"
            class="list-item"
          >
            <text>{{ getItemName(item) }}</text>
          </view>
      </view>
  </up-pull-refresh>
```

```vue
<up-pull-refresh
  :refreshing="refreshing3"
  @refresh="onRefresh3"
>
  <up-virtual-list
    :list-data="listData3"
    :item-height="32"
    height="150px"
    @scroll="onScroll3"
  >
    <template #default="{ item, index }">
      <view class="list-item">
        <text>Item {{ getAnyItemId(item) }}: {{ getAnyItemName(item) }}</text>
      </view>
    </template>
  </up-virtual-list>
</up-pull-refresh>
```

```vue
<up-pull-refresh
        :refreshing="refreshing2"
        :showLoadmore="true"
        :loadmoreProps="loadmoreConfig"
        @refresh="onRefresh2"
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
                v-for="item in listData2" 
                :key="getItemId(item)"
                class="list-item"
              >
                <text>{{ getItemName(item) }}</text>
              </view>
            </view>
          </scroll-view>
      </up-pull-refresh>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/pullRefresh/pullRefresh.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `loadmore` |
| `refresh` |
| `scroll` |

### 插槽

| 插槽名 |
| --- |
| `default` |
| `pull` |
| `refreshing` |
| `release` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPPullRefresh` | `packages/ultra_ui/lib/src/widgets/up_pull_refresh.dart` |
| React Native · TypeScript | `UPPullRefresh` | `src/components/pull-refresh` |
| Taro · React + TypeScript | `UPPullRefresh` | `src/ultra-ui/components/up-pull-refresh` |
| uni-app · Vue 3 | `up-pull-refresh` | `uni_modules/uview-ultra/components/up-pull-refresh` |
| uni-app-x · UTS / UVUE | `up-pull-refresh` | `uni_modules/uview-ultra/components/up-pull-refresh` |

