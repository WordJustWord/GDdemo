<template>
  <div class="gongdan-main">
    <div class="header">
      <van-nav-bar title="工单" :fixed="true" />
    </div>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="待接收">
          <List />
        </van-tab>
        <van-tab title="进行中">
          <List />
        </van-tab>
        <van-tab title="已完成">
          <List />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import List from "./components/gdlist";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    List
  }
};
</script>