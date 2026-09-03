---
title: Platform support
description: Version requirements, package names, install methods and component coverage for all eight platforms.
---

# Platform support

## Requirements

| Platform | Stack | Minimum | Package / module | Distribution |
| --- | --- | --- | --- | --- |
| iOS | SwiftUI | iOS 17 / macOS 14, Swift 6.0 | `UltraUI` | local Swift Package |
| Android | Jetpack Compose | minSdk 24, JVM 17, Kotlin 2.3 | `:ultra-ui` | local Gradle module |
| HarmonyOS Next | ArkTS / ArkUI | API 24, DevEco 6.1 | `@lingyun/ultra-ui-hos` | ohpm HAR |
| Flutter | Dart | Flutter 3.19, Dart 3.3 | `ultra_ui` | path dependency |
| React Native | TypeScript | React 19, RN 0.86 | `ultra-ui-rn` | npm |
| Taro | React 18 | Taro 4.2 | `@ultra-ui` | path alias |
| uni-app | Vue 3 | uni-app 4.66 | `uview-plus` | npm / plugin market |
| uni-app-x | UTS / UVUE | uni-app-x 4.87 | `uview-ultra` | DCloud plugin market |

::: warning On publishing status
The Flutter package declares `publish_to: none`, Android has no Maven coordinate, and Taro keeps library and demo in one repo behind the `@ultra-ui` alias. All three — and iOS, as a local Swift Package — are currently consumed as **source or local dependencies** rather than pulled from a public registry.
:::

## Build targets

- **uni-app** — app (Vue / nvue), H5, WeChat / Alipay / Baidu / ByteDance / QQ / JD mini programs, quick apps
- **uni-app-x** — app (UVUE, compiled to native), web, HarmonyOS
- **Taro** — WeChat / Alipay / Baidu / ByteDance / QQ / JD mini programs, H5, harmony-hybrid
- **Flutter** — iOS, Android, web, macOS, Windows, Linux
- **React Native** — iOS, Android (Expo and bare projects)
- **iOS / Android / HarmonyOS** — their respective native platforms

## Component coverage

<SupportMatrix />

### How to read the matrix

Five platforms — uni-app, uni-app-x, Flutter, React Native and Taro — have completed the full port. The three native platforms are working through the catalogue by category, and the remaining gaps cluster in two groups:

1. **Components that need deep platform APIs** — image cropper, poster compositor, PDF reader, short-video player, colour picker, signature pad. These need camera, canvas and player integration, so they land last.
2. **Components that are really uni-app ecosystem features** — `parse` (rich-text HTML), `view` (a box wrapper), `lazy-load`. Native platforms have better system-level answers, so these rank low.

To check one specific component, look at the badges at the top of its page: grey means not implemented.

## Where platforms differ

Even with matching prop names, some behaviour cannot line up. Component pages call these out individually; here are the three you will hit first.

**Imperative components are triggered differently.** Toast and Notify are the clearest example:

::: code-group

```swift [iOS]
// Mount UPToastView() once at the root, then call statically
UPToast.show(message: "Saved", type: "success")
```

```kotlin [Android]
// controller + host
val toast = remember { UPToastController() }
toast.show(UPToastProps(message = "Saved"))
UPToastHost(controller = toast)
```

```typescript [HarmonyOS]
// singleton controller, UPToastHost() at the root
UPToastController.shared().show({ message: 'Saved', type: 'success' });
```

```js [uni-app]
// place <up-toast ref="toastRef" /> in the page, call through the ref
toastRef.value.show({ message: 'Saved', type: 'success' })
```

```ts [uni-app-x]
// uni-app-x requires $callMethod
toastRef.value?.$callMethod('show', { message: 'Saved' })
```

:::

**Size units differ.** The uni-app family defaults to `rpx` (a 750-wide design baseline); Flutter and React Native use logical pixels; Android uses `dp`; iOS uses points; HarmonyOS uses `vp`. Component internals already convert, but a custom size you pass must be in the current platform's unit.

**Slots are expressed differently.** A uview-plus named slot becomes an `xxxSlot` ReactNode prop in the React family, a `Widget?` parameter in Flutter, and a `@ViewBuilder` closure in SwiftUI.

## Next

[Quick start](./quickstart) walks through the full setup for each platform.
