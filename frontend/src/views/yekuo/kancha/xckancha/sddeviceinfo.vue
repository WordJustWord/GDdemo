<template>
  <div class="sddevice-info">
    <div class="btn-group btn-hor-flex">
      <van-button type="info" size="small" block :square="true" to="/sddevicemenu" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'设备名称：'+item.name"
        :value="'设备编号：'+item.num"
        :is-link="true"
        :to="'/sddevicemenu/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>设备类型：{{item.type}}</p>
          <p>运行状态：{{item.status}}</p>
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
    type: "测试类型",
    status: "测试状态"
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