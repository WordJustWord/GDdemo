<template>
  <div class="u-picker">
    <van-field
      v-model="value"
      :readonly="true"
      @click="()=>{this.show = true}"
      :label="label"
      :placeholder="placeholder"
      :required="cal_isRequired"
    />
    <van-popup v-model="show" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="()=>{this.show = false}"
        show-toolbar
        :title="label"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  props: ["columns", "label", "placeholder", "required"],
  data() {
    return {
      value: "",
      key: "",
      show: false,
      isRequired: this.required
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value.text;
      this.key = value.key;
      this.show = false;
      this.$emit("res", this.value, this.key);
    }
  },
  computed: {
    cal_isRequired: function() {
      return this.isRequired == 1 ? true : false;
    }
  }
};
</script>