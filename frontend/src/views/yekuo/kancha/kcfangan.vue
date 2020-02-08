<template>
  <div class="kancha-scheme">
    <van-cell-group>
      <van-cell title="供电方案信息" :is-link="true" to="/fagdinfo" />
      <van-cell title="查勘信息" :is-link="true" to="/fackinfo" />
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