<template>
  <div class="edit">
    <head-top :is-login="true"></head-top>
    <editor class="editor"></editor>
  </div>
</template>

<script>
import headTop from '@/components/header';
import editor from '@/components/editor';
export default {
  data () {
    return {};
  },
  components: {
    headTop,
    editor
  }
};
</script>

<style lang="scss" scoped>
  .editor {
    position: relative;
    top: 80px;
    height: 600px;
  }
</style>

