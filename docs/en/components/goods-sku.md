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

```tsx
import { UPGoodsSku } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPGoodsSku } from '@ultra-ui'

<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  triggerSlot={<UPButton type='primary' text='选择规格' />
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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/goodsSku/goodsSku.nvue`</small>

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

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `goodsInfo` | 商品信息 | `Object` | `—` |
| `skuTree` | SKU树形结构 | `Array` | `—` |
| `skuList` | SKU列表 | `Array` | `—` |
| `maxBuy` | 最大购买数量 | `Number` | `—` |
| `confirmText` | 确认按钮文字 | `String` | `—` |
| `closeable` | 是否显示关闭弹窗按钮 | `Boolean` | `—` |
| `pageInline` | 是否页面内联模式 | `Boolean` | `—` |

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
| uni-app · Vue 3 | `up-goods-sku` | `src/uni_modules/uview-plus/components/u-goods-sku` |
| uni-app-x · UTS / UVUE | `up-goods-sku` | `uni_modules/uview-ultra/components/up-goods-sku` |

