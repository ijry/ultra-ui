---
title: Waterfall 瀑布流
description: 双列不等高瀑布流布局，自动把新内容放进较短的一列。
generated: true
---

# Waterfall 瀑布流

双列不等高瀑布流布局，自动把新内容放进较短的一列。

<PlatformBadges component="waterfall" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_b/waterfall_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPWaterfall } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 三列

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

#### 自动列数

columns='auto' 时按屏宽与 minColumnWidth 计算列数

```tsx
<UPWaterfall
  value={autoList}
  columns='auto'
  minColumnWidth={120}
  columnsMin={2}
  addTime={50}
  renderItem={renderCard}
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/waterfall/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/waterfall/waterfall.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsB/waterfall/waterfall.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `after-add-all` |
| `after-add-one` |
| `input` |

### 插槽

| 插槽名 |
| --- |
| `column` |
| `default` |
| `left` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPWaterfall` | `packages/ultra_ui/lib/src/widgets/up_waterfall.dart` |
| React Native · TypeScript | `UPWaterfall` | `src/components/waterfall` |
| Taro · React + TypeScript | `UPWaterfall` | `src/ultra-ui/components/up-waterfall` |
| uni-app · Vue 3 | `up-waterfall` | `uni_modules/uview-ultra/components/up-waterfall` |
| uni-app-x · UTS / UVUE | `up-waterfall` | `uni_modules/uview-ultra/components/up-waterfall` |

