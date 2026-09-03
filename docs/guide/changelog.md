---
title: 更新日志
description: 各平台包的当前版本，以及文档站自身的变更记录。
---

# 更新日志

## 各平台当前版本

下表是文档生成时从各仓库读到的版本号。

| 平台 | 包 | 版本 |
| --- | --- | --- |
| uni-app | `uview-plus` | 3.8.116 |
| uni-app-x | `uview-ultra` | 4.5.36 |
| Taro | `ultra-ui-taro` | 1.0.0 |
| HarmonyOS Next | `@lingyun/ultra-ui-hos` | 1.0.0 |
| Flutter | `ultra_ui` | 0.1.0 |
| React Native | `ultra-ui-rn` | 0.1.0 |
| iOS | `UltraUI` | 0.1.0 |
| Android | `:ultra-ui` | 未发布 |

各平台自己的详细变更记录在对应仓库里：uni-app 侧见 uview-plus 的更新日志，原生三端见各仓库的进度文档。

## 文档站

### 2026-09 · 初版

- 中英双语站点，基于 VitePress 1.6。
- 108 个组件文档，覆盖上游 141 个组件目录。
- 组件页以标签形式展示八个平台的用法，示例代码从各平台示例工程自动提取。
- 平台选择全站共享，记录在浏览器本地存储，也支持 `?platform=flutter` 深链。
- 组件总览页支持按名称搜索与按平台筛选，附全量支持矩阵。
- 组件文档由 `scripts/gen-components.mjs` 生成，属性表提取自 uview-plus 源码。

## 版本约定

各平台包独立发版，版本号不强制对齐——同一个组件在不同平台的落地时间本来就不同。要判断某个组件在你的平台上是否可用，看组件页顶部的平台徽标，而不是版本号。
