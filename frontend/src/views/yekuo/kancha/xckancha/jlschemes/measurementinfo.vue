<template>
  <div class="measurement-info">
    <van-field v-model="data.jldbh" label="计量点编号" placeholder="请输入计量点编号" />
    <van-field v-model="data.jldmc" :required="true" label="计量点名称" placeholder="请输入计量点名称" />
    <Picker :columns="jldxzcols" required="1" label="计量点性质" placeholder="计量点性质" @res="jldxzConfirm"></Picker>
    <Picker :columns="jldflcols" required="1" label="计量点分类" placeholder="计量点分类" @res="jldflConfirm"></Picker>
    <Picker
      :columns="jldssccols"
      required="1"
      label="计量点所属侧"
      placeholder="计量点所属侧"
      @res="jldsscConfirm"
    ></Picker>
    <Picker :columns="jlfscols" required="1" label="计量方式" placeholder="计量方式" @res="jlfsConfirm"></Picker>
    <Picker
      :columns="jlzzflcols"
      required="1"
      label="计量装置分类"
      placeholder="计量装置分类"
      @res="jlzzflConfirm"
    ></Picker>
    <Picker :columns="dydjcols" required="1" label="电压等级" placeholder="电压等级" @res="dydjConfirm"></Picker>
    <van-field v-model="data.jldjs" label="计量点级数" placeholder="请输入计量点级数" />
    <van-field v-model="data.xl" label="线路" placeholder="请输入线路" />
    <van-field v-model="data.tq" label="台区" placeholder="请输入台区" />
    <Picker :columns="jxfscols" required="1" label="接线方式" placeholder="接线方式" @res="jxfsConfirm"></Picker>
    <Picker
      :columns="dljhdflcols"
      required="0"
      label="电量交换点分类"
      placeholder="电量交换点分类"
      @res="dljhdflConfirm"
    ></Picker>
    <Picker :columns="zytlxcols" required="1" label="主用途类型" placeholder="主用途类型" @res="zytlxConfirm"></Picker>
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <Picker
      :columns="sfjbzbtjcols"
      required="1"
      label="是否具备装表条件"
      placeholder="是否具备装表条件"
      @res="sfjbzbtjConfirm"
    ></Picker>
    <Picker
      :columns="sfpsbrqcols"
      required="1"
      label="是否配设备容器"
      placeholder="是否配设备容器"
      @res="sfpsbrqConfirm"
    ></Picker>
    <Picker
      :columns="sffqcjllccols"
      required="1"
      label="是否发起采集类流程"
      placeholder="是否发起采集类流程"
      @res="sffqcjllcConfirm"
    ></Picker>
    <van-field v-model="data.zbwz" label="装表位置" placeholder="请输入装表位置" />
    <Picker :columns="sfktdcols" required="1" label="是否可停电" placeholder="是否可停电" @res="sfktdConfirm"></Picker>
    <van-field v-model="data.jlddz" label="计量点地址" placeholder="请输入计量点地址" />
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="default" block @click="()=>{this.$router.go(-1)}" :square="true">返回</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";

const jldxzcols = [{ text: "结算", key: 1 }];
const jldflcols = [{ text: "用电客户", key: 1 }];
const jldssccols = [{ text: "变电站内", key: 1 }];
const jlfscols = [{ text: "高供高计", key: 1 }];
const jlzzflcols = [{ text: "暂无", key: 1 }];
const dydjcols = [{ text: "交流20Kv", key: 1 }];
const jxfscols = [{ text: "三相三线", key: 1 }];
const dljhdflcols = [{ text: "暂无", key: 1 }];
const zytlxcols = [{ text: "台区供电考核", key: 1 }];
const bgsmcols = [{ text: "变更", key: 1 }];
const sfjbzbtjcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const sfpsbrqcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const sffqcjllccols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const sfktdcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
export default {
  data() {
    return {
      jldxzcols: jldxzcols,
      jldflcols: jldflcols,
      jldssccols: jldssccols,
      jlfscols: jlfscols,
      jlzzflcols: jlzzflcols,
      dydjcols: dydjcols,
      jxfscols: jxfscols,
      dljhdflcols: dljhdflcols,
      zytlxcols: zytlxcols,
      bgsmcols: bgsmcols,
      sfjbzbtjcols: sfjbzbtjcols,
      sfpsbrqcols: sfpsbrqcols,
      sffqcjllccols: sffqcjllccols,
      sfktdcols: sfktdcols,
      data: {
        jldbh: "",
        jldmc: "",
        jldxz: "",
        jldxzKey: "",
        jldfl: "",
        jldflKey: "",
        jldssc: "",
        jldsscKey: "",
        jlfs: "",
        jlfsKey: "",
        jlzzfl: "",
        jlzzflKey: "",
        dydj: "",
        dydjKey: "",
        jldjs: "",
        xl: "",
        tq: "",
        jxfs: "",
        jxfsKey: "",
        dljhdfl: "",
        dljhdflKey: "",
        zytlx: "",
        zytlxKey: "",
        bgsm: "",
        bgsmKey: "",
        sfjbzbtj: "",
        sfjbzbtjKey: "",
        sfpsbrq: "",
        sfpsbrqKey: "",
        sffqcjllc: "",
        sffqcjllcKey: "",
        zbwz: "",
        sfktd: "",
        sfktdKey: "",
        jlddz: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    jldxzConfirm(value, key) {
      this.data.jldxz = value;
      this.data.jldxzKey = key;
    },
    jldflConfirm(value, key) {
      this.data.jldfl = value;
      this.data.jldflKey = key;
    },
    jldsscConfirm(value, key) {
      this.data.jldssc = value;
      this.data.jldsscKey = key;
    },
    jlfsConfirm(value, key) {
      this.data.jlfs = value;
      this.data.jlfsKey = key;
    },
    jlzzflConfirm(value, key) {
      this.data.jlzzfl = value;
      this.data.jlzzflKey = key;
    },
    dydjConfirm(value, key) {
      this.data.dydj = value;
      this.data.dydjKey = key;
    },
    jxfsConfirm(value, key) {
      this.data.jxfs = value;
      this.data.jxfsKey = key;
    },
    dljhdflConfirm(value, key) {
      this.data.dljhdfl = value;
      this.data.dljhdflKey = key;
    },
    zytlxConfirm(value, key) {
      this.data.zytlx = value;
      this.data.zytlxKey = key;
    },
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    },
    sfjbzbtjConfirm(value, key) {
      this.data.sfjbzbtj = value;
      this.data.sfjbzbtjKey = key;
    },
    sfpsbrqConfirm(value, key) {
      this.data.sfpsbrq = value;
      this.data.sfpsbrqKey = key;
    },
    sffqcjllcConfirm(value, key) {
      this.data.sffqcjllc = value;
      this.data.sffqcjllcKey = key;
    },
    sfktdConfirm(value, key) {
      this.data.sfktd = value;
      this.data.sfktdKey = key;
    }
  }
};
</script>