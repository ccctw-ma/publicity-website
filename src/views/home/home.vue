<template>
  <div>
    <!-- 大标题 -->
    <!-- <el-row class="module" style="background-color: #fafafa; margin-top: 10px">
      <el-col :span="8" :offset="2">
        <h1 class="bigTitle">融合定位云平台</h1>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-collapse
          v-model="activeNames"
          @change="handleChange"
          style="margin-top: 70px"
        >
          <el-collapse-item title="反馈 Feedback" name="1">
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="4">
        <div style="margin-top: 80px">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
          ></el-input>
        </div>
      </el-col>
    </el-row> -->

    <div class="CarouselContent">
      <el-carousel
        :interval="5000"
        :autoplay="false"
        arrow="hover"
        @change="handleCarouselChange"
      >
        <el-carousel-item v-for="(item, index) in imgArr" :key="index">
          <img :src="item" class="image" />
          <div :class="{ image_info: index === carouselIndex }">
            <h1 class="title">团队简介</h1>
            <p class="description">
              “普适位置感知计算团队”(UbiLoc)创建于2009年12月，
              致力于室内导航定位、室内制图与建模及其与普适计算、物联网、物理信息融合系统（CPS）、
              移动社交网络的交叉研究，团队依托学院在地图制图学与地理信息系统（GIS）、软件工程等学科领域的优势，
              坚持走多学科交叉和产学研相结合的发展道路。
            </p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- <img
      src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0D/0C/ChMlWl7WGpOIP-5kAAOR7AhEDyYAAPsKwEWpmYAA5IE726.jpg"
      style="width: 100%; z-index: 100"
    /> -->
    <!-- Recent Highlights -->
    <div class="module">
      <!-- left -->
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord">
          <h2 style="color: #fff143">Recent Highlights</h2>
        </div>
      </div>
      <!-- right -->
      <div class="rightContent">
        <el-row style="flex-wrap: wrap">
          <el-col :md="12" :xs="24" v-for="item in 6" :key="item">
            <el-row style="margin: 20px">
              <el-col :sm="8" :xs="10">
                <img
                  src="https://news.mit.edu/sites/default/files/styles/frontpage__featured_news/public/images/202105/amethyst.jpg?itok=xn0y4C07"
                  style="width: 100%"
                  class="slide-in-bottom"
                />
              </el-col>
              <el-col :sm="16" :xs="14">
                <h4
                  style="
                    margin: 5px;
                    text-decoration: underline;
                    text-decoration-color: red;
                  "
                >
                  Inhabiting 21st-century science fiction
                </h4>
                <p
                  style="text-align: left; margin: 10px"
                  class="hidden-xs-only"
                >
                  Students in 21L.434 discover that the world-making of science
                  fiction is not only a way to envision possible futures, but a
                  powerful way to think about the world we currently inhabit.
                </p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- In the Media -->
    <div class="module">
      <!-- left -->
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord">
          <h2 style="color: #fff143">In the Media</h2>
        </div>
      </div>
      <!-- right -->
      <div class="rightContent">
        <el-row style="flex-wrap: wrap">
          <el-col
            :md="8"
            :sm="12"
            :xs="24"
            v-for="i in 3"
            :key="i"
            style="padding: 20px"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <h4>Good Day LA</h4>
              <p style="text-align: left; margin: 5px">
                Prof. Christopher Capozzola speaks with Bob DeCastro of Good Day
                LA about the campaign to name a U.S. Navy Warship after Fireman
                2nd Class Telesforo Trinidad, the only American national of
                Asian and Filipino descent to have received a Congressional
                Medal of Honor.
              </p>
              <i class="el-icon-video-play"></i>
              <span
                style="
                  margin: 5px;
                  text-decoration: underline;
                  text-decoration-color: red;
                "
                @click="goToDetail"
              >
                learn more
              </span>
              <i class="el-icon-right"></i>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 学术海报 -->
    <div class="module">
      <!-- left -->
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord" span="2">
          <h2 style="color: #fff143">学术海报</h2>
        </div>
      </div>
      <!-- right -->
      <div class="rightContent">
        <el-row style="flex-wrap: wrap">
          <h2 style="color: #fff143">学术海报</h2>
          <el-col
            :md="8"
            :xs="24"
            v-for="item in 3"
            :key="item"
            style="padding: 20px"
            class="poster"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                class="image"
              />
              <div style="padding: 10px">
                <span>简要信息</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">点击查看详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="module">
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord" style="background-color: #fafafa">
          <h2 style="color: #fa8c35">关于我们</h2>
        </div>
      </div>
      <div class="rightContent">
        <el-row style="flex-wrap: wrap">
          <el-col :md="22" :offset="2" :xs="24">
            <el-col>
              <h1 style="float: left; font-size: 30px; font-weight: bolder">
                友情链接
              </h1>
            </el-col>
            <el-col :md="3" :xs="12">
              <img
                src="../../assets/2weima.png"
                style="width: 100%; float: left"
              />
            </el-col>
            <el-col :md="18" :offset="1" :xs="24">
              <el-col :md="8" :xs="24">
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">北京邮电大学</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">
                      计算机学院（国家示范性软件学院）
                    </p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">
                      工业和信息化部
                    </p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">科技部</p></a
                  >
                </el-col>
              </el-col>
              <el-col :md="8" :xs="24">
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">中国卫星导航定位协会</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">
                      普适计算（教育部）重点实验室
                    </p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">科学网</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">IEEE</p></a
                  >
                </el-col>
              </el-col>
              <el-col :md="8" :xs="24">
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">中科院计算所</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">Xerox PARC</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">IDC</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link" style="padding-top: 10px">Gartner</p></a
                  >
                </el-col>
              </el-col>
            </el-col>
            <el-col><br /></el-col>
            <el-col><br /></el-col>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- <div class="module
    ">
      <div class="leftContent hidden-sm-and-down">left</div>
      <div class="rightContent">
        <el-row style="flex-wrap: wrap"> right </el-row>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      carouselIndex: 0,
      Introduce: "",
      imgArr: [
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0D/0C/ChMlWl7WGpOIP-5kAAOR7AhEDyYAAPsKwEWpmYAA5IE726.jpg",
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g6/M00/09/0D/ChMkKmCHzvuIdkmLAA_0zxaWKyEAAN5nAF6ZZYAD_Tn043.jpg",
        "https://desk-fd.zol-img.com.cn/t_s720x360c5/g6/M00/0A/04/ChMkKWCIufeIQ8OTAARG8hd8RqwAAN7VwKQUIkABEcK515.jpg",
        "https://desk-fd.zol-img.com.cn/t_s720x360c5/g6/M00/0B/00/ChMkKmBamS-IdsvVABQVFnzWDOwAAL-UACX_LYAFBUu002.jpg",
        "https://desk-fd.zol-img.com.cn/t_s720x360c5/g6/M00/02/0E/ChMkKV_qldOIfXWYABMgkwLAFasAAHd_gH7hoQAEyCr686.jpg",
      ],
    };
  },
  computed: {},
  methods: {
    getIntroduce: function () {
      this.Introduce = 1;
      //以后有接口再继续改动
    },
    goToBUPT: function () {
      window.location.href = "https://www.bupt.edu.cn/";
    },
    goToDetail: function () {
      window.location.href = "https://www.bupt.edu.cn/";
    },
    handleCarouselChange(index, preIndex) {
      this.carouselIndex = index;
      console.log(preIndex, index);
    },
  },
  mounted() {
    this.getIntroduce();
  },
};
</script>

<style lang="less">
.el-carousel__container {
  position: relative;
  height: 50vw;
}

.CarouselContent {
  width: 100%;
  z-index: 200;
  margin-top: 5px;
  .image {
    width: 100%;
    display: block;
    height: auto;
  }
  .image_info {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    .title {
      color: #ffffff;
      animation: 0.8s slide 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @media (min-width: 1024px) {
        font-size: 46px;
      }
      @media (min-width: 425px) and (max-width: 1024px) {
        font-size: calc(16px + 30 * (100vw - 425px) / 600);
      }
      @media (max-width: 425px) {
        font-size: 16px;
      }
    }
    .description {
      color: #ffffff;
      // 两端对齐
      text-align: justify;
      animation: 0.8s slide 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @media (min-width: 1024px) {
        font-size: 16px;
      }
      @media (min-width: 425px) and (max-width: 1024px) {
        font-size: calc(8px + 8 * (100vw - 425px) / 600);
      }
      @media (max-width: 425px) {
        display: none;
      }
    }
  }
}

@keyframes slide {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.bottomLine {
  min-height: 120px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.231);
  z-index: 100;
}

// 每个模块主体
.module {
  width: 100%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.231);
  z-index: 101;
  display: flex;
}

.leftContent {
  width: 84px;
}
.rightContent {
  widows: 100%;
}

/* 左侧标题 */
.leftWord {
  display: inline-block;
  position: relative;
  top: 20px;
  left: 84px;
  width: auto;
  margin-top: 0;
  height: 84px;
  transform-origin: 0 0;
  transform: rotate(90deg);
  white-space: nowrap;
  font-size: 20px;
  z-index: 102;
}

.slide-in-bottom {
  animation: slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.el-divider--vertical {
  display: inline-block;
  width: 2px;
  height: 100%;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
  color: #fafafa;
}

.link {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: black;
  float: left;
  text-decoration: underline;
  text-decoration-color: red;
  padding: 5px;
  margin: 5px;
}
.foot {
  width: 350px;
  height: 70px;
  background-color: #fafafa;
  margin: 5px;
}
.learnMore {
  width: 250px;
  height: 50px;
  background-color: #ffffff;
  margin: 5px;
}
</style>
