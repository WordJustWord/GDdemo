<template>
  <div class="signin">
    <div class="logo"></div>
    <div class="login">
      <P class="title">登录</P>
      <van-field v-model="data.username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="data.password" type="password" label="密码" placeholder="请输入密码" />
      <div class="btn-login">
        <van-button type="info" block :square="true">登录</van-button>
      </div>
      <div class="btn-d"></div>
      <div class="btn-signup">
        <van-checkbox v-model="data.remember">记住我</van-checkbox>
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
        remember: false
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.signin {
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
    }
    .btn-signup {
      display: flex;
      justify-content: space-between;
      padding: 8px 0 0 16px;
      a {
        color: #1989fa;
        font-size: 14px;
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