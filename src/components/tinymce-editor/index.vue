<template>
  <div>


      <section id="tinymce-editor">TinyMce Editor</section>
  </div>
</template>

<script>
import './tinymce.min.js'
import './themes/silver/theme.min.js'
import tinymce from 'tinymce';
export default {

    mounted(){
        tinymce.init({
            selector:'#tinymce-editor',
        })
    }
};
</script>

<style lang="less" scoped>
@import url('./skins/ui/oxide/skin.min.css');
</style>>