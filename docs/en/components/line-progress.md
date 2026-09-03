---
title: Line progress
description: A horizontal progress bar that can show its percentage inline.
generated: true
---

# Line progress

A horizontal progress bar that can show its percentage inline.

<PlatformBadges component="line-progress" show-missing />

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
import net.lingyun.ultraui.android.components.UPLineProgress

UPLineProgress(percentage = percentage, showText = true, height = 18)
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/LayoutProgressDemoPage.kt`</small>

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

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/LineProgressDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
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

<small>Snippet from `ultra-ui-rn/example/pages/components/display/LineProgressDemo.tsx`</small>

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

<small>Snippet from `ultra-ui-taro/src/pages/components/line-progress/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

```vue
<template>
	<up-line-progress :percentage="30" activeColor="#ff0000"></up-line-progress>
</template>
```

#### 默认配置

```vue
<template>
	<up-line-progress></up-line-progress>
</template>
```

#### 不显示百分比

```vue
<template>
	<up-line-progress :percentage="30" :showText="false"></up-line-progress>
</template>
```

#### 自定义高度

```vue
<template>
	<up-line-progress :percentage="30" height="8"></up-line-progress>
</template>
```

#### 从右往左

```vue
<template>
	<up-line-progress :percentage="40" :showText="false" :fromRight="true"></up-line-progress>
</template>
```

#### 自定义样式(不支持安卓环境的nvue)

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/lineProgress.md`</small>

</template>

<template #uniappx>

#### 基本使用

```vue
<template>
	<up-line-progress :percentage="30" activeColor="#ff0000"></up-line-progress>
</template>
```

#### 不显示百分比

```vue
<template>
	<up-line-progress :percentage="30" :showText="false"></up-line-progress>
</template>
```

#### 自定义高度

```vue
<template>
	<up-line-progress :percentage="30" height="8"></up-line-progress>
</template>
```

#### 自定义样式(不支持安卓环境的nvue)

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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/lineProgress.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `activeColor` | 激活部分的颜色 | `String` | `'#19be6b'` |
| `inactiveColor` | — | `String` | `'#ececec'` |
| `percentage` | 进度百分比，数值 | `String / Number` | `0` |
| `showText` | 是否在进度条内部显示百分比的值 | `Boolean` | `true` |
| `height` | 进度条的高度，单位px | `String / Number` | `12` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPLineProgress` | `UltraUI/Sources/UltraUI/Components/UPLineProgress.swift` |
| Android · Jetpack Compose | `UPLineProgress` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPLineProgress.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPLineProgress` | `ultra-ui/src/main/ets/components/UPLineProgress.ets` |
| Flutter · Dart | `UPLineProgress` | `packages/ultra_ui/lib/src/widgets/up_line_progress.dart` |
| React Native · TypeScript | `UPLineProgress` | `src/components/line-progress` |
| Taro · React + TypeScript | `UPLineProgress` | `src/ultra-ui/components/up-line-progress` |
| uni-app · Vue 3 | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |
| uni-app-x · UTS / UVUE | `up-line-progress` | `uni_modules/uview-ultra/components/up-line-progress` |

