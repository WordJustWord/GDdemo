<template>
  <div class="gongjx-main">
    <div class="header">
      <van-nav-bar title="工具箱" :fixed="true" />
    </div>
    <div class="content">
      <OpsTools></OpsTools>
      <SearchTools></SearchTools>
    </div>
  </div>
</template>
<script>
import OpsTools from "./components/opstools";
import SearchTools from "./components/searchtools";
export default {
  components: {
    OpsTools,
    SearchTools
  }
};
</script>
<style lang="scss">
</style>