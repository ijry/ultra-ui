---
title: Waterfall
description: A two-column masonry layout that always fills the shorter column next.
generated: true
---

# Waterfall

A two-column masonry layout that always fills the shorter column next.

<PlatformBadges component="waterfall" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Three columns

```tsx
import { UPWaterfall } from '@ultra-ui'

<UPWaterfall
  value={autoList}
  columns={3}
  addTime={50}
  renderItem={renderCard}
/>
```

#### Automatic column count

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

<small>Snippet from `ultra-ui-taro/src/pages/components/waterfall/index.tsx`</small>

</template>

<template #uniapp>

#### Core code

```vue
<up-waterfall v-model="flowList" columns="2">
	<template v-slot:column="{colList, colIndex}">
		<view v-for="(item, index) in colList" :key="index">
			<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
		</view>
	</template>
</up-waterfall>
```

#### Removing and clearing data

```js
let arr = [
	{idx: 1, name: 'lisa'},
	{idx: 2, name: 'mary'}
]
```

#### Full application example

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/waterfall.md`</small>

</template>

<template #uniappx>

#### Core code

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

#### Removing and clearing data

```js
let arr = [
	{idx: 1, name: 'lisa'},
	{idx: 2, name: 'mary'}
]
```

#### Full application example

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/waterfall.md`</small>

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

