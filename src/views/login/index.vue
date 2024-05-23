<script setup>
import {reactive, computed} from 'vue';

const formState = reactive({
  username: '',
  password: '',
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>

<template>
  <div class="login-container">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item><span class="title">登录账号</span></a-form-item>
      <a-form-item
        name="username"
        :rules="[{ required: true, message: '请输入用户名!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="用户名">
          <template #prefix>
            <UserOutlined class="site-form-item-icon"/>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value="formState.password" placeholder="密码">
          <template #prefix>
            <LockOutlined class="site-form-item-icon"/>
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a class="login-form-register" href="">没有账号？去注册</a>
        <a class="login-form-forgot" href="">忘记密码</a>
      </a-form-item>

      <a-form-item>
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/login_bg.svg");
}

.login-form {
  width: 400px;
  height: auto;
  background: rgba(255, 255, 255, .2);
  box-shadow: 2px 3px 7px #0003;
  border-radius: 10px;
  margin: auto;
  justify-content: center;
  padding: 50px 60px 20px;
}

.title {
  font-size: 20px;
}

.login-form-forgot {
  float: right;
}

.login-form-button {
  width: 100%;
}
</style>