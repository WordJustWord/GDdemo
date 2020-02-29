<template>
  <div class="kancha-home">
    <van-tabs v-model="active">
      <van-tab title="注意事项" to="/yswarning"></van-tab>
      <van-tab title="信息核对" to="/yshedui"></van-tab>
      <van-tab title="线路电缆" to="/ysxianlu"></van-tab>
      <van-tab title="受电变" to="/shoudianbian"></van-tab>
      <van-tab title="配电装置" to="/pdzhuangzhi"></van-tab>
      <van-tab title="继电保护" to="/jdbaohu"></van-tab>
      <van-tab title="运行准备" to="/yxzhunbei"></van-tab>
      <van-tab title="竣工检查" to="/jgyanshou"></van-tab>
      <van-tab title="生成表单"></van-tab>
      <van-tab title="结果确认" to="/ysconfirm"></van-tab>
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