<template>
  <div class="jgysjieguo">
    <van-cell-group>
      <van-cell title="竣工验收明细" :is-link="true" to="/jgysmingxi" />
      <van-cell title="竣工验收结果" :is-link="true" to="/jgysjgdetail" />
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