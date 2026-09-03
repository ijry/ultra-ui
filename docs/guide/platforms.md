---
title: 平台支持
description: 八个平台的版本要求、包名、引入方式与组件覆盖情况。
---

# 平台支持

## 环境要求

| 平台 | 技术栈 | 最低版本 | 包 / 模块 | 分发方式 |
| --- | --- | --- | --- | --- |
| iOS | SwiftUI | iOS 17 / macOS 14，Swift 6.0 | `UltraUI` | 本地 Swift Package |
| Android | Jetpack Compose | minSdk 24，JVM 17，Kotlin 2.3 | `:ultra-ui` | 本地 Gradle 模块 |
| HarmonyOS Next | ArkTS / ArkUI | API 24，DevEco 6.1 | `@lingyun/ultra-ui-hos` | ohpm HAR |
| Flutter | Dart | Flutter 3.19，Dart 3.3 | `ultra_ui` | path 依赖 |
| React Native | TypeScript | React 19，RN 0.86 | `ultra-ui-rn` | npm |
| Taro | React 18 | Taro 4.2 | `@ultra-ui` | 路径别名 |
| uni-app | Vue 3 | uni-app 4.66 | `uview-plus` | npm / 插件市场 |
| uni-app-x | UTS / UVUE | uni-app-x 4.87 | `uview-ultra` | DCloud 插件市场 |

::: warning 关于发布状态
Flutter 包声明了 `publish_to: none`，Android 未发布 Maven 坐标，Taro 的库与示例同仓（通过 `@ultra-ui` 别名引用）。这三个目前都以**源码 / 本地依赖**方式接入，不能直接从公共仓库拉取。iOS 同理，以本地 Swift Package 引入。
:::

## 编译目标

- **uni-app**：App（Vue / nvue）、H5、微信 / 支付宝 / 百度 / 字节 / QQ / 京东小程序、快应用
- **uni-app-x**：App（UVUE，编译为原生）、Web、鸿蒙
- **Taro**：微信 / 支付宝 / 百度 / 字节 / QQ / 京东小程序、H5、harmony-hybrid
- **Flutter**：iOS、Android、Web、macOS、Windows、Linux
- **React Native**：iOS、Android（Expo 与裸工程均可）
- **iOS / Android / 鸿蒙**：各自的原生平台

## 组件覆盖

<SupportMatrix />

### 怎么看这张表

uni-app、uni-app-x、Flutter、React Native、Taro 五个平台已经完成全量移植。三个原生平台按分类推进，目前的空缺集中在两类组件上：

1. **依赖平台原生能力的重型组件** — 图片裁剪、海报合成、PDF 阅读、短视频、颜色选择器、签名板。这些需要接入各平台的相机、Canvas、播放器 API，通常最后落地。
2. **上游本身就偏 uni-app 生态的组件** — `parse`（富文本解析）、`view`（视图容器）、`lazy-load` 等，在原生端有更合适的系统方案，移植优先级低。

具体到某个组件在哪些平台可用，看组件页顶部的徽标即可；灰色即未实现。

## 平台差异

即便属性同名，有些行为天然无法完全对齐。文档里会在对应组件页标注，这里先说三个最常遇到的：

**命令式组件的调用方式不同。** Toast、Notify 这类组件在各平台的触发方式不一样：

::: code-group

```swift [iOS]
// 根视图挂一次 UPToastView()，之后静态调用
UPToast.show(message: "操作成功", type: "success")
```

```kotlin [Android]
// controller + host 组合
val toast = remember { UPToastController() }
toast.show(UPToastProps(message = "操作成功"))
UPToastHost(controller = toast)
```

```typescript [HarmonyOS]
// 单例 controller，根节点挂 UPToastHost()
UPToastController.shared().show({ message: '操作成功', type: 'success' });
```

```js [uni-app]
// 页面里放 <up-toast ref="toastRef" />，通过 ref 调用
toastRef.value.show({ message: '操作成功', type: 'success' })
```

```ts [uni-app-x]
// uni-app-x 必须走 $callMethod
toastRef.value?.$callMethod('show', { message: '操作成功' })
```

:::

**尺寸单位不同。** uni-app 系默认 `rpx`（750 设计稿），Flutter / React Native 用逻辑像素，Android 用 `dp`，iOS 用 point，鸿蒙用 `vp`。组件内部已经做了换算，但你传自定义尺寸时要用当前平台的单位。

**插槽的表达方式不同。** uni-app 的具名插槽在 React 系变成 `xxxSlot` 的 ReactNode 属性，在 Flutter 变成 `Widget?` 参数，在 SwiftUI 变成 `@ViewBuilder` 闭包。

## 下一步

[快速上手](./quickstart) 里按平台给出了完整的接入步骤。
