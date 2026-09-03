---
title: 参与贡献
description: 仓库结构、文档生成流程，以及提交改动的方式。
---

# 参与贡献

## 仓库结构

ultra-ui 是多仓库项目，文档站通过符号链接引用各平台源码：

```
docs-site/                    ← 本站
├─ docs/                      文档内容
│  ├─ .vitepress/
│  │  ├─ config.mts           站点配置（中英双语）
│  │  ├─ data/                平台、分类、组件注册表
│  │  └─ theme/               自定义主题与组件
│  ├─ guide/       en/guide/         指南（手写）
│  └─ components/  en/components/    组件文档（脚本生成）
├─ scripts/gen-components.mjs  文档生成器
│
├─ ultra-ui-ios      →  SwiftUI 实现
├─ ultra-ui-android  →  Jetpack Compose 实现
├─ ultra-ui-hos      →  HarmonyOS ArkTS 实现
├─ ultra-ui-flutter  →  Flutter 实现
├─ ultra-ui-rn       →  React Native 实现
├─ ultra-ui-taro     →  Taro 实现
├─ uview-plus        →  uni-app 实现（3.x）
└─ uview-plus4       →  uni-app-x 实现（4.x）
```

## 本地运行文档站

```bash
npm install
npm run gen      # 扫描各平台源码，重新生成组件文档
npm run dev      # http://localhost:9100
npm run build    # 产物在 dist/
```

## 组件文档是怎么生成的

`npm run gen` 做四件事：

1. **扫描平台支持** — 遍历八个仓库的组件目录，用符号声明（`struct UPButton`、`fun UPButton(`、`class UPButton`）和目录名两种信号判断某组件在某平台是否存在。
2. **提取 API** — 解析 uview-plus 的 `props.js` 与配套默认值文件，得到属性名、类型、默认值和注释；从 SFC 里提取 `emits` 与 `<slot>`。
3. **提取示例** — 在每个平台的示例工程里找到该组件的第一处真实用法，按括号 / 标签配对截取一段完整代码。
4. **写文件** — 输出 `docs/.vitepress/data/registry.json` 与 108 × 2 个 markdown 页面。

跑一次 `npm run gen -- --dry-run` 可以只看报告不写文件，报告里会打印每个平台的覆盖率与提取到的示例数量。

### 手写页面不会被覆盖

生成器只重写 frontmatter 里带 `generated: true` 的文件。想手写某个组件页，把这一行删掉即可——下次生成时它会被跳过，并在报告末尾列出来。

### 新增一个组件

1. 在对应平台仓库里实现组件。
2. 如果它是一个新的上游组件，在 `scripts/lib/meta.mjs` 里加一条：

```js
c('my-widget', 'basic', '我的组件', 'My widget',
  '一句话中文描述。',
  'One-sentence English description.'),
```

3. `npm run gen`。侧边栏、组件总览、支持矩阵都会自动更新——它们全部由注册表驱动。

`detect` 参数用来声明这个页面覆盖了哪些上游目录，子组件应该并进父页面：

```js
c('cell', 'layout', '单元格', 'Cell', '…', '…', ['cell', 'cell-group']),
```

## 翻译

中文在 `docs/`，英文在 `docs/en/`，两边目录结构一一对应。

- **组件页**由生成器同时产出两种语言，文案来自 `meta.mjs` 里的 `descZh` / `descEn`。
- **指南页**是手写的，改了中文记得同步英文。
- **界面文案**在 `docs/.vitepress/config/zh.mts`、`en.mts` 以及各主题组件内的 `zh ? '…' : '…'` 三元表达式里。

## 提交约定

- 一次提交只做一件事，标题用祈使句（`add UPWaterfall to HarmonyOS`）。
- 改了平台源码后，在对应仓库跑该平台的测试。
- 改了文档生成器，附上 `npm run gen -- --dry-run` 的报告差异。
- 不要把 `dist/`、`node_modules/`、`.vitepress/cache/` 提交进去。

## 报告问题

提 issue 时请写清楚：

1. 哪个平台、哪个版本；
2. 哪个组件、哪个属性；
3. 期望行为与实际行为；
4. 最小可复现代码。

跨平台不一致的问题（同样的属性在 A 平台生效、B 平台不生效）尤其欢迎——那是这个项目最需要修的一类 bug。
