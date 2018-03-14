<template>
  <div class="work-list" @initDataChange="initDataChange">
    <div v-for="work in workList" :key="work._id" class="work-box">
      <a target="_blank" :href="work.url">
        <img :src="work.cover" alt="" class="work-cover" />
        <div class="work-abstract">
          <p class="work-title">{{ work.title }}</p>
          <p>
            <router-link class="work-author" :to="{ path: '/personal', query: {id: work.userInfo._id} }">
              {{ work.userInfo.userName }}
            </router-link>
            <span class="work-time">{{ work.updataTime }}</span>
          </p>
        </div>
      </a>
      <action
        :pid="work._id"
        :type="1"
        :init-data="{
          liked: false,
          favorited: false,
          commented: false,
          likeCount: work.likeNum === 0 ? '点赞' : work.likeNum,
          favoriteCount: work.favoriteNum === 0 ? '收藏' : work.favoriteNum,
          commentCount: work.commentNum === 0 ? '评论' : work.commentNum,
          readCount: work.readNum === 0 ? '查看' : work.readNum,
          showLike: true,
          showFavorite: true,
          showComment: true,
          showRead: true,
        }"
      ></action>
    </div>
  </div>
</template>
<script>
import action from '@/components/action';

export default {
  data () {
    return {};
  },
  components: {
    action
  },
  props: ['workList'],
  methods: {
    initDataChange (data) {
      this.workList = data;
    }
  }
};
</script>
<style lang="scss" scoped>
  .work-list {
    // width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 0.3rem 0.3rem 0.1rem 0.3rem;
    background-color: white;

    .work-box{
      position: relative;
      margin-right: 0.15rem;
      
      .work-cover{
        width: 2.5rem;
        height: 2rem;
        border-radius: 0.05rem;
      }

      .work-abstract{
        position: absolute;
        left: 0;
        top: 1.1rem;
        min-width: 1.5rem;
        padding: 0.1rem 0.12rem 0.1rem 0.05rem;
        overflow: hidden;
        background-color: #444;
        opacity: 0.7;
        color: #fff;

        p{
          margin: 0.03rem 0;
        }

        // .work-title{
        //   font-size: 0.2rem;
        // }

        .work-author{
          font-size: 0.13rem;
          padding-right: 0.05rem;
          text-decoration: none;
          color: #fff;
        }
        .work-author:hover{
          text-decoration: underline;
        }

        .work-time{
          font-size: 0.16rem;
          padding-right: 0.05rem;
        }
      }
    }
  }
</style>
