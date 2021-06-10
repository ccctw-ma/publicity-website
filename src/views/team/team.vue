<template>
  <div>
    <!-- 侧边栏标题 -->
    <div class="leftTitle hidden-sm-and-down">
      <h1>{{table}}</h1>
    </div>
    <!-- 面包屑 -->
    <el-row>
      <el-col :sm="{ span: 18, offset: 3 }" :xs="{ span: 22, offset: 1 }">
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          :class="{
            breadcrumb: isBigWindow === true,
            breadcrumb_min: isBigWindow === false,
          }"
        >
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{submenu}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!-- 模块化开发 传入模块的参数分别为 item:显示信息 index:这是第几个模块 theme:使用哪个主题-->
    <notice
      v-for="(item, index) in listData"
      :key="index"
      :item="item"
      :index="index"
      :theme="1"
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
      screenWidth: document.body.clientWidth,
      isBigWindow: true,
    };
  },
  computed: {
    ...mapGetters([
      //当前进入子菜单
      "table",
      "submenu"
    ]),
  },
  methods: {
    //获取使用的信息
    getAllData() {
      let url = this.table+"/queryAll"+this.table+"Notice";
      console.log(url);
      this.$axios.get(url).then((res) => {
        this.listData = res.data;
        // console.log(this.listData);
      });
    },
  },
  mounted() {
    const that = this;
    window.onresize = function () {
      that.screenWidth = document.body.clientWidth;
    };
  },
  watch: {
    screenWidth: {
      immediate: true,
      handler: function (val) {
        if (val <= 768) {
          this.isBigWindow = false;
        } else {
          this.isBigWindow = true;
        }
        // console.log("当前窗口宽度为:" + val + "px" + this.isBigWindow);
      },
    },
  },
  created() {
    // console.log("进入dir"+this.table)
    this.getAllData();
  },
};
</script>

<style scoped lang="less">

.breadcrumb_font{
  font-weight: bolder;
  font-size: 15px;
}
.breadcrumb {
  .breadcrumb_font();
  margin-top: 80px;
  margin-bottom: 50px;
}
.breadcrumb_min {
  .breadcrumb_font();
  margin-top: 30px;
  margin-bottom: 30px;
}

.leftTitle {
  position: absolute;
  top: 140px;
  left: 84px;
  width: auto;
  margin-top: 0;
  /* background: pink; */
  height: 84px;
  transform-origin: 0 0;
  transform: rotate(90deg);
  white-space: nowrap;
  font-size: 20px;
}
</style>
