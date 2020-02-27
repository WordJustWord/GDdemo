<template>
  <div class="dianlanbufen">
    <van-cell-group>
      <van-cell title="出入口封堵">
        <template slot="default">
          <van-switch size="20" v-model="data.crkfd" />
        </template>
      </van-cell>
      <van-cell title="标志设置">
        <template slot="default">
          <van-switch size="20" v-model="data.bzsz" />
        </template>
      </van-cell>
      <van-cell title="电缆沟">
        <template slot="default">
          <van-switch size="20" v-model="data.dlg" />
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
        crkfd: "",
        bzsz: "",
        dlg: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>