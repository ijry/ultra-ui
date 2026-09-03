---
title: Scroll list
description: A horizontally scrolling list with its own scrollbar indicator.
generated: true
---

# Scroll list

A horizontally scrolling list with its own scrollbar indicator.

<PlatformBadges component="scroll-list" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPScrollList
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #harmony>

#### Horizontal scrolling with a proportional indicator

```typescript
import { UPScrollList, UPScrollListProps } from '@lingyun/ultra-ui-hos';

UPScrollList({
  props: new UPScrollListProps({
    indicatorWidth: 72,
    indicatorBarWidth: 24,
    customStyle: { height: 118 },
    onScroll: (event: UPScrollListScrollEvent): void => {
      this.status = '偏移 ' + String(Math.round(event.offset)) + ' / ' + String(Math.round(event.maxOffset));
    },
    onLeft: (_event: UPScrollListEdgeEvent): void => { this.status = '已到左边界'; },
    onRight: (_event: UPScrollListEdgeEvent): void => { this.status = '已到右边界'; }
  })
}) {
  this.cards()
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/ScrollListDemo.ets`</small>

</template>

<template #flutter>

#### Basic usage

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPScrollList(
  key: const ValueKey('scroll-list-page-basic'),
  indicatorColor: '#fff0f0',
  indicatorActiveColor: '#f56c6c',
  onLeft: _onLeft,
  onRight: _onRight,
  children: goodsChildren,
)
```

#### Several menus

```dart
UPScrollList(
  key: const ValueKey('scroll-list-page-menu'),
  children: <Widget>[
    for (final row in _menuRows)
      Padding(
        padding: const EdgeInsets.only(top: 10),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            for (final item in row) _menuCard(item),
          ],
        ),
      ),
  ],
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/scroll_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPScrollList } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### Pill indicators

```tsx
import { UPScrollList } from '@ultra-ui'

<UPScrollList list={LIST} indicator mode='round' indicatorActiveColor='#ff6b6b' />
```

#### Fixed-width items

```tsx
<UPScrollList list={LIST} indicator itemWidth={120} indicatorActiveColor='#34c759' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/scroll-list/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
    <up-scroll-list>
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        </view>
    </up-scroll-list>
</template>
```

```vue

<script setup>  
import { reactive } from 'vue';  
  
const list = reactive([  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"  
    }  
]);  
</script>
```

```vue
<template>
    <up-scroll-list :indicator="indicator" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        </view>
    </up-scroll-list>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const list = reactive([  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"  
    }  
]);  
</script>
```

#### Compatibility and performance

```vue
<template>
    <up-scroll-list @right="right" @left="left">
        <view class="scroll-list" style="flex-direction: row;">
            <view
                class="scroll-list__goods-item"
                v-for="(item, index) in list"
                :key="index"
                :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
            >
                <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
                <text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
            </view>
            <view class="scroll-list__show-more">
                <text class="scroll-list__show-more__text">查看更多</text>
                <up-icon name="arrow-leftward" color="#f56c6c" size="12"></up-icon>
            </view>
        </view>
    </up-scroll-list>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const list = ref([  
  {  
    price: '230.5',  
    thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'  
  },  
  {  
    price: '74.1',  
    thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'  
  },  
  // ... 其他对象  
  {  
    price: '251.5',  
    thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'  
  }  
]);  
  
// 方法  
function left() {  
  console.log('left');  
}  
  
function right() {  
  console.log('right');  
}  
</script>
```

```vue
<style lang="scss">
.scroll-list {
	@include flex(column);

	&__goods-item {
		margin-right: 20px;

		&__image {
			width: 60px;
			height: 60px;
			border-radius: 4px;
		}

		&__text {
			color: #f56c6c;
			text-align: center;
			font-size: 12px;
			margin-top: 5px;
		}
	}

	&__show-more {
		background-color: #fff0f0;
		border-radius: 3px;
		padding: 3px 6px;
		@include flex(column);
		align-items: center;

		&__text {
			font-size: 12px;
			width: 12px;
			color: #f56c6c;
			line-height: 16px;
		}
	}
}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/scrollList.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
    <up-scroll-list>
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        </view>
    </up-scroll-list>
</template>
```

```vue

<script setup>  
import { reactive } from 'vue';  
  
const list = reactive([  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"  
    }  
]);  
</script>
```

```vue
<template>
    <up-scroll-list :indicator="indicator" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        </view>
    </up-scroll-list>
</template>
```

```vue
<script setup>  
import { reactive } from 'vue';  
  
const list = reactive([  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"  
    },  
    {  
        thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"  
    }  
]);  
</script>
```

#### Compatibility and performance

```vue
<template>
    <up-scroll-list @right="right" @left="left">
        <view class="scroll-list" style="flex-direction: row;">
            <view
                class="scroll-list__goods-item"
                v-for="(item, index) in list"
                :key="index"
                :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
            >
                <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
                <text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
            </view>
            <view class="scroll-list__show-more">
                <text class="scroll-list__show-more__text">查看更多</text>
                <up-icon name="arrow-leftward" color="#f56c6c" size="12"></up-icon>
            </view>
        </view>
    </up-scroll-list>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式数据  
const list = ref([  
  {  
    price: '230.5',  
    thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'  
  },  
  {  
    price: '74.1',  
    thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'  
  },  
  // ... 其他对象  
  {  
    price: '251.5',  
    thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'  
  }  
]);  
  
// 方法  
function left() {  
  console.log('left');  
}  
  
function right() {  
  console.log('right');  
}  
</script>
```

```vue
<style lang="scss">
.scroll-list {
	@include flex(column);

	&__goods-item {
		margin-right: 20px;

		&__image {
			width: 60px;
			height: 60px;
			border-radius: 4px;
		}

		&__text {
			color: #f56c6c;
			text-align: center;
			font-size: 12px;
			margin-top: 5px;
		}
	}

	&__show-more {
		background-color: #fff0f0;
		border-radius: 3px;
		padding: 3px 6px;
		@include flex(column);
		align-items: center;

		&__text {
			font-size: 12px;
			width: 12px;
			color: #f56c6c;
			line-height: 16px;
		}
	}
}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/scrollList.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `indicatorWidth` | 指示器的整体宽度 | `String / Number` | `—` |
| `indicatorBarWidth` | 滑块的宽度 | `String / Number` | `—` |
| `indicator` | 是否显示面板指示器 | `Boolean` | `—` |
| `indicatorColor` | 指示器非激活颜色 | `String` | `—` |
| `indicatorActiveColor` | 指示器的激活颜色 | `String` | `—` |
| `indicatorStyle` | 指示器样式，可通过bottom，left，right进行定位 | `String / Object` | `—` |

### Events

| Event |
| --- |
| `left` |
| `right` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPScrollList` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPListIndexComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPScrollList` | `ultra-ui/src/main/ets/components/UPScrollList.ets` |
| Flutter · Dart | `UPScrollList` | `packages/ultra_ui/lib/src/widgets/up_scroll_list.dart` |
| React Native · TypeScript | `UPScrollList` | `src/components/scroll-list` |
| Taro · React + TypeScript | `UPScrollList` | `src/ultra-ui/components/up-scroll-list` |
| uni-app · Vue 3 | `up-scroll-list` | `uni_modules/uview-ultra/components/up-scroll-list` |
| uni-app-x · UTS / UVUE | `up-scroll-list` | `uni_modules/uview-ultra/components/up-scroll-list` |

