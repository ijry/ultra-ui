---
title: Canvas 画布
description: 统一各端差异的画布封装，是二维码、海报等组件的底层。
generated: true
---

# Canvas 画布

统一各端差异的画布封装，是二维码、海报等组件的底层。

<PlatformBadges component="canvas" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

<PlatformTabs>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #reactnative>

```tsx
import { UPCanvas } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #taro>

```tsx
import { UPCanvas } from '@ultra-ui'
```

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

</template>

<template #uniapp>

#### 基本使用

通过 `ref` 获取组件实例，再调用绘图方法。组件触发 `ready` 后表示画布已经完成初始化。

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

#### 绘制图片

`drawImage` 支持图片路径、临时文件路径、H5 图片对象、小程序 `CanvasImage` 等平台可识别的图片源。H5 和小程序 2D Canvas 下传入字符串路径时，组件会先加载图片再绘制。

```js
const canvas = canvasRef.value
await canvas.drawImage('/static/logo.png', 20, 20, 80, 80)
canvas.draw(false)
```

#### 导出图片

`toTempFilePath` 保留 uni-app 风格的回调参数，同时返回 `Promise`。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/canvas.md`</small>

</template>

<template #uniappx>

::: tip
暂无自动提取到的示例代码，请参考源码。
:::

<small>配置 easycom 规则后自动引入，无需手动 import。</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `touchend` |
| `touchmove` |
| `touchstart` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPCanvas` | `packages/ultra_ui/lib/src/widgets/up_canvas.dart` |
| React Native · TypeScript | `UPCanvas` | `src/components/canvas` |
| Taro · React + TypeScript | `UPCanvas` | `src/ultra-ui/components/up-canvas` |
| uni-app · Vue 3 | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |
| uni-app-x · UTS / UVUE | `up-canvas` | `uni_modules/uview-ultra/components/up-canvas` |

