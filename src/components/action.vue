<template>
  <ul class="action">
    <li class="item" v-if="showLike">
      <a @click.prevent="likeAction" class="btn" href="javasctipt:void(0)">
        <i class="fa" :class="liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'"></i>
        {{ likeCount }}
      </a>
    </li>
    <li class="item" v-if="showFavorite">
      <a @click.prevent="favoriteAction" class="btn" href="javasctipt:void(0)">
        <i class="fa" :class="favorited ? 'fa-heart' : 'fa-heart-o'"></i>
        {{ favoriteCount }}
      </a>
    </li>
    <li class="item" v-if="showComment">
      <router-link class="btn" :to="'read/' + pid + '#comment'">
        <i class="fa" :class="commented ? 'fa-comments' : 'fa-comments-o'"></i>
        {{ commentCount }}
      </router-link>
    </li>
    <li class="item" v-if="showRead">
      <router-link class="btn" :to="'read/' + pid">
        <i class="fa fa-eye"></i>
        {{ readCount }}
      </router-link>
    </li>
  </ul>
</template>

<script>
  import { like, favorite } from '@/service/getData';
  import { Storage } from '@/store/storage';
  import { userInfoKey } from '@/store/storageConfig';
  export default {
    data () {
      return {
        liked: false,
        favorited: false,
        commented: false,
        likeCount: 0,
        favoriteCount: 0,
        commentCount: 0,
        readCount: 0,
        showLike: false,
        showFavorite: false,
        showComment: false,
        showRead: false
      };
    },
    props: {
      pid: {
        type: [Number, String],
        required: true
      },
      type: {
        type: [Number],
        required: true
      },
      initData: Object
    },
    created () {
      Object.assign(this, this.$props.initData);
    },
    methods: {
      async likeAction () {
        let storage = new Storage();
        let userInfo = storage.getItem(userInfoKey);
        if (!userInfo) {
          console.log('请登录后再进行操作！');
          return;
        }
        if (this.liked) {
          let res = await like({
            id: this.pid,
            type: this.type,
            userId: userInfo.userId,
            operate: 0
          });
          if (res.result && res.result.code === 200) {
            this.liked = false;
            this.likeCount = res.data.like === 0 ? '点赞' : res.data.like;
          }
        } else {
          let res = await like({
            id: this.pid,
            type: this.type,
            userId: userInfo.userId,
            operate: 1
          });
          if (res.result && res.result.code === 200) {
            this.liked = true;
            this.likeCount = res.data.like === 0 ? '点赞' : res.data.like;
          }
        }
      },
      async favoriteAction () {
        let storage = new Storage();
        let userInfo = storage.getItem(userInfoKey);
        if (!userInfo) {
          console.log('请登录后再进行操作！');
          return;
        }
        if (this.favorited) {
          let res = await favorite({
            id: this.pid,
            type: this.type,
            userId: userInfo.userId,
            operate: 0
          });
          if (res.result && res.result.code === 200) {
            this.favorited = false;
            this.favoriteCount = res.data.favorite === 0 ? '收藏' : res.data.favorite;
          }
        } else {
          let res = await favorite({
            id: this.pid,
            type: this.type,
            userId: userInfo.userId,
            operate: 1
          });
          if (res.result && res.result.code === 200) {
            this.favorited = true;
            this.favoriteCount = res.data.favorite === 0 ? '收藏' : res.data.favorite;
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

$actionBtnColor: #777;

.action {
  a {
    @include nounderline;
  }
  list-style: none;
  padding: 0;
  display: flex;
  .item {
    margin-right: 0.15rem;
    min-width: 0.5rem;
    text-align: center;
    .btn {
      display: inline-block;
      min-width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      color: $actionBtnColor;
      &:hover {
        color: $mainColor;
      }
    }
  }
}
</style>

