<template>
  <div>
    <el-row type="flex" justify="center">
      <!-- <el-col :span="1">左部</el-col> -->
      <el-col :span="18" :offset="1">
        <div class="block">
          <el-timeline>
            <el-timeline-item>
              <el-carousel :interval="4000" type="card" height="280px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </el-timeline-item>
            <el-timeline-item>
             
              <el-card shadow="hover">
                 团队介绍
              </el-card>
            </el-timeline-item>
            <el-timeline-item>
             
              <el-card shadow="hover">
                 通知公告
              </el-card>
            </el-timeline-item>
            <el-timeline-item>
             
              <el-card shadow="hover">
                 学术海报
              </el-card>
            </el-timeline-item>
            <el-timeline-item>
             
              <el-card shadow="hover">
                  新闻动态
              </el-card>
            </el-timeline-item>
           

          </el-timeline>
          
          
        </div>
      </el-col>
      <el-col :span="2">
        <el-backtop
          target=".page-component__scroll .el-scrollbar__wrap"
          :bottom="100"
        >
          <div
            style="
               {
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
              }
            "
          >
            UP
          </div>
        </el-backtop></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
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
