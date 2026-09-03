---
title: List 长列表
description: 为长列表做了回收优化的容器，配合 list-item 使用。
generated: true
---

# List 长列表

为长列表做了回收优化的容器，配合 list-item 使用。

<PlatformBadges component="list" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPList
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #harmony>

```typescript
import { UPList, UPListProps } from '@lingyun/ultra-ui-hos';

UPList({ props: new UPListProps({ height: 130, scrollIntoView: 'second' }) }) {
  this.groupedItems()
}
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/ListItemDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/test_list_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/ListDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/list/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsC/list/list.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsC/list/list.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-list>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
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

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-list-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `anchor` | 用于滚动到指定item | `String / Number` | `''` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPList` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPListIndexComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPList` | `ultra-ui/src/main/ets/components/UPList.ets` |
| Flutter · Dart | `UPList` | `packages/ultra_ui/lib/src/widgets/up_list.dart` |
| React Native · TypeScript | `UPList` | `src/components/list` |
| Taro · React + TypeScript | `UPList` | `src/ultra-ui/components/up-list` |
| uni-app · Vue 3 | `up-list` | `src/uni_modules/uview-plus/components/u-list` |
| uni-app-x · UTS / UVUE | `up-list` | `uni_modules/uview-ultra/components/up-list` |

