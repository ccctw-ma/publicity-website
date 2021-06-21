<template>
  <div class="article">
    <el-row>
      <!-- 响应式处理 xs<768px -->
      <el-col :sm="{ span: 18, offset: 3 }" :xs="{ span: 22, offset: 1 }">
        <!-- 标题 -->
        <el-row>
          <h2 v-if="index == 0" class="article_first_title">
            {{ item.title }}
          </h2>
          <h2
            v-else
            :class="{
              article_title_1: theme === 1,
              article_title_2: theme === 2,
              article_title_3: theme === 3,
            }"
          >
            {{ item.title }}
          </h2>
        </el-row>
        <!-- 正文 -->
        <el-row
          :gutter="20"
          type="flex"
          justify="space-between"
          style="margin-bottom: 80px; flex-wrap: wrap"
        >
          <!-- 文字部分 -->
          <el-col :md="12" :xs="24" >
            <div v-if="item.description.length !== 0">
              <p style="text-align: left">{{ item.description }}</p>

              <button
                @click="showMoreInfo(item)"
                :class="{
                  article_moreInfo_1: theme === 1,
                  article_moreInfo_2: theme === 2,
                  article_moreInfo_3: theme === 3,
                }"
              >
                More Information
              </button>
            </div>
            <div v-else v-html="item.content"></div>
          </el-col>
          <!-- 多媒体 -->
          <el-col :md="{ span: 11, offset: 1 }" :xs="24" >
            <div v-if="item.mediaType === 'video'">
              <video
                :src="item.mediaUrl"
                muted
                autoplay
                loop
                class="image_cover"
              ></video>
            </div>
            <div
              v-else-if="item.mediaType === 'image'"
              style="padding: 0; display: block"
            >
              <img :src="item.mediaUrl" alt="" class="image_cover" />
            </div>
          </el-col>
          <!-- 资源 -->
        </el-row>
        <!-- 更多的信息 -->
        <transition name="el-fade-in-linear">
          <div v-html="item.content" class="moreInfo" v-show="item.show"></div>
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
    return {
      
    };
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
<style lang="less">
.article {
  border-bottom: 1px solid rgba(128, 128, 128, 0.231);
  z-index: 100;
}
.article_title {
  font-weight: 600;
  line-height: 1.3;
  font-size: 24px;
  margin-top: -1px;
  float: left;
  padding-top: 20px;
  @media (min-width: 720px) and (max-width: 1100px) {
    font-size: calc(24px + 12.006 * (100vw - 720px) / 380);
  }
  @media (min-width: 1100px) {
    font-size: 36px;
  }
}
.article_first_title {
  .article_title();
}
/* 三种不同的标题样式 只是颜色不太一致*/
.article_title_1 {
  border-top: 3px solid #3682de;
  .article_title();
}
.article_title_2 {
  border-top: 3px solid #a32e00;
  .article_title();
}
.article_title_3 {
  border-top: 3px solid #006630;
  .article_title();
}

// 显示更多信息的按钮
.article_moreInfo {
  text-align: center;
  float: left;
  width: 140px;
  @media (min-width: 720px) and (max-width: 1100px) {
    width: calc(140px + 40 * (100vw - 720px) / 380);
  }
  @media (min-width: 1100px) {
    width: 180px;
  }
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
//更多信息按钮悬浮效果
.article_moreInfo_hover {
  color: white;
  transition-duration: 0.5s;
}

/* 三种不同的更多信息样式 */
.article_moreInfo_1 {
  .article_moreInfo();
  border: 1px solid #3682de;
}
.article_moreInfo_1:hover {
  .article_moreInfo_hover();
  background: #3682de;
}
.article_moreInfo_2 {
  .article_moreInfo();
  border: 1px solid #a32e00;
}
.article_moreInfo_2:hover {
  background: #a32e00;
  .article_moreInfo_hover();
}
.article_moreInfo_3 {
  border: 1px solid #006630;
  .article_moreInfo();
}
.article_moreInfo_3:hover {
  background: #006630;
  .article_moreInfo_hover();
}

.image_cover {
  display: block;
  // max-width: 500px;
  width: 100%;
  max-height: 500px;
  transition: all 0.25s ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  animation-duration: 0.3s;
  animation-name: fadeOutIn;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
}

// .image_cover:hover {
//   -webkit-transform: scale(1.02);
//   -ms-transform: scale(1.02);
//   transform: scale(1.02);
// }

// 更多信息显示区域的大小
.moreInfo {
  padding: 0;
  margin-bottom: 80px;
}

// 子目录的侧边栏标题
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

// 动画

.slide-in-bottom {
  animation: slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>