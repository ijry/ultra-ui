---
title: Link 超链接
description: 点击后跳转外部链接或复制到剪贴板，自动处理各端差异。
generated: true
---

# Link 超链接

点击后跳转外部链接或复制到剪贴板，自动处理各端差异。

<PlatformBadges component="link" show-missing />

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
import net.lingyun.ultraui.android.components.UPLink
import net.lingyun.ultraui.android.components.UPLinkProps

UPLink(
    props = UPLinkProps(text = "打开链接", href = "https://example.com", color = "#2979ff"),
    onOpen = { eventText = "链接：$it" },
)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/FoundationDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLink, UPLinkProps } from '@lingyun/ultra-ui-hos';

UPLink({ props: new UPLinkProps({
  text: '查看组件文档',
  href: '/pages/components/link',
  onClick: (event: UPLinkClickEvent): void => {
    this.select(event);
  }
}) })
```

```typescript
UPLink({ props: new UPLinkProps({
  text: '无下划线链接',
  href: '/pages/no-underline',
  underLine: false,
  color: 'success',
  onTap: (event: UPLinkClickEvent): void => {
    this.select(event);
  }
}) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LinkDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPLink(text: '禁用链接', color: '#909399')
```

```dart
UPLink(
  text: text,
  color: color,
  underLine: underLine,
  onClick: () => UPToast.show(context, message: url),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/link_page.dart`</small>

</template>

<template #reactnative>

#### 显示下划线

```tsx
import { UPLink } from 'ultra-ui-rn';

<UPLink
  href="https://uview-plus.jiangruyi.com/"
  underLine
  text="Go to uview-plus doc"
/>
```

#### 自定义颜色

```tsx
<UPLink
  href="https://uview-plus.jiangruyi.com/"
  lineColor="#19be6b"
  color="#19be6b"
  text="打开uview-plus文档"
/>
```

#### 自定义链接内容

```tsx
<UPLink href="https://uniapp.dcloud.io/" text="打开uni-app文档" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/basic/LinkDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

text 为文字，href 为跳转链接

```tsx
import { UPLink } from '@ultra-ui'

<UPLink text='点击复制 uview-plus 官网地址' href={HREF} />
```

#### 下划线

underLine 属性

```tsx
<UPLink text='没有下划线' href={HREF} />
```

#### 颜色

color 支持主题 token 与任意 CSS 颜色

```tsx
<UPLink text='#3c9cff 默认色' href={HREF} />
```

#### 字体大小

fontSize 数字按 px 语义，也可带单位

```tsx
<UPLink text='字号 12' href={HREF} fontSize={12} />
```

#### 复制提示语

mpTips 自定义复制成功后的 toast 文案

```tsx
<UPLink text='使用默认提示' href={HREF} underLine />
```

#### 行内混排

作为段落中的一部分使用

```tsx
<UPLink text='《用户服务协议》' href={HREF} fontSize={14} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/link/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`href`设置打开的链接，`text`设置显示的内容

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" @click="click"></up-link>
</template>
```

```vue
<script setup>  
// 直接定义方法  
function click() {  
  console.log('click');  
}  
</script>
```

#### 下划线

通过`under-line`设置是否显示链接的下划线

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" :under-line="true"></up-link>
</template>
```

#### 自定义颜色

- 通过`color`设置文字颜色
- 通过`line-color`设置下划线颜色

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" color="#19be6b" line-color="#19be6b"></up-link>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/link.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`href`设置打开的链接，`text`设置显示的内容

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-ultra UI文档" @click="click"></up-link>
</template>
```

```vue
<script setup>  
// 直接定义方法  
function click() {  
  console.log('click');  
}  
</script>
```

#### 下划线

通过`under-line`设置是否显示链接的下划线

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-ultra UI文档" :under-line="true"></up-link>
</template>
```

#### 自定义颜色

- 通过`color`设置文字颜色
- 通过`line-color`设置下划线颜色

```vue
<template>
	<up-link href="https://uviewui.com/" text="打开uview-ultra UI文档" color="#19be6b" line-color="#19be6b"></up-link>
</template>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/link.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | 文字颜色 | `String` | `color['up-primary']` |
| `fontSize` | 字体大小，单位px | `String / Number` | `15` |
| `underLine` | 是否显示下划线 | `Boolean` | `false` |
| `href` | 要跳转的链接 | `String` | `''` |
| `mpTips` | 小程序中复制到粘贴板的提示语 | `String` | `'链接已复制，请在浏览器打开'` |
| `lineColor` | 下划线颜色 | `String` | `''` |
| `text` | 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色 | `String` | `''` |

### 事件

| 事件名 |
| --- |
| `click` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLink` | `UltraUI/Sources/UltraUI/Components/UPLink.swift` |
| Android · Jetpack Compose | `UPLink` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLink.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLink` | `ultra-ui/src/main/ets/components/UPLink.ets` |
| Flutter · Dart | `UPLink` | `packages/ultra_ui/lib/src/widgets/up_link.dart` |
| React Native · TypeScript | `UPLink` | `src/components/link` |
| Taro · React + TypeScript | `UPLink` | `src/ultra-ui/components/up-link` |
| uni-app · Vue 3 | `up-link` | `uni_modules/uview-ultra/components/up-link` |
| uni-app-x · UTS / UVUE | `up-link` | `uni_modules/uview-ultra/components/up-link` |

