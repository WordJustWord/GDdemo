<template>
  <div class="gongdan-main">
    <div class="header">
      <van-nav-bar
        :title="this.title"
        left-text="首页"
        left-arrow
        @click-left="onClickLeft"
        :fixed="true"
      />
    </div>
    <div class="content">
      <router-view></router-view>
      <!-- <van-cell-group>
        <van-cell title="业务受理" />
      </van-cell-group>
      <van-grid>
        <van-grid-item icon="photo-o" to="/yewu" text="信息录入" />
        <van-grid-item icon="photo-o" text="生成表单" />
        <van-grid-item icon="photo-o" text="模版管理" />
      </van-grid>
      <van-cell-group>
        <van-cell title="现场勘查" />
      </van-cell-group>
      <van-grid>
        <van-grid-item icon="photo-o" text="待办中" />
        <van-grid-item icon="photo-o" text="已完成" />
      </van-grid>
      <van-cell-group>
        <van-cell title="竣工验收" />
      </van-cell-group>
      <van-grid>
        <van-grid-item icon="photo-o" text="待办中" />
        <van-grid-item icon="photo-o" text="已完成" />
      </van-grid>-->
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
export default {
  data() {
    return {
      active: 0,
      selected: "yewu",
      title: "业务受理"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    setTitle(title) {
      this.title = title;
    }
  },
  computed: {}
};
</script>