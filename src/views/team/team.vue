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
            style="margin-bottom: 80px"
          >
            <!-- 文字部分 -->
            <el-col :span="12">
              <div v-if="item.description.length !== 0">
                <p style="text-align: left">{{ item.description }}</p>

                <button @click="showMoreInfo(item)" class="article_moreInfo">
                  More Information
                </button>
              </div>
              <div v-else v-html="item.content"></div>
            </el-col>
            <!-- 多媒体 -->
            <el-col :span="12">
              <div v-if="item.mediaType === 'video'">
                <video
                  :src="item.mediaUrl"
                  width="500px"
                  muted
                  autoplay
                  loop
                ></video>
              </div>
              <div v-else-if="item.mediaType === 'image'">
                <img :src="item.mediaUrl" alt="" width="500px" />
              </div>

              <!-- <img
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
              ></video> -->
            </el-col>
            <!-- 资源 -->
          </el-row>
          <!-- 更多的信息 -->
          <transition name="el-fade-in-linear">
            <el-row
              :gutter="20"
              type="flex"
              justify="space-between"
              style="margin-bottom: 80px"
              v-show="item.show"
            >
              <div v-html="item.content" ></div>
            </el-row>
          </transition>
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
      showMore: false,
    };
  },
  computed: {},
  methods: {
    handleClick(target) {
      // console.log(e.name);
      this.getListData(target.name);
      this.kind = target.label;
    },
    //按照类别获取信息
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
    //获取使用的信息
    getAllData() {
      this.$axios.get("/team/queryAllTeamNotice").then((res) => {
        this.listData = res.data;
        console.log(this.listData);
      });
    },
    //展示更多信息
    showMoreInfo(item) {
      if (item.show == undefined) {
        this.$set(item, "show", true);
      } else {
        item.show = !item.show;
      }
    },
  },
  created() {
    // this.getListData("teamInfo");
    // this.getListData("teamLeader");
    // this.getListData("teamMember");
    // this.getListData("teamCulture");

    this.getAllData();

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

.article_moreInfo {
  text-align: center;
  float: left;
  width: 180px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid rgba(31, 117, 221, 0.884);
  background: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}

.article_moreInfo:hover {
  background: rgb(31, 117, 221);
  color: white;
  transition-duration: 0.5s;
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

/* img {
  clip-path: circle(40% at 50% 50%);
  -webkit-clip-path: circle(40% at 50% 50%);
  transition: all 400ms ease;
  cursor: pointer;
}
img:hover {
  clip-path: circle(75% at 50% 50%);
  -webkit-clip-path: circle(75% at 50% 50%);
} */

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
