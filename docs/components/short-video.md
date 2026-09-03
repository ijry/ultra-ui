---
title: Short video 短视频
description: 全屏上下滑动的短视频播放容器。
generated: true
---

# Short video 短视频

全屏上下滑动的短视频播放容器。

<PlatformBadges component="short-video" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPShortVideo } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPShortVideo } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `collect` |
| `comment` |
| `like` |
| `loadedMetadata` |
| `progressChange` |
| `progressChanging` |
| `share` |
| `tabChange` |
| `timeUpdate` |
| `videoChange` |
| `videoEnded` |
| `videoPause` |
| `videoPlay` |

### 插槽

| 插槽名 |
| --- |
| `actions` |
| `menu` |
| `search` |
| `tabbar` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPShortVideo` | `packages/ultra_ui/lib/src/widgets/up_short_video.dart` |
| React Native · TypeScript | `UPShortVideo` | `src/components/short-video` |
| Taro · React + TypeScript | `UPShortVideo` | `src/ultra-ui/components/up-short-video` |
| uni-app · Vue 3 | `up-short-video` | `uni_modules/uview-ultra/components/up-short-video` |
| uni-app-x · UTS / UVUE | `up-short-video` | `uni_modules/uview-ultra/components/up-short-video` |

