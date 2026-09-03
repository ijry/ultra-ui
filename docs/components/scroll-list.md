---
title: Scroll list 横向滚动
description: 横向滚动的列表容器，附带自定义滚动条指示。
generated: true
---

# Scroll list 横向滚动

横向滚动的列表容器，附带自定义滚动条指示。

<PlatformBadges component="scroll-list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

```tsx
import { UPScrollList } from '@ultra-ui'

<UPScrollList list={LIST} indicator mode='round' indicatorActiveColor='#ff6b6b' />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/scroll-list/index.tsx`</small>

</template>

<template #uniapp>

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
                :class="[(index1 === item.length - 1) && 'scroll-list__line__item--no-margin-right']"
            >
                <image
                    class="scroll-list__line__item__image"
                    :src="menuBaseUrl + item1.icon"
                    mode=""
                ></image>
                <text class="scroll-list__line__item__text">{{ item1.name }}</text>
            </view>
        </view>
    </view>
</up-scroll-list>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/scrollList/scrollList.nvue`</small>

</template>

<template #uniappx>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/scrollList/scrollList.uvue`</small>

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
| uni-app · Vue 3 | `up-scroll-list` | `src/uni_modules/uview-plus/components/u-scroll-list` |
| uni-app-x · UTS / UVUE | `up-scroll-list` | `uni_modules/uview-ultra/components/up-scroll-list` |

