<template>
  <div class="jgyanshou">
    <van-cell-group>
      <van-cell title="竣工验收结果" :is-link="true" to="/jgysjieguo" />
      <van-cell title="竣工验收历史" :is-link="true" />
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