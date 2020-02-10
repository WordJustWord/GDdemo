<template>
  <div class="jgysjg-detail">
    <Picker :columns="ysyjcols" required="0" label="验收意见" placeholder="验收意见" @res="ysyjConfirm"></Picker>
    <TimePicker
      label="验收日期"
      placeholder="选择验收日期"
      datetype="date"
      required="0"
      patten="yyyy/MM/dd"
      @res="getResult"
    ></TimePicker>
    <van-field v-model="data.yscs" label="验收次数" placeholder="请输入验收次数" />
    <van-field v-model="data.ysbm" label="验收部门" placeholder="请输入验收部门" />
    <van-field v-model="data.ysr" label="验收人" placeholder="请输入验收人" />
    <van-field v-model="data.qxnr" label="缺陷内容" placeholder="请输入缺陷内容" />
    <van-field v-model="data.zgqk" label="整改情况" placeholder="请输入整改情况" />
    <van-field v-model="data.bz" type="textarea" rows="4" label="备注" placeholder="请输入备注" />
    <van-cell-group>
      <van-cell title="现场图片信息" />
    </van-cell-group>
    <van-uploader />
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";
import TimePicker from "../../../../components/timepicker";
const ysyjcols = [
  { text: "同意", key: 1 },
  { text: "不同意", key: 0 }
];
export default {
  data() {
    return {
      ysyjcols: ysyjcols,
      data: {
        ysyj: "",
        ysyjKey: "",
        ysrq: "",
        yscs: "",
        ysbm: "",
        ysr: "",
        qxnr: "",
        zgqk: "",
        bz: ""
      }
    };
  },
  components: {
    Picker,
    TimePicker
  },
  methods: {
    ysyjConfirm(value, key) {
      this.data.ysyj = value;
      this.data.ysyjKey = key;
    },
    getResult(value) {
      this.data.ysrq = value;
    }
  }
};
</script>