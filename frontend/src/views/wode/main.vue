<template>
  <div class="wode">
    <div class="header">
      <van-nav-bar title="我的" :fixed="true" />
    </div>
    <div class="content">
      <Menus></Menus>
    </div>
  </div>
</template>
<script>
import Menus from "./components/menus";
export default {
  components: {
    Menus
  }
};
</script>