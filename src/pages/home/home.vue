<template>
  <div class="home">
    <section class="content">
      <main>
        <h2 class="home-title">首页</h2>
        <section>
          <h3 class="hot-article">热门文章推荐</h3>
          <article-list
            :articles="articles"
            :show-style="'cut'"
          ></article-list>
        </section>
        <section>
          <h3>热门作品推荐</h3>
          <work-list :work-list="works"></work-list>
        </section>
      </main>
      <aside>
        <adsense :adList="adList"></adsense>
      </aside>
    </section>
    <foot :showAd="true"></foot>
  </div>
</template>

<script>
import articleList from '@/components/articleList';
import workList from '@/components/workList';
import foot from '@/components/footer';
import { Storage } from '@/store/storage';
import { userInfoKey } from '@/store/storageConfig';
import adsense from '@/components/adsense';

export default {
  data () {
    return {
      articles: [
        {
          _id: 101,
          liked: false,
          favorited: false,
          userInfo: {
            _id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            userName: 'Yann'
          },
          updateTime: '2017-11-06 19:15',
          typeName: '前端',
          typeId: -1,
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（一）'
        },
        {
          _id: 102,
          liked: false,
          favorited: false,
          userInfo: {
            _id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            userName: 'Yann'
          },
          updateTime: '2017-11-06 19:15',
          typeName: '前端',
          typeId: -1,
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（一）'
        },
        {
          _id: 103,
          liked: false,
          favorited: false,
          userInfo: {
            _id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            userName: 'Yann'
          },
          updateTime: '2017-11-06 19:15',
          typeName: '前端',
          typeId: -1,
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（一）'
        },
        {
          _id: 104,
          liked: false,
          favorited: false,
          userInfo: {
            _id: 1,
            avatar: 'http://opzww7anw.bkt.clouddn.com/personal/avatar/github-avatar.jpeg',
            userName: 'Yann'
          },
          updateTime: '2017-11-06 19:15',
          typeName: '前端',
          typeId: -1,
          tag: 'JavaScript',
          title: 'JavaScript 高级编程学习笔记（一）'
        }
      ],
      works: [
        {
          userInfo: {
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
            _id: 1,
            userName: 'lemongirl'
          },
          cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
          title: '你画我猜',
          likeNum: 34,
          favoriteNum: 23,
          commentNum: 237,
          readNum: 66,
          _id: 1,
          createTime: '2017-10-18',
          updataTime: '2017-10-18',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg'
        },
        {
          userInfo: {
            avatar: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
            _id: 2,
            userName: 'liuliu'
          },
          cover: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
          title: '几年级？',
          likeNum: 34,
          favoriteNum: 23,
          commentNum: 237,
          readNum: 66,
          _id: 2,
          createTime: '2017-10-18',
          updataTime: '2017-10-18',
          url: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg'
        },
        {
          userInfo: {
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
            _id: 3,
            userName: 'HYL'
          },
          cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg',
          title: '心灵感应',
          likeNum: 34,
          favoriteNum: 23,
          commentNum: 237,
          readNum: 66,
          _id: 3,
          createTime: '2017-10-18',
          updataTime: '2017-10-18',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509722975432&di=4dba9ed8b5ef9e40213ac36f2af37275&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D8d3d4b02b4096b6395145613645aed31%2Ff7246b600c3387446c83a3515b0fd9f9d72aa05d.jpg'
        },
        {
          userInfo: {
            avatar: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
            _id: 4,
            userName: 'YXY'
          },
          cover: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg',
          title: '小鱼吃大鱼',
          likeNum: 34,
          favoriteNum: 23,
          commentNum: 237,
          readNum: 66,
          _id: 4,
          createTime: '2017-10-18',
          updataTime: '2017-10-18',
          url: 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=d8088fcbf2dcd100d29cff23428947be/0b55b319ebc4b745a06692d0c5fc1e178b821501.jpg'
        }
      ],
      adList: [
        {
          name: '腾讯云',
          imageUrl: 'https://user-gold-cdn.xitu.io/15198101796035def81fb3ff58f95ec40ab6cb5828348.jpg?imageView2/1/q/85/format/webp/interlace/1',
          target: 'https://cloud.tencent.com/solution/la?fromSource=gwzcw.781155.781155.781155'
        },
        {
          name: 'leaf',
          imageUrl: 'https://user-gold-cdn.xitu.io/15198101796035def81fb3ff58f95ec40ab6cb5828348.jpg?imageView2/1/q/85/format/webp/interlace/1',
          target: 'https://cloud.tencent.com/solution/la?fromSource=gwzcw.781155.781155.781155'
        }
      ]
    };
  },
  components: {
    articleList,
    workList,
    foot,
    adsense
  },
  mounted () {
    // 模拟登录，写入用户信息到本地
    let storage = new Storage();
    storage.setItem(userInfoKey, {
      userId: 1,
      userName: 'Yann'
    });
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
  .home {
   .content {
    overflow-x: hidden;
    margin-top: 0.2rem;
    padding: 0.05rem .5rem;
    position: relative;
    h2 {
      font-size: 0.14rem;
      color: #666;
    }
    main {
      margin-right: 2.6rem;
      position: relative;
    }
    aside {
      position: absolute;
      top: 0.44rem;
      right: 0.5rem;
    }
    section {
      background-color: white;
      padding: 0.3rem 0;
      margin-bottom: 0.3rem;
      h3 {
        margin: 0 0.3rem;
        padding-bottom: 0.1rem;
        font-size: 1em;
        font-weight: normal;
        color: #4eb2a3;
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
  } 
  }
  
</style>

