<template>
  <div class="nameplate">
    <van-field v-model="data.cjmc" label="厂家名称" placeholder="请输入厂家名称" />
    <van-field v-model="data.ccbh" label="出厂编号" placeholder="请输入出厂编号" />
    <TimePicker
      label="出厂日期"
      placeholder="选择出厂日期"
      datetype="date"
      required="0"
      patten="yyyy/MM/dd"
      @res="getResult"
    ></TimePicker>
    <Picker :columns="yccdycols" required="1" label="一次侧电压" placeholder="一次侧电压" @res="yccdyConfirm"></Picker>
    <Picker :columns="eccdycols" required="1" label="二次侧电压" placeholder="二次侧电压" @res="eccdyConfirm"></Picker>
    <van-field v-model="data.syzq" label="实验周期" placeholder="请输入实验周期" />
    <Picker
      :columns="eddygycols"
      required="1"
      label="额定电压(高压)"
      placeholder="额定电压(高压)"
      @res="eddygyConfirm"
    ></Picker>
    <Picker
      :columns="eddlgycols"
      required="0"
      label="额定电流(高压)"
      placeholder="额定电流(高压)"
      @res="eddlgyConfirm"
    ></Picker>
    <Picker
      :columns="eddyzycols"
      required="0"
      label="额定电压(中压)"
      placeholder="额定电压(中压)"
      @res="eddyzyConfirm"
    ></Picker>
    <Picker
      :columns="eddlzycols"
      required="0"
      label="额定电流(中压)"
      placeholder="额定电流(中压)"
      @res="eddlzyConfirm"
    ></Picker>
    <Picker
      :columns="eddydycols"
      required="1"
      label="额定电压(低压)"
      placeholder="额定电压(低压)"
      @res="eddydyConfirm"
    ></Picker>
    <Picker
      :columns="eddldycols"
      required="0"
      label="额定电流(低压)"
      placeholder="额定电流(低压)"
      @res="eddldyConfirm"
    ></Picker>
    <van-field v-model="data.dlzk" label="短路阻抗" placeholder="请输入短路阻抗" />
    <van-field v-model="data.yh" label="油号" placeholder="请输入油号" />
    <van-field v-model="data.jddz" label="接地电阻" placeholder="请输入接地电阻" />
    <Picker :columns="bhfscols" required="1" label="保护方式" placeholder="保护方式" @res="bhfsConfirm"></Picker>
    <Picker :columns="jxzbcols" required="1" label="接线组别" placeholder="接线组别" @res="jxzbConfirm"></Picker>
    <Picker :columns="kzdlcols" required="0" label="K值电流" placeholder="K值电流" @res="kzdlConfirm"></Picker>
    <van-field v-model="data.fjtdc" label="分接头档次" placeholder="请输入分接头档次" />
    <van-field v-model="data.fjtwz" label="分接头位置" placeholder="请输入分接头位置" />
    <Picker
      :columns="dyzxdsfjdcols"
      required="1"
      label="低压中性点是否接地"
      placeholder="低压中性点是否接地"
      @res="dyzxdsfjdConfirm"
    ></Picker>
    <Picker :columns="lqfscols" required="1" label="冷却方式" placeholder="冷却方式" @res="lqfsConfirm"></Picker>
    <van-field v-model="data.kz" label="K值" placeholder="请输入K值" />
    <Picker
      :columns="dqzjxfscols"
      required="1"
      label="电气主接线方式"
      placeholder="电气主接线方式"
      @res="dqzjxfsConfirm"
    ></Picker>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../../components/picker";
import TimePicker from "../../../../../components/timepicker";

const eccdycols = [{ text: "暂无", key: 1 }];
const yccdycols = [{ text: "暂无", key: 1 }];
const eddygycols = [{ text: "暂无", key: 1 }];
const eddlgycols = [{ text: "暂无", key: 1 }];
const eddyzycols = [{ text: "暂无", key: 1 }];
const eddlzycols = [{ text: "暂无", key: 1 }];
const eddydycols = [{ text: "暂无", key: 1 }];
const eddldycols = [{ text: "暂无", key: 1 }];
const bhfscols = [{ text: "暂无", key: 1 }];
const jxzbcols = [{ text: "暂无", key: 1 }];
const kzdlcols = [{ text: "暂无", key: 1 }];
const dyzxdsfjdcols = [{ text: "暂无", key: 1 }];
const lqfscols = [{ text: "暂无", key: 1 }];
const dqzjxfscols = [{ text: "暂无", key: 1 }];
export default {
  data() {
    return {
      yccdycols: yccdycols,
      eccdycols: eccdycols,
      eddygycols: eddygycols,
      eddlgycols: eddlgycols,
      eddyzycols: eddyzycols,
      eddlzycols: eddlzycols,
      eddydycols: eddydycols,
      eddldycols: eddldycols,
      bhfscols: bhfscols,
      jxzbcols: jxzbcols,
      kzdlcols: kzdlcols,
      dyzxdsfjdcols: dyzxdsfjdcols,
      lqfscols: lqfscols,
      dqzjxfscols: dqzjxfscols,
      data: {
        cjmc: "",
        ccbh: "",
        ccrq: "",
        yccdy: "",
        yccdyKey: "",
        eccdy: "",
        eccdyKey: "",
        syzq: "",
        eddygy: "",
        eddygyKey: "",
        eddlgy: "",
        eddlgyKey: "",
        eddyzy: "",
        eddyzyKey: "",
        eddlzy: "",
        eddlzyKey: "",
        eddydy: "",
        eddydyKey: "",
        eddldy: "",
        eddldyKey: "",
        dlzk: "",
        yh: "",
        jddz: "",
        bhfs: "",
        bhfsKey: "",
        jxzb: "",
        jxzbKey: "",
        kzdl: "",
        kzdlKey: "",
        fjtdc: "",
        fjtwz: "",
        dyzxdsfjd: "",
        dyzxdsfjdKey: "",
        lqfs: "",
        lqfsKey: "",
        kz: "",
        dqzjxfs: "",
        dqzjxfsKey: ""
      }
    };
  },
  components: {
    Picker,
    TimePicker
  },
  methods: {
    getResult(value) {
      this.data.ccrq = value;
    },
    yccdyConfirm(value, key) {
      this.data.yccdy = value;
      this.data.yccdyKey = key;
    },
    eccdyConfirm(value, key) {
      this.data.eccdy = value;
      this.data.eccdyKey = key;
    },
    eddygyConfirm(value, key) {
      this.data.eddygy = value;
      this.data.eddygyKey = key;
    },
    eddlgyConfirm(value, key) {
      this.data.eddlgy = value;
      this.data.eddlgyKey = key;
    },
    eddyzyConfirm(value, key) {
      this.data.eddyzy = value;
      this.data.eddyzyKey = key;
    },
    eddlzyConfirm(value, key) {
      this.data.eddlzy = value;
      this.data.eddlzyKey = key;
    },
    eddydyConfirm(value, key) {
      this.data.eddydy = value;
      this.data.eddydyKey = key;
    },
    eddldyConfirm(value, key) {
      this.data.eddldy = value;
      this.data.eddldyKey = key;
    },
    bhfsConfirm(value, key) {
      this.data.bhfs = value;
      this.data.bhfsKey = key;
    },
    jxzbConfirm(value, key) {
      this.data.jxzb = value;
      this.data.jxzbKey = key;
    },
    kzdlConfirm(value, key) {
      this.data.kzdl = value;
      this.data.kzdlKey = key;
    },
    dyzxdsfjdConfirm(value, key) {
      this.data.dyzxdsfjd = value;
      this.data.dyzxdsfjdKey = key;
    },
    lqfsConfirm(value, key) {
      this.data.lqfs = value;
      this.data.lqfsKey = key;
    },
    dqzjxfsConfirm(value, key) {
      this.data.dqzjxfs = value;
      this.data.dqzjxfsKey = key;
    }
  }
};
</script>