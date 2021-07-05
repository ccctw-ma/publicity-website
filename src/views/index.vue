<template>
  <el-container>
    <!-- logo+导航栏 -->
    <el-header height="70px">
      <el-row type="flex" justify="start">
        <el-col
          :lg="{ span: 4, offset: 0 }"
          :md="{ span: 4, offset: 0 }"
          :sm="{ span: 6, offset: 3 }"
          :xs="{ span: 16, offset: 1 }"
        >
          <div class="logo_content">
            <div class="logo">
              <img
                src="../assets/bupt.jpg"
                alt="logo"
                style="width: 60px; height: 60px"
              />
            </div>
            <div class="logo_title">移动智能及时空数据挖掘实验室</div>
          </div>
        </el-col>
        <el-col :lg="16" :md="16" :sm="12" :xs="6">
          <!-- width>=992px显示 -->
          <el-row type="flex" justify="center" class="hidden-md-and-down">
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
          <!-- width<992px显示 -->
          <el-row type="flex" justify="end" class="hidden-lg-and-up">
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
      </el-row>
    </el-header>
    <!--主要显示内容-->
    <el-main style="padding: 0">
      <div class="leftSide hidden-sm-and-down"></div>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-main>
    <!-- 脚注部分的内容 -->
    <el-footer>
      <div class="foot-content">
        <p>
          版权所有 ：北京邮电大学 移动计算与智能信息处理研究团队
          邮编：100876 
        </p>
        <p>
          通信地址：北京市海淀区西土城路10号
          北京邮电大学 计算机学院(国家示范性软件学院)
        </p>
        <p>
          
        </p>
      </div>
    </el-footer>
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
        if (val < 1050) {
          this.isBigWindow = false;
        } else {
          this.isBigWindow = true;
        }
      },
    },
  },
};
</script>

<style lang="less" >
.el-header {
  color: #333;
  text-align: center;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  // border-bottom:springgreen 1px solid;
}

.logo_content {
  z-index: 2;
  min-width: 175px;
  @media (min-width: 992px) {
    position: absolute;
    left: 50px;
    margin: 1px 0 0 5px;
  }
  @media (max-width: 992px) {
    margin: 5px 0 0 0;
    float: left;
  }
}
.logo {
  display: inline-block;
}

.logo_title {
  display: inline-block;
  width: 115px;
  height: 60px;
  line-height: normal;
  // font-family: cursive;
  font-weight: bolder;
  margin-left: 5px;
  margin-top: 8px;
  vertical-align: top;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  font-family: MessinaSans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  // margin-top: 5px;
  color: #041811;
}

.el-submenu {
  margin-top: 5px;
  font-weight: 600;
}

.el-footer {
  color: #333;
  width: 100%;
  height: 100% !important;
  margin: 0;
  background-color: #f7f7f7;
  .foot-content {
    margin-left: 84px;
    text-align: center;
    @media (max-width:992px) {
      margin-left: 0px;
    }
    p {
      line-height: 1;
    }
  }
}

.el-main {
  /* background-color: #e6e6e6; */
  color: #333;
  text-align: center;
  min-height: 600px;
  margin-top: 60px;
}

/* 路由过渡特效 */
/* transition-property	指定CSS属性的name，transition效果
transition-duration	transition效果需要指定多少秒或毫秒才能完成
transition-timing-function	指定transition效果的转速曲线
transition-delay	定义transition效果开始的时候 */
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
  z-index: 1;
}
</style>