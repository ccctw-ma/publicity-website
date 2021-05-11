<template>
  <div>
    <el-tabs tab-position="left">
      <el-tab-pane label="团队概况"
        >团队概况
        <div v-html="content" style="width: 80%; margin-left: 100px"></div>
      </el-tab-pane>
      <el-tab-pane label="团队简介"> 团队简介

        <div v-html="content2" style="width: 80%; margin-left: 100px"></div>
      </el-tab-pane>
      <el-tab-pane label="负责人简介">负责人简介 </el-tab-pane>
      <el-tab-pane label="团队成员"> 团队成员</el-tab-pane>
      <el-tab-pane label="团队文化"> 团队文化</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "team",
  components: {},
  data() {
    return {
      content: `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p style="text-align: left;">&nbsp; &nbsp; &nbsp; &nbsp; &ldquo;<strong>普适位置感知计算团队</strong>&rdquo;(UbiLoc)创建于2009年12月，隶属于中国地质大学（武汉）地理与信息工程学院暨国家地理信息系统工程技术研究中心，致力于<strong>室内导航定位、室内制图与建模及其与普适计算、物联网、物理信息融合系统（CPS）、移动社交网络的交叉研究</strong>，团队依托学院在地图制图学与地理信息系统（GIS）、软件工程等学科领域的优势，坚持走多学科交叉和产学研相结合的发展道路。团队现有教师3名，其中教授1名，讲师2名，在读优秀博士、硕士研究生20多名，是一个特色鲜明、年轻具有活力的科研团队。</p>
<p style="text-align: center;"><img src="http://www.ubiloc.cn/files/upload/17/06/28/09/3822fa14-a4f0-4b3e-9e7d-fcc7ce6c7ca2.jpg" alt="" width="600" height="400" /></p>
<p style="text-align: center;">2017年6月团队成员（部分）合影</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 团队带头人尚建嘎教授，系华中科技大学计算机学院计算机体系结构博士，曾在我国GIS行业龙头企业中地公司从事三维GIS平台及应用工程研发多年，获国土资源科学技术一、二等奖各1项。团队成员大多为本校保研的优秀研究生和具有保研资格的优秀本科生，基础扎实、作风好，团队自成立以来，已先后有5名研究生通过国家公派或全额奖学金资助到世界知名高校读博深造，包括澳大利亚墨尔本大学（2018/19USNews世界大学排名中位居澳大利亚第1名、世界第26名）、德国海德堡大学（2018/19USNews世界大学排名中位居德国第2名、世界第54名）、荷兰代尔夫特理工大学（2018/19USNews世界大学排名中位居世界第170名）、瑞士苏黎世大学（2018/19USNews世界大学排名中位居世界第61名）、荷兰格罗宁根大学（2018/19USNews世界大学排名中位居世界第101名），1名研究生在本校攻读博士学位，另有多名研究生分别被阿里巴巴、华为、去哪儿网、千寻位置等知名IT企业录用；先后有7名研究生获得研究生国家奖学金8次，4名研究生获得（连续四届）校级十大优秀研究生标兵，团队中一些同学在本科期间就发表中文核心期刊论文多篇，先后有5名同学通过&ldquo;创新人才计划&rdquo;获得保研资格。团队同学分别在湖北省第九、十届&ldquo;挑战杯&middot;青春在沃&rdquo;大学生课外学术科技作品竞赛中获一等奖、特等奖各1项，在第十三届、十四届&ldquo;挑战杯&rdquo;全国大学生课外学术科技作品竞赛决赛中获二等奖、三等奖各1项。团队已毕业研究生古富强同学曾先后在2010、2012年度研究生数学建模大赛中荣获全国一等奖。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 近年来，团队先后承担国家自然科学基金、国家重点研发、国家科技支撑、国家重大专项等国家级项目/子课题多项，发表学术论文近50篇（含国际合作论文），其中SCI、EI收录20余篇，主编专著和教材各1部，获授权国家发明专利10项，获批软件著作权4项，其中有多名研究生以第一作者在国际顶级或知名期刊和国际会议上发表学术论文。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 团队坚持开放与合作，积极与国内外同行开展多种形式的学术交流与合作，产生了较广泛的学术影响力。在国内，与武大、深大等高校同行建立了良好合作关系；在国际上，与澳大利亚墨尔本大学、新南威尔士大学、昆士兰科技大学，美国科罗拉多矿业大学、佛罗里达大学，德国海德堡大学，瑞士苏黎世大学等世界知名大学相关研究团体建立了良好合作关系，在本领域合作发表学术论文10余篇。另外与美国、北京、上海、苏州、深圳、武汉等地众多高科技企业也建立起密切联系。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 团队本着&ldquo;艰苦朴素、求真务实&rdquo;的地大精神，坚持计算机软件、新型测绘、地理空间信息学科交叉以及产学研相结合的发展思路，不断开拓进取，开展面向行人/移动服务机器人的泛在定位、智能移动相关技术及其在智慧城市、医疗健康、公安军事等领域的应用研究，力求掌握核心技术，研发具有完全自主知识产权的室内智能定位平台和应用系统，致力成为本领域国内一流、国际知名的研发团体。</p>
<p align="right">普适位置感知计算团队UbiLoc</p>
<p align="right">&nbsp;</p>
<p align="right">2019-07-10</p>
</body>
</html>`,
      content2:`<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2 style="text-align: center;">实时定位技术及算法</h2>
<p style="text-align: left;">&nbsp; &nbsp; &nbsp; &nbsp; 跟踪国际前沿，系统开展室内定位精度改进、室内外无缝定位等实时定位技术研发，主要包括：（1）到达时间、到达时间差、到达角度、接收信号强度等距离测量方法；（2）三角定位、多边定位、最大似然定位等坐标计算方法；（3）平滑、卡尔曼滤波、粒子滤波、Sigma-point滤波、粒子滤波等精度改进方法。</p>
<p style="text-align: center;"><img src="http://www.ubiloc.cn/files/upload/12/08/11/06/c22a7eda-612f-47b1-a1cd-fa8b6ed2053d.png" alt="" width="361" height="394" /></p>
</body>
</html>`
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style>
</style>
