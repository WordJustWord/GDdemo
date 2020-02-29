<template>
  <div class="yanshou-hedui">
    <van-cell-group>
      <van-cell title="受电点方案" :is-link="true" to="/xxsdscheme" />
      <van-cell title="供电电源方案" :is-link="true" to="/xxsdgdscheme" />
      <van-cell title="用户计费方案" :is-link="true" to="/xxyhpayscheme" />
      <van-cell title="计量方案信息" :is-link="true" to="/xxjlscheme" />
      <van-cell title="受电设备方案" :is-link="true" to="/xxsddeviceinfo" />
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