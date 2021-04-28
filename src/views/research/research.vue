<template>
  <div>
    <h1>research</h1>
    <el-col :span="16" :offset="4">
      <div v-for="index in 3" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <el-container>
            <el-aside width="400px">
              <img :src="pictureAddress" class="image" @click="goToNext" />
            </el-aside>
            <el-main>
              <div style="padding: 14px">
                <el-link class="littleTitle" @click="goToNext"
                  ><h2>{{ title }}</h2></el-link
                >
                <p class="content">{{ text }}</p>
              </div>
            </el-main>
          </el-container>
        </el-card>
        <el-divider v-if="index!==3"></el-divider>
      </div>

      
    </el-col>
  </div>
</template>

<script>
export default {
  name: "research",
  components: {},
  data() {
    return {
      text: "",
      title: "",
      pictureAddress: "",
    };
  },
  computed: {},
  methods: {
    getTitle: function () {
      this.title = "小标题";
    },
    getText: function () {
      this.text = "今天天气真好";
      //console.log(this.text)
    }, //等后端接口
    getPictureAddress: function () {
      this.pictureAddress =
        "https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg";
      //console.log(this.pictureAddress)
    }, //同上
    goToNext: function () {
      console.log("finish");
      //这个是路由，需要在router/index.js里面注册,后面也不需要写成.格式vue
      //那个显示信息有一个v-for就可以了，不需要挨个写
      this.$router.push("/detailedContent.vue");
    }, //页面跳转
  },

  mounted() {
    this.getTitle();
    this.getText();
    this.getPictureAddress();
  },
};
</script>

<style>
.image {
  width: 400px;
  height: 300px;
}
.el-card {
  height: 300px;
}
/* .littleTitle{
  font-weight: 700;
  font-size: 20px;
} */
.content {
  font-size: 13px;
}
</style>
