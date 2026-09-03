---
title: Tag
description: Marks keywords or categories; supports plain, rounded and closable styles.
generated: true
---

# Tag

Marks keywords or categories; supports plain, rounded and closable styles.

<PlatformBadges component="tag" show-missing />

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
import net.lingyun.ultraui.android.components.UPTag
import net.lingyun.ultraui.android.components.UPTagProps

UPTag(
    props = UPTagProps(text = "可关闭标签", type = "success", closable = true, name = "tag-demo"),
    onClick = { eventText = "标签：点击 $it" },
    onClose = { eventText = "标签：关闭 $it" },
)
```

```kotlin
UPTag(props = UPTagProps(text = "plain", type = "primary", plain = true))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

#### 类型与朴素样式

```typescript
import { UPTag, UPTagProps } from '@lingyun/ultra-ui-hos';

UPTag({ props: new UPTagProps({ text: '主要', type: 'primary' }) })
```

#### 可关闭标签

```typescript
UPTag({ props: new UPTagProps({
  text: '点击右侧关闭',
  type: 'error',
  closable: true,
  show: this.closeableVisible,
  name: 'demo-tag',
  onClose: (): void => {
    this.close();
  }
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TagDemo.ets`</small>

</template>

<template #flutter>

#### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTag(text: '标签', plain: true, size: 'mini', type: 'warning')
```

#### 自定义主题

```dart
UPTag(text: '标签')
```

#### 圆形标签

```dart
UPTag(text: '标签', plain: true, shape: 'circle')
```

#### 镂空标签

```dart
UPTag(text: '标签', plain: true)
```

#### 镂空带背景色

```dart
UPTag(text: '标签', plain: true, plainFill: true)
```

#### 自定义尺寸

```dart
UPTag(text: '标签', plain: true, size: 'mini')
```

#### 带图片和图标

```dart
UPTag(text: '标签', size: 'mini', icon: 'map', plain: true)
```

#### 单选标签

```dart
UPTag(
  text: '选项${index + 1}',
  plain: _radio != index,
  type: 'warning',
  name: index,
  onClick: (_) => _selectRadio(index),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/tag_page.dart`</small>

</template>

<template #reactnative>

#### 基础功能

```tsx
import { UPTag } from 'ultra-ui-rn';

<UPTag text="标签" plain size="mini" type="warning" />
```

#### 自定义主题

```tsx
<UPTag text="标签" />
```

#### 圆形标签

```tsx
<UPTag text="标签" plain shape="circle" />
```

#### 镂空标签

```tsx
<UPTag text="标签" plain />
```

#### 镂空带背景色

```tsx
<UPTag text="标签" plain plainFill />
```

#### 自定义尺寸

```tsx
<UPTag text="标签" plain size="mini" />
```

#### 带图片和图标

```tsx
<UPTag text="标签" size="mini" icon="map" plain />
```

#### 单选标签

```tsx
<UPTag
  text={`选项${index + 1}`}
  plain={!item.checked}
  type="warning"
  name={index}
  onClick={radioClick}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/TagDemo.tsx`</small>

</template>

<template #taro>

#### 主题

type：primary / info / success / warning / error

```tsx
import { UPTag } from '@ultra-ui'

<UPTag key={type} type={type} text={type} />
```

#### 镂空

plain 背景透明、文字与边框同色

```tsx
<UPTag key={type} plain type={type} text={type} />
```

#### 镂空填充

plain 配合 plainFill 填充浅色背景

```tsx
<UPTag key={type} plain plainFill type={type} text={type} />
```

#### 形状

shape：square 方形圆角 / circle 两端半圆

```tsx
<UPTag shape='square' text='square' />
```

#### 尺寸

size：large / medium / mini

```tsx
<UPTag size='large' text='large' />
```

#### 图标

icon 传内置图标名，iconColor 可单独指定颜色

```tsx
<UPTag icon='star-fill' text='收藏' />
```

#### 禁用

disabled 后置灰且不响应点击

```tsx
<UPTag disabled text='disabled' />
```

#### 自定义颜色

bgColor / color / borderColor

```tsx
<UPTag bgColor='#7232dd' color='#ffffff' text='紫色' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/tag/index.tsx`</small>

</template>

<template #uniapp>

#### 基础功能

```vue
<up-tag
    text="标签"
    plain
    size="mini"
    type="warning"
>
</up-tag>
```

#### 自定义主题

```vue
<up-tag text="标签">
</up-tag>
```

#### 圆形标签

```vue
<up-tag
    text="标签"
    plain
    shape="circle"
>
</up-tag>
```

#### 镂空标签

```vue
<up-tag
    text="标签"
    plain
>
</up-tag>
```

#### 镂空带背景色

```vue
<up-tag
    text="标签"
    plain
    plainFill
>
</up-tag>
```

#### 自定义尺寸

```vue
<up-tag
    text="标签"
    plain
    size="mini"
>
</up-tag>
```

#### 可关闭标签

```vue
<up-tag
    text="标签"
    size="mini"
    closable
    :show="close1"
    @close="close1 = false"
>
</up-tag>
```

#### 带图片和图标

```vue
<up-tag
    text="标签"
    size="mini"
    icon="map"
    plain
>
</up-tag>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/tag/tag.uvue`</small>

</template>

<template #uniappx>

#### 基础功能

```vue
<up-tag
    text="标签"
    plain
    size="mini"
    type="warning"
>
</up-tag>
```

#### 自定义主题

```vue
<up-tag text="标签">
</up-tag>
```

#### 圆形标签

```vue
<up-tag
    text="标签"
    plain
    shape="circle"
>
</up-tag>
```

#### 镂空标签

```vue
<up-tag
    text="标签"
    plain
>
</up-tag>
```

#### 镂空带背景色

```vue
<up-tag
    text="标签"
    plain
    plainFill
>
</up-tag>
```

#### 自定义尺寸

```vue
<up-tag
    text="标签"
    plain
    size="mini"
>
</up-tag>
```

#### 可关闭标签

```vue
<up-tag
    text="标签"
    size="mini"
    closable
    :show="close1"
    @close="close1 = false"
>
</up-tag>
```

#### 带图片和图标

```vue
<up-tag
    text="标签"
    size="mini"
    icon="map"
    plain
>
</up-tag>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/tag/tag.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | 标签类型info、primary、success、warning、error | `String` | `'primary'` |
| `disabled` | 不可用 | `Boolean / String` | `false` |
| `size` | 标签的大小，large，medium，mini | `String` | `'medium'` |
| `shape` | tag的形状，circle（两边半圆形）, square（方形，带圆角） | `String` | `'square'` |
| `text` | 标签文字 | `String / Number` | `''` |
| `bgColor` | 背景颜色，默认为空字符串，即不处理 | `String` | `''` |
| `color` | 标签字体颜色，默认为空字符串，即不处理 | `String` | `''` |
| `borderColor` | 标签的边框颜色 | `String` | `''` |
| `closeColor` | 关闭按钮图标的颜色 | `String` | `'var(--up-tag-close-bg-color, #C6C7CB)'` |
| `name` | 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了 | `String / Number` | `''` |
| `plainFill` | // 模式选择，dark&#124;light&#124;plain mode: { type: String, default: 'light' }, 镂空时是否填充背景色 | `Boolean` | `false` |
| `plain` | 是否镂空 | `Boolean` | `false` |
| `closable` | 是否可关闭 | `Boolean` | `false` |
| `show` | 是否显示 | `Boolean` | `true` |
| `icon` | 内置图标，或绝对路径的图片 | `String` | `''` |

### Events

| Event |
| --- |
| `click` |
| `close` |

### Slots

| Slot |
| --- |
| `default` |
| `icon` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPTag` | `UltraUI/Sources/UltraUI/Components/UPTag.swift` |
| Android · Jetpack Compose | `UPTag` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTag.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPTag` | `ultra-ui/src/main/ets/components/UPTag.ets` |
| Flutter · Dart | `UPTag` | `packages/ultra_ui/lib/src/widgets/up_tag.dart` |
| React Native · TypeScript | `UPTag` | `src/components/tag` |
| Taro · React + TypeScript | `UPTag` | `src/ultra-ui/components/up-tag` |
| uni-app · Vue 3 | `up-tag` | `uni_modules/uview-ultra/components/up-tag` |
| uni-app-x · UTS / UVUE | `up-tag` | `uni_modules/uview-ultra/components/up-tag` |

