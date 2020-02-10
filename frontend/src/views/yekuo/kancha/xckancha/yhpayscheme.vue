<template>
  <div class="xckc-yhpayscheme">
    <van-collapse v-model="active" accordion>
      <van-collapse-item title="定价策略方案">
        <Stategy></Stategy>
      </van-collapse-item>
      <van-collapse-item title="电价方案">
        <Price></Price>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import Stategy from "./pricingstrategy";
import Price from "./pricescheme";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Stategy,
    Price
  }
};
</script>