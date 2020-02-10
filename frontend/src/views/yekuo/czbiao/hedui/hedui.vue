<template>
  <div class="czbiao-hedui">
    <van-cell-group>
      <van-cell title="申请信息核对" :is-link="true" to="/czbprofile/1" />
      <van-cell title="联系人信息核对" :is-link="true" to="/czbcontact" />
      <van-cell title="收集材料" :is-link="true" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>