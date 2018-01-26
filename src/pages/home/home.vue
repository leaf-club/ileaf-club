<template>
  <div class="home">
    <hgroup>
      <h2 class="home-title">首页</h2>
      <h3 class="hot-article">热门文章推荐</h3>
    </hgroup>
    <article-list
      :articles="articles"
      :show-style="'cut'"
    ></article-list>
    <h3>热门作品推荐</h3>
    <work-list :work-list="works"></work-list>
    <foot :showAd="true"></foot>
  </div>
</template>

<script>
import articleList from '@/components/articleList';
import workList from '@/components/workList';
import foot from '@/components/footer';
import { Storage } from '@/store/storage';
import { userInfoKey } from '@/store/storageConfig';

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
            name: '前端'
          },
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（一）',
          publishTime: '2017-11-06 19:15'
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
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（二）',
          publishTime: '2017-11-06 19:25'
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
            name: '前端'
          },
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（三）',
          publishTime: '2017-11-06 19:35'
        }
      ],
      works: [
        {
          author: {
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
            id: 1,
            nickname: 'lemongirl'
          },
          cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
          title: '你画我猜',
          like: 34,
          favorite: 23,
          comment: 237,
          read: 66,
          id: 1,
          publishTime: '2017-10-18',
          workLink: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg'
        },
        {
          author: {
            avatar: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
            id: 2,
            nickname: 'liuliu'
          },
          cover: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
          title: '几年级？',
          like: 34,
          favorite: 23,
          comment: 237,
          read: 66,
          id: 2,
          publishTime: '2017-10-23',
          workLink: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg'
        },
        {
          author: {
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
            id: 3,
            nickname: 'HYL'
          },
          cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
          title: '心灵感应',
          like: 34,
          favorite: 23,
          comment: 237,
          read: 66,
          id: 3,
          publishTime: '2016-8-3',
          workLink: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg'
        },
        {
          author: {
            avatar: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
            id: 4,
            nickname: 'YXY'
          },
          cover: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
          title: '小鱼吃大鱼',
          like: 34,
          favorite: 23,
          comment: 237,
          read: 66,
          id: 4,
          publishTime: '2017-1-28',
          workLink: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg'
        }
      ]
    };
  },
  components: {
    articleList,
    workList,
    foot
  },
  mounted () {
    // 模拟登录，写入用户信息到本地
    let storage = new Storage();
    storage.setItem(userInfoKey, {
      userId: 1,
      nickName: 'Yann'
    });
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

</style>

