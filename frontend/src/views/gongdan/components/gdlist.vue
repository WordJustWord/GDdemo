<template>
  <div class="gongdan-list">
    <van-search v-model="value" placeholder="输入申请编号" />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: true,
      list: [],
      value: ""
    };
  },
  methods: {
    onLoad() {}
  }
};
</script>