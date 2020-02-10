<template>
  <div class="jiakongxian">
    <van-cell-group>
      <van-cell title="电杆组立">
        <template slot="default">
          <van-switch size="20" v-model="data.dgzl" />
        </template>
      </van-cell>
      <van-cell title="铁塔组装">
        <template slot="default">
          <van-switch size="20" v-model="data.ttzz" />
        </template>
      </van-cell>
      <van-cell title="拉线安装">
        <template slot="default">
          <van-switch size="20" v-model="data.lxaz" />
        </template>
      </van-cell>
      <van-cell title="金具安装">
        <template slot="default">
          <van-switch size="20" v-model="data.jjaz" />
        </template>
      </van-cell>
      <van-cell title="导线架设">
        <template slot="default">
          <van-switch size="20" v-model="data.dxjs" />
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
        dgzl: false,
        ttzz: false,
        lxaz: false,
        jjaz: false,
        dxjs: false
      }
    };
  }
};
</script>