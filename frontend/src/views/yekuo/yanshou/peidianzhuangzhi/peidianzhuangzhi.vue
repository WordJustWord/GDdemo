<template>
  <div class="peidianzhuangzhi">
    <van-cell-group>
      <van-cell title="计量装置" :is-link="true" />
      <van-cell title="高压室" :is-link="true" />
      <van-cell title="低压室" :is-link="true" />
      <van-cell title="接地装置" :is-link="true" />
      <van-cell title="电缆部分" :is-link="true" />
      <van-cell title="自备电源" :is-link="true" to="/zbdianyuan" />
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