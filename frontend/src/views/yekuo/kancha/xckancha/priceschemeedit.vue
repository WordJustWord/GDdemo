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
      <div class="btn-d"></div>
      <van-button type="default" block @click="()=>{this.$router.go(-1)}" :square="true">返回</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../components/picker";

const ydlbcols = [{ text: "城镇居民生活用电", key: 1 }];
const zxfgbzcols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const glysbzcols = [{ text: "不考核", key: 1 }];
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