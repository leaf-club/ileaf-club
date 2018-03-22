<template>
  <div class="comment-list">
    <section class="comment-box">
      <div class="author-info">
        <div class="avatar" :style="'background-image: url(' + comment.userInfo.avatar + ');background-size:cover;'"></div>
        <p>
          <router-link
              class="item-author"
              :to="{ path: '/personal/' + comment.userInfo._id }"
            >{{ comment.userInfo.userName }}</router-link>
        </p>
        <p class="other-info">
          {{comment.createTime | timeFilter}}
        </p>
      </div>
      <p class="comment_content">{{comment.content}}</p>
      <p class="comment-action">
        <span class="thumb_up" @click="likeComment(comment._id)"><i class="fa" :class="liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'"></i>{{comment.likeNum ? comment.likeNum : '点赞'}}</span>
        <span class="comment" @click="replyToComment(comment._id, comment.userInfo._id, comment.userInfo.userName)" v-show="!isShowSubCommentTextarea"><i class="fa fa-comment-o"></i>回复</span>
        <span class="comment" @click="closeComment" v-show="isShowSubCommentTextarea"><i class="fa fa-comment-o"></i>收起回复</span>
      </p>
      <div class="subcomment-box" v-show="isShowSubCommentTextarea">
        <textarea name="commenToComment" id="commenToComment" cols="80" rows="5" :placeholder="subCommentInfo" v-model="commentToCommentVal"></textarea>
        <a href="#" class="btn-commit-reply" @click.prevent="submitReply(comment._id)">提交</a>
      </div>
      <ul class="sub-comment">
        <li v-for="reply in comment.replyList" :key="reply._id">
          <a href="/#/personal" class="reply-author">{{reply.replyUserInfo.userName}}</a>
          回复
          <a href="/#/personal">{{reply.repliedUserInfo ? reply.repliedUserInfo.userName : ''}}</a>
          <span class="reply-content">：{{reply.replyContent}}</span>
          <span class="comment-to-comment" @click.prevent="replyToComment(comment._id, reply.replyUserInfo._id, reply.replyUserInfo.userName)"><i class="fa fa-comment-o"></i>回复</span>
          <span class="reply-time">{{reply.createTime | timeFilter}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import { addBlogComment, likeComment } from '@/service/getData';
  import { Storage } from '@/store/storage';
  import { userInfoKey } from '@/store/storageConfig';

  export default {
    data () {
      return {
        isShowSubCommentTextarea: false,
        subCommentInfo: '你的月亮我的心，说出你的心声',
        commentToCommentVal: '',
        repliedUserId: '',
        userInfo: {},
        liked: false
      };
    },
    props: ['comment'],
    created () {
      let storage = new Storage();
      this.userInfo = storage.getItem(userInfoKey);
      this.liked = this.$props.comment.liked;
    },
    methods: {
      likeComment (commentId) {
        if (!this.userInfo) {
          alert('请先登录');
          return;
        }
        let commentOperator = !this.liked;
        likeComment({
          userId: this.userInfo.userId,
          commentId: commentId,
          operate: commentOperator
        }).then(res => {
          if (res.result && +res.result.status === 200) {
            this.$emit('likeNumChange', res.data.likeNum);
            this.liked = !this.liked;
          }
        });
      },
      replyToComment (commentId, userId, username) {
        if (!this.userInfo) {
          alert('请先登录');
          return;
        }
        if (!this.commentToCommentVal) {
          this.isShowSubCommentTextarea = true;
          this.repliedUserId = userId;
          this.subCommentInfo = '回复' + username + '：';
          return;
        }
        if (confirm('评论还未保存，是否放弃评论？')) {
          this.commentToCommentVal = '';
        }
      },
      closeComment () {
        if (!this.commentToCommentVal) {
          this.isShowSubCommentTextarea = false;
          this.commentToCommentVal = '';
          return;
        }
        if (confirm('评论还未保存，是否放弃评论？')) {
          this.isShowSubCommentTextarea = false;
          this.commentToCommentVal = '';
        }
      },
      submitReply (id) {
        let params = {
          userId: this.userInfo.userId,
          blogId: this.$route.params.id,
          commentId: id,
          repliedUserId: this.repliedUserId,
          content: this.commentToCommentVal,
          status: 2
        };
        addBlogComment(params).then(res => {
          if (res.result && +res.result.status === 200) {
            this.$router.go(0);
          }
        });
        this.isShowSubCommentTextarea = false;
        this.commentToCommentVal = '';
      }
    }
  };
</script>
<style lang="scss" scoped>
  .comment-box {
    border-bottom: 1px dashed rgba(0,0,0,.2);
    .author-info {
      padding: .1rem 0;
      .avatar {
        float: left;
        width: .4rem;
        height: .4rem;
        border-radius: .2rem;
        margin-right: .1rem;
      }
      p {
        margin: .06rem 0;
        font-size: .12rem;
        .item-author {
          color: #4eb2a3;
          text-decoration: none;
        }
        &.other-info {
          font-size: .12rem;
          color: #666;
        }
      }
    }
    p.comment_content {
      padding: 0 0.5rem;
      font-size: .14rem;
      margin-top: 0;
    }
    p.comment-action {
      padding: 0 .5rem;
      span {
        color: #777;
        margin-right: .15rem;
        cursor: pointer;
        i {
          margin-right: .05rem;
        }
      }
    }
    .subcomment-box {
      padding-left: .5rem;
      textarea {
        border-radius: .05rem;
        border-color: #ccc;
        padding: .1rem;
        font-size: .14rem;
        vertical-align: bottom;
      }
      a {
        font-size: .14rem;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: #4eb2a3;
        padding: .06rem .1rem;
        border-radius: .04rem;
      }
    }
    ul.sub-comment {
      margin-left: .5rem;
      padding-left: .1rem;
      border-left: 3px solid rgba(0,0,0,.2);
      li {
        list-style-type: none;
        line-height: 2;
        font-size: .14rem;
        a {
          text-decoration: none;
          color: #4eb2a3;
          padding: 0 .05rem;
        }
        .reply-time {
          color: #777;
          font-size: .12rem;
          margin: 0 .1rem;
        }
        .comment-to-comment {
          cursor: pointer;
          color: #4eb2a3;
          i {
            margin-right: .03rem;
          }
        }
      }
    }
  }
</style>


