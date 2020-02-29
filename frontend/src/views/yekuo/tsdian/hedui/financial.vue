<template>
  <div class="hedui-financial">
    <van-field
      v-model="data.powerNoticeMode"
      :readonly="true"
      @click="()=>{this.showDFTZFS = false}"
      label="电费通知方式"
      placeholder="电费通知方式"
    />
    <van-field
      v-model="data.settlementMode"
      :readonly="true"
      @click="()=>{this.showDFJSFS = false}"
      label="电费结算方式"
      placeholder="电费结算方式"
    />
    <van-field
      v-model="data.tempPaymentNum"
      :readonly="true"
      label="临时缴费关系号"
      placeholder="请输入临时缴费关系号"
    />
    <van-field v-model="data.Paytype" :readonly="true" label="缴费方式" placeholder="请输入缴费方式" />
    <van-field v-model="data.mainBack" :readonly="true" label="开户银行" placeholder="请输入开户银行" />
    <van-field v-model="data.mainAccount" :readonly="true" label="开户账号" placeholder="请输入开户账号" />
    <van-field v-model="data.accountName" :readonly="true" label="账户名称" placeholder="请输入账户名称" />
    <van-field
      v-model="data.ticketType"
      :readonly="true"
      @click="()=>{this.showPJLX = false}"
      label="票据类型"
      placeholder="票据类型"
    />
    <van-field
      v-model="data.paymentProtocol"
      :readonly="true"
      label="收费协议号"
      placeholder="请输入收费协议号"
    />
    <van-field v-model="data.taxNum" :readonly="true" label="增值税号" placeholder="请输入增值税号" />
    <van-field v-model="data.taxName" :readonly="true" label="增值税名" placeholder="请输入增值税名" />
    <van-field v-model="data.taxAccount" :readonly="true" label="增值税账号" placeholder="请输入增值税账号" />
    <van-field v-model="data.taxBank" :readonly="true" label="增值税银行" placeholder="请输入增值税银行" />
    <van-field v-model="data.regAddr" :readonly="true" label="注册地址" placeholder="请输入注册地址" />
    <van-field
      v-model="data.comments"
      :readonly="true"
      type="textarea"
      rows="4"
      label="备注"
      placeholder="请输入备注"
    />
    <van-popup v-model="showDFTZFS" position="bottom">
      <van-picker
        :columns="dftzfsCols"
        :readonly="true"
        @confirm="onDftzfsConfirm"
        @cancel="()=>{this.showDFTZFS = false}"
        show-toolbar
        title="电费通知方式"
      />
    </van-popup>
    <van-popup v-model="showPJLX" position="bottom">
      <van-picker
        :columns="pjlxCols"
        :readonly="true"
        @confirm="onPjlxConfirm"
        @cancel="()=>{this.showPJLX = false}"
        show-toolbar
        title="票据类型"
      />
    </van-popup>
    <van-popup v-model="showDFJSFS" position="bottom">
      <van-picker
        :columns="dfjsfsCols"
        :readonly="true"
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