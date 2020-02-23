<template>
  <div class="menus">
    <van-cell-group>
      <van-cell title="修改密码" :is-link="true" />
      <van-cell title="注销" @click="signout" :is-link="true" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  methods: {
    signout() {
      localStorage.removeItem("login");
      this.$router.push("/signin");
    }
  }
};
</script>