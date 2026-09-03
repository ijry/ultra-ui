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

```tsx
import { UPGoodsSku } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/goodsSku/goodsSku.nvue`</small>

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

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `goodsInfo` | 商品信息 | `Object` | `—` |
| `skuTree` | SKU树形结构 | `Array` | `—` |
| `skuList` | SKU列表 | `Array` | `—` |
| `maxBuy` | 最大购买数量 | `Number` | `—` |
| `confirmText` | 确认按钮文字 | `String` | `—` |
| `closeable` | 是否显示关闭弹窗按钮 | `Boolean` | `—` |
| `pageInline` | 是否页面内联模式 | `Boolean` | `—` |

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
| uni-app · Vue 3 | `up-goods-sku` | `src/uni_modules/uview-plus/components/u-goods-sku` |
| uni-app-x · UTS / UVUE | `up-goods-sku` | `uni_modules/uview-ultra/components/up-goods-sku` |

