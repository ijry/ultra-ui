---
title: Category tab 分类选项卡
description: 左侧分类、右侧内容的二级联动导航。
generated: true
---

# Category tab 分类选项卡

左侧分类、右侧内容的二级联动导航。

<PlatformBadges component="cate-tab" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

#### 左右联动

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCateTab(
  key: const ValueKey('cate-tab-page-follow'),
  mode: 'follow',
  height: '320px',
  tabList: _categories,
  current: 0,
  itemBuilder: _itemBuilder,
  tabBuilder: _followTabBuilder,
  onChange: (index) => setState(() {
    _followIndex = index;
  }),
)
```

#### 左右独立

```dart
UPCateTab(
  key: const ValueKey('cate-tab-page-tab'),
  mode: 'tab',
  height: '320px',
  tabList: _categories,
  current: _tabIndex,
  itemBuilder: _itemBuilder,
  onChange: (index) => setState(() {
    if (index != _tabIndex) _tabChanges += 1;
    _tabIndex = index;
  }),
  onUpdateCurrent: (index) => setState(() {
    _tabIndex = index;
  }),
  onUpdateModelValue: (index) => setState(() {
    _tabIndex = index;
  }),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/cate_tab_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCateTab } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

#### 基础两栏

follow 模式：滚动右侧自动联动左侧

```tsx
import { UPCateTab } from '@ultra-ui'

<UPCateTab height='70vh' tabList={basicTabs} />
```

#### 带图标

子项通过 icon 字段渲染缩略图

```tsx
<UPCateTab height='70vh' tabList={iconTabs} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/cate-tab/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

tabList指定tab列表，`tabKeyName`和`itemKeyName`指定对象的key。

```vue
<style lang='scss' scoped>
.cate-tab {
    height: calc(100vh - 150px);
    /* #ifdef H5 */
    height: calc(100vh - 150px - var(--window-top));
    /* #endif */
}
</style>
<template>
	<view>
        <view style="height: 138px;background: #f1f1f1;"></view>
		<up-cate-tab class="cate-tab" :tabList="tabList" tabKeyName="title" itemKeyName="title">
            <template #pageItem="{pageItem}">
                <view class="w-full">
                    <up-cell-group :border='false'>
                        <up-cell :border='false'>
                            <template #icon>
                                <up-image :src="pageItem.cover" width="100px" height="100px"></up-image>
                            </template>
                            <template v-slot:title>
                                <view>
                                    {{ pageItem.title }}
                                </view>
                            </template>
                            <template v-slot:label>
                                <view class="h-100 pt-1">
                                    <text class="text-md text-red">￥{{ pageItem.price }}</text>
                                </view>
                            </template>
                            <template v-slot:value>
                                <up-number-box></up-number-box>
                            </template>
                        </up-cell>
                    </up-cell-group>
                </view>
            </template>
        </up-cate-tab>
	</view>
</template>
```

```vue
<script setup>
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const tabList = ref([  
  { title: '选项一',  children: [
    {title: '水煮肉片', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 88}
    ]
  },  
  { title: '选项一',  children: [
    {title: '酸菜鱼', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 99}
    ]
  },
  { title: '选项一',  children: [
    {title: '水煮肉片', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 88}
    ]
  },  
  { title: '选项一',  children: [
    {title: '酸菜鱼', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 99}
    ]
  },
]);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/cateTab.md`</small>

</template>

<template #uniappx>

#### 基本使用

tabList指定tab列表，`tabKeyName`和`itemKeyName`指定对象的key。

```vue
<style lang='scss' scoped>
.cate-tab {
    height: calc(100vh - 150px);
    /* #ifdef H5 */
    height: calc(100vh - 150px - var(--window-top));
    /* #endif */
}
</style>
<template>
	<view>
        <view style="height: 138px;background: #f1f1f1;"></view>
		<up-cate-tab class="cate-tab" :tabList="tabList" tabKeyName="title" itemKeyName="title">
            <template #pageItem="{pageItem}">
                <view class="w-full">
                    <up-cell-group :border='false'>
                        <up-cell :border='false'>
                            <template #icon>
                                <up-image :src="pageItem.cover" width="100px" height="100px"></up-image>
                            </template>
                            <template v-slot:title>
                                <view>
                                    {{ pageItem.title }}
                                </view>
                            </template>
                            <template v-slot:label>
                                <view class="h-100 pt-1">
                                    <text class="text-md text-red">￥{{ pageItem.price }}</text>
                                </view>
                            </template>
                            <template v-slot:value>
                                <up-number-box></up-number-box>
                            </template>
                        </up-cell>
                    </up-cell-group>
                </view>
            </template>
        </up-cate-tab>
	</view>
</template>
```

```vue
<script setup>
import { ref, onMounted } from 'vue';  
  
// 响应式数据  
const tabList = ref([  
  { title: '选项一',  children: [
    {title: '水煮肉片', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 88}
    ]
  },  
  { title: '选项一',  children: [
    {title: '酸菜鱼', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 99}
    ]
  },
  { title: '选项一',  children: [
    {title: '水煮肉片', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 88}
    ]
  },  
  { title: '选项一',  children: [
    {title: '酸菜鱼', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png', price: 99}
    ]
  },
]);
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/cateTab.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `update:current` |

### 插槽

| 插槽名 |
| --- |
| `itemList` |
| `pageItem` |
| `rightTop` |
| `tabItem` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCateTab` | `packages/ultra_ui/lib/src/widgets/up_cate_tab.dart` |
| React Native · TypeScript | `UPCateTab` | `src/components/cate-tab` |
| Taro · React + TypeScript | `UPCateTab` | `src/ultra-ui/components/up-cate-tab` |
| uni-app · Vue 3 | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |
| uni-app-x · UTS / UVUE | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |

