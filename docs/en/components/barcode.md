---
title: Barcode
description: Generates a one-dimensional barcode locally.
generated: true
---

# Barcode

Generates a one-dimensional barcode locally.

<PlatformBadges component="barcode" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### CODE128 barcode

```dart
import 'package:ultra_ui/ultra_ui.dart';

const UPBarcode(
  key: ValueKey('barcode-page-code128'),
  value: '1234567890',
  format: 'CODE128',
  height: 70,
  fontSize: 16,
)
```

#### EAN-13 barcode

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean13'),
  value: '5901234123457',
  format: 'EAN13',
  height: 70,
  fontSize: 16,
)
```

#### EAN-8 barcode

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean8'),
  value: '96385074',
  format: 'EAN8',
  height: 70,
  fontSize: 11,
)
```

#### UPC-A barcode

```dart
const UPBarcode(
  key: ValueKey('barcode-page-upca'),
  value: '123456789012',
  format: 'UPCA',
  height: 70,
  fontSize: 16,
)
```

#### CODE39 barcode

```dart
const UPBarcode(
  key: ValueKey('barcode-page-code39'),
  value: 'CODE39',
  format: 'CODE39',
  height: 70,
  fontSize: 16,
)
```

#### EAN-5 supplement

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean5'),
  value: '12345',
  format: 'EAN5',
  width: 100,
  height: 60,
  fontSize: 14,
)
```

#### EAN-2 supplement

```dart
const UPBarcode(
  key: ValueKey('barcode-page-ean2'),
  value: '12',
  format: 'EAN2',
  width: 100,
  height: 60,
  fontSize: 14,
)
```

#### Custom barcode styling

```dart
const UPBarcode(
  key: ValueKey('barcode-page-custom'),
  value: 'CUSTOM123',
  format: 'CODE128',
  width: 200,
  height: 70,
  fontSize: 14,
  lineColor: '#FF0000',
  background: '#F0F0F0',
  textPosition: 'top',
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/barcode_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPBarcode } from 'ultra-ui-rn';

<UPBarcode
  fontSize={16}
  format="CODE128"
  height={70}
  value="1234567890"
/>
```

```tsx
<UPBarcode
  fontSize={16}
  format="EAN13"
  height={70}
  value="5901234123457"
/>
```

```tsx
<UPBarcode
  fontSize={11}
  format="EAN8"
  height={70}
  value="96385074"
/>
```

```tsx
<UPBarcode
  fontSize={16}
  format="UPCA"
  height={70}
  value="123456789012"
/>
```

```tsx
<UPBarcode
  fontSize={16}
  format="CODE39"
  height={70}
  value="CODE39"
/>
```

```tsx
<UPBarcode
  fontSize={14}
  format="EAN5"
  height={60}
  value="12345"
  width={100}
/>
```

```tsx
<UPBarcode
  fontSize={14}
  format="EAN2"
  height={60}
  value="12"
  width={100}
/>
```

```tsx
<UPBarcode
  background="#F0F0F0"
  fontSize={14}
  format="CODE128"
  height={70}
  lineColor="#FF0000"
  textPosition="top"
  value="CUSTOM123"
  width={200}
/>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/advanced/BarcodeDemo.tsx`</small>

</template>

<template #taro>

#### Basic usage

```tsx
import { UPBarcode } from '@ultra-ui'

<UPBarcode value='ULTRA-UI-2026' />
```

#### Custom content

```tsx
<UPBarcode value={value} onError={setLastError} />
```

#### Retail codes: EAN and UPC

```tsx
<UPBarcode value='5901234123457' format='EAN13' width={220} />
```

#### CODE39 and CODE93

```tsx
<UPBarcode value='CODE39' format='CODE39' width={200} />
```

#### Logistics code: ITF-14

```tsx
<UPBarcode value='12345678901231' format='ITF14' width={240} />
```

#### Other symbologies

```tsx
<UPBarcode value='1234' format='MSI' width={140} />
```

#### Hiding the label

```tsx
<UPBarcode value='NO-TEXT' displayValue={false} />
```

#### Text position and alignment

```tsx
<UPBarcode value='TOP-TEXT' textPosition='top' />
```

<small>Snippet from `ultra-ui-taro/src/pages/components/barcode/index.tsx`</small>

</template>

<template #uniapp>

#### Barcode size

```vue
<template>
  <view>
    <u-barcode 
      value="1234567890" 
      :width="300"
      :height="100"
    />
  </view>
</template>

<script>
  export default {
    
  }
</script>
```

#### Barcode colour

```vue
<template>
  <view>
    <u-barcode 
      value="1234567890" 
      line-color="#ff0000"
      background="#f5f5f5"
    />
  </view>
</template>

<script>
  export default {
    
  }
</script>
```

#### Showing the text

```vue
<template>
  <view>
    <u-barcode 
      value="1234567890" 
      :display-value="true"
      text="商品条码"
    />
  </view>
</template>

<script>
  export default {
    
  }
</script>
```

#### Canvas rendering disabled

```vue
<template>
  <view>
    <u-barcode 
      value="1234567890" 
      :use-canvas="false"
    />
  </view>
</template>

<script>
  export default {
    
  }
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/barcode.md`</small>

</template>

<template #uniappx>

#### Barcode size

```vue
<template>
  <view>
    <up-barcode 
      value="1234567890" 
      :width="300"
      :height="100"
    />
  </view>
</template>

<script setup>
</script>
```

#### Barcode colour

```vue
<template>
  <view>
    <up-barcode 
      value="1234567890" 
      line-color="#ff0000"
      background="#f5f5f5"
    />
  </view>
</template>

<script setup>
</script>
```

#### Showing the text

```vue
<template>
  <view>
    <up-barcode 
      value="1234567890" 
      :display-value="true"
      text="商品条码"
    />
  </view>
</template>

<script setup>
</script>
```

#### Canvas rendering disabled

```vue
<template>
  <view>
    <up-barcode 
      value="1234567890" 
      :use-canvas="false"
    />
  </view>
</template>

<script setup>
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/barcode.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `error` |
| `rendered` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPBarcode` | `packages/ultra_ui/lib/src/widgets/up_barcode.dart` |
| React Native · TypeScript | `UPBarcode` | `src/components/barcode` |
| Taro · React + TypeScript | `UPBarcode` | `src/ultra-ui/components/up-barcode` |
| uni-app · Vue 3 | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |
| uni-app-x · UTS / UVUE | `up-barcode` | `uni_modules/uview-ultra/components/up-barcode` |

