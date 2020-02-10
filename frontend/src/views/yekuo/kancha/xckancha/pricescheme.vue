<template>
  <div class="price-scheme">
    <div class="btn-group btn-hor-flex">
      <van-button type="info" size="small" block :square="true" to="/priceschemeadd" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'电价名称：'+item.name"
        :value="'分时标志：'+item.timeFlag"
        :is-link="true"
        :to="'/priceschemeedit/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>功率因数标准：{{item.powerStandard}}</p>
          <p>变更说明：{{item.description}}</p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
const dataList = [
  {
    id: 1,
    name: "受电点一",
    powerStandard: "不考核",
    timeFlag: "暂无",
    description: "新增"
  }
];
export default {
  data() {
    return {
      loading: false,
      finished: true,
      data: {
        dataList: dataList
      }
    };
  },
  methods: {
    onLoad() {}
  }
};
</script>