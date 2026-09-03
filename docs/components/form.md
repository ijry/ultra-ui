---
title: Form 表单
description: 表单容器与校验器，配合 form-item 完成规则校验与错误提示。
generated: true
---

# Form 表单

表单容器与校验器，配合 form-item 完成规则校验与错误提示。

<PlatformBadges component="form" show-missing />

## 平台用法

切换下面的标签查看对应平台的写法。uni-app 与 uni-app-x 的示例来自 uview-plus 官方文档，其余平台摘自该平台示例工程中的真实代码。

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

<small>示例来源 `ultra-ui-ios/Demo/FormDemoView.swift`</small>

</template>

<template #harmony>

#### 基础表单

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

<small>示例来源 `ultra-ui-hos/sample/entry/src/main/ets/demos/FormDemo.ets`</small>

</template>

<template #flutter>

```dart
import 'package:ultra_ui/ultra_ui.dart';
```

::: tip
暂无自动提取到的示例代码，请参考源码。
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

<small>示例来源 `ultra-ui-rn/example/pages/components/form/DatetimePickerDemo.tsx`</small>

</template>

<template #taro>

#### label 布局

labelPosition 控制上下排列，labelAlign 控制对齐

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

#### 左侧图标与必填星号

leftIcon / required

```tsx
<UPForm model={{ phone: '' }}>
  <UPFormItem label='手机号' prop='phone' leftIcon='phone' required>
    <UPInput value='' border='none' placeholder='required 仅作展示' />
  </UPFormItem>
</UPForm>
```

<small>示例来源 `ultra-ui-taro/src/pages/components/form/index.tsx`</small>

</template>

<template #uniapp>

#### 基本使用

此组件一般是用于表单验证使用，每一个表单域由一个`up-form-item`组成，表单域中可以放置`up-input`、`up-checkbox`、`up-radio`、`up-switch`等。

- 在表单组中，通过`model`参数绑定一个对象，这个对象的属性为各个`up-form-item`内组件的对应变量。
- 由于表单验证和绑定表单规则时，需要通过`ref`操作，故这里需要给`form`组件声明`ref="form1"`属性。
- 关于`up-form-item`内其他可能包含的诸如`input`、`radio`等组件，请见各自组件的相关文档说明。

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

从上面的示例我们可以看到，`rules`中的属性名和`form`的属性名是一致的，同时传递给`u-form-item`的`prop`参数绑定的也是相同的属性名，注意这里`prop`参数绑定的是
字符串(属性名)，而不是一个变量。

#### 验证规则

组件验证部分采用了[async-validator](https://github.com/yiminghe/async-validator)，一个字段可以设置多个内置规则，以及自定义规则，触发方式等，
每个字段的验证规则为一个数组，数组的每一个元素对象为其中一条规则(一个字段的验证可以配置多个规则)，如下：

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

#### uview-plus自带验证规则

uview-plus在JS板块的Test 规则校验中有大量内置的验证规则，这些规则对表单验证来说，属于**自定义规则**，故需要用到上方规则属性的
`validator`自定义验证函数，这里做一个详细说明。  

我们知道uview-plus有自带的判断手机号的验证方法`uni.$u.test.mobile(value)`，但是[async-validator](https://github.com/yiminghe/async-validator)没有
内置判断手机号的规则，所以将二者结合使用：

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

#### 综合实战

上面讲述了[async-validator](https://github.com/yiminghe/async-validator)的规则和配置，以及uview-plus内置规则的结合使用，下面我们进行一个综合
实战示例，要入对某一个字段进行如下验证(验证实现有多种方法，下方仅为引导示例，非唯一，或最优做法)：

1. 必填，同时可接受`change`和`blur`触发校验：配置`required`参数为`true`，同时配置`trigger`为`[change, blur]`
2. 必须为字母或字符串，校验前先将字段值转为字符串类型：通过`pattern`参数配置正则：/^[0-9a-zA-Z]*$/g，通过`transform`参数在校验前对字段值转换为字符串
3. 长度6-8个字符之间：通过 配置`min`为6，`max`为8
4. 需要包含字母"A"：使用uview-plus的`uni.$u.test.contains()`方法，并结合`validator`自定义函数实现
5. 异步校验，输入完账号，输入框失去焦点时，向后端请求该账号是否已存在：通过上方的`asyncValidator`异步函数进行验证。


综上，我们可以得出如下的一个配置规则(仅为综合演示，非最优做法)：

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

#### 校验错误提示方式

uview-plus提供了多种校验的错误提示方式，传递给`Form`组件的`errorType`参数：
- `message`：默认为输入框下方用文字进行提示
- `none`：不会进行任何提示
- `border-bottom`：配置作用域底部的下划线显示为红色，要求给form-item设置了:borderBottom="true"才有效
- `toast`：以"toast"提示的方式弹出错误信息，每次只弹出最前面的那个表单域的错误信息

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

#### 校验

进行了上方的配置和讲解后，进入到最后一步，执行验证：  
需要通过`ref`调用`Form`组件的`validate`方法，该方法回调函数的参数为一个布尔值，`true`为校验通过，否则反之。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc/docs/components/form.md`</small>

</template>

<template #uniappx>

#### 基本使用

此组件一般是用于表单验证使用，每一个表单域由一个`up-form-item`组成，表单域中可以放置`up-input`、`up-checkbox`、`up-radio`、`up-switch`等。

- 在表单组中，通过`model`参数绑定一个对象，这个对象的属性为各个`up-form-item`内组件的对应变量。
- 由于表单验证和绑定表单规则时，需要通过`ref`操作，故这里需要给`form`组件声明`ref="form1"`属性。
- 关于`up-form-item`内其他可能包含的诸如`input`、`radio`等组件，请见各自组件的相关文档说明。

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

从上面的示例我们可以看到，`rules`中的属性名和`form`的属性名是一致的，同时传递给`u-form-item`的`prop`参数绑定的也是相同的属性名，注意这里`prop`参数绑定的是
字符串(属性名)，而不是一个变量。

#### 验证规则

组件验证部分采用了[async-validator](https://github.com/yiminghe/async-validator)，一个字段可以设置多个内置规则，以及自定义规则，触发方式等，
每个字段的验证规则为一个数组，数组的每一个元素对象为其中一条规则(一个字段的验证可以配置多个规则)，如下：

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

#### uview-ultra自带验证规则

uview-ultra在JS板块的Test 规则校验中有大量内置的验证规则，这些规则对表单验证来说，属于**自定义规则**，故需要用到上方规则属性的
`validator`自定义验证函数，这里做一个详细说明。  

我们知道uview-ultra有自带的判断手机号的验证方法`uni.$u.test.mobile(value)`，但是[async-validator](https://github.com/yiminghe/async-validator)没有
内置判断手机号的规则，所以将二者结合使用：

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

#### 综合实战

上面讲述了[async-validator](https://github.com/yiminghe/async-validator)的规则和配置，以及uview-ultra内置规则的结合使用，下面我们进行一个综合
实战示例，要入对某一个字段进行如下验证(验证实现有多种方法，下方仅为引导示例，非唯一，或最优做法)：

1. 必填，同时可接受`change`和`blur`触发校验：配置`required`参数为`true`，同时配置`trigger`为`[change, blur]`
2. 必须为字母或字符串，校验前先将字段值转为字符串类型：通过`pattern`参数配置正则：/^[0-9a-zA-Z]*$/g，通过`transform`参数在校验前对字段值转换为字符串
3. 长度6-8个字符之间：通过 配置`min`为6，`max`为8
4. 需要包含字母"A"：使用uview-ultra的`uni.$u.test.contains()`方法，并结合`validator`自定义函数实现
5. 异步校验，输入完账号，输入框失去焦点时，向后端请求该账号是否已存在：通过上方的`asyncValidator`异步函数进行验证。


综上，我们可以得出如下的一个配置规则(仅为综合演示，非最优做法)：

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

#### 校验错误提示方式

uview-ultra提供了多种校验的错误提示方式，传递给`Form`组件的`errorType`参数：
- `message`：默认为输入框下方用文字进行提示
- `none`：不会进行任何提示
- `border-bottom`：配置作用域底部的下划线显示为红色，要求给form-item设置了borderBottom=true才有效
- `toast`：以"toast"提示的方式弹出错误信息，每次只弹出最前面的那个表单域的错误信息

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

#### 校验

进行了上方的配置和讲解后，进入到最后一步，执行验证：  
需要通过`ref`调用`Form`组件的`validate`方法，该方法回调函数的参数为一个布尔值，`true`为校验通过，否则反之。

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

<small>配置 easycom 规则后自动引入，无需手动 import。</small><br><small>示例来源 `uview-plus-doc4/docs/components/form.md`</small>

</template>

</PlatformTabs>

## API

接口以 uview-plus 源码为准，各平台移植时保持了同名属性；平台间的差异请对照上方的示例标签。

### `<up-form>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model` | 当前form的需要验证字段的集合 | `Object` | `{}` |
| `rules` | 验证规则 | `Object / Function / Array` | `{}` |
| `errorType` | 有错误时的提示方式，message-提示信息，toast-进行toast提示 border-bottom-下边框呈现红色，none-无提示 | `String` | `'message'` |
| `borderBottom` | 是否显示表单域的下划线边框 | `Boolean` | `true` |
| `labelPosition` | label的位置，left-左边，top-上边 | `String` | `'left'` |
| `labelWidth` | label的宽度，单位px | `String / Number` | `45` |
| `labelAlign` | lable字体的对齐方式 | `String` | `'left'` |
| `labelStyle` | lable的样式，对象形式 | `Object` | `{}` |

#### 插槽

| 插槽名 |
| --- |
| `default` |

### `<up-form-item>`

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
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

#### 事件

| 事件名 |
| --- |
| `click` |

#### 插槽

| 插槽名 |
| --- |
| `default` |
| `error` |
| `label` |
| `right` |

## 各平台源码

| 平台 | 组件 / 类型 | 源码位置 |
| --- | --- | --- |
| iOS · SwiftUI | `UPForm` | `UltraUI/Sources/UltraUI/Components/UPForm.swift` |
| HarmonyOS Next · ArkTS / ArkUI | `UPForm` | `ultra-ui/src/main/ets/components/UPForm.ets` |
| Flutter · Dart | `UPForm` | `packages/ultra_ui/lib/src/widgets/up_form.dart` |
| React Native · TypeScript | `UPForm` | `src/components/form` |
| Taro · React + TypeScript | `UPForm` | `src/ultra-ui/components/up-form` |
| uni-app · Vue 3 | `up-form` | `uni_modules/uview-ultra/components/up-form` |
| uni-app-x · UTS / UVUE | `up-form` | `uni_modules/uview-ultra/components/up-form` |

