---
title: Goods SKU
description: An e-commerce SKU sheet handling attribute combinations and stock.
generated: true
---

# Goods SKU

An e-commerce SKU sheet handling attribute combinations and stock.

<PlatformBadges component="goods-sku" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### Basic usage

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

#### Cap the quantity

```dart
UPGoodsSku(
  key: const ValueKey('goods-sku-page-max-buy'),
  goodsInfo: _goodsInfo,
  skuTree: _skuTree,
  skuList: _skuList,
  maxBuy: 10,
  onConfirm: _confirmSku,
  trigger: const UPButton(
    stop: false,
    type: 'error',
    text: '打开SKU弹窗(最大购买10件)',
  ),
)
```

#### Custom confirm-button text

```dart
UPGoodsSku(
  key: const ValueKey('goods-sku-page-confirm-text'),
  goodsInfo: _goodsInfo,
  skuTree: _skuTree,
  skuList: _skuList,
  confirmText: '立即购买',
  onConfirm: _confirmSku,
  trigger: const UPButton(
    stop: false,
    type: 'warning',
    text: '打开SKU弹窗',
  ),
)
```

#### Inline page mode

```dart
UPGoodsSku(
  key: const ValueKey('goods-sku-page-inline'),
  goodsInfo: _goodsInfo,
  skuTree: _skuTree,
  skuList: _skuList,
  pageInline: true,
  confirmText: '立即购买',
  onConfirm: _confirmSku,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/goods_sku_page.dart`</small>

</template>

<template #reactnative>

#### Inline page mode

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

#### Basic usage

```tsx
import { UPGoodsSku } from '@ultra-ui'

<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  triggerSlot={<UPButton type='primary' text='选择规格' />
```

#### Three dimensions

```tsx
<UPGoodsSku
  goodsInfo={{ image: THUMB, price: 3999, stock: 21 }}
  skuTree={bigTree}
  skuList={bigList}
  confirmText='立即购买'
  triggerSlot={<UPButton text='选择配置' />
```

#### Capping the quantity

```tsx
<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  maxBuy={2}
  triggerSlot={<UPButton text='最多买 2 件' />
```

#### Inline in the page

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

#### Basic usage

```vue
<script setup>
import { ref } from 'vue';

// 商品信息
const goodsInfo = ref({
	image: 'https://picsum.photos/200/200',
	price: 99.00,
	stock: 100
});

// SKU树形结构
const skuTree = ref([
	{
		label: '颜色',
		name: 'color',
		children: [
			{ id: 1, name: '红色' },
			{ id: 2, name: '蓝色' },
			{ id: 3, name: '黑色' }
		]
	},
	{
		label: '尺寸',
		name: 'size',
		children: [
			{ id: 1, name: 'S' },
			{ id: 2, name: 'M' },
			{ id: 3, name: 'L' },
			{ id: 4, name: 'XL' }
		]
	}
]);

// SKU列表
const skuList = ref([
	{
		id: 1,
		color: 1,
		size: 1,
		price: 99.00,
		stock: 50
	},
	{
		id: 2,
		color: 1,
		size: 2,
		price: 99.00,
		stock: 40
	},
	{
		id: 3,
		color: 2,
		size: 1,
		price: 109.00,
		stock: 30
	},
	{
		id: 4,
		color: 2,
		size: 3,
		price: 109.00,
		stock: 20
	},
	{
		id: 5,
		color: 3,
		size: 4,
		price: 89.00,
		stock: 60
	}
]);

function confirmSku(e) {
	uni.showToast({
		title: `选择了: ${e.selectedText}, 数量: ${e.num}`,
		icon: 'none'
	});
}
</script>
```

#### Cap the quantity

```vue
<template>
	<view>
		<up-goods-sku
			:goodsInfo="goodsInfo"
			:skuTree="skuTree"
			:skuList="skuList"
			:maxBuy="10"
			@confirm="confirmSku"
		>
            <template #trigger>
                <up-button :stop="false" type="error">打开SKU弹窗(最大购买10件)</up-button>
            </template>
        </up-goods-sku>
	</view>
</template>
```

#### Custom confirm-button text

```vue
<template>
	<view>
		<up-goods-sku
			:goodsInfo="goodsInfo"
			:skuTree="skuTree"
			:skuList="skuList"
			confirmText="立即购买"
			@confirm="confirmSku"
		>
            <template #trigger>
                <up-button :stop="false" type="warning">打开SKU弹窗</up-button>
            </template>
        </up-goods-sku>
	</view>
</template>
```

#### Inline page mode

```vue
<template>
	<view>
		<up-goods-sku
			:goodsInfo="goodsInfo"
			:skuTree="skuTree"
			:skuList="skuList"
            :pageInline="true"
			confirmText="立即购买"
			@confirm="confirmSku"
		>
        </up-goods-sku>
	</view>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/goodsSku.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<script setup>
import { ref } from 'vue';

// 商品信息
const goodsInfo = ref({
	image: 'https://picsum.photos/200/200',
	price: 99.00,
	stock: 100
});

// SKU树形结构
const skuTree = ref([
	{
		label: '颜色',
		name: 'color',
		children: [
			{ id: 1, name: '红色' },
			{ id: 2, name: '蓝色' },
			{ id: 3, name: '黑色' }
		]
	},
	{
		label: '尺寸',
		name: 'size',
		children: [
			{ id: 1, name: 'S' },
			{ id: 2, name: 'M' },
			{ id: 3, name: 'L' },
			{ id: 4, name: 'XL' }
		]
	}
]);

// SKU列表
const skuList = ref([
	{
		id: 1,
		color: 1,
		size: 1,
		price: 99.00,
		stock: 50
	},
	{
		id: 2,
		color: 1,
		size: 2,
		price: 99.00,
		stock: 40
	},
	{
		id: 3,
		color: 2,
		size: 1,
		price: 109.00,
		stock: 30
	},
	{
		id: 4,
		color: 2,
		size: 3,
		price: 109.00,
		stock: 20
	},
	{
		id: 5,
		color: 3,
		size: 4,
		price: 89.00,
		stock: 60
	}
]);

function confirmSku(e) {
	uni.showToast({
		title: `选择了: ${e.selectedText}, 数量: ${e.num}`,
		icon: 'none'
	});
}
</script>
```

#### Cap the quantity

```vue
<template>
	<view>
		<up-goods-sku
			:goodsInfo="goodsInfo"
			:skuTree="skuTree"
			:skuList="skuList"
			:maxBuy="10"
			@confirm="confirmSku"
		>
            <template #trigger>
                <up-button :stop="false" type="error">打开SKU弹窗(最大购买10件)</up-button>
            </template>
        </up-goods-sku>
	</view>
</template>
```

#### Custom confirm-button text

```vue
<template>
	<view>
		<up-goods-sku
			:goodsInfo="goodsInfo"
			:skuTree="skuTree"
			:skuList="skuList"
			confirmText="立即购买"
			@confirm="confirmSku"
		>
            <template #trigger>
                <up-button :stop="false" type="warning">打开SKU弹窗</up-button>
            </template>
        </up-goods-sku>
	</view>
</template>
```

#### Inline page mode

```vue
<template>
	<view>
		<up-goods-sku
			:goodsInfo="goodsInfo"
			:skuTree="skuTree"
			:skuList="skuList"
            :pageInline="true"
			confirmText="立即购买"
			@confirm="confirmSku"
		>
        </up-goods-sku>
	</view>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/goodsSku.md`</small>

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

