<template>
  <div class="jdbaohu-detail">
    <van-cell-group>
      <van-cell title="继电保护">
        <template slot="default">
          <van-switch size="20" v-model="data.jdbh" />
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
        jdbh: false
      }
    };
  }
};
</script>