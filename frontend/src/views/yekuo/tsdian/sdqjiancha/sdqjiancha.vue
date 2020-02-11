<template>
  <div class="dsqjiancha">
    <van-cell-group>
      <van-cell title="配套电网工程已验收合格">
        <template slot="default">
          <van-switch size="20" v-model="data.ptdwgc" />
        </template>
      </van-cell>
      <van-cell title="启动送电方案已审定">
        <template slot="default">
          <van-switch size="20" v-model="data.qdsdfa" />
        </template>
      </van-cell>
      <van-cell title="客户受电工程已竣工验收合格">
        <template slot="default">
          <van-switch size="20" v-model="data.khsdgc" />
        </template>
      </van-cell>
      <van-cell title="供用电合同及有关协议均已签订">
        <template slot="default">
          <van-switch size="20" v-model="data.gydht" />
        </template>
      </van-cell>
      <van-cell title="业务相关费用已结清">
        <template slot="default">
          <van-switch size="20" v-model="data.ywxgfy" />
        </template>
      </van-cell>
      <van-cell title="电能计量装置已安装检验合格">
        <template slot="default">
          <van-switch size="20" v-model="data.dnjlzz" />
        </template>
      </van-cell>
      <van-cell title="涉网设备客户安全措施已齐备">
        <template slot="default">
          <van-switch size="20" v-model="data.swsb" />
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
        ptdwgc: false,
        qdsdfa: false,
        khsdgc: false,
        gydht: false,
        ywxgfy: false,
        dnjlzz: false,
        swsb: false
      }
    };
  }
};
</script>