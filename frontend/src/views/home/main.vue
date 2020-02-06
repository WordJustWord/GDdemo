<template>
  <div class="gongdan-main">
    <div class="header">
      <van-nav-bar title="首页" :fixed="true" />
    </div>
    <div class="content">
      <van-cell-group>
        <van-cell title="待下载业务" />
      </van-cell-group>
      <div class="yewu">
        <van-grid>
          <van-grid-item icon="photo-o" to="/yekuo" text="现场业扩" />
        </van-grid>
      </div>
      <van-cell-group>
        <van-cell title="业务受理" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="其他设置" />
      </van-cell-group>
      <div class="other">
        <van-grid>
          <van-grid-item icon="photo-o" to="/wode" text="我的信息" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="scss">
.content {
  padding-top: 46px;
}
</style>