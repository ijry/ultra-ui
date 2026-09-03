---
title: Agreement
description: A terms-of-service checkbox that shakes when unchecked.
generated: true
---

# Agreement

A terms-of-service checkbox that shakes when unchecked.

<PlatformBadges component="agreement" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPAgreement(
  controller: _agreement1,
  urlProtocol: _urlProtocol,
  urlPrivacy: _urlPrivacy,
  onConfirm: (value) => setState(() => _checked1 = value),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/agreement_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPAgreement } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

### 基础用法

受控选中态 + onChange

```tsx
import { UPAgreement } from '@ultra-ui'

<UPAgreement
  text='我已阅读并同意相关服务条款'
  value={agreed}
  onChange={setAgreed}
/>
```

### 禁用状态

disabled 时不可交互

```tsx
<UPAgreement
  text='禁用状态下的协议勾选'
  protocolName='《隐私政策》'
  value={false}
  disabled
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/agreement/index.tsx`</small>

</template>

<template #uniapp>

```vue
<up-agreement ref="agreement1" @confirm="change1"
    url-protocol="/pages/user_agreement/agreement/info?title=用户协议"
    url-privacy="/pages/user_agreement/agreement/info?title=隐私政策"></up-agreement>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/agreement/agreement.uvue`</small>

</template>

<template #uniappx>

```vue
<up-agreement ref="agreement1" @confirm="change1"
    url-protocol="/pages/user_agreement/agreement/info?title=用户协议"
    url-privacy="/pages/user_agreement/agreement/info?title=隐私政策"></up-agreement>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/agreement/agreement.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `confirm` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPAgreement` | `packages/ultra_ui/lib/src/widgets/up_agreement.dart` |
| React Native · TypeScript | `UPAgreement` | `src/components/agreement` |
| Taro · React + TypeScript | `UPAgreement` | `src/ultra-ui/components/up-agreement` |
| uni-app · Vue 3 | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |
| uni-app-x · UTS / UVUE | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |

