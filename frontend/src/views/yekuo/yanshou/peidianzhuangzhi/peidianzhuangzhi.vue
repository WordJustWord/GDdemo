<template>
  <div class="peidianzhuangzhi">
    <van-cell-group>
      <van-cell title="计量装置" to="/jlzhuangzhi" :is-link="true" />
      <van-cell title="高压室" to="/gaoyashi" :is-link="true" />
      <van-cell title="低压室" to="/diyashi" :is-link="true" />
      <van-cell title="接地装置" to="/jiedizhuangzhi" :is-link="true" />
      <van-cell title="电缆部分" to="/dianlanbufen" :is-link="true" />
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