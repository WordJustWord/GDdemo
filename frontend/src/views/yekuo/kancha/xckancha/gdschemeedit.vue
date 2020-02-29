<template>
  <div class="gdschemeedit">
    <van-field v-model="data.number" label="编号" placeholder="请输入编号" />
    <Picker :columns="dylxcols" required="1" label="电源类型" placeholder="电源类型" @res="dylxConfirm"></Picker>
    <Picker :columns="dyxzcols" required="1" label="电源性质" placeholder="电源性质" @res="dyxzConfirm"></Picker>
    <Picker :columns="dyxscols" required="1" label="电源相数" placeholder="电源相数" @res="dyxsConfirm"></Picker>
    <Picker :columns="gddycols" required="1" label="供电电压" placeholder="供电电压" @res="gddyConfirm"></Picker>
    <van-field v-model="data.bdz" :required="true" label="变电站" placeholder="请输入变电站" />
    <van-field v-model="data.gdxl" :required="true" label="供电线路" placeholder="请输入供电线路" />
    <van-field v-model="data.gdtq" :required="true" label="供电台区" placeholder="请输入供电台区" />
    <van-field v-model="data.gdrl" :required="true" label="供电容量" placeholder="请输入供电容量" />
    <van-field v-model="data.yygdl" label="原有供电容量" placeholder="请输入原有供电容量" />
    <Picker :columns="yxfscols" required="1" label="运行方式" placeholder="运行方式" @res="yxfsConfirm"></Picker>
    <Picker :columns="jxfscols" required="1" label="进线方式" placeholder="进线方式" @res="jxfsConfirm"></Picker>
    <van-field v-model="data.dyjrd" label="电源接入点" placeholder="请输入电源接入点" />
    <Picker :columns="bhfscols" required="1" label="保护方式" placeholder="保护方式" @res="bhfsConfirm"></Picker>
    <van-field v-model="data.dyjrdwz" label="电源连接位置" placeholder="请输入电源连接位置" />
    <Picker
      :columns="fjkgdlqeddycols"
      required="0"
      label="分界开关断路器额定电压"
      placeholder="分界开关断路器额定电压"
      @res="fjkgdlqeddyConfirm"
    ></Picker>
    <Picker :columns="bhlxcols" required="0" label="保护类型" placeholder="保护类型" @res="bhlxConfirm"></Picker>
    <Picker :columns="cqfjdcols" required="1" label="产权分界点" placeholder="产权分界点" @res="cqfjdConfirm"></Picker>
    <Picker
      :columns="fjkgdlqeddlcols"
      required="0"
      label="分界开关断路器额定电流"
      placeholder="分界开关断路器额定电流"
      @res="fjkgdlqeddlConfirm"
    ></Picker>
    <van-field v-model="data.tzjmwzsm" label="投资界面位置说明" placeholder="请输入投资界面位置说明" />
    <van-field v-model="data.jxfspsjljsm" label="进线方式铺设及路径说明" placeholder="请输入进线方式铺设及路径说明" />
    <Picker
      :columns="dlggcols"
      required="0"
      label="铺设线路选型(电缆规格)"
      placeholder="铺设线路选型(电缆规格)"
      @res="dlggConfirm"
    ></Picker>
    <Picker
      :columns="jkcols"
      required="0"
      label="铺设线路选型(架空)"
      placeholder="铺设线路选型(架空)"
      @res="jkConfirm"
    ></Picker>
    <van-field v-model="data.dlzxjmj" label="电缆最小截面积" placeholder="请输入电缆最小截面积" />
    <Picker :columns="bgsmcols" required="1" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";
const dylxcols = [
  { text: "公变", key: 1 },
  { text: "专变", key: 2 },
  { text: "共用专变", key: 3 },
  { text: "专线", key: 4 }
];
const dyxzcols = [
  { text: "主供电源", key: 1 },
  { text: "备用电源", key: 2 },
  { text: "保安电源", key: 3 }
];
const dyxscols = [
  { text: "单相电源", key: 1 },
  { text: "三相电源", key: 2 }
];
const gddycols = [
  { text: "10kV", key: 1 },
  { text: "0.4kV", key: 2 },
  { text: "35kV", key: 3 },
  { text: "110kV", key: 4 },
  { text: "220kV", key: 5 },
  { text: "500kV", key: 6 }
];
const yxfscols = [
  { text: "常用互为备用", key: 1 },
  { text: "冷备", key: 2 },
  { text: "热备", key: 3 },
  { text: "其他", key: 4 }
];
const jxfscols = [
  { text: "架空", key: 1 },
  { text: "电缆直埋", key: 2 },
  { text: "电缆架空", key: 3 },
  { text: "电缆桥架", key: 4 },
  { text: "电缆隧道", key: 5 },
  { text: "电缆管井", key: 6 },
  { text: "电缆架空混合", key: 7 },
  { text: "其它", key: 8 }
];
const bhfscols = [
  { text: "10kV及以上高压客户开关保护（客户侧、电源侧)", key: 1 },
  { text: "10kV及以上高压客户自落熔丝保护（电源侧)", key: 2 },
  { text: "低压客户开关保护（客户侧)", key: 3 },
  { text: "低压客户熔丝（电源侧)", key: 4 },
  { text: "其它", key: 5 }
];
const fjkgdlqeddycols = [{ text: "交流3Kv", key: 1 }];
const bhlxcols = [{ text: "反时限过流保护", key: 1 }];
const cqfjdcols = [{ text: "暂无", key: 1 }];
const fjkgdlqeddlcols = [{ text: "630A", key: 1 }];
const dlggcols = [{ text: "暂无", key: 1 }];
const jkcols = [{ text: "架空裸导线", key: 1 }];
const bgsmcols = [
  { text: "新增", key: 1 },
  { text: "变更", key: 2 },
  { text: "删除", key: 3 }
];
export default {
  data() {
    return {
      dylxcols: dylxcols,
      dyxzcols: dyxzcols,
      dyxscols: dyxscols,
      gddycols: gddycols,
      yxfscols: yxfscols,
      jxfscols: jxfscols,
      bhfscols: bhfscols,
      fjkgdlqeddycols: fjkgdlqeddycols,
      bhlxcols: bhlxcols,
      cqfjdcols: cqfjdcols,
      fjkgdlqeddlcols: fjkgdlqeddlcols,
      dlggcols: dlggcols,
      jkcols: jkcols,
      bgsmcols: bgsmcols,
      data: {
        number: "",
        dylx: "",
        dylxKey: "",
        dyxz: "",
        dyxzKey: "",
        dyxs: "",
        dyxsKey: "",
        gddy: "",
        gddyKey: "",
        bdz: "",
        gdxl: "",
        gdtq: "",
        gdrl: "",
        yygdl: "",
        yxfs: "",
        yxfsKey: "",
        jxfs: "",
        jxfsKey: "",
        dyjrd: "",
        bhfs: "",
        bhfsKey: "",
        dyjrdwz: "",
        fjkgdlqeddy: "",
        fjkgdlqeddyKey: "",
        bhlx: "",
        bhlxKey: "",
        cqfjd: "",
        cqfjdKey: "",
        fjkgdlqeddl: "",
        fjkgdlqeddlKey: "",
        tzjmwzsm: "",
        jxfspsjljsm: "",
        dlgg: "",
        dlggKey: "",
        jk: "",
        jkKey: "",
        dlzxjmj: "",
        bgsm: "",
        bgsmKey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    dylxConfirm(value, key) {
      this.data.dylx = value;
      this.data.dylxKey = key;
    },
    dyxzConfirm(value, key) {
      this.data.dyxz = value;
      this.data.dyxzKey = key;
    },
    dyxsConfirm(value, key) {
      this.data.dyxs = value;
      this.data.dyxsKey = key;
    },
    gddyConfirm(value, key) {
      this.data.gddy = value;
      this.data.gddyKey = key;
    },
    yxfsConfirm(value, key) {
      this.data.yxfs = value;
      this.data.yxfsKey = key;
    },
    jxfsConfirm(value, key) {
      this.data.jxfs = value;
      this.data.jxfsKey = key;
    },
    bhfsConfirm(value, key) {
      this.data.bhfs = value;
      this.data.bhfsKey = key;
    },
    fjkgdlqeddyConfirm(value, key) {
      this.data.fjkgdlqeddy = value;
      this.data.fjkgdlqeddyKey = key;
    },
    bhlxConfirm(value, key) {
      this.data.bhlx = value;
      this.data.bhlxKey = key;
    },
    cqfjdConfirm(value, key) {
      this.data.cqfjd = value;
      this.data.cqfjdKey = key;
    },
    fjkgdlqeddlConfirm(value, key) {
      this.data.fjkgdlqeddl = value;
      this.data.fjkgdlqeddlKey = key;
    },
    dlggConfirm(value, key) {
      this.data.dlgg = value;
      this.data.dlggKey = key;
    },
    jkConfirm(value, key) {
      this.data.jk = value;
      this.data.jkKey = key;
    },
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    }
  }
};
</script>