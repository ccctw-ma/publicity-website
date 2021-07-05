<template>
  <div>
    <!-- 侧边栏标题 -->
    <div class="leftTitle hidden-sm-and-down">
      <h1>{{ table }}</h1>
    </div>
    <!-- 面包屑 -->
    <el-row>
      <el-col :sm="{ span: 18, offset: 3 }" :xs="{ span: 22, offset: 1 }">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ submenu }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!-- 模块化开发 传入模块的参数分别为 item:显示信息 index:这是第几个模块 theme:使用哪个主题-->
    <notice
      v-for="(item, index) in listData"
      :key="index"
      :item="item"
      :index="index"
      :theme="3"
    ></notice>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import notice from "@/components/notice.vue";
export default {
  name: "direction",
  components: {
    notice,
  },
  data() {
    return {
      listData: [],
    };
  },
  computed: {
    ...mapGetters([
      //当前进入子菜单
      "table",
      "submenu",
    ]),
  },
  methods: {
    //获取使用的信息
    getAllData() {
      let url = this.table + "/queryAll" + this.table + "Notice";
      console.log(url);
      this.$axios.get(url).then((res) => {
        this.listData = res.data;
      });
    },
  },
  created() {
    this.getAllData();
  },
};
</script>

<style scoped lang="less">
.breadcrumb {
  font-weight: bolder;
  font-size: 15px;
  margin-top: 80px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

.leftTitle {
  position: absolute;
  top: 140px;
  left: 84px;
  width: auto;
  margin-top: 0;
  height: 84px;
  transform-origin: 0 0;
  transform: rotate(90deg);
  white-space: nowrap;
  font-size: 20px;
}
</style>
