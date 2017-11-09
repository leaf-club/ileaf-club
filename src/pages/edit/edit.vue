<template>
  <div class="edit">
    <editor :article-types="articleTypes" :article="article" @saveDraft="saveDraft" @publish="publish"></editor>
  </div>
</template>

<script>
import editor from '@/components/editor';
import { saveArticle } from '@/service/getData';
export default {
  data () {
    return {
      article: {},
      articleTypes: [
        {
          id: 1,
          name: '前端'
        },
        {
          id: 2,
          name: '后台'
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
  created () {
    let id = this.$route.query.id;
    if (id) {
      this.article = {
        id: 1234,
        title: '测试文章标题',
        typeId: 2,
        tag: 'Java',
        mdCode: `
## Java从入门到放弃
- 入门
- 放弃

1. 入门
2. 放弃
`
      };
    }
  },
  methods: {
    async saveDraft (draft) {
      draft.userId = 1;
      // let res = await getTestUser(1);
      console.log(Object.entries(draft));
      let res = await saveArticle(draft);
      console.log(res);
    },
    async publish (article) {
      article.userId = 1;
      console.log(Object.entries(article));
      let res = await saveArticle(article);
      console.log(res);
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

