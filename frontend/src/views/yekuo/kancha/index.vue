<template>
  <div class="kancha-home">
    <van-tabs v-model="active">
      <van-tab title="注意事项" to="/kcwarning"></van-tab>
      <van-tab title="结果核对" to="/kchedui"></van-tab>
      <van-tab title="勘查方案" to="/kcfangan"></van-tab>
      <van-tab title="现场勘查" to="/xckancha"></van-tab>
      <van-tab title="生成表单" to="/biaodan/1"></van-tab>
      <van-tab title="结果确认" to="/kcconfirm"></van-tab>
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