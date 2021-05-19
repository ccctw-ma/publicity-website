<template>
  <div>
    <!-- 面包屑 -->
    <el-row>
      <el-col :span="18" :offset="3">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>团队概况</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!--文章 -->
    <div class="article" v-for="(item, index) in listData" :key="item.id">
      <el-row>
        <el-col :span="18" :offset="3">
          <!-- 标题 -->
          <el-row>
            <h2 :class="[index == 0 ? 'article_first_title' : 'article_title']">
              {{ item.title }}
            </h2>
          </el-row>
          <!-- 正文 -->
          <el-row
            :gutter="20"
            type="flex"
            justify="space-between"
            style="margin-bottom: 20px"
          >
            <el-col :span="12">
              <div v-if="item.description.length !== 0">
                <p>{{ item.description }}</p>

                <el-button @click="show3 = !show3" plain style="float:left">Click Me</el-button>

                <div >
                  <el-collapse-transition>
                    <div v-show="show3">
                      <div  v-html="item.content"></div>
                    </div>
                  </el-collapse-transition>
                </div>
              </div>
              <div v-else v-html="item.content"></div>
            </el-col>
            <el-col :span="12">
              <img
                src="https://www.mit.edu/files/images/201807/MIT-Brain-Drug-Delivery-03.jpg"
                alt=""
                width="300px"
              />
              <video
                src="https://www.mit.edu/files/images/201805/research-2_0.mp4"
                muted
                autoplay
                loop
                width="300px"
              ></video>
            </el-col>
            <!-- 资源 -->
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
  <!-- <h2 class="left_title">
        <span>团队概况</span>
      </h2> -->
  <!-- <el-col :span="2" :offset="2">
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane label="团队简介" name="teamInfo"> </el-tab-pane>
          <el-tab-pane label="负责人简介" name="teamLeader"></el-tab-pane>
          <el-tab-pane label="团队成员" name="teamMember"> </el-tab-pane>
          <el-tab-pane label="团队文化" name="teamCulture"></el-tab-pane>
        </el-tabs>
      </el-col> -->
</template>

<script>
export default {
  name: "team",
  components: {},
  data() {
    return {
      listData: [],
      content: "",
      kind: "",
      show3: true,
    };
  },
  computed: {},
  methods: {
    handleClick(target) {
      // console.log(e.name);
      this.getListData(target.name);
      this.kind = target.label;
    },
    getListData(params) {
      this.$axios
        .get("team/queryTeamNotice", {
          params: {
            kind: params,
          },
        })
        .then((res) => {
          this.listData.push(res.data[0]);
        });
    },
  },
  created() {
    this.getListData("teamInfo");
    this.getListData("teamLeader");
    this.getListData("teamMember");
    this.getListData("teamCulture");
    this.listData.sort((item) => item.id);
    console.log(this.listData);
    // this.kind = '团队简介';
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

.article {
  border-bottom: 1px solid rgba(128, 128, 128, 0.231);
  z-index: 100;
}

.article_first_title {
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
  margin-top: -1px;
  padding-bottom: 20px;
  /* display: inline-block; */
  float: left;
  /* border-top: 3px solid rgba(31, 117, 221, 0.884); */
}

.article_title {
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
  border-top: 3px solid rgba(31, 117, 221, 0.884);
  margin-top: -1px;
  padding-top: 20px;
  padding-bottom: 20px;
  /* display: inline-block; */
  float: left;
}
.left_title {
  position: absolute;
  left: 10px;
  top: 100px;
  transform: rotate(90deg);
  white-space: nowrap;
  font-family: MessinaSans, sans-serif;
  font-weight: bolder;
  font: black;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
