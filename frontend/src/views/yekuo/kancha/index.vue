<template>
  <div class="kancha-home">
    <van-tabs v-model="active">
      <van-tab title="注意事项" to="/kcwarning"></van-tab>
      <van-tab title="结果核对" to="/kchedui"></van-tab>
      <van-tab title="勘查方案"></van-tab>
      <van-tab title="现场勘查"></van-tab>
      <van-tab title="生成表单"></van-tab>
      <van-tab title="模版管理"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import Warning from "./warning";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Warning
  }
};
</script>