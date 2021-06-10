<template>
  <el-container>
    <el-header>
      <el-row type="flex">
        <el-col :span="4">
          <div class="logo_content">
            <img src="../assets/bupt.jpg" alt="" class="logo" />
            <!-- <p class="logo_title">Beijing University of Posts and Telecommunications</p> -->
            <p class="logo_title">北京邮电大学</p>
          </div>
        </el-col>
        <el-col :span="16">
          <el-row type="flex" justify="center" v-if="isBigWindow">
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
          <el-row v-else>
            <el-menu
              default-active="1"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              menu-trigger="click"
              :router="true"
            >
              <el-submenu index="1">
                <template slot="title">{{ submenu }}</template>
                <el-menu-item index="/index/home">主页</el-menu-item>
                <el-menu-item index="/index/team">团队概况</el-menu-item>
                <el-menu-item index="/index/direction">科研方向</el-menu-item>
                <el-menu-item index="/index/research">科学研究</el-menu-item>
                <el-menu-item index="/index/cooperation">交流合作</el-menu-item>
                <el-menu-item index="/index/resource">资源共享</el-menu-item>
                <el-menu-item index="/index/contact">联系我们</el-menu-item>
              </el-submenu>
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
      <div class="leftSide hidden-sm-and-down"></div>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-main>
    <el-footer>Footer 这里放脚注</el-footer>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "index",
  components: {},
  data() {
    return {
      active_color: "",
      // table: "",
      screenWidth: document.body.clientWidth,
      isBigWindow: true,
      subMenuTitle: "首页",
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
    handleSelect(index, indexPath) {
      switch (index) {
        case "/index/team": {
          this.active_color = "#3682de";
          this.$store.commit("changeTable", "Team");
          this.$store.commit("changeSubmenu", "团队概况");
          // this.subMenuTitle = "团队简介";
          break;
        }
        case "/index/direction": {
          this.active_color = "#a32e00";
          this.$store.commit("changeTable", "Direction");
          this.$store.commit("changeSubmenu", "科研方向");
          this.subMenuTitle = "科研方向";
          break;
        }
        case "/index/research": {
          this.active_color = "#006630";
          this.$store.commit("changeTable", "Research");
          this.$store.commit("changeSubmenu", "科学研究");
          this.subMenuTitle = "科学研究";
          break;
        }
        case "/index/cooperation": {
          this.active_color = "#3682de";
          this.$store.commit("changeTable", "Cooperation");
          this.$store.commit("changeSubmenu", "交流合作");
          this.subMenuTitle = "交流合作";
          break;
        }
        case "/index/resource": {
          this.active_color = "#a32e00";
          this.$store.commit("changeTable", "Resource");
          this.$store.commit("changeSubmenu", "资源共享");
          this.subMenuTitle = "资源共享";
          break;
        }
        case "/index/contact": {
          this.active_color = "#006630";
          this.$store.commit("changeTable", "Contact");
          this.$store.commit("changeSubmenu", "联系我们");
          this.subMenuTitle = "联系我们";
          break;
        }
        default: {
          this.active_color = "black";
          this.$store.commit("changeTable", "");
          this.$store.commit("changeSubmenu", "主页");
          this.subMenuTitle = "主页";
          break;
        }
      }
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
        if (val < 992) {
          this.isBigWindow = false;
        } else {
          this.isBigWindow = true;
        }
      },
    },
  },
};
</script>

<style lang="less">
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  margin: 0;
}

.logo_content {
  display: inline-block;
  margin: 1px auto;
  vertical-align:middle;
}
.logo {
  max-height: 60px;
  margin: 1px auto;
  display: inline-block;
  // @media (min-width: 992px) {
  //   position: absolute;
  //   left: 54px;
  // }
}

.logo_title {
  display: inline-block;
  width: 40px;
  height: 60px;
  line-height: normal;
  font-family: cursive;
  font-weight: bolder;
  margin: 0px 5px;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
.el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
.el-submenu__title {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  font-family: MessinaSans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #041811;
}

.el-menu-demo {
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
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

/* 路由过渡特效 */
/* transition-property	指定CSS属性的name，transition效果
transition-duration	transition效果需要指定多少秒或毫秒才能完成
transition-timing-function	指定transition效果的转速曲线
transition-delay	定义transition效果开始的时候 */
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: transform 1s ease-in-out;
}

.transitionRouter-enter {
  transform: translateX(100%);
}
.transitionRouter-enter-to {
  transform: translateX(0);
}

.transitionRouter-leave {
  transform: translateX(0);
}
.transitionRouter-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
</style>