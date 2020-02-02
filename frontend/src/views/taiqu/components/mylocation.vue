<template>
  <div class="my-location">
    <van-cell-group>
      <van-cell title="我的台区" value="截止：2019-2-1" :is-link="true" />
    </van-cell-group>
    <div class="taiqu">
      <van-grid :column-num="3">
        <van-grid-item icon="photo-o" text="台区数" />
        <van-grid-item icon="photo-o" text="用户数" />
        <van-grid-item icon="photo-o" text="线损折合率" />
      </van-grid>
    </div>
  </div>
</template>