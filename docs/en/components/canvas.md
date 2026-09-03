---
title: Canvas
description: A canvas wrapper that hides platform differences; the base for QR codes and posters.
generated: true
---

# Canvas

A canvas wrapper that hides platform differences; the base for QR codes and posters.

<PlatformBadges component="canvas" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

```tsx
import { UPCanvas } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

```tsx
import { UPCanvas } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
  <view>
    <up-canvas
      ref="canvasRef"
      canvas-id="demoCanvas"
      :width="300"
      :height="180"
      bg-color="#ffffff"
      @ready="draw"
    ></up-canvas>

    <up-button text="导出图片" @click="exportImage"></up-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const canvasRef = ref(null)

const draw = () => {
  const canvas = canvasRef.value
  canvas.setFillStyle('#f5f7fa')
  canvas.fillRect(0, 0, 300, 180)

  canvas.setFillStyle('#2979ff')
  canvas.fillRect(24, 24, 120, 64)

  canvas.setFillStyle('#303133')
  canvas.setFontSize(18)
  canvas.fillText('up-canvas', 24, 120)

  canvas.draw(false)
}

const exportImage = async () => {
  const tempFilePath = await canvasRef.value.exportImage('png', 1)
  console.log('导出图片:', tempFilePath)
}
</script>
```

#### Drawing an image

```js
const canvas = canvasRef.value
await canvas.drawImage('/static/logo.png', 20, 20, 80, 80)
canvas.draw(false)
```

#### Exporting an image

```js
const res = await canvasRef.value.toTempFilePath({
  x: 0,
  y: 0,
  width: 300,
  height: 180,
  destWidth: 600,
  destHeight: 360,
  fileType: 'png',
  quality: 1
})

console.log(res.tempFilePath || res.apFilePath)
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/canvas.md`</small>

</template>

<template #uniappx>

::: tip
No snippet could be extracted automatically — please read the source.
:::

<small>Auto-imported through easycom — no import statement needed.</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `touchend` |
| `touchmove` |
| `touchstart` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPCanvas` | `packages/ultra_ui/lib/src/widgets/up_canvas.dart` |
| React Native · TypeScript | `UPCanvas` | `src/components/canvas` |
| Taro · React + TypeScript | `UPCanvas` | `src/ultra-ui/components/up-canvas` |
| uni-app · Vue 3 | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |
| uni-app-x · UTS / UVUE | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |

