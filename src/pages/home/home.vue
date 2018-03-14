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
import { getRecommendBlogList, getRecommendWorkList } from '@/service/getData';

export default {
  data () {
    return {
      articles: [],
      works: [],
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
    let storage = new Storage();
    let userInfo = storage.getItem(userInfoKey);
    console.log(userInfo);
    let params = {
      userId: userInfo ? userInfo.userId : '',
      count: 5
    };
    // let res = await getRecommendBlogList(params);
    // if (res.result && +res.result.status === 200) {
    //   this.works = res.data.blogList;
    // } else {
    //   console.error('获取推荐文章列表错误：' + res.result.message);
    // }

    getRecommendBlogList(params).then((res) => {
      if (res.result && +res.result.status === 200) {
        this.articles = res.data.blogList;
        return;
      }
      console.error('获取推荐文章列表错误：' + res.result.message);
    });
    getRecommendWorkList(params).then((res) => {
      if (res.result && +res.result.status === 200) {
        this.works = res.data.workList;
        return;
      }
      console.error('获取推荐作品列表错误：' + res.result.message);
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

