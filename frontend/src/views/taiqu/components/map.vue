<template>
  <div class="device-map">
    <van-cell-group>
      <van-cell title="设备地图" value="内容" :is-link="true" />
    </van-cell-group>
    <div class="map"></div>
  </div>
</template>
<style lang="scss" scoped>
.map {
  height: 180px;
}
</style>