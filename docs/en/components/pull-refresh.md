---
title: Pull refresh
description: A pull-to-refresh container with a customisable pull area.
generated: true
---

# Pull refresh

A pull-to-refresh container with a customisable pull area.

<PlatformBadges component="pull-refresh" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

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

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/PullRefreshDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

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

### 自定义文案

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

### 触底加载

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/pullRefresh/pullRefresh.uvue`</small>

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/pullRefresh/pullRefresh.uvue`</small>

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

