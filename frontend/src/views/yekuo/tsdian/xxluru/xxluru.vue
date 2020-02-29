<template>
  <div class="xxluru">
    <van-collapse v-model="active" accordion>
      <van-collapse-item title="停送电登记记录">
        <van-field v-model="data.czr" label="操作人" placeholder="请输入操作人" />
        <TimePicker
          label="停(送)电日期"
          placeholder="选择停(送)电日期"
          datetype="date"
          required="0"
          patten="yyyy/MM/dd"
          @res="getResult"
        ></TimePicker>
        <Picker
          :columns="tsdyjcols"
          required="0"
          label="停(送)电意见"
          placeholder="停(送)电意见"
          @res="tsdyjConfirm"
        ></Picker>
        <van-field v-model="data.bz" type="textarea" rows="4" label="备注" placeholder="请输入备注" />
        <div class="btn-group">
          <van-button type="info" block :square="true">保存</van-button>
        </div>
      </van-collapse-item>
      <van-collapse-item title="停送电设备信息列表">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell
            v-for="item in data.dataList"
            :key="item.id"
            :title="'设备标识：'+item.sbbz"
            :value="'名称：'+item.name"
            :is-link="true"
            :to="'/tsdsddevicemenu/'+item.id"
          >
            <template class="list-label" slot="label">
              <p>设备类型：{{item.sblx}}</p>
              <p>铭牌容量：{{item.mprl}}</p>
              <p>运行状态：{{item.status}}</p>
            </template>
          </van-cell>
        </van-list>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";
import TimePicker from "../../../../components/timepicker";
const tsdyjcols = [{ text: "无", key: 1 }];
const dataList = [
  {
    id: 1,
    sbbz: "15645415",
    name: "满血",
    status: "2",
    sblx: "2",
    mprl: "2"
  }
];
export default {
  data() {
    return {
      active: 0,
      tsdyjcols: tsdyjcols,
      loading: false,
      finished: true,
      data: {
        dataList: dataList,
        czr: "",
        tsdrq: "",
        tsdyj: "",
        tsdyjKey: "",
        bz: ""
      }
    };
  },
  components: {
    Picker,
    TimePicker
  },
  methods: {
    getResult(value) {
      this.data.tsdrq = value;
    },
    tsdyjConfirm(value, key) {
      this.data.tsdyj = value;
      this.data.tsdyjKey = key;
    },
    onLoad() {}
  }
};
</script>