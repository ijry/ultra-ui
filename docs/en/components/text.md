---
title: Text
description: Text with theming, truncation, masking and formatting for phone numbers, money and dates.
generated: true
---

# Text

Text with theming, truncation, masking and formatting for phone numbers, money and dates.

<PlatformBadges component="text" show-missing />

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
import net.lingyun.ultraui.android.components.UPText
import net.lingyun.ultraui.android.components.UPTextProps

UPText(
    props = UPTextProps(text = "可点击文本", type = "primary", bold = true),
    onClick = { eventText = "文本：点击" },
)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPText, UPTextProps } from '@lingyun/ultra-ui-hos';

UPText({ props: new UPTextProps({
  text: '128.00',
  mode: 'price',
  prefixIcon: 'rmb',
  bold: true,
  color: 'primary',
  onClick: (event: UPTextClickEvent): void => { this.clicked(event); }
}) })
```

```typescript
UPText({ props: new UPTextProps({
  text: '产品说明',
  mode: 'link',
  href: '产品说明',
  decoration: 'underline',
  onOpen: (event: UPTextOpenEvent): void => { this.message = '链接回传：' + event.href; }
}) })
```

```typescript
UPText({ props: new UPTextProps({
  text: '13800138000',
  mode: 'phone',
  call: true,
  onCall: (event: UPTextCallEvent): void => { this.message = '号码回传：' + event.phone; }
}) })
```

```typescript
UPText({ props: new UPTextProps({
  text: '这是一段会按单行安全截断的长文本，用于展示 block、行数与对齐行为。',
  block: true,
  lines: 1,
  color: '#606266'
}) })
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/TextDemo.ets`</small>

</template>

<template #flutter>

#### 基础功能

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPText(text: '我用十年青春,赴你最后之约')
```

#### 设置主题

```dart
UPText(text: '主色', type: 'primary')
```

#### 拨打电话

```dart
UPText(mode: 'phone', text: '15019479320')
```

#### 日期格式化

```dart
UPText(mode: 'date', text: '1612959739')
```

#### 姓名脱敏

```dart
UPText(mode: 'name', text: '张三三', format: 'encrypt')
```

#### 超链接

```dart
UPText(
  mode: 'link',
  text: 'Go to uview-plus docs',
  href: 'https://uview-plus.jiangruyi.com',
)
```

#### 显示金额

```dart
UPText(mode: 'price', text: '728732.32')
```

#### 前后图标

```dart
UPText(
  prefixIcon: 'baidu',
  iconStyle: 'font-size: 19px',
  text: '百度一下',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/text_page.dart`</small>

</template>

<template #reactnative>

#### 设置主题

```tsx
import { UPText } from 'ultra-ui-rn';

<UPText text="主色" type="primary" />
```

#### 拨打电话

```tsx
<UPText mode="phone" text="15019479320" />
```

#### 日期格式化

```tsx
<UPText mode="date" text="1612959739" />
```

#### 姓名脱敏

```tsx
<UPText mode="name" text="张三三" format="encrypt" />
```

#### 超链接

```tsx
<UPText
  mode="link"
  text="Go to uview-plus docs"
  href="https://uview-plus.jiangruyi.com"
/>
```

#### 显示金额

```tsx
<UPText mode="price" text="728732.32" />
```

#### 前后图标

```tsx
<UPText prefixIcon="baidu" iconStyle={{ fontSize: 19 }} text="百度一下" />
```

#### 超出隐藏

```tsx
<UPText
  lines={2}
  text="关于uview-plus的取名来由，首字母u来自于uni-app首字母，plus参考element-plus起名让大家容易理解这是Vue3版本，uni-app是基于Vue.js，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中 最基础，最重要的组件，故取名uview-plus，表达源于uni-app和Vue之意，同时在此也对它们表示感谢。"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/basic/TextDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

text 指定显示内容

```tsx
import { UPText } from '@ultra-ui'

<UPText text='行到水穷处，坐看云起时' />
```

#### 主题

type 共 9 种预设颜色

```tsx
<UPText type='primary' text='primary 主色' flex1={false} />
```

#### 字体大小

size 数字按 px 语义，也可带单位

```tsx
<UPText text='字号 12' size={12} flex1={false} />
```

#### 粗体与装饰

bold / decoration

```tsx
<UPText bold text='加粗文本' flex1={false} />
```

#### 自定义颜色

color 优先级低于 type，可传 token 或 CSS 颜色

```tsx
<UPText color='#7232dd' text='紫色文本' flex1={false} />
```

#### 前后图标

prefixIcon / suffixIcon，iconStyle 控制图标样式

```tsx
<UPText prefixIcon='map' text='深圳市南山区' flex1={false} />
```

#### 对齐方式

align 需要占满宽度（flex1 默认 true）

```tsx
<UPText align='left' text='左对齐 left' />
```

#### 多行省略

lines 指定最大行数

```tsx
<UPText lines={1} text={LONG_TEXT} />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/text/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<up-text text="我用十年青春,赴你最后之约"></up-text>
```

#### 设置主题

```vue
<up-text type="primary" text="主色"></up-text>
<up-text type="error"   text="错误"></up-text>
<up-text type="success" text="成功"></up-text>
<up-text type="warning" text="警告"></up-text>
<up-text type="info"    text="信息"></up-text>
```

#### 拨打电话

```vue
<up-text mode="phone" text="15019479320"></up-text>
```

#### 日期格式化

```vue
<up-text mode="date" text="1612959739"></up-text>
```

#### 姓名脱敏

```vue
<up-text mode="name" text="张三三" format="encrypt"></up-text>
```

#### 超链接

```vue
<up-text mode="link" text="Go to uview-plus docs" href="https://www.uviewui.com" ></up-text>
```

#### 显示金额

```vue
<up-text mode="price" text="728732.32"></up-text>
```

#### 前后图标

```vue
<up-text prefixIcon="baidu" iconStyle="font-size: 19px" text="百度一下,你就知道"></up-text>
<up-text suffixIcon="arrow-leftward" iconStyle="font-size: 18px" text="查看更多"></up-text>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/text.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<up-text text="我用十年青春,赴你最后之约"></up-text>
```

#### 设置主题

```vue
<up-text type="primary" text="主色"></up-text>
<up-text type="error"   text="错误"></up-text>
<up-text type="success" text="成功"></up-text>
<up-text type="warning" text="警告"></up-text>
<up-text type="info"    text="信息"></up-text>
```

#### 拨打电话

```vue
<up-text mode="phone" text="15019479320"></up-text>
```

#### 日期格式化

```vue
<up-text mode="date" text="1612959739"></up-text>
```

#### 姓名脱敏

```vue
<up-text mode="name" text="张三三" format="encrypt"></up-text>
```

#### 超链接

```vue
<up-text mode="link" text="Go to uview-ultra docs" href="https://www.uviewui.com" ></up-text>
```

#### 显示金额

```vue
<up-text mode="price" text="728732.32"></up-text>
```

#### 前后图标

```vue
<up-text prefixIcon="baidu" iconStyle="font-size: 19px" text="百度一下,你就知道"></up-text>
<up-text suffixIcon="arrow-leftward" iconStyle="font-size: 18px" text="查看更多"></up-text>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/text.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | 主题颜色 | `String` | `''` |
| `show` | 是否显示 | `Boolean` | `true` |
| `text` | 显示的值 | `String / Number` | `''` |
| `prefixIcon` | 前置图标 | `String` | `''` |
| `suffixIcon` | 后置图标 | `String` | `''` |
| `mode` | 文本处理的匹配模式 text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接 | `String` | `''` |
| `href` | mode=link下，配置的链接 | `String` | `''` |
| `format` | 格式化规则 | `String / Function` | `''` |
| `call` | mode=phone时，点击文本是否拨打电话 | `Boolean` | `false` |
| `openType` | 小程序的打开方式 | `String` | `''` |
| `bold` | 是否粗体，默认normal | `Boolean` | `false` |
| `block` | 是否块状 | `Boolean` | `false` |
| `lines` | 文本显示的行数，如果设置，超出此行数，将会显示省略号 | `String / Number` | `''` |
| `color` | 文本颜色 | `String` | `'#303133'` |
| `size` | 字体大小 | `String / Number` | `15` |
| `iconStyle` | 图标的样式 | `Object / String` | `{ fontSize: '15px' }` |
| `decoration` | 文字装饰，下划线，中划线等，可选值 none&#124;underline&#124;line-through | `—` | `'none'` |
| `margin` | 外边距，对象、字符串，数值形式均可 | `Object / String / Number` | `0` |
| `lineHeight` | 文本行高 | `String / Number` | `''` |
| `align` | 文本对齐方式，可选值left&#124;center&#124;right | `String` | `'left'` |
| `wordWrap` | 文字换行，可选值break-word&#124;normal&#124;anywhere | `String` | `'normal'` |
| `flex1` | 占满剩余空间 | `Boolean` | `false` |
| `lang` | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效 | `String` | `'en'` |

### Events

| Event |
| --- |
| `click` |
| `contact` |
| `error` |
| `getphonenumber` |
| `getuserinfo` |
| `launchapp` |
| `opensetting` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPText` | `UltraUI/Sources/UltraUI/Components/UPText.swift` |
| Android · Jetpack Compose | `UPText` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPText.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPText` | `ultra-ui/src/main/ets/components/UPText.ets` |
| Flutter · Dart | `UPText` | `packages/ultra_ui/lib/src/widgets/up_text.dart` |
| React Native · TypeScript | `UPText` | `src/components/text` |
| Taro · React + TypeScript | `UPText` | `src/ultra-ui/components/up-text` |
| uni-app · Vue 3 | `up-text` | `uni_modules/uview-ultra/components/up-text` |
| uni-app-x · UTS / UVUE | `up-text` | `uni_modules/uview-ultra/components/up-text` |

