---
title: Goods SKU 商品规格
description: 电商商品规格选择弹层，处理规格组合与库存联动。
generated: true
---

# Goods SKU 商品规格

电商商品规格选择弹层，处理规格组合与库存联动。

<PlatformBadges component="goods-sku" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 基本使用

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

#### 自定义最大购买数量

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

#### 自定义确认按钮文字

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

#### 无弹窗页面模式

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/goods_sku_page.dart`</small>

</template>

<template #reactnative>

#### 无弹窗页面模式

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

#### 基础用法

点击按钮弹出规格面板。绿色仅有 L、蓝色无 S、红色 L 零库存，可观察联动禁用

```tsx
import { UPGoodsSku } from '@ultra-ui'

<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  triggerSlot={<UPButton type='primary' text='选择规格' />
```

#### 三个维度

仅三种组合存在，选择过程中大量选项会被禁用

```tsx
<UPGoodsSku
  goodsInfo={{ image: THUMB, price: 3999, stock: 21 }}
  skuTree={bigTree}
  skuList={bigList}
  confirmText='立即购买'
  triggerSlot={<UPButton text='选择配置' />
```

#### 限制购买数量

maxBuy 与库存取较小值作为步进器上限

```tsx
<UPGoodsSku
  goodsInfo={goodsInfo}
  skuTree={skuTree}
  skuList={skuList}
  maxBuy={2}
  triggerSlot={<UPButton text='最多买 2 件' />
```

#### 页面内联

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

#### 基本使用

- 通过`goodsInfo`设置商品基本信息（图片、价格、库存等）
- 通过`skuTree`设置规格树形结构
- 通过`skuList`设置具体规格组合及其价格、库存等信息

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

#### 自定义最大购买数量

通过`maxBuy`参数设置最大购买数量，默认为999。

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

#### 自定义确认按钮文字

通过confirmText参数设置确认按钮的文字内容。

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

#### 页面内联模式

通过`pageInline`参数启用页面内联模式，组件将直接显示在页面中而不是弹窗形式。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/goodsSku.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`goodsInfo`设置商品基本信息（图片、价格、库存等）
- 通过`skuTree`设置规格树形结构
- 通过`skuList`设置具体规格组合及其价格、库存等信息

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

#### 自定义最大购买数量

通过`maxBuy`参数设置最大购买数量，默认为999。

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

#### 自定义确认按钮文字

通过confirmText参数设置确认按钮的文字内容。

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

#### 页面内联模式

通过`pageInline`参数启用页面内联模式，组件将直接显示在页面中而不是弹窗形式。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/goodsSku.md`</small>

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

