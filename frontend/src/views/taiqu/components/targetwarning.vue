<template>
  <div class="target-warning">
    <van-cell-group>
      <van-cell title="台区指标预警" value="截止：2019-2-1" />
    </van-cell-group>
    <div class="warning">
      <van-grid :column-num="3">
        <van-grid-item icon="photo-o" text="线损不合格" />
        <van-grid-item icon="photo-o" text="采集成功率不达标" />
        <van-grid-item icon="photo-o" text="采集覆盖率不达标" />
      </van-grid>
    </div>
  </div>
</template>