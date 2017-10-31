<template>
  <div class="edit">
    <editor :article-type="articleType" @saveDraft="saveDraft" @publish="publish"></editor>
  </div>
</template>

<script>
import editor from '@/components/editor';
export default {
  data () {
    return {
      articleType: [
        {
          id: 1,
          name: '前端'
        },
        {
          id: 2,
          name: '后端houduan'
        },
        {
          id: 3,
          name: 'Android'
        },
        {
          id: 4,
          name: 'iOS'
        },
        {
          id: 5,
          name: '设计'
        },
        {
          id: 6,
          name: '其他'
        }
      ]
    };
  },
  components: {
    editor
  },
  methods: {
    saveDraft (title, md, html) {
      console.log('假装保存草稿成功^_^');
      console.log('草稿标题为：' + title);
      console.log('草稿md为：' + md);
      console.log('草稿html为：' + html);
    },
    publish (title, md, html) {
      console.log('假装发布成功^_^');
      console.log('文章标题为：' + title);
      console.log('文章md为：' + md);
      console.log('文章html为：' + html);
    }
  }
};
</script>

<style lang="scss" scoped>
  .edit {
    width: 100%;
    height: 600px;
  }
</style>

