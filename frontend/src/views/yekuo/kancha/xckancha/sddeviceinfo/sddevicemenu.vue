<template>
  <div class="sddevice-menu">
    <van-cell-group>
      <van-cell title="受电设备信息" :is-link="true" to="/deviceinfo" />
      <van-cell title="设备铭牌信息" :is-link="true" to="/nameplate" />
    </van-cell-group>
    <div class="btn-group">
      <van-button type="danger" size="small" block :square="true">删除</van-button>
    </div>
  </div>
</template>