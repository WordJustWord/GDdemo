<template>
  <div class="yanshou-xianlu">
    <van-cell-group>
      <van-cell title="一般要求" to="/ybyaoqiu" :is-link="true" />
      <van-cell title="电缆" to="/dianlan" :is-link="true" />
      <van-cell title="架空线" :is-link="true" to="/jiakongxian" />
    </van-cell-group>
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