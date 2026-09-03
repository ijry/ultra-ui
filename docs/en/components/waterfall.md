---
title: Waterfall
description: A two-column masonry layout that always fills the shorter column next.
generated: true
---

# Waterfall

A two-column masonry layout that always fills the shorter column next.

<PlatformBadges component="waterfall" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPWaterfall(
  key: _waterfallKey,
  value: _flowList,
  columns: 'auto',
  itemBuilder: (context, item, itemIndex, colIndex) {
    final product = Map<String, dynamic>.from(item as Map);
    return _ProductCard(
      product: product,
      onRemove: () => _removeProduct(product['id']),
    );
  },
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/waterfall_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPWaterfall } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

### 三列

columns 指定列数，数据在三列间按最矮优先分配

```tsx
import { UPWaterfall } from '@ultra-ui'

<UPWaterfall
  value={autoList}
  columns={3}
  addTime={50}
  renderItem={renderCard}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/waterfall/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-waterfall v-model="flowList" columns="auto" ref="uWaterfallRef">
    <template v-slot:column="{ colList }">
        <view class="demo-warter" v-for="(item, index) in (colList as UTSJSONObject[])" :key="index">
            <!-- 微信小程序需要hx2.8.11版本才支持在template中引入其他组件，比如下方的u-lazy-load组件 -->
            <!-- <up-lazy-load threshold="-450" height="120" border-radius="10" :image="item.image"
                :index="index"></up-lazy-load> -->
            <image style="width: 100%" mode="widthFix" :src="item['image']"></image>
            <view class="demo-title">{{ item['title'] }}</view>
            <view class="demo-price">{{ item['price'] }}元</view>
            <view class="demo-tag">
                <view class="demo-tag-owner">
                    <text class="text">自营</text>
                </view>
                <view class="demo-tag-text">
                    <text class="text">放心购</text>
                </view>
            </view>
            <view class="demo-shop">{{ item['shop'] }}</view>
            <view class="u-close">
                <up-icon name="close-circle-fill" color="#fa3534"
                    size="16" @click="remove(item['id'] ?? '')"></up-icon>
            </view>
        </view>
    </template>
</up-waterfall>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/waterfall/waterfall.uvue`</small>

</template>

<template #uniappx>

```vue
<up-waterfall v-model="flowList" columns="auto" ref="uWaterfallRef">
    <template v-slot:column="{ colList }">
        <view class="demo-warter" v-for="(item, index) in (colList as UTSJSONObject[])" :key="index">
            <!-- 微信小程序需要hx2.8.11版本才支持在template中引入其他组件，比如下方的u-lazy-load组件 -->
            <!-- <up-lazy-load threshold="-450" height="120" border-radius="10" :image="item.image"
                :index="index"></up-lazy-load> -->
            <image style="width: 100%" mode="widthFix" :src="item['image']"></image>
            <view class="demo-title">{{ item['title'] }}</view>
            <view class="demo-price">{{ item['price'] }}元</view>
            <view class="demo-tag">
                <view class="demo-tag-owner">
                    <text class="text">自营</text>
                </view>
                <view class="demo-tag-text">
                    <text class="text">放心购</text>
                </view>
            </view>
            <view class="demo-shop">{{ item['shop'] }}</view>
            <view class="u-close">
                <up-icon name="close-circle-fill" color="#fa3534"
                    size="16" @click="remove(item['id'] ?? '')"></up-icon>
            </view>
        </view>
    </template>
</up-waterfall>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/waterfall/waterfall.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `after-add-all` |
| `after-add-one` |
| `input` |

### Slots

| Slot |
| --- |
| `column` |
| `default` |
| `left` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPWaterfall` | `packages/ultra_ui/lib/src/widgets/up_waterfall.dart` |
| React Native · TypeScript | `UPWaterfall` | `src/components/waterfall` |
| Taro · React + TypeScript | `UPWaterfall` | `src/ultra-ui/components/up-waterfall` |
| uni-app · Vue 3 | `up-waterfall` | `uni_modules/uview-ultra/components/up-waterfall` |
| uni-app-x · UTS / UVUE | `up-waterfall` | `uni_modules/uview-ultra/components/up-waterfall` |

