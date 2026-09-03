---
title: Grid
description: An evenly divided grid, typically used for home-screen shortcuts.
generated: true
---

# Grid

An evenly divided grid, typically used for home-screen shortcuts.

<PlatformBadges component="grid" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPGrid

UPGrid(col = 3, border = true, gap = 8) {
    repeat(3) { index ->
        UPGridItem(name = "grid-$index", onClick = {
            eventText = "栅格：$it"
        }) {
            DemoTile("宫格 ${index + 1}")
        }
    }
}
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPGrid, UPGridProps } from '@lingyun/ultra-ui-hos';

UPGrid({ props: new UPGridProps({ col: 3, gap: '8px', align: 'center' }) }) {
  UPGridItem({ props: new UPGridItemProps({ bgColor: '#ecf5ff' }) }) {
    Column() { Text('1').fontSize(15).fontColor('#2979ff') }
    .width('100%').height(48).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
  }
  UPGridItem({ props: new UPGridItemProps({ bgColor: '#ecf5ff' }) }) {
    Column() { Text('2').fontSize(15).fontColor('#2979ff') }
    .width('100%').height(48).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
  }
  UPGridItem({ props: new UPGridItemProps({ bgColor: '#ecf5ff' }) }) {
    Column() { Text('3').fontSize(15).fontColor('#2979ff') }
    .width('100%').height(48).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
  }
  UPGridItem({ props: new UPGridItemProps({ bgColor: '#ecf5ff' }) }) {
    Column() { Text('4').fontSize(15).fontColor('#2979ff') }
    .width('100%').height(48).justifyContent(FlexAlign.Center).alignItems(HorizontalAlign.Center)
  }
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/GridDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPGrid(
  border: true,
  col: 3,
  align: 'center',
  children: List<Widget>.generate(_swiperIcons.length, (index) {
    final number = offset + index + 1;
    return UPGridItem(
      name: number,
      onClick: (_) => UPToast.show(context, message: '点击了第$number个'),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const SizedBox(height: 10),
          UPIcon(name: _swiperIcons[index], size: 22),
          const SizedBox(height: 8),
          Text('宫格$number',
              style: const TextStyle(color: Color(0xFF909399))),
        ],
      ),
    );
  }),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/grid_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPGrid } from 'ultra-ui-rn';

<UPGrid col={3}>
<UPGridItem name="item1" bgColor="#e3f2fd">
<View style={gi.item}><Text style={gi.text}>蓝色背景</Text></View>
</UPGridItem>
<UPGridItem name="item2" bgColor="#fce4ec">
<View style={gi.item}><Text style={gi.text}>粉色背景</Text></View>
</UPGridItem>
<UPGridItem name="item3" bgColor="#e8f5e9">
<View style={gi.item}><Text style={gi.text}>绿色背景</Text></View>
</UPGridItem>
</UPGrid>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/GridItemDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPGrid } from '@ultra-ui'

<UPGrid>
  {ITEMS.map((item) => (
    <UPGridItem key={item.name} name={item.name}>
      <ItemBody icon={item.icon} text={item.text} />
    </UPGridItem>
  ))}
</UPGrid>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/grid/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-grid
    :border="false"
    @click="click"
    align="center"
>
    <up-grid-item
        v-for="(baseListItem,baseListIndex) in baseList"
        @click="click('test')"
        :key="baseListIndex"
    >
        <up-icon
            :customStyle="{paddingTop:20+'rpx'}"
            :name="baseListItem.name"
            :size="22"
        ></up-icon>
        <text class="grid-text">{{baseListItem.title}}</text>
    </up-grid-item>
</up-grid>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/grid/grid.nvue`</small>

</template>

<template #uniappx>

```vue
<up-grid
    :border="false"
    @click="click"
    align="center"
>
    <up-grid-item
        v-for="(baseListItem, baseListIndex) in baseList"
        @click="click('test')"
        :key="baseListIndex"
    >
        <up-icon
            :customStyle="{paddingTop:20+'rpx'}"
            :name="baseListItem['name']"
            :size="22"
        ></up-icon>
        <text class="grid-text">{{baseListItem['title']}}</text>
    </up-grid-item>
</up-grid>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/grid/grid.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-grid>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `col` | 分成几列 | `String / Number` | `3` |
| `border` | 是否显示边框 | `Boolean` | `false` |
| `align` | 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右 | `String` | `'left'` |
| `gap` | 间隔 | `String` | `—` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-grid-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `name` | 宫格的name | `String / Number / null` | `null` |
| `bgColor` | 背景颜色 | `String` | `'transparent'` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPGrid` | `UltraUI/Sources/UltraUI/Components/UPGrid.swift` |
| Android · Jetpack Compose | `UPGrid` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPGrid.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPGrid` | `ultra-ui/src/main/ets/components/UPGrid.ets` |
| Flutter · Dart | `UPGrid` | `packages/ultra_ui/lib/src/widgets/up_grid.dart` |
| React Native · TypeScript | `UPGrid` | `src/components/grid` |
| Taro · React + TypeScript | `UPGrid` | `src/ultra-ui/components/up-grid` |
| uni-app · Vue 3 | `up-grid` | `src/uni_modules/uview-plus/components/u-grid` |
| uni-app-x · UTS / UVUE | `up-grid` | `uni_modules/uview-ultra/components/up-grid` |

