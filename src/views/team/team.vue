<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="2">
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane label="团队简介" name="teamInfo"> </el-tab-pane>
          <el-tab-pane label="负责人简介" name="teamLeader"></el-tab-pane>
          <el-tab-pane label="团队成员" name="teamMember"> </el-tab-pane>
          <el-tab-pane label="团队文化" name="teamCulture"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15" :offset="1">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>团队概括</el-breadcrumb-item>
            <el-breadcrumb-item>{{ kind }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div v-html="content" class="notice"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "team",
  components: {},
  data() {
    return {
      listData: [],
      content: "",
      kind: "",
    };
  },
  computed: {},
  methods: {
    handleClick(target) {
      // console.log(e.name);
      this.getListData(target.name);
      this.kind = target.label;
    },
    getListData(params) {
      this.$axios
        .get("team/queryTeamNotice", {
          params: {
            kind: params,
          },
        })
        .then((res) => {
          this.listData = res.data;
          this.content = this.listData[0].content;
        });
    },
  },
  mounted() {
    this.getListData('teamInfo');
    this.kind = '团队简介'
  },
};
</script>

<style>

.breadcrumb{
  font-weight: bold;
  margin: 20px 0 0 20px;
}
</style>
