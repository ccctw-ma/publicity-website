<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="2"></el-col>
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
              <el-carousel-item v-for="(image, index) in images" :key="index">
                <!-- <h3 class="medium">图片{{ item }}</h3> -->
                <img :src="image.imageUrl" style="width: 100%;
    height: 100%;
    object-fit:cover;"/>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <!-- 团队简介 -->
          <el-col :span="24">
            <h2>团队简介</h2>
            <el-image src="http://www.ubiloc.cn/images/03.jpg" fit="fill"> </el-image>
            <img src="http://www.ubiloc.cn/images/03.jpg" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      data: {
        notices: [
          {
            noticeId: 1,
            noticeTitle: "2015年 UbiLoc“挑战杯”项目组 招贤启事",
            noticeAuthor: "Walter Yu",
            noticeContent:
              "  “挑战杯”全国大学生课外学术科技作品竞赛是由共青团中央、中国科协、教育部、全国学联和地方政府共同主办的全国性的大学生课外学术实践竞赛活动，创办于1989年，历经20多年的发展，竞赛规模持续扩大，作品类别日益丰富，涵盖了自然科学基础研究、科技发明创造、哲学社会科学调查研究等多个领域，每届参赛高校已达千余所，成为200多万大学生的竞技场。“挑战杯”被誉为当代大学生科技创新创业的“奥林匹克”盛会，是目前国内大学生最关注最热门的全国性竞赛，也是全国最具代表性、权威性、示范性、导向性的大学生竞赛。2015年第十四届“挑战杯”竞赛将由广东工业大学和香港科技大学联合承办。\r\n信息工程学院普适位置感知计算团队UbiLoc挑战杯项目组2013年申报的课外学术作品《基于室内定位技术的应急响应情景感知导航系统》，在第十三届全国“挑战杯”竞赛中荣获二等奖。百尺竿头，更进一步。为了备战2015年“挑战杯”竞赛，团队特成立挑战杯项目组。目前项目组因力量有限，现面向信息工程学院本科生招纳7名优秀同学进入“挑战杯”项目组，从事相关研究与开发工作。相关情况如下：",
            noticeTime: "2020-04-24",
          },
          {
            noticeId: 2,
            noticeTitle: "关于组织团队同学参加第一届空间信息智能服务研讨会通知",
            noticeAuthor: "Walter Yu ",
            noticeContent:
              "为了进一步推进空间信息智能服务的研究，促进研究人员的学术交流，武汉大学测绘遥感信息工程国家重点实验室定于2013年12月6-8日（6日报到）在武汉弘毅大酒店召开“第一届空间信息智能服务研讨会”。届时，主办方将邀请国内空间信息智能服务领域的著名专家和学者参会，共同探讨空间信息智能服务理论与方法问题，增进同行间的相互了解。本次大会包含主题报告、分会场专题交流等内容。",
            noticeTime: "2020-12-03",
          },
        ],
        news: [
          {
            newId: 1,
            newContent:
              "为增进研究中心教师之间、师生之间的交流，活跃学术氛围，拓展研究生的学术视野，地理与信息工程学院智能系统软件技术研究中心近期举办了以座谈交流为主要形式的学术沙龙系列活动。 \r\n\r\n      2020年元月4日在中国地质大学（武汉）未来城校区科教楼八405会议室举办了第一期学术沙龙活动。本次沙龙邀请了本中心博士研究生余芳文和武汉大学计算机学院硕士研究生熊燚铭为大家做了两场精彩的学术报告。",
            newAuthor: "ubiloc",
            newTime: "2020-03-31",
            newTitle: "智能系统软件技术研究中心学术沙龙——第一期",
          },
          {
            newId: 2,
            newContent:
              " 为增进研究中心教师之间、师生之间的交流，活跃学术氛围，拓展研究生的学术视野，地理与信息工程学院智能系统软件技术研究中心近期举办了以座谈交流为主要形式的学术沙龙系列活动。 \r\n\r\n      2020年元月11日在中国地质大学（武汉）未来城校区科教楼八405会议室举办了第二期学术沙龙活动。本次沙龙分为上午场和下午场，上午场邀请了华中科技大学计算机学院博士后阳俊博士和中国地质大学（武汉）地理与信息工程学院陈攀老师为大家做了两场精彩的学术报告。",
            newAuthor: "ubiloc",
            newTime: "2020-03-30",
            newTitle: "智能系统软件技术研究中心学术沙龙——第二期",
          },
        ],
        images: [
          {
            imageUrl: "http://www.ubiloc.cn/images/01.jpg",
            pageId: 0,
            location: 1,
          },
          {
            imageUrl: "http://www.ubiloc.cn/images/02.jpg",
            pageId: 0,
            location: 2,
          },
          {
            imageUrl: "http://www.ubiloc.cn/images/03.jpg",
            pageId: 0,
            location: 3,
          },
          {
            imageUrl: "http://www.ubiloc.cn/images/04.jpg",
            pageId: 0,
            location: 4,
          },
          {
            imageUrl: "http://www.ubiloc.cn/images/05.jpg",
            pageId: 0,
            location: 5,
          },
        ],
      },
      images: [
        {
          imageUrl: "http://www.ubiloc.cn/images/01.jpg",
          pageId: 0,
          location: 1,
        },
        {
          imageUrl: "http://www.ubiloc.cn/images/02.jpg",
          pageId: 0,
          location: 2,
        },
        {
          imageUrl: "http://www.ubiloc.cn/images/03.jpg",
          pageId: 0,
          location: 3,
        },
        {
          imageUrl: "http://www.ubiloc.cn/images/04.jpg",
          pageId: 0,
          location: 4,
        },
        {
          imageUrl: "http://www.ubiloc.cn/images/05.jpg",
          pageId: 0,
          location: 5,
        },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {
    // console.log(this.data);
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
</style>
