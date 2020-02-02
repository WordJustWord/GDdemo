<template>
  <div class="wode">
    <div class="header">
      <van-nav-bar title="我的" :fixed="true" />
    </div>
    <div class="content">
      <Description></Description>
      <Completed></Completed>
      <Menus></Menus>
    </div>
  </div>
</template>
<script>
import Description from "./components/desc";
import Completed from "./components/completed";
import Menus from "./components/menus";
export default {
  components: {
    Description,
    Completed,
    Menus
  }
};
</script>