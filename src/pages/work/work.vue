<template>
  <div class="work">
    <div class="content">
      <main>
        <h2>{{ msg }}</h2>
        <workList :work-list="works"></workList>
      </main>
      <aside>
        <adsense :adList="adList"></adsense>
      </aside>
    </div>
    <foot :showAd="false"></foot>
  </div>
</template>

<script>
import workList from '@/components/workList';
import foot from '@/components/footer';
import adsense from '@/components/adsense';
import { getWorkList } from '@/service/getData';

export default {
  data () {
    return {
      msg: '作品',
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
    foot,
    workList,
    adsense
  },
  mounted () {
    let params = {
      pageIndex: 1,
      pageSize: 10
    };
    getWorkList(params).then(res => {
      if (res.result && +res.result.status === 200) {
        this.works = res.data.workList;
        return;
      }
      console.error('获取作品列表错误：' + res.result.message);
    });
  }
};
</script>
<style lang="scss" scoped>
  .work {
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

