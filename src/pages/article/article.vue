<template>
  <div class="article">
    <article-list
      :articles="articles"
      :show-style="'full'"
    ></article-list>
    <foot :showAd="false"></foot>
  </div>
</template>

<script>
import articleList from '@/components/articleList';
import foot from '@/components/footer';

export default {
  data () {
    return {
      articles: [
        {
          id: 101,
          author: {
            id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            nickname: 'Yann'
          },
          type: {
            id: 1,
            name: '设计'
          },
          tag: 'APP设计',
          title: '为什么国外的 App 很少会有开屏广告？',
          abstract: '古话说得好，先问是不是，再问为什么。对于「国外的 App 很少有开屏广告」这个论断其实未必正确，毕竟商业世界已经发展得很畅通和成熟了，一旦有什么可行的商业模式（比如开屏广告），那必然会被快速地借（chao）鉴（xi）...',
          publishTime: '2017-11-07 19:15',
          like: 25,
          favorite: 30,
          comment: 16,
          read: 0
        },
        {
          id: 102,
          author: {
            id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            nickname: 'Yann'
          },
          type: {
            id: 1,
            name: '前端'
          },
          tag: 'Vue',
          title: 'Vue相关开源项目库汇总(史上最新最全)',
          abstract: '内容 UI组件 开发框架 实用库 服务端 辅助工具 应用实例 Demo示例 UI组件 element ★13489 - 饿了么出品的Vue2的web UI工具套件 Vux ★8133 - 基于Vue……和WeUI的组件库 iview ★6634 - 基于 Vuejs 的开源 UI 组件库 mint-ui ★6253 - Vue 2的移动UI元素 muse-ui...',
          publishTime: '2017-11-07 19:25',
          like: 10,
          favorite: 20,
          comment: 0,
          read: 40
        },
        {
          id: 103,
          author: {
            id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            nickname: 'Yann'
          },
          type: {
            id: 1,
            name: '其他'
          },
          tag: '了不起的盖茨比',
          title: '我终于有钱了，你还愿意爱我吗——读《了不起的盖茨比》',
          abstract: '一个穷小子经过奋斗，成为了大富豪，后来在追求已成为他人妇的初恋女友的过程中，献出了生命……假如我今天给你讲这样一个故事，你肯定不会相信：都那么有钱了，还追他人妇？这就像我给现在的小孩讲梁山伯与祝英台的故事...',
          publishTime: '2017-11-07 19:35',
          like: 100,
          favorite: 0,
          comment: 300,
          read: 400
        },
        {
          id: 104,
          author: {
            id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            nickname: 'Yann'
          },
          type: {
            id: 1,
            name: '其他'
          },
          tag: '了不起的盖茨比',
          title: '我终于有钱了，你还愿意爱我吗——读《了不起的盖茨比》',
          abstract: '一个穷小子经过奋斗，成为了大富豪，后来在追求已成为他人妇的初恋女友的过程中，献出了生命……假如我今天给你讲这样一个故事，你肯定不会相信：都那么有钱了，还追他人妇？这就像我给现在的小孩讲梁山伯与祝英台的故事...',
          publishTime: '2017-11-07 19:35',
          like: 0,
          favorite: 0,
          comment: 300,
          read: 400
        }
      ]
    };
  },
  components: {
    articleList,
    foot
  }
};
</script>

<style lang="scss" scoped>

</style>

