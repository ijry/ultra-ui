---
layout: home
title: ultra-ui
titleTemplate: The cross-platform component library
# the landing sections bring their own layout, so skip the .vp-doc wrapper
markdownStyles: false
description: ultra-ui is a mobile component library for iOS SwiftUI, Android Compose, HarmonyOS Next, Flutter, React Native, Taro, uni-app and uni-app-x — one set of property names, native rendering on every platform.
---

<HomeHero>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPButton(type: "primary", size: "large", text: "Primary")
UPButton(type: "success", text: "Success")
UPButton(type: "info", plain: true, text: "Plain")
UPButton(type: "primary", shape: "circle", text: "Pill") {
    UPToast.show(message: "Saved", type: "success")
}
```

</template>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPButton
import net.lingyun.ultraui.android.components.UPButtonProps

UPButton(
    props = UPButtonProps(text = "Primary", type = "primary"),
    onClick = { toast.show(UPToastProps(message = "Saved")) },
)
UPButton(props = UPButtonProps(text = "Success", type = "success"))
UPButton(props = UPButtonProps(text = "Plain", plain = true))
```

</template>

<template #harmony>

```typescript
import { UPButton, UPButtonProps } from '@lingyun/ultra-ui-hos';

UPButton({ props: new UPButtonProps({
  text: 'Primary',
  type: 'primary',
  onClick: (): void => {
    UPToastController.shared().show({ message: 'Saved', type: 'success' });
  }
}) })
UPButton({ props: new UPButtonProps({ text: 'Success', type: 'success' }) })
```

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPButton(
  text: 'Primary',
  type: 'primary',
  onClick: () => UPToast.show(context, message: 'Saved', type: 'success'),
);
const UPButton(text: 'Success', type: 'success');
const UPButton(text: 'Plain', type: 'info', plain: true);
```

</template>

<template #reactnative>

```tsx
import { UPButton, UP } from 'ultra-ui-rn';

<UPButton text="Primary" type="primary" onClick={() => UP.toast.success('Saved')} />
<UPButton text="Success" type="success" />
<UPButton text="Plain" plain />
<UPButton text="Pill" type="primary" shape="circle" />
```

</template>

<template #taro>

```tsx
import { UPButton, toast } from '@ultra-ui'

<UPButton text='Primary' type='primary' onClick={() => toast.success('Saved')} />
<UPButton text='Success' type='success' />
<UPButton plain hairline type='primary' text='Plain' />
<UPButton shape='circle' type='primary' text='Pill' />
```

</template>

<template #uniapp>

```vue
<!-- no import needed once easycom is configured -->
<up-button text="Primary" type="primary" @click="onClick"></up-button>
<up-button text="Success" type="success"></up-button>
<up-button text="Plain" :plain="true"></up-button>
<up-button text="Pill" type="primary" shape="circle"></up-button>
```

</template>

<template #uniappx>

```vue
<!-- uni-app-x — UTS compiles to native code -->
<up-button text="Primary" type="primary" @click="onClick"></up-button>
<up-button text="Success" type="success"></up-button>
<up-button text="Plain" :plain="true"></up-button>
<up-button text="Pill" type="primary" shape="circle"></up-button>
```

</template>

</HomeHero>

<HomePlatforms />

<HomeFeatures />

<HomeCode />

<HomeComponents />

<HomeCta />
