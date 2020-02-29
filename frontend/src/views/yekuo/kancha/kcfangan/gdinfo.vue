<template>
  <div class="fangan-gdinfo">
    <van-field v-model="data.schemeUser" :required="true" label="方案确定人" placeholder="请输入方案确定人" />
    <van-field v-model="data.ePowerUsePerMonth" label="预计月用电量" placeholder="请输入预计月用电量" />
    <van-field v-model="data.ePowerSalePerMonth" label="预计月售电量" placeholder="请输入预计月售电量" />
    <van-field v-model="data.ePowerAva" label="预计平均负荷" placeholder="请输入预计平均负荷" />
    <van-field v-model="data.ePowerProducePerMonth" label="预计月自发电量" placeholder="请输入预计月自发电量" />
    <van-field v-model="data.ePowerFeePerMonth" label="预计月应收电费" placeholder="请输入预计月应收电费" />
    <van-field v-model="data.ePowerMax" label="预计最大负荷" placeholder="请输入预计最大负荷" />
    <van-field v-model="data.opinion" label="确认人意见" placeholder="请输入确认人意见" />
    <van-field v-model="data.schemeDesc" label="供电方案说明" placeholder="请输入供电方案说明" />

    <van-field v-model="data.powerProvideUnit" :required="true" label="供电单位" placeholder="请输入供电单位" />
    <Picker :columns="gddycols" required="1" label="供电电压" placeholder="供电电压" @res="onGddyConfirm"></Picker>
    <van-field v-model="data.capacity" label="核定容量" placeholder="请输入核定容量" />
    <Picker :columns="fhxzcols" required="1" label="负荷性质" placeholder="负荷性质" @res="onFhxzConfirm"></Picker>
    <Picker :columns="yhflcols" required="1" label="用户分类" placeholder="用户分类" @res="onYhflConfirm"></Picker>
    <Picker :columns="ydlbcols" required="1" label="用电类别" placeholder="用电类别" @res="onYdlbConfirm"></Picker>
    <Picker
      :columns="sfkgdbgcols"
      required="1"
      label="是否可供电或变更"
      placeholder="是否可供电或变更"
      @res="onSfkgdbdConfirm"
    ></Picker>
    <Picker :columns="zgbzcols" required="1" label="转供标志" placeholder="转供标志" @res="onZgbzConfirm"></Picker>
    <Picker
      :columns="sfygccols"
      required="1"
      label="是否有工程"
      placeholder="是否有工程"
      @res="onSfygcConfirm"
    ></Picker>
    <Picker :columns="hyflcols" required="1" label="行业分类" placeholder="行业分类" @res="onHyflConfirm"></Picker>
    <Picker :columns="qdsjcols" required="1" label="确定时间" placeholder="确定时间" @res="onQdsjConfirm"></Picker>
    <Picker :columns="sfyhdjcols" label="是否优惠电价" placeholder="是否优惠电价" @res="onSfyhdjConfirm"></Picker>
    <div class="btn-group">
      <van-button type="primary" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
import Picker from "../../../../components/picker";
const gddycols = [
  { text: "220v", key: "1" },
  { text: "10kv", key: "2" },
  { text: "380v", key: "3" },
  { text: "35kv", key: "4" },
  { text: "110kv", key: "5" },
  { text: "220kv", key: "6" },
  { text: "500kv", key: "7" }
];
const fhxzcols = [
  { text: "一类", key: "1" },
  { text: "二类", key: "2" },
  { text: "三类", key: "3" }
];
const yhflcols = [
  { text: "高压", key: "1" },
  { text: "低压居民", key: "2" },
  { text: "低压非居民", key: "3" },
  { text: "考核", key: "4" }
];
const ydlbcols = [
  { text: "考核", key: "1" },
  { text: "大工业用电", key: "2" },
  { text: "大工业中小化肥", key: "3" },
  { text: "大工业其他优待", key: "4" },
  { text: "居民生活用电", key: "5" },
  { text: "乡村居民生活用电", key: "6" },
  { text: "城镇居民生活用电", key: "7" },
  { text: "中小学教学用电", key: "8" },
  { text: "农业生产用电", key: "9" },
  { text: "农业排灌", key: "10" },
  { text: "贫困县农业排灌用电", key: "11" },
  { text: "非居民照明", key: "12" },
  { text: "非工业", key: "13" },
  { text: "普通工业", key: "14" },
  { text: "普通工业中小化肥", key: "15" },
  { text: "商业用电", key: "16" },
  { text: "趸售大工业", key: "17" },
  { text: "趸售普通工业", key: "18" },
  { text: "趸售非居民", key: "19" },
  { text: "趸售居民生活用电", key: "20" },
  { text: "趸售农业生产用电", key: "21" },
  { text: "趸售商业用电", key: "22" },
  { text: "大用户直购电", key: "23" }
];
const sfkgdbgcols = [{ text: "暂无", key: "1" }];
const zgbzcols = [{ text: "暂无", key: "1" }];
const sfygccols = [
  { text: "有受电工程（用户接户线工程）无配套工程", key: "1" },
  { text: "有配套工程无受电工程（用户接户线工程）", key: "2" },
  { text: "有受电工程（用户接户线工程）有配套工程", key: "3" }
];
const hyflcols = [{ text: "暂无", key: "1" }];
const qdsjcols = [{ text: "暂无", key: "1" }];
const sfyhdjcols = [{ text: "暂无", key: "1" }];
export default {
  data() {
    return {
      active: [0],
      gddycols: gddycols,
      fhxzcols: fhxzcols,
      yhflcols: yhflcols,
      ydlbcols: ydlbcols,
      sfkgdbgcols: sfkgdbgcols,
      zgbzcols: zgbzcols,
      sfygccols: sfygccols,
      hyflcols: hyflcols,
      qdsjcols: qdsjcols,
      sfyhdjcols: sfyhdjcols,
      data: {
        schemeUser: "",
        ePowerUsePerMonth: "",
        ePowerSalePerMonth: "",
        ePowerAva: "",
        ePowerProducePerMonth: "",
        ePowerFeePerMonth: "",
        ePowerMax: "",
        energeFeeDesc: "",
        ctInfomation: "",
        opinion: "",
        schemeDesc: "",
        powerProvideUnit: "",
        voltage: "",
        voltageKey: "",
        capacity: "",
        loadProperty: "",
        loadPropertyKey: "",
        userCategory: "",
        userCategoryKey: "",
        powerUseType: "",
        powerUseTypeKey: "",
        canProvideOrChange: "",
        canProvideOrChangeKey: "",
        turnFlag: "",
        turnFlagKey: "",
        haveProject: "",
        haveProjectKey: "",
        industryCategory: "",
        industryCategoryKey: "",
        confirmTime: "",
        confirmTimeKey: "",
        isDiscount: "",
        isDiscountkey: ""
      }
    };
  },
  components: {
    Picker
  },
  methods: {
    onGddyConfirm(value, key) {
      this.data.voltage = value;
      this.data.voltageKey = key;
    },
    onFhxzConfirm(value, key) {
      this.data.loadProperty = value;
      this.data.loadPropertyKey = key;
    },
    onYhflConfirm(value, key) {
      this.data.userCategory = value;
      this.data.userCategoryKey = key;
    },
    onYdlbConfirm(value, key) {
      this.data.powerUseType = value;
      this.data.powerUseTypeKey = key;
    },
    onSfkgdbdConfirm(value, key) {
      this.data.canProvideOrChange = value;
      this.data.canProvideOrChangeKey = key;
    },
    onZgbzConfirm(value, key) {
      this.data.turnFlag = value;
      this.data.turnFlagKey = key;
    },
    onSfygcConfirm(value, key) {
      this.data.haveProject = value;
      this.data.haveProjectKey = key;
    },
    onHyflConfirm(value, key) {
      this.data.industryCategory = value;
      this.data.industryCategoryKey = key;
    },
    onQdsjConfirm(value, key) {
      this.data.confirmTime = value;
      this.data.confirmTimeKey = key;
    },
    onSfyhdjConfirm(value, key) {
      this.data.isDiscount = value;
      this.data.isDiscountKey = key;
    }
  }
};
</script>