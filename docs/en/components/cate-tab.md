---
title: Category tab
description: Two-level navigation with categories on the left and content on the right.
generated: true
---

# Category tab

Two-level navigation with categories on the left and content on the right.

<PlatformBadges component="cate-tab" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/cate_tab_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCateTab } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-taro/src/pages/components/cate-tab/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/cateTab.md`</small>

</template>

<template #uniappx>

#### 基本使用

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/cateTab.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `update:current` |

### Slots

| Slot |
| --- |
| `itemList` |
| `pageItem` |
| `rightTop` |
| `tabItem` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCateTab` | `packages/ultra_ui/lib/src/widgets/up_cate_tab.dart` |
| React Native · TypeScript | `UPCateTab` | `src/components/cate-tab` |
| Taro · React + TypeScript | `UPCateTab` | `src/ultra-ui/components/up-cate-tab` |
| uni-app · Vue 3 | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |
| uni-app-x · UTS / UVUE | `up-cate-tab` | `uni_modules/uview-ultra/components/up-cate-tab` |

