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
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">图片{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <!-- 团队简介 -->
          <el-col :span="24">
            <h2>团队简介</h2>
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
