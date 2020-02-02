<template>
  <div id="app">
    <div class="pages">
      <router-view></router-view>
    </div>
    <div class="footer">
      <van-tabbar v-model="selected">
        <van-tabbar-item icon="location-o" to="/" name="taiqu">我的台区</van-tabbar-item>
        <van-tabbar-item icon="orders-o" to="/gongdan" name="gongdan">工单</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/gongjx" name="gongjx">工具箱</van-tabbar-item>
        <van-tabbar-item icon="records" to="/xuexi" name="xuexi">学习</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/wode" name="wode">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "taiqu"
    };
  }
};
</script>
<style lang="scss">
.pages {
  padding-bottom: 50px;
}
</style>
