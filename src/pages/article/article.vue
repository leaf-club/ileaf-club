<template>
  <div class="article">
    <div class="content">
      <main>
        <h2>博文</h2>
        <article-list
          :articles="articles"
          :show-style="'full'"
          ref="articlelist"
        ></article-list>
      </main>
      <aside>
        <adsense :adList="adList"></adsense>
      </aside>
      
    </div>
    <foot :showAd="false"></foot>
  </div>
</template>

<script>
import articleList from '@/components/articleList';
import foot from '@/components/footer';
import adsense from '@/components/adsense';
import { getBlogList } from '@/service/getData';

export default {
  data () {
    return {
      articles: [],
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
    foot,
    adsense
  },
  mounted () {
    let params = {
      pageIndex: 1,
      pageSize: 10
    };
    getBlogList(params).then(res => {
      if (res.result && +res.result.status === 200) {
        // this.articles = res.data.blogList;
        this.$refs.articlelist.initDataChange(res.data.blogList);
        return;
      }
      console.error('获取文章列表错误：' + res.result);
    });
    // saveWork({
    //   userId: 0,
    //   url: 'http://opzww7anw.bkt.clouddn.com/leaf/image/gem.jpg',
    //   cover: 'http://opzww7anw.bkt.clouddn.com/leaf/image/gem.jpg',
    //   title: '漂亮的师姐招商',
    //   description: '师姐师姐真漂亮'
    // }).then(res => {
    //   if (res.result && +res.result.status === 200) {
    //     console.log('save success');
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
.article {
  .content {
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
  }
}
</style>

