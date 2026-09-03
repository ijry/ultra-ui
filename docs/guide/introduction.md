---
title: 介绍
description: ultra-ui 是什么，它覆盖哪些平台，以及它与 uview-plus 的关系。
---

# 介绍

ultra-ui 是一套移动端组件库，同一份设计语言在八个平台上各自用**原生的声明式 UI 框架**重新实现了一遍：

| 平台 | 技术栈 | 包 |
| --- | --- | --- |
| iOS | SwiftUI | `UltraUI` |
| Android | Jetpack Compose | `net.lingyun.ultraui.android` |
| HarmonyOS Next | ArkTS / ArkUI | `@lingyun/ultra-ui-hos` |
| Flutter | Dart | `ultra_ui` |
| React Native | TypeScript | `ultra-ui-rn` |
| Taro | React + TypeScript | `@ultra-ui` |
| uni-app | Vue 3 | `uview-plus` |
| uni-app-x | UTS / UVUE | `uview-ultra` |

关键点在于**不是套壳**。每个平台都用自己的渲染管线：iOS 是 SwiftUI 的 `View`，Android 是 `@Composable`，鸿蒙是 ArkUI 的 `@Component struct`，Flutter 是 `Widget`。所以滚动惯性、手势冲突、输入法行为都跟系统控件一致，而不是 WebView 里模拟出来的近似效果。

## 一致的是什么

跨端一致性做在 **API 层**，而不是渲染层：

- **属性同名同义。** `type`、`size`、`shape`、`plain`、`disabled`、`loading` 在八个平台上叫同一个名字，取值范围也一样（`type` 都是 `info / primary / success / warning / error`）。
- **默认值相同。** 按钮默认 `type="info"`、`size="normal"`、`shape="square"`，八端一致。
- **视觉规格相同。** 圆角、间距、字号、色板来自同一份设计 token。

所以从 uni-app 迁到 Flutter，或者给已有的 React Native 项目补一个鸿蒙版本，需要改的是**语法**，不是**心智模型**：

::: code-group

```vue [uni-app]
<up-button type="primary" size="large" text="确定" />
```

```dart [Flutter]
UPButton(type: 'primary', size: 'large', text: '确定')
```

```swift [iOS]
UPButton(type: "primary", size: "large", text: "确定")
```

```kotlin [Android]
UPButton(props = UPButtonProps(type = "primary", size = "large", text = "确定"))
```

:::

## 与 uview-plus 的关系

ultra-ui 的源头是 [uview-plus](https://uview-plus.jiangruyi.com/)——一套成熟的 uni-app 组件库，目前 141 个组件。其余平台是按 uview-plus 的源码逐个组件移植的，因此：

- **uview-plus 是接口的事实标准。** 本站的属性、事件、插槽表格都从 uview-plus 源码中提取，其他平台移植时保留了同名属性。
- **uni-app 与 uni-app-x 分别对应 uview-plus 3.x 与 uview-ultra 4.x。** 两者组件集合完全一致，差别在于 4.x 只支持 `up-` 前缀，且 UTS 会编译为原生代码。
- **原生三端仍在推进。** iOS、Android、鸿蒙按分类逐步补齐，进度见[平台支持](./platforms)。

## 当前进度

不同平台的完成度差别很大，这一点在文档里是明示的——每个组件页顶部的灰色徽标就表示"该平台暂未实现"。

<SupportMatrix />

## 命名约定

- **组件名**：`UP` + 帕斯卡命名（`UPButton`、`UPActionSheet`），uni-app 系用 kebab 标签 `<up-button>`。
- **属性名**：小驼峰（`loadingText`、`customStyle`），uni-app 模板里也可写 kebab（`loading-text`）。
- **类型/配置对象**：Android 与鸿蒙用 `UPButtonProps` 这类伴生类型；其余平台直接传参。

详见[通用约定](./conventions)。

## 下一步

- [平台支持](./platforms) — 每个平台的版本要求、安装方式与覆盖情况
- [快速上手](./quickstart) — 挑一个平台，五分钟跑起第一个组件
- [组件总览](/components/) — 108 个组件的索引与支持矩阵
