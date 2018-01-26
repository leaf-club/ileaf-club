<template>
  <div>
    <h1>{{ msg }}</h1>
    <workList :work-list="works"></workList>
    <foot :showAd="false"></foot>
  </div>
</template>

<script>
import workList from '@/components/workList';
import foot from '@/components/footer';
export default {
  data () {
    return {
      msg: 'This is workList page',
      isLogin: false,
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
    foot,
    workList
  }
};
</script>
