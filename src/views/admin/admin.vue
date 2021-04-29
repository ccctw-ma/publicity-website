<template>
  <el-container>
    <el-header class="adminHeader">
    
      ADMIN
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-menu
          :unique-opened=true
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">团队概况</span>
            </template>
            <el-menu-item index="1-1" >团队简介</el-menu-item>
            <el-menu-item index="1-2">负责人介绍</el-menu-item>
            <el-menu-item index="1-3">团队成员</el-menu-item>
            <el-menu-item index="1-4">团队文化</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">科研方向</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">科学研究</span>
            </template>
            <el-menu-item index="3-1">科研项目</el-menu-item>
            <el-menu-item index="3-2">论文专著</el-menu-item>
            <el-menu-item index="3-3">获奖内容</el-menu-item>
            <el-menu-item index="3-4">专利</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">科研平台</span>
            </template>
            <el-menu-item index="4-1">仪器设备</el-menu-item>
            <el-menu-item index="4-2">实验环境</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">交流合作</span>
            </template>
            <el-menu-item index="5-1">学术交流</el-menu-item>
            <el-menu-item index="5-2">学术沙龙</el-menu-item>
            <el-menu-item index="5-3">合作机构</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">产学沿用</span>
            </template>
            <el-menu-item index="6-1">解决方案</el-menu-item>
            <el-menu-item index="6-2">应用案例</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">资源共享</span>
            </template>
            <el-menu-item index="7-1">规章制度</el-menu-item>
            <el-menu-item index="7-2">文档表格</el-menu-item>
            <el-menu-item index="7-3">讲座资料</el-menu-item>
            <el-menu-item index="7-4">会议期刊</el-menu-item>
            <el-menu-item index="7-5">论文共享</el-menu-item>
          </el-submenu>




        </el-menu>
      </el-aside>
      <el-main>
        <!-- <el-row>
          <el-button>提交</el-button>
        </el-row> -->
        <Editor v-if="isEdit"/>
        <List v-else @goEdit="changeStatus"/>
      </el-main>
    </el-container>
    <el-footer>Footer 这里放脚注</el-footer>
  </el-container>
</template>

<script>
import Editor from "@/components/admin/editor.vue";
import List from "@/components/admin/list.vue";
export default {
  name: "admin",
  components: { Editor,List},
  data() {
    return {
      isCollapse: true,
      isEdit:false
    };
  },

  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeStatus(){
      this.isEdit = !this.isEdit;
    }
  },
  mounted() {},
  created() {},
};
</script>

<style>
.adminHeader {
  background: rgb(80, 164, 238);
  border: rgb(80, 164, 238);
  float: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
  min-width: 200px;
  min-height: 400px;
  padding: 0;
  margin: 0;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  margin: 0;
}

.el-container {
  padding: 0;
  margin: 0;
}

.el-aside {
  padding: 0;
  margin: 0;
}

.el-main {
  /* background-color: #e6e6e6; */
  color: #333;
  text-align: center;
  min-height: 600px;
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
}
</style>
