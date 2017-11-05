<template>
  <div class="personal">
    <div class="head">
      <div class="head-info">
        <img class="info-pic" src="../../assets/images/github-avatar.jpeg" alt="">
        <p class="info-name">ysm</p>
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
          <li class="on" @click="change">
            <img src="../../assets/images/article.png" alt="">
            <span>文章</span>
          </li>
          <li>
            <img src="../../assets/images/work.png" alt="">
            <span>作品</span>
          </li>
          <li>
            <img src="../../assets/images/collection.png" alt="">
            <span>收藏</span>
          </li>
          <li>
            <img src="../../assets/images/draft.png" alt="">
            <span>草稿</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="list">

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        totalBlog: 0,
        totalWork: 0,
        totalCollection: 0
      };
    },
    methods: {
      change () {
      },
      getBlogNum () {
      },
      getWorkNum () {
      },
      getCollectionNum () {
      }
    }
  };
</script>
<style lang="scss">
  @import "../../assets/css/normalize.css";
  @import "../../assets/css/mixin.scss";
  @import "../../assets/css/personal.scss";
</style>
