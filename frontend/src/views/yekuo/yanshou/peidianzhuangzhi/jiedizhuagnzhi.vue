<template>
  <div class="jiedizhuangzhi">
    <van-cell-group>
      <van-cell title="接地体连接">
        <template slot="default">
          <van-switch size="20" v-model="data.jdtlj" />
        </template>
      </van-cell>
      <van-cell title="接地体防腐">
        <template slot="default">
          <van-switch size="20" v-model="data.jdtff" />
        </template>
      </van-cell>
      <van-cell title="接地体敷设">
        <template slot="default">
          <van-switch size="20" v-model="data.jdtfs" />
        </template>
      </van-cell>
      <van-cell title="回填土">
        <template slot="default">
          <van-switch size="20" v-model="data.htt" />
        </template>
      </van-cell>
      <van-cell title="接地网外露部分">
        <template slot="default">
          <van-switch size="20" v-model="data.jdwwlbf" />
        </template>
      </van-cell>
      <van-cell title="变压器壳体与零线接地结的连线">
        <template slot="default">
          <van-switch size="20" v-model="data.byqktylxjdjdlx" />
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
        jdtlj: "",
        jdtff: "",
        jdtfs: "",
        htt: "",
        jdwwlbf: "",
        byqktylxjdjdlx: ""
      }
    };
  },
  methods: {
    onSave() {}
  }
};
</script>