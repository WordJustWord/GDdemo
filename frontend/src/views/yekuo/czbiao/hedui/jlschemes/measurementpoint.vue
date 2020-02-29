<template>
  <div class="measurement-point">
    <Picker :columns="zllxcols" required="0" label="资料类型" placeholder="资料类型" @res="zllxConfirm"></Picker>
    <van-field v-model="data.zlmc" label="资料名称" placeholder="请输入资料名称" />
    <TimePicker
      label="上传日期"
      placeholder="选择上传日期"
      datetype="datetime"
      required="0"
      patten="yyyy/MM/dd hh:mm"
      @res="getResult"
    ></TimePicker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";
import TimePicker from "../../../../../components/timepicker";

const zllxcols = [{ text: "暂无", key: 1 }];
export default {
  data() {
    return {
      zllxcols: zllxcols,
      data: {
        zllx: "",
        zllxKey: "",
        zlmc: "",
        scrq: ""
      }
    };
  },
  components: {
    Picker,
    TimePicker
  },
  methods: {
    getResult(value) {
      this.data.scrq = value;
    },
    zllxConfirm(value, key) {
      this.data.zllx = value;
      this.data.zllxKey = key;
    }
  }
};
</script>