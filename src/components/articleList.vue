<template>
  <div class="article-list" @initDataChange="initDataChange">
    <ul class="list" :class="{ full: showStyle === 'full' }">
      <li class="article" v-for="article in articles" :key="article._id">
        <ul class="desc">
          <li class="item author">
            <router-link
              v-if="showStyle === 'cut'"
              class="item-author"
              :to="{ path: '/personal', query: { id: article.userInfo._id } }"
            >{{ article.userInfo.userName }}</router-link>
            <router-link
              v-if="showStyle === 'full'"
              class="item-author"
              :to="{ path: '/personal', query: { id: article.userInfo._id } }">
              <a class="avatar" href="#" :style="'background-image: url(' + article.userInfo.avatar + ');'"></a>
              <!-- <img class="avatar" :src="article.userInfo.avatar" alt="avatar"> -->
              <span class="nickname">{{ article.userInfo.userName }}</span>
            </router-link>
          </li>
          <li class="item type">
            <router-link to="#" class="item-type">{{ article.typeName }}</router-link>
          </li>
          <li class="item tag">
            <router-link to="#" class="item-tag">{{ article.tag }}</router-link>
          </li>
          <li class="item time">{{ article.updateTime | timeFilter}}</li>
        </ul>
        <router-link
          class="title"
          :to="{ path: '/read/' + article._id }"
        >{{ article.title }}</router-link>
        <p v-if="showStyle === 'full'" class="abstract" v-html="article.abstract"></p>
        <action
          v-if="showStyle === 'full'"
          :pid="article._id"
          :type="0"
          :init-data="{
            liked: article.liked,
            favorited: article.favorited,
            commented: false,
            likeCount: article.likeNum === 0 ? '点赞' : article.likeNum,
            favoriteCount: article.favoriteNum === 0 ? '收藏' : article.favoriteNum,
            commentCount: article.commentNum === 0 ? '评论' : article.commentNum,
            readCount: article.readNum === 0 ? '阅读' : article.readNum,
            showLike: true,
            showFavorite: true,
            showComment: true,
            showRead: true
          }"
        ></action>
      </li>
    </ul>
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
  props: {
    articles: Array,
    showStyle: {
      validator: (val) => {
        if (!['cut', 'full'].includes(val)) {
          throw new TypeError('the show-style\'s value must be "cut" or "full"');
        }
        return val;
      }
    }
  },
  methods: {
    initDataChange (data) {
      this.articles = data;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

$borderColor: #f0f0f0;
$titleColor: #333;
$actionBtnColor: #777;

.article-list {
  a {
    text-decoration: none;
  }
  .list {
    list-style: none;
    background-color: #fff;
    margin: 0;
    padding: 0.1rem 0.2rem;
    .article {
      border-bottom: 1px solid $borderColor;
      padding: 0.1rem;
      .desc {
        list-style: none;
        padding: 0.02rem 0;
        display: flex;
        font-size: 0.13rem;
        .item {
          .item-author {
            color: $mainColor;
          }
          .item-type {
            color: $mainFontColor;
          }
          .item-tag {
            color: $mainFontColor;
          }
          &.author {
            &::after {
              content: '·';
              margin: 0 0.4em;
              color: $mainFontColor;
            }
          }
          &.type {
            &::after {
              content: '/';
              margin: 0 0.3em;
              color: $mainFontColor;
            }
          }
          &.tag {
            &::after {
              content: '·';
              margin: 0 0.4em;
              color: $mainFontColor;
            }
          }
          &.time {
            color: $mainFontColor;
          }
        }
      }
      .abstract {
        line-height: 2;
        margin: 0.08rem 0;
        color: #666;
      }
      .title {
        display: block;
        margin: 0.05rem 0 0.1rem 0;
        font-weight: normal;
        color: $titleColor;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &.full {
      .article {
        .desc {
          align-items: center;
          .author {
            .item-author {
              display: inline-block;
              vertical-align: middle;
              .avatar {
                display: inline-block;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                background-size: cover;
              }
              .nickname {
                display: inline-block;
                height: 0.4rem;
                line-height: 0.4rem;
                vertical-align: 30%;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      .action {
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
    }
  }
}
</style>

