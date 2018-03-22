<template>
  <div class="about">
    <div class="content">
      <h2>关于</h2>
      <main>
        <h3>高校最有活力的Web团队——Leaf Club</h3>
        <p>
          Leaf Club虽然今年才打起口号，但是我们是源于2000年（我觉得可能是这一年）成立的leaf实验室，leaf实验室是华中科技大学自动化学院张征副教授的团队。
          你要问我leaf是啥意思，其实我也想知道有着8位QQ靓号的张老师的网名为啥要叫leaf，别人实验室都叫什么人工智能，智能系统之类的实验室，
          我们实验室也许就是一股清流。我们叫leaf实验室，填简历的时候都不知道正不正式。但是没关系，什么名字都无所谓，现在我们要打响leaf
          实验室的旗号！
        </p>
        <p>
          那我们做啥呢？虽然标题叫web团队（毕竟我们实验室做web的小姐姐们都漂亮，而且这个网站是我们做web的人做的，文案也是由我们控制的，叫web团队我觉得不过分哈哈），但是leaf实验室其实心态非常开放，有做游戏的有做安卓的有做设计的还有做算法可视化机器学习人工智能的，麻雀虽小，是吧，你懂的。

          我们欢迎所有愿意和我们一起学习进步的同学们～
        </p>
        <ul>
          <li>团队官网：http://www.leafclub.com</li>
          <li>Github开源：http://github.com/leaf-club</li>
        </ul>

        <img src="http://p5ttngtv2.bkt.clouddn.com/leaf/member/leaf.JPG" alt="leaf团队合影">
        <h4>我们为什么要做这个网站？</h4>
        <ul>
          <li>第一，为了让社会充满爱：）</li>
          <li>第二，为了让更多的同学认识我们，加入我们：）</li>
          <li>第三，让想学习想进步的同学们有方式和渠道努力：）</li>
          <li>第四，分享我们的知识和经验，共同学习进步：）</li>
        </ul>

        <h4>你能从我们这里获得什么呢？</h4>
        <ul>
          <li>第一，技术</li>
          <li>第二，友谊</li>
          <li>第三，成长</li>
        </ul>

        <h4>团队成员</h4>
        <leafer :leaferList="leaferList"></leafer>
      </main>
    </div>
    <foot :showAd="true"></foot>
  </div>
</template>

<script>
import foot from '@/components/footer';
import leafer from '@/components/leafer';

export default {
  data () {
    return {
      leaferList: [
        {id: 1, name: '刘春柳', area: '前端开发', avatar: 'http://opzww7anw.bkt.clouddn.com/leaf/image/lcl.jpg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 2, name: '李蒙昭', area: '前端开发', avatar: 'http://opzww7anw.bkt.clouddn.com/leaf/image/limengzhao.jpg', detail: '李蒙昭是一个聪明可爱机智善良勇敢无畏天生丽质霸气侧漏邪魅狂拽智商超群极具魅力温文尔雅风度翩翩彬彬有礼天下无双眉清目秀吹弹可破人面桃花英俊潇洒气宇不凡玉树临风仪表堂堂风流倜傥面如冠玉风度翩翩美目盼兮清新俊逸酷到爆的程序员'},
        {id: 3, name: '杨孝勇', area: '全栈开发', avatar: 'http://opzww7anw.bkt.clouddn.com/leaf/image/gem.jpg', detail: '杨孝勇是一个程序猿'},
        {id: 4, name: '黄伊琳', area: '前端开发', avatar: 'http://p5ttngtv2.bkt.clouddn.com/hyl.jpg', detail: '黄伊琳是一个程序媛'},
        {id: 5, name: '刘力', area: '后台开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘力是一个程序猿'}
      ]
    };
  },
  components: {
    foot,
    leafer
  }
};
</script>

<style lang="scss" scoped>
  .about {
    .content {
      padding: 0.05rem .5rem;
      position: relative;
      margin-bottom: 0.5rem;
      h2 {
        font-size: 0.14rem;
        color: #666;
      }
      main {
        background-color: white;
        padding: 0.3rem;
        line-height: 2;
        h3 {
          text-align: center;
          color: #4eb2a3;
        }
        p {
          text-indent: 2em;
        }
        img {
          width: 100%;
        }
      }
    }
  }
</style>


