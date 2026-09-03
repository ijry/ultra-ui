---
title: Tabs
description: Horizontal tabs with scrolling, badges and a customisable indicator.
generated: true
---

# Tabs

Horizontal tabs with scrolling, badges and a customisable indicator.

<PlatformBadges component="tabs" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPTabs
import net.lingyun.ultraui.android.components.UPTabsProps

DemoSection("标签页") { UPTabs(UPTabsProps(list = listOf("全部", "待支付", "已完成"), current = tab), onChange = { tab = it })
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTabs, UPTabsProps } from '@lingyun/ultra-ui-hos';

UPTabs({ props: new UPTabsProps({ list: this.list, current: this.current, onCurrentChange: (index: number): void => { this.current = index; }, onClick: (event: UPTabsClickEvent): void => { this.message = '点击：' + String(event.item.name); }, onChange: (event: UPTabsClickEvent): void => { this.change(event); }, onLongPress: (event: UPTabsClickEvent): void => { this.message = '长按：' + String(event.item.name); } }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TabsDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTabs(
  key: const ValueKey('tabs-page-basic'),
  list: _baseTabs,
  current: _current,
  onChange: _selectTab,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/tabs_page.dart`</small>

</template>

<template #reactnative>

### 基础演示

```tsx
import { UPTabs } from 'ultra-ui-rn';

<UPTabs current={3} list={list1} onClick={click} />
```

### 显示徽标

```tsx
<UPTabs list={list2} />
```

### 禁止滚动

```tsx
<UPTabs list={list6} scrollable={false} />
```

### 禁用菜单

```tsx
<UPTabs list={list3} />
```

### 自定义样式

```tsx
<UPTabs
  activeStyle={ACTIVE_STYLE}
  inactiveStyle={INACTIVE_STYLE}
  itemStyle={s.itemStyle}
  lineColor="#f56c6c"
  lineWidth="30"
  list={list4}
/>
```

### 滑块设置背景图

```tsx
<UPTabs
  activeStyle={ACTIVE_STYLE}
  inactiveStyle={INACTIVE_STYLE}
  itemStyle={s.itemStyle}
  lineHeight="7"
  lineWidth="20"
  list={list4}
/>
```

### 胶囊模式

```tsx
<UPTabs list={listShape} scrollable={false} shapeMode="capsule" />
```

### 卡片模式

```tsx
<UPTabs list={listCard} lineWidth="26" scrollable={false} shapeMode="card" />
```

### 圆角矩形箭头模式

```tsx
<UPTabs list={listPillArrow} scrollable={false} shapeMode="pill-arrow" />
```

### Tag模式

```tsx
<UPTabs list={listTag} shapeMode="tag" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/TabsDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

scrollable={false} 时所有标签等分容器宽度

```tsx
import { UPTabs } from '@ultra-ui'

<UPTabs
  list={FEW_LIST}
  current={few}
  scrollable={false}
  onChange={handleChange(setFew)}
/>
```

### 横向滚动

scrollable 默认为 true，标签超出后横向滚动，选中项自动滚到中间

```tsx
<UPTabs list={MANY_LIST} current={many} onChange={handleChange(setMany)} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/tabs/index.tsx`</small>

</template>

<template #uniapp>

### 基础演示

```vue
<up-tabs :list="list1" @click="click" :current="3">
</up-tabs>
```

### 粘性布局

```vue
<up-tabs
    :list="list1"
>
</up-tabs>
```

### 显示徽标

```vue
<up-tabs :list="list2">
</up-tabs>
```

### 禁止滚动

```vue
<up-tabs :list="list6" :scrollable="false">
</up-tabs>
```

### 禁用菜单

```vue
<up-tabs :list="list3">
</up-tabs>
```

### 自定义样式

```vue
<up-tabs
    :list="list4"
    lineWidth="30"
    lineColor="#f56c6c"
    :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }"
    :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }"
    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
>
</up-tabs>
```

### 滑块设置背景图

```vue
<up-tabs
    :list="list4"
    lineWidth="20"
    lineHeight="7"
    :lineColor="`url(${lineBg}) 100% 100%`"
    :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }"
    :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }"
    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
>
</up-tabs>
```

### 自定义内容插槽

```vue
<up-tabs :list="list1">
    <template #default="{item, keyName}">
        <text class="u-tabs__wrapper__nav__item__text"
            style="color: red">
            {{item != null ? (item as UTSJSONObject)[keyName as string] : '-'}}
        </text>
    </template>
</up-tabs>
```

### 右侧自定义插槽

```vue
<up-tabs :list="list1" v-model:current="list1Current">
    <template #right>
        <view
            style="padding-left: 4px;"
            @tap="toastSlotClick"
        >
            <up-icon
                name="list"
                size="21"
                bold
            ></up-icon>
        </view>
    </template>
</up-tabs>
```

### 在swiper中使用

```vue
<up-tabs :list="list1">
    <template #default="{item, keyName}">
        <text class="u-tabs__wrapper__nav__item__text"
            style="color: red">
            {{item != null ? (item as UTSJSONObject)[keyName as string] : '-'}}
        </text>
    </template>
</up-tabs>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/tabs/tabs.uvue`</small>

</template>

<template #uniappx>

### 基础演示

```vue
<up-tabs :list="list1" @click="click" :current="3">
</up-tabs>
```

### 粘性布局

```vue
<up-tabs
    :list="list1"
>
</up-tabs>
```

### 显示徽标

```vue
<up-tabs :list="list2">
</up-tabs>
```

### 禁止滚动

```vue
<up-tabs :list="list6" :scrollable="false">
</up-tabs>
```

### 禁用菜单

```vue
<up-tabs :list="list3">
</up-tabs>
```

### 自定义样式

```vue
<up-tabs
    :list="list4"
    lineWidth="30"
    lineColor="#f56c6c"
    :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }"
    :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }"
    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
>
</up-tabs>
```

### 滑块设置背景图

```vue
<up-tabs
    :list="list4"
    lineWidth="20"
    lineHeight="7"
    :lineColor="`url(${lineBg}) 100% 100%`"
    :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }"
    :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }"
    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
>
</up-tabs>
```

### 自定义内容插槽

```vue
<up-tabs :list="list1">
    <template #default="{item, keyName}">
        <text class="u-tabs__wrapper__nav__item__text"
            style="color: red">
            {{item != null ? (item as UTSJSONObject)[keyName as string] : '-'}}
        </text>
    </template>
</up-tabs>
```

### 右侧自定义插槽

```vue
<up-tabs :list="list1" v-model:current="list1Current">
    <template #right>
        <view
            style="padding-left: 4px;"
            @tap="toastSlotClick"
        >
            <up-icon
                name="list"
                size="21"
                bold
            ></up-icon>
        </view>
    </template>
</up-tabs>
```

### 在swiper中使用

```vue
<up-tabs :list="list1">
    <template #default="{item, keyName}">
        <text class="u-tabs__wrapper__nav__item__text"
            style="color: red">
            {{item != null ? (item as UTSJSONObject)[keyName as string] : '-'}}
        </text>
    </template>
</up-tabs>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsC/tabs/tabs.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-tabs>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `duration` | 滑块的移动过渡时间，单位ms | `Number` | `300` |
| `list` | tabs标签数组 | `Array` | `[]` |
| `lineColor` | 滑块颜色 | `String` | `''` |
| `activeStyle` | 菜单选择中时的样式 | `String / Object` | `{ color: '#303133' }` |
| `inactiveStyle` | 菜单非选中时的样式 | `String / Object` | `{ color: '#606266' }` |
| `lineWidth` | 滑块长度 | `String / Number` | `20` |
| `lineHeight` | 滑块高度 | `String / Number` | `3` |
| `lineBgSize` | 滑块背景显示大小，当滑块背景设置为图片时使用 | `String` | `'cover'` |
| `itemStyle` | 菜单item的样式 | `String / Object` | `{ height: '44px' }` |
| `scrollable` | 菜单是否可滚动 | `Boolean` | `true` |
| `current` | 当前选中标签的索引 | `Number / String` | `0` |
| `keyName` | 默认读取的键名 | `String` | `'name'` |
| `iconStyle` | 左侧图标样式 | `String / Object` | `{}` |
| `shapeMode` | 形态模式，可选：capsule/card/pill-arrow/tag | `String` | `''` |

#### Events

| Event |
| --- |
| `change` |
| `click` |
| `longPress` |
| `update:current` |

#### Slots

| Slot |
| --- |
| `content` |
| `default` |
| `icon` |
| `left` |
| `right` |

### `<up-tabs-item>`

#### Slots

| Slot |
| --- |
| `default` |

### `<up-tabs-pro>`

#### Events

| Event |
| --- |
| `change` |
| `click` |
| `longPress` |
| `update:current` |

#### Slots

| Slot |
| --- |
| `content` |
| `default` |
| `icon` |
| `left` |
| `right` |
| `tab` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPTabs` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTabs` | `ultra-ui/src/main/ets/components/UPTabs.ets` |
| Flutter · Dart | `UPTabs` | `packages/ultra_ui/lib/src/widgets/up_tabs.dart` |
| React Native · TypeScript | `UPTabs` | `src/components/tabs` |
| Taro · React + TypeScript | `UPTabs` | `src/ultra-ui/components/up-tabs` |
| uni-app · Vue 3 | `up-tabs` | `uni_modules/uview-ultra/components/up-tabs` |
| uni-app-x · UTS / UVUE | `up-tabs` | `uni_modules/uview-ultra/components/up-tabs` |

