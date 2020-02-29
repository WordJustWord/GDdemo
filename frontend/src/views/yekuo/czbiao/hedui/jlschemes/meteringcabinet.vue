<template>
  <div class="metering-cabinet">
    <van-field v-model="data.zcbh" label="资产编号" placeholder="请输入资产编号" />
    <van-field v-model="data.ccbh" label="出厂编号" placeholder="请输入出厂编号" />
    <Picker :columns="cllxcols" required="0" label="材料类型" placeholder="材料类型" @res="cllxConfirm"></Picker>
    <Picker :columns="lbcols" required="0" label="类别" placeholder="类别" @res="lbConfirm"></Picker>
    <Picker :columns="ztcols" required="0" label="状态" placeholder="状态" @res="ztConfirm"></Picker>
    <Picker :columns="cqcols" required="0" label="产权" placeholder="产权" @res="cqConfirm"></Picker>
    <van-field v-model="data.gldw" label="管理单位" placeholder="请输入管理单位" />
    <van-field v-model="data.cqdw" label="产权单位" placeholder="请输入产权单位" />
    <van-field v-model="data.azwz" type="textarea" rows="4" label="安装位置" placeholder="请输入安装位置" />
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";

const cllxcols = [{ text: "暂无", key: 1 }];
const lbcols = [{ text: "单体表箱", key: 1 }];
const ztcols = [{ text: "运行", key: 1 }];
const cqcols = [{ text: "供电企业资产", key: 1 }];
export default {
  data() {
    return {
      cllxcols: cllxcols,
      lbcols: lbcols,
      ztcols: ztcols,
      cqcols: cqcols,
      data: {
        zcbh: "",
        ccbh: "",
        cllx: "",
        cllxKey: "",
        lb: "",
        lbKey: "",
        zt: "",
        ztKey: "",
        cq: "",
        cqKey: "",
        gldw: "",
        cqdw: "",
        azwz: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    cllxConfirm(value, key) {
      this.data.cllx = value;
      this.data.cllxKey = key;
    },
    lbConfirm(value, key) {
      this.data.lb = value;
      this.data.lbKey = key;
    },
    ztConfirm(value, key) {
      this.data.zt = value;
      this.data.ztKey = key;
    },
    cqConfirm(value, key) {
      this.data.cq = value;
      this.data.cqKey = key;
    }
  }
};
</script>