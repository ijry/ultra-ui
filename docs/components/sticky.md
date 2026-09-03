---
title: Sticky 吸顶
description: 滚动到指定位置时将内容固定在顶部。
generated: true
---

# Sticky 吸顶

滚动到指定位置时将内容固定在顶部。

<PlatformBadges component="sticky" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

#### 基础使用

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

#### 基础使用

```tsx
import { UPSticky } from 'ultra-ui-rn';

<UPSticky>
  <UPButton text="吸顶按钮" type="success" />
</UPSticky>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/layout/StickyDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

向下滚动，标题会吸顶；onFixed 回调同步状态

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

#### 带偏移

offsetTop={40}，吸顶后距顶部 40px

```tsx
<UPSticky
  offsetTop={40}
  backgroundColor='#ecf5ff'
  onFixed={setOffsetFixed}
>
  <View className='sticky-demo__header sticky-demo__header--blue'>
    <Text className='sticky-demo__title'>
      偏移吸顶{offsetFixed ? '（已吸顶）' : ''}
    </Text>
  </View>
</UPSticky>
```

#### 禁用

disabled 时内容随页面正常滚动，不吸顶

```tsx
<UPSticky offsetTop={0} disabled backgroundColor='#f5f5f5'>
  <View className='sticky-demo__header'>
    <Text className='sticky-demo__title'>禁用吸顶</Text>
  </View>
</UPSticky>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/sticky/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

由于`css sticky`的特殊性，建议您将此组件放置在页面外层元素中，否则可能会导致`sticky`失效，以下为[MDN对sticky的解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)：  
- 元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。

```vue
<template>
	<view class="container">
		<!-- 建议放在外层 -->
		<up-sticky>......</up-sticky>
		<view class="container__inner">
			<!-- 不建议放在层层嵌套的view中，除非您清楚知道自己为什么需要这么做 -->
			<up-sticky>......</up-sticky>
		</view>
	</view>
</template>
```

#### 吸顶距离

通过`offset-top`参数设置组件在吸顶时与顶部的距离

```vue
<up-sticky offset-top="200">
	<text>塞下秋来风景异，衡阳雁去无留意</text>
</up-sticky>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/sticky.md`</small>

</template>

<template #uniappx>

#### 基本使用

由于`css sticky`的特殊性，建议您将此组件放置在页面外层元素中，否则可能会导致`sticky`失效，以下为[MDN对sticky的解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)：  
- 元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。

```vue
<template>
	<view class="container">
		<!-- 建议放在外层 -->
		<up-sticky>......</up-sticky>
		<view class="container__inner">
			<!-- 不建议放在层层嵌套的view中，除非您清楚知道自己为什么需要这么做 -->
			<up-sticky>......</up-sticky>
		</view>
	</view>
</template>
```

#### 吸顶距离

通过`offset-top`参数设置组件在吸顶时与顶部的距离

```vue
<up-sticky offset-top="200">
	<text>塞下秋来风景异，衡阳雁去无留意</text>
</up-sticky>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/sticky.md`</small>

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

### 事件

| 事件名 |
| --- |
| `fixed` |
| `unfixed` |

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
| uni-app · Vue 3 | `up-sticky` | `uni_modules/uview-ultra/components/up-sticky` |
| uni-app-x · UTS / UVUE | `up-sticky` | `uni_modules/uview-ultra/components/up-sticky` |

