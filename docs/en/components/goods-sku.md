---
title: Goods SKU
description: An e-commerce SKU sheet handling attribute combinations and stock.
generated: true
---

# Goods SKU

An e-commerce SKU sheet handling attribute combinations and stock.

<PlatformBadges component="goods-sku" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPGoodsSku(
  key: const ValueKey('goods-sku-page-basic'),
  goodsInfo: _goodsInfo,
  skuTree: _skuTree,
  skuList: _skuList,
  onConfirm: _confirmSku,
  trigger: const UPButton(
    stop: false,
    type: 'primary',
    text: '打开SKU弹窗',
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/goods_sku_page.dart`</small>

</template>

<template #reactnative>

### 无弹窗页面模式

```tsx
import { UPGoodsSku } from 'ultra-ui-rn';

<UPGoodsSku
  confirmText="立即购买"
  goodsInfo={goodsInfo}
  onConfirm={confirmSku}
  pageInline
  skuList={skuList}
  skuTree={skuTree}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/GoodsSkuDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

点击按钮弹出规格面板。绿色仅有 L、蓝色无 S、红色 L 零库存，可观察联动禁用

```tsx
import { UPGoodsSku } from '@ultra-ui'

<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  triggerSlot={<UPButton type='primary' text='选择规格' />
```

### 三个维度

仅三种组合存在，选择过程中大量选项会被禁用

```tsx
<UPGoodsSku
  goodsInfo={{ image: THUMB, price: 3999, stock: 21 }}
  skuTree={bigTree}
  skuList={bigList}
  confirmText='立即购买'
  triggerSlot={<UPButton text='选择配置' />
```

### 限制购买数量

maxBuy 与库存取较小值作为步进器上限

```tsx
<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  maxBuy={2}
  triggerSlot={<UPButton text='最多买 2 件' />
```

### 页面内联

pageInline 直接铺在页面里，不走弹层

```tsx
<UPGoodsSku
  ref={inlineRef}
  pageInline
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  onConfirm={handleConfirm('内联')}
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/goods-sku/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-goods-sku
    :goodsInfo="goodsInfo"
    :skuTree="skuTree"
    :skuList="skuList"
    @confirm="confirmSku"
>
    <template #trigger>
        <up-button :stop="false" type="primary">打开SKU弹窗</up-button>
    </template>
</up-goods-sku>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/goodsSku/goodsSku.uvue`</small>

</template>

<template #uniappx>

```vue
<up-goods-sku
    :goodsInfo="goodsInfo"
    :skuTree="skuTree"
    :skuList="skuList"
    @confirm="confirmSku"
>
    <template #trigger>
        <up-button :stop="false" type="primary">打开SKU弹窗</up-button>
    </template>
</up-goods-sku>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/goodsSku/goodsSku.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `close` |
| `closed` |
| `confirm` |
| `open` |

### Slots

| Slot |
| --- |
| `header` |
| `trigger` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPGoodsSku` | `packages/ultra_ui/lib/src/widgets/up_goods_sku.dart` |
| React Native · TypeScript | `UPGoodsSku` | `src/components/goods-sku` |
| Taro · React + TypeScript | `UPGoodsSku` | `src/ultra-ui/components/up-goods-sku` |
| uni-app · Vue 3 | `up-goods-sku` | `uni_modules/uview-ultra/components/up-goods-sku` |
| uni-app-x · UTS / UVUE | `up-goods-sku` | `uni_modules/uview-ultra/components/up-goods-sku` |

