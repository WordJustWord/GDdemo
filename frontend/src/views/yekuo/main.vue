<template>
  <div class="gongdan-main">
    <div class="header">
      <van-nav-bar
        :title="this.title"
        left-text="返回"
        left-arrow
        right-text="回首页"
        @click-right="()=>{this.$router.push('/')}"
        @click-left="()=>{this.$router.go(-1)}"
        :fixed="true"
      />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <van-tabbar v-model="selected">
        <van-tabbar-item icon="wap-home-o" to="/yewu" @click="setTitle('业务受理')" name="yewu">业务受理</van-tabbar-item>
        <van-tabbar-item icon="cluster-o" to="/kancha" @click="setTitle('现场勘查')" name="kancha">现场勘查</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/yanshou" @click="setTitle('竣工验收')" name="yanshou">竣工验收</van-tabbar-item>
        <van-tabbar-item
          icon="contact"
          to="/czbiao"
          @click="setTitle('装(拆)表管理')"
          name="czbiao"
        >装(拆)表</van-tabbar-item>
        <van-tabbar-item
          icon="contact"
          to="/tsdian"
          @click="setTitle('停(送)电管理')"
          name="tsdian"
        >停(送)电</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
let titleMap = new Map([
  ["yewu", "业务受理"],
  ["kancha", "现场勘查"],
  ["yanshou", "竣工验收"],
  ["czbiao", "装(拆)表管理"],
  ["tsdian", "停(送)电管理"]
]);
let arr = ["yewu", "kancha", "yanshou", "czbiao", "tsdian"];
export default {
  data() {
    return {
      active: 0,
      selected: "yewu",
      title: "业务受理"
    };
  },
  methods: {
    setTitle(title) {
      this.title = title;
    }
  },
  computed: {},
  mounted() {
    let a = arr.findIndex(x => x === this.$route.name);
    if (a > 0) {
      this.selected = this.$route.name;
      this.title = titleMap.get(this.selected);
    }
  },
  updated() {
    let a = arr.findIndex(x => x === this.$route.name);
    if (a > 0) {
      this.selected = this.$route.name;
      this.title = titleMap.get(this.selected);
    }
  }
};
</script>