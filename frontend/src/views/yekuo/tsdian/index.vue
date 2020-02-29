<template>
  <div class="tsdian-info">
    <van-tabs v-model="active">
      <van-tab title="注意事项" to="/tsdwarning"></van-tab>
      <van-tab title="申请信息" to="/tsdhedui"></van-tab>
      <van-tab title="送电前项目检查" to="/tsdsdqjc"></van-tab>
      <van-tab title="信息录入" to="/tsdxxlu"></van-tab>
      <van-tab title="送电后项目检查" to="/tsdsdhjc"></van-tab>
      <van-tab title="生成表单"></van-tab>
      <van-tab title="结果确认" to="/tsdconfirm"></van-tab>
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