---
title: 通用约定
description: 命名、单位、事件与插槽在八个平台上的对应关系。
---

# 通用约定

一套 API 落到八种语言，总要有一份对照表。这一页就是那份对照表。

## 命名

| 概念 | 约定 | 例子 |
| --- | --- | --- |
| 组件（代码平台） | `UP` + 帕斯卡 | `UPButton`、`UPActionSheet`、`UPGoodsSku` |
| 组件（uni-app 系） | `up-` + kebab 标签 | `<up-button>`、`<up-action-sheet>` |
| 属性 | 小驼峰 | `loadingText`、`customStyle`、`activeStyle` |
| 属性（uni-app 模板） | 小驼峰或 kebab 均可 | `loading-text` 等价于 `loadingText` |
| 伴生属性类型 | `UP` + 名称 + `Props` | `UPButtonProps`（Android / 鸿蒙） |
| 命令式控制器 | `UP` + 名称 + `Controller` | `UPToastController`（Android / 鸿蒙） |

uview-plus 3.x 额外接受 `u-button` 与 `u--button` 两种写法，它们指向同一个组件；4.x 起只保留 `up-`。新项目统一用 `up-`。

## 通用属性

几乎所有组件都接受这几个属性，取值在八端一致：

| 属性 | 类型 | 取值 |
| --- | --- | --- |
| `type` | String | `info`（默认）/ `primary` / `success` / `warning` / `error` |
| `size` | String | `large` / `normal`（默认）/ `small` / `mini` |
| `shape` | String | `square`（默认）/ `circle` |
| `plain` | Boolean | 镂空，背景透明、保留边框 |
| `disabled` | Boolean | 禁用，同时阻止事件 |
| `loading` | Boolean | 加载态 |
| `customStyle` | Object | 外部样式覆盖，键名用小驼峰 |

## 尺寸单位

组件内部的默认尺寸已经按各平台习惯换算好了，**你传入自定义尺寸时用当前平台的单位**：

| 平台 | 单位 | 说明 |
| --- | --- | --- |
| uni-app / uni-app-x | `rpx` | 以 750 宽设计稿为基准，也可传 `px` |
| Taro | `rpx` / `px` | 小程序端同 uni-app |
| React Native | 逻辑像素（number） | 无单位数字 |
| Flutter | 逻辑像素（double） | 无单位数字 |
| iOS | point | SwiftUI 的 `CGFloat` |
| Android | `dp` | Compose 的 `Dp` |
| HarmonyOS | `vp` | ArkUI 的虚拟像素 |

uni-app 与 Flutter 提供了 `UP.getPx()` / `UP.rpx2px()` 做手动换算。

## 事件

| 平台 | 写法 |
| --- | --- |
| uni-app / uni-app-x | `@click`、`@change`（模板事件） |
| React Native / Taro | `onClick`、`onChange`（属性回调） |
| Flutter | `onClick:`、`onChange:`（命名参数） |
| iOS | 尾随闭包或 `.onTap { }` |
| Android | `onClick = { }`（lambda 参数） |
| HarmonyOS | `onClick:` 放在 `Props` 构造里 |

::: warning uni-app 请用 @click，不要用 @tap
微信小程序里对组件监听 `@tap` 可能无效，统一使用组件内部派发的 `click` 事件。
:::

## 插槽

uview-plus 的具名插槽在各平台有不同的落地形式：

::: code-group

```vue [uni-app]
<up-cell title="标题">
  <template #value>
    <up-tag text="新" />
  </template>
</up-cell>
```

```tsx [React Native / Taro]
<UPCell title="标题" valueSlot={<UPTag text="新" />} />
```

```dart [Flutter]
UPCell(title: '标题', valueSlot: const UPTag(text: '新'))
```

```swift [iOS]
UPCell(title: "标题") {
    UPTag(text: "新")          // @ViewBuilder 闭包
}
```

:::

规律是：**具名插槽 `xxx` → 属性 `xxxSlot`**，默认插槽 → 子内容 / `children` / `@ViewBuilder`。

## 双向绑定

| 平台 | 写法 |
| --- | --- |
| uni-app / uni-app-x | `v-model` |
| React Native / Taro | 受控组件：`value` + `onChange` |
| Flutter | `value` + `onChanged` |
| iOS | `@Binding`（`$state`） |
| Android | `value` + `onValueChange` |
| HarmonyOS | `props` 里的 `value` + `onChange` 回调 |

## 命令式组件

Toast、Notify、Modal 这类组件需要一个**宿主**挂在应用根节点，然后通过控制器或 ref 触发。各平台的宿主与调用方式见[平台支持](./platforms#平台差异)。

一个容易踩的坑：uni-app 中所有 `ref` 调用都不能放在 `onLoad` 里，此时组件还没创建完成，应该放在 `onReady`。

## 全局工具

各平台都暴露了一个 `UP` 命名空间，提供颜色、单位换算、时间格式化、类型校验等工具：

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
