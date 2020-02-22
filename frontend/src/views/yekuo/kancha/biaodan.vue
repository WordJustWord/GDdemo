<template>
  <div class="biaodan">
    <Pdf :src="path"></Pdf>
  </div>
</template>
<script>
import Pdf from "vue-pdf";
import CMapReaderFactory from "vue-pdf/src/CMapReaderFactory.js";
import { generate, getDoc } from "../../../request/apis/BiaodanApi";
export default {
  data() {
    return {
      path: ""
    };
  },
  components: {
    Pdf
  },
  created() {
    generate().then(res => {
      this.path = Pdf.createLoadingTask({
        url: "http://localhost:8081/api/read/kancha",
        CMapReaderFactory
      });
    });
  }
};
</script>