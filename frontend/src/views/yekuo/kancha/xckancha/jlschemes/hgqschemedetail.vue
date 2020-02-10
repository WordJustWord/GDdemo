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
    <Picker
      :columns="dlhgqbbcols"
      required="0"
      label="电流互感器变比"
      placeholder="电流互感器变比"
      @res="dlhgqbbConfirm"
    ></Picker>
    <Picker :columns="xbcols" required="0" label="相别" placeholder="相别" @res="xbConfirm"></Picker>
    <Picker :columns="zqddjcols" required="0" label="准确度等级" placeholder="准确度等级" @res="zqddjConfirm"></Picker>
    <van-field v-model="data.sl" label="数量" placeholder="请输入数量" />
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
      <div class="btn-d"></div>
      <van-button type="default" block @click="()=>{this.$router.go(-1)}" :square="true">返回</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../components/picker";
const hgqlbcols = [{ text: "电流互感器", key: 1 }];
const hgqlxcols = [{ text: "高压TA", key: 1 }];
const dyhgqbbcols = [{ text: "10/5", key: 1 }];
const dlhgqbbcols = [{ text: "10/5", key: 1 }];
const xbcols = [{ text: "A相", key: 1 }];
const zqddjcols = [{ text: "1", key: 1 }];
const bgsmcols = [{ text: "新增", key: 1 }];
export default {
  data() {
    return {
      hgqlbcols: hgqlbcols,
      hgqlxcols: hgqlxcols,
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