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

export default {
  data () {
    return {
      msg: '作品',
      isLogin: false,
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
    foot,
    workList,
    adsense
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

