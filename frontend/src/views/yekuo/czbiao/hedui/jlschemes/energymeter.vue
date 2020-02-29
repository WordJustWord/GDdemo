<template>
  <div class="energy-meter">
    <div class="btn-group btn-hor-flex">
      <van-button
        type="info"
        size="small"
        block
        :square="true"
        to="/czbenergymeterdetail"
        icon="plus"
      >新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'电压：'+item.voltage"
        :value="'电流：'+item.current"
        :is-link="true"
        :to="'/czbenergymeterdetail/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>类型：{{item.type}}</p>
          <p>综合倍率：{{item.zhbl}}</p>
          <p>准确度等级：{{item.zqddj}}</p>
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
    voltage: "3*220v/380v",
    current: "0.3(1.2)A",
    type: "感应式-亚长寿命",
    zhbl: "5",
    zqddj: "1",
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