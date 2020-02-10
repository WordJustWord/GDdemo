<template>
  <div class="payment-info">
    <Picker :columns="yhdjcols" required="1" label="用户电价" placeholder="用户电价" @res="yhdjConfirm"></Picker>
    <Picker
      :columns="dbkjbzcols"
      required="0"
      label="定比扣减标志"
      placeholder="定比扣减标志"
      @res="dbkjbzConfirm"
    ></Picker>
    <van-field v-model="data.dldbz" label="定量定比值" placeholder="请输入定量定比值" />
    <Picker
      :columns="dljsfscols"
      required="1"
      label="电量计算方式"
      placeholder="电量计算方式"
      @res="dljsfsConfirm"
    ></Picker>
    <Picker
      :columns="bsftbzcols"
      required="0"
      label="变损分摊标志"
      placeholder="变损分摊标志"
      @res="bsftbzConfirm"
    ></Picker>
    <Picker
      :columns="xsftbzcols"
      required="1"
      label="线损分摊标志"
      placeholder="线损分摊标志"
      @res="xsftbzConfirm"
    ></Picker>
    <Picker
      :columns="bsjfbzcols"
      required="1"
      label="变损计费标志"
      placeholder="变损计费标志"
      @res="bsjfbzConfirm"
    ></Picker>
    <Picker
      :columns="xsjfbzcols"
      required="1"
      label="线损计费标志"
      placeholder="线损计费标志"
      @res="xsjfbzConfirm"
    ></Picker>
    <Picker
      :columns="xsjsfscols"
      required="1"
      label="线损计算方式"
      placeholder="线损计算方式"
      @res="xsjsfsConfirm"
    ></Picker>
    <van-field v-model="data.ygxsjsz" label="有功线损计算值" placeholder="请输入有功线损计算值" />
    <van-field v-model="data.wgxsjsz" label="无功线损计算值" placeholder="请输入无功线损计算值" />
    <van-field v-model="data.jldrl" required label="计量点容量" placeholder="请输入计量点容量" />
    <van-field v-model="data.xsftxyz" label="线损分摊协议值" placeholder="请输入线损分摊协议值" />
    <van-field v-model="data.bsftxyz" label="变损分摊协议值" placeholder="请输入变损分摊协议值" />
    <van-field v-model="data.zxsx" label="执行顺序" placeholder="请输入执行顺序" />
    <van-field v-model="data.PTygjs" label="PT有功加损" placeholder="请输入计量点编号" />
    <van-field v-model="data.PTwgjs" label="PT无功加损" placeholder="请输入PT无功加损" />
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="default" block @click="()=>{this.$router.go(-1)}" :square="true">返回</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../components/picker";

const yhdjcols = [{ text: "大工业非分时", key: 1 }];
const dbkjbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const dljsfscols = [{ text: "实抄(装表计量)", key: 1 }];
const bsftbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const xsftbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const bsjfbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const xsjfbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const xsjsfscols = [{ text: "实抄(装表计量)", key: 1 }];
export default {
  data() {
    return {
      yhdjcols: yhdjcols,
      dbkjbzcols: dbkjbzcols,
      dljsfscols: dljsfscols,
      bsftbzcols: bsftbzcols,
      xsftbzcols: xsftbzcols,
      bsjfbzcols: bsjfbzcols,
      xsjfbzcols: xsjfbzcols,
      xsjsfscols: xsjsfscols,
      data: {
        yhdj: "",
        yhdjKey: "",
        dbkjbz: "",
        dbkjbzKey: "",
        dldbz: "",
        dljsfs: "",
        dljsfsKey: "",
        bsftbz: "",
        bsftbzKey: "",
        xsftbz: "",
        xsftbzKey: "",
        bsjfbz: "",
        bsjfbzKey: "",
        xsjfbz: "",
        xsjfbzKey: "",
        xsjsfs: "",
        xsjsfsKey: "",
        ygxsjsz: "",
        wgxsjsz: "",
        jldrl: "",
        xsftxyz: "",
        bsftxyz: "",
        zxsx: "",
        PTygjs: "",
        PTwgjs: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    yhdjConfirm(value, key) {
      this.data.yhdj = value;
      this.data.yhdjKey = key;
    },
    dbkjbzConfirm(value, key) {
      this.data.dbkjbz = value;
      this.data.dbkjbzKey = key;
    },
    dljsfsConfirm(value, key) {
      this.data.dljsfs = value;
      this.data.dljsfsKey = key;
    },
    bsftbzConfirm(value, key) {
      this.data.bsftbz = value;
      this.data.bsftbzKey = key;
    },
    xsftbzConfirm(value, key) {
      this.data.xsftbz = value;
      this.data.xsftbzKey = key;
    },
    bsjfbzConfirm(value, key) {
      this.data.bsjfbz = value;
      this.data.bsjfbzKey = key;
    },
    xsjfbzConfirm(value, key) {
      this.data.xsjfbz = value;
      this.data.xsjfbzKey = key;
    },
    xsjsfsConfirm(value, key) {
      this.data.xsjsfs = value;
      this.data.xsjsfsKey = key;
    }
  }
};
</script>