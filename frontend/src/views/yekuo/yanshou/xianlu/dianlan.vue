<template>
  <div class="dianlan">
    <van-cell-group>
      <van-cell title="电缆安装">
        <template slot="default">
          <van-switch size="20" v-model="data.dlaz" />
        </template>
      </van-cell>
      <van-cell title="电缆固定">
        <template slot="default">
          <van-switch size="20" v-model="data.dlgd" />
        </template>
      </van-cell>
      <van-cell title="电缆附件">
        <template slot="default">
          <van-switch size="20" v-model="data.dlfj" />
        </template>
      </van-cell>
      <van-cell title="标志">
        <template slot="default">
          <van-switch size="20" v-model="data.bz" />
        </template>
      </van-cell>
      <van-cell title="电缆沟">
        <template slot="default">
          <van-switch size="20" v-model="data.dlg" />
        </template>
      </van-cell>
      <van-cell title="保护管">
        <template slot="default">
          <van-switch size="20" v-model="data.bhg" />
        </template>
      </van-cell>
      <van-cell title="支架">
        <template slot="default">
          <van-switch size="20" v-model="data.zj" />
        </template>
      </van-cell>
      <van-cell title="电缆引落装置">
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
        dlaz: "",
        dlgd: "",
        dlfj: "",
        bz: "",
        dlg: "",
        bhg: "",
        zj: "",
        glry: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>