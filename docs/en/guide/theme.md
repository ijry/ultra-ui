---
title: Theming
description: Swap the brand palette, override component defaults, and support dark mode.
---

# Theming

Theming has three layers, coarse to fine: **palette → component defaults → per-instance overrides**. The higher up you change something, the wider it lands.

## 1. Palette

Every component colour resolves from one set of semantic tokens:

| Token | Default | Used for |
| --- | --- | --- |
| `primary` | `#3c9cff` | Brand colour: primary buttons, selected states, links |
| `success` | `#5ac725` | Success |
| `warning` | `#f9ae3d` | Warning |
| `error` | `#f56c6c` | Errors and destructive actions |
| `info` | `#909399` | Secondary information, default buttons |
| `mainColor` | `#303133` | Primary text |
| `contentColor` | `#606266` | Body text |
| `tipsColor` | `#909399` | Helper text |
| `lightColor` | `#c0c4cc` | Placeholders, disabled text |
| `borderColor` | `#dadbde` | Borders and dividers |

Change once, applies everywhere:

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

The SCSS variables can be overridden instead:

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

## 2. Component defaults

If every button in your app should be pill-shaped, or every Alert should be an error, change the default rather than repeating yourself.

The uni-app family uses the plugin's `props` option:

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

Other platforms configure the equivalent through `UP.props`:

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

::: tip Precedence
Per-instance prop > global `props` default > the component's built-in default.
:::

## 3. Per-instance overrides

`customStyle` takes an object whose keys are **camelCase** and whose values are strings:

::: code-group

```vue [uni-app]
<up-button
  text="Confirm"
  :custom-style="{ marginTop: '20px', width: '400rpx' }"
/>
```

```tsx [React Native]
<UPButton text="Confirm" customStyle={{ marginTop: 20, width: 200 }} />
```

```dart [Flutter]
UPButton(text: 'Confirm', customStyle: const {'marginTop': '20', 'width': '200'})
```

:::

::: warning class does not reach the component on WeChat
WeChat mini programs keep a node named after the component after compilation, so an external `class` cannot pierce through to the root element. Either use `customStyle`, or wrap the component in a `view` and control spacing there.
:::

## Dark mode

Because components read semantic tokens, dark mode is a token swap rather than a change at the call site:

- **iOS** — follows the system `ColorScheme`; nothing to configure.
- **Android** — `UPTheme(darkTheme = isSystemInDarkTheme())`.
- **HarmonyOS** — follows the system dark mode.
- **Flutter** — pass `UP.themeData(Brightness.dark)` as `MaterialApp.darkTheme`.
- **React Native / Taro** — `UPThemeProvider` reads the system appearance, or accepts `mode="dark"`.
- **uni-app / uni-app-x** — enable `darkmode` in `manifest.json` and supply a `theme.json` colour map.

## The icon font

Icons come from the bundled `upicon` font. The native platforms register it at start-up:

```swift
UltraUI.registerFonts()   // iOS
```

Android and HarmonyOS ship the font in their resource directories, so it loads with the package — no manual step.
