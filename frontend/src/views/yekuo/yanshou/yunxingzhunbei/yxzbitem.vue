<template>
  <div class="yxzb-item">
    <van-cell-group>
      <van-cell title="模拟图">
        <template slot="default">
          <van-switch size="20" v-model="data.mnt" />
        </template>
      </van-cell>
      <van-cell title="资料记录">
        <template slot="default">
          <van-switch size="20" v-model="data.zljl" />
        </template>
      </van-cell>
      <van-cell title="设备命名">
        <template slot="default">
          <van-switch size="20" v-model="data.sbmm" />
        </template>
      </van-cell>
      <van-cell title="规章制度">
        <template slot="default">
          <van-switch size="20" v-model="data.gzzd" />
        </template>
      </van-cell>
      <van-cell title="防小动物措施">
        <template slot="default">
          <van-switch size="20" v-model="data.fxdwcs" />
        </template>
      </van-cell>
      <van-cell title="安全工器具">
        <template slot="default">
          <van-switch size="20" v-model="data.aqgqj" />
        </template>
      </van-cell>
      <van-cell title="防火防汛等安全措施">
        <template slot="default">
          <van-switch size="20" v-model="data.fhfxaqcs" />
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
        mnt: false,
        zljl: false,
        sbmm: false,
        gzzd: false,
        fxdwcs: false,
        aqgqj: false,
        fhfxaqcs: false
      }
    };
  }
};
</script>