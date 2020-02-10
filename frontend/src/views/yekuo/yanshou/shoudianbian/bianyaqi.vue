<template>
  <div class="bianyaqi">
    <van-cell-group>
      <van-cell title="型号及命名">
        <template slot="default">
          <van-switch size="20" v-model="data.xhjmm" />
        </template>
      </van-cell>
      <van-cell title="油浸式变压器">
        <template slot="default">
          <van-switch size="20" v-model="data.yjsbyq" />
        </template>
      </van-cell>
      <van-cell title="干式变压器">
        <template slot="default">
          <van-switch size="20" v-model="data.gsbyq" />
        </template>
      </van-cell>
      <van-cell title="安装工艺">
        <template slot="default">
          <van-switch size="20" v-model="data.azgy" />
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
        xhjmm: false,
        yjsbyq: false,
        gsbyq: false,
        azgy: false
      }
    };
  }
};
</script>