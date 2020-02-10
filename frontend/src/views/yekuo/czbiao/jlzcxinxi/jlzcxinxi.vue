<template>
  <div class="jlzcxinxi">
    <van-cell-group>
      <van-cell title="电能表" :is-link="true" to="/czbdnengbiao" />
      <van-cell title="互感器" :is-link="true" />
      <van-cell title="失压仪" :is-link="true" />
      <van-cell title="计量箱" :is-link="true" />
      <van-cell title="计量柜" :is-link="true" />
      <van-cell title="采集终端" :is-link="true" />
      <van-cell title="二次回路" :is-link="true" />
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