<template>
  <div class="contact-detail">
    <van-field
      v-model="data.zwlxrxm"
      :readonly="!canEdit"
      required
      label="账务联系人姓名"
      placeholder="请输入账务联系人姓名"
    />
    <van-field
      v-model="data.zwlxrdh"
      :readonly="!canEdit"
      required
      label="账务联系人电话"
      placeholder="请输入账务联系人电话"
    />
    <van-field
      v-model="data.dxlxrxm"
      :readonly="!canEdit"
      required
      label="电气联系人姓名"
      placeholder="请输入电气联系人姓名"
    />
    <van-field
      v-model="data.dxlxrdh"
      :readonly="!canEdit"
      required
      label="电气联系人电话"
      placeholder="请输入电气联系人电话"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      canEdit: false,
      data: {
        zwlxrxm: "",
        zwlxrdh: "",
        dxlxrxm: "",
        dxlxrdh: ""
      }
    };
  },
  methods: {
    onSave() {}
  },
  created() {}
};
</script>