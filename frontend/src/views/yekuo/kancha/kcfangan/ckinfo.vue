<template>
  <div class="fangan-ckinfo">
    <van-field v-model="data.staff" :required="true" label="查看人员" placeholder="请输入查看人员" />
    <van-field
      v-model="data.ProspectingTime"
      label="查勘日期"
      @click="()=>{
      this.showPtime = true}"
      placeholder="点击选择查勘日期"
      :readonly="true"
      required
    />
    <Picker
      :columns="ywwycols"
      required="0"
      label="有无违约用电行为"
      placeholder="有无违约用电行为"
      @res="onYwwyConfirm"
    ></Picker>
    <van-field v-model="data.clientManager" label="客户经理" placeholder="请输入客户经理" />
    <Picker
      :columns="zlqqcols"
      required="1"
      label="必备资料是否齐全"
      placeholder="必备资料是否齐全"
      @res="onZlqyConfirm"
    ></Picker>
    <Picker
      :columns="sfzykhcols"
      required="1"
      label="是否为重要客户"
      placeholder="是否为重要客户"
      @res="onSfzykhConfirm"
    ></Picker>
    <Picker :columns="kcyjcols" required="1" label="勘查意见" placeholder="勘查意见" @res="onKcyjConfirm"></Picker>
    <van-field v-model="data.behaviorDesc" label="用电行为描述" placeholder="请输入用电行为描述" />
    <van-field v-model="data.comments" label="勘查备注" placeholder="请输入勘查备注" />
    <van-field v-model="data.longitude" label="经度" placeholder="请输入经度" />
    <van-field v-model="data.latitude" label="纬度" placeholder="请输入纬度" />
    <van-cell-group>
      <van-cell title="现场拍照" />
    </van-cell-group>
    <van-uploader />
    <div class="btn-group">
      <van-button type="primary" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="default" block @click="()=>{this.$router.go(-1)}" :square="true">返回</van-button>
    </div>
    <van-popup v-model="showPtime" position="bottom">
      <van-datetime-picker
        v-model="tempPtime"
        type="datetime"
        @confirm="onConfirmPtime"
        @cancel="()=>{this.showPtime = false;}"
        title="查勘日期"
      />
    </van-popup>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";
import formatDate from "../../../../utils/formatdate";
const ywwycols = [
  { text: "有", key: "1" },
  { text: "无", key: "0" }
];
const zlqqcols = [
  { text: "是", key: "1" },
  { text: "否", key: "0" }
];
const sfzykhcols = [
  { text: "是", key: "1" },
  { text: "否", key: "0" }
];
const kcyjcols = [
  { text: "同意", key: "1" },
  { text: "不同意", key: "0" }
];
export default {
  data() {
    return {
      active: [0],
      showPtime: false,
      tempPtime: "",
      ywwycols: ywwycols,
      zlqqcols: zlqqcols,
      sfzykhcols: sfzykhcols,
      kcyjcols: kcyjcols,
      data: {
        staff: "",
        ProspectingTime: "",
        haveBC: "",
        haveBCKey: "",
        clientManager: "",
        haveAllFiles: "",
        haveAllFilesKey: "",
        isVip: "",
        isVipKey: "",
        ProspectingOpinion: "",
        ProspectingOpinionKey: "",
        behaviorDesc: "",
        comments: "",
        longitude: "",
        latitude: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    onConfirmPtime() {
      this.data.ProspectingTime = formatDate(
        this.tempPtime,
        "yyyy/MM/dd hh:mm"
      );
      this.showPtime = false;
    },
    onYwwyConfirm(value, key) {
      this.data.haveBC = value;
      this.data.haveBCKey = key;
    },
    onZlqyConfirm(value, key) {
      this.data.haveAllFiles = value;
      this.data.haveAllFilesKey = key;
    },
    onSfzykhConfirm(value, key) {
      this.data.isVip = value;
      this.data.isVipKey = key;
    },
    onKcyjConfirm(value, key) {
      this.data.ProspectingOpinion = value;
      this.data.ProspectingOpinionKey = key;
    }
  }
};
</script>