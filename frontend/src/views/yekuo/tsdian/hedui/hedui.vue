<template>
  <div class="tsdian-hedui">
    <van-cell-group>
      <van-cell title="受电设备方案" :is-link="true" to="/tsdsddevicemenu" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>