---
title: Divider 分割线
description: 区隔内容的分割线，支持居中或靠边的文字说明。
generated: true
---

# Divider 分割线

区隔内容的分割线，支持居中或靠边的文字说明。

<PlatformBadges component="divider" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPDivider
import net.lingyun.ultraui.android.components.UPDividerProps

UPDivider(props = UPDividerProps(text = "分割线", textPosition = "center"))
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/DividerDemo.ets`</small>

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/divider_page.dart`</small>

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

<small>示例来源 `ultra-ui-rn/example/pages/components/display/DividerDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/divider/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

文字内容通过`text`传入

```vue
<up-divider text="分割线"></up-divider>
```

#### 设置虚线

可以通过`dashed`指定虚线

```vue
<up-divider text="分割线" :dashed="true"></up-divider>
```

#### 设置细线

可以通过`hairline`指定细线

```vue
<up-divider text="分割线" :hairline="true"></up-divider>
```

#### 设置以点代替文字

可以通过`dot`指定以点代替文字

```vue
<up-divider text="分割线" :dot="true"></up-divider>
```

#### 设置文本靠左靠右

可以通过`textPosition`指定文字靠左靠右

```vue
<up-divider text="靠左" textPosition="left"></up-divider>
<up-divider text="靠右" textPosition="right"></up-divider>
```

#### 设置文本颜色和线条颜色

可以通过`textColor`和`lineColor`指定文字刚线条颜色

```vue
<up-divider
   text="分割线"
   textColor="#2979ff"
   lineColor="#ff0000"
></up-divider>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/divider.md`</small>

</template>

<template #uniappx>

#### 基本使用

文字内容通过`text`传入

```vue
<up-divider text="分割线"></up-divider>
```

#### 设置虚线

可以通过`dashed`指定虚线

```vue
<up-divider text="分割线" :dashed="true"></up-divider>
```

#### 设置细线

可以通过`hairline`指定细线

```vue
<up-divider text="分割线" :hairline="true"></up-divider>
```

#### 设置以点代替文字

可以通过`dot`指定以点代替文字

```vue
<up-divider text="分割线" :dot="true"></up-divider>
```

#### 设置文本靠左靠右

可以通过`textPosition`指定文字靠左靠右

```vue
<up-divider text="靠左" textPosition="left"></up-divider>
<up-divider text="靠右" textPosition="right"></up-divider>
```

#### 设置文本颜色和线条颜色

可以通过`textColor`和`lineColor`指定文字刚线条颜色

```vue
<up-divider
        text="分割线"
        textColor="#2979ff"
        lineColor="#ff0000"
></up-divider>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/divider.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `dashed` | 是否虚线 | `Boolean` | `false` |
| `hairline` | 是否细线 | `Boolean` | `true` |
| `dot` | 是否以点替代文字，优先于text字段起作用 | `Boolean` | `false` |
| `textPosition` | 内容文本的位置，left-左边，center-中间，right-右边 | `String` | `'center'` |
| `text` | 文本内容 | `String / Number` | `''` |
| `textSize` | 文本大小 | `String / Number` | `14` |
| `textColor` | 文本颜色 | `String` | `'#909399'` |
| `lineColor` | 线条颜色 | `String` | `'#dcdfe6'` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPDivider` | `UltraUI/Sources/UltraUI/Components/UPDivider.swift` |
| Android · Jetpack Compose | `UPDivider` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPDivider.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPDivider` | `ultra-ui/src/main/ets/components/UPDivider.ets` |
| Flutter · Dart | `UPDivider` | `packages/ultra_ui/lib/src/widgets/up_layout.dart` |
| React Native · TypeScript | `UPDivider` | `src/components/divider` |
| Taro · React + TypeScript | `UPDivider` | `src/ultra-ui/components/up-divider` |
| uni-app · Vue 3 | `up-divider` | `uni_modules/uview-ultra/components/up-divider` |
| uni-app-x · UTS / UVUE | `up-divider` | `uni_modules/uview-ultra/components/up-divider` |

