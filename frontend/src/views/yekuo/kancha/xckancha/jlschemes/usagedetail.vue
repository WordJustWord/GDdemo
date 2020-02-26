<template>
  <div class="usage-detail">
    <Picker :columns="ytdmcols" required="0" label="用途代码" placeholder="用途代码" @res="ytdmConfirm"></Picker>
    <van-field v-model="data.ytbz" label="用途标识" placeholder="请输入用途标识" />
    <Picker :columns="bgsmcols" required="0" label="变更说明" placeholder="变更说明" @res="bgsmConfirm"></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";

const ytdmcols = [{ text: "售电侧结算", key: 1 }];
const bgsmcols = [
  { text: "新增", key: 1 },
  { text: "变更", key: 2 },
  { text: "删除", key: 3 }
];
export default {
  data() {
    return {
      ytdmcols: ytdmcols,
      bgsmcols: bgsmcols,
      data: {
        ytdm: "",
        ytdmKey: "",
        ytbz: "",
        bgsm: "",
        bgsmKey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    ytdmConfirm(value, key) {
      this.data.ytdm = value;
      this.data.ytdmKey = key;
    },
    bgsmConfirm(value, key) {
      this.data.bgsm = value;
      this.data.bgsmKey = key;
    }
  }
};
</script>