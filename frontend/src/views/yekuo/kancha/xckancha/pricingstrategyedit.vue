<template>
  <div class="pricing-strategy-edit">
    <Picker
      :columns="djcllxcols"
      required="1"
      label="定价策略类型"
      placeholder="定价策略类型"
      @res="djcllxConfirm"
    ></Picker>
    <Picker
      :columns="jbdfjsfscols"
      required="1"
      label="基本电费计算方式"
      placeholder="基本电费计算方式"
      @res="jbdfjsfsConfirm"
    ></Picker>
    <van-field v-model="data.xldz" label="需量定值" placeholder="请输入需量定值" />
    <Picker
      :columns="glyskhfscols"
      required="1"
      label="功率因数考核方式"
      placeholder="功率因数考核方式"
      @res="glyskhfsConfirm"
    ></Picker>
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
const djcllxcols = [{ text: "两部制", key: 1 }];
const jbdfjsfscols = [{ text: "不计算", key: 1 }];
const glyskhfscols = [{ text: "标准考核", key: 1 }];
export default {
  data() {
    return {
      djcllxcols: djcllxcols,
      jbdfjsfscols: jbdfjsfscols,
      glyskhfscols: glyskhfscols,
      data: {
        djcllx: "",
        djcllxKey: "",
        jbdfjsfs: "",
        jbdfjsfsKey: "",
        xldz: "",
        glyskhfs: "",
        glyskhfsKey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    djcllxConfirm(value, key) {
      this.data.djcllx = value;
      this.data.djcllxKey = key;
    },
    jbdfjsfsConfirm(value, key) {
      this.data.jbdfjsfs = value;
      this.data.jbdfjsfsKey = key;
    },
    glyskhfsConfirm(value, key) {
      this.data.glyskhfs = value;
      this.data.glyskhfsKey = key;
    }
  }
};
</script>