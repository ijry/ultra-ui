---
title: FAQ
description: The questions that come up most often when using ultra-ui.
---

# FAQ

## Why is a component missing on my platform?

Completeness differs. uni-app, uni-app-x, Flutter, React Native and Taro have finished the full port; iOS, Android and HarmonyOS are still working through the catalogue by category.

The badges at the top of each component page are the answer — grey means not implemented there. The full picture is in the [support matrix](./platforms#component-coverage).

## Are prop names really identical everywhere?

The **names** are, and so are their value ranges and defaults. What differs is **how you pass them**:

- iOS / Flutter — named parameters
- Android / HarmonyOS — wrapped in a `UPXxxProps` object
- React Native / Taro — JSX props
- uni-app family — template attributes

A few props only mean something on one platform (`openType` and `sendMessageTitle` are WeChat-only, for instance). Those are kept elsewhere but have no effect.

## My class does not style the component on WeChat

After compilation, WeChat mini programs keep a node named after the component, so an external `class` cannot reach the root element. Two options:

1. Pass an object through `customStyle` (recommended);
2. Wrap the component in a `view` and control spacing and width there.

## Calling a ref method throws "undefined"

In uni-app, child components do not exist yet when `onLoad` fires. Move the `ref` call to `onReady`:

```js
onReady(() => {
  toastRef.value.show({ message: 'Ready' })
})
```

uni-app-x adds one more rule: reaching a child component's method **must go through `$callMethod`**, never a direct call:

```ts
toastRef.value?.$callMethod('show', { message: 'Ready' })
```

## Toast / Notify does not appear

These need a host node. Check that you mounted the right one at the app root:

| Platform | Mount |
| --- | --- |
| iOS | `.overlay { UPToastView() }` |
| Android | `UPToastHost(controller = toast)` |
| HarmonyOS | `UPToastHost()` |
| React Native | `<UPRoot />` |
| Taro | Wrap the app in `<UPRoot>` |
| uni-app / uni-app-x | Place `<up-toast ref="…" />` in the page |

## Icons render as empty boxes

The icon font is not registered. On iOS, call this once in `App.init`:

```swift
UltraUI.registerFonts()
```

On uni-app, check that your bundler is not stripping the font file. Mini programs inline it as base64, which rarely breaks.

## Sizes are off — everything renders twice as large

Wrong unit. The uni-app family defaults to `rpx` on a 750-wide baseline, so `100` means `100rpx`; React Native and Flutter use logical pixels, where `100` means 100pt. See [conventions · size units](./conventions#size-units).

## Can I import only what I use?

Yes, and that is the default:

- **uni-app / uni-app-x** — easycom scans templates at build time and bundles only what appears.
- **React Native / Taro / Flutter** — symbol imports, tree-shaken by the bundler.
- **iOS / Android / HarmonyOS** — the compiler links only referenced types.

## Why can I not install Flutter / Android / Taro?

None of the three is in a public registry yet: the Flutter package declares `publish_to: none`, Android has no Maven coordinate, and Taro keeps library and demo in one repo behind the `@ultra-ui` alias. For now they are consumed as **source or local dependencies** — see [quick start](./quickstart) for the exact configuration.

## Are uview-plus and ultra-ui the same thing?

uview-plus is ultra-ui's uni-app implementation, and the de facto specification for the whole API. Every props table on this site is extracted from its source, and the other seven platforms are component-by-component ports of it.

`uview-plus` 3.x targets uni-app and `uview-ultra` 4.x targets uni-app-x; their component sets are identical.

## Are the code samples handwritten?

Every snippet under "Usage by platform" is extracted by a script from **real source in that platform's demo app**, with the originating file noted beneath the code block. Guide-page examples are handwritten.
