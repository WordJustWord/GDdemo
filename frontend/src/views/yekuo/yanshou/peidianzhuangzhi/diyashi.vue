<template>
  <div class="diyashi">
    <van-cell-group>
      <van-cell title="基础槽钢">
        <template slot="default">
          <van-switch size="20" v-model="data.jjcg" />
        </template>
      </van-cell>
      <van-cell title="柜体垂直度">
        <template slot="default">
          <van-switch size="20" v-model="data.gtczd" />
        </template>
      </van-cell>
      <van-cell title="标示牌">
        <template slot="default">
          <van-switch size="20" v-model="data.bsp" />
        </template>
      </van-cell>
      <van-cell title="柜内">
        <template slot="default">
          <van-switch size="20" v-model="data.gn" />
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
        jjcg: "",
        gtczd: "",
        bsp: "",
        gn: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>