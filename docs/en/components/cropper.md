---
title: Cropper
description: An image cropper with zoom, rotation and fixed aspect ratios.
generated: true
---

# Cropper

An image cropper with zoom, rotation and fixed aspect ratios.

<PlatformBadges component="cropper" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. Every snippet is lifted verbatim from that platform’s own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPCropper(
  key: const ValueKey('cropper-page-avatar'),
  index: 0,
  canChangeSize: false,
  areaWidth: '300rpx',
  areaHeight: '300rpx',
  exportWidth: '260rpx',
  exportHeight: '260rpx',
  onConfirm: _cutImage,
  // Source default slot: an avatar that opens the cropper.
  child: Align(
    alignment: Alignment.centerLeft,
    child: UPAvatar(src: _urls[0] ?? '', size: 120),
  ),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/cropper_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPCropper } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

```vue
<up-cropper @confirm="cutImage" ref="avatarRef0" :canChangeSize="false"
    areaWidth="300rpx" areaHeight="300rpx" exportWidth="260rpx" exportHeight="260rpx">
    <view class="avatar-wrapper">
        <up-avatar class="avatar" :src="urls[0]" size="120px"></up-avatar>
    </view>
</up-cropper>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus/src/pages/componentsD/cropper/cropper.nvue`</small>

</template>

<template #uniappx>

```vue
<up-cropper
    ref="avatarRef0"
    :can-change-size="false"
    area-width="300rpx"
    area-height="300rpx"
    export-width="260rpx"
    export-height="260rpx"
    @confirm="cutImage"
>
    <view class="avatar-wrapper">
        <up-avatar :src="avatarUrl" size="120px"></up-avatar>
    </view>
</up-cropper>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus4/pages/componentsD/cropper/cropper.uvue`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `fillColor` | 画布填充色，默认透明，可传 'black'、'#ffffff' 等 | `String` | `—` |

### Events

| Event |
| --- |
| `avtinit` |
| `cancel` |
| `confirm` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCropper` | `packages/ultra_ui/lib/src/widgets/up_cropper.dart` |
| React Native · TypeScript | `UPCropper` | `src/components/cropper` |
| uni-app · Vue 3 | `up-cropper` | `src/uni_modules/uview-plus/components/u-cropper` |
| uni-app-x · UTS / UVUE | `up-cropper` | `uni_modules/uview-ultra/components/up-cropper` |

