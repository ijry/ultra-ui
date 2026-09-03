---
title: List
description: A recycling container for long lists, used with list-item.
generated: true
---

# List

A recycling container for long lists, used with list-item.

<PlatformBadges component="list" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPList
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #harmony>

```typescript
import { UPList, UPListProps } from '@lingyun/ultra-ui-hos';

UPList({ props: new UPListProps({ height: 130, scrollIntoView: 'second' }) }) {
  this.groupedItems()
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/ListItemDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPList(
  height: 500,
  customStyle: const BoxDecoration(color: Colors.red),
  children: List<Widget>.generate(
    7,
    (_) => const UPListItem(
      child: UPImage(
        src: 'assets/uview/test/list-item.jpg',
        width: '100%',
        height: 160,
      ),
    ),
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/test_list_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPList } from 'ultra-ui-rn';

<UPList onScrollToLower={loadmore}>
  {indexList.map((item, index) => (
    <UPListItem key={index}>
      <UPCell
        iconNode={
          <UPAvatar customStyle={s.avatar} shape="square" size="35" src={item.url} />
        }
        title={`列表长度-${index + 1}`}
      />
    </UPListItem>
  ))}
</UPList>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/ListDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPList } from '@ultra-ui'

<UPList>
  <UPListItem title='选项一' />
  <UPListItem title='选项二' note='这是一段说明文字' />
  <UPListItem title='选项三' note='较长的说明文字会被截断处理展示两行' />
</UPList>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/list/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-list
    @scrolltolower="scrolltolower"
>
    <up-list-item
        v-for="(item, index) in indexList"
        :key="index"
    >
        <up-cell
            :title="`列表长度-${index + 1}`"
        >
            <template #icon>
                <up-avatar
                    shape="square"
                    size="35"
                    :src="item.url"
                    customStyle="margin: -3px 5px -3px 0"
                ></up-avatar>
            </template>
        </up-cell>
    </up-list-item>
</up-list>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsC/list/list.nvue`</small>

</template>

<template #uniappx>

```vue
<up-list
    @scrolltolower="scrolltolower"
>
    <up-list-item
        v-for="(item, index) in indexList"
        :key="index"
    >
        <up-cell
            :title="`列表长度-${index + 1}`"
        >
            <template #icon>
                <up-avatar
                    shape="square"
                    size="35"
                    :src="item.url"
                    customStyle="margin: -3px 5px -3px 0"
                ></up-avatar>
            </template>
        </up-cell>
    </up-list-item>
</up-list>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/list/list.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-list>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `showScrollbar` | 控制是否出现滚动条，仅nvue有效 | `Boolean` | `false` |
| `lowerThreshold` | 距底部多少时触发scrolltolower事件 | `String / Number` | `50` |
| `upperThreshold` | 距顶部多少时触发scrolltoupper事件，非nvue有效 | `String / Number` | `0` |
| `scrollTop` | 设置竖向滚动条位置 | `String / Number` | `0` |
| `offsetAccuracy` | 控制 onscroll 事件触发的频率，仅nvue有效 | `String / Number` | `10` |
| `enableFlex` | 启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效 | `Boolean` | `false` |
| `pagingEnabled` | 是否按分页模式显示List，默认值false | `Boolean` | `false` |
| `scrollable` | 是否允许List滚动 | `Boolean` | `true` |
| `scrollIntoView` | 值应为某子元素id（id不能以数字开头） | `String` | `''` |
| `scrollWithAnimation` | 在设置滚动条位置时使用动画过渡 | `Boolean` | `false` |
| `enableBackToTop` | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效 | `Boolean` | `false` |
| `height` | 列表的高度 | `String / Number` | `0` |
| `width` | 列表宽度 | `String / Number` | `0` |
| `preLoadScreen` | 列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度 | `String / Number` | `1` |
| `refresherEnabled` | 开启自定义下拉刷新 | `Boolean` | `—` |
| `refresherThreshold` | 设置自定义下拉刷新阈值 | `Number` | `—` |
| `refresherDefaultStyle` | 设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式 | `String` | `—` |
| `refresherBackground` | 设置自定义下拉刷新区域背景颜色 | `String` | `—` |
| `refresherTriggered` | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 | `Boolean` | `—` |

#### Events

| Event |
| --- |
| `refresherabort` |
| `refresherpulling` |
| `refresherrefresh` |
| `refresherrestore` |
| `scroll` |
| `scroll-to-lower` |
| `scroll-to-upper` |
| `scrolltolower` |
| `scrolltoupper` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-list-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `anchor` | 用于滚动到指定item | `String / Number` | `''` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPList` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPListIndexComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPList` | `ultra-ui/src/main/ets/components/UPList.ets` |
| Flutter · Dart | `UPList` | `packages/ultra_ui/lib/src/widgets/up_list.dart` |
| React Native · TypeScript | `UPList` | `src/components/list` |
| Taro · React + TypeScript | `UPList` | `src/ultra-ui/components/up-list` |
| uni-app · Vue 3 | `up-list` | `src/uni_modules/uview-plus/components/u-list` |
| uni-app-x · UTS / UVUE | `up-list` | `uni_modules/uview-ultra/components/up-list` |

