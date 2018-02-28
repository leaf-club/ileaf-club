<template>
  <footer>
    <div v-if="showAd" class="ft-adv">
      <div class="blogroll">
        <p class="topic">友情链接</p>
        <div class="links">
          <a v-for="item in blogroll" :key="item.id" :href="item.link">{{ item.name }}</a>
        </div>
      </div>
      <div class="QRcode">
        <p class="topic">微信公众号</p>
        <img src="../assets/images/wechat-qr.jpg" alt="微信公众号" title="扫一扫">
      </div>
      <div class="website">
        <p class="topic">LEAF CLUB</p>
        <router-link to="/home" class="linkHome">www.leaf.club</router-link>
        <router-link to="/home" class="linkHome">涨知识，上leaf-club</router-link>
      </div>
    </div>
    <div class="ft">
      <nav class="ft_nav">
        <router-link to="/about" class="nav-item">关于leaf-club</router-link>
        <router-link to="/about" class="nav-item">联系方式</router-link>
        <router-link to="/about" class="nav-item">加入我们</router-link>
      </nav>
      <p class="copyright">© 2017 Leaf-Club. All rights reserved.</p>
      <p class="info">鄂ICP备0652314号</p>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        blogroll: [
          {name: '掘金网', link: 'https://juejin.im/', id: 1},
          {name: '百度', link: 'https://www.baidu.com/', id: 2},
          {name: '知乎', link: 'https://www.baidu.com/', id: 2},
          {name: '极客', link: 'https://www.baidu.com/', id: 2},
          {name: '新浪', link: 'https://www.baidu.com/', id: 2}
        ]
      };
    },
    props: {
      showAd: {
        type: Boolean,
        required: true
      }
    },
    mounted () {
      // console.log(this.ftAd);
    }
  };
</script>
<style lang="scss" scoped>
  footer .ft-adv {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 0.2rem;
    background-color: #434343;
    font-size: 0.18rem;

    .blogroll {
      // flex-basis: 1rem;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: center;
      width: 30%;
      color: #eeeeee;

      .links{
        max-width: 2rem;
        display: flex;
        flex-flow: row wrap;
      }

      a{
        display: inline-block;
        font-size: .8em;
        text-decoration: none;
        padding: 0rem 0.05rem;
        margin-bottom: 0.05rem;
        color: #43aabb;
        border-right: 1px solid #43aabb;
      }
      a:last-child{
        border-right: none;
      }
    }

    .QRcode {
      width: 30%;
      flex-grow: 1;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: center;
      color: #eeeeee;

      img{
        width: 1rem;
        height: 1rem;
      }
    }

    .website {
      width: 30%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      color: #eeeeee;

      p.topic{
        font-size: 0.25rem;
        margin-bottom: 0.1rem;
      }

      .linkHome{
        font-size: 0.8em;
        line-height: 1.5;
        text-decoration: none;
        color: #43aabb;
      }
    }
  }
  footer .ft{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 0.12rem;
    background-color: #eee;
    padding: 0.08rem 0;

    .nav-item{
      text-decoration: none;
      color: #333;
      padding: 0 0.05rem;
    }
    
    p{
      margin: 0.03rem 0 0;
      color: #000;
    }
  }
</style>
