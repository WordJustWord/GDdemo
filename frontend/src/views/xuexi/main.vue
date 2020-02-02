<template>
  <div class="xuexi">
    <div class="header">
      <van-nav-bar title="学习" :fixed="true" />
    </div>
    <div class="content">
      <Ads></Ads>
      <Catagory></Catagory>
      <Recommend></Recommend>
    </div>
  </div>
</template>
<script>
import Ads from "./components/ads";
import Catagory from "./components/catagory";
import Recommend from "./components/recommend";
export default {
  components: {
    Ads,
    Catagory,
    Recommend
  }
};
</script>