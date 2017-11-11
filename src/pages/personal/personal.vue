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
            <!--<i :class="'fa fa-'+item.url"></i>-->
            <img :src="'../../static/img/'+item.url+'.png'" alt="item.type">
            <span>{{item.type}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="list">
      <!--文章，作品，收藏，草稿-->
      <ul>
        <li class="article">
          <ul>
            <!--<articleList-->
              <!--:articles="articles1"-->
              <!--:show-style="'full'"-->
              <!--@like="like"-->
              <!--@favorite="favorite"-->
            <!--&gt;</articleList>-->
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  // , getPersonalWork, getCollection
  import {getPersonalArticle, getUserInfo} from '../../service/getData';
  // import articleList from '@/components/articleList';
  export default {
    data () {
      return {
        liList: [
          {url: 'article', type: '文章'},
          {url: 'work', type: '作品'},
          {url: 'collection', type: '收藏'},
          {url: 'draft', type: '草稿'}
        ],
//        liList: [
//          {url: 'file-text', type: '文章'},
//          {url: 'desktop', type: '作品'},
//          {url: 'heart', type: '收藏'},
//          {url: 'sticky-note', type: '草稿'}
//        ],
        articles: [], // 获取的文章列表
        totalBlog: 0,
        totalWork: 0,
        totalCollection: 0,
        userName: 'ysm',
        headPic: '../../static/img/github-avatar.jpeg',
        currentIndex: 1
      };
    },
    mounted () {
      // 获取用户个人信息
      getUserInfo().then(res => {
        if (res.result.code === 200) {
          this.userName = res.data.userName;
          this.headPic = res.data.avatar;
        } else {
        }
      });
      // 获取个人文章信息
      getPersonalArticle().then(res => {
        if (res.result.code === 200) {
          this.totalBlog = res.data.count;
          this.articles = res.data.articles;
        } else {
        }
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
