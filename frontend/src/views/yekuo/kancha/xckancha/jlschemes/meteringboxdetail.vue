<template>
  <div class="metering-box-detail">
    <Picker :columns="bgsmcols" required="1" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <Picker :columns="lbcols" required="0" label="类别" placeholder="类别" @res="lbConfirm"></Picker>
    <van-field v-model="data.lx" label="类型" placeholder="请输入类型" />
    <Picker :columns="cllxcols" required="0" label="材料类型" placeholder="材料类型" @res="cllxConfirm"></Picker>
    <van-field v-model="data.hx" label="行数" placeholder="请输入行数" />
    <van-field v-model="data.lx" label="列数" placeholder="请输入列数" />
    <van-field v-model="data.gg" label="规格" placeholder="请输入规格" />
    <van-field v-model="data.jrd" label="接入点" placeholder="请输入接入点" />
    <van-field v-model="data.azdz" label="安装地址" placeholder="请输入安装地址" />
    <van-field v-model="data.jd" label="经度" placeholder="请输入经度" />
    <van-field v-model="data.wd" label="纬度" placeholder="请输入纬度" />
    <van-field v-model="data.gc" label="高程" placeholder="请输入高程" />
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";

const bgsmcols = [{ text: "新增", key: 1 }];
const lbcols = [{ text: "单体表箱", key: 1 }];
const cllxcols = [{ text: "铁", key: 1 }];
export default {
  data() {
    return {
      bgsmcols: bgsmcols,
      lbcols: lbcols,
      cllxcols: cllxcols,
      data: {
        bgsm: "",
        bgsmKey: "",
        lb: "",
        lbKey: "",
        lx: "",
        cllx: "",
        cllxKey: "",
        hx: "",
        lx: "",
        gg: "",
        jrd: "",
        azdz: "",
        jd: "",
        wd: "",
        gc: ""
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
    lbConfirm(value, key) {
      this.data.lb = value;
      this.data.lbKey = key;
    },
    cllxConfirm(value, key) {
      this.data.cllx = value;
      this.data.cllxKey = key;
    }
  }
};
</script>