<template>
  <div class="hgq-scheme-detail">
    <van-field v-model="data.zcbh" label="资产编号" placeholder="请输入资产编号" />
    <Picker :columns="hgqlbcols" required="1" label="互感器类别" placeholder="互感器类别" @res="hgqlbConfirm"></Picker>
    <Picker :columns="hgqlxcols" required="1" label="互感器类型" placeholder="互感器类型" @res="hgqlxConfirm"></Picker>
    <Picker
      :columns="dyhgqbbcols"
      required="0"
      label="电压互感器变比"
      placeholder="电压互感器变比"
      @res="dyhgqbbConfirm"
    ></Picker>
    <van-field v-model="data.dlhgqbb" label="电流互感器变比" placeholder="请输入电流互感器变比" />
    <Picker :columns="xbcols" required="0" label="相别" placeholder="相别" @res="xbConfirm"></Picker>
    <van-field v-model="data.zqddj" label="准确度等级" placeholder="请输入准确度等级" />
    <van-field v-model="data.sl" label="数量" placeholder="请输入数量" />
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";
const hgqlbcols = [
  { text: "电压互感器", key: 1 },
  { text: "电流互感器", key: 2 },
  { text: "组合式互感器", key: 3 }
];
const dyhgqlxcols = [
  { text: "高压TV", key: 1 },
  { text: "低压TV", key: 2 },
  { text: "高压TA", key: 3 },
  { text: "低压TA", key: 4 }
];
const dlhgqlxcols = [
  { text: "高压TA", key: 3 },
  { text: "低压TA", key: 4 }
];
const dyhgqbbcols = [{ text: "10/0.1", key: 1 }];
const dlhgqbbcols = [
  { text: "15/5", key: 1 },
  { text: "20/5", key: 2 },
  { text: "30/5", key: 3 },
  { text: "40/5", key: 4 },
  { text: "50/5", key: 5 },
  { text: "75/5", key: 6 },
  { text: "100/5", key: 7 },
  { text: "150/5", key: 8 },
  { text: "200/5", key: 9 },
  { text: "250/5A", key: 10 },
  { text: "300/5A", key: 11 }
];
const xbcols = [
  { text: "AB相", key: 1 },
  { text: "BC相", key: 2 },
  { text: "AB+BC相", key: 3 },
  { text: "A相", key: 4 },
  { text: "B相", key: 5 },
  { text: "C相", key: 6 }
];
const zqddjcols = [
  { text: "1.0", key: 1 },
  { text: "0.2", key: 2 },
  { text: "0.2S", key: 3 },
  { text: "0.5", key: 4 },
  { text: "0.5S", key: 5 }
];
const bgsmcols = [
  { text: "新增", key: 1 },
  { text: "变更", key: 2 },
  { text: "删除", key: 3 }
];
export default {
  data() {
    return {
      hgqlbcols: hgqlbcols,
      hgqlxcols: dyhgqlxcols,
      dyhgqbbcols: dyhgqbbcols,
      dlhgqbbcols: dlhgqbbcols,
      xbcols: xbcols,
      zqddjcols: zqddjcols,
      bgsmcols: bgsmcols,
      data: {
        zcbh: "",
        hgqlb: "",
        hgqlbKey: "",
        hgqlx: "",
        hgqlxKey: "",
        dyhgqbb: "",
        dyhgqbbKey: "",
        dlhgqbb: "",
        dlhgqbbKey: "",
        xb: "",
        xbKey: "",
        zqddj: "",
        zqddjKey: "",
        sl: "",
        bgsm: "",
        bgsmKey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    hgqlbConfirm(value, key) {
      this.data.hgqlb = value;
      this.data.hgqlbKey = key;
    },
    hgqlxConfirm(value, key) {
      this.data.hgqlx = value;
      this.data.hgqlxKey = key;
    },
    dyhgqbbConfirm(value, key) {
      this.data.dyhgqbb = value;
      this.data.dyhgqbbKey = key;
    },
    dlhgqbbConfirm(value, key) {
      this.data.dlhgqbb = value;
      this.data.dlhgqbbKey = key;
    },
    xbConfirm(value, key) {
      this.data.xb = value;
      this.data.xbKey = key;
    },
    zqddjConfirm(value, key) {
      this.data.zqddj = value;
      this.data.zqddjKey = key;
    },
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    }
  }
};
</script>