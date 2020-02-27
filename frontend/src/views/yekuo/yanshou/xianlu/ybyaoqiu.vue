<template>
  <div class="ybyaoqiu">
    <van-cell-group>
      <van-cell title="安全工器具">
        <template slot="default">
          <van-switch size="20" v-model="data.aqgqj" />
        </template>
      </van-cell>
      <van-cell title="管理规章制度">
        <template slot="default">
          <van-switch size="20" v-model="data.glgzzd" />
        </template>
      </van-cell>
      <van-cell title="管理人员">
        <template slot="default">
          <van-switch size="20" v-model="data.glry" />
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
        aqgqj: "",
        glgzzd: "",
        glry: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>