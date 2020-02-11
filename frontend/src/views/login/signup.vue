<template>
  <div class="signup">
    <div class="logo"></div>
    <div class="login">
      <P class="title">注册新用户</P>
      <van-field v-model="data.username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="data.password" type="password" label="密码" placeholder="请输入密码" />
      <van-field v-model="data.confirmpwd" type="password" label="确认密码" placeholder="请输入确认密码" />
      <div class="btn-login">
        <van-button type="info" block :square="true">注册</van-button>
        <div class="btn-d"></div>
        <van-button type="default" block :square="true" to="/signin">返回登录</van-button>
      </div>
    </div>
    <footer>
      <van-divider>copyright ©️2020 by pigmo studio</van-divider>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
        confirmpwd: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.signup {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .logo,
  footer {
    flex: 1;
  }
  .login {
    flex: 3;
    padding: 20px;
    .title {
      font-size: 40px;
      color: #1989fa;
      text-align: center;
      margin: 20px 0 40px 0;
    }
    .btn-login {
      padding: 25px 0 6px 16px;
      .btn-d {
        margin: 2px 0;
      }
    }
  }
  //   footer {
  //     display: flex;
  //     align-content: center;
  //   }
  .logo {
  }
}
</style>