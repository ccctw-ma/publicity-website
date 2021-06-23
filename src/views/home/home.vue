<template>
  <div>
    <!-- 走马灯 -->
    <div class="CarouselContent">
      <el-carousel
        :interval="5000"
        :autoplay="false"
        arrow="hover"
        @change="handleCarouselChange"
      >
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item.addr" class="image" />
          <div :class="{ image_info: index === carouselIndex }">
            <h1 class="title">{{ item.title }}</h1>
            <p class="description">
              {{ item.message }}
            </p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Recent Highlights -->
    <div class="module">
      <!-- left -->
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord">
          <h2 style="color: black">Recent Highlights</h2>
        </div>
      </div>
      <!-- right -->
      <div class="rightContent">
        <el-row style="flex-wrap: wrap; margin: 5vw 0px 3vw 0">
          <el-col class="highlightContent" v-for="(item,index) in hightlights" :key="index">
            <el-row class="highlight">
              <el-col :span="10" class="image-content">
                <img
                  :src="item.img_url"
                  class="image"
                />
              </el-col>
              <el-col :span="14" class="article">
                <a href="#" class="title-link"
                  ><p class="title">
                   {{item.title}}
                  </p></a
                >

                <p class="content">
                 {{item.content}}
                </p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- In the Media -->
    <!-- <div class="module">
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord">
          <h2 style="color: #fff143">In the Media</h2>
        </div>
      </div>
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
    </div> -->

    <!-- 学术海报 -->
    <!-- <div class="module">
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord" span="2">
          <h2 style="color: #fff143">学术海报</h2>
        </div>
      </div>
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
    </div> -->

    <!-- Featured Videos -->
    <div class="module">
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord">
          <h2 style="color: black">Featured Videos</h2>
        </div>
      </div>
      <div class="rightContent">
        <el-row style="flex-wrap: wrap; margin: 5vw 0px 3vw 0">
          <el-col
            :sm="8"
            :xs="24"
            v-for="(item, index) in videoInfo"
            :key="index"
          >
            <el-card
              :body-style="{ padding: '0px' }"
              shadow="hover"
              class="featureContent"
            >
              <el-row>
                <el-col :sm="24" :xs="12" class="image-content">
                  <img :src="item.addr" class="image" />
                </el-col>
                <el-col :sm="24" :xs="12" class="text-content">
                  <p class="text">
                    {{ item.message }}
                  </p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="module" style="background-color: #f7f7f7">
      <div class="leftContent hidden-sm-and-down">
        <div class="leftWord">
          <h2 style="color: black">About Us</h2>
        </div>
      </div>
      <div class="rightContent">
        <el-row style="flex-wrap: wrap;  margin: 5vw 0px 3vw 0">
          <el-row :span="24">
            <el-col :span="22" :offset="2">
              <el-col>
                <h1 style="float: left; font-size: 30px; font-weight: bolder;">
                  友情链接
                </h1>
              </el-col>
              <el-col :md="3" :xs="12" :sm="6">
                <img
                  src="../../assets/2weima.png"
                  style="width: 100%; float: left"
                />
              </el-col>
              <el-col :md="{span:18,offset:1}"  :xs="21" :sm="17" style="text-align:left">
                <a class="link">北京邮电大学</a>
                <a class="link">计算机学院(国家示范性软件学院)</a>
                <a class="link">中科院计算所</a>
                <a class="link">工业和信息化部</a>
                <a class="link">科技部</a>
                <a class="link">中国卫星导航定位协会</a>
                <a class="link">普适计算（教育部）重点实验室</a>
                <a class="link">科学网</a>
                <a class="link">IDC</a>
              </el-col>
            </el-col>
          </el-row>
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
      banner: [
        {
          title: "公检法司精确定位与监控",
          message: "500+ 监狱/看守/戒毒/法院/办案中心选择精准位置服务",
          addr: "http://www.tsingoal.com/upload/202104/1618310512.jpg",
        },
        {
          title: "智慧城市综合位置物联网平台",
          message: "服务于学校、医院、养老院、市政、展会的指挥管控平台",
          addr: "http://www.tsingoal.com/upload/202011/1604746892.jpg",
        },
        {
          title: "工业4.0精确位置感知",
          message:
            "无线脉冲专利技术0.1米精度，在1200+案例中无缝接入MES/WMS/ERP/PMS系统",
          addr: "http://www.tsingoal.com/upload/202104/1618310239.jpg",
        },
      ],
      hightlights: [
        {
          img_url:
            "https://news.mit.edu/sites/default/files/styles/frontpage__featured_news/public/images/202106/Serotonin-being-and-serotonin-cooking.png?itok=793ni4dZ",
          title: "Finding the love hormone in a stressed-out world",
          content:
            "A new art/science collaboration uses molecular structures as its creative medium.",
        },
        {
          img_url:"https://news.mit.edu/sites/default/files/styles/frontpage__featured_news/public/images/202105/smart-e-scooters.jpg?itok=ErJLcUUb",
          title:"E-scooters as a new micro-mobility service",
          content:"SMART researchers explore the potential of e-scooter sharing as a replacement for short-distance transit in Singapore."
        },
        {
          img_url:"https://news.mit.edu/sites/default/files/styles/frontpage__featured_news/public/images/202106/USSOCOM-MIT-Professional-Education-AI-Course_0.jpg?itok=kgEaaBwB",
          title:"A unique collaboration with US Special Operations Command",
          content:"Nearly 300 government and military members participated in a new course exploring artificial intelligence."
        },
        {
          img_url:"https://news.mit.edu/sites/default/files/styles/frontpage__featured_news/public/images/202106/digital-humanities.png?itok=xpHdiUQW",
          title:"Online hub for research and teaching brings digital humanities to the fore",
          content:"Virtual collaboration sessions connect faculty and researchers to new tools, resources, and each other."
        },
   
      ],
      videoInfo: [
        {
          addr: "https://news.mit.edu/sites/default/files/images/202105/MIT-Spring-Campus-SL3.jpg",
          message:
            "For those who haven’t experienced the glorious sights of spring at MIT, we share this glimpse of our campus in full bloom. The blossoms and greenery are accompanied by flutist Sara Simpson, a PhD student in BCS.",
        },
        {
          addr: "https://news.mit.edu/sites/default/files/images/202105/goldstein_screenshotSliceSocial1920x1080_opt1.jpg",
          message:
            "After 31 years engineering medical solutions for the National Institutes of Health (NIH), Seth Goldstein ’61, SM ’62, SM ’63, SCD ’66 launched a second career as a kinetic sculptor. Not only do they move, they all achieve a specific goal.",
        },
        {
          addr: "https://news.mit.edu/sites/default/files/images/202105/MIT-Nurses-SL.jpg",
          message:
            "On National Nurses Day, MIT honors the 46 nurses who serve our community at MIT Medical. At times when people feel alone or vulnerable, “it is the nurse who can really make that connection, and make them feel comfortable,” Maureen Johnston says.",
        },
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
      // console.log(preIndex, index);
    },
  },
  mounted() {
    this.getIntroduce();
  },
};
</script>

<style lang="less">
// 每个模块主体
.module {
  width: 100%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.231);
  z-index: 101;
  display: flex;
  .leftContent {
    width: 84px;
    /* 左侧标题 */
    .leftWord {
      display: inline-block;
      position: relative;
      top: 5vw;
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
  }
  .rightContent {
    widows: 100%;
  }
}

.el-carousel__container {
  position: relative;
  height: 100vw/3;
}

// 走马灯
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
      text-align: center;
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

// recent highlights
.highlightContent {
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
  transition-duration: 0.3s;
  .highlight {
    margin: 0px 2vw 3vw;
    @media (max-width: 769px) {
      margin: 10px 0 0 10px;
    }
    float: left;
    .image-content {
      display: inline-block;
      overflow: hidden;
      .image {
        width: 100%;
        height: 100%;
      }
      .image:hover {
        transform: scale(1.05);
        transition-duration: 0.5s;
      }
    }
    .article {
      padding: 0 10px 0 10px;
      display: inline-block;
      vertical-align: top;
      .title-link {
        text-decoration: none;
        color: #333;

        .title {
          font-weight: 700;
          letter-spacing: -0.035em;
          margin: 0;
          padding: 2px 0 5px;
          line-height: 1.15;
          font-size: 24px;
          text-align: left;
          @media (max-width: 1600px) {
            font-size: 20px;
          }
          @media (max-width: 1024px) {
            font-size: 18px;
          }
        }
      }
      .title-link:hover {
        text-decoration: underline red;
      }

      .content {
        text-align: left;
        overflow: hidden;
        line-height: 1.3;
        font-size: 18px;
        margin: 0px 0px;
        text-decoration: none;
        @media (max-width: 1600px) {
          font-size: 17px;
        }
        @media (max-width: 1100px) {
          font-size: 15px;
        }
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}

// Featured Videos
.featureContent {
  margin: 0px 2vw 3vw;
  .image-content {
    display: inline-block;
    .image {
      width: 100%;
      height: 100%;
    }
    .image:hover {
      transform: scale(1.05);
      transition-duration: 0.5s;
    }
  }
  .text-content {
    display: inline-block;
    .text {
      line-height: 1.55em;
      text-align: left;
      font-size: 17px;
      padding: 16px 10px;
      @media (max-width: 1024px) {
        font-size: 15px;
        padding: 0px 10px;
        margin: 0px;
        vertical-align: top;
        overflow: hidden;
      }
      @media (max-width: 600px) {
        font-size: 12px;
        padding: 0px 5px;
        margin: 0px;
        vertical-align: top;
        overflow: hidden;
        max-height: 25vw;
      }
    }
  }
}

//  关于我们 
.about{

}

.slide-in-bottom {
  animation: slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
//滑动效果
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
