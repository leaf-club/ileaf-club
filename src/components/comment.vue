<template>
  <div class="comment-list">
    <section class="comment-box">
      <div class="author-info">
        <div class="avatar" :style="'background-image: url(' + comment.userInfo.avatar + ');background-size:cover;'"></div>
        <p>{{comment.userInfo.userName}}</p>
        <p class="other-info">
          {{comment.createTime}}
        </p>
      </div>
      <p class="comment_content">{{comment.content}}</p>
      <p class="comment-action">
        <span class="thumb_up"><i class="fa fa-thumbs-o-up"></i>{{comment.commentLikeNum}}</span>
        <span class="comment" @click="replyToComment(comment._id, comment.userInfo.userId, comment.userInfo.userName)" v-show="!isShowSubCommentTextarea"><i class="fa fa-comment-o"></i>回复</span>
        <span class="comment" @click="closeComment(comment._id, comment.userInfo.userId, comment.userInfo.userName)" v-show="isShowSubCommentTextarea"><i class="fa fa-comment-o"></i>收起回复</span>
      </p>
      <div class="subcomment-box" v-show="isShowSubCommentTextarea">
        <textarea name="commenToComment" id="commenToComment" cols="80" rows="5" :placeholder="subCommentInfo" v-model="commentToCommentVal"></textarea>
        <a href="#" class="btn-commit-reply" @click.prevent="commentToComment(comment._id)">提交</a>
      </div>
      <ul class="sub-comment">
        <li v-for="reply in comment.replyList" :key="reply._id">
          <a href="/#/personal" class="reply-author">{{reply.replyUserInfo.userName}}</a>
          回复
          <a href="/#/personal">{{reply.repliedUserInfo.userName}}</a>
          <span class="reply-content">：{{reply.replyContent}}</span>
          <span class="comment-to-comment" @click.prevent="replyToComment(comment._id, reply.replyUserInfo.userId, reply.replyUserInfo.userName)"><i class="fa fa-comment-o"></i>回复</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isShowSubCommentTextarea: false,
        subCommentInfo: '你的月亮我的心，说出你的心声',
        commentToCommentVal: ''
      };
    },
    props: ['comment'],
    methods: {
      replyToComment (commentId, userId, username) {
        if (!this.commentToCommentVal) {
          this.isShowSubCommentTextarea = true;
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
      commentToComment (id) {
        console.log(this.commentToCommentVal);
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
      }
      p.other-info {
        font-size: .12rem;
        color: #666;
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
        .comment-to-comment {
          cursor: pointer;
          color: #777;
          i {
            margin-right: .03rem;
          }
        }
      }
    }
  }
</style>


