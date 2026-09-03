---
title: Agreement
description: A terms-of-service checkbox that shakes when unchecked.
generated: true
---

# Agreement

A terms-of-service checkbox that shakes when unchecked.

<PlatformBadges component="agreement" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #flutter>

#### 基础用法

```dart
import 'package:ultra_ui/ultra_ui.dart';

UPAgreement(
  controller: _agreement1,
  urlProtocol: _urlProtocol,
  urlPrivacy: _urlPrivacy,
  onConfirm: (value) => setState(() => _checked1 = value),
)
```

<small>Snippet from `ultra-ui-flutter/example/lib/pages/components_d/agreement_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPAgreement } from 'ultra-ui-rn';
```

::: tip
No snippet could be extracted automatically — please read the source.
:::

</template>

<template #taro>

#### 基础用法

受控选中态 + onChange

```tsx
import { UPAgreement } from '@ultra-ui'

<UPAgreement
  text='我已阅读并同意相关服务条款'
  value={agreed}
  onChange={setAgreed}
/>
```

#### 禁用状态

disabled 时不可交互

```tsx
<UPAgreement
  text='禁用状态下的协议勾选'
  protocolName='《隐私政策》'
  value={false}
  disabled
/>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/agreement/index.tsx`</small>

</template>

<template #uniapp>

#### 基础用法

```vue
<template>
  <view class="container">
    <up-agreement 
      :isAgree="isAgree"
      @confirm="handleAgree"
      url-protocol="/pages/user_agreement/agreement/info?title=用户协议"
      url-privacy="/pages/user_agreement/agreement/info?title=隐私政策"
    />
    
    <!-- 其他页面内容 -->
    <view v-if="isAgree" class="content">
      <text>用户已同意协议，可以正常使用功能</text>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const isAgree = ref(0); // 0表示未同意，1表示已同意

const handleAgree = (status) => {
  isAgree.value = status;
  console.log('用户已同意协议');
  // 可以在这里执行用户同意后的逻辑
};
</script>
```

#### 自定义内容插槽用法

```vue
<template>
  <view class="container">
    <up-agreement 
      :isAgree="isAgree"
      @confirm="handleAgree"
    >
      <template #default>
        <view class="custom-content">
          <text class="title">请仔细阅读并同意以下协议：</text>
          <view class="agreement-item">
            <text>《</text>
            <navigator class="inline-link" :url="urlProtocol">用户服务协议</navigator>
            <text>》</text>
          </view>
          <view class="agreement-item">
            <text>《</text>
            <navigator class="inline-link" :url="urlPrivacy">隐私保护政策</navigator>
            <text>》</text>
          </view>
          <view class="agreement-item">
            <text>《</text>
            <navigator class="inline-link" :url="urlThird">第三方信息共享清单</navigator>
            <text>》</text>
          </view>
        </view>
      </template>
    </up-agreement>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const isAgree = ref(0);
const urlProtocol = ref('/pages/agreement/protocol');
const urlPrivacy = ref('/pages/agreement/privacy');
const urlThird = ref('/pages/agreement/third-party');

const handleAgree = (status) => {
  isAgree.value = status;
  uni.showToast({
    title: '同意协议成功',
    icon: 'success'
  });
};
</script>
```

```vue
<style scoped>
.custom-content {
  padding: 20rpx;
  display: inline-block;
}

.title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
  display: block;
}

.agreement-item {
  margin-bottom: 20rpx;
  display: inline-block;
}

.inline-link {
  color: #007AFF;
  display: inline-block;
}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/agreement.md`</small>

</template>

<template #uniappx>

#### 基础用法

```vue
<template>
  <view class="container">
    <up-agreement 
      :isAgree="isAgree"
      @confirm="handleAgree"
      url-protocol="/pages/user_agreement/agreement/info?title=用户协议"
      url-privacy="/pages/user_agreement/agreement/info?title=隐私政策"
    />
    
    <!-- 其他页面内容 -->
    <view v-if="isAgree" class="content">
      <text>用户已同意协议，可以正常使用功能</text>
    </view>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const isAgree = ref(0); // 0表示未同意，1表示已同意

const handleAgree = (status) => {
  isAgree.value = status;
  console.log('用户已同意协议');
  // 可以在这里执行用户同意后的逻辑
};
</script>
```

#### 自定义内容插槽用法

```vue
<template>
  <view class="container">
    <up-agreement 
      :isAgree="isAgree"
      @confirm="handleAgree"
    >
      <template #default>
        <view class="custom-content">
          <text class="title">请仔细阅读并同意以下协议：</text>
          <view class="agreement-item">
            <text>《</text>
            <navigator class="inline-link" :url="urlProtocol">用户服务协议</navigator>
            <text>》</text>
          </view>
          <view class="agreement-item">
            <text>《</text>
            <navigator class="inline-link" :url="urlPrivacy">隐私保护政策</navigator>
            <text>》</text>
          </view>
          <view class="agreement-item">
            <text>《</text>
            <navigator class="inline-link" :url="urlThird">第三方信息共享清单</navigator>
            <text>》</text>
          </view>
        </view>
      </template>
    </up-agreement>
  </view>
</template>
```

```vue
<script setup>
import { ref } from 'vue';

const isAgree = ref(0);
const urlProtocol = ref('/pages/agreement/protocol');
const urlPrivacy = ref('/pages/agreement/privacy');
const urlThird = ref('/pages/agreement/third-party');

const handleAgree = (status) => {
  isAgree.value = status;
  uni.showToast({
    title: '同意协议成功',
    icon: 'success'
  });
};
</script>
```

```vue
<style scoped>
.custom-content {
  padding: 20rpx;
  display: inline-block;
}

.title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
  display: block;
}

.agreement-item {
  margin-bottom: 20rpx;
  display: inline-block;
}

.inline-link {
  color: #007AFF;
  display: inline-block;
}
</style>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/agreement.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### Events

| Event |
| --- |
| `confirm` |

### Slots

| Slot |
| --- |
| `default` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| Flutter · Dart | `UPAgreement` | `packages/ultra_ui/lib/src/widgets/up_agreement.dart` |
| React Native · TypeScript | `UPAgreement` | `src/components/agreement` |
| Taro · React + TypeScript | `UPAgreement` | `src/ultra-ui/components/up-agreement` |
| uni-app · Vue 3 | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |
| uni-app-x · UTS / UVUE | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |

