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

### 标签

```kotlin
import net.lingyun.ultraui.android.components.UPTag
import net.lingyun.ultraui.android.components.UPTagProps

UPTag(
    props = UPTagProps(text = "可关闭标签", type = "success", closable = true, name = "tag-demo"),
    onClick = { eventText = "标签：点击 $it" },
    onClose = { eventText = "标签：关闭 $it" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPTag, UPTagProps } from '@lingyun/ultra-ui-hos';

UPTag({ props: new UPTagProps({ text: '主要', type: 'primary' }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TagDemo.ets`</small>

</template>

<template #flutter>

### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTag(text: '标签', plain: true, size: 'mini', type: 'warning')
```

### 自定义主题

```dart
UPTag(text: '标签')
```

### 圆形标签

```dart
UPTag(text: '标签', plain: true, shape: 'circle')
```

### 镂空标签

```dart
UPTag(text: '标签', plain: true)
```

### 镂空带背景色

```dart
UPTag(text: '标签', plain: true, plainFill: true)
```

### 自定义尺寸

```dart
UPTag(text: '标签', plain: true, size: 'mini')
```

### 带图片和图标

```dart
UPTag(text: '标签', size: 'mini', icon: 'map', plain: true)
```

### 单选标签

```dart
UPTag(
  text: '选项${index + 1}',
  plain: _radio != index,
  type: 'warning',
  name: index,
  onClick: (_) => _selectRadio(index),
)
```

### 多选标签

```dart
UPTag(
  text: '选项${index + 1}',
  plain: !_checks[index],
  type: 'warning',
  name: index,
  onClick: (_) => _toggleCheck(index),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_b/tag_page.dart`</small>

</template>

<template #reactnative>

### 基础功能

```tsx
import { UPTag } from 'ultra-ui-rn';

<UPTag text="标签" plain size="mini" type="warning" />
```

### 自定义主题

```tsx
<UPTag text="标签" />
```

### 圆形标签

```tsx
<UPTag text="标签" plain shape="circle" />
```

### 镂空标签

```tsx
<UPTag text="标签" plain />
```

### 镂空带背景色

```tsx
<UPTag text="标签" plain plainFill />
```

### 自定义尺寸

```tsx
<UPTag text="标签" plain size="mini" />
```

### 带图片和图标

```tsx
<UPTag text="标签" size="mini" icon="map" plain />
```

### 单选标签

```tsx
<UPTag
  text={`选项${index + 1}`}
  plain={!item.checked}
  type="warning"
  name={index}
  onClick={radioClick}
/>
```

### 多选标签

```tsx
<UPTag
  text={`选项${index + 1}`}
  plain={!item.checked}
  type="warning"
  name={index}
  onClick={checkboxClick}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/TagDemo.tsx`</small>

</template>

<template #taro>

### 尺寸

size：large / medium / mini

```tsx
import { UPTag } from '@ultra-ui'

<UPTag size='large' text='large' />
```

### 可关闭

closable + onClose，回调回传 name

```tsx
<UPTag
  key={item}
  closable
  type='primary'
  text={item}
  name={item}
  customStyle={{ marginRight: '16px' }}
  onClose={handleClose}
/>
```

### 显隐控制

show 为 false 时淡出隐藏

```tsx
<UPTag show={show} type='success' text='我会淡入淡出' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/tag/index.tsx`</small>

</template>

<template #uniapp>

### 基础功能

```vue
<up-tag
    text="标签"
    plain
    size="mini"
    type="warning"
>
</up-tag>
```

### 自定义主题

```vue
<up-tag text="标签">
</up-tag>
```

### 圆形标签

```vue
<up-tag
    text="标签"
    plain
    shape="circle"
>
</up-tag>
```

### 镂空标签

```vue
<up-tag
    text="标签"
    plain
>
</up-tag>
```

### 镂空带背景色

```vue
<up-tag
    text="标签"
    plain
    plainFill
>
</up-tag>
```

### 自定义尺寸

```vue
<up-tag
    text="标签"
    plain
    size="mini"
>
</up-tag>
```

### 可关闭标签

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

### 带图片和图标

```vue
<up-tag
    text="标签"
    size="mini"
    icon="map"
    plain
>
</up-tag>
```

### 单选标签

```vue
<up-tag
    :text="`选项${(index + 1).toString()}`"
    :plain="item['checked'] == false"
    type="warning"
    :name="index"
    @click="radioClick"
>
</up-tag>
```

### 多选标签

```vue
<up-tag
    :text="`选项${(index + 1).toString()}`"
    :plain="item['checked'] == false"
    type="warning"
    :name="index"
    @click="checkboxClick"
>
</up-tag>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsB/tag/tag.uvue`</small>

</template>

<template #uniappx>

### 基础功能

```vue
<up-tag
    text="标签"
    plain
    size="mini"
    type="warning"
>
</up-tag>
```

### 自定义主题

```vue
<up-tag text="标签">
</up-tag>
```

### 圆形标签

```vue
<up-tag
    text="标签"
    plain
    shape="circle"
>
</up-tag>
```

### 镂空标签

```vue
<up-tag
    text="标签"
    plain
>
</up-tag>
```

### 镂空带背景色

```vue
<up-tag
    text="标签"
    plain
    plainFill
>
</up-tag>
```

### 自定义尺寸

```vue
<up-tag
    text="标签"
    plain
    size="mini"
>
</up-tag>
```

### 可关闭标签

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

### 带图片和图标

```vue
<up-tag
    text="标签"
    size="mini"
    icon="map"
    plain
>
</up-tag>
```

### 单选标签

```vue
<up-tag
    :text="`选项${(index + 1).toString()}`"
    :plain="item['checked'] == false"
    type="warning"
    :name="index"
    @click="radioClick"
>
</up-tag>
```

### 多选标签

```vue
<up-tag
    :text="`选项${(index + 1).toString()}`"
    :plain="item['checked'] == false"
    type="warning"
    :name="index"
    @click="checkboxClick"
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

