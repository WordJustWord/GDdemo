<template>
  <div class="device-warning">
    <van-cell-group>
      <van-cell title="设备预警" />
    </van-cell-group>
    <div class="warning">
      <van-grid>
        <van-grid-item icon="photo-o" text="三项不平衡台区" />
        <van-grid-item icon="photo-o" text="低电压台区" />
        <van-grid-item icon="photo-o" text="负载异常台区" />
        <van-grid-item icon="photo-o" text="漏保异常台区" />
      </van-grid>
    </div>
  </div>
</template>