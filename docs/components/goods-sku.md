---
title: Goods SKU 商品规格
description: 电商商品规格选择弹层，处理规格组合与库存联动。
generated: true
---

# Goods SKU 商品规格

电商商品规格选择弹层，处理规格组合与库存联动。

<PlatformBadges component="goods-sku" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/goods_sku_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/GoodsSkuDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/goods-sku/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/goodsSku/goodsSku.uvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/goodsSku/goodsSku.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `close` |
| `closed` |
| `confirm` |
| `open` |

### 插槽

| 插槽名 |
| --- |
| `header` |
| `trigger` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPGoodsSku` | `packages/ultra_ui/lib/src/widgets/up_goods_sku.dart` |
| React Native · TypeScript | `UPGoodsSku` | `src/components/goods-sku` |
| Taro · React + TypeScript | `UPGoodsSku` | `src/ultra-ui/components/up-goods-sku` |
| uni-app · Vue 3 | `up-goods-sku` | `uni_modules/uview-ultra/components/up-goods-sku` |
| uni-app-x · UTS / UVUE | `up-goods-sku` | `uni_modules/uview-ultra/components/up-goods-sku` |

