<template>
  <div class="czb-info">
    <van-tabs v-model="active">
      <van-tab title="注意事项" to="/czbwarning"></van-tab>
      <van-tab title="申请信息" to="/czbhedui"></van-tab>
      <van-tab title="受(供)电方案" to="/czbsgdfangan"></van-tab>
      <van-tab title="计量装(拆)信息" to="/jlzcxinxi"></van-tab>
      <van-tab title="结果确认" to="/jgqueren"></van-tab>
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