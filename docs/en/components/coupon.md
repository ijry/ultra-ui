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

#### 基础优惠券

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

#### 小尺寸

```dart
UPCoupon(
  key: ValueKey('coupon-page-small'),
  amount: 20,
  title: '满减券',
  size: 'small',
  actionText: '去使用',
)
```

#### 大尺寸

```dart
UPCoupon(
  key: ValueKey('coupon-page-large'),
  amount: 200,
  unit: '￥',
  title: '大额优惠券',
  desc: '仅限VIP用户',
  limit: '满500可用',
  time: '有效期至2023-12-31',
  size: 'large',
  type: 'error',
)
```

#### 圆形按钮

```dart
UPCoupon(
  key: ValueKey('coupon-page-circle'),
  amount: 30,
  title: '限时优惠',
  desc: '今日专享',
  circle: true,
  actionText: '抢购',
)
```

#### 禁用状态

```dart
UPCoupon(
  key: ValueKey('coupon-page-disabled'),
  amount: 50,
  title: '已过期',
  desc: '活动已结束',
  time: '2023-01-01至2023-01-31',
  disabled: true,
)
```

#### 红包样式

```dart
UPCoupon(
  key: ValueKey('coupon-page-envelope'),
  amount: 50,
  unit: '元',
  title: '新人红包',
  desc: '限时专享',
  shape: 'envelope',
  type: 'warning',
)
```

#### 卡片样式

```dart
UPCoupon(
  key: ValueKey('coupon-page-card'),
  amount: 88,
  unit: '折',
  title: '折扣券',
  desc: '全场通用',
  shape: 'card',
  type: 'success',
  actionText: '立即领取',
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

```tsx
<UPCoupon
  actionText="去使用"
  amount={20}
  size="small"
  title="满减券"
/>
```

```tsx
<UPCoupon
  amount={200}
  desc="仅限VIP用户"
  limit="满500可用"
  size="large"
  time="有效期至2023-12-31"
  title="大额优惠券"
  type="error"
  unit="￥"
/>
```

```tsx
<UPCoupon
  actionText="抢购"
  amount={30}
  circle
  desc="今日专享"
  title="限时优惠"
/>
```

```tsx
<UPCoupon
  amount={50}
  desc="活动已结束"
  disabled
  time="2023-01-01至2023-01-31"
  title="已过期"
/>
```

```tsx
<UPCoupon
  amount={50}
  desc="限时专享"
  shape="envelope"
  title="新人红包"
  type="warning"
  unit="元"
/>
```

```tsx
<UPCoupon
  actionText="立即领取"
  amount={88}
  desc="全场通用"
  shape="card"
  title="折扣券"
  type="success"
  unit="折"
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/CouponDemo.tsx`</small>

</template>

<template #taro>

#### 基础用法

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

#### 形状

shape：coupon 优惠券 / envelope 红包 / card 卡片

```tsx
<UPCoupon shape='coupon' amount={10} limit='满 50 元可用' title='shape=coupon' />
```

#### 主题

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

#### 尺寸

size：small / medium / large

```tsx
<UPCoupon size='small' amount={5} limit='无门槛' title='small' />
```

#### 单位

unit 单位文字，unitPosition 控制其在金额左右

```tsx
<UPCoupon amount={20} unit='￥' unitPosition='left' title='unitPosition=left' />
```

#### 自定义颜色

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

```vue
<up-coupon 
    :amount="20" 
    title="满减券" 
    size="small"
    action-text="去使用">
</up-coupon>
```

```vue
<up-coupon 
    :amount="200" 
    unit="￥" 
    title="大额优惠券" 
    desc="仅限VIP用户" 
    limit="满500可用" 
    time="有效期至2023-12-31"
    size="large"
    type="error">
</up-coupon>
```

```vue
<up-coupon 
    :amount="66" 
    title="自定义样式" 
    desc="通过插槽自定义内容"
    shape="card">
    <template #amount="{ amount }">
        <text class="custom-amount">{{ amount }}</text>
    </template>
    <template #title="{ title }">
        <text class="custom-title">{{ title }}</text>
    </template>
    <template #action="{ circle }">
        <up-button type="success" size="mini" :hairline="false" :custom-style="{ borderRadius: getActionBorderRadius(circle) }">
            立即使用
        </up-button>
    </template>
</up-coupon>
```

```vue
<up-coupon 
    :amount="30" 
    title="限时优惠" 
    desc="今日专享"
    :circle="true"
    action-text="抢购">
</up-coupon>
```

```vue
<up-coupon 
    :amount="50" 
    title="已过期" 
    desc="活动已结束"
    time="2023-01-01至2023-01-31"
    :disabled="true">
</up-coupon>
```

```vue
<up-coupon 
    :amount="50" 
    unit="元" 
    title="新人红包" 
    desc="限时专享" 
    shape="envelope"
    type="warning">
</up-coupon>
```

```vue
<up-coupon 
    :amount="88" 
    unit="折" 
    title="折扣券" 
    desc="全场通用" 
    shape="card"
    type="success"
    action-text="立即领取">
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

```vue
<up-coupon 
    :amount="20" 
    title="满减券" 
    size="small"
    action-text="去使用">
</up-coupon>
```

```vue
<up-coupon 
    :amount="200" 
    unit="￥" 
    title="大额优惠券" 
    desc="仅限VIP用户" 
    limit="满500可用" 
    time="有效期至2023-12-31"
    size="large"
    type="error">
</up-coupon>
```

```vue
<up-coupon 
    :amount="66" 
    title="自定义样式" 
    desc="通过插槽自定义内容"
    shape="card">
    <template #amount="{ amount }">
        <text class="custom-amount">{{ amount }}</text>
    </template>
    <template #title="{ title }">
        <text class="custom-title">{{ title }}</text>
    </template>
    <template #action="{ circle }">
        <up-button type="success" size="mini" :hairline="false" :custom-style="{ borderRadius: getActionBorderRadius(circle) }">
            立即使用
        </up-button>
    </template>
</up-coupon>
```

```vue
<up-coupon 
    :amount="30" 
    title="限时优惠" 
    desc="今日专享"
    :circle="true"
    action-text="抢购">
</up-coupon>
```

```vue
<up-coupon 
    :amount="50" 
    title="已过期" 
    desc="活动已结束"
    time="2023-01-01至2023-01-31"
    :disabled="true">
</up-coupon>
```

```vue
<up-coupon 
    :amount="50" 
    unit="元" 
    title="新人红包" 
    desc="限时专享" 
    shape="envelope"
    type="warning">
</up-coupon>
```

```vue
<up-coupon 
    :amount="88" 
    unit="折" 
    title="折扣券" 
    desc="全场通用" 
    shape="card"
    type="success"
    action-text="立即领取">
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

