---
title: Coupon
description: A coupon card with ticket notches and available/expired states.
generated: true
---

# Coupon

A coupon card with ticket notches and available/expired states.

<PlatformBadges component="coupon" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCoupon(
  key: ValueKey('coupon-page-basic'),
  amount: 100,
  title: '满减券',
  color: '#333',
  limit: '满200可用',
  time: '2023-12-31前使用',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/coupon_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCoupon } from 'ultra-ui-rn';

<UPCoupon amount="100" title="满500减100" desc="全品类可用" time="2026.12.31" />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/CouponDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPCoupon } from '@ultra-ui'

<UPCoupon
  amount={20}
  limit='满 100 元可用'
  title='全场通用券'
  desc='仅限自营商品'
  time='2026-12-31 到期'
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/coupon/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-coupon
    :amount="100"
    title="满减券"
    color="#333"
    limit="满200可用"
    time="2023-12-31前使用">
</up-coupon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/coupon/coupon.nvue`</small>

</template>

<template #uniappx>

```vue
<up-coupon 
    :amount="100" 
    title="满减券" 
    color="#333"
    limit="满200可用" 
    time="2023-12-31前使用">
</up-coupon>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/coupon/coupon.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `amount` | 金额 | `String / Number` | `—` |
| `unit` | 金额单位 | `String` | `—` |
| `unitPosition` | 单位位置 | `String` | `—` |
| `limit` | 使用限制 | `String` | `—` |
| `title` | 标题 | `String` | `—` |
| `desc` | 描述 | `String` | `—` |
| `time` | 有效期 | `String` | `—` |
| `actionText` | 操作按钮文字 | `String` | `—` |
| `shape` | 形状：coupon-优惠券, envelope-红包, card-卡片 | `String` | `—` |
| `size` | 尺寸：small, medium, large | `String` | `—` |
| `circle` | 是否圆形按钮 | `Boolean` | `—` |
| `disabled` | 是否禁用 | `Boolean` | `—` |
| `bgColor` | 背景颜色 | `String` | `—` |
| `color` | 文字颜色 | `String` | `—` |
| `type` | 内置背景类型 | `String` | `—` |

### Events

| Event |
| --- |
| `click` |

### Slots

| Slot |
| --- |
| `action` |
| `amount` |
| `default` |
| `desc` |
| `limit` |
| `time` |
| `title` |
| `unit` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCoupon` | `packages/ultra_ui/lib/src/widgets/up_coupon.dart` |
| React Native · TypeScript | `UPCoupon` | `src/components/coupon` |
| Taro · React + TypeScript | `UPCoupon` | `src/ultra-ui/components/up-coupon` |
| uni-app · Vue 3 | `up-coupon` | `src/uni_modules/uview-plus/components/u-coupon` |
| uni-app-x · UTS / UVUE | `up-coupon` | `uni_modules/uview-ultra/components/up-coupon` |

