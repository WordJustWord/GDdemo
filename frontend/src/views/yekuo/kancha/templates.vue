<template>
  <div class="templates">
    <van-cell-group>
      <van-cell v-for="item in cells" :key="item.title" :title="item.title" :is-link="true" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cells: [
        { title: "受电设备模版", to: "" },
        { title: "受电铭牌模板", to: "" },
        { title: "受电点方案模版", to: "" },
        { title: "供电电源方案模板", to: "" },
        { title: "电价方案模板", to: "" },
        { title: "计量方案模板", to: "" },
        { title: "电能表方案模板", to: "" },
        { title: "互感器方案模板", to: "" },
        { title: "模板共享", to: "" }
      ]
    };
  }
};
</script>