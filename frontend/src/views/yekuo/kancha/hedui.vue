<template>
  <div class="kancha-hedui">
    <van-cell-group>
      <van-cell title="申请信息核对" :is-link="true" to="/kcprofile/1" />
      <van-cell title="联系人信息核对" :is-link="true" to="/kccontact" />
      <van-cell title="远程费控信息核对" :is-link="true" to="/kcfeikong" />
      <van-cell title="财务信息核对" :is-link="true" to="/kcfinancial" />
      <van-cell title="收资材料" :is-link="true" />
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