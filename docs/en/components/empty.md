---
title: Empty
description: An empty-state placeholder with several built-in illustrations.
generated: true
---

# Empty

An empty-state placeholder with several built-in illustrations.

<PlatformBadges component="empty" show-missing />

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
import net.lingyun.ultraui.android.components.UPEmpty
import net.lingyun.ultraui.android.components.UPEmptyProps

UPEmpty(props = UPEmptyProps(mode = "data", text = "暂无数据"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayerContentDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPEmpty, UPEmptyProps } from '@lingyun/ultra-ui-hos';

UPEmpty({ props: new UPEmptyProps({
  mode: 'search',
  text: '没有匹配的数据',
  iconSize: 72,
  width: '100%',
  height: 148
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/EmptyDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPEmpty(
  mode: _mode,
  icon: _selectedOption.emptyAsset,
  text: _selectedOption.title,
  child: _mode == 'car'
      ? const Padding(
          padding: EdgeInsets.only(top: 10),
          child: UPButton(
            text: '查看更多商品',
            size: 'small',
            type: 'primary',
          ),
        )
      : null,
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/empty_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPEmpty } from 'ultra-ui-rn';

<UPEmpty icon={imgList[mode]} mode={mode}>
  {mode === 'car' ? (
    <UPButton customStyle={s.moreButton} size="small" text="查看更多商品" type="primary" />
  ) : null}
</UPEmpty>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/EmptyDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPEmpty } from '@ultra-ui'

<UPEmpty mode='list' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/empty/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-empty
    :mode="mode"
    :icon="imgList[mode]"
>
    <up-button
        size="small"
        type="primary"
        :style="{marginTop:10+'px'}"
        v-if="mode=='car'"
        text="查看更多商品"
    >
    </up-button>
</up-empty>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsA/empty/empty.nvue`</small>

</template>

<template #uniappx>

```vue
<up-empty
    :mode="mode"
    :icon="imgList[mode]"
>
    <up-button
        size="small"
        type="primary"
        :style="{marginTop:10+'px'}"
        v-if="mode=='car'"
        text="查看更多商品"
    >
    </up-button>
</up-empty>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/empty/empty.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `icon` | 内置图标名称，或图片路径，建议绝对路径 | `String` | `''` |
| `text` | 提示文字 | `String` | `''` |
| `textColor` | 文字颜色 | `String` | `'#c0c4cc'` |
| `textSize` | 文字大小 | `String / Number` | `14` |
| `iconColor` | 图标的颜色 | `String` | `'#c0c4cc'` |
| `iconSize` | 图标的大小 | `String / Number` | `90` |
| `mode` | 选择预置的图标类型 | `String` | `'data'` |
| `width` | 图标宽度，单位px | `String / Number` | `160` |
| `height` | 图标高度，单位px | `String / Number` | `160` |
| `show` | 是否显示组件 | `Boolean` | `true` |
| `marginTop` | 组件距离上一个元素之间的距离，默认px单位 | `String / Number` | `0` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPEmpty` | `UltraUI/Sources/UltraUI/Components/UPEmpty.swift` |
| Android · Jetpack Compose | `UPEmpty` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPEmpty.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPEmpty` | `ultra-ui/src/main/ets/components/UPEmpty.ets` |
| Flutter · Dart | `UPEmpty` | `packages/ultra_ui/lib/src/widgets/up_empty.dart` |
| React Native · TypeScript | `UPEmpty` | `src/components/empty` |
| Taro · React + TypeScript | `UPEmpty` | `src/ultra-ui/components/up-empty` |
| uni-app · Vue 3 | `up-empty` | `src/uni_modules/uview-plus/components/u-empty` |
| uni-app-x · UTS / UVUE | `up-empty` | `uni_modules/uview-ultra/components/up-empty` |

