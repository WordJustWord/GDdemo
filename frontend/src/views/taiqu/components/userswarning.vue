<template>
  <div class="users-warning">
    <van-cell-group>
      <van-cell title="用户预警" />
    </van-cell-group>
    <div class="warning">
      <van-cell-group>
        <van-cell title="采集失败用户" value="90" label="2020-01-02" />
        <van-cell title="零电量用户" value="0" label="01-24至01-26" />
        <van-cell title="未安装智能用户" value="0" label="截止昨日" />
        <van-cell title="电费余额不足用户" value="0" label="截止昨日" />
      </van-cell-group>
    </div>
  </div>
</template>