<template>
  <div class="article">
    <el-row>
      <el-col :span="18" :offset="3">
        <!-- 标题 -->
        <el-row>
          <h2 v-if="index == 0" class="article_first_title">
            {{ item.title }}
          </h2>
          <h2 v-else :class="{'article_title_1':theme===1,'article_title_2':theme===2,'article_title_3':theme===3}">
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

              <button @click="showMoreInfo(item)" :class="{'article_moreInfo_1':theme===1,'article_moreInfo_2':theme===2,'article_moreInfo_3':theme===3}">
                More Information
              </button>
            </div>
            <div v-else v-html="item.content"></div>
          </el-col>
          <!-- 多媒体 -->
          <el-col :span="11" :offset="1">
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
          v-show="item.show">
          </div>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "notice",
  props: ["item", "index", "theme"],
  data() {
    return {};
  },
  methods: {
    //展示更多信息
    showMoreInfo(item) {
      if (item.show == undefined) {
        this.$set(item, "show", true);
      } else {
        item.show = !item.show;
      }
    },
  },
};
</script>
<style>
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

/* 三种不同的标题样式 */
.article_title_1 {
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
  border-top: 3px solid #3682de;
  margin-top: -1px;
  padding-top: 20px;
  padding-bottom: 20px;
  float: left;
}
.article_title_2 {
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
  border-top: 3px solid #a32e00;
  margin-top: -1px;
  padding-top: 20px;
  padding-bottom: 20px;
  float: left;
}
.article_title_3 {
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
  border-top: 3px solid #006630;
  margin-top: -1px;
  padding-top: 20px;
  padding-bottom: 20px;
  float: left;
}

/* 三种不同的更多信息样式 */
.article_moreInfo_1 {
  text-align: center;
  float: left;
  width: 180px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #3682de;
  background: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
.article_moreInfo_1:hover {
  background: #3682de;
  color: white;
  transition-duration: 0.5s;
}

.article_moreInfo_2 {
  text-align: center;
  float: left;
  width: 180px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #a32e00;
  background: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
.article_moreInfo_2:hover {
  background: #a32e00;
  color: white;
  transition-duration: 0.5s;
}

.article_moreInfo_3 {
  text-align: center;
  float: left;
  width: 180px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #006630;
  background: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
.article_moreInfo_3:hover {
  background: #006630;
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

/* .transition-box {
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
} */
</style>