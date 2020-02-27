<template>
  <div class="jlscheme-tabs">
    <van-cell-group>
      <van-cell title="计量信息" :is-link="true" to="/measurementinfo" />
      <van-cell title="计费信息" :is-link="true" to="/paymentinfo" />
      <van-cell title="计费关系" :is-link="true" to="/paymentrela" />
      <van-cell title="计量点方案图" :is-link="true" to="/measurementpoint" />
      <van-cell title="计量点用途方案" :is-link="true" to="/mpointusage" />
      <van-cell title="电能表方案" :is-link="true" to="/energymeter" />
      <van-cell title="互感器方案" :is-link="true" to="/hgqscheme" />
    </van-cell-group>
    <div class="btn-group">
      <van-button type="danger" size="small" block :square="true">删除</van-button>
    </div>
  </div>
</template>