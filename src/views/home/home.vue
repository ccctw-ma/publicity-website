<template>
  <div>
    <el-row>
      <el-col class="moudle" style="background-color: #fafafa">
        <el-col span="8" offset="2">
          <!-- <img
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            style="height: 120px; width: 360px"
          /> -->
          <h1 style="font-size: 40px">融合云平台</h1>
        </el-col>
        <el-col span="4" offset="4">
          <el-collapse
            v-model="activeNames"
            @change="handleChange"
            style="margin-top: 70px"
          >
            <el-collapse-item title="反馈 Feedback" name="1">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <el-col span="4">
          <div style="margin-top: 80px">
            <el-input
              v-model="input"
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
            ></el-input>
          </div>
        </el-col>
      </el-col>
      <el-col class="moudle" style="background-color: #050505">
        <el-col class="leftWord" span="2">
          <h2 style="color: #bce672">团队简介</h2>
        </el-col>
        <!-- 走马灯 -->
        <el-col span="12">
          <el-carousel :interval="2000" :autoplay="true" style="height: 350px">
            <el-carousel-item
              v-for="item in imgArr"
              :key="item"
              style="height: 350px"
            >
              <img :src="item" class="image1" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <!-- 团队简介 -->
        <el-col :span="8">
          <h2 style="color: #bce672">团队简介</h2>
          <p style="color: white">
            {{ Introduce }}
          </p>
        </el-col>
      </el-col>
      <!-- Recent Highlights -->
      <el-col class="moudle">
        <el-col class="leftWord" span="2">
          <h2 style="color: #fff143">Recent Highlights</h2>
        </el-col>
        <el-col :span="20">
          <h2 style="color: #fff143">Recent Highlights</h2>
          <div v-for="index in 4" :key="index">
            <el-col :span="12" v-for="item in 2" :key="item">
              <el-col span="8">
                <img
                  src="https://news.mit.edu/sites/default/files/styles/frontpage__featured_news/public/images/202105/amethyst.jpg?itok=xn0y4C07"
                  style="width: 200px; height: 150px"
                />
              </el-col>
              <el-col span="16">
                <h4
                  style="
                    margin: 5px;
                    text-decoration: underline;
                    text-decoration-color: red;
                  "
                >
                  Inhabiting 21st-century science fiction
                </h4>
                <p style="text-align: left; margin: 5px">
                  Students in 21L.434 discover that the world-making of science
                  fiction is not only a way to envision possible futures, but a
                  powerful way to think about the world we currently inhabit.
                </p>
              </el-col>
            </el-col>
          </div>
          <!-- <button @click="learnMore" class="learnMore">
            <p style="font-size: 15px; font-weight: bold">learn more</p>
          </button> -->
        </el-col>
      </el-col>
      <!-- In the Media -->
      <el-col class="moudle">
        <el-col class="leftWord" span="2">
          <h2 style="color: #fff143">In the Media</h2>
        </el-col>
        <el-col :span="20">
          <h2 style="color: #fff143">In the Media</h2>
          <el-col :span="8" v-for="i in 3" :key="i" style="padding: 20px">
            <el-card :body-style="{ padding: '0px' }">
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
        </el-col>
      </el-col>
      <!-- 学术海报 -->
      <el-col class="moudle">
        <el-col class="leftWord" span="2">
          <h2 style="color: #fff143">学术海报</h2>
        </el-col>
        <el-col :span="20">
          <h2 style="color: #fff143">学术海报</h2>
          <el-col
            :span="8"
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
        </el-col>
      </el-col>
      <!-- 关于我们 -->
      <el-col class="moudle" style="background-color: #fafafa">
        <el-col class="leftWord" span="2">
          <h2 style="color: #fa8c35">关于我们</h2>
        </el-col>
        <el-col :span="20">
          <el-col :span="18">
            <el-col>
              <img
                src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g6/M00/09/0D/ChMkKmCHzvuIdkmLAA_0zxaWKyEAAN5nAF6ZZYAD_Tn043.jpg"
                style="width: 200px; height: 150px"
              />
            </el-col>
            <h3 style="float: left">News by Schools/College:</h3>
            <el-col>
              <a href="https://www.bupt.edu.cn/"
                ><p class="link">01.School of Architecture and Planning</p></a
              >
            </el-col>
            <el-col>
              <a href="https://www.bupt.edu.cn/"
                ><p class="link">02.School of Engineering</p></a
              >
            </el-col>
            <el-col>
              <a href="https://www.bupt.edu.cn/"
                ><p class="link">
                  03.School of Humanities, Arts, and Social Sciences
                </p></a
              >
            </el-col>
            <el-col>
              <a href="https://www.bupt.edu.cn/"
                ><p class="link">04.MIT Sloan School of Management</p></a
              >
            </el-col>
            <el-col>
              <a href="https://www.bupt.edu.cn/"
                ><p class="link">05.School of Science</p></a
              >
            </el-col>
            <el-col>
              <a href="https://www.bupt.edu.cn/"
                ><p class="link">06.MIT Schwarzman College of Computing</p></a
              >
            </el-col>
            <br /><br />
            <el-col>
              <el-col span="8">
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">About the MIT News Office</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">Press Inquiries</p></a
                  >
                </el-col>
              </el-col>
              <el-col span="8">
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">MIT News Press Center</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">Filming Guidelines</p></a
                  >
                </el-col>
              </el-col>
              <el-col span="8">
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">Terms of Use</p></a
                  >
                </el-col>
                <el-col>
                  <a href="https://www.bupt.edu.cn/"
                    ><p class="link">RSS Feeds</p></a
                  >
                </el-col>
              </el-col>
            </el-col>
          </el-col>
          <el-col :span="6">
            <h2 style="color: #fa8c35">关于我们</h2>
            <div v-for="index in 4" :key="index">
              <button @click="goToBUPT" class="foot">
                <p style="font-size: 20px">融合云平台</p>
              </button>
            </div>
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
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
      this.Introduce =
        "“普适位置感知计算团队”(UbiLoc)创建于2009年12月，隶属于中国地质大学（武汉）地理与信息工程学院暨国家地理信息系统工程技术研究中心，致力于室内导航定位、室内制图与建模及其与普适计算、物联网、物理信息融合系统（CPS）、移动社交网络的交叉研究，团队依托学院在地图制图学与地理信息系统（GIS）、软件工程等学科领域的优势，坚持走多学科交叉和产学研相结合的发展道路。团队现有教师3名，其中教授1名，讲师2名，在读优秀博士、硕士研究生20多名，是一个特色鲜明、年轻具有活力的科研团队。";
      //以后有接口再继续改动
    },
    goToBUPT: function () {
      window.location.href = "https://www.bupt.edu.cn/";
    },
    goToDetail: function () {
      window.location.href = "https://www.bupt.edu.cn/";
    },
  },
  mounted() {
    this.getIntroduce();
  },
};
</script>

<style>
#left {
  border-right-style: solid;
  border-right-color: black;
  border-right-width: 1px;
}
.image {
  width: 100%;
  display: block;
}
.image1 {
  width: 100%;
  height: inherit;
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
.moudle {
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
.leftWord {
  margin-top: 30px;
  transform: rotate(90deg);
  white-space: nowrap;
}
</style>
