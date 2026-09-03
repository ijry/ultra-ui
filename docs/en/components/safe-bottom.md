---
title: Safe bottom
description: Reserves the bottom safe-area inset on devices with a home indicator.
generated: true
---

# Safe bottom

Reserves the bottom safe-area inset on devices with a home indicator.

<PlatformBadges component="safe-bottom" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #android>

```kotlin
import net.lingyun.ultraui.android.components.UPSafeBottom

DemoSection("底部安全区") { BasicText("内容"); UPSafeBottom()
```

<small>Snippet from `ultra-ui-android/sample/src/main/kotlin/net/lingyun/ultraui/android/sample/pages/NavigationMoreDemoPage.kt`</small>

</template>

<template #harmony>

```typescript
import { UPSafeBottom, UPSafeBottomProps } from '@lingyun/ultra-ui-hos';

UPSafeBottom({ props: new UPSafeBottomProps({ safeAreaInsetBottom: true }) }) { Text('safeAreaInsetBottom=true').fontSize(12).fontColor('#909399') }
```

```typescript
UPSafeBottom({ props: new UPSafeBottomProps({ safeAreaInsetBottom: false, customStyle: { backgroundColor: '#ecf5ff', padding: { bottom: 10 } } }) }) { Text('关闭安全区并指定 padding').fontSize(12).fontColor('#2979ff') }
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/SafeBottomDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #reactnative>

#### Bottom safe-area spacer

```tsx
import { UPSafeBottom } from 'ultra-ui-rn';

<UPSafeBottom />
```

#### Custom background colour

```tsx
<UPSafeBottom customStyle={{ backgroundColor: '#333' }} />
```

<small>Snippet from `ultra-ui-rn/example/pages/components/layout/SafeBottomDemo.tsx`</small>

</template>

<template #taro>

```tsx
import { UPSafeBottom } from '@ultra-ui'
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #uniapp>

#### Bottom safe area

```json
"app-plus": {
	"safearea": {
		"bottom": {
			"offset": "none"
		}
	}
}
```

```vue
<style>  
	.list {  
		padding-bottom: 0;  
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);  
	}  
</style>
```

```vue
<template>
	<view>
		......
		<up-safe-bottom></up-safe-bottom>
	</view>
</template>
```

#### Top safe area

```vue
<template>
	<view>
		<up-status-bar></up-status-bar>
		......
	</view>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/safeAreaInset.md`</small>

</template>

<template #uniappx>

#### Bottom safe area

```json
"app-plus": {
	"safearea": {
		"bottom": {
			"offset": "none"
		}
	}
}
```

```vue
<style>  
	.list {  
		padding-bottom: 0;  
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);  
	}  
</style>
```

```vue
<template>
	<view>
		......
		<up-safe-bottom></up-safe-bottom>
	</view>
</template>
```

#### Top safe area

```vue
<template>
	<view>
		<up-status-bar></up-status-bar>
		......
	</view>
</template>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/safeAreaInset.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

::: tip
This component is driven by imperative method calls rather than declarative props; see the snippets and source above for its parameters.
:::

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Android · Jetpack Compose | `UPSafeBottom` | `ultra-ui/src/main/kotlin/net/lingyun/ultraui/android/components/UPNavigationComponents.kt` |
| HarmonyOS Next · ArkTS / ArkUI | `UPSafeBottom` | `ultra-ui/src/main/ets/components/UPSafeBottom.ets` |
| Flutter · Dart | `UPSafeBottom` | `packages/ultra_ui/lib/src/widgets/up_safe_bottom.dart` |
| React Native · TypeScript | `UPSafeBottom` | `src/components/safe-bottom` |
| Taro · React + TypeScript | `UPSafeBottom` | `src/ultra-ui/components/up-safe-bottom` |
| uni-app · Vue 3 | `up-safe-bottom` | `uni_modules/uview-ultra/components/up-safe-bottom` |
| uni-app-x · UTS / UVUE | `up-safe-bottom` | `uni_modules/uview-ultra/components/up-safe-bottom` |

