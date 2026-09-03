---
title: Form
description: A form container and validator that pairs with form-item for rules and errors.
generated: true
---

# Form

A form container and validator that pairs with form-item for rules and errors.

<PlatformBadges component="form" show-missing />

## Usage by platform

Switch tabs to see the syntax for each platform. The uni-app and uni-app-x examples come from the official uview-plus documentation; every other platform’s are lifted verbatim from its own demo app.

<PlatformTabs>

<template #ios>

```swift
import SwiftUI
import UltraUI

UPForm(model: $model, rules: rules, controller: form) {
    VStack(alignment: .leading, spacing: 16) {
        UPFormItem(label: "邮箱", prop: "account.email", required: true) {
            UPInput(
                prop: "account.email",
                placeholder: "name@example.com",
                clearable: true
            )
        }

        UPFormItem(label: "密码", prop: "account.password", required: true) {
            UPInput(
                prop: "account.password",
                type: "password",
                placeholder: "至少 6 位",
                maxlength: 32,
                count: true
            )
        }

        UPFormItem(label: "个人简介", prop: "bio", labelPosition: "top") {
            UPTextarea(
                prop: "bio",
                placeholder: "介绍一下自己",
                maxlength: 200,
                count: true,
                height: 100,
                autoHeight: true
            )
        }
    }
}
```

<small>Snippet from `ultra-ui-ios/Demo/FormDemoView.swift`</small>

</template>

<template #harmony>

#### Basic form

```typescript
import { UPForm, UPFormProps } from '@lingyun/ultra-ui-hos';

UPForm({ props: new UPFormProps({ model: { name: this.name, sex: this.sex, interests: this.interests }, onValidate: (): void => { this.validateMessage(); } }) }) {
  UPFormItem({ props: new UPFormItemProps({ label: '姓名', required: true, error: this.name.length === 0 ? '请输入姓名' : '' }) }) {
    UPInput({ props: new UPInputProps({ modelValue: this.name, placeholder: '请输入姓名', onInput: (event: UPInputChangeEvent): void => { this.name = event.value; } }) })
  }
  UPFormItem({ props: new UPFormItemProps({ label: '性别' }) }) {
    UPRadioGroup({ props: new UPRadioGroupProps({ modelValue: this.sex, options: [{ name: 'male', label: '男' }, { name: 'female', label: '女' }], onChange: (event: UPRadioGroupChangeEvent): void => { this.sex = String(event.value); } }) })
  }
  UPFormItem({ props: new UPFormItemProps({ label: '兴趣' }) }) {
    UPCheckboxGroup({ props: new UPCheckboxGroupProps({ modelValue: this.interests, placement: 'column', options: [{ name: 'ui', label: '界面设计' }, { name: 'code', label: '原生开发' }], onChange: (event: UPCheckboxGroupChangeEvent): void => { this.interests = event.value.map((item): string => String(item)); } }) })
  }
}
```

<small>Snippet from `ultra-ui-hos/sample/entry/src/main/ets/demos/FormDemo.ets`</small>

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

```tsx
import { UPForm } from 'ultra-ui-rn';

<UPForm labelPosition="left">
  <UPFormItem borderBottom label="姓名" prop="userInfo.name">
    <UPInput />
  </UPFormItem>
  <UPFormItem borderBottom label="页面">
    <UPDatetimePicker
      hasInput
      inputProps={{
        border: 'surround',
        inputAlign: 'center',
        shape: 'square',
        suffixIcon: 'calendar',
      }}
      mode="datetime"
      modelValue={1714266792000}
      placeholder="请选择日期"
    />
  </UPFormItem>
  <UPFormItem borderBottom label="日期">
    <UPDatetimePicker
      mode="datetime"
      modelValue={1714266792000}
      pageInline
      showToolbar={false}
    />
  </UPFormItem>
</UPForm>
```

<small>Snippet from `ultra-ui-rn/example/pages/components/form/DatetimePickerDemo.tsx`</small>

</template>

<template #taro>

#### Label layout

```tsx
import { UPForm } from '@ultra-ui'

<UPForm
  ref={alignRef}
  model={{ top: '' }}
  labelPosition='top'
  labelWidth={100}
>
  <UPFormItem label='label 在上方' prop='top'>
    <UPInput value='' border='surround' placeholder='labelPosition=top' />
  </UPFormItem>
</UPForm>
```

#### Leading icon and required asterisk

```tsx
<UPForm model={{ phone: '' }}>
  <UPFormItem label='手机号' prop='phone' leftIcon='phone' required>
    <UPInput value='' border='none' placeholder='required 仅作展示' />
  </UPFormItem>
</UPForm>
```

<small>Snippet from `ultra-ui-taro/src/pages/components/form/index.tsx`</small>

</template>

<template #uniapp>

#### Basic usage

```vue
<template>
	<view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<up-form
				labelPosition="left"
				:model="model1"
				:rules="rules"
				ref="form1"
		>
			<up-form-item
					label="姓名"
					prop="userInfo.name"
					:borderBottom="true"
					ref="item1"
			>
				<up-input
						v-model="model1.userInfo.name"
						border="none"
				></up-input>
			</up-form-item>
			<up-form-item
					label="性别"
					prop="userInfo.sex"
					:borderBottom="true"
					@click="showSex = true; hideKeyboard()"
					ref="item1"
			>
				<up-input
					v-model="model1.userInfo.sex"
					disabled
					disabledColor="#ffffff"
					placeholder="请选择性别"
					border="none"
				></up-input>
				<template #right>
					<up-icon
						name="arrow-right"
					></up-icon>
				</template>
			</up-form-item>
		</up-form>
		<up-action-sheet
				:show="showSex"
				:actions="actions"
				title="请选择性别"
				description="如果选择保密会报错"
				@close="showSex = false"
				@select="sexSelect"
		>
		</up-action-sheet>
	</view>
</template>
```

```vue
<script setup>  
import { ref, reactive } from 'vue';  
  
// 使用 reactive 创建响应式状态  
const state = reactive({  
  showSex: false,  
  model1: {  
    userInfo: {  
      name: 'uview-plus UI',  
      sex: '',  
    },  
  },  
  actions: [  
    { name: '男' },  
    { name: '女' },  
    { name: '保密' },  
  ],  
  rules: {  
    'userInfo.name': {  
      type: 'string',  
      required: true,  
      message: '请填写姓名',  
      trigger: ['blur', 'change'],  
    },  
    'userInfo.sex': {  
      type: 'string',  
      max: 1,  
      required: true,  
      message: '请选择男或女',  
      trigger: ['blur', 'change'],  
    },  
  },  
  radio: '',  
  switchVal: false,  
});  
  
// 使用 ref 创建响应式引用  
const formRef = ref(null);  
  
// 定义方法  
function sexSelect(e) {  
  state.model1.userInfo.sex = e.name;  
  if (formRef.value) {  
    formRef.value.validateField('userInfo.sex');  
  }  
}  
</script>
```

#### Validation rules

```js
rules: {
	'userInfo.name': {
		type: 'string',
				required: true,
				message: '请填写姓名',
				trigger: ['blur', 'change']
	},
	code: {
		type: 'string',
				required: true,
				len: 4,
				message: '请填写4位验证码',
				trigger: ['blur']
	},
	'userInfo.sex': {
		type: 'string',
				max: 1,
				required: true,
				message: '请选择男或女',
				trigger: ['blur', 'change']
	},
	radiovalue1: {
		type: 'string',
				min: 1,
				max: 2,
				message: '生命是美好的，请不要放弃治疗',
				trigger: ['change']
	},
	checkboxValue1: {
		type: 'array',
				min: 2,
				required: true,
				message: '不能太宅，至少选两项',
				trigger: ['change']
	},
	intro: {
		type: 'string',
				min: 3,
				required: true,
				message: '不低于3个字',
				trigger: ['change']
	},
	hotel: {
		type: 'string',
				min: 2,
				required: true,
				message: '请选择住店时间',
				trigger: ['change']
	},
	'userInfo.birthday': {
		type: 'string',
				required: true,
				message: '请选择生日',
				trigger: ['change']
	},
},
```

#### The validators bundled with uview-plus

```js
rules: {
	// 字段名称
	mobile: [
		{
			required: true, 
			message: '请输入手机号',
			trigger: ['change','blur'],
		},
		{
			// 自定义验证函数，见上说明
			validator: (rule, value, callback) => {
				// 上面有说，返回true表示校验通过，返回false表示不通过
				// uni.$u.test.mobile()就是返回true或者false的
				return uni.$u.test.mobile(value);
			},
			message: '手机号码不正确',
			// 触发器可以同时用blur和change
			trigger: ['change','blur'],
		}
	]
}
```

#### Putting it together

```js
rules: {
	name: [
		// 必填规则
		{
			required: true,
			message: '此为必填字段'，
			// blur和change事件触发检验
			trigger: ['blur', 'change'],
		},
		// 正则判断为字母或数字
		{
			pattern: /^[0-9a-zA-Z]*$/g,
			// 正则检验前先将值转为字符串
			transform(value) {
				return String(value);
			},
			message: '只能包含字母或数字'
		},
		// 6-8个字符之间的判断
		{
			min: 6,
			max: 8,
			message: '长度在6-8个字符之间'
		},
		// 自定义规则判断是否包含字母"A"
		{
			validator: (rule, value, callback) => {
				return uni.$u.test.contains(value, "A");
			},
			message: '必须包含字母"A"'
		},
		// 校验用户是否已存在
		{
			asyncValidator: (rule, value, callback) => {
				uni.$u.http.post('/xxx/xxx', {name: value}).then(res => {
					// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
					if(res.error) {
						callback(new Error('姓名重复'));
					} else {
						// 如果校验通过，也要执行callback()回调
						callback();
					}
				})
			},
			// 如果是异步校验，无需写message属性，错误的信息通过Error抛出即可
			// message: 'xxx'
		}
	]
}
```

#### How validation errors are shown

```vue
<template>
	<up-form :errorType="errorType">
		......
	</up-form>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const errorType = ref('message'); // 初始化为 'message' 
  
// 例如，在一个方法中改变 errorType 的值：  
function changeErrorType() {  
  errorType.value = 'border-bottom'; // 假设你想要切换到下划线提示  
}  
</script>
```

#### Validation

```vue
<template>
	<view class="">
		<up-form :model="form" ref="uFormRef">
			<up-form-item label="姓名" prop="name">
				<up-input v-model="form.name" />
			</up-form-item>
		</up-form>
		<up-button @click="submit">提交</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式表单数据  
const form = ref({  
  name: '',  
});  
  
// 校验规则  
const rules = {  
  name: [  
    {  
      required: true,  
      message: '请输入姓名',  
      trigger: ['blur', 'change'],  
    },  
  ],  
};  
  
// 表单引用  
const uFormRef = ref(null);  
  
// 提交方法  
function submit() {  
  uFormRef.value.validate().then(valid => {  
    if (valid) {  
      uni.$u.toast('校验通过')
    } else {  
      uni.$u.toast('校验失败')
    }  
  }).catch(() => {  
    // 处理验证错误  
    uni.$u.toast('校验失败')
  });  
}  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc/docs/components/form.md`</small>

</template>

<template #uniappx>

#### Basic usage

```vue
<template>
	<view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<up-form
				labelPosition="left"
				:model="model1"
				:rules="rules"
				ref="form1"
		>
			<up-form-item
					label="姓名"
					prop="userInfo.name"
					borderBottom
					ref="item1"
			>
				<up-input
						v-model="model1.userInfo.name"
						border="none"
				></up-input>
			</up-form-item>
			<up-form-item
					label="性别"
					prop="userInfo.sex"
					borderBottom
					@click="showSex = true; hideKeyboard()"
					ref="item1"
			>
				<up-input
					v-model="model1.userInfo.sex"
					disabled
					disabledColor="#ffffff"
					placeholder="请选择性别"
					border="none"
				></up-input>
				<template #right>
					<up-icon
						name="arrow-right"
					></up-icon>
				</template>
			</up-form-item>
		</up-form>
		<up-action-sheet
				:show="showSex"
				:actions="actions"
				title="请选择性别"
				description="如果选择保密会报错"
				@close="showSex = false"
				@select="sexSelect"
		>
		</up-action-sheet>
	</view>
</template>
```

```vue
<script setup>  
import { ref, reactive } from 'vue';  
  
// 使用 reactive 创建响应式状态  
const state = reactive({  
  showSex: false,  
  model1: {  
    userInfo: {  
      name: 'uview-ultra UI',  
      sex: '',  
    },  
  },  
  actions: [  
    { name: '男' },  
    { name: '女' },  
    { name: '保密' },  
  ],  
  rules: {  
    'userInfo.name': {  
      type: 'string',  
      required: true,  
      message: '请填写姓名',  
      trigger: ['blur', 'change'],  
    },  
    'userInfo.sex': {  
      type: 'string',  
      max: 1,  
      required: true,  
      message: '请选择男或女',  
      trigger: ['blur', 'change'],  
    },  
  },  
  radio: '',  
  switchVal: false,  
});  
  
// 使用 ref 创建响应式引用  
const formRef = ref(null);  
  
// 定义方法  
function sexSelect(e) {  
  state.model1.userInfo.sex = e.name;  
  if (formRef.value) {  
    formRef.value.validateField('userInfo.sex');  
  }  
}  
</script>
```

#### Validation rules

```js
rules: {
	'userInfo.name': {
		type: 'string',
				required: true,
				message: '请填写姓名',
				trigger: ['blur', 'change']
	},
	code: {
		type: 'string',
				required: true,
				len: 4,
				message: '请填写4位验证码',
				trigger: ['blur']
	},
	'userInfo.sex': {
		type: 'string',
				max: 1,
				required: true,
				message: '请选择男或女',
				trigger: ['blur', 'change']
	},
	radiovalue1: {
		type: 'string',
				min: 1,
				max: 2,
				message: '生命是美好的，请不要放弃治疗',
				trigger: ['change']
	},
	checkboxValue1: {
		type: 'array',
				min: 2,
				required: true,
				message: '不能太宅，至少选两项',
				trigger: ['change']
	},
	intro: {
		type: 'string',
				min: 3,
				required: true,
				message: '不低于3个字',
				trigger: ['change']
	},
	hotel: {
		type: 'string',
				min: 2,
				required: true,
				message: '请选择住店时间',
				trigger: ['change']
	},
	'userInfo.birthday': {
		type: 'string',
				required: true,
				message: '请选择生日',
				trigger: ['change']
	},
},
```

#### The validators bundled with uview-ultra

```js
rules: {
	// 字段名称
	mobile: [
		{
			required: true, 
			message: '请输入手机号',
			trigger: ['change','blur'],
		},
		{
			// 自定义验证函数，见上说明
			validator: (rule, value, callback) => {
				// 上面有说，返回true表示校验通过，返回false表示不通过
				// uni.$u.test.mobile()就是返回true或者false的
				return uni.$u.test.mobile(value);
			},
			message: '手机号码不正确',
			// 触发器可以同时用blur和change
			trigger: ['change','blur'],
		}
	]
}
```

#### Putting it together

```js
rules: {
	name: [
		// 必填规则
		{
			required: true,
			message: '此为必填字段'，
			// blur和change事件触发检验
			trigger: ['blur', 'change'],
		},
		// 正则判断为字母或数字
		{
			pattern: /^[0-9a-zA-Z]*$/g,
			// 正则检验前先将值转为字符串
			transform(value) {
				return String(value);
			},
			message: '只能包含字母或数字'
		},
		// 6-8个字符之间的判断
		{
			min: 6,
			max: 8,
			message: '长度在6-8个字符之间'
		},
		// 自定义规则判断是否包含字母"A"
		{
			validator: (rule, value, callback) => {
				return uni.$u.test.contains(value, "A");
			},
			message: '必须包含字母"A"'
		},
		// 校验用户是否已存在
		{
			asyncValidator: (rule, value, callback) => {
				uni.$u.http.post('/xxx/xxx', {name: value}).then(res => {
					// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
					if(res.error) {
						callback(new Error('姓名重复'));
					} else {
						// 如果校验通过，也要执行callback()回调
						callback();
					}
				})
			},
			// 如果是异步校验，无需写message属性，错误的信息通过Error抛出即可
			// message: 'xxx'
		}
	]
}
```

#### How validation errors are shown

```vue
<template>
	<up-form :errorType="errorType">
		......
	</up-form>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 使用 ref 创建响应式数据  
const errorType = ref('message'); // 初始化为 'message' 
  
// 例如，在一个方法中改变 errorType 的值：  
function changeErrorType() {  
  errorType.value = 'border-bottom'; // 假设你想要切换到下划线提示  
}  
</script>
```

#### Validation

```vue
<template>
	<view class="">
		<up-form :model="form" ref="uFormRef">
			<up-form-item label="姓名" prop="name">
				<up-input v-model="form.name" />
			</up-form-item>
		</up-form>
		<up-button @click="submit">提交</up-button>
	</view>
</template>
```

```vue
<script setup>  
import { ref } from 'vue';  
  
// 响应式表单数据  
const form = ref({  
  name: '',  
});  
  
// 校验规则  
const rules = {  
  name: [  
    {  
      required: true,  
      message: '请输入姓名',  
      trigger: ['blur', 'change'],  
    },  
  ],  
};  
  
// 表单引用  
const uFormRef = ref(null);  
  
// 提交方法  
function submit() {  
  uFormRef.value.validate().then(valid => {  
    if (valid) {  
      uni.$u.toast('校验通过')
    } else {  
      uni.$u.toast('校验失败')
    }  
  }).catch(() => {  
    // 处理验证错误  
    uni.$u.toast('校验失败')
  });  
}  
</script>
```

<small>Auto-imported through easycom — no import statement needed.</small><br><small>Snippet from `uview-plus-doc4/docs/components/form.md`</small>

</template>

</PlatformTabs>

## API

The reference below is extracted from the uview-plus source, whose property names the other ports keep. For per-platform differences, compare the tabs above.

### `<up-form>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `model` | 当前form的需要验证字段的集合 | `Object` | `{}` |
| `rules` | 验证规则 | `Object / Function / Array` | `{}` |
| `errorType` | 有错误时的提示方式，message-提示信息，toast-进行toast提示 border-bottom-下边框呈现红色，none-无提示 | `String` | `'message'` |
| `borderBottom` | 是否显示表单域的下划线边框 | `Boolean` | `true` |
| `labelPosition` | label的位置，left-左边，top-上边 | `String` | `'left'` |
| `labelWidth` | label的宽度，单位px | `String / Number` | `45` |
| `labelAlign` | lable字体的对齐方式 | `String` | `'left'` |
| `labelStyle` | lable的样式，对象形式 | `Object` | `{}` |

#### Slots

| Slot |
| --- |
| `default` |

### `<up-form-item>`

#### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | input的label提示语 | `String` | `''` |
| `prop` | 绑定的值 | `String` | `''` |
| `rules` | 绑定的规则 | `Array` | `[]` |
| `borderBottom` | 是否显示表单域的下划线边框 | `String / Boolean` | `''` |
| `labelPosition` | label的位置，left-左边，top-上边 | `String` | `''` |
| `labelWidth` | label的宽度，单位px | `String / Number` | `''` |
| `rightIcon` | 右侧图标 | `String` | `''` |
| `leftIcon` | 左侧图标 | `String` | `''` |
| `required` | 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置 | `Boolean` | `false` |
| `leftIconStyle` | — | `String / Object` | `''` |

#### Events

| Event |
| --- |
| `click` |

#### Slots

| Slot |
| --- |
| `default` |
| `error` |
| `label` |
| `right` |

## Source on each platform

| Platform | Component / type | Source file |
| --- | --- | --- |
| iOS · SwiftUI | `UPForm` | `UltraUI/Sources/UltraUI/Components/UPForm.swift` |
| HarmonyOS Next · ArkTS / ArkUI | `UPForm` | `ultra-ui/src/main/ets/components/UPForm.ets` |
| Flutter · Dart | `UPForm` | `packages/ultra_ui/lib/src/widgets/up_form.dart` |
| React Native · TypeScript | `UPForm` | `src/components/form` |
| Taro · React + TypeScript | `UPForm` | `src/ultra-ui/components/up-form` |
| uni-app · Vue 3 | `up-form` | `uni_modules/uview-ultra/components/up-form` |
| uni-app-x · UTS / UVUE | `up-form` | `uni_modules/uview-ultra/components/up-form` |

