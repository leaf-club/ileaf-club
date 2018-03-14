<template>
  <div class="personal">
    <div class="content">
      <h2>个人主页</h2>
      <main>
        <div class="head">
          <div class="head-info">
            <img class="info-pic" :src="userInfo.avatar" alt="avatar">
            <div class="info-detail">
              <p class="info-name">{{userInfo.userName}}</p>
              <ul>
                <li>
                  <i>{{totalCounts.blogCount ? totalCounts.blogCount : 0}}</i>
                  <span>文章</span>
                </li>
                <li>
                  <i>{{totalCounts.workCount ? totalCounts.workCount : 0}}</i>
                  <span>作品</span>
                </li>
                <li>
                  <i>{{totalCounts.likeCount ? totalCounts.likeCount : 0}}</i>
                  <span>赞过</span>
                </li>
                <li>
                  <i>{{totalCounts.favoriteCount ? totalCounts.favoriteCount : 0}}</i>
                  <span>收藏</span>
                </li>
                <li>
                  <i>{{totalCounts.draftCount ? totalCounts.draftCount : 0}}</i>
                  <span>草稿</span>
                </li>
              </ul>
            </div>
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
        <div class="list" v-if="currentIndex === 0">
          <article-list
            :articles="articles"
            :show-style="'full'"
          ></article-list>
        </div>

        <div class="list" v-if="currentIndex === 1">
          <work-list
            :work-list="works"
          ></work-list>
        </div>

        <div class="list" v-if="currentIndex === 2">
          <h2>文章</h2>
          <article-list
            :articles="liked.articles"
            :show-style="'full'"
            ref="articlelist"
          ></article-list>
          <h2>作品</h2>
          <work-list
            :work-list="liked.works"
            ref="worklist"
          ></work-list>
        </div>

        <div class="list" v-if="currentIndex === 3">
          <h2>文章</h2>
          <article-list
            :show-style="'full'"
            ref="articlelist"
          ></article-list>
          <h2>作品</h2>
          <work-list
            :work-list="favorited.works"
            ref="worklist"
          ></work-list>
        </div>

        <div class="list" v-if="currentIndex === 4">
          <article-list
            :articles="drafts"
            :show-style="'cut'"
          ></article-list>
        </div>
      </main>
    </div>
    <foot :showAd="false"></foot>
  </div>
</template>
<script>
  import { getUserInfo, getCounts, getPersonalBlog, getPersonalWork, getPersonalFavorited, getPersonalLiked, getPersonalDraft } from '@/service/getData';
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
          {url: 'thumbs-o-up', type: '赞过'},
          {url: 'heart-o', type: '收藏'},
          {url: 'sticky-note-o', type: '草稿'}
        ],
        userInfo: {},
        articles: [], // 获取的文章列表
        works: [],
        favorited: {},
        liked: {},
        drafts: [],
        totalCounts: {},
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
      getUserInfo({userId: this.$route.query.id}).then(res => {
        if (res.result && +res.result.status === 200) {
          this.userInfo = res.data.userInfo;
        }
      });
      getCounts({userId: this.$route.query.id}).then(res => {
        if (res.result && +res.result.status === 200) {
          this.totalCounts = res.data;
        }
      });
      let params = {
        userId: this.$route.query.id,
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
      console.log(this.liked);
    },
    methods: {
      show (index) {
        this.currentIndex = index;
        let params = {
          userId: this.$route.query.id,
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
          getPersonalLiked(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.liked.articles = res.data.likeBlogList;
              this.liked.works = res.data.likeWorkList;
              this.$refs.articlelist.initDataChange(res.data.likeBlogList);
              this.$refs.worklist.initDataChange(res.data.likeWorkList);
            } else {
              console.error('获取点赞列表错误：' + res.result.message);
            }
          });
          break;
        }
        case 3: {
          getPersonalFavorited(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.favorited.articles = res.data.favouriteBlogList;
              console.log('personal', this.favorited.articles);
              this.favorited.works = res.data.favouriteWorkList;
              this.$refs.articlelist.initDataChange(res.data.favouriteBlogList);
              this.$refs.worklist.initDataChange(res.data.favouriteWorkList);
            } else {
              console.error('获取收藏列表错误：' + res.result.message);
            }
          });
          break;
        }
        case 4: {
          getPersonalDraft(params).then(res => {
            if (res.result && +res.result.status === 200) {
              this.drafts = res.data.blogList;
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
            .info-pic{
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
              display: inline-block;
              width:1rem;
              height:0.22rem;
              line-height:0.22rem;
              font:bold 0.16rem 微软雅黑;
              color:#666;
              text-align:left;
            }
            ul{
              margin:0;
              width:9rem;
              height:0.36rem;
              list-style: none;
              padding-left:0;
              li{
                display: inline-block;
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
                display: inline-block;
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
