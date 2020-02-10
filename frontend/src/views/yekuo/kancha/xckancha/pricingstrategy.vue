<template>
  <div class="pricingstrategy">
    <div class="btn-group btn-hor-flex">
      <van-button
        type="info"
        size="small"
        block
        :square="true"
        to="/pricingstrategyadd"
        icon="plus"
      >新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'受电点名称：'+item.name"
        :value="'定价策略：'+item.strategy"
        :is-link="true"
        :to="'/pricingstrategyedit/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>功率考核方式：{{item.powerMode}}</p>
          <p>需量定值：{{item.value}}</p>
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
    strategy: "两部制",
    powerMode: "标准考核",
    value: "10",
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