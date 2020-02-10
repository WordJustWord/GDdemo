<template>
  <div class="zbdy">
    <van-cell-group>
      <van-cell title="自备电源">
        <template slot="default">
          <van-switch size="20" v-model="data.zbdy" />
        </template>
      </van-cell>
    </van-cell-group>
    <div class="btn-group">
      <van-button type="info" block :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        zbdy: false
      }
    };
  }
};
</script>