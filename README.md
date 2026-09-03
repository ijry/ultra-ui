# ultra-ui docs

ultra-ui 官网与组件文档 — 中英双语，基于 [VitePress](https://vitepress.dev)。

ultra-ui 是一套移动端组件库，同一份设计语言在八个平台上各自用原生的声明式 UI
框架实现：iOS SwiftUI、Android Jetpack Compose、HarmonyOS Next ArkTS、Flutter、
React Native、Taro、uni-app、uni-app-x。

## 开发

```bash
npm install
npm run gen      # 扫描各平台源码，重新生成组件文档
npm run dev      # http://localhost:9100
npm run build    # 产物在 dist/
npm run preview  # 本地预览构建产物
```

`npm run gen -- --dry-run` 只打印报告，不写文件。

## 目录

```
docs/
├─ .vitepress/
│  ├─ config.mts          站点配置入口
│  ├─ config/             shared / zh / en / sidebar
│  ├─ data/               platforms、groups、registry.json（生成）
│  └─ theme/              自定义主题、PlatformTabs 等组件
├─ index.md    en/index.md            首页
├─ guide/      en/guide/              指南（手写）
└─ components/ en/components/         组件文档（生成）

scripts/
├─ gen-components.mjs     生成器入口
└─ lib/
   ├─ meta.mjs            108 个组件的分类与中英文描述（手写）
   ├─ scan.mjs            八个平台的组件发现
   ├─ extract.mjs         从 uview-plus 源码提取 props / events / slots
   └─ snippet.mjs         从各平台示例工程截取真实用法
```

平台源码通过符号链接引用，位于本目录同级：`ultra-ui-ios`、`ultra-ui-android`、
`ultra-ui-hos`、`ultra-ui-flutter`、`ultra-ui-rn`、`ultra-ui-taro`、`uview-plus`、
`uview-plus4`。生成器需要这些链接可用。

## 组件文档是生成的

`docs/components/*.md` 与 `docs/en/components/*.md` 由 `npm run gen` 产出：

- **平台支持**来自对八个仓库的符号与目录扫描；
- **属性 / 事件 / 插槽**提取自 uview-plus 的 `props.js` 与 SFC；
- **示例代码**逐字摘自各平台示例工程，并在代码块下标注来源文件。

生成器只重写 frontmatter 含 `generated: true` 的文件。想手写某一页，删掉那一行即可。

新增组件、翻译约定与提交规范见 [参与贡献](docs/guide/contributing.md)。
