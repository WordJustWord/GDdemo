<template>
  <div class="kancha-home">
    <van-tabs v-model="active">
      <van-tab title="注意事项"></van-tab>
      <van-tab title="信息核对"></van-tab>
      <van-tab title="线路电缆"></van-tab>
      <van-tab title="受电变"></van-tab>
      <van-tab title="配电装置"></van-tab>
      <van-tab title="继电保护"></van-tab>
      <van-tab title="运行准备"></van-tab>
      <van-tab title="竣工检查"></van-tab>
      <van-tab title="生成表单"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {}
};
</script>