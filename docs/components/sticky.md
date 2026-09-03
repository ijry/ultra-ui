---
title: Sticky 吸顶
description: 滚动到指定位置时将内容固定在顶部。
generated: true
---

# Sticky 吸顶

滚动到指定位置时将内容固定在顶部。

<PlatformBadges component="sticky" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSticky
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSticky(
  scrollController: _scrollController,
  bgColor: '#ffffff',
  child: Padding(
    padding: const EdgeInsets.symmetric(horizontal: 12),
    child: UPButton(
      text: '吸顶按钮',
      type: 'success',
      onClick: () => UPToast.show(context, message: '点击了吸顶按钮'),
    ),
  ),
)
```

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_a/sticky_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPSticky } from 'ultra-ui-rn';

<UPSticky>
  <UPButton text="吸顶按钮" type="success" />
</UPSticky>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/StickyDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSticky } from '@ultra-ui'

<UPSticky
  offsetTop={0}
  backgroundColor='#ffffff'
  onFixed={setBasicFixed}
>
  <View className='sticky-demo__header'>
    <Text className='sticky-demo__title'>
      吸顶标题{basicFixed ? '（已吸顶）' : ''}
    </Text>
  </View>
</UPSticky>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/sticky/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-sticky>
    <up-button
        text="吸顶按钮"
        type="success"
    ></up-button>
</up-sticky>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsA/sticky/sticky.nvue`</small>

</template>

<template #uniappx>

```vue
<up-sticky ref="stickyRef" :offsetTop="0">
    <up-button
        text="吸顶按钮"
        type="success"
    ></up-button>
</up-sticky>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsA/sticky/sticky.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `offsetTop` | 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px | `String / Number` | `0` |
| `customNavHeight` | 自定义导航栏的高度 | `String / Number` | `0` |
| `disabled` | 是否开启吸顶功能 | `Boolean` | `false` |
| `bgColor` | 吸顶区域的背景颜色 | `String` | `'transparent'` |
| `zIndex` | z-index值 | `String / Number` | `''` |
| `index` | 列表中的索引值 | `String / Number` | `''` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSticky` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPPopupGestureComponents.kt` |
| Flutter · Dart | `UPSticky` | `packages/ultra_ui/lib/src/widgets/up_sticky.dart` |
| React Native · TypeScript | `UPSticky` | `src/components/sticky` |
| Taro · React + TypeScript | `UPSticky` | `src/ultra-ui/components/up-sticky` |
| uni-app · Vue 3 | `up-sticky` | `src/uni_modules/uview-plus/components/u-sticky` |
| uni-app-x · UTS / UVUE | `up-sticky` | `uni_modules/uview-ultra/components/up-sticky` |

