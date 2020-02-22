<template>
  <div class="hgq-scheme">
    <div class="btn-group">
      <van-button type="info" size="small" block :square="true" to="/hgqschemedetail" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'资产编号：'+item.num"
        :value="'类别：'+item.type"
        :is-link="true"
        :to="'/hgqschemedetail/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>电压变比：{{item.dybb}}</p>
          <p>电流变比：{{item.dlbb}}</p>
          <p>准确度等级：{{item.zqddj}}</p>
          <p>相别：{{item.zqddj}}</p>
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
    num: "1251232",
    type: "电流互感器",
    dybb: "10/5",
    dlbb: "10/5",
    zqddj: "1",
    xb: "A相",
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