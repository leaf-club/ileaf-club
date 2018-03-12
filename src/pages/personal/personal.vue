<template>
  <div class="personal">
    <div class="content">
      <h2>个人主页</h2>
      <main>
        <div class="head">
          <div class="head-info">
            <img class="info-pic" :src="headPic" alt="avatar">
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
            <ul>
              <li v-for="(item, index) in liList" @click="show(index)"
                  :class="[currentIndex === index ? 'on' : '']" :key="item.url">
                <i :class="'fa fa-' + item.url + ' fa-2x fa-fw'"></i>
                <span>{{item.type}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="list">
          <article-list
            :articles="articles"
            :show-style="'full'"
            v-show="currentIndex === 0"
          ></article-list>
          <work-list
            :work-list="works"
            v-show="currentIndex === 1"
          ></work-list>
          <div v-show="currentIndex === 2">
            <h2>文章</h2>
            <article-list
              :articles="favorited.articles"
              :show-style="'full'"
            ></article-list>
            <h2>作品</h2>
            <work-list
              :work-list="favorited.works"
            ></work-list>
          </div>
          <div v-show="currentIndex === 3">
            <h2>文章</h2>
            <article-list
              :articles="liked.articles"
              :show-style="'full'"
            ></article-list>
            <h2>作品</h2>
            <work-list
              :work-list="liked.works"
            ></work-list>
          </div>
        </div>
      </main>
    </div>
    <foot :showAd="false"></foot>
  </div>
</template>
<script>
  import { getUserInfo, getPersonalBlog, getPersonalWork, getPersonalFavorited, getPersonalLiked, getPersonalDraft } from '@/service/getData';
  import foot from '@/components/footer';
  import articleList from '@/components/articleList';
  import workList from '@/components/workList';
  import { Storage } from '@/store/storage';
  import { userInfoKey } from '@/store/storageConfig';
  
  export default {
    data () {
      return {
        liList: [
          {url: 'file-text-o', type: '文章'},
          {url: 'diamond', type: '作品'},
          {url: 'heart-o', type: '收藏'},
          {url: 'thumbs-o-up', type: '赞过'},
          {url: 'sticky-note-o', type: '草稿'}
        ],
        userInfo: {},
        articles: [], // 获取的文章列表
        works: [],
        favorited: {},
        liked: {},
        drafts: [],
        totalBlog: 0,
        totalWork: 0,
        totalCollection: 0,
        userName: 'leaf',
        headPic: '../../static/img/github-avatar.jpeg',
        currentIndex: 0
      };
    },
    components: {
      foot,
      articleList,
      workList
    },
    created () {
      let storage = new Storage();
      this.userInfo = storage.getItem(userInfoKey);
    },
    mounted () {
      getUserInfo(this.userInfo.userId).then(res => {
        if (res.result.code === 200) {
          this.userName = res.data.userName;
          this.headPic = res.data.avatar;
        } else {
        }
      });
      let params = {
        userId: this.userInfo.userId,
        pageIndex: 1,
        pageSize: 10
      };
      getPersonalBlog(params).then(res => {
        if (res.result && +res.result.status === 200) {
          this.articles = res.data.blogList;
        } else {
          console.error('获取个人发表博文列表错误：' + res.result.message);
        }
      });
    },
    methods: {
      show (index) {
        this.currentIndex = index;
        let params = {
          userId: this.userInfo.userId,
          pageIndex: 1,
          pageSize: 10
        };
        switch (index) {
        case 0: {
          getPersonalBlog(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.articles = res.data.blogList;
            } else {
              console.error('获取个人发表博文列表错误：' + res.result.message);
            }
          });
          break;
        }
        case 1: {
          getPersonalWork(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.works = res.data.workList;
            } else {
              console.error('获取个人作品列表错误：' + res.result.message);
            }
          });
          break;
        }
        case 2: {
          getPersonalFavorited(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.favorited.articles = res.data.favouriteBlogList;
              this.favorited.works = res.data.favouriteWorkList;
            } else {
              console.error('获取收藏列表错误：' + res.result.message);
            }
          });
          break;
        }
        case 3: {
          getPersonalLiked(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.liked.articles = res.data.likeBlogList;
              this.liked.works = res.data.likeWorkList;
            } else {
              console.error('获取点赞列表错误：' + res.result.message);
            }
          });
          break;
        }
        case 4: {
          getPersonalDraft(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.drafts = res.data.draftList;
            } else {
              console.error('获取点赞列表错误：' + res.result.message);
            }
          });
          break;
        }
        default:break;
        }
      }
    }
  };
</script>
<style lang="scss">
  @import "../../assets/css/mixin.scss";
  .personal{
    .content{
      padding: 0.05rem .5rem;
      position:relative;
      h2 {
        font-size: 0.14rem;
        color: #666;
      }
      main{
        background:#fff;
        padding: 0.3rem;
        .head{
          width:100%;
          height:2rem;
          .head-info{
            width:3.2rem;
            height:1rem;
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
            height:0.4rem;
            padding-bottom:0.03rem;
            border-bottom:1px solid #aeaeae;
            ul{
              width:100%;
              height:100%;
              margin:0.4rem 0 0.3rem 0;
              padding-left:0;
              list-style:none;
              li{
                float:left;
                margin-right:0.4rem;
                cursor:pointer;
                color:#000;
                i{
                  display:block;
                  float:left;
                  margin-top:0.02rem;
                }
                span{
                  float:left;
                  display:block;
                  width:0.4rem;
                  height:0.36rem;
                  line-height:0.4rem;
                  font:bold 0.18rem 微软雅黑;
                  margin:0.05rem 0 0 0.05rem;
                }
                &.on{
                  border-bottom:0.03rem solid #4eb2a3;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
