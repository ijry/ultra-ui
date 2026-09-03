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

<UPCoupon
  amount={100}
  color="#333"
  limit="满200可用"
  time="2023-12-31前使用"
  title="满减券"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/CouponDemo.tsx`</small>

</template>

<template #taro>

### 基础用法

amount 金额 + limit 使用限制 + title 标题

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

### 形状

shape：coupon 优惠券 / envelope 红包 / card 卡片

```tsx
<UPCoupon shape='coupon' amount={10} limit='满 50 元可用' title='shape=coupon' />
```

### 主题

type：primary / success / warning / error

```tsx
<UPCoupon
  type={type}
  amount={50}
  limit='满 300 元可用'
  title={`type=${type}`}
  desc='全品类可用'
/>
```

### 尺寸

size：small / medium / large

```tsx
<UPCoupon size='small' amount={5} limit='无门槛' title='small' />
```

### 单位

unit 单位文字，unitPosition 控制其在金额左右

```tsx
<UPCoupon amount={20} unit='￥' unitPosition='left' title='unitPosition=left' />
```

### 自定义颜色

bgColor 背景 / color 文字颜色

```tsx
<UPCoupon
  bgColor='linear-gradient(90deg, #b18cff, #7232dd)'
  color='#ffffff'
  amount={100}
  limit='满 1000 元可用'
  title='大额满减券'
  desc='部分商品不可用'
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

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/coupon/coupon.uvue`</small>

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
| uni-app · Vue 3 | `up-coupon` | `uni_modules/uview-ultra/components/up-coupon` |
| uni-app-x · UTS / UVUE | `up-coupon` | `uni_modules/uview-ultra/components/up-coupon` |

