<template>
  <div class="editor_main">
    <el-form>
      <!-- 标题作者 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="标题:" label-width="60px">
            <el-input
              v-model="notice.title"
              placeholder="请输入标题"
              type="textarea"
              autosize
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="作者:" label-width="60px">
            <el-input
              placeholder="请输入作者"
              autosize
              clearable
              v-model="notice.author"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 简介时间 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="简介:" label-width="60px">
            <el-input
              v-model="notice.description"
              placeholder="简介"
              type="textarea"
              autosize
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="时间:" label-width="60px">
            <el-date-picker
              v-model="notice.date"
              type="date"
              placeholder="请选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 资源地址和类型 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="资源地址:" label-width="80px">
            <el-input
              placeholder="请输入资源地址"
              autosize
              clearable
              v-model="notice.mediaUrl"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-form-item label="资源类型:" label-width="80px">
            <el-select
              v-model="notice.mediaType"
              clearable
              placeholder="请选择"
            >
              <el-option value="image"> </el-option>
              <el-option value="video"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 资源上传和资源列表 -->
      <el-row>
        <el-col :span="12">
          <input @change="upLoad" type="file" />
          <!-- <h5>只能上传图片文件，且不超过10M</h5> -->
        </el-col>
        <el-col :span="3" :offset="2">
          <el-button type="success" @click="openSource" round>{{
            source ? "关闭资源列表" : "打开资源列表"
          }}</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" @click="save" icon="el-icon-folder-checked"
            >保存</el-button
          >
        </el-col>
      </el-row>
      <!-- 资源列表 -->

      <div v-show="source">
        <div class="editor_imageList">
          <div
            v-for="(image, index) in imageList"
            :key="index"
            class="imagelist_item"
            @mouseover="handleImage(index)"
            @mouseleave="handleLeaveImage"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img
                :src="
                  'http://82.157.179.123:8080/file/getImage?fileName=' +
                  image.fileName
                "
                class="editor_images"
              />
              <transition name="fade">
                <div class="image_bottom" v-show="currentIndex === index">
                  <div class="image_name">
                    {{ image.fileName }}
                  </div>
                  <div :span="6">
                    <el-link
                      type="primary"
                      @click="use(image)"
                      style="display: inline-block; margin-left: 5px"
                      >使用</el-link
                    >
                    <el-link
                      type="danger"
                      @click="deleteImage(image)"
                      style="display: inline-block; margin-left: 10px"
                      >删除</el-link
                    >
                  </div>
                </div>
              </transition>
            </el-card>
          </div>
        </div>
      </div>

      <el-divider></el-divider>
      <vue-tinymce v-model="notice.content" :setting="setting" />
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "edit",
  components: {},
  props: ["data"],
  data() {
    return {
      content:
        '<h1 style="text-align: center;">长恨歌</h1><p style="text-align: center;">汉皇重色思倾国，御宇多年求不得。<br />杨家有女初长成，养在深闺人未识。<br />天生丽质难自弃，一朝选在君王侧。<br />回眸一笑百媚生，六宫粉黛无颜色。<br />春寒赐浴华清池，温泉水滑洗凝脂。<br />侍儿扶起娇无力，始是新承恩泽时。<br />云鬓花颜金步摇，芙蓉帐暖度春宵。<br />春宵苦短日高起，从此君王不早朝。<br />承欢侍宴无闲暇，春从春游夜专夜。<br />后宫佳丽三千人，三千宠爱在一身。<br />金屋妆成娇侍夜，玉楼宴罢醉和春。<br />姊妹弟兄皆列土，可怜光彩生门户。<br />遂令天下父母心，不重生男重生女。<br />骊宫高处入青云，仙乐风飘处处闻。<br />缓歌慢舞凝丝竹，尽日君王看不足。<br />渔阳鼙鼓动地来，惊破霓裳羽衣曲。</p><p style="text-align: center;">九重城阙烟尘生，千乘万骑西南行。<br />翠华摇摇行复止，西出都门百余里。<br />六军不发无奈何，宛转蛾眉马前死。<br />花钿委地无人收，翠翘金雀玉搔头。<br />君王掩面救不得，回看血泪相和流。<br />黄埃散漫风萧索，云栈萦纡登剑阁。<br />峨嵋山下少人行，旌旗无光日色薄。<br />蜀江水碧蜀山青，圣主朝朝暮暮情。<br />行宫见月伤心色，夜雨闻铃肠断声。<br />天旋日转回龙驭，到此踌躇不能去。<br />马嵬坡下泥土中，不见玉颜空死处。<br />君臣相顾尽沾衣，东望都门信马归。<br />归来池苑皆依旧，太液芙蓉未央柳。<br />芙蓉如面柳如眉，对此如何不泪垂。<br />春风桃李花开夜，秋雨梧桐叶落时。<br />西宫南苑多秋草，落叶满阶红不扫。<br />梨园弟子白发新，椒房阿监青娥老。<br />夕殿萤飞思悄然，孤灯挑尽未成眠。<br />迟迟钟鼓初长夜，耿耿星河欲曙天。<br />鸳鸯瓦冷霜华重，翡翠衾寒谁与共。<br />悠悠生死别经年，魂魄不曾来入梦。</p><p style="text-align: center;">临邛道士鸿都客，能以精诚致魂魄。<br />为感君王辗转思，遂教方士殷勤觅。<br />排空驭气奔如电，升天入地求之遍。<br />上穷碧落下黄泉，两处茫茫皆不见。<br />忽闻海上有仙山，山在虚无缥缈间。<br />楼阁玲珑五云起，其中绰约多仙子。<br />中有一人字太真，雪肤花貌参差是。<br />金阙西厢叩玉扃，转教小玉报双成。<br />闻道汉家天子使，九华帐里梦魂惊。<br />揽衣推枕起徘徊，珠箔银屏迤逦开。<br />云鬓半偏新睡觉，花冠不整下堂来。</p><p style="text-align: center;">风吹仙袂飘飖举，犹似霓裳羽衣舞。<br />玉容寂寞泪阑干，梨花一枝春带雨。<br />含情凝睇谢君王，一别音容两渺茫。<br />昭阳殿里恩爱绝，蓬莱宫中日月长。<br />回头下望人寰处，不见长安见尘雾。<br />惟将旧物表深情，钿合金钗寄将去。<br />钗留一股合一扇，钗擘黄金合分钿。<br />但令心似金钿坚，天上人间会相见。</p><p style="text-align: center;">临别殷勤重寄词，词中有誓两心知。<br />七月七日长生殿，夜半无人私语时。<br />在天愿作比翼鸟，在地愿为连理枝。<br />天长地久有时尽，此恨绵绵无绝期。</p>',
      setting: {
        menubar: true,
        toolbar:
          "searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote undo redo removeformat subscript superscript code codesample help', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons charmap forecolor backcolor fullpage fullscreen",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar:
          "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins:
          "advlist anchor autolink autoresize autosave charmap code codesample directionality emoticons fullpage fullscreen help hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount",
        language: "zh_CN", //本地化设置
        height: "auto",
      },
      source: false,
      imageList: [],
      currentIndex: -1,
    };
  },

  computed: {
    ...mapGetters([
      //当前操作的数据库表
      "table",
      //当前操作的表内子项的类别
      "kind",
      //是否在进行编辑
      "isEdit",
      //正在编辑的内容
      "notice",
    ]),
  },
  methods: {
    input: (value) => {
      console.log(value);
    },
    //保存文章
    save() {
      console.log("修改数据", this.notice);
      this.$axios
        .get("team/updateTeamNotice", {
          params: {
            id: this.notice.id,
            kind: this.kind,
            date: this.notice.date,
            author: this.notice.author,
            title: this.notice.title,
            description: this.notice.description,
            status: 0,
            content: this.notice.content,
            mediaType: this.notice.mediaType,
            mediaUrl: this.notice.mediaUrl,
          },
        })
        .then((res) => {
          if (res.data === 1) {
            this.$message.success("保存成功");
          } else {
            this.$$message.error("保存失败");
          }
          console.log(res);
        });

      this.$store.commit("changeEditStatus", false);
      this.$emit("refresh");
    },
    openSource() {
      if (this.source === false) {
        this.source = true;
        this.getAllImages();
      } else {
        this.source = false;
      }
    },
    //资源上传功能
    upLoad(e) {
      let files = e.target.files;
      // 上传部分
      let url = "http://82.157.179.123:8080/file/fileUpload"; //你的后台上传地址
      let data = new FormData();
      data.append("uploadFile", files[0]);
      this.$axios({
        url,
        method: "post",
        data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        //原生获取上传进度的事件
        onUploadProgress: function (progressEvent) {
          // let complete =
          //   (((progressEvent.loaded / progressEvent.total) * 100) | 0) + "%";
          // console.log("上传 " + complete);
          this.percentage = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          console.log(this.percentage);
        },
      })
        .then((res) => {
          if (res.data === 0) {
            this.$message.error("上传失败");
          } else if (res.data === 1) {
            this.$message.success("上传成功");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleImage(e) {
      // console.log(e);
      this.currentIndex = e;
    },
    handleLeaveImage() {
      this.currentIndex = -1;
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
    use(item) {
      this.notice.mediaType = item.fileType;
      this.notice.mediaUrl =
        "http://82.157.179.123:8080/file/getImage?fileName=" + item.fileName;
      this.$message.success("媒体资源修改成功");
    },
    deleteImage(item) {
      this.$axios
        .get("file/deleteFile", {
          params: {
            id: item.id,
          },
        })
        .then((res) => {
          if (res.data === 1) {
            this.$message.success("删除成功");
            this.getAllImages();
          } else {
            this.$message.error("删除失败");
          }
        })
        .catch((err) => {
          this.$message.error("删除失败");
        });
    },
  },
  mounted() {
    console.log("我在editor", this.kind, this.table);
  },

  created() {},
};
</script>

<style scoped>
.demo-form-inline {
  font-weight: bold;
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}

.editor_main {
  margin: 20px;
}

/* 图片列表 */
.editor_imageList {
  /* 伸缩容器 */
  display: flex;
  /* grid-gap: 30px 20px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(-webkit-calc(50% - 20px), 1fr)
  );
  grid-template-columns: repeat(auto-fill, minmax(calc(50% - 20px), 1fr));
  grid-auto-flow: dense; */
  /* 换行  */
  flex-wrap: wrap;
  /* 主轴对齐方式 */
  /* justify-content: space-around; */
  /* background: seagreen; */
  align-items: flex-start;
  margin-top: 20px;
  /* max-height: 800px;
  overflow:auto */
}

/* 当经过图片是的特效 */
.fade-enter-active {
  animation: play 2s;
}
.fade-leave-active{
  animation: play 2s reverse;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}

@keyframes play {
  0% {
    /* height: 0px; */
    opacity: 0;
  }
  100% {
    /* height: 20px; */
    opacity: 1;
  }
}

/* 装载图片的容器 */
.imagelist_item {
  margin: 10px;
  /* transition-duration: 1s; */
}

/* 图片 */
.editor_images {
  max-width: 400px;
  max-height: 400px;
}

/* 图片下方的容器 */
.image_bottom {
  padding: 5px;
  display: flex;
  justify-content: space-around;
  transition-duration: 1s;
}

/*  */
.image_name {
  text-align: center;
  /* line-height: 38px; */
  font-size: unset;
  font-weight: bolder;
  font-family: sans-serif;
}
</style>
