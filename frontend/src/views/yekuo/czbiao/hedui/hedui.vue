<template>
  <div class="czbiao-hedui">
    <van-cell-group>
      <van-cell title="计量方案信息" :is-link="true" to="/jlscheme" />
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