<template>
  <div class="personal">

    <div class="head">
      <div class="head-info">
        <img class="info-pic" :src="headPic" alt="">
        <p class="info-name">{{userName}}</p>
        <ul>
          <li>
            <i>{{totalBlog}}</i>
            <span>文章</span>
          </li>
          <li>
            <i>{{totalWork}}</i>
            <span>作品</span>
          </li>
          <li>
            <i>{{totalCollection}}</i>
            <span>收藏</span>
          </li>
        </ul>
      </div>
      <div class="head-ul">
        <!--列表选项切换-->
        <ul>
          <li v-for="(item, index) in liList" @click="show(index)"
              :class="[currentIndex === index ? 'on' : '']">
            <img :src="'../../static/img/'+item.url+'.png'" alt="item.type">
            <span>{{item.type}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="list">
      <!--文章，作品，收藏，草稿-->

    </div>
  </div>
</template>
<script>
  import {getTotalBlog, getTotalWork, getTotalCollection} from '../../service/getData';
  // import article from '@/components/article';
  export default {
    data () {
      return {
        liList: [
          {url: 'article', type: '文章'},
          {url: 'work', type: '作品'},
          {url: 'collection', type: '收藏'},
          {url: 'draft', type: '草稿'}
        ],
        totalBlog: 0,
        totalWork: 0,
        totalCollection: 0,
        userName: 'ysm',
        headPic: '../../static/img/github-avatar.jpeg',
        currentIndex: 1
      };
    },
    mounted () {
      // 获取博客数
      getTotalBlog().then(res => {
        if (res.result.code === 200) {
          this.totalBlog = res.data.count;
        } else {
        }
      });
      // 获取作品数
      getTotalWork().then(res => {
        this.totalBlog = 0;
      });
      // 获取收藏数
      getTotalCollection().then(res => {
        this.totalBlog = 0;
      });
      // 获取用户名
      getuserName().then(res => {
        this.totalBlog = 0;
      });
      // 获取博客数
      getTotalBlog().then(res => {
        this.totalBlog = 0;
      });
    },
    methods: {
      show (index) {
        this.currentIndex = index;
      }
    }
  };
</script>
<style lang="scss">
  @import "../../assets/css/mixin.scss";
  .personal{
    position:relative;
    width:5.66rem;
    margin:1.3rem auto;
    .head{
      width:100%;
      height:2rem;
      .head-info{
        width:3.2rem;
        height:1rem;
        margin:0.2rem 0 0 0.2rem;
        .info-pic{
          display:block;
          float:left;
          width:1rem;
          height:1rem;
          border-radius:50%;
          border:0.01rem solid #ccc;
          margin-right:0.2rem;
          &:hover{
            border-color:#ccc;
          }
        }
        .info-name{
          float:left;
          width:1rem;
          height:0.22rem;
          line-height:0.22rem;
          font:bold 0.16rem 微软雅黑;
          color:#666;
          text-align:left;
        }
        ul{
          margin:0;
          float:left;
          width:1.8rem;
          height:0.36rem;
          list-style: none;
          padding-left:0;
          li{
            float:left;
            width: 0.4rem;
            height:0.41rem;
            margin:0 0.1rem 0 0;
            color:#949494;
            font-size:0.14rem;
            border-right:1px solid #c9c9c9;
            i{
              display:block;
              text-align:left;
              width:100%;
              height:0.18rem;
              line-height: 0.18rem;
              margin-bottom:0.05rem;
            }
            span{
              display:block;
              width:100%;
              height:0.18rem;
              line-height: 0.18rem;
              margin:0;
              text-align:left;
            }
            &:nth-last-child(1){
              border:none;
            }
          }
        }
      }
      .head-ul{
        width:100%;
        height:0.5rem;
        padding-bottom:0.03rem;
        border-bottom:1px solid #aeaeae;
        ul{
          width:100%;
          height:100%;
          margin:0.3rem 0;
          padding-left:0;
          list-style:none;
          li{
            float:left;
            padding-bottom:0.1rem;
            margin-left:0.3rem;
            cursor:pointer;
            img{
              float:left;
              width:0.4rem;
              height:0.4rem;
            }
            span{
              float:left;
              display:block;
              width:0.4rem;
              height:0.36rem;
              line-height:0.4rem;
              font:bold 0.18rem 微软雅黑;
              margin:0.05rem 0 0 0.1rem;
            }
            &.on{
              border-bottom:0.03rem solid #aeaeae;
            }
          }
        }
      }
    }
    .list{
      width:100%;

    }
  }
</style>
