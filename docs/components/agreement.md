---
title: Agreement 协议勾选
description: 用户协议勾选控件，内置未勾选时的抖动提示。
generated: true
---

# Agreement 协议勾选

用户协议勾选控件，内置未勾选时的抖动提示。

<PlatformBadges component="agreement" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-flutter/example/lib/pages/components_d/agreement_page.dart`</small>

</template>

<template #reactnative>

```tsx
import { UPAgreement } from 'ultra-ui-rn';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-taro/src/pages/components/agreement/index.tsx`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/agreement.md`</small>

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/agreement.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### 事件

| 事件名 |
| --- |
| `confirm` |

### 插槽

| 插槽名 |
| --- |
| `default` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| Flutter · Dart | `UPAgreement` | `packages/ultra_ui/lib/src/widgets/up_agreement.dart` |
| React Native · TypeScript | `UPAgreement` | `src/components/agreement` |
| Taro · React + TypeScript | `UPAgreement` | `src/ultra-ui/components/up-agreement` |
| uni-app · Vue 3 | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |
| uni-app-x · UTS / UVUE | `up-agreement` | `uni_modules/uview-ultra/components/up-agreement` |

