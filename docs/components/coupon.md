---
title: Coupon 优惠券
description: 优惠券卡片样式，含票根缺口与可用/失效状态。
generated: true
---

# Coupon 优惠券

优惠券卡片样式，含票根缺口与可用/失效状态。

<PlatformBadges component="coupon" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。每段示例都直接摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/coupon_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCoupon } from 'ultra-ui-rn';

<UPCoupon amount="100" title="满500减100" desc="全品类可用" time="2026.12.31" />
```

<small>示例来源 `ultra-ui-rn/example/pages/components/advanced/CouponDemo.tsx`</small>

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

<small>示例来源 `ultra-ui-taro/src/pages/components/coupon/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus/src/pages/componentsD/coupon/coupon.nvue`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus4/pages/componentsD/coupon/coupon.uvue`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

### 事件

| 事件名 |
| --- |
| `click` |

### 插槽

| 插槽名 |
| --- |
| `action` |
| `amount` |
| `default` |
| `desc` |
| `limit` |
| `time` |
| `title` |
| `unit` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCoupon` | `packages/ultra_ui/lib/src/widgets/up_coupon.dart` |
| React Native · TypeScript | `UPCoupon` | `src/components/coupon` |
| Taro · React + TypeScript | `UPCoupon` | `src/ultra-ui/components/up-coupon` |
| uni-app · Vue 3 | `up-coupon` | `src/uni_modules/uview-plus/components/u-coupon` |
| uni-app-x · UTS / UVUE | `up-coupon` | `uni_modules/uview-ultra/components/up-coupon` |

