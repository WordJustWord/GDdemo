<template>
  <div id="app">
    <div class="pages">
      <router-view></router-view>
    </div>
    <!-- <div class="pages">
      <router-view></router-view>
    </div>
    <div class="footer">
      <van-tabbar v-model="selected">
        <van-tabbar-item icon="wap-home-o" to="/" name="home">首页</van-tabbar-item>
        <van-tabbar-item icon="cluster-o" to="/yekuo" name="yekuo">现场业扩</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/wode" name="wode">我的</van-tabbar-item>
      </van-tabbar>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "home"
    };
  }
};
</script>
<style lang="scss">
.pages {
  padding-bottom: 50px;
}
</style>
