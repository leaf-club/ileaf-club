<template>
  <div class="read">
    <div class="content">
      <h2>博文</h2>
      <main>
        <section class="article-box">
          <div class="author-info">
            <div class="avatar" :style="'background-image: url(' + articleData.userinfo.user_avatar + ');background-size:cover;'"></div>
            <p class="username">{{articleData.userinfo.username}}</p>
            <p class="other-info">
              {{articleData.pub_time}}
              <span>
                阅读<span>{{articleData.read_num}}</span>
                点赞<span>{{articleData.like_num}}</span>
                收藏<span>{{articleData.favorite_num}}</span>
                评论<span>{{articleData.comment_num}}</span>
              </span>
            </p>
          </div>
          <h1>{{articleData.title}}</h1>
          <div class="article-content" v-html="articleData.content">
          </div>
          <action
            :pid="articleData.id"
            :type="0"
            :init-data="{
              liked: false,
              favorited: false,
              commented: false,
              likeCount: articleData.like_num === 0 ? '点赞' : articleData.like_num,
              favoriteCount: articleData.favorite_num === 0 ? '收藏' : articleData.favorite_num,
              commentCount: articleData.comment_num === 0 ? '评论' : articleData.comment_num,
              readCount: articleData.read_num === 0 ? '查看' : articleData.read_num,
              showLike: true,
              showFavorite: true,
              showComment: false,
              showRead: true,
            }"
          ></action>
        </section>
        <section class="comment-to-article">
          <textarea name="commenToArticle" id="commenToArticle" cols="80" rows="5" placeholder="你的月亮我的心，说出你的心声" v-show="isShowCommentBox" v-model="commentToArticleVal"></textarea>
          <a href="#" class="btn-comment" @click.prevent="commentToArticle">评论</a>
        </section>
        <section v-for="comment in commentData" :key="comment.id">
          <comment :comment="comment"></comment>
        </section>
        <!-- <section class="comment-box" :id="'comment' + comment.id" v-for="comment in commentData" :key="comment.id">
          <div class="author-info">
            <div class="avatar" :style="'background-image: url(' + comment.userinfo.user_avatar + ');background-size:cover;'"></div>
            <p>{{comment.userinfo.username}}</p>
            <p class="other-info">
              {{comment.comment_time}}
            </p>
          </div>
          <p class="comment_content">{{comment.comment_content}}</p>
          <p class="comment-action">
            <span class="thumb_up"><i class="fa fa-thumbs-o-up"></i>{{comment.thumb_up_num}}</span>
            <span class="comment" @click="replyToComment(comment.id, comment.userinfo.userid, comment.userinfo.username)"><i class="fa fa-comment-o"></i>回复</span>
          </p>
          <div class="subcomment-box hide">
            <textarea name="commenToComment" id="commenToComment" cols="80" rows="5" placeholder="你的月亮我的心，说出你的心声" v-show="isShowSubCommentBox" v-model="commentToCommentVal"></textarea>
            <a href="#" class="btn-commit-reply" @click.prevent="commentToComment(comment.id)">提交</a>
          </div>
          <ul class="sub-comment">
            <li v-for="reply in comment.reply" :key="reply.id">
              <a href="/personal" class="reply-author">{{reply.reply_author_userinfo.username}}</a>
              回复
              <a href="/personal">{{reply.to_name_userinfo.username}}</a>
              <span class="reply-content">：{{reply.reply_content}}</span>
              <span class="comment-to-comment" @click.prevent="replyToComment(comment.id, reply.reply_author_userinfo.userid, reply.reply_author_userinfo.username)"><i class="fa fa-comment-o"></i>回复</span>
            </li>
          </ul>
        </section> -->
      </main>
    </div>
    <foot :showAd="false"></foot>
  </div>
</template>

<script>
  import foot from '@/components/footer';
  import action from '@/components/action';
  import comment from '@/components/comment';

  export default {
    data () {
      return {
        // activeId: 0
        articleData: {
          id: 101,
          userinfo: {
            user_avatar: '../../static/img/liuchunliu.jpeg',
            username: '怀左同学',
            userid: '1234'
          },
          pub_time: '2017-10-15 15:32',
          read_num: 2693,
          like_num: 25,
          favorite_num: 36,
          comment_num: 37,
          title: '我想说的话',
          content: '<p>01<br> 刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方，她温柔可爱美丽大方，对人友好，大家都对她竖起大拇哥。</p> <p>02<br> 突然有点咳嗽，感觉喉咙进了一个小飞絮，喝口水就好了，但是杯子是新的杯子，我觉得得再洗洗才能喝啊，那我就起身啊，可是又在辛勤工作，咋办，不想打乱工作节奏，还是多咳嗽几下吧，受不了了再去打一下热水喝，但是现在去打水的话，等这段话打完了就可以马上喝了，如果之后再打水，就要等一会儿才能喝，怎么办，真纠结啊，还是打完吧，也就这几个字了，我打字还是挺快的，这么点时间也不够水凉下来的吧～😄</p>'
        },
        commentData: [
          {
            id: 1,
            userinfo: {
              user_avatar: '../../static/img/liuchunliu.jpeg',
              username: '简书卓不凡',
              userid: '123456'
            },
            comment_time: '2017-10-15 16:20',
            comment_content: '如果有一天，我变得很有钱，愿所有邪恶的人不再掌握话语权，愿自己喜欢的人都能留在身边',
            reply: [
              {
                id: 1,
                reply_author_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: 'liuliu',
                  userid: '123456'
                },
                to_name_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: 'chunliu',
                  userid: '123456'
                },
                reply_content: '智障！'
              },
              {
                id: 2,
                reply_author_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                to_name_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                reply_content: '智障！'
              },
              {
                id: 3,
                reply_author_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                to_name_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                reply_content: '智障！'
              }
            ],
            thumb_up_num: 55
          },
          {
            id: 2,
            userinfo: {
              user_avatar: '../../static/img/liuchunliu.jpeg',
              username: '简书卓不凡',
              userid: '123456'
            },
            comment_time: '2017-10-15 16:20',
            comment_content: '如果有一天，我变得很有钱，愿所有邪恶的人不再掌握话语权，愿自己喜欢的人都能留在身边',
            reply: [
              {
                id: 1,
                reply_author_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                to_name_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                reply_content: '智障！'
              },
              {
                id: 2,
                reply_author_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                to_name_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                reply_content: '智障！'
              },
              {
                id: 3,
                reply_author_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                to_name_userinfo: {
                  user_avatar: '../../static/img/liuchunliu.jpeg',
                  username: '简书卓不凡',
                  userid: '123456'
                },
                reply_content: '智障！'
              }
            ],
            thumb_up_num: 55
          }
        ],
        isShowCommentBox: false,
        commentToArticleVal: ''
        // isShowSubCommentBox: true,
        // commentToCommentVal: '',
        // repliedUserid: '',
        // repliedUsername: ''
      };
    },
    props: {
    },
    components: {
      foot,
      action,
      comment
    },
    methods: {
      // replyToComment (commentId, repliedId, repliedName) {
      //   this.repliedUserid = repliedId;
      //   this.repliedUsername = repliedName;
      //   let commentEl = document.querySelector('#comment' + commentId);
      //   let textareaBoxEl = commentEl.querySelector('.subcomment-box');
      //   let textareaEl = textareaBoxEl.querySelector('textarea');
      //   if (textareaBoxEl.classList.contains('hide')) {
      //     let textInfo = '回复' + this.repliedUsername + '：';
      //     textareaEl.setAttribute('placeholder', textInfo);
      //     textareaBoxEl.classList.toggle('hide');
      //   } else if (this.commentToCommentVal) {
      //     if (confirm('评论还未保存，是否放弃评论？')) {
      //       this.commentToCommentVal = '';
      //       textareaBoxEl.classList.toggle('hide');
      //     }
      //   } else {
      //     textareaBoxEl.classList.toggle('hide');
      //   }
      // },
      // commentToComment (commentId) {
      //   console.log(this.commentToCommentVal);
      //   let commentEl = document.querySelector('#comment' + commentId);
      //   let textareaBoxEl = commentEl.querySelector('.subcomment-box');
      //   textareaBoxEl.classList.toggle('hide');
      //   this.commentToCommentVal = '';
      // },
      commentToArticle () {
        if (!this.isShowCommentBox) {
          this.isShowCommentBox = !this.isShowCommentBox;
          return;
        }
        if (this.commentToArticleVal) {
          console.log(this.commentToArticleVal);
          this.isShowCommentBox = !this.isShowCommentBox;
          return;
        }
        this.isShowCommentBox = !this.isShowCommentBox;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .read {
    .content {
      padding: 0.05rem .5rem;
      position: relative;
      h2 {
        font-size: 0.14rem;
        color: #666;
      }
      main {
        background-color: #fff;
        padding: 0.3rem;
        .article-box {
          border-bottom: 1px solid rgba(0,0,0,.2);
          margin-bottom: .1rem;
          .author-info {
            padding: .1rem 0;
            .avatar {
              float: left;
              width: .5rem;
              height: .5rem;
              border-radius: .25rem;
              margin-right: .1rem;
            }
            p {
              margin: .08rem 0;
              font-size: .14rem;
            }
            p.other-info {
              font-size: .13rem;
              color: #666;
            }
          }
          .article-content {
            line-height: 2;
          }
        }
        .comment-to-article {
          // text-align: center;
          margin-bottom: .3rem;
          a.btn-comment {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            color: #fff;
            background-color: #4eb2a3;
            padding: .06rem .1rem;
            border-radius: .04rem;
          }
          textarea {
            display: block;
            margin: .15rem 0 .08rem;
            border-radius: .05rem;
            border-color: #ccc;
            padding: .1rem;
            font-size: .14rem;
          }
        }
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
          .hide {
            display: none;
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
      }
    }
  }
</style>
