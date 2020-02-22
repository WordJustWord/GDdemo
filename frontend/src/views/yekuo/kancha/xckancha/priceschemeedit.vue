<template>
  <div class="price-scheme-edit">
    <van-field v-model="data.djhyfl" :required="true" label="电价行业分类" placeholder="请输入电价行业分类" />
    <Picker :columns="ydlbcols" required="1" label="用电类别" placeholder="用电类别" @res="ydlbConfirm"></Picker>
    <van-field v-model="data.zxdj" :required="true" label="执行电价" placeholder="请输入执行电价" />
    <Picker
      :columns="zxfgbzcols"
      required="1"
      label="执行峰谷标志"
      placeholder="执行峰谷标志"
      @res="zxfgbzConfirm"
    ></Picker>
    <Picker
      :columns="glysbzcols"
      required="1"
      label="功率因数标准"
      placeholder="功率因数标准"
      @res="glysbzConfirm"
    ></Picker>
    <van-field v-model="data.gdll" label="固定力率" placeholder="请输入固定力率" />
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";

const ydlbcols = [
  { text: "考核", key: "1" },
  { text: "大工业用电", key: "2" },
  { text: "大工业中小化肥", key: "3" },
  { text: "大工业其他优待", key: "4" },
  { text: "居民生活用电", key: "5" },
  { text: "乡村居民生活用电", key: "6" },
  { text: "城镇居民生活用电", key: "7" },
  { text: "中小学教学用电", key: "8" },
  { text: "农业生产用电", key: "9" },
  { text: "农业排灌", key: "10" },
  { text: "贫困县农业排灌用电", key: "11" },
  { text: "非居民照明", key: "12" },
  { text: "非工业", key: "13" },
  { text: "普通工业", key: "14" },
  { text: "普通工业中小化肥", key: "15" },
  { text: "商业用电", key: "16" },
  { text: "趸售大工业", key: "17" },
  { text: "趸售普通工业", key: "18" },
  { text: "趸售非居民", key: "19" },
  { text: "趸售居民生活用电", key: "20" },
  { text: "趸售农业生产用电", key: "21" },
  { text: "趸售商业用电", key: "22" },
  { text: "大用户直购电", key: "23" }
];
const zxfgbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const glysbzcols = [
  { text: "不考核", key: 1 },
  { text: "考核标准0.8", key: 2 },
  { text: "考核标准0.85", key: 3 },
  { text: "考核标准0.9", key: 4 }
];
const bgsmcols = [{ text: "新增", key: 1 }];
export default {
  data() {
    return {
      ydlbcols: ydlbcols,
      zxfgbzcols: zxfgbzcols,
      glysbzcols: glysbzcols,
      bgsmcols: bgsmcols,
      data: {
        djhyfl: "",
        ydlb: "",
        ydlbKey: "",
        zxdj: "",
        zxfgbz: "",
        zxfgbzKey: "",
        glysbz: "",
        glysbzKey: "",
        gdll: "",
        bgsm: "",
        bgsmKey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    ydlbConfirm(value, key) {
      this.data.ydlb = value;
      this.data.ydlbKey = key;
    },
    zxfgbzConfirm(value, key) {
      this.data.zxfgbz = value;
      this.data.zxfgbzKey = key;
    },
    glysbzConfirm(value, key) {
      this.data.glysbz = value;
      this.data.glysbzKey = key;
    },
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    }
  }
};
</script>