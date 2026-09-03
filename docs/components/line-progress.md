---
title: Line progress 线形进度条
description: 横向进度条，可在条内显示百分比。
generated: true
---

# Line progress 线形进度条

横向进度条，可在条内显示百分比。

<PlatformBadges component="line-progress" show-missing />

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
import net.lingyun.ultraui.android.components.UPLineProgress

UPLineProgress(percentage = percentage, showText = true, height = 18)
```

<small>示例来源 `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPLineProgress, UPLineProgressProps } from '@lingyun/ultra-ui-hos';

UPLineProgress({ props: new UPLineProgressProps({ percentage: 20 }) })
```

```typescript
UPLineProgress({ props: new UPLineProgressProps({ percentage: 55, activeColor: 'success', height: 14 }) })
```

```typescript
UPLineProgress({ props: new UPLineProgressProps({ percentage: 85, activeColor: 'warning', striped: true }) })
```

```typescript
UPLineProgress({ props: new UPLineProgressProps({ percentage: 100, activeColor: 'error', showText: false }) })
```

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/LineProgressDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

#### 默认配置

```tsx
import { UPLineProgress } from 'ultra-ui-rn';

<UPLineProgress />
```

#### 基础功能

```tsx
<UPLineProgress percentage={percentage1} />
```

#### 不显示百分比

```tsx
<UPLineProgress percentage={40} showText={false} />
```

#### 从右往左

```tsx
<UPLineProgress fromRight percentage={40} showText={false} />
```

#### 自定义高度

```tsx
<UPLineProgress height="8" percentage={50} showText={false} />
```

#### 自定义颜色

```tsx
<UPLineProgress
  activeColor="#3c9cff"
  height="8"
  inactiveColor="#f3f4f6"
  percentage={60}
  showText={false}
/>
```

#### 自定义样式

```tsx
<UPLineProgress
  activeColor="#3c9cff"
  height="8"
  inactiveColor="#f3f4f6"
  percentage={70}
  showText={false}
>
  <Text style={s.percentageSlot}>70%</Text>
</UPLineProgress>
```

#### 手动加减

```tsx
<UPLineProgress
  activeColor="#3c9cff"
  height="8"
  inactiveColor="#f3f4f6"
  percentage={percentage6}
  showText={false}
/>
```

<small>示例来源 `ultra-ui-rn/example/pages/components/display/LineProgressDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

percentage 控制进度，默认显示在右侧外部

```tsx
import { UPLineProgress } from '@ultra-ui'

<UPLineProgress percentage={30} customClass='line-progress-demo__item' />
```

#### 文字内显

textInside，百分比文字显示在进度条内部

```tsx
<UPLineProgress percentage={45} textInside customClass='line-progress-demo__item' />
```

#### 圆角与斑马纹

round 胶囊形，striped 动态条纹

```tsx
<UPLineProgress percentage={70} round striped customClass='line-progress-demo__item' />
```

#### 自定义高度

height

```tsx
<UPLineProgress percentage={40} height={24} customClass='line-progress-demo__item' />
```

#### 受控动画

定时器驱动 percentage 自动增长

```tsx
<UPLineProgress
  percentage={percent}
  round
  showText={false}
  customClass='line-progress-demo__item'
/>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/line-progress/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

- 通过`percentage`设置当前的进度值，该值区间为0-100.
- 通过`activeColor`设置进度条的颜色
- 不传`percentage`时默认为`0`，此时仅显示进度条底色

```vue
<template>
	<up-line-progress :percentage="30" activeColor="#ff0000"></up-line-progress>
</template>
```

#### 默认配置

不传任何参数时，组件会使用默认底色、高度和`0`进度。

```vue
<template>
	<up-line-progress></up-line-progress>
</template>
```

#### 不显示百分比

不显示百分比值信息
- `show-text`参数配置是否显示进度条内百分值

```vue
<template>
	<up-line-progress :percentage="30" :showText="false"></up-line-progress>
</template>
```

#### 自定义高度

- `height`进度条高度

```vue
<template>
	<up-line-progress :percentage="30" height="8"></up-line-progress>
</template>
```

#### 从右往左

- 通过`fromRight`设置进度条从右侧开始加载

```vue
<template>
	<up-line-progress :percentage="40" :showText="false" :fromRight="true"></up-line-progress>
</template>
```

#### 自定义样式(不支持安卓环境的nvue)

- 自定义的数值样式嵌套在默认插槽里

```vue
<template>
	<up-line-progress :percentage="30">
		<text class="u-percentage-slot">{{30}}%</text>
	</up-line-progress>
</template>

<style lang="scss" scoped>
.u-percentage-slot {
	padding: 1px 5px;
	background-color: $u-warning;
	color: #fff;
	border-radius: 100px;
	font-size: 10px;
	margin-right: -5px;
}
</style>
```

#### 手动加减

- 通过控制`percentage`参数数值达到增减

```vue
<template>
	<view style="margin-top: 50px;">
		<up-line-progress :percentage="percentage" />
		<view style="display: flex;margin-top: 100px;">
			<button @click="computedWidth('minus')">减少</button>
			<button @click="computedWidth('plus')">增加</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const percentage = ref(30);

const computedWidth = (type) => {
  if (type === 'plus') {
    percentage.value = uni.$u.range(0, 100, percentage.value + 10);
  } else {
    percentage.value = uni.$u.range(0, 100, percentage.value - 10);
  }
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/lineProgress.md`</small>

</template>

<template #uniappx>

#### 基本使用

- 通过`percentage`设置当前的进度值，该值区间为0-100.
- 通过`activeColor`设置进度条的颜色

```vue
<template>
	<up-line-progress :percentage="30" activeColor="#ff0000"></up-line-progress>
</template>
```

#### 不显示百分比

不显示百分比值信息
- `show-text`参数配置是否显示进度条内百分值

```vue
<template>
	<up-line-progress :percentage="30" :showText="false"></up-line-progress>
</template>
```

#### 自定义高度

- `height`进度条高度

```vue
<template>
	<up-line-progress :percentage="30" height="8"></up-line-progress>
</template>
```

#### 自定义样式(不支持安卓环境的nvue)

- 自定义的数值样式嵌套在默认插槽里

```vue
<template>
	<up-line-progress :percentage="30">
		<text class="u-percentage-slot">{{30}}%</text>
	</up-line-progress>
</template>

<style lang="scss" scoped>
.u-percentage-slot {
	padding: 1px 5px;
	background-color: $up-warning;
	color: #fff;
	border-radius: 100px;
	font-size: 10px;
	margin-right: -5px;
}
</style>
```

#### 手动加减

- 通过控制`percentage`参数数值达到增减

```vue
<template>
	<view style="margin-top: 50px;">
		<up-line-progress :percentage="percentage" />
		<view style="display: flex;margin-top: 100px;">
			<button @click="computedWidth('minus')">减少</button>
			<button @click="computedWidth('plus')">增加</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const percentage = ref(30);

computedWidth = (type) => {
  if (type === 'plus') {
    percentage.value = uni.$u.range(0, 100, percentage.value + 10);
  } else {
    percentage.value = uni.$u.range(0, 100, percentage.value - 10);
  }
};
</script>
```

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/lineProgress.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `activeColor` | 激活部分的颜色 | `String` | `'#19be6b'` |
| `inactiveColor` | — | `String` | `'#ececec'` |
| `percentage` | 进度百分比，数值 | `String / Number` | `0` |
| `showText` | 是否在进度条内部显示百分比的值 | `Boolean` | `true` |
| `height` | 进度条的高度，单位px | `String / Number` | `12` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPLineProgress` | `UltraUI/Sources/UltraUI/Components/UPLineProgress.swift` |
| Android · Jetpack Compose | `UPLineProgress` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLineProgress.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLineProgress` | `ultra-ui/src/main/ets/components/UPLineProgress.ets` |
| Flutter · Dart | `UPLineProgress` | `packages/ultra_ui/lib/src/widgets/up_line_progress.dart` |
| React Native · TypeScript | `UPLineProgress` | `src/components/line-progress` |
| Taro · React + TypeScript | `UPLineProgress` | `src/ultra-ui/components/up-line-progress` |
| uni-app · Vue 3 | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |
| uni-app-x · UTS / UVUE | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |

