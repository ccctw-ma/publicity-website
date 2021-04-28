<template>
  <div :class="{ fullscreen: fullscreen }" class="tinymce-container">
    <Editor :id="tinymceId" :value.sync="tinymceContent" :init="initOptions" />

    <button @click="getUrl"></button>
  </div>
</template>

<script>
// Docs: https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/
// Import TinyMCE
import "tinymce";
// Default icons are required for TinyMCE 5.3 or above
import "tinymce/icons/default";
// Import themes
import "tinymce/themes/silver";
import "tinymce/themes/mobile";
// Any plugins you want to use has to be imported
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/fullpage";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/help";
import "tinymce/plugins/hr";
import "tinymce/plugins/image";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/noneditable";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/paste";
import "tinymce/plugins/preview";
import "tinymce/plugins/print";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/spellchecker";
import "tinymce/plugins/tabfocus";
import "tinymce/plugins/table";
import "tinymce/plugins/template";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";
import Editor from "@tinymce/tinymce-vue"; // TinyMCE vue wrapper
// import EditorImageUpload, { UploadObject } from './components/EditorImage.vue'
import { plugins, toolbar } from "./config";

// import { useStore } from '@/store'

export default {
  name: "editor",
  components: {
    Editor,
  },
  props: ["value"],
  //    {
  //     value: {
  //       type: String,
  //       default: "",
  //     },
  //     id: {
  //       type: String,
  //       default: '123',
  //     },
  //     toolbar: {
  //       type: Array,
  //       default: () => {
  //         return [];
  //       },
  //     },
  //     menubar: {
  //       type: String,
  //       default: "file edit insert view format table",
  //     },
  //     height: {
  //       type: String||Number,
  //       default: "360px",
  //     },
  //     width: {
  //       type: String||Number,
  //       default: "auto",
  //     },
  //   },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      fullscreen: true,
      tinymceContent: this.value,
      tinymceId:
        "vue-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""),
      publicPath: process.env.BASE_URL,
      initOptions: {
        selector: '#textarea',
        height: "500px",
        body_class: "panel-body",
        object_resizing: false,
        toolbar: toolbar,
        menubar: "file edit insert view format table",
        plugins: plugins,
        // language_url: `${this.publicPath}tinymce/langs/zh-cn.js`,
        // language: "zh_CN",
        // skin_url: "@/assets/tinymce/skins/",
        // emoticons_database_url: "@/assets/tinymce/emojis.min.js",
        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        // imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
        default_link_target: "_blank",
        link_title: false,
        // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        nonbreaking_force_tab: true,
        // https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/
        // https://stackoverflow.com/questions/5196205/disable-tinymce-absolute-to-relative-url-conversions
        convert_urls: false,
        init_instance_callback: (editor) => {
          editor.setContent("");
          //   this.hasInit = true;
          editor.on("NodeChange Change KeyUp SetContent", () => {
            // this.hasChange = true;
            this.$emit("input", editor.getContent());
          });
        },
        setup: (editor) => {
          editor.on("FullscreenStateChanged", (e) => {
            this.fullscreen = e.state;
          });
        },
      },
    };
  },
  computed: {},

  methods: {
    getUrl: () => {
      console.log("地址",process.env.BASE_URL);
    },
  },
  watch: {
    tinymceContent() {
      console.log(this.tinymceContent);
    },
  },
  created: function () {
    // console.log("内容:", this.value);
    // console.log("高度:", this.height);
  },
  beforeCreate() {},
};
</script>

<style >
.tinymce-container {
  position: relative;
  line-height: normal;
  /* .mce-fullscreen {
    z-index: 10000;
  } */
}
.editor-custom-btn-container {
  position: absolute !important;
  right: 6px;
  top: 6px;
  z-index: 1002;
}
.editor-upload-btn {
  display: inline-block;
}
textarea {
  visibility: hidden;
  z-index: -1;
}
</style>
