<template>
  <div class="dshjiancha">
    <van-cell-group>
      <van-cell title="采集终端及电能计量装置运行是否正常">
        <template slot="default">
          <van-switch size="20" v-model="data.cjzd" />
        </template>
      </van-cell>
      <van-cell title="客户受电装置及各项运行参数是否正常">
        <template slot="default">
          <van-switch size="20" v-model="data.khsdzz" />
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
        cjzd: false,
        khsdzz: false
      }
    };
  }
};
</script>