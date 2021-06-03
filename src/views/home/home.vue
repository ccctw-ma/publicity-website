<template>
  <div>
    <el-row type="flex" justify="center" class="all">
      <!-- <el-col :span="2"></el-col> -->
      <!-- 主要显示界面 -->
      <el-col :span="20">
        <el-row>
          <!-- 走马灯 -->
          <el-col :span="24">
            <el-carousel
              :interval="2000"
              type="card"
              height="280px"
              :autoplay="true"
              indicator-position="none"
            >
              <el-carousel-item v-for="item in imgArr" :key="item">
                <img :src="item" class="image1" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <!-- 团队简介 -->
          <el-col :span="24" class="introduce">
            <h2 style="color: #bce672">团队简介</h2>
            <p style="color: white">
              {{ Introduce }}
            </p>
          </el-col>
          <el-divider></el-divider>
          <!-- 学术海报 -->
          <el-col :span="24">
            <h2 style="color: #fff143">学术海报</h2>
          </el-col>
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
          <!-- 通知公告 -->
          <el-col>
            <h2 style="color: #d3b17d">通知公告</h2>
          </el-col>
          <el-col
            :span="8"
            v-for="item in 3"
            :key="item"
            style="padding: 20px; color: white"
            class="note"
          >
            <el-container class="notes">
              <el-aside width="100px">
                <el-avatar shape="square" :size="80" :fit="fit">
                  <h2 style="background-color: #f56c6c; margin: 0">
                    通知{{ item }}
                  </h2>
                </el-avatar>
                <!-- src="https://img1.baidu.com/it/u=2062164223,3783917881&fm=26&fmt=auto&gp=0.jpg" -->
                <el-divider></el-divider>
              </el-aside>
              <el-divider direction="vertical"></el-divider>
              <el-main>
                <h4 style="color: white; text-align: left">
                  实验室采购英文原版图书的通知
                </h4>
                <el-divider></el-divider>
                <p style="color: white; text-align: left">
                  实验室计划从美国购入一批与实验室各研究方向相关的英文原版图书，请每个小组通过amazon等网站先查阅一下相关资料。购入原则是：新或近三年来的经典之作、rapidlibrary等开放资源网站上没有电子档、对我们的研究开发确有很大帮助。登记工作由图书管理员完成。
                </p>
              </el-main>
            </el-container>
          </el-col>
          <el-col :span="24">
            <h2 style="color: #4b5cc4">新闻动态</h2>
            <el-col v-for="item in 5" :key="item">
              <div>
                <li style="color: white; float: left">事件{{ item }}</li>
                <div style="color: white; float: right">
                  2021/05/0{{ item }}
                </div>
              </div>

              <el-divider></el-divider>
            </el-col>
          </el-col>
          <el-col>
            <h2 style="color: #fa8c35">友情链接</h2>
            <el-link href="https://www.bupt.edu.cn/" type="primary"
              ><p>北京邮电大学</p>
            </el-link>
            <el-link href="http://people.ucas.ac.cn/~luohaiyong" type="success"
              ><p>罗海勇主页</p>
            </el-link>
            <el-link href="https://scs.bupt.edu.cn/" type="success"
              ><p>北邮计算机</p>
            </el-link>
          </el-col>
        </el-row>
      </el-col>
      <!-- <el-col :span="2"></el-col> -->
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
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g6/M00/09/0D/ChMkKmCHzvuIdkmLAA_0zxaWKyEAAN5nAF6ZZYAD_Tn043.jpg",
        "https://desk-fd.zol-img.com.cn/t_s720x360c5/g6/M00/0A/04/ChMkKWCIufeIQ8OTAARG8hd8RqwAAN7VwKQUIkABEcK515.jpg",
        "https://desk-fd.zol-img.com.cn/t_s720x360c5/g6/M00/0B/00/ChMkKmBamS-IdsvVABQVFnzWDOwAAL-UACX_LYAFBUu002.jpg",
        "https://desk-fd.zol-img.com.cn/t_s720x360c5/g6/M00/02/0E/ChMkKV_qldOIfXWYABMgkwLAFasAAHd_gH7hoQAEyCr686.jpg",
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/0D/0C/ChMlWl7WGpOIP-5kAAOR7AhEDyYAAPsKwEWpmYAA5IE726.jpg",
      ],
      screenWidth: 0,
    };
  },
  computed: {},
  methods: {
    getIntroduce: function () {
      this.Introduce =
        "“普适位置感知计算团队”(UbiLoc)创建于2009年12月，隶属于中国地质大学（武汉）地理与信息工程学院暨国家地理信息系统工程技术研究中心，致力于室内导航定位、室内制图与建模及其与普适计算、物联网、物理信息融合系统（CPS）、移动社交网络的交叉研究，团队依托学院在地图制图学与地理信息系统（GIS）、软件工程等学科领域的优势，坚持走多学科交叉和产学研相结合的发展道路。团队现有教师3名，其中教授1名，讲师2名，在读优秀博士、硕士研究生20多名，是一个特色鲜明、年轻具有活力的科研团队。";
      //以后有接口再继续改动
    },
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
  },
  mounted() {
    this.getIntroduce();
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
  },
};
</script>

<style scope>
#left {
  border-right-style: solid;
  border-right-color: black;
  border-right-width: 1px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.image {
  width: 100%;
  display: block;
}
.image1 {
  width: 100%;
  height: inherit;
}
.all {
  width: 100%;
  height: 100%;
  background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3370609392,2032957939&fm=26&gp=0.jpg);
  background-size: 100% 400px;
}
.notes {
  height: 300px;
}
.el-divider--vertical {
  display: inline-block;
  width: 2px;
  height: 100%;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>
