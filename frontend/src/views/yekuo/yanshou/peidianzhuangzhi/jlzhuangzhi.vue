<template>
  <div class="jlzhuangzhi">
    <van-cell-group>
      <van-cell title="互感器">
        <template slot="default">
          <van-switch size="20" v-model="data.hgq" />
        </template>
      </van-cell>
      <van-cell title="电能表">
        <template slot="default">
          <van-switch size="20" v-model="data.dnb" />
        </template>
      </van-cell>
      <van-cell title="二次接线">
        <template slot="default">
          <van-switch size="20" v-model="data.ecjx" />
        </template>
      </van-cell>
      <van-cell title="用电信息采集装置">
        <template slot="default">
          <van-switch size="20" v-model="data.ydxxcjzz" />
        </template>
      </van-cell>
      <div class="btn-group">
        <van-button type="info" block @click="onSave" :square="true">保存</van-button>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        hgq: "",
        dnb: "",
        ecjx: "",
        ydxxcjzz: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>