<template>
  <div class="profile">
    <van-field v-model="data.num" label="申请编号" placeholder="请输入申请编号" />
    <van-field
      v-model="data.ctime"
      label="受理日期"
      @click="()=>{
      this.showCtime = true}"
      placeholder="点击选择受理日期"
      :readonly="true"
      required
    />
    <van-field v-model="data.worktype" required label="业务类型" placeholder="请输入业务类型" />
    <van-field v-model="data.usernum" required label="用户编号" placeholder="请输入用户编号" />
    <van-field
      v-model="data.mode"
      label="申请方式"
      @click="()=>{this.showMode = true;}"
      placeholder="选择申请方式"
      :readonly="true"
      required
    />
    <van-field v-model="data.unit" required label="供电单位" placeholder="请输入供电单位" />
    <van-field
      v-model="data.idcardtype"
      label="证件类型"
      @click="()=>{this.showIdCardType = true}"
      placeholder="请选择证件类型"
      :readonly="true"
    />
    <van-field v-model="data.realname" label="证件持有人姓名" placeholder="请输入证件持有人姓名" />
    <van-field v-model="data.idnum" label="证件号码" placeholder="请输入证件号码" />
    <van-field v-model="data.username" label="用户名称" placeholder="请输入用户名称" />
    <van-field
      v-model="data.etype"
      label="用电类别"
      @click="()=>{this.showEType = true}"
      placeholder="请选择用电类别"
      :readonly="true"
    />
    <van-field v-model="data.eaddr" label="用电地址" placeholder="请输入用电地址" />
    <van-field v-model="data.wtype" label="行业分类" placeholder="请输入行业分类" />
    <van-field
      v-model="data.voltage"
      @click="()=>{this.showVoltage = true}"
      label="供电电压"
      placeholder="请选择供电电压"
      :readonly="true"
    />
    <van-field v-model="data.original" label="原有合同量" placeholder="请输入原有合同量kVA" />
    <van-field
      v-model="data.cetype"
      label="改类后用电类别"
      @click="()=>{this.showCetype = true}"
      placeholder="请选择改类后用电类别"
      :readonly="true"
      required
    />
    <van-field
      v-model="data.comments"
      type="textarea"
      autosize
      rows="4"
      label="申请备注"
      placeholder="请输入申请备注"
    />
    <van-cell-group>
      <van-cell title="拍照上传" />
    </van-cell-group>
    <van-uploader />
    <div class="btn-group">
      <van-button type="primary" block :square="true">保存</van-button>
    </div>
    <van-popup v-model="showCtime" position="bottom">
      <van-datetime-picker
        v-model="tempCtime"
        type="date"
        @confirm="confirmCtime"
        @cancel="()=>{this.showCtime = false;}"
        title="受理日期"
      />
    </van-popup>
    <van-popup v-model="showMode" position="bottom">
      <van-picker
        :columns="modeColumns"
        @confirm="onModeConfirm"
        @cancel="()=>{this.showMode = false}"
        show-toolbar
        title="申请方式"
      />
    </van-popup>
    <van-popup v-model="showIdCardType" position="bottom">
      <van-picker
        :columns="idTypeCols"
        @confirm="onidTypeConfirm"
        @cancel="()=>{this.showIdCardType = false}"
        show-toolbar
        title="证件类型"
      />
    </van-popup>
    <van-popup v-model="showEType" position="bottom">
      <van-picker
        :columns="eTypeCols"
        @confirm="onETypeConfirm"
        @cancel="()=>{this.showEType = false}"
        show-toolbar
        title="用电类别"
      />
    </van-popup>
    <van-popup v-model="showCetype" position="bottom">
      <van-picker
        :columns="ceTypeCols"
        @confirm="onCeTypeConfirm"
        @cancel="()=>{this.showCetype = false}"
        show-toolbar
        title="改类后用电类别"
      />
    </van-popup>
    <van-popup v-model="showVoltage" position="bottom">
      <van-picker
        :columns="voltageCols"
        @confirm="onVoltageConfirm"
        @cancel="()=>{this.showVoltage = false}"
        show-toolbar
        title="供电电压"
      />
    </van-popup>
  </div>
</template>
<script>
import formatDate from "../../../../utils/formatdate";
const idTypeCols = [
  { text: "身份证", key: 1 },
  { text: "护照", key: 2 },
  { text: "军官证", key: 3 }
];
const modeColumns = [{ text: "柜台服务", key: "1" }];
const eTypeCols = [{ text: "城镇居民生活用电", key: "1" }];
const ceTypeCols = [{ text: "商业用电", key: "1" }];
const voltageCols = [
  { text: "220v", key: "1" },
  { text: "380v", key: "2" }
];
export default {
  data() {
    return {
      showCtime: false,
      tempCtime: "",
      showMode: false,
      showIdCardType: false,
      showEType: false,
      showCetype: false,
      showVoltage: false,
      modeColumns: modeColumns,
      idTypeCols: idTypeCols,
      eTypeCols: eTypeCols,
      ceTypeCols: ceTypeCols,
      voltageCols: voltageCols,
      data: {
        num: "",
        ctime: "",
        worktype: "",
        usernum: "",
        mode: "",
        modekey: 0,
        unit: "",
        idcardtype: "",
        idcardtypekey: 0,
        realname: "",
        idnum: "",
        username: "",
        etype: "",
        etypekey: 0,
        eaddr: "",
        wtype: "",
        voltage: "",
        voltagekey: 0,
        original: "",
        cetype: "",
        cetypekey: 0,
        comments: ""
      }
    };
  },
  methods: {
    confirmCtime() {
      this.data.ctime = formatDate(this.tempCtime, "yyyy/MM/dd");
      this.showCtime = false;
    },
    onModeConfirm(value) {
      this.data.mode = value.text;
      this.data.modekey = value.key;
      this.showMode = false;
    },
    onidTypeConfirm(value) {
      this.data.idcardtype = value.text;
      this.data.idcardtypekey = value.key;
      this.showIdCardType = false;
    },
    onETypeConfirm(value) {
      this.data.etype = value.text;
      this.data.etypekey = value.key;
      this.showEType = false;
    },
    onCeTypeConfirm(value) {
      this.data.cetype = value.text;
      this.data.cetypekey = value.key;
      this.showCetype = false;
    },
    onVoltageConfirm(value) {
      this.data.voltage = value.text;
      this.data.voltagekey = value.key;
      this.showVoltage = false;
    }
  },
  computed: {}
};
</script>
<style lang="scss">
.btn-group {
  padding: 4px;
  .btn-d {
    padding: 2px 0;
  }
}
</style>