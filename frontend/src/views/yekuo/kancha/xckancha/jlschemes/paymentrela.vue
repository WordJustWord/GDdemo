<template>
  <div class="payment-relationship">
    <Picker :columns="jfgxcols" required="1" label="计费关系" placeholder="计费关系" @res="jfgxConfirm"></Picker>
    <Picker
      :columns="fjldbhcols"
      required="1"
      label="父计量点编号"
      placeholder="父计量点编号"
      @res="fjldbhConfirm"
    ></Picker>
    <Picker
      :columns="fjldjlfxcols"
      required="0"
      label="父计量点计量方向"
      placeholder="父计量点计量方向"
      @res="fjldjlfxConfirm"
    ></Picker>
    <van-field v-model="data.gxblz" label="关系比例值" placeholder="请输入关系比例值" />
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
import Picker from "../../../../../components/picker";

const jfgxcols = [{ text: "主分", key: 1 }];
const fjldbhcols = [{ text: "暂无", key: 1 }];
const fjldjlfxcols = [{ text: "正向电量", key: 1 }];

export default {
  data() {
    return {
      jfgxcols: jfgxcols,
      fjldbhcols: fjldbhcols,
      fjldjlfxcols: fjldjlfxcols,
      data: {
        jfgx: "",
        jfgxKey: "",
        fjldbh: "",
        fjldbhKey: "",
        fjldjlfx: "",
        fjldjlfxKey: "",
        gxblz: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    jfgxConfirm(value, key) {
      this.data.jfgx = value;
      this.data.jfgxKey = key;
    },
    fjldbhConfirm(value, key) {
      this.data.fjldbh = value;
      this.data.fjldbhKey = key;
    },
    fjldjlfxConfirm(value, key) {
      this.data.fjldjlfx = value;
      this.data.fjldjlfxKey = key;
    }
  }
};
</script>