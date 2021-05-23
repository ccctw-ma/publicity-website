<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "cooperation",
  components: {},
  data() {
    return {
      imageList: [],
      imageUrls: [],
    };
  },
  computed: {},
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    change(e) {
      let files = e.target.files;
      console.log(files);
      // 上传部分
      let url = "http://82.157.179.123:8080/file/fileUpload"; //你的后台上传地址
      let data = new FormData();
      data.append("file", files[0]);
      console.log(data);
      this.$axios({
        url,
        method: "post",
        data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        //原生获取上传进度的事件
        onUploadProgress: function (progressEvent) {
          let complete =
            (((progressEvent.loaded / progressEvent.total) * 100) | 0) + "%";
          console.log("上传 " + complete);
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAllImages() {
      this.$axios.get("file/queryAllFiles").then((res) => {
        console.log(res.data);
        let baseUrl = "http://82.157.179.123:8080/file/getImage?fileName=";
        this.imageList = res.data;
      });
    },
    getImages(imageName) {
      this.$axios
        .get("file/getImage", {
          params: {
            fileName: imageName,
          },
        })
        .then((res) => {
          console.log(res);
          this.image = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getAllImages();
  },
};
</script>

<style>
</style>
