<template>
  <div class="hedui-material">
    <div class="btn-group btn-hor-flex">
      <div>
        <van-button type="info" size="small" icon="plus">新增</van-button>
        <van-button
          type="default"
          size="small"
          @click="()=>{this.showFilter = true}"
          icon="filter-o"
        >筛选</van-button>
      </div>
      <van-button type="warning" size="small" icon="desktop-o">打印承诺书</van-button>
      <van-popup v-model="showFilter" position="bottom">
        <div class="filter">
          <van-field
            v-model="data.clientType"
            :readonly="true"
            @click="()=>{this.showKHLX = true}"
            label="客户类型"
            placeholder="客户类型"
          />
          <van-cell-group>
            <van-cell title="是否有经办人">
              <van-checkbox
                v-model="data.haveAssistant"
                name="haveAssistant"
                ref="checkboxes"
                slot="right-icon"
              />
            </van-cell>
          </van-cell-group>
          <div class="btn-group">
            <van-button type="info" block :square="true">确定</van-button>
          </div>
        </div>
      </van-popup>
      <van-popup v-model="showKHLX" position="bottom">
        <van-picker
          :columns="khlxCols"
          @confirm="onKhlxConfirm"
          @cancel="()=>{this.showKHLX = false}"
          show-toolbar
          title="客户类型"
        />
      </van-popup>
    </div>
    <van-cell
      v-for="item in users"
      :key="item.id"
      :title="'姓名：'+item.name"
      :value="item.idNumber"
      :is-link="true"
      :label="'证件类型：'+cardTypes[item.cardType]"
    ></van-cell>
  </div>
</template>
<script>
const khlxCols = [{ text: "暂无", key: 1 }];
const users = [
  {
    id: 1,
    name: "张三",
    idNumber: "511112198012031242",
    cardType: 0
  }
];
const cardTypes = ["身份证", "护照", "军官证"];
export default {
  data() {
    return {
      showFilter: false,
      showKHLX: false,
      khlxCols: khlxCols,
      users: users,
      cardTypes: cardTypes,
      data: {
        clientType: "",
        clientTypeKey: "",
        haveAssistant: false
      }
    };
  },
  methods: {
    onKhlxConfirm(value) {
      this.data.clientType = value.text;
      this.data.clientTypeKey = value.key;
      this.showKHLX = false;
    }
  },
  computed: {
    cal_haveAssistant: function() {
      return this.data.haveAssistant == 1 ? "是" : "否";
    }
  }
};
</script>