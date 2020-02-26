<template>
  <div class="yewu">
    <div class="btn-group btn-hor-flex">
      <van-button type="info" block size="small" to="/ywprofile/0" icon="plus">新增</van-button>
    </div>
    <van-tabs v-model="active">
      <van-tab title="待办中">
        <GdanList :data="this.progressData" path="/yewulist"></GdanList>
      </van-tab>
      <van-tab title="已完成">
        <GdanList></GdanList>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import GdanList from "./components/gdlist";
const mockData = [
  {
    id: 1,
    num: "160110021",
    name: "理气",
    address: "安徽市合肥省蜀山区218号",
    warningTime: "2019-02-02 12:21:32",
    type: 1
  }
];
export default {
  data() {
    return {
      active: 0,
      progressData: mockData
    };
  },
  components: {
    GdanList
  }
};
</script>