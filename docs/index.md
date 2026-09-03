---
layout: home
title: ultra-ui
titleTemplate: 八端原生的超级 UI 组件库
# the landing sections bring their own layout, so skip the .vp-doc wrapper
markdownStyles: false
description: ultra-ui 是一套覆盖 iOS SwiftUI、Android Compose、鸿蒙 Next、Flutter、React Native、Taro、uni-app 与 uni-app-x 的移动端组件库，同一套属性名，各平台原生渲染。
---

<HomeHero>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPButton(type: "primary", size: "large", text: "主按钮")
UPButton(type: "success", text: "成功按钮")
UPButton(type: "info", plain: true, text: "镂空按钮")
UPButton(type: "primary", shape: "circle", text: "胶囊按钮") {
    UPToast.show(message: "点击了按钮", type: "success")
}
```

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPButton
import net.lingyun.ultraui.android.components.UPButtonProps

UPButton(
    props = UPButtonProps(text = "主要按钮", type = "primary"),
    onClick = { toast.show(UPToastProps(message = "操作成功")) },
)
UPButton(props = UPButtonProps(text = "成功按钮", type = "success"))
UPButton(props = UPButtonProps(text = "镂空按钮", plain = true))
```

</template>

<template #harmony>

```typescript
import { UPButton, UPButtonProps } from '@lingyun/ultra-ui-hos';

UPButton({ props: new UPButtonProps({
  text: '主要按钮',
  type: 'primary',
  onClick: (): void => {
    UPToastController.shared().show({ message: '操作成功', type: 'success' });
  }
}) })
UPButton({ props: new UPButtonProps({ text: '成功按钮', type: 'success' }) })
```

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPButton(
  text: '主要按钮',
  type: 'primary',
  onClick: () => UPToast.show(context, message: '操作成功', type: 'success'),
);
const UPButton(text: '成功按钮', type: 'success');
const UPButton(text: '镂空按钮', type: 'info', plain: true);
```

</template>

<template #reactnative>

```tsx
import { UPButton, UP } from 'ultra-ui-rn';

<UPButton text="主要按钮" type="primary" onClick={() => UP.toast.success('操作成功')} />
<UPButton text="成功按钮" type="success" />
<UPButton text="镂空按钮" plain />
<UPButton text="胶囊按钮" type="primary" shape="circle" />
```

</template>

<template #taro>

```tsx
import { UPButton, toast } from '@ultra-ui'

<UPButton text='主要按钮' type='primary' onClick={() => toast.success('操作成功')} />
<UPButton text='成功按钮' type='success' />
<UPButton plain hairline type='primary' text='镂空按钮' />
<UPButton shape='circle' type='primary' text='胶囊按钮' />
```

</template>

<template #uniapp>

```vue
<!-- 配置 easycom 后无需 import -->
<up-button text="主要按钮" type="primary" @click="onClick"></up-button>
<up-button text="成功按钮" type="success"></up-button>
<up-button text="镂空按钮" :plain="true"></up-button>
<up-button text="胶囊按钮" type="primary" shape="circle"></up-button>
```

</template>

<template #uniappx>

```vue
<!-- uni-app-x，UTS 编译为原生代码 -->
<up-button text="主要按钮" type="primary" @click="onClick"></up-button>
<up-button text="成功按钮" type="success"></up-button>
<up-button text="镂空按钮" :plain="true"></up-button>
<up-button text="胶囊按钮" type="primary" shape="circle"></up-button>
```

</template>

</HomeHero>

<HomePlatforms />

<HomeFeatures />

<HomeCode />

<HomeComponents />

<HomeCta />
