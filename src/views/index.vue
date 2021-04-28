<template>
  <el-container>
    <el-header>
      <el-row type="flex">
        <el-col :span="4"> 图片</el-col>
        <el-col :span="15">
          <el-row type="flex" justify="center">
            <el-menu
              default-active="this.$route.path"
              mode="horizontal"
              :router="true"
            >
              <el-menu-item index="/index/home">主页</el-menu-item>
              <el-menu-item index="/index/team">团队概况</el-menu-item>
              <el-menu-item index="/index/research">科研方向</el-menu-item>
              <el-menu-item index="" disabled>科学研究</el-menu-item>
              <el-menu-item index="" disabled>科研平台</el-menu-item>
              <el-menu-item index="/index/cooperation">交流合作</el-menu-item>
              <el-menu-item index="" disabled>产学研用</el-menu-item>
              <el-menu-item index="" disabled>资源共享</el-menu-item>
            </el-menu>
          </el-row>
        </el-col>
        <el-col :span="3">
          <el-input placeholder="请输入内容" v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="2">
          <!-- <el-avatar
            @click="goToAdmin"
            size="medium"
            :src="circleUrl"
            style="vertical-align: middle"
          >
          </el-avatar> -->
          <el-link :underline="false" @click="goToAdmin">admin</el-link>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer 这里放脚注</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        input4:'placeholder'
    };
  },
  computed: {},
  methods: {
    goToAdmin: function () {
      this.$router.push("/admin");
    },
  },
  mounted() {},
};
</script>

<style >
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  margin: 0;
}

.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  padding: 0;
  margin: 0;
  /* position: fixed;
  bottom: 1px; */
}

.el-main {
  /* background-color: #e6e6e6; */
  color: #333;
  text-align: center;
  min-height: 600px;
}
</style>