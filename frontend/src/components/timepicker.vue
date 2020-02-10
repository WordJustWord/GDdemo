<template>
  <div class="u-time-picker">
    <van-field
      v-model="time"
      :label="label"
      @click="()=>{
      this.show = true}"
      :placeholder="placeholder"
      :readonly="true"
      :required="cal_required"
    />
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="temp"
        :type="datetype"
        @confirm="confirm"
        @cancel="()=>{this.show = false;}"
        :title="label"
      />
    </van-popup>
  </div>
</template>
<script>
import formatDate from "../utils/formatdate";
export default {
  props: ["label", "placeholder", "datetype", "required", "patten"],
  data() {
    return {
      show: false,
      temp: "",
      time: ""
    };
  },
  methods: {
    confirm() {
      this.time = formatDate(this.temp, this.patten);
      this.show = false;
      this.$emit("res", this.time);
    }
  },
  computed: {
    cal_required: function() {
      return this.required == "1" ? true : false;
    }
  }
};
</script>