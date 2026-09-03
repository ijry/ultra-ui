---
title: Introduction
description: What ultra-ui is, which platforms it covers, and how it relates to uview-plus.
---

# Introduction

ultra-ui is a mobile component library whose design language has been reimplemented **in each platform's own declarative UI framework**, eight times over:

| Platform | Stack | Package |
| --- | --- | --- |
| iOS | SwiftUI | `UltraUI` |
| Android | Jetpack Compose | `net.lingyun.ultraui.android` |
| HarmonyOS Next | ArkTS / ArkUI | `@lingyun/ultra-ui-hos` |
| Flutter | Dart | `ultra_ui` |
| React Native | TypeScript | `ultra-ui-rn` |
| Taro | React + TypeScript | `@ultra-ui` |
| uni-app | Vue 3 | `uview-plus` |
| uni-app-x | UTS / UVUE | `uview-ultra` |

The important part: **nothing here is a wrapper around a web view.** Each platform uses its own render pipeline — SwiftUI `View`s on iOS, `@Composable` functions on Android, ArkUI `@Component struct`s on HarmonyOS, `Widget`s on Flutter. Scroll physics, gesture arbitration and keyboard behaviour therefore match the system, rather than approximating it.

## What is actually shared

Consistency lives at the **API layer**, not the render layer:

- **Props have the same names and meanings.** `type`, `size`, `shape`, `plain`, `disabled` and `loading` are spelled identically everywhere, and accept the same values (`type` is always one of `info / primary / success / warning / error`).
- **Defaults match.** A button is `type="info"`, `size="normal"`, `shape="square"` on all eight platforms.
- **Visual specs match.** Radii, spacing, type scale and the colour palette come from one set of design tokens.

So moving from uni-app to Flutter, or adding a HarmonyOS build to an existing React Native app, means changing **syntax** — not your **mental model**:

::: code-group

```vue [uni-app]
<up-button type="primary" size="large" text="Confirm" />
```

```dart [Flutter]
UPButton(type: 'primary', size: 'large', text: 'Confirm')
```

```swift [iOS]
UPButton(type: "primary", size: "large", text: "Confirm")
```

```kotlin [Android]
UPButton(props = UPButtonProps(type = "primary", size = "large", text = "Confirm"))
```

:::

## Relationship to uview-plus

ultra-ui grew out of [uview-plus](https://uview-plus.jiangruyi.com/), a mature uni-app component library with 141 components. The other platforms are component-by-component ports of that source, which means:

- **uview-plus is the de facto API specification.** Every props, events and slots table on this site is extracted from its source, and the ports keep the same property names.
- **uni-app and uni-app-x map to uview-plus 3.x and uview-ultra 4.x.** The component sets are identical; 4.x only accepts the `up-` prefix and compiles UTS to native code.
- **The three native platforms are still in progress**, filling in the catalogue by category. See [platform support](./platforms) for where each one stands.

## Current status

Completeness varies a lot by platform, and the docs say so explicitly — a greyed-out badge at the top of a component page means "not implemented here yet".

<SupportMatrix />

## Naming

- **Components**: `UP` plus PascalCase (`UPButton`, `UPActionSheet`); the uni-app family uses kebab-case tags such as `<up-button>`.
- **Props**: camelCase (`loadingText`, `customStyle`); uni-app templates also accept kebab-case (`loading-text`).
- **Prop bags**: Android and HarmonyOS pass a companion `UPButtonProps` object; everywhere else props are passed directly.

See [conventions](./conventions) for the full mapping.

## Next

- [Platform support](./platforms) — version requirements, install method and coverage per platform
- [Quick start](./quickstart) — pick a platform and render your first component
- [All components](/en/components/) — the index of all 108 components
