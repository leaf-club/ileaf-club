<template>
  <div class="about">
    <div class="content">
      <h2>关于</h2>
      <main>
        <h3>成为地球卓越的Web团队</h3>
        <p>
          腾讯Web前端团队 – Alloy Team 来自于腾讯SNG(社交网络事业群)，源于2008年成立的腾讯WebQQ团队，于2011年10.24正式对公司
          外以腾讯AlloyTeam为团队名称进行对外交流，AlloyTeam的寓意是：像合金一样将各种技术，以及各个成员的聪明才智聚合在一起，从而
          产生更强的合金特性，未来我们也希望通过聚合业界的各大前端牛人，来共同推动Web前端技术在中国的发展！我们致力于Web前端技术的研
          究，热衷HTML5、移动Web技术，用最酷的新技术开发各种有趣的开源项目，请大家关注：
        </p>
        <ul>
          <li>团队官网：http://www.leafclub.com</li>
          <li>Github开源：http://github.com/leaf-club</li>
        </ul>

        <img src="../../assets/images/leaf-team.jpeg" alt="leaf团队合影">
        <h4>首先，我们为什么要建设这个博客呢？</h4>
        <ul>
          <li>第一，当然是为了我们的团队让更多的人知道我们了：）</li>
          <li>第二，是通过写博客和分享提高我们团队在项目建设上的整体实力：）</li>
          <li>第三，通过写博客与同行者进行交流互动，认识更多业界的人：）</li>
          <li>第四，通过分享我们的经历，分享我们的技术，帮助到更多需要的人，为推动业界的发展做出一点贡献：）</li>
          <li>第五，是凝聚团队向心力，提高团队使命感，发展团队文化。在这里可以自由施展，这里可以学习进步！这里就是你的家~~~</li>
        </ul>

        <h4>我们希望读者能从我们这里获得什么呢？</h4>
        <ul>
          <li>灵感，分享我们的，激发你们的；</li>
          <li>技术，分享我们的tricks，bugs，从语言、算法、到具体的应用实现；</li>
          <li>经验，分享我们编程的、读书的、合作的经验；</li>
          <li>人品，通过帮助一帮菜鸟进步，见证一堆白痴成长，积攒您的人品暴涨；</li>
          <li>喜悦，自然是从我们这里取得每一点收获时的感受；</li>
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
        {id: 1, name: '刘春柳', area: '前端开发', avatar: '../../static/img/liuchunliu.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 2, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 3, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 4, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 5, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 6, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 7, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'},
        {id: 8, name: '刘春柳', area: '前端开发', avatar: '../../static/img/github-avatar.jpeg', detail: '刘春柳是一个集才华与美貌于一身的美丽师姐，大家都非常尊重热爱她，她博学多识，切实而且勤劳，更重要的是还心怀诗和远方'}
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


