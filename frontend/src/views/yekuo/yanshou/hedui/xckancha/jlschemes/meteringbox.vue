<template>
  <div class="metering-box">
    <div class="btn-group btn-hor-flex">
      <van-button
        type="info"
        size="small"
        block
        :square="true"
        to="/xxmeteringboxdetail"
        icon="plus"
      >新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'资产编号：'+item.num"
        :value="'类别：'+item.category"
        :is-link="true"
        :to="'/xxmeteringboxdetail/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>类型：{{item.type}}</p>
          <p>材料类型：{{item.materialType}}</p>
          <p>规格：{{item.gg}}</p>
          <p>行数：{{item.rows}}</p>
          <p>列数：{{item.cols}}</p>
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
    num: "5121322",
    category: "测试类别",
    type: "单体表箱",
    materialType: "铁",
    gg: "1",
    rows: "1",
    cols: "1",
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