<template>
  <div>
  <Editor></Editor>
  </div>
</template>

<script>
import Editor from "@/components/admin/editor.vue"
export default {
  name: "admin",
  components: {Editor},
  data() {
    return {
      
      
    };
  },

  computed: {},
  methods: {
    input: (value) => {
      console.log(value);
    },
  
  },
  mounted() {},
  created() {
    
  },
};
</script>

<style>
</style>
