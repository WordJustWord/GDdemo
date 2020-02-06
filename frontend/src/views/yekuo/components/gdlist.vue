<template>
  <div class="gongdan-list">
    <van-search v-model="value" placeholder="输入人工单号/户号" />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data"
        :key="item.id"
        :title="'户名：'+item.name"
        :value="'申请编号：'+item.num"
        :is-link="true"
        :to="path+'/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>编号：{{item.type == 1?"低压非居民增容":"低压非居民新装"}}</p>
          <p>地址：{{item.address}}</p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  props: ["data", "path"],
  data() {
    return {
      loading: false,
      finished: true,
      value: ""
    };
  },
  methods: {
    onLoad() {}
  }
};
</script>
<style lang="scss">
.van-cell__label {
  p {
    margin: 0;
    padding: 0;
  }
}
</style>