---
title: 主题定制
description: 替换品牌色、覆盖组件默认属性、适配深色模式。
---

# 主题定制

主题分三层，从粗到细：**色板 → 组件默认属性 → 单实例样式覆盖**。改动越靠上，影响范围越大。

## 一、色板

所有组件的颜色都来自同一组语义化 token：

| Token | 默认值 | 用途 |
| --- | --- | --- |
| `primary` | `#3c9cff` | 主色，主按钮、选中态、链接 |
| `success` | `#5ac725` | 成功 |
| `warning` | `#f9ae3d` | 警告 |
| `error` | `#f56c6c` | 错误、危险操作 |
| `info` | `#909399` | 次要信息，默认按钮 |
| `mainColor` | `#303133` | 主文字 |
| `contentColor` | `#606266` | 正文 |
| `tipsColor` | `#909399` | 辅助文字 |
| `lightColor` | `#c0c4cc` | 占位符、禁用文字 |
| `borderColor` | `#dadbde` | 边框、分割线 |

改一次，全站生效：

<PlatformTabs>

<template #ios>

```swift
UP.setConfig(color: [
    "primary": "#4f5bff",
    "error": "#ff4d4f"
])
```

</template>

<template #android>

```kotlin
UPTheme(
    colors = UPColor.defaults.copy(primary = Color(0xFF4F5BFF))
) {
    App()
}
```

</template>

<template #harmony>

```typescript
import { UPColor } from '@lingyun/ultra-ui-hos';

UPColor.set({ primary: '#4f5bff', error: '#ff4d4f' });
```

</template>

<template #flutter>

```dart
UP.setConfig(color: {
  'primary': '#4f5bff',
  'error': '#ff4d4f',
});
```

</template>

<template #reactnative>

```tsx
import { UP } from 'ultra-ui-rn'

UP.setConfig({
  color: { primary: '#4f5bff', error: '#ff4d4f' }
})
```

</template>

<template #taro>

```tsx
import { UP } from '@ultra-ui'

UP.setConfig({
  color: { primary: '#4f5bff', error: '#ff4d4f' }
})
```

</template>

<template #uniapp>

```js
// main.js
app.use(uviewPlus, () => ({
  options: {
    color: {
      primary: '#4f5bff',
      error: '#ff4d4f'
    }
  }
}))
```

也可以直接覆盖 SCSS 变量：

```scss
/* uni.scss */
$u-primary: #4f5bff;
$u-error: #ff4d4f;
```

</template>

<template #uniappx>

```ts
// main.uts
import { setColor } from '@/uni_modules/uview-ultra/libs/config/color.uts'

setColor({ primary: '#4f5bff', error: '#ff4d4f' })
```

</template>

</PlatformTabs>

## 二、组件默认属性

如果整个项目的按钮都要圆角、所有 Alert 都是 `error` 类型，不必每处都写一遍——改默认值即可。

uni-app 系通过插件的 `props` 配置：

```js
app.use(uviewPlus, () => ({
  options: {
    props: {
      button: { shape: 'circle', type: 'primary' },
      alert: { type: 'error' },
      cell: { border: false }
    }
  }
}))
```

其余平台通过 `UP.props` 做等价配置：

```dart
// Flutter
UP.props['button'] = { 'shape': 'circle', 'type': 'primary' };
```

```tsx
// React Native / Taro
UP.setConfig({
  props: {
    button: { shape: 'circle', type: 'primary' }
  }
})
```

::: tip 优先级
单实例传入的属性 > 全局 `props` 默认值 > 组件内置默认值。
:::

## 三、单实例样式覆盖

`customStyle` 接受一个对象，键名用**小驼峰**，值必须是字符串：

::: code-group

```vue [uni-app]
<up-button
  text="确定"
  :custom-style="{ marginTop: '20px', width: '400rpx' }"
/>
```

```tsx [React Native]
<UPButton text="确定" customStyle={{ marginTop: 20, width: 200 }} />
```

```dart [Flutter]
UPButton(text: '确定', customStyle: const {'marginTop': '20', 'width': '200'})
```

:::

::: warning 微信小程序里 class 传不进去
微信小程序编译后会保留组件同名节点，外部 `class` 无法穿透到组件根元素。要么用 `customStyle`，要么在组件外面套一层 `view` 控制间距与宽度。
:::

## 深色模式

组件读取的是语义色 token，因此深色模式只需要切换 token 组，不需要改组件调用：

- **iOS** — 跟随系统 `ColorScheme`，无需额外配置。
- **Android** — `UPTheme(darkTheme = isSystemInDarkTheme())`。
- **HarmonyOS** — 跟随系统深色模式。
- **Flutter** — `UP.themeData(Brightness.dark)` 传给 `MaterialApp.darkTheme`。
- **React Native / Taro** — `UPThemeProvider` 读取系统外观，也可手动传 `mode="dark"`。
- **uni-app / uni-app-x** — 在 `manifest.json` 里开启 `darkmode`，并提供 `theme.json` 色值表。

## 图标字体

图标组件用的是内置的 `upicon` 字体。原生三端需要在启动时注册一次：

```swift
UltraUI.registerFonts()   // iOS
```

Android 与鸿蒙已经把字体放进资源目录，随包加载，无需手动注册。
