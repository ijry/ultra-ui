---
title: 快速上手
description: 挑一个平台，装好依赖，跑起第一个 ultra-ui 组件。
---

# 快速上手

## 1. 安装

下面的卡片会跟随你选择的平台。左上角的平台选择器、组件页的标签页都共用同一个选择。

<InstallCard />

## 2. 初始化

多数平台需要在应用入口做一次全局初始化：注册图标字体、挂载弹层宿主、写入主题配置。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

@main
struct DemoApp: App {
    init() {
        UltraUI.registerFonts()          // 注册 upicon 图标字体
        UP.setConfig(unit: "pt")         // 可选：全局配置
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .overlay { UPToastView() }   // Toast 宿主，挂一次即可
        }
    }
}
```

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.core.UPTheme
import net.lingyun.ultraui.android.components.UPToastHost
import net.lingyun.ultraui.android.components.UPToastController

@Composable
fun App() {
    val toast = remember { UPToastController() }

    UPTheme {
        Box(Modifier.fillMaxSize()) {
            HomeScreen()
            UPToastHost(controller = toast, modifier = Modifier.fillMaxSize())
        }
    }
}
```

</template>

<template #harmony>

```typescript
import { UPToastHost } from '@lingyun/ultra-ui-hos';

@Entry
@Component
struct Index {
  build() {
    Stack() {
      HomePage()
      UPToastHost()          // 弹层宿主，整个应用挂一次
    }
    .width('100%')
    .height('100%')
  }
}
```

</template>

<template #flutter>

```dart
import 'package:flutter/material.dart';
import 'package:ultra_ui/ultra_ui.dart';

void main() {
  UP.setConfig(unit: 'px');            // 可选：全局配置
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: UP.themeData(Brightness.light),
      home: const HomePage(),
    );
  }
}
```

</template>

<template #reactnative>

```tsx
import { UPRoot, UPThemeProvider, UP } from 'ultra-ui-rn'

UP.setConfig({ color: { primary: '#4f5bff' } })

export default function App() {
  return (
    <UPThemeProvider>
      <HomeScreen />
      {/* UPRoot 提供 overlay 与 toast / notify 宿主，挂一次即可 */}
      <UPRoot />
    </UPThemeProvider>
  )
}
```

</template>

<template #taro>

```tsx
// app.tsx
import '@ultra-ui/styles/index.scss'
import { UPRoot } from '@ultra-ui'

export default function App({ children }) {
  return <UPRoot>{children}</UPRoot>
}
```

</template>

<template #uniapp>

```js
// main.js
import { createSSRApp } from 'vue'
import uviewPlus from '@/uni_modules/uview-plus'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return { app }
}
```

```json
// pages.json —— 配置 easycom 后组件无需 import
{
  "easycom": {
    "custom": {
      "^u--(.*)": "@/uni_modules/uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "@/uni_modules/uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "@/uni_modules/uview-plus/components/u-$1/u-$1.vue"
    }
  }
}
```

</template>

<template #uniappx>

```ts
// main.uts
import App from './App.uvue'
import { createSSRApp } from 'vue'
import { install as installUltraUI } from '@/uni_modules/uview-ultra/index.uts'

export function createApp() {
  const app = createSSRApp(App)
  installUltraUI(app)
  return { app }
}
```

```json
// pages.json —— uni-app-x 只支持 up- 前缀
{
  "easycom": {
    "custom": {
      "^up-(.*)": "@/uni_modules/uview-ultra/components/up-$1/up-$1.uvue"
    }
  }
}
```

</template>

</PlatformTabs>

## 3. 第一个组件

放一个按钮，点击后弹一条提示——这段代码覆盖了声明式组件与命令式调用两种典型用法。

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 12) {
            UPButton(type: "primary", text: "点我") {
                UPToast.show(message: "Hello ultra-ui", type: "success")
            }
            UPButton(type: "info", plain: true, text: "镂空按钮")
        }
        .padding()
    }
}
```

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.*

@Composable
fun Demo(toast: UPToastController) {
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        UPButton(
            props = UPButtonProps(text = "点我", type = "primary"),
            onClick = { toast.show(UPToastProps(message = "Hello ultra-ui", type = "success")) },
        )
        UPButton(props = UPButtonProps(text = "镂空按钮", plain = true))
    }
}
```

</template>

<template #harmony>

```typescript
import { UPButton, UPButtonProps, UPToastController } from '@lingyun/ultra-ui-hos';

@Component
export struct Demo {
  build() {
    Column({ space: 12 }) {
      UPButton({ props: new UPButtonProps({
        text: '点我',
        type: 'primary',
        onClick: (): void => {
          UPToastController.shared().show({ message: 'Hello ultra-ui', type: 'success' });
        }
      }) })
      UPButton({ props: new UPButtonProps({ text: '镂空按钮', plain: true }) })
    }
  }
}
```

</template>

<template #flutter>

```dart
import 'package:flutter/material.dart';
import 'package:ultra_ui/ultra_ui.dart';

class Demo extends StatelessWidget {
  const Demo({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        UPButton(
          text: '点我',
          type: 'primary',
          onClick: () => UPToast.show(context, message: 'Hello ultra-ui', type: 'success'),
        ),
        const UPButton(text: '镂空按钮', plain: true),
      ],
    );
  }
}
```

</template>

<template #reactnative>

```tsx
import { View } from 'react-native'
import { UPButton, UP } from 'ultra-ui-rn'

export function Demo() {
  return (
    <View style={{ gap: 12, padding: 16 }}>
      <UPButton text="点我" type="primary" onClick={() => UP.toast.success('Hello ultra-ui')} />
      <UPButton text="镂空按钮" plain />
    </View>
  )
}
```

</template>

<template #taro>

```tsx
import { View } from '@tarojs/components'
import { UPButton, toast } from '@ultra-ui'

export default function Demo() {
  return (
    <View>
      <UPButton text='点我' type='primary' onClick={() => toast.success('Hello ultra-ui')} />
      <UPButton plain text='镂空按钮' />
    </View>
  )
}
```

</template>

<template #uniapp>

```vue
<template>
  <view style="padding: 20px">
    <up-toast ref="toastRef" />
    <up-button type="primary" text="点我" @click="onClick" />
    <up-button :plain="true" text="镂空按钮" />
  </view>
</template>

<script setup>
import { ref } from 'vue'

const toastRef = ref(null)
function onClick() {
  toastRef.value.show({ message: 'Hello ultra-ui', type: 'success' })
}
</script>
```

</template>

<template #uniappx>

```vue
<template>
  <view style="padding: 20px">
    <up-toast ref="toastRef" />
    <up-button type="primary" text="点我" @click="onClick" />
    <up-button :plain="true" text="镂空按钮" />
  </view>
</template>

<script setup lang="uts">
import { ref } from 'vue'

const toastRef = ref<ComponentPublicInstance | null>(null)
function onClick() {
  // uni-app-x 中调用子组件方法必须走 $callMethod
  toastRef.value?.$callMethod('show', { message: 'Hello ultra-ui', type: 'success' })
}
</script>
```

</template>

</PlatformTabs>

## 下一步

- [通用约定](./conventions) — 属性命名、单位、插槽在各平台的对应关系
- [主题定制](./theme) — 换品牌色、适配深色模式
- [组件总览](/components/) — 108 个组件的索引
