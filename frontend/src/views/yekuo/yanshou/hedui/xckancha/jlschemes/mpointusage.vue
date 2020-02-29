<template>
  <div class="m-point-usage">
    <div class="btn-group">
      <van-button type="info" block size="small" :square="true" to="/xxusagedetail" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'编号：'+item.num"
        :value="'用途标识：'+item.usageFlag"
        :is-link="true"
        :to="'/xxusagedetail/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>用途代码：{{item.usageCode}}</p>
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
    num: "125121231",
    usageFlag: "测试标识",
    usageCode: "售电侧结算",
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