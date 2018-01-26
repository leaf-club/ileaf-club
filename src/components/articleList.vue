<template>
  <div class="article-list">
    <ul class="list" :class="{ full: showStyle === 'full' }">
      <li class="article" v-for="article in articles" :key="article.id">
        <ul class="desc">
          <li class="item author">
            <router-link
              v-if="showStyle === 'cut'"
              class="item-author"
              :to="{ path: '/personal', query: { id: article.author.id } }"
            >{{ article.author.nickname }}</router-link>
            <router-link
              v-if="showStyle === 'full'"
              class="item-author"
              :to="{ path: '/personal', query: { id: article.author.id } }">
              <img class="avatar" :src="article.author.avatar" alt="avatar">
              <span class="nickname">{{ article.author.nickname }}</span>
            </router-link>
          </li>
          <li class="item type">
            <router-link to="#" class="item-type">{{ article.type.name }}</router-link>
          </li>
          <li class="item tag">
            <router-link to="#" class="item-tag">{{ article.tag }}</router-link>
          </li>
          <li class="item time">{{ article.publishTime }}</li>
        </ul>
        <router-link
          class="title"
          :to="{ path: '/read', query: { id: article.id } }"
        >{{ article.title }}</router-link>
        <p v-if="showStyle === 'full'" class="abstract">{{ article.abstract }}</p>
        <action
          v-if="showStyle === 'full'"
          :pid="article.id"
          :init-data="{
            liked: false,
            favorited: false,
            commented: false,
            likeCount: article.like === 0 ? '点赞' : article.like,
            favoriteCount: article.favorite === 0 ? '收藏' : article.favorite,
            commentCount: article.comment === 0 ? '评论' : article.comment,
            readCount: article.read === 0 ? '阅读' : article.read,
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
        padding: 0;
        display: flex;
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
      .title {
        display: block;
        margin: 0.1rem 0 0.05rem 0;
        font-size: 0.18rem;
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
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 0.2rem;
              }
              .nickname {
                display: inline-block;
                height: 0.4rem;
                line-height: 0.4rem;
                vertical-align: 30%;
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

