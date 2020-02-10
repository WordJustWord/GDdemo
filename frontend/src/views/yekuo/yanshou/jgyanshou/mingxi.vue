<template>
  <div class="jgys-mingxi">
    <div class="btn-group btn-hor-flex">
      <van-button type="info" size="small" block :square="true" icon="plus">新增</van-button>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in data.dataList"
        :key="item.id"
        :title="'项目：'+item.ysxm"
        :value="'意见：'+item.ysyj"
        :is-link="true"
      >
        <template class="list-label" slot="label">
          <p>验收人：{{item.ysr}}</p>
          <p>验收日期：{{item.ysrq}}</p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
const dataList = [];
export default {
  data() {
    return {
      data: {
        dataList: dataList
      }
    };
  }
};
</script>