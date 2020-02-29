<template>
  <div class="jlscheme-tabs">
    <van-cell-group>
      <van-cell title="计量信息" :is-link="true" to="/xxmeasurementinfo" />
      <van-cell title="计费信息" :is-link="true" to="/xxpaymentinfo" />
      <van-cell title="计费关系" :is-link="true" to="/xxpaymentrela" />
      <van-cell title="计量点方案图" :is-link="true" to="/xxmeasurementpoint" />
      <van-cell title="计量点用途方案" :is-link="true" to="/xxmpointusage" />
      <van-cell title="电能表方案" :is-link="true" to="/xxenergymeter" />
      <van-cell title="互感器方案" :is-link="true" to="/xxhgqscheme" />
    </van-cell-group>
    <div class="btn-group">
      <van-button type="danger" size="small" block :square="true">删除</van-button>
    </div>
  </div>
</template>