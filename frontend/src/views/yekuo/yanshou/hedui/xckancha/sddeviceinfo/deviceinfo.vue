<template>
  <div class="device-info">
    <van-field v-model="data.sbbh" label="设备编号" placeholder="请输入设备编号" />
    <van-field v-model="data.sbmc" label="设备名称" placeholder="请输入设备名称" />
    <TimePicker
      label="申请启动日期"
      placeholder="选择申请启动日期"
      datetype="date"
      required="0"
      patten="yyyy/MM/dd"
      @res="getResult"
    ></TimePicker>
    <Picker :columns="xlcols" required="0" label="线路" placeholder="线路" @res="xlConfirm"></Picker>
    <Picker :columns="tqcols" required="0" label="台区" placeholder="台区" @res="tqConfirm"></Picker>
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <van-field v-model="data.wgbsxyz" label="无功变损协议值" placeholder="请输入无功变损协议值" />
    <van-field v-model="data.ygbsxyz" label="有功变损协议值" placeholder="请输入有功变损协议值" />
    <Picker :columns="sblxcols" required="0" label="设备类型" placeholder="设备类型" @res="sblxConfirm"></Picker>
    <Picker :columns="sbxhcols" required="0" label="设备型号" placeholder="设备型号" @res="sbxhConfirm"></Picker>
    <Picker :columns="yxztcols" required="0" label="运行状态" placeholder="运行状态" @res="yxztConfirm"></Picker>
    <Picker :columns="zbxzcols" required="0" label="主备性质" placeholder="主备性质" @res="zbxzConfirm"></Picker>
    <van-field v-model="data.mprl" label="铭牌容量" placeholder="请输入铭牌容量" />
    <Picker :columns="zybbzcols" required="0" label="专用变标志" placeholder="专用变标志" @res="zybbzConfirm"></Picker>
    <Picker :columns="bsbhcols" required="0" label="变损编号" placeholder="变损编号" @res="bsbhConfirm"></Picker>
    <Picker :columns="cqcols" required="0" label="产权" placeholder="产权" @res="cqConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../../components/picker";
import TimePicker from "../../../../../../components/timepicker";

const xlcols = [{ text: "10Kv", key: 1 }];
const tqcols = [{ text: "暂无", key: 1 }];
const bgsmcols = [
  { text: "新增", key: 1 },
  { text: "变更", key: 2 },
  { text: "删除", key: 3 }
];
const sblxcols = [
  { text: "变压器", key: 1 },
  { text: "高压电机", key: 2 }
];
const sbxhcols = [{ text: "暂无", key: 1 }];
const yxztcols = [
  { text: "运行", key: 1 },
  { text: "暂无", key: 2 },
  { text: "拆除", key: 3 }
];
const zbxzcols = [
  { text: "主用", key: 1 },
  { text: "热备", key: 1 },
  { text: "冷备", key: 1 }
];
const zybbzcols = [
  { text: "专用", key: 1 },
  { text: "公用", key: 1 }
];
const bsbhcols = [{ text: "暂无", key: 1 }];
const cqcols = [
  { text: "供电企业资产", key: 1 },
  { text: "客户资产", key: 2 },
  { text: "发电企业资产", key: 3 }
];
export default {
  data() {
    return {
      xlcols: xlcols,
      tqcols: tqcols,
      bgsmcols: bgsmcols,
      sblxcols: sblxcols,
      sbxhcols: sbxhcols,
      yxztcols: yxztcols,
      zbxzcols: zbxzcols,
      zybbzcols: zybbzcols,
      bsbhcols: bsbhcols,
      cqcols: cqcols,
      data: {
        sbbh: "",
        sbmc: "",
        qdrq: "",
        xl: "",
        xlKey: "",
        tq: "",
        tqKey: "",
        bgsm: "",
        bgsmKey: "",
        wgbsxyz: "",
        ygbsxyz: "",
        sblx: "",
        sblxKey: "",
        sbxh: "",
        sbxhKey: "",
        yxzt: "",
        yxztKey: "",
        zbxz: "",
        zbxzKey: "",
        mprl: "",
        zybbz: "",
        zybbzKey: "",
        bsbh: "",
        bsbhKey: "",
        cq: "",
        cqKey: ""
      }
    };
  },
  components: {
    Picker,
    TimePicker
  },
  methods: {
    getResult(value) {
      this.data.qdrq = value;
    },
    xlConfirm(value, key) {
      this.data.xl = value;
      this.data.xlKey = key;
    },
    tqConfirm(value, key) {
      this.data.tq = value;
      this.data.tqKey = key;
    },
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    },
    sblxConfirm(value, key) {
      this.data.sblx = value;
      this.data.sblxKey = key;
    },
    sbxhConfirm(value, key) {
      this.data.sbxh = value;
      this.data.sbxhKey = key;
    },
    yxztConfirm(value, key) {
      this.data.yxzt = value;
      this.data.yxztKey = key;
    },
    zbxzConfirm(value, key) {
      this.data.zbxz = value;
      this.data.zbxzKey = key;
    },
    zybbzConfirm(value, key) {
      this.data.zybbz = value;
      this.data.zybbzKey = key;
    },
    bsbhConfirm(value, key) {
      this.data.bsbh = value;
      this.data.bsbhKey = key;
    },
    cqConfirm(value, key) {
      this.data.cq = value;
      this.data.cqKey = key;
    }
  }
};
</script>