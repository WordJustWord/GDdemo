<template>
  <div class="yekuo-yanshou">
    <van-tabs v-model="active">
      <van-tab title="待办中">
        <GdanList></GdanList>
      </van-tab>
      <van-tab title="已完成">
        <GdanList></GdanList>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import GdanList from "./components/gdlist";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    GdanList
  }
};
</script>