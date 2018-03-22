<template>
  <div class="edit">
    <editor :article-types="articleTypes" :article="article" @saveDraft="saveDraft" @publish="publish"></editor>
  </div>
</template>

<script>
import editor from '@/components/editor';
import { saveArticle } from '@/service/getData';
import { Storage } from '@/store/storage';
import { userInfoKey } from '@/store/storageConfig';

export default {
  data () {
    return {
      userInfo: {},
      article: {},
      articleTypes: [
        {
          id: 0,
          name: '前端'
        },
        {
          id: 1,
          name: '后台'
        },
        {
          id: 2,
          name: 'Android'
        },
        {
          id: 3,
          name: 'iOS'
        },
        {
          id: 4,
          name: '设计'
        },
        {
          id: 5,
          name: '其他'
        }
      ]
    };
  },
  components: {
    editor
  },
  created () {
    let storage = new Storage();
    this.userInfo = storage.getItem(userInfoKey);
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
      if (!this.userInfo) {
        alert('请先登录');
        return;
      }
      draft.userId = this.userInfo.userId;
      // let res = await getTestUser(1);
      console.log(Object.entries(draft));
      let res = await saveArticle(draft);
      if (res.result && +res.result.status === 200) {
        console.log('草稿保存成功！');
        return;
      }
      console.error('保存草稿失败：' + res.result.message);
    },
    async publish (article) {
      if (!this.userInfo) {
        alert('请先登录');
        return;
      }
      article.userId = this.userInfo.userId;
      console.log(Object.entries(article));
      let res = await saveArticle(article);
      if (res.result && +res.result.status === 200) {
        this.$router.push({
          path: 'personal/' + this.userInfo.userId
        });
        return;
      }
      console.error('发布文章错误：' + res.result.message);
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

