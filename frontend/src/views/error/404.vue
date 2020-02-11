<template>
  <div class="error-404">
    <div class="header"></div>
    <div class="center">
      <p>404</p>
      <div>你访问的页面没有找到</div>
      <div class="btn-group">
        <van-button type="info" size="small" @click="()=>{this.$router.go(-1)}" tag="a">返回刚才的页面</van-button>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<style lang="scss" scoped>
.error-404 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header,
  .footer {
    flex: 1;
  }
  .center {
    flex: 2;
    p {
      font-size: 45px;
      text-align: center;
      color: #1989fa;
    }
    div {
      text-align: center;
      font-size: 14px;
      color: #58727e;
    }
  }
}
</style>