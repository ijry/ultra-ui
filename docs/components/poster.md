---
title: Poster 海报生成
description: 将图文合成为一张可保存分享的海报图片。
generated: true
---

# Poster 海报生成

将图文合成为一张可保存分享的海报图片。

<PlatformBadges component="poster" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPPoster(
  key: _poster,
  json: _posterConfig,
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/poster_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPPoster } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

### 基础用法

view 色块 + text 多行截断 + qrcode 二维码

```tsx
import { UPPoster } from '@ultra-ui'

<UPPoster ref={basicRef} json={basicJson} />
```

### 渐变与圆角

linear-gradient 背景、圆角卡片、圆角图片裁剪

```tsx
<UPPoster ref={gradientRef} json={gradientJson} />
```

<small>示例来源 `ultra-ui-taro/src/pages/components/poster/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-poster
    ref="poster"
    :json="posterConfig"
    @export="onPosterExport"
    @error="onPosterError"
></up-poster>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/poster/poster.uvue`</small>

</template>

<template #uniappx>

```vue
<up-poster
    ref="poster"
    :json="posterConfig"
    @export="onPosterExport"
    @error="onPosterError"
></up-poster>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/poster/poster.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

::: tip
该组件通过命令式方法调用，没有声明式属性；调用参数请参考上方示例与源码。
:::

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPPoster` | `packages/ultra_ui/lib/src/widgets/up_poster.dart` |
| React Native · TypeScript | `UPPoster` | `src/components/poster` |
| Taro · React + TypeScript | `UPPoster` | `src/ultra-ui/components/up-poster` |
| uni-app · Vue 3 | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |
| uni-app-x · UTS / UVUE | `up-poster` | `uni_modules/uview-ultra/components/up-poster` |

