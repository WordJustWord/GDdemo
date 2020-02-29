<template>
  <div class="result-confirm">
    <div class="btn-group">
      <van-button type="info" block @click="onClick" :square="true">结果确认</van-button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  props: ["path"],
  data() {
    return {};
  },
  methods: {
    onClick() {
      Dialog.confirm({
        title: "结果确认",
        message: "确认提交？"
      })
        .then(() => {
          console.log(this.path);
          if (this.path === "/tsdian2") {
            Toast.success("提交成功！");
          } else {
            this.$router.push(this.path);
          }
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>