---
title: Scroll list
description: A horizontally scrolling list with its own scrollbar indicator.
generated: true
---

# Scroll list

A horizontally scrolling list with its own scrollbar indicator.

<PlatformBadges component="scroll-list" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

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

### 固定宽度条目

itemWidth 统一每条宽度

```tsx
import { UPScrollList } from '@ultra-ui'

<UPScrollList list={LIST} indicator itemWidth={120} indicatorActiveColor='#34c759' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/scroll-list/index.tsx`</small>

</template>

<template #uniapp>

### 多菜单扩展

```vue
<up-scroll-list>
    <view class="scroll-list">
        <view
            class="scroll-list__line"
            v-for="(item, index) in menuArr"
            :key="index"
        >
            <view
                class="scroll-list__line__item"
                v-for="(item1, index1) in item"
                :key="index1"
                :class="[(index1 === item.length - 1) ? 'scroll-list__line__item--no-margin-right' : '']"
            >
                <image
                    class="scroll-list__line__item__image"
                    :src="menuBaseUrl + item1['icon']"
                    mode=""
                ></image>
                <text class="scroll-list__line__item__text">{{ item1['name'] }}</text>
            </view>
        </view>
    </view>
</up-scroll-list>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/scrollList/scrollList.uvue`</small>

</template>

<template #uniappx>

### 多菜单扩展

```vue
<up-scroll-list>
    <view class="scroll-list">
        <view
            class="scroll-list__line"
            v-for="(item, index) in menuArr"
            :key="index"
        >
            <view
                class="scroll-list__line__item"
                v-for="(item1, index1) in item"
                :key="index1"
                :class="[(index1 === item.length - 1) ? 'scroll-list__line__item--no-margin-right' : '']"
            >
                <image
                    class="scroll-list__line__item__image"
                    :src="menuBaseUrl + item1['icon']"
                    mode=""
                ></image>
                <text class="scroll-list__line__item__text">{{ item1['name'] }}</text>
            </view>
        </view>
    </view>
</up-scroll-list>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/scrollList/scrollList.uvue`</small>

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

