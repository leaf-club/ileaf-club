<template>
  <footer>
    <div class="blogroll">
      <p class="topic">友情链接</p>
      <div class="links">
        <a v-for="item in blogroll" :key="item.id" :href="item.link">{{ item.name }}</a>
        <a v-for="item in blogroll" :key="item.id" :href="item.link">{{ item.name }}</a>
        <a v-for="item in blogroll" :key="item.id" :href="item.link">{{ item.name }}</a>
      </div>
    </div>
    <div class="QRcode">
      <p class="topic">微信公众号</p>
      <img src="../assets/images/WeChat-QR.jpg" alt="微信公众号" title="扫一扫">
    </div>
    <div class="website">
      <p class="topic">LEAF CLUB</p>
      <router-link to="/home" class="linkHome">www.ileafclub.com</router-link>
      <router-link to="/home" class="linkHome">涨知识，上leaf-club</router-link>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        blogroll: [
          {name: '掘金网', link: 'https://juejin.im/', id: 1},
          {name: '百度一', link: 'https://www.baidu.com/', id: 2}
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
  footer {
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
        text-decoration: none;
        padding: 0.02rem 0.05rem;
        color: #43aabb;
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
        text-decoration: none;
        color: #43aabb;
      }
    }
  }
</style>
