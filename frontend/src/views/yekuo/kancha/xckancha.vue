<template>
  <div class="kancha-xckancha">
    <van-cell-group>
      <van-cell title="受电点方案" :is-link="true" to="/sdscheme" />
      <van-cell title="供电电源方案" :is-link="true" to="/sdgdscheme" />
      <van-cell title="用户计费方案" :is-link="true" to="/yhpayscheme" />
      <van-cell title="计量方案信息" :is-link="true" to="/jlscheme" />
      <van-cell title="受电设备方案" :is-link="true" to="/sddeviceinfo" />
      <van-cell title="用电设备方案" :is-link="true" />
      <van-cell title="接线简图" :is-link="true" />
    </van-cell-group>
  </div>
</template>