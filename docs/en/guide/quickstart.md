---
title: Quick start
description: Pick a platform, install the dependency, and render your first ultra-ui component.
---

# Quick start

## 1. Install

The card below follows the platform you pick. The selector in the nav bar and the tabs on component pages all share that one choice.

<InstallCard />

## 2. Initialise

Most platforms need a one-time setup at the app entry point: register the icon font, mount the overlay host, apply theme config.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

@main
struct DemoApp: App {
    init() {
        UltraUI.registerFonts()          // register the upicon font
        UP.setConfig(unit: "pt")         // optional global config
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .overlay { UPToastView() }   // toast host, mounted once
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
      UPToastHost()          // overlay host, mounted once per app
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
  UP.setConfig(unit: 'px');            // optional global config
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
      {/* UPRoot provides the overlay plus the toast / notify hosts */}
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
// pages.json — with easycom configured, components need no import
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
// pages.json — uni-app-x only supports the up- prefix
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

## 3. Your first component

A button that pops a toast — this covers both the declarative and imperative halves of the library.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 12) {
            UPButton(type: "primary", text: "Tap me") {
                UPToast.show(message: "Hello ultra-ui", type: "success")
            }
            UPButton(type: "info", plain: true, text: "Plain button")
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
            props = UPButtonProps(text = "Tap me", type = "primary"),
            onClick = { toast.show(UPToastProps(message = "Hello ultra-ui", type = "success")) },
        )
        UPButton(props = UPButtonProps(text = "Plain button", plain = true))
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
        text: 'Tap me',
        type: 'primary',
        onClick: (): void => {
          UPToastController.shared().show({ message: 'Hello ultra-ui', type: 'success' });
        }
      }) })
      UPButton({ props: new UPButtonProps({ text: 'Plain button', plain: true }) })
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
          text: 'Tap me',
          type: 'primary',
          onClick: () => UPToast.show(context, message: 'Hello ultra-ui', type: 'success'),
        ),
        const UPButton(text: 'Plain button', plain: true),
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
      <UPButton text="Tap me" type="primary" onClick={() => UP.toast.success('Hello ultra-ui')} />
      <UPButton text="Plain button" plain />
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
      <UPButton text='Tap me' type='primary' onClick={() => toast.success('Hello ultra-ui')} />
      <UPButton plain text='Plain button' />
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
    <up-button type="primary" text="Tap me" @click="onClick" />
    <up-button :plain="true" text="Plain button" />
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
    <up-button type="primary" text="Tap me" @click="onClick" />
    <up-button :plain="true" text="Plain button" />
  </view>
</template>

<script setup lang="uts">
import { ref } from 'vue'

const toastRef = ref<ComponentPublicInstance | null>(null)
function onClick() {
  // uni-app-x requires $callMethod to reach a child component method
  toastRef.value?.$callMethod('show', { message: 'Hello ultra-ui', type: 'success' })
}
</script>
```

</template>

</PlatformTabs>

## Next

- [Conventions](./conventions) — prop naming, units and how slots map across platforms
- [Theming](./theme) — swap the brand colour, support dark mode
- [All components](/en/components/) — the index of all 108 components
