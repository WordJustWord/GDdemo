<template>
  <div class="hedui-contact">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in contacts"
        :key="item.id"
        :title="'姓名：'+item.name"
        :value="'电话：'+item.phone"
        :is-link="true"
        :to="'/hdcontactdetail/'+item.id"
      >
        <template class="list-label" slot="label">
          <p>类型：{{item.type == 1?"电气联系人":"其他联系人"}}</p>
          <p>优先级：{{item.priority}}</p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
const contacts = [
  {
    id: 1,
    name: "张三",
    phone: "15212345678",
    type: 1,
    priority: 1
  }
];
export default {
  data() {
    return {
      loading: false,
      finished: true,
      contacts: contacts
    };
  },
  methods: {
    onLoad() {}
  }
};
</script>
<style lang="scss">
.btn-hor-flex {
  display: flex;
  justify-content: space-between;
}
</style>
