<template>
  <div>
    <!-- 面包屑 -->
    <el-row>
      <el-col :span="18" :offset="3">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>联系我们</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!-- 模块化开发 传入模块的参数分别为 item:显示信息 index:这是第几个模块 theme:使用哪个主题-->
    <notice  v-for="(item, index) in listData" :key="index" :item="item" :index="index" :theme="2"></notice>

   
  </div>
</template>

<script>
import notice from "@/components/notice.vue";
export default {
  name: "contact",
  components: {
    notice,
  },
  data() {
    return {
      listData: [],
    };
  },
  computed: {},
  methods: {
    //按照类别获取信息
    getListData(params) {
      this.$axios
        .get("Contact/queryContactNotice", {
          params: {
            kind: params,
          },
        })
        .then((res) => {
          this.listData.push(res.data[0]);
        });
    },
    //获取使用的信息
    getAllData() {
      this.$axios.get("/Contact/queryAllContactNotice").then((res) => {
        this.listData = res.data;
        console.log(this.listData);
      });
    },
    
  },
  created() {
    this.getAllData();
  },
};
</script>

<style scoped>
.breadcrumb {
  font-weight: bolder;
  font-size: 15px;
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>
