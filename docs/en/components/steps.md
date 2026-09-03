---
title: Steps
description: Shows progress through a flow, horizontally or vertically, with custom nodes.
generated: true
---

# Steps

Shows progress through a flow, horizontally or vertically, with custom nodes.

<PlatformBadges component="steps" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSteps
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #harmony>

```typescript
import { UPSteps, UPStepsProps } from '@lingyun/ultra-ui-hos';

UPSteps({ props: new UPStepsProps({ current: this.current, contentBuilder: (): void => {} }) }) {
  UPStepsItem({ props: new UPStepsItemProps({ title: '提交', desc: '资料已提交', onClick: (index: number): void => { this.current = index; this.message = '点击横向步骤：' + String(index); } }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '审核', desc: '审核中', onClick: (index: number): void => { this.current = index; this.message = '点击横向步骤：' + String(index); } }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '完成', error: true, onClick: (index: number): void => { this.current = index; this.message = '点击错误步骤：' + String(index); } }) })
}
```

```typescript
UPSteps({ props: new UPStepsProps({ direction: 'column', current: 0, dot: true, activeColor: '#67c23a' }) }) {
  UPStepsItem({ props: new UPStepsItemProps({ title: '纵向步骤', desc: '点状连接线' }) })
  UPStepsItem({ props: new UPStepsItemProps({ title: '下一步', desc: '等待处理' }) })
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/StepsDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPSteps(
  current: 1,
  children: _orderItems(
    firstStyle: BoxDecoration(color: tokens.pageBgColor),
  ),
)
```

```dart
UPSteps(
  current: 1,
  dot: true,
  children: [
    UPStepsItem(title: '已下单', desc: '10:30'),
    UPStepsItem(title: '已出库', desc: '10:35'),
    UPStepsItem(title: '运输中', desc: '11:40'),
  ],
)
```

```dart
UPSteps(
  current: 1,
  dot: true,
  direction: 'column',
  children: [
    UPStepsItem(title: '已下单', desc: '10:30'),
    UPStepsItem(title: '已出库', desc: '10:35'),
    UPStepsItem(title: '运输中', desc: '11:40'),
  ],
)
```

```dart
UPSteps(
  current: 1,
  children: _threeItems(error: true),
)
```

```dart
UPSteps(
  current: 1,
  activeIcon: 'checkmark',
  inactiveIcon: 'arrow-right',
  children: _threeItems(),
)
```

```dart
UPSteps(
  current: 1,
  children: _threeItems(customIcon: customSlot),
)
```

```dart
UPSteps(
  current: 1,
  activeColor: '#3c9cff',
  children: _threeItems(),
)
```

```dart
UPSteps(
  current: 1,
  direction: 'column',
  children: _threeItems(),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_c/steps_page.dart`</small>

</template>

<template #reactnative>

#### Basic demo

```tsx
import { UPSteps } from 'ultra-ui-rn';

<UPSteps current={current1}>
  <UPStepsItem desc="10:30" itemStyle={s.firstItem} title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
  <UPStepsItem desc="19:50" title="已签收" />
  <UPStepsItem desc="20:10" title="已拒收" />
  <UPStepsItem desc="23:20" title="已退回" />
</UPSteps>
```

#### Dot styles

```tsx
<UPSteps current={1} dot>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

#### Error state

```tsx
<UPSteps current={1}>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" error title="仓库着火" />
  <UPStepsItem desc="11:40" title="破产清算" />
</UPSteps>
```

#### Custom icon

```tsx
<UPSteps activeIcon="checkmark" current={1} inactiveIcon="arrow-right">
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

#### Custom slot

```tsx
<UPSteps current={1}>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" iconNode={<Text style={s.slotIcon}>运</Text>} title="运输中" />
</UPSteps>
```

#### Custom colour

```tsx
<UPSteps activeColor="#3c9cff" current={1}>
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

#### Vertical presentation

```tsx
<UPSteps current={1} direction="column">
  <UPStepsItem desc="10:30" title="已下单" />
  <UPStepsItem desc="10:35" title="已出库" />
  <UPStepsItem desc="11:40" title="运输中" />
</UPSteps>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/navigation/StepsDemo.tsx`</small>

</template>

<template #taro>

#### Horizontal steps

```tsx
import { UPSteps } from '@ultra-ui'

<UPSteps current={current} onClick={setCurrent}>
  <UPStepsItem title='买家下单' desc='2024-01-01' />
  <UPStepsItem title='商家发货' desc='2024-01-02' />
  <UPStepsItem title='买家签收' desc='2024-01-03' />
  <UPStepsItem title='完成' desc='2024-01-04' />
</UPSteps>
```

#### Vertical steps

```tsx
<UPSteps direction='column' current={2}>
  <UPStepsItem title='提交申请' desc='已提交退款申请' />
  <UPStepsItem title='审核中' desc='客服正在审核' />
  <UPStepsItem title='审核失败' desc='商品影响二次销售' error />
  <UPStepsItem title='重新提交' desc='请补充凭证' />
</UPSteps>
```

#### Dot mode

```tsx
<UPSteps current={1} dot activeColor='#19be6b'>
  <UPStepsItem title='待付款' />
  <UPStepsItem title='待发货' />
  <UPStepsItem title='待收货' />
  <UPStepsItem title='已完成' />
</UPSteps>
```

#### Custom icon

```tsx
<UPSteps current={1} activeIcon='checkmark-circle-fill' inactiveIcon='more-circle'>
  <UPStepsItem title='基础' />
  <UPStepsItem title='进阶' />
  <UPStepsItem title='高级' />
</UPSteps>
```

#### Vertical, with custom content

```tsx
<UPSteps direction='column' current={1}>
  <UPStepsItem title='阶段一' content={<View className='steps-demo__card'>自定义卡片内容 A</View>} />
  <UPStepsItem title='阶段二' content={<View className='steps-demo__card'>自定义卡片内容 B</View>} />
  <UPStepsItem title='阶段三' content={<View className='steps-demo__card'>自定义卡片内容 C</View>} />
</UPSteps>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/steps/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<up-steps current="0">
		<up-steps-item title="已下单" desc="10:30">
		</up-steps-item>
		<up-steps-item title="已出库" desc="10:35" ></up-steps-item>
		<up-steps-item title="运输中" desc="11:40"></up-steps-item>
	</up-steps>
</template>
```

#### Error state

```vue
<up-steps current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item error title="仓库着火" desc="10:35"></up-steps-item>
	<up-steps-item title="破产清算" desc="11:40"></up-steps-item>
</up-steps>
```

#### Steps mode

```up-steps```的```dot```参数设置为```true```的话，将会以点状的形式展示步骤条样式。

```html
<up-steps current="1" dot>
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40"></up-steps-item>
</up-steps>
```

#### Vertical mode

```vue

```html
<template>
	<up-steps current="1" direction="column">
		<up-steps-item title="已下单" desc="10:30">
		</up-steps-item>
		<up-steps-item title="已出库" desc="10:35">
		</up-steps-item>
		<up-steps-item title="运输中" desc="11:40"></up-steps-item>
	</up-steps>
</template>
```

#### Custom icon

```vue
<up-steps
	current="1" activeIcon="checkmark" inactiveIcon="arrow-right">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40"></up-steps-item>
</up-steps>
```

#### Custom title through a slot

```vue
<up-steps :current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40">
		<template #title>
			<text class="slot-title">标题</text>
		</template>
	</up-steps-item>
</up-steps>

### 通过插槽自定义描述

通过desc插槽，可以自定义某个步骤描述。

```html
<up-steps :current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40">
		<template #desc>
			<text class="slot-desc">描述</text>
		</template>
	</up-steps-item>
</up-steps>

### 通过插槽自定义内容

通过content插槽，可以自定义某个步骤标题和描述整体内容区域。

```html
<up-steps :current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40">
		<template #content>
			<text class="slot-title">标题</text>
			<text class="slot-desc">描述</text>
		</template>
	</up-steps-item>
</up-steps>


### 通过插槽自定义样式

通过默认插槽，可以自定义某个步骤当前状态的特殊标识

```html
<up-steps :current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40">
		<template #icon>
			<text class="slot-icon">运</text>
		</template>
	</up-steps-item>
</up-steps>

<style lang="scss">
	.slot-icon {
		width: 21px;
		height: 21px;
		background-color: $u-warning;
		border-radius: 100px;
		font-size: 12px;
		color: #fff;
		line-height: 21px;
		text-align: center;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/steps.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<up-steps current="0">
		<up-steps-item title="已下单" desc="10:30">
		</up-steps-item>
		<up-steps-item title="已出库" desc="10:35" ></up-steps-item>
		<up-steps-item title="运输中" desc="11:40"></up-steps-item>
	</up-steps>
</template>
```

#### Error state

```vue
<up-steps current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item error title="仓库着火" desc="10:35"></up-steps-item>
	<up-steps-item title="破产清算" desc="11:40"></up-steps-item>
</up-steps>
```

#### Steps mode

```up-steps```的```dot```参数设置为```true```的话，将会以点状的形式展示步骤条样式。

```html
<up-steps current="1" dot>
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40"></up-steps-item>
</up-steps>
```

#### Vertical mode

```vue

```html
<template>
	<up-steps current="1" direction="column">
		<up-steps-item title="已下单" desc="10:30">
		</up-steps-item>
		<up-steps-item title="已出库" desc="10:35">
		</up-steps-item>
		<up-steps-item title="运输中" desc="11:40"></up-steps-item>
	</up-steps>
</template>
```

#### Custom icon

```vue
<up-steps
	current="1" activeIcon="checkmark" inactiveIcon="arrow-right">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40"></up-steps-item>
</up-steps>
```

#### Custom styling through a slot

```vue
<up-steps :current="1">
	<up-steps-item title="已下单" desc="10:30"></up-steps-item>
	<up-steps-item title="已出库" desc="10:35"></up-steps-item>
	<up-steps-item title="运输中" desc="11:40">
		<template #icon>
			<text class="slot-icon">运</text>
		</template>
	</up-steps-item>
</up-steps>

<style lang="scss">
	.slot-icon {
		width: 21px;
		height: 21px;
		background-color: $up-warning;
		border-radius: 100px;
		font-size: 12px;
		color: #fff;
		line-height: 21px;
		text-align: center;
	}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/steps.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-steps>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `direction` | 排列方向 | `String` | `'row'` |
| `current` | 设置第几个步骤 | `String / Number` | `0` |
| `activeColor` | 激活状态颜色 | `String` | `'#3c9cff'` |
| `inactiveColor` | 未激活状态颜色 | `String` | `'#969799'` |
| `activeIcon` | 激活状态的图标 | `String` | `''` |
| `inactiveIcon` | 未激活状态图标 | `String` | `''` |
| `dot` | 是否显示点类型 | `Boolean` | `false` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-steps-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `title` | 标题 | `String / Number` | `''` |
| `desc` | 描述文本 | `String / Number` | `''` |
| `iconSize` | 图标大小 | `String / Number` | `17` |
| `error` | 当前步骤是否处于失败状态 | `Boolean` | `false` |
| `itemStyle` | 自定义样式 | `Object` | `—` |

#### Slots

| Slot |
| --- |
| `content` |
| `desc` |
| `icon` |
| `title` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSteps` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPTabsStepsComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSteps` | `ultra-ui/src/main/ets/components/UPSteps.ets` |
| Flutter · Dart | `UPSteps` | `packages/ultra_ui/lib/src/widgets/up_steps.dart` |
| React Native · TypeScript | `UPSteps` | `src/components/steps` |
| Taro · React + TypeScript | `UPSteps` | `src/ultra-ui/components/up-steps` |
| uni-app · Vue 3 | `up-steps` | `uni_modules/uview-ultra/components/up-steps` |
| uni-app-x · UTS / UVUE | `up-steps` | `uni_modules/uview-ultra/components/up-steps` |

