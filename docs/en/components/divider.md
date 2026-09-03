---
title: Divider
description: A content separator that can carry centred or aligned text.
generated: true
---

# Divider

A content separator that can carry centred or aligned text.

<PlatformBadges component="divider" show-missing />

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

#### 基本案例

```tsx
import { UPDivider } from 'ultra-ui-rn';

<UPDivider text="分割线" />
```

#### 是否虚线

```tsx
<UPDivider dashed text="分割线" />
```

#### 是否细线

```tsx
<UPDivider hairline text="分割线" />
```

#### 是否以点代替文字

```tsx
<UPDivider dot text="分割线" />
```

#### 文本内容靠左

```tsx
<UPDivider text="分割线" textPosition="left" />
```

#### 文本内容靠右

```tsx
<UPDivider text="分割线" textPosition="right" />
```

#### 自定义文本颜色

```tsx
<UPDivider lineColor="#2979ff" text="分割线" textColor="#2979ff" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/display/DividerDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

不传 text 时是一条纯分割线

```tsx
import { UPDivider } from '@ultra-ui'

<UPDivider />
```

#### 文字位置

textPosition：left / center / right

```tsx
<UPDivider text='左侧' textPosition='left' />
```

#### 虚线

dashed=true

```tsx
<UPDivider dashed />
```

#### 线条粗细

hairline=false 时使用 1px 实线

```tsx
<UPDivider text='hairline（默认）' />
```

#### 圆点

dot=true，优先级高于 text

```tsx
<UPDivider dot />
```

#### 文字样式

textColor / textSize

```tsx
<UPDivider text='蓝色 16px' textColor='#3c9cff' textSize={16} />
```

#### 线条颜色

lineColor

```tsx
<UPDivider text='蓝色线条' lineColor='#3c9cff' textColor='#3c9cff' />
```

#### 自定义内容

children 会替换默认文字

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

#### 基本案例

```vue
<up-divider text="分割线"></up-divider>
```

#### 是否虚线

```vue
<up-divider
    text="分割线"
    :dashed="true"
></up-divider>
```

#### 是否细线

```vue
<up-divider
    text="分割线"
    :hairline="true"
></up-divider>
```

#### 是否以点代替文字

```vue
<up-divider
    text="分割线"
    :dot="true"
></up-divider>
```

#### 文本内容靠左

```vue
<up-divider
    text="分割线"
    textPosition="left"
></up-divider>
```

#### 文本内容靠右

```vue
<up-divider
    text="分割线"
    textPosition="right"
></up-divider>
```

#### 自定义文本颜色

```vue
<up-divider
    text="分割线"
    textColor="#2979ff"
    lineColor="#2979ff"
></up-divider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/divider/divider.uvue`</small>

</template>

<template #uniappx>

#### 基本案例

```vue
<up-divider text="分割线"></up-divider>
```

#### 是否虚线

```vue
<up-divider
    text="分割线"
    :dashed="true"
></up-divider>
```

#### 是否细线

```vue
<up-divider
    text="分割线"
    :hairline="true"
></up-divider>
```

#### 是否以点代替文字

```vue
<up-divider
    text="分割线"
    :dot="true"
></up-divider>
```

#### 文本内容靠左

```vue
<up-divider
    text="分割线"
    textPosition="left"
></up-divider>
```

#### 文本内容靠右

```vue
<up-divider
    text="分割线"
    textPosition="right"
></up-divider>
```

#### 自定义文本颜色

```vue
<up-divider
    text="分割线"
    textColor="#2979ff"
    lineColor="#2979ff"
></up-divider>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsA/divider/divider.uvue`</small>

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

