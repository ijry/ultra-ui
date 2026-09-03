---
title: Tag
description: Marks keywords or categories; supports plain, rounded and closable styles.
generated: true
---

# Tag

Marks keywords or categories; supports plain, rounded and closable styles.

<PlatformBadges component="tag" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

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

#### Types and the plain style

```typescript
import { UPTag, UPTagProps } from '@lingyun/ultra-ui-hos';

UPTag({ props: new UPTagProps({ text: '主要', type: 'primary' }) })
```

#### Closable tag

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

#### Basic features

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPTag(text: '标签', plain: true, size: 'mini', type: 'warning')
```

#### Custom theme

```dart
UPTag(text: '标签')
```

#### Pill tag

```dart
UPTag(text: '标签', plain: true, shape: 'circle')
```

#### Plain tag

```dart
UPTag(text: '标签', plain: true)
```

#### Plain with a background

```dart
UPTag(text: '标签', plain: true, plainFill: true)
```

#### Custom size

```dart
UPTag(text: '标签', plain: true, size: 'mini')
```

#### With an image and an icon

```dart
UPTag(text: '标签', size: 'mini', icon: 'map', plain: true)
```

#### Single-select tags

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

#### Basic features

```tsx
import { UPTag } from 'ultra-ui-rn';

<UPTag text="标签" plain size="mini" type="warning" />
```

#### Custom theme

```tsx
<UPTag text="标签" />
```

#### Pill tag

```tsx
<UPTag text="标签" plain shape="circle" />
```

#### Plain tag

```tsx
<UPTag text="标签" plain />
```

#### Plain with a background

```tsx
<UPTag text="标签" plain plainFill />
```

#### Custom size

```tsx
<UPTag text="标签" plain size="mini" />
```

#### With an image and an icon

```tsx
<UPTag text="标签" size="mini" icon="map" plain />
```

#### Single-select tags

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

#### Themes

```tsx
import { UPTag } from '@ultra-ui'

<UPTag key={type} type={type} text={type} />
```

#### Plain

```tsx
<UPTag key={type} plain type={type} text={type} />
```

#### Plain fill

```tsx
<UPTag key={type} plain plainFill type={type} text={type} />
```

#### Shapes

```tsx
<UPTag shape='square' text='square' />
```

#### Sizes

```tsx
<UPTag size='large' text='large' />
```

#### Icons

```tsx
<UPTag icon='star-fill' text='收藏' />
```

#### Disabled

```tsx
<UPTag disabled text='disabled' />
```

#### Custom colour

```tsx
<UPTag bgColor='#7232dd' color='#ffffff' text='紫色' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/tag/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<up-tag text="标签" plain size="mini" type="warning"></up-tag>
```

#### Custom theme

```vue
<up-tag text="标签"></up-tag>
<up-tag text="标签" type="warning"></up-tag>
<up-tag text="标签" type="success"></up-tag>
<up-tag text="标签" type="error"></up-tag>
```

#### Pill tag

```vue
<up-tag text="标签" plain shape="circle"></up-tag>
<up-tag text="标签" type="warning" shape="circle"></up-tag>
```

#### Plain tag

```vue
<up-tag text="标签" plain > </up-tag>
<up-tag text="标签" type="warning" plain></up-tag>
<up-tag text="标签" type="success" plain></up-tag>
<up-tag text="标签" type="error" plain></up-tag>
```

#### Plain with a background

```vue
<up-tag text="标签" plain > </up-tag>
<up-tag text="标签" type="warning" plain plainFill></up-tag>
<up-tag text="标签" type="success" plain plainFill></up-tag>
<up-tag text="标签" type="error" plain plainFill></up-tag>
```

#### Plain with a background, no border

```vue
<up-tag text="标签" plain > </up-tag>
<up-tag text="标签" type="warning" plain plainFill borderColor="transparent"></up-tag>
<up-tag text="标签" type="success" plain plainFill borderColor="transparent"></up-tag>
<up-tag text="标签" type="error" plain plainFill borderColor="transparent"></up-tag>
```

#### Plain with a derived background

```vue
<up-tag text="标签" plain > </up-tag>
<up-tag text="标签" type="warning" plain plainFill borderColor="transparent" color="#209D59" :autoBgColor="95"></up-tag>
<up-tag text="标签" type="success" plain plainFill borderColor="transparent" color="#4E60DC" :autoBgColor="90"></up-tag>
<up-tag text="标签" type="error" plain plainFill borderColor="transparent" color="#D56E14" :autoBgColor="85"></up-tag>
```

#### Custom size

```vue
<up-tag text="标签" plain size="mini"></up-tag>
<up-tag text="标签" type="warning"></up-tag>
<up-tag text="标签" type="success" plain size="large"></up-tag>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/tag.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<up-tag text="标签" plain size="mini" type="warning"></up-tag>
```

#### Custom theme

```vue
<up-tag text="标签"></up-tag>
<up-tag text="标签" type="warning"></up-tag>
<up-tag text="标签" type="success"></up-tag>
<up-tag text="标签" type="error"></up-tag>
```

#### Pill tag

```vue
<up-tag text="标签" plain shape="circle"></up-tag>
<up-tag text="标签" type="warning" shape="circle"></up-tag>
```

#### Plain tag

```vue
<up-tag text="标签" plain > </up-tag>
<up-tag text="标签" type="warning" plain></up-tag>
<up-tag text="标签" type="success" plain></up-tag>
<up-tag text="标签" type="error" plain></up-tag>
```

#### Plain with a background

```vue
<up-tag text="标签" plain > </up-tag>
<up-tag text="标签" type="warning" plain plainFill></up-tag>
<up-tag text="标签" type="success" plain plainFill></up-tag>
<up-tag text="标签" type="error" plain plainFill></up-tag>
```

#### Custom size

```vue
<up-tag text="标签" plain size="mini"></up-tag>
<up-tag text="标签" type="warning"></up-tag>
<up-tag text="标签" type="success" plain size="large"></up-tag>
```

#### Closable tag

```vue
<up-tag text="标签" size="mini" closable :show="close1" @close="close1 = false"></up-tag>
<up-tag text="标签" type="warning" closable :show="close2" @close="close2 = false"></up-tag>
<up-tag text="标签" type="success" plain size="large" 
closable :show="close3" @close="close3 = false"></up-tag>

<script setup>
import { ref, reactive } from 'vue';

const close1 = ref(true);
const close2 = ref(true);
const close3 = ref(true);
const radios = reactive ([
  { checked: true },
  { checked: false },
  { checked: false }
]);
const checkboxs = reactive ([
  { checked: true },
  { checked: false },
  { checked: false }
]);
</script>
```

#### With an image and an icon

```vue
<up-tag text="标签" size="mini" icon="map" plain></up-tag>
<up-tag text="标签" type="warning" icon="tags-fill"></up-tag>
<up-tag text="标签" type="success" plain size="large"
icon="https://cdn.uviewui.com/uview/example/tag.png"></up-tag>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/tag.md`</small>

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

