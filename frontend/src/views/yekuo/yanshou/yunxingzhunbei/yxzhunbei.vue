<template>
  <div class="yunxingzhunbei">
    <van-cell-group>
      <van-cell title="运行准备" :is-link="true" to="/yxzbdetail" />
      <van-cell title="其他" :is-link="true" />
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