<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "table",
      "submenu"
    ])
  },
  methods: {
    // 存入数据防止刷新清空
    saveState() {
      sessionStorage.setItem("table", JSON.stringify(this.table));
      sessionStorage.setItem("submenu", JSON.stringify(this.submenu));
    },
  },
  mounted() {
    // 将数据保存到vuex
    window.addEventListener("unload", this.saveState);
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */



</style>
