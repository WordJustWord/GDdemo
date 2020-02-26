<template>
  <div class="sddfa-detail">
    <van-field v-model="data.number" label="编号" placeholder="请输入编号" />
    <van-field v-model="data.pointName" :required="true" label="受电点名称" placeholder="请输入受电点名称" />
    <Picker
      :columns="sddlxcols"
      required="1"
      label="受电点类型"
      placeholder="受电点类型"
      @res="onSddlxConfirm"
    ></Picker>
    <Picker :columns="dysmcols" required="1" label="电源数目" placeholder="电源数目" @res="onDysmConfirm"></Picker>
    <Picker
      :columns="dylsfscols"
      required="0"
      label="电源连锁方式"
      placeholder="电源连锁方式"
      @res="onDylsfsConfirm"
    ></Picker>
    <Picker
      :columns="dyqhfscols"
      required="0"
      label="电源切换方式"
      placeholder="电源切换方式"
      @res="onDyqhfsConfirm"
    ></Picker>
    <Picker
      :columns="sfybydycols"
      required="1"
      label="是否有备用电源"
      placeholder="是否有备用电源"
      @res="onSfybydyConfirm"
    ></Picker>
    <van-field v-model="data.selfPowerVolume" label="自备电源容量" placeholder="请输入自备电源容量" />
    <Picker
      :columns="zbdybsfscols"
      required="0"
      label="自备电源闭锁方式"
      placeholder="自备电源闭锁方式"
      @res="onZbdybsfsConfirm"
    ></Picker>
    <van-field v-model="data.unionLockDevicePosition" label="电源联锁装置位置" placeholder="请输入电源联锁装置位置" />
    <Picker :columns="bgsmcols" required="1" label="变更说明" placeholder="变更说明" @res="onBgsmConfirm"></Picker>
    <van-field
      v-model="data.powerRunningDetail"
      :required="true"
      label="电源运行要求点详细说明"
      placeholder="请输入电源运行要求点详细说明"
      type="textarea"
      rows="4"
    />
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
      <div class="btn-d"></div>
      <van-button type="danger" block :square="true">删除</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";

const sddlxcols = [{ text: "柱式变", key: 1 }];
const dysmcols = [{ text: "多电源", key: 1 }];
const dylsfscols = [{ text: "电气联锁", key: 1 }];
const dyqhfscols = [{ text: "手动", key: 1 }];
const sfybydycols = [
  { text: "是", key: 1 },
  { text: "否", key: 0 }
];
const zbdybsfscols = [{ text: "机械", key: 1 }];
const bgsmcols = [
  { text: "新增", key: 1 },
  { text: "变更", key: 2 },
  { text: "删除", key: 3 }
];

export default {
  data() {
    return {
      sddlxcols: sddlxcols,
      dysmcols: dysmcols,
      dylsfscols: dylsfscols,
      dyqhfscols: dyqhfscols,
      sfybydycols: sfybydycols,
      zbdybsfscols: zbdybsfscols,
      bgsmcols: bgsmcols,
      data: {
        number: "",
        pointName: "",
        pointType: "",
        pointTypeKey: "",
        powerNum: "",
        powerNumKey: "",
        unionLockMode: "",
        unionLockModeKey: "",
        powerSwitchMode: "",
        powerSwitchModeKey: "",
        haveSpare: "",
        haveSpareKey: "",
        selfPowerVolume: "",
        selfPowerLockMode: "",
        selfPowerLockModeKey: "",
        unionLockDevicePosition: "",
        changeDesc: "",
        changeDescKey: "",
        powerRunningDetail: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    onSddlxConfirm(value, key) {
      this.data.pointType = value;
      this.data.pointTypeKey = key;
    },
    onDysmConfirm(value, key) {
      this.data.powerNum = value;
      this.data.powerNumKey = key;
    },
    onDylsfsConfirm(value, key) {
      this.data.unionLockMode = value;
      this.data.unionLockModeKey = key;
    },
    onDyqhfsConfirm(value, key) {
      this.data.powerSwitchMode = value;
      this.data.powerSwitchModeKey = key;
    },
    onSfybydyConfirm(value, key) {
      this.data.haveSpare = value;
      this.data.haveSpareKey = key;
    },
    onZbdybsfsConfirm(value, key) {
      this.data.selfPowerLockMode = value;
      this.data.selfPowerLockModeKey = key;
    },
    onBgsmConfirm(value, key) {
      this.data.changeDesc = value;
      this.data.changeDescKey = key;
    }
  }
};
</script>