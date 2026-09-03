---
title: Divider
description: A content separator that can carry centred or aligned text.
generated: true
---

# Divider

A content separator that can carry centred or aligned text.

<PlatformBadges component="divider" show-missing />

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
import net.lingyun.ultraui.android.components.UPDivider
import net.lingyun.ultraui.android.components.UPDividerProps

UPDivider(props = UPDividerProps(text = "分割线", textPosition = "center"))
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPDivider, UPDividerProps } from '@lingyun/ultra-ui-hos';

UPDivider({ props: new UPDividerProps() })
```

```typescript
UPDivider({ props: new UPDividerProps({
  text: '居中文本',
  onClick: (event: UPDividerClickEvent): void => {
    this.select(event);
  }
}) })
```

```typescript
UPDivider({ props: new UPDividerProps({ text: '靠左文本', textPosition: 'left', lineColor: 'primary' }) })
```

```typescript
UPDivider({ props: new UPDividerProps({ dot: true, textColor: 'warning', dashed: true }) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/DividerDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

_DividerBlock('基本案例', UPDivider(text: '分割线')
```

```dart
_DividerBlock('是否虚线', UPDivider(text: '分割线', dashed: true)
```

```dart
_DividerBlock('是否细线', UPDivider(text: '分割线', hairline: true)
```

```dart
_DividerBlock('是否以点代替文字', UPDivider(text: '分割线', dot: true)
```

```dart
'文本内容靠左', UPDivider(text: '分割线', textPosition: 'left')
```

```dart
'文本内容靠右', UPDivider(text: '分割线', textPosition: 'right')
```

```dart
UPDivider(
    text: '分割线', textColor: '#2979ff', lineColor: '#2979ff')
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_a/divider_page.dart`</small>

</template>

<template #reactnative>

#### Basic example

```tsx
import { UPDivider } from 'ultra-ui-rn';

<UPDivider text="分割线" />
```

#### Dashed or solid

```tsx
<UPDivider dashed text="分割线" />
```

#### Hairline or not

```tsx
<UPDivider hairline text="分割线" />
```

#### Dots instead of text

```tsx
<UPDivider dot text="分割线" />
```

#### Text aligned left

```tsx
<UPDivider text="分割线" textPosition="left" />
```

#### Text aligned right

```tsx
<UPDivider text="分割线" textPosition="right" />
```

#### Custom text colour

```tsx
<UPDivider lineColor="#2979ff" text="分割线" textColor="#2979ff" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/DividerDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPDivider } from '@ultra-ui'

<UPDivider />
```

#### Text position

```tsx
<UPDivider text='左侧' textPosition='left' />
```

#### Dashed

```tsx
<UPDivider dashed />
```

#### Line thickness

```tsx
<UPDivider text='hairline（默认）' />
```

#### Dot

```tsx
<UPDivider dot />
```

#### Text styling

```tsx
<UPDivider text='蓝色 16px' textColor='#3c9cff' textSize={16} />
```

#### Line colour

```tsx
<UPDivider text='蓝色线条' lineColor='#3c9cff' textColor='#3c9cff' />
```

#### Custom content

```tsx
<UPDivider lineColor='#f9ae3d'>
  <View className='divider-demo__slot'>
    <UPIcon name='star-fill' size={14} color='#f9ae3d' />
    <Text className='divider-demo__slot-text'>精选推荐</Text>
  </View>
</UPDivider>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/divider/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<up-divider text="分割线"></up-divider>
```

#### Dashed line

```vue
<up-divider text="分割线" :dashed="true"></up-divider>
```

#### Hairline

```vue
<up-divider text="分割线" :hairline="true"></up-divider>
```

#### Dots instead of text

```vue
<up-divider text="分割线" :dot="true"></up-divider>
```

#### Aligning the text left or right

```vue
<up-divider text="靠左" textPosition="left"></up-divider>
<up-divider text="靠右" textPosition="right"></up-divider>
```

#### Text and line colours

```vue
<up-divider
   text="分割线"
   textColor="#2979ff"
   lineColor="#ff0000"
></up-divider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/divider.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<up-divider text="分割线"></up-divider>
```

#### Dashed line

```vue
<up-divider text="分割线" :dashed="true"></up-divider>
```

#### Hairline

```vue
<up-divider text="分割线" :hairline="true"></up-divider>
```

#### Dots instead of text

```vue
<up-divider text="分割线" :dot="true"></up-divider>
```

#### Aligning the text left or right

```vue
<up-divider text="靠左" textPosition="left"></up-divider>
<up-divider text="靠右" textPosition="right"></up-divider>
```

#### Text and line colours

```vue
<up-divider
        text="分割线"
        textColor="#2979ff"
        lineColor="#ff0000"
></up-divider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/divider.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `dashed` | 是否虚线 | `Boolean` | `false` |
| `hairline` | 是否细线 | `Boolean` | `true` |
| `dot` | 是否以点替代文字，优先于text字段起作用 | `Boolean` | `false` |
| `textPosition` | 内容文本的位置，left-左边，center-中间，right-右边 | `String` | `'center'` |
| `text` | 文本内容 | `String / Number` | `''` |
| `textSize` | 文本大小 | `String / Number` | `14` |
| `textColor` | 文本颜色 | `String` | `'#909399'` |
| `lineColor` | 线条颜色 | `String` | `'#dcdfe6'` |

### Events

| Event |
| --- |
| `click` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPDivider` | `UltraUI/Sources/UltraUI/Components/UPDivider.swift` |
| Android · Jetpack Compose | `UPDivider` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDivider.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPDivider` | `ultra-ui/src/main/ets/components/UPDivider.ets` |
| Flutter · Dart | `UPDivider` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPDivider` | `src/components/divider` |
| Taro · React + TypeScript | `UPDivider` | `src/ultra-ui/components/up-divider` |
| uni-app · Vue 3 | `up-divider` | `uni_modules/uview-ultra/components/up-divider` |
| uni-app-x · UTS / UVUE | `up-divider` | `uni_modules/uview-ultra/components/up-divider` |

