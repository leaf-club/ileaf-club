<template>
  <ul class="action">
    <li class="item">
      <a @click.prevent="like" class="btn" href="javasctipt:void(0)">
        <i class="fa" :class="liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'"></i>
        {{ likeCount }}
      </a>
    </li>
    <li class="item">
      <a @click.prevent="favorite" class="btn" href="javasctipt:void(0)">
        <i class="fa" :class="favorited ? 'fa-heart' : 'fa-heart-o'"></i>
        {{ favoriteCount }}
      </a>
    </li>
    <li class="item">
      <router-link class="btn" :to="{ path: '/read' + '#comment', query: { id: pid } }">
        <i class="fa" :class="commented ? 'fa-comments' : 'fa-comments-o'"></i>
        {{ commentCount }}
      </router-link>
    </li>
    <li class="item">
      <router-link class="btn" :to="{ path: '/read', query: { id: pid } }">
        <i class="fa fa-eye"></i>
        {{ readCount }}
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        liked: false,
        favorited: false,
        commented: false,
        likeCount: 0,
        favoriteCount: 0,
        commentCount: 0,
        readCount: 0
      };
    },
    props: ['pid', 'actionData'],
    created () {
      Object.assign(this, this.$props.actionData);
    },
    methods: {
      like () {
        if (this.liked) {
          this.liked = false;
          if (this.likeCount === 1) {
            this.likeCount = '点赞';
          } else {
            this.likeCount -= 1;
          }
          this.$emit('like', this.$props.pid, false);
        } else {
          this.liked = true;
          if (typeof this.likeCount === 'string') {
            this.likeCount = 1;
          } else {
            this.likeCount += 1;
          }
          this.$emit('like', this.$props.pid, true);
        }
      },
      favorite () {
        if (this.favorited) {
          this.favorited = false;
          if (this.favoriteCount === 1) {
            this.favoriteCount = '收藏';
          } else {
            this.favoriteCount -= 1;
          }
          this.$emit('favorite', this.$props.pid, false);
        } else {
          this.favorited = true;
          if (typeof this.favoriteCount === 'string') {
            this.favoriteCount = 1;
          } else {
            this.favoriteCount += 1;
          }
          this.$emit('favorite', this.$props.pid, true);
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

