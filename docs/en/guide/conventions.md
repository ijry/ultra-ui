---
title: Conventions
description: How naming, units, events and slots map across the eight platforms.
---

# Conventions

One API across eight languages needs a translation table. This is that table.

## Naming

| Concept | Convention | Example |
| --- | --- | --- |
| Component (code platforms) | `UP` + PascalCase | `UPButton`, `UPActionSheet`, `UPGoodsSku` |
| Component (uni-app family) | `up-` + kebab-case tag | `<up-button>`, `<up-action-sheet>` |
| Prop | camelCase | `loadingText`, `customStyle`, `activeStyle` |
| Prop (uni-app template) | camelCase or kebab-case | `loading-text` equals `loadingText` |
| Prop bag type | `UP` + name + `Props` | `UPButtonProps` (Android / HarmonyOS) |
| Imperative controller | `UP` + name + `Controller` | `UPToastController` (Android / HarmonyOS) |

uview-plus 3.x also accepts `u-button` and `u--button` for the same component; 4.x keeps only `up-`. Use `up-` in new code.

## Shared props

Nearly every component accepts these, with identical values everywhere:

| Prop | Type | Values |
| --- | --- | --- |
| `type` | String | `info` (default) / `primary` / `success` / `warning` / `error` |
| `size` | String | `large` / `normal` (default) / `small` / `mini` |
| `shape` | String | `square` (default) / `circle` |
| `plain` | Boolean | Transparent background, border retained |
| `disabled` | Boolean | Disabled, and events are suppressed |
| `loading` | Boolean | Loading state |
| `customStyle` | Object | Style override; keys are camelCase |

## Size units

Component internals already convert to each platform's idiom. **A custom size you pass must use the current platform's unit:**

| Platform | Unit | Notes |
| --- | --- | --- |
| uni-app / uni-app-x | `rpx` | Based on a 750-wide design; `px` also accepted |
| Taro | `rpx` / `px` | Same as uni-app on mini programs |
| React Native | logical pixels (number) | Unitless |
| Flutter | logical pixels (double) | Unitless |
| iOS | points | SwiftUI `CGFloat` |
| Android | `dp` | Compose `Dp` |
| HarmonyOS | `vp` | ArkUI virtual pixels |

uni-app and Flutter expose `UP.getPx()` / `UP.rpx2px()` for manual conversion.

## Events

| Platform | Form |
| --- | --- |
| uni-app / uni-app-x | `@click`, `@change` (template events) |
| React Native / Taro | `onClick`, `onChange` (prop callbacks) |
| Flutter | `onClick:`, `onChange:` (named parameters) |
| iOS | Trailing closure, or `.onTap { }` |
| Android | `onClick = { }` (lambda parameter) |
| HarmonyOS | `onClick:` inside the `Props` constructor |

::: warning On uni-app, use @click rather than @tap
Listening for `@tap` on a component can silently fail in WeChat mini programs. Always use the `click` event the component itself emits.
:::

## Slots

A uview-plus named slot lands differently on each platform:

::: code-group

```vue [uni-app]
<up-cell title="Title">
  <template #value>
    <up-tag text="New" />
  </template>
</up-cell>
```

```tsx [React Native / Taro]
<UPCell title="Title" valueSlot={<UPTag text="New" />} />
```

```dart [Flutter]
UPCell(title: 'Title', valueSlot: const UPTag(text: 'New'))
```

```swift [iOS]
UPCell(title: "Title") {
    UPTag(text: "New")          // @ViewBuilder closure
}
```

:::

The rule: **named slot `xxx` becomes a prop called `xxxSlot`**, and the default slot becomes children / `@ViewBuilder` content.

## Two-way binding

| Platform | Form |
| --- | --- |
| uni-app / uni-app-x | `v-model` |
| React Native / Taro | Controlled: `value` + `onChange` |
| Flutter | `value` + `onChanged` |
| iOS | `@Binding` (`$state`) |
| Android | `value` + `onValueChange` |
| HarmonyOS | `value` in `props` + an `onChange` callback |

## Imperative components

Toast, Notify and Modal need a **host** mounted at the app root, then fire through a controller or ref. See [platform support](./platforms#where-platforms-differ) for each platform's host and call style.

One easy trap: in uni-app, no `ref` call may happen in `onLoad` — the child component does not exist yet. Use `onReady`.

## Global utilities

Every platform exposes a `UP` namespace with colour, unit, time-formatting and validation helpers:

::: code-group

```js [uni-app]
uni.$u.timeFormat(Date.now(), 'yyyy-mm-dd')
uni.$u.test.mobile('13800138000')
```

```dart [Flutter]
UP.timeFormat(DateTime.now(), 'yyyy-mm-dd');
UP.test.mobile('13800138000');
```

```tsx [React Native / Taro]
import { UP } from 'ultra-ui-rn'
UP.timeFormat(Date.now(), 'yyyy-mm-dd')
```

:::
