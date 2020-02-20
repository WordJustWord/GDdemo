<template>
  <div class="jiakongxian">
    <van-cell-group>
      <van-cell title="电杆组立">
        <template slot="default">
          <van-switch size="20" v-model="data.dgzuli" />
        </template>
      </van-cell>
      <van-cell title="铁塔组装">
        <template slot="default">
          <van-switch size="20" v-model="data.ttzuzhuang" />
        </template>
      </van-cell>
      <van-cell title="拉线安装">
        <template slot="default">
          <van-switch size="20" v-model="data.lxanzhuang" />
        </template>
      </van-cell>
      <van-cell title="金具安装">
        <template slot="default">
          <van-switch size="20" v-model="data.jjanzhuang" />
        </template>
      </van-cell>
      <van-cell title="导线架设">
        <template slot="default">
          <van-switch size="20" v-model="data.dxjiashe" />
        </template>
      </van-cell>
    </van-cell-group>
    <div class="btn-group">
      <van-button type="info" block @click="onSave" :square="true">保存</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { saveJkx, getJkx } from "../../../../request/apis/JiakongxianApi";
export default {
  data() {
    return {
      data: {
        id: 0,
        dgzuli: false,
        ttzuzhuang: false,
        lxanzhuang: false,
        jjanzhuang: false,
        dxjiashe: false
      }
    };
  },
  created() {
    getJkx(1).then(res => {
      if (res.status === 200) {
        let dto = res.data.data;
        this.data.id = dto.id;
        this.data.dgzuli = dto.dgzuli;
        this.data.ttzuzhuang = dto.ttzuzhuang;
        this.data.lxanzhuang = dto.lxanzhuang;
        this.data.jjanzhuang = dto.jjanzhuang;
        this.data.dxjiashe = dto.dxjiashe;
      }
    });
  },
  methods: {
    onSave() {
      console.log(this.data);
      saveJkx(this.data.id, this.data);
      Toast.success("保存成功！");
    }
  }
};
</script>