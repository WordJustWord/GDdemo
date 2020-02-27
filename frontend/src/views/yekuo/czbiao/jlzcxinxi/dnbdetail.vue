<template>
  <div class="dnb-detail">
    <van-field v-model="data.zcbh" label="资产编号" placeholder="请输入资产编号" />
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <van-field v-model="data.dnblb" label="电能表类别" placeholder="请输入电能表类别" />
    <Picker :columns="jxfscols" required="1" label="接线方式" placeholder="接线方式" @res="jxfsConfirm"></Picker>
    <Picker :columns="dycols" required="1" label="电压" placeholder="电压" @res="dyConfirm"></Picker>
    <Picker :columns="dlcols" required="0" label="电流" placeholder="电流" @res="dlConfirm"></Picker>
    <van-field v-model="data.zhbl" label="综合倍率" placeholder="请输入综合倍率" />
    <van-field v-model="data.zqddj" label="准确度等级" placeholder="请输入准确度等级" />
    <Picker :columns="ckbbzcols" required="0" label="参考表标志" placeholder="参考表标志" @res="ckbbzConfirm"></Picker>
    <Picker :columns="dnblxcols" required="0" label="电能表类型" placeholder="电能表类型" @res="dnblxConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";

const bgsmcols = [
  { text: "新增", key: 1 },
  { text: "变更", key: 2 },
  { text: "删除", key: 3 }
];
const dlblbcols = [{ text: "有功表", key: 1 }];
const jxfscols = [
  { text: "单相", key: 1 },
  { text: "三相三线", key: 2 },
  { text: "三相四线", key: 3 }
];
const dycols = [
  { text: "3*220v/380v", key: 1 },
  { text: "3*100V", key: 2 }
];
const dlcols = [{ text: "0.3(1.2)A", key: 1 }];
const zqddjcols = [{ text: "1", key: 1 }];
const ckbbzcols = [{ text: "暂无", key: 1 }];
const dnblxcols = [{ text: "感应式-亚长寿命", key: 1 }];
export default {
  data() {
    return {
      bgsmcols: bgsmcols,
      dlblbcols: dlblbcols,
      jxfscols: jxfscols,
      dycols: dycols,
      dlcols: dlcols,
      zqddjcols: zqddjcols,
      ckbbzcols: ckbbzcols,
      dnblxcols: dnblxcols,
      data: {
        zcbh: "",
        bgsm: "",
        bgsmKey: "",
        dlblb: "",
        dlblbKey: "",
        jxfs: "",
        jxfsKey: "",
        dy: "",
        dyKey: "",
        dl: "",
        dlKey: "",
        zhbl: "",
        zqddj: "",
        zqddjKey: "",
        ckbbz: "",
        ckbbzKey: "",
        dnblx: "",
        dnblxKey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    },
    dlblbConfirm(value, key) {
      this.data.dlblb = value;
      this.data.dlblbKey = key;
    },
    jxfsConfirm(value, key) {
      this.data.jxfs = value;
      this.data.jxfsKey = key;
    },
    dyConfirm(value, key) {
      this.data.dy = value;
      this.data.dyKey = key;
    },
    dlConfirm(value, key) {
      this.data.dl = value;
      this.data.dlKey = key;
    },
    zqddjConfirm(value, key) {
      this.data.zqddj = value;
      this.data.zqddjKey = key;
    },
    ckbbzConfirm(value, key) {
      this.data.ckbbz = value;
      this.data.ckbbzKey = key;
    },
    dnblxConfirm(value, key) {
      this.data.dnblx = value;
      this.data.dnblxKey = key;
    }
  }
};
</script>