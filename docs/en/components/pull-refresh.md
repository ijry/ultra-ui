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

<UPPullRefresh refreshing={refreshing} onRefresh={handleRefresh}>
<View style={pr.content}>
<Text style={pr.text}>下拉刷新试试</Text>
<Text style={pr.count}>已刷新 {count} 次</Text>
</View>
</UPPullRefresh>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/PullRefreshDemo.tsx`</small>

</template>

<template #taro>

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
            :key="item.id"
            class="list-item"
          >
            <text class="list-item__text">{{ item.name }}</text>
          </view>
      </view>
  </up-pull-refresh>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/pullRefresh/pullRefresh.vue`</small>

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

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `refreshing` | 是否正在刷新 | `Boolean` | `—` |
| `threshold` | 下拉刷新阈值 | `Number` | `—` |
| `damping` | 阻尼系数 | `Number` | `—` |
| `maxDistance` | 最大下拉距离 | `Number` | `—` |
| `showLoadmore` | 是否显示加载更多 | `Boolean` | `—` |
| `loadmoreProps` | u-loadmore 组件的 props 配置 | `Object` | `—` |
| `useScrollView` | 是否使用 scroll-view 包装内容 | `Boolean` | `—` |
| `enableBackToTop` | scroll-view 相关属性 | `Boolean` | `—` |
| `lowerThreshold` | — | `Number / String` | `—` |
| `scrollTop` | — | `Number / String` | `—` |

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
| uni-app · Vue 3 | `up-pull-refresh` | `src/uni_modules/uview-plus/components/u-pull-refresh` |
| uni-app-x · UTS / UVUE | `up-pull-refresh` | `uni_modules/uview-ultra/components/up-pull-refresh` |

