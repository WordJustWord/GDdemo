<template>
  <div class="xckc-sdscheme">
    <Picker
      :columns="dqsddcols"
      required="0"
      label="当前受电点"
      placeholder="当前受电点"
      @res="onDqsddConfirm"
    ></Picker>
    <div class="btn-group btn-hor-flex">
      <van-button type="info" size="small" block :square="true" to="/sdschemeadd" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'编号：'+item.number"
        :value="'名称：'+item.pointName"
        :is-link="true"
        :to="'/sdschemeedit/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>类型：{{item.pointType}}</p>
          <p>变更说明：{{item.description}}</p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import Picker from "../../components/picker";

const dqsddcols = [
  { text: "受电点一", key: 1 },
  { text: "受电点二", key: 2 },
  { text: "受电点三", key: 3 }
];
const dataList = [
  {
    id: 1,
    number: "5008596332",
    pointName: "受电点一",
    pointType: "柱式变",
    pointTypeKey: 1,
    description: "新增"
  }
];
export default {
  data() {
    return {
      dqsddcols: dqsddcols,
      loading: false,
      finished: true,
      data: {
        currentPoint: "",
        currentPointKey: 0,
        dataList: dataList
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    onLoad() {},
    onDqsddConfirm(value, key) {
      this.currentPoint = value;
      this.currentPointKey = key;
    }
  }
};
</script>