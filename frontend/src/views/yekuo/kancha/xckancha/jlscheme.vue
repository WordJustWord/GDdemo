<template>
  <div class="jl-scheme">
    <div class="btn-group btn-hor-flex">
      <van-button type="info" size="small" block :square="true" to="/jlschemetabs" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'编号：'+item.num"
        :value="'名称：'+item.name"
        :is-link="true"
        :to="'/jlschemetabs/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>计量方式：{{item.mode}}</p>
          <p>主用途类型：{{item.purpose}}</p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
const dataList = [
  {
    id: 1,
    num: "125121231",
    name: "测试名称",
    mode: "高供高计",
    purpose: "台区供电考核"
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