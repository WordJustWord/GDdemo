<template>
  <div class="gongdan-main">
    <div class="header">
      <van-nav-bar title="我的台区" :fixed="true" />
    </div>
    <div class="content">
      <Dmap></Dmap>
      <Location></Location>
      <Dwarning></Dwarning>
      <Twarning></Twarning>
      <Uwarning></Uwarning>
    </div>
  </div>
</template>
<script>
import Dmap from "./components/map";
import Location from "./components/mylocation";
import Dwarning from "./components/devicewarning";
import Twarning from "./components/targetwarning";
import Uwarning from "./components/userswarning";
export default {
  components: {
    Dmap,
    Location,
    Dwarning,
    Twarning,
    Uwarning
  }
};
</script>
<style lang="scss">
.content {
  padding-top: 46px;
}
</style>