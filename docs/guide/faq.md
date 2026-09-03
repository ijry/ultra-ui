---
title: 常见问题
description: 使用 ultra-ui 时最常遇到的问题与解决办法。
---

# 常见问题

## 为什么某个组件在我的平台上没有？

八个平台的完成度不同。uni-app、uni-app-x、Flutter、React Native、Taro 已完成全量移植；iOS、Android、鸿蒙仍在按分类推进。

组件页顶部的徽标就是答案：灰色即该平台暂未实现。完整情况见[平台支持](./platforms#组件覆盖)的支持矩阵。

## 属性名在各平台真的完全一样吗？

属性**名称**一样，取值范围与默认值也一样。不同的是**传参形式**：

- iOS / Flutter — 命名参数
- Android / 鸿蒙 — 包在 `UPXxxProps` 里
- React Native / Taro — JSX 属性
- uni-app 系 — 模板属性

少数属性只在特定平台有意义（例如 `openType`、`sendMessageTitle` 只对微信小程序有效），这类属性在其他平台会保留但不产生行为。

## 微信小程序里 class 样式传不进组件

微信小程序编译后会保留一个与组件同名的节点，外部 `class` 无法穿透到组件根元素。两个办法：

1. 用 `customStyle` 传对象（推荐）；
2. 在组件外面套一层 `view`，在那一层控制间距与宽度。

## 调用 ref 上的方法报错 undefined

在 uni-app 中，`onLoad` 触发时子组件还没创建完成。把 `ref` 调用挪到 `onReady`：

```js
onReady(() => {
  toastRef.value.show({ message: '就绪' })
})
```

uni-app-x 还有一条额外规则：**调用子组件方法必须走 `$callMethod`**，不能直接 `ref.value.show()`：

```ts
toastRef.value?.$callMethod('show', { message: '就绪' })
```

## Toast / Notify 不显示

这类组件需要一个宿主节点。检查是否在应用根节点挂了对应的 host：

| 平台 | 需要挂载 |
| --- | --- |
| iOS | `.overlay { UPToastView() }` |
| Android | `UPToastHost(controller = toast)` |
| HarmonyOS | `UPToastHost()` |
| React Native | `<UPRoot />` |
| Taro | `<UPRoot>` 包裹应用 |
| uni-app / uni-app-x | 页面内放 `<up-toast ref="…" />` |

## 图标不显示，只有方块

图标字体没注册成功。iOS 需要在 `App.init` 里调用一次：

```swift
UltraUI.registerFonts()
```

uni-app 侧检查字体文件是否被打包工具处理掉了；小程序端字体走 base64 内联，一般不会出问题。

## 尺寸对不上，组件比预期大一倍

单位搞错了。uni-app 系默认 `rpx`（750 设计稿），传 `100` 会被当成 `100rpx`；React Native 与 Flutter 用逻辑像素，传 `100` 就是 100pt。详见[通用约定 · 尺寸单位](./conventions#尺寸单位)。

## 能不能只引入用到的组件？

可以，而且默认就是按需的：

- **uni-app / uni-app-x** — easycom 在编译期扫描模板，只打包用到的组件。
- **React Native / Taro / Flutter** — 按符号引入，打包器做 tree-shaking。
- **iOS / Android / 鸿蒙** — 编译器只链接被引用的类型。

## Flutter / Android / Taro 为什么装不上？

这三个目前不在公共仓库里：Flutter 包声明了 `publish_to: none`，Android 没有发布 Maven 坐标，Taro 的库与示例同仓、通过 `@ultra-ui` 别名引用。现阶段需要以**源码或本地依赖**方式接入，具体命令见[快速上手](./quickstart)。

## uview-plus 和 ultra-ui 是同一个东西吗？

uview-plus 是 ultra-ui 的 uni-app 实现，也是整套 API 的事实标准。本站的属性表格全部从 uview-plus 源码提取。其余七个平台是按它逐组件移植的。

`uview-plus` 3.x 对应 uni-app，`uview-ultra` 4.x 对应 uni-app-x，两者组件集合一致。

## 文档里的示例代码是手写的吗？

组件页"平台用法"里的每段代码都是脚本从对应平台**示例工程的真实源码**里提取的，并在代码块下方标注了来源文件路径。指南页的示例是手写的。
