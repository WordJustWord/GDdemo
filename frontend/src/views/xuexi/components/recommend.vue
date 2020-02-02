<template>
  <div class="recommend">
    <van-cell-group>
      <van-cell title="推荐知识" />
    </van-cell-group>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: true
    };
  },
  methods: {
    onLoad() {}
  }
};
</script>