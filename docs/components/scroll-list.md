---
title: Scroll list 横向滚动
description: 横向滚动的列表容器，附带自定义滚动条指示。
generated: true
---

# Scroll list 横向滚动

横向滚动的列表容器，附带自定义滚动条指示。

<PlatformBadges component="scroll-list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPScrollList
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #harmony>

#### 横向滚动与比例指示器

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ScrollListDemo.ets`</small>

</template>

<template #flutter>

#### 基础使用

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

#### 多菜单扩展

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_c/scroll_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPScrollList } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 胶囊指示点

mode="round"，当前指示点拉成胶囊

```tsx
import { UPScrollList } from '@ultra-ui'

<UPScrollList list={LIST} indicator mode='round' indicatorActiveColor='#ff6b6b' />
```

#### 固定宽度条目

itemWidth 统一每条宽度

```tsx
<UPScrollList list={LIST} indicator itemWidth={120} indicatorActiveColor='#34c759' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/scroll-list/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

通过slot传入内容

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

# 指示器的使用

- `indicator` 用于控制指示器是否显示
- `indicatorWidth` 用于控制指示器整体的宽度
- `indicatorBarWidth` 用于控制指示器滑块的宽度
- `indicatorColor` 指示器的颜色
- `indicatorActiveColor` 滑块的颜色
- `indicatorStyle` 指示器的位置/样式控制

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

#### 兼容性与性能

- 此组件是在nvue中引入bindingx，此库类似于微信小程序wxs，目的是让js运行在视图层，减少视图层和逻辑层的通信折损，在nvue中会有更好的体验。
- 此组件是在APP-VUE、H5、小程序中使用的是wxs。
- 其他平台则使用js完成。

当滑动到最左边/最右边时，uview-plus提供了事件`left`和`right`可供调用，用于对列表滑动到端点处的业务实现。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/scrollList.md`</small>

</template>

<template #uniappx>

#### 基本使用

通过slot传入内容

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

# 指示器的使用

- `indicator` 用于控制指示器是否显示
- `indicatorWidth` 用于控制指示器整体的宽度
- `indicatorBarWidth` 用于控制指示器滑块的宽度
- `indicatorColor` 指示器的颜色
- `indicatorActiveColor` 滑块的颜色
- `indicatorStyle` 指示器的位置/样式控制

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

#### 兼容性与性能

- 此组件是在nvue中引入bindingx，此库类似于微信小程序wxs，目的是让js运行在视图层，减少视图层和逻辑层的通信折损，在nvue中会有更好的体验。
- 此组件是在APP-VUE、H5、小程序中使用的是wxs。
- 其他平台则使用js完成。

当滑动到最左边/最右边时，uview-ultra提供了事件`left`和`right`可供调用，用于对列表滑动到端点处的业务实现。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/scrollList.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `indicatorWidth` | 指示器的整体宽度 | `String / Number` | `—` |
| `indicatorBarWidth` | 滑块的宽度 | `String / Number` | `—` |
| `indicator` | 是否显示面板指示器 | `Boolean` | `—` |
| `indicatorColor` | 指示器非激活颜色 | `String` | `—` |
| `indicatorActiveColor` | 指示器的激活颜色 | `String` | `—` |
| `indicatorStyle` | 指示器样式，可通过bottom，left，right进行定位 | `String / Object` | `—` |

### 事件

| 事件名 |
| --- |
| `left` |
| `right` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPScrollList` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPListIndexComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPScrollList` | `ultra-ui/src/main/ets/components/UPScrollList.ets` |
| Flutter · Dart | `UPScrollList` | `packages/ultra_ui/lib/src/widgets/up_scroll_list.dart` |
| React Native · TypeScript | `UPScrollList` | `src/components/scroll-list` |
| Taro · React + TypeScript | `UPScrollList` | `src/ultra-ui/components/up-scroll-list` |
| uni-app · Vue 3 | `up-scroll-list` | `uni_modules/uview-ultra/components/up-scroll-list` |
| uni-app-x · UTS / UVUE | `up-scroll-list` | `uni_modules/uview-ultra/components/up-scroll-list` |

