<template>
  <div class="gaoyashi">
    <van-cell-group>
      <van-cell title="负荷开关柜">
        <template slot="default">
          <van-switch size="20" v-model="data.fhkgg" />
        </template>
      </van-cell>
      <van-cell title="二次回路">
        <template slot="default">
          <van-switch size="20" v-model="data.echl" />
        </template>
      </van-cell>
      <van-cell title="真空断路器开关柜">
        <template slot="default">
          <van-switch size="20" v-model="data.zkdlqkgg" />
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
        fhkgg: "",
        echl: "",
        zkdlqkgg: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>