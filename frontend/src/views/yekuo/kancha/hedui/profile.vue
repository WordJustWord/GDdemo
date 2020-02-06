<template>
  <div class="profile">
    <van-field v-model="data.num" label="申请编号" placeholder="请输入申请编号" />
    <van-field v-model="fcdate" label="受理日期" @click="selectCtime" placeholder="点击选择受理日期" />
    <van-field v-model="data.worktype" label="业务类型" placeholder="请输入业务类型" />
    <van-popup v-model="showCtime" position="bottom">
      <van-datetime-picker
        v-model="data.ctime"
        type="date"
        @confirm="cancelCtime"
        @cancel="cancelCtime"
      />
    </van-popup>
  </div>
</template>
<script>
import formatDate from "../../../../utils/formatdate";
export default {
  data() {
    return {
      showCtime: false,
      data: {
        num: "",
        ctime: "",
        worktype: ""
      }
    };
  },
  methods: {
    selectCtime() {
      this.showCtime = true;
    },
    cancelCtime() {
      this.showCtime = false;
    }
  },
  computed: {
    fcdate: function() {
      if (this.data.ctime != "") {
        return formatDate(this.data.ctime, "yyyy/MM/dd");
      }
    }
  }
};
</script>