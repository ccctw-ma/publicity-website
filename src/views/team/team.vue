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
              <div
                v-else-if="item.mediaType === 'image'"
                style="padding: 0; overflow: hidden; display: block"
              >
                <img :src="item.mediaUrl" alt="" class="image_cover" />
              </div>
            </el-col>
            <!-- 资源 -->
          </el-row>
          <!-- 更多的信息 -->
          <transition name="el-fade-in-linear">
            <div
              v-html="item.content"
              class="moreInfo"
              v-show="item.show"
            ></div>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
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
      this.$axios.get("/Team/queryAllTeamNotice").then((res) => {
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
  border-top: 3px solid #3682de;
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
  border: 1px solid #3682dedb;
  background: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}

.article_moreInfo:hover {
  background: #3682de;
  color: white;
  transition-duration: 0.5s;
}
.image_cover {
  display: block;
  max-width: 500px;
  max-height: 500px;
  transition: all 0.25s ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  animation-duration: 0.3s;
  animation-name: fadeOutIn;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
}

.image_cover:hover {
  -webkit-transform: scale(1.02);
  -ms-transform: scale(1.02);
  transform: scale(1.02);
}

.moreInfo {
  padding: 0;
  margin-bottom: 80px;
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
