<template>
  <div class="hedui-financial">
    <van-field
      v-model="data.powerNoticeMode"
      :readonly="true"
      @click="()=>{this.showDFTZFS = true}"
      label="电费通知方式"
      placeholder="电费通知方式"
    />
    <van-field
      v-model="data.settlementMode"
      :readonly="true"
      @click="()=>{this.showDFJSFS = true}"
      label="电费结算方式"
      placeholder="电费结算方式"
    />
    <van-field v-model="data.tempPaymentNum" label="临时缴费关系号" placeholder="请输入临时缴费关系号" />
    <van-field v-model="data.Paytype" label="缴费方式" placeholder="请输入缴费方式" />
    <van-field v-model="data.mainBack" label="开户银行" placeholder="请输入开户银行" />
    <van-field v-model="data.mainAccount" label="开户账号" placeholder="请输入开户账号" />
    <van-field v-model="data.accountName" label="账户名称" placeholder="请输入账户名称" />
    <van-field
      v-model="data.ticketType"
      :readonly="true"
      @click="()=>{this.showPJLX = true}"
      label="票据类型"
      placeholder="票据类型"
    />
    <van-field v-model="data.paymentProtocol" label="收费协议号" placeholder="请输入收费协议号" />
    <van-field v-model="data.taxNum" label="增值税号" placeholder="请输入增值税号" />
    <van-field v-model="data.taxName" label="增值税名" placeholder="请输入增值税名" />
    <van-field v-model="data.taxAccount" label="增值税账号" placeholder="请输入增值税账号" />
    <van-field v-model="data.taxBank" label="增值税银行" placeholder="请输入增值税银行" />
    <van-field v-model="data.regAddr" label="注册地址" placeholder="请输入注册地址" />
    <van-field v-model="data.comments" type="textarea" rows="4" label="备注" placeholder="请输入备注" />
    <div class="btn-group">
      <van-button type="primary" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="default" block @click="()=>{this.$router.go(-1)}" :square="true">返回</van-button>
    </div>
    <van-popup v-model="showDFTZFS" position="bottom">
      <van-picker
        :columns="dftzfsCols"
        @confirm="onDftzfsConfirm"
        @cancel="()=>{this.showDFTZFS = false}"
        show-toolbar
        title="电费通知方式"
      />
    </van-popup>
    <van-popup v-model="showPJLX" position="bottom">
      <van-picker
        :columns="pjlxCols"
        @confirm="onPjlxConfirm"
        @cancel="()=>{this.showPJLX = false}"
        show-toolbar
        title="票据类型"
      />
    </van-popup>
    <van-popup v-model="showDFJSFS" position="bottom">
      <van-picker
        :columns="dfjsfsCols"
        @confirm="onDfjsfsConfirm"
        @cancel="()=>{this.showDFJSFS = false}"
        show-toolbar
        title="电费结算方式"
      />
    </van-popup>
  </div>
</template>
<script>
const dftzfsCols = [{ text: "暂无", key: 1 }];
const dfjsfsCols = [{ text: "暂无", key: 1 }];
const pjlxCols = [{ text: "暂无", key: 1 }];
export default {
  data() {
    return {
      showDFTZFS: false,
      dftzfsCols: dftzfsCols,
      showDFJSFS: false,
      dfjsfsCols: dfjsfsCols,
      showPJLX: false,
      pjlxCols: pjlxCols,
      data: {
        powerNoticeMode: "",
        powerNoticeModeKey: "",
        settlementMode: "",
        settlementModeKey: "",
        tempPaymentNum: "",
        Paytype: "",
        mainBack: "",
        mainAccount: "",
        accountName: "",
        ticketType: "",
        ticketTypeKey: "",
        paymentProtocol: "",
        taxNum: "",
        taxName: "",
        taxAccount: "",
        taxBank: "",
        regAddr: "",
        comments: ""
      }
    };
  },
  methods: {
    onDftzfsConfirm(value) {
      this.data.powerNoticeMode = value.text;
      this.data.powerNoticeModeKey = value.key;
      this.showDFTZFS = false;
    },
    onPjlxConfirm(value) {
      this.data.ticketType = value.text;
      this.data.ticketTypeKey = value.key;
      this.showPJLX = false;
    },
    onDfjsfsConfirm(value) {
      this.data.settlementMode = value.text;
      this.data.settlementModeKey = value.key;
      this.showDFJSFS = false;
    }
  }
};
</script>