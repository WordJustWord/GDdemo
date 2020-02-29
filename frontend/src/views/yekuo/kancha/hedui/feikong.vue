<template>
  <div class="hedui-feikong">
    <van-field
      v-model="is_RemoteFk"
      :readonly="true"
      @click="()=>{this.showYCFK = true}"
      label="是否远程费控"
      placeholder="是否远程费控"
    />
    <van-field v-model="data.baseStrategy" label="基准策略" placeholder="请输入基准策略" />
    <van-field
      v-model="data.warningResolveMode"
      :readonly="true"
      @click="()=>{this.showYJCLFS = true}"
      label="预警处理方式"
      placeholder="预警处理方式"
    />
    <van-field
      v-model="data.powerCutMode"
      :readonly="true"
      @click="()=>{this.showTDFS = true}"
      label="停电方式"
      placeholder="停电方式"
    />
    <van-field
      v-model="data.powerRecoverMode"
      :readonly="true"
      @click="()=>{this.showFDFS = true}"
      label="复电方式"
      placeholder="复电方式"
    />
    <van-field
      v-model="data.earningType"
      :readonly="true"
      @click="()=>{this.showYSDKLX = true}"
      label="预收代扣类型"
      placeholder="预收代扣类型"
    />
    <van-field v-model="data.earningVal" label="预扣代扣值" placeholder="请输入预扣代扣值" />
    <van-field
      v-model="data.remindCode"
      :readonly="true"
      @click="()=>{this.showTXDM = true}"
      label="提醒代码"
      placeholder="提醒代码"
    />
    <van-field v-model="data.remindVal" label="提醒值" placeholder="请输入提醒值" />
    <van-field
      v-model="data.remindMode"
      :readonly="true"
      @click="()=>{this.showTXJSFS = true}"
      label="提醒接受方式"
      placeholder="提醒接受方式"
    />
    <van-field
      v-model="data.remindTarget"
      :readonly="true"
      @click="()=>{this.showTXMB = true}"
      label="提醒目标"
      placeholder="提醒目标"
    />
    <van-field
      v-model="is_RecoverInTurn"
      :readonly="true"
      @click="()=>{this.showSFLCTD = true}"
      label="是否按轮次停电"
      placeholder="是否按轮次停电"
    />
    <van-field
      v-model="data.ExceptionStatus"
      :readonly="true"
      @click="()=>{this.showYCCLZT = true}"
      label="异常处理状态"
      placeholder="异常处理状态"
    />
    <div class="btn-group">
      <van-button type="primary" block :square="true">保存</van-button>
    </div>
    <van-popup v-model="showYCFK" position="bottom">
      <van-picker
        :columns="ycfkCols"
        @confirm="onYcfkConfirm"
        @cancel="()=>{this.showYCFK = false}"
        show-toolbar
        title="是否远程费控"
      />
    </van-popup>
    <van-popup v-model="showYJCLFS" position="bottom">
      <van-picker
        :columns="yjclfsCols"
        @confirm="onYjclfsConfirm"
        @cancel="()=>{this.showYJCLFS = false}"
        show-toolbar
        title="预警处理方式"
      />
    </van-popup>
    <van-popup v-model="showTDFS" position="bottom">
      <van-picker
        :columns="tdfsCols"
        @confirm="onTdfsConfirm"
        @cancel="()=>{this.showTDFS = false}"
        show-toolbar
        title="停电方式"
      />
    </van-popup>
    <van-popup v-model="showFDFS" position="bottom">
      <van-picker
        :columns="fdfsCols"
        @confirm="onFdfsConfirm"
        @cancel="()=>{this.showFDFS = false}"
        show-toolbar
        title="复电方式"
      />
    </van-popup>
    <van-popup v-model="showYSDKLX" position="bottom">
      <van-picker
        :columns="ysdklxCols"
        @confirm="onYsdklxConfirm"
        @cancel="()=>{this.showYSDKLX = false}"
        show-toolbar
        title="预收代扣类型"
      />
    </van-popup>
    <van-popup v-model="showTXDM" position="bottom">
      <van-picker
        :columns="txdmCols"
        @confirm="onTxdmConfirm"
        @cancel="()=>{this.showTXDM = false}"
        show-toolbar
        title="提醒代码"
      />
    </van-popup>
    <van-popup v-model="showTXJSFS" position="bottom">
      <van-picker
        :columns="txjsfsCols"
        @confirm="onTxjsfsConfirm"
        @cancel="()=>{this.showTXJSFS = false}"
        show-toolbar
        title="提醒接受方式"
      />
    </van-popup>
    <van-popup v-model="showTXMB" position="bottom">
      <van-picker
        :columns="txmbCols"
        @confirm="onTxmbConfirm"
        @cancel="()=>{this.showTXMB = false}"
        show-toolbar
        title="提醒目标"
      />
    </van-popup>
    <van-popup v-model="showSFLCTD" position="bottom">
      <van-picker
        :columns="sflctdCols"
        @confirm="onSflctdConfirm"
        @cancel="()=>{this.showSFLCTD = false}"
        show-toolbar
        title="是否按轮次停电"
      />
    </van-popup>
    <van-popup v-model="showYCCLZT" position="bottom">
      <van-picker
        :columns="ycclztCols"
        @confirm="onYcclztConfirm"
        @cancel="()=>{this.showYCCLZT = false}"
        show-toolbar
        title="异常处理状态"
      />
    </van-popup>
  </div>
</template>
<script>
const ycfkCols = [
  { text: "是", key: 1 },
  { text: "否", key: 2 }
];
const sflctdCols = [
  { text: "是", key: 1 },
  { text: "否", key: 2 }
];
const yjclfsCols = [{ text: "暂无", key: -1 }];
const tdfsCols = [{ text: "暂无", key: -1 }];
const fdfsCols = [{ text: "暂无", key: -1 }];
const ysdklxCols = [{ text: "暂无", key: -1 }];
const txdmCols = [{ text: "暂无", key: -1 }];
const txjsfsCols = [{ text: "暂无", key: -1 }];
const txmbCols = [{ text: "暂无", key: -1 }];
const ycclztCols = [{ text: "暂无", key: -1 }];
export default {
  data() {
    return {
      showYCFK: false,
      ycfkCols: ycfkCols,
      showYJCLFS: false,
      yjclfsCols: yjclfsCols,
      showTDFS: false,
      tdfsCols: tdfsCols,
      showFDFS: false,
      fdfsCols: fdfsCols,
      showYSDKLX: false,
      ysdklxCols: ysdklxCols,
      showTXDM: false,
      txdmCols: txdmCols,
      showTXJSFS: false,
      txjsfsCols: txjsfsCols,
      showTXMB: false,
      txmbCols: txmbCols,
      showSFLCTD: false,
      sflctdCols: sflctdCols,
      showYCCLZT: false,
      ycclztCols: ycclztCols,
      data: {
        isRemoteFk: "",
        baseStrategy: "",
        warningResolveMode: "",
        warningResolveModeKey: "",
        powerCutMode: "",
        powerCutModeKey: "",
        powerRecoverMode: "",
        powerRecoverModeKey: "",
        earningType: "",
        earningTypeKey: "",
        earningVal: "",
        remindCode: "",
        remindCodeKey: "",
        remindVal: "",
        remindMode: "",
        remindModeKey: "",
        remindTarget: "",
        remindTargetKey: "",
        isRecoverInTurn: "",
        ExceptionStatus: "",
        ExceptionStatusKey: ""
      }
    };
  },
  methods: {
    onYcfkConfirm(value) {
      this.data.isRemoteFk = value.key;
      this.showYCFK = false;
    },
    onYjclfsConfirm(value) {
      this.data.warningResolveMode = value.text;
      this.data.warningResolveModeKey = value.key;
      this.showYJCLFS = false;
    },
    onTdfsConfirm(value) {
      this.data.powerCutMode = value.text;
      this.data.powerCutModeKey = value.key;
      this.showTDFS = false;
    },
    onFdfsConfirm(value) {
      this.data.powerRecoverMode = value.text;
      this.data.powerRecoverModeKey = value.key;
      this.showFDFS = false;
    },
    onYsdklxConfirm(value) {
      this.data.earningType = value.text;
      this.data.earningTypeKey = value.key;
      this.showYSDKLX = false;
    },
    onTxdmConfirm(value) {
      this.data.remindCode = value.text;
      this.data.remindCodeKey = value.key;
      this.showTXDM = false;
    },
    onTxjsfsConfirm(value) {
      this.data.remindMode = value.text;
      this.data.remindModeKey = value.key;
      this.showTXJSFS = false;
    },
    onTxmbConfirm(value) {
      this.data.remindTarget = value.text;
      this.data.remindTargetKey = value.key;
      this.showTXMB = false;
    },
    onSflctdConfirm(value) {
      this.data.isRecoverInTurn = value.key;
      this.showSFLCTD = false;
    },
    onYcclztConfirm(value) {
      this.data.ExceptionStatus = value.text;
      this.data.ExceptionStatusKey = value.key;
      this.showYCCLZT = false;
    }
  },
  computed: {
    is_RemoteFk: function() {
      return this.data.isRemoteFk == 1 ? "是" : "否";
    },
    is_RecoverInTurn: function() {
      return this.data.isRecoverInTurn == 1 ? "是" : "否";
    }
  }
};
</script>