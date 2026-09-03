---
title: Waterfall 瀑布流
description: 双列不等高瀑布流布局，自动把新内容放进较短的一列。
generated: true
---

# Waterfall 瀑布流

双列不等高瀑布流布局，自动把新内容放进较短的一列。

<PlatformBadges component="waterfall" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

#### 核心代码

```vue
<up-waterfall v-model="flowList" columns="2">
	<template v-slot:column="{colList, colIndex}">
		<view v-for="(item, index) in colList" :key="index">
			<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
		</view>
	</template>
</up-waterfall>
```

#### 移除或清空数据

移除或者清空，都需要通过`ref`调用组件内部的方法。

1. 移除数据

组件内部方法名为`remove`，需要传入"id"值，这个"id"键值的名称配置参数为`idKey`(默认`id`)，如下：

假设您的数据为:

```js
let arr = [
	{idx: 1, name: 'lisa'},
	{idx: 2, name: 'mary'}
]
```

那么您应该配置`idKey`为`idx`。

2. 清空数据

通过`ref`手动调用组件内部的`clear`方法，可以清空左右两列的数据。

说明：具体实现方法，请见下方的示例代码

#### 完整应用示例

```vue
<template>
	<view class="wrap">
		<up-button @click="clear">清空列表</up-button>
		<up-waterfall v-model="flowList" ref="uWaterfallRef" columns="2">
			<template v-slot:column="{colList, colIndex}">
				<view class="demo-warter" v-for="(item, index) in colList" :key="index">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<up-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></up-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view>
					<view class="demo-shop">
						{{item.shop}}
					</view>
					<up-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></up-icon>
				</view>
			</template>
		</up-waterfall>
		<up-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></up-loadmore>
	</view>
</template>
<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}
	
	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}
	
	.demo-image {
		width: 100%;
		border-radius: 4px;
	}
	
	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}
	
	.demo-tag {
		display: flex;
		margin-top: 5px;
	}
	
	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}
	
	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}
	
	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}
	
	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
```

```vue
<script setup>
import { ref, onMounted } from 'vue';
import { random, guid } from 'uview-plus';

const uWaterfallRef = ref(null);
const loadStatus = ref('loadmore');
const flowList = ref([]);
const list = ref([
  {
    price: 35,
    title: '北国风光，千里冰封，万里雪飘',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
  },
  {
    price: 75,
    title: '望长城内外，惟余莽莽',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
  },
  {
    price: 385,
    title: '大河上下，顿失滔滔',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
  },
  {
    price: 784,
    title: '欲与天公试比高',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
  },
  {
    price: 7891,
    title: '须晴日，看红装素裹，分外妖娆',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
  },
  {
    price: 2341,
    shop: '李白杜甫白居易旗舰店',
    title: '江山如此多娇，引无数英雄竞折腰',
    image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
  },
  {
    price: 661,
    shop: '李白杜甫白居易旗舰店',
    title: '惜秦皇汉武，略输文采',
    image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
  },
  {
    price: 1654,
    title: '唐宗宋祖，稍逊风骚',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
  },
  {
    price: 1678,
    title: '一代天骄，成吉思汗',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
  },
  {
    price: 924,
    title: '只识弯弓射大雕',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
  },
  {
    price: 8243,
    title: '俱往矣，数风流人物，还看今朝',
    shop: '李白杜甫白居易旗舰店',
    image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
  },
]);

onMounted(() => {
  addRandomData();
});

const addRandomData = () => {
  for(let i = 0; i < 10; i++) {
    let index = random(0, list.value.length - 1);
    // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
    let item = JSON.parse(JSON.stringify(list.value[index]))
    item.id = guid();
    flowList.value.push(item);
  }
};

const remove = (id) => {
  uWaterfallRef.value.remove(id);
};

const clear = () => {
  uWaterfallRef.value.clear();
};

// 模拟触底加载更多
const onReachBottom = () => {
  loadStatus.value = 'loading';
  // 模拟数据加载
  setTimeout(() => {
    addRandomData();
    loadStatus.value = 'loadmore';
  }, 1000)
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/waterfall.md`</small>

</template>

<template #uniappx>

#### 核心代码

```vue
<up-waterfall v-model="flowList">
	<template v-slot:left="{leftList}">
		<view v-for="(item, index) in leftList" :key="index">
			<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
		</view>
	</template>
	<template v-slot:right="{rightList}">
		<view v-for="(item, index) in rightList" :key="index">
			<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
		</view>
	</template>
</up-waterfall>
```

#### 移除或清空数据

移除或者清空，都需要通过`ref`调用组件内部的方法。

1. 移除数据

组件内部方法名为`remove`，需要传入"id"值，这个"id"键值的名称配置参数为`idKey`(默认`id`)，如下：

假设您的数据为:

```js
let arr = [
	{idx: 1, name: 'lisa'},
	{idx: 2, name: 'mary'}
]
```

那么您应该配置`idKey`为`idx`。

2. 清空数据

通过`ref`手动调用组件内部的`clear`方法，可以清空左右两列的数据。

说明：具体实现方法，请见下方的示例代码

#### 完整应用示例

```vue
<template>
	<view class="wrap">
		<up-button @click="clear">清空列表</up-button>
		<up-waterfall v-model="flowList" ref="uWaterfallRef">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<up-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></up-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view>
					<view class="demo-shop">
						{{item.shop}}
					</view>
					<up-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></up-icon>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
					<up-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></up-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view>
					<view class="demo-shop">
						{{item.shop}}
					</view>
					<up-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></up-icon>
				</view>
			</template>
		</up-waterfall>
		<up-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></up-loadmore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadStatus: 'loadmore',
				flowList: [],
				list: [
					{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
				]
			}
		},
		onLoad() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			addRandomData() {
				for(let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfallRef.remove(id);
			},
			clear() {
				this.$refs.uWaterfallRef.clear();
			}
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}
	
	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}
	
	.demo-image {
		width: 100%;
		border-radius: 4px;
	}
	
	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $up-main-color;
	}
	
	.demo-tag {
		display: flex;
		margin-top: 5px;
	}
	
	.demo-tag-owner {
		background-color: $up-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}
	
	.demo-tag-text {
		border: 1px solid $up-type-primary;
		color: $up-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}
	
	.demo-price {
		font-size: 30rpx;
		color: $up-type-error;
		margin-top: 5px;
	}
	
	.demo-shop {
		font-size: 22rpx;
		color: $up-tips-color;
		margin-top: 5px;
	}
</style>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/waterfall.md`</small>

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

