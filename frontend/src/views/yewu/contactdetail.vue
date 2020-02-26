<template>
  <div class="contact-detail">
    <van-field v-model="data.zwlxrxm" required label="账务联系人姓名" placeholder="请输入账务联系人姓名" />
    <van-field v-model="data.zwlxrdh" required label="账务联系人电话" placeholder="请输入账务联系人电话" />
    <van-field v-model="data.dxlxrxm" required label="电气联系人姓名" placeholder="请输入电气联系人姓名" />
    <van-field v-model="data.dxlxrdh" required label="电气联系人电话" placeholder="请输入电气联系人电话" />
    <div class="btn-group">
      <van-button type="info" @click="onSave" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSave() {}
  }
};
</script>