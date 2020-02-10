<template>
  <div class="xckc-gdscheme">
    <div class="btn-group btn-hor-flex">
      <van-button type="info" size="small" block :square="true" to="/gdschemeadd" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'编号：'+item.number"
        :value="'供电容量：'+item.volume"
        :is-link="true"
        :to="'/gdschemeedit/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>供电线路：{{item.line}}</p>
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
    number: "18239812",
    volume: "20000",
    line: "测试线路一",
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