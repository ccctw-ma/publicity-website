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
              class="navMenu"
              :active-text-color="active_color"
              @select="handleSelect"
            >
              <el-menu-item index="/index/home">主页</el-menu-item>
              <el-menu-item index="/index/team">团队概况</el-menu-item>
              <el-menu-item index="/index/direction">科研方向</el-menu-item>
              <el-menu-item index="/index/research">科学研究</el-menu-item>
              <el-menu-item index="/index/cooperation">交流合作</el-menu-item>
              <el-menu-item index="/index/resource">资源共享</el-menu-item>
              <el-menu-item index="/index/contact">联系我们</el-menu-item>
            </el-menu>
          </el-row>
        </el-col>
        <!-- <el-col :span="3">
          <el-input placeholder="请输入内容" v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col> -->
        <!-- <el-col :span="2" :offset="3">
          <el-link :underline="false" @click="goToAdmin">admin</el-link>
        </el-col> -->
      </el-row>
    </el-header>
    <el-main style="padding: 0">
      <div class="leftTitle">
        <h1 class="leftTitleContent">{{ left_title }}</h1>
      </div>
      <div class="leftSide"></div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
      active_color: "",
      left_title: "",
    };
  },
  computed: {},
  methods: {
    // goToAdmin: function () {
    //   this.$router.push("/admin");
    // },
    handleSelect(index, indexPath) {
      switch (index) {
        case "/index/team": {
          this.active_color = "#3682de";
          this.left_title = "Team";
          break;
        }
        case "/index/direction": {
          this.active_color = "#a32e00";
          this.left_title = "Direction";
          break;
        }
        case "/index/research": {
          this.active_color = "#006630";
          this.left_title = "Research";
          break;
        }
        case "/index/cooperation": {
          this.active_color = "#3682de";
          this.left_title = "Cooperation";
          break;
        }
        case "/index/resource": {
          this.active_color = "#a32e00";
          this.left_title = "Resource";
          break;
        }
        case "/index/contact": {
          this.active_color = "#006630";
          this.left_title = "Contact";
          break;
        }
        default: {
          this.active_color = "black";
          this.left_title = "";
          break;
        }
      }
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

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  font-family: MessinaSans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #041811;
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

.leftSide {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 84px;
  border-right: 1px solid rgba(128, 128, 128, 0.231);
  z-index: 100;
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