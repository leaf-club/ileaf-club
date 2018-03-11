<template>
  <div class="ad-place">
    <div v-for="ad in adList" :key="ad.name" class="ad-box">
      <a target="_blank" :href="ad.target">
        <div class="ad-image" :style="'background-image: url('+ad.imageUrl+');background-size:cover;'"></div>
      </a>
      <div class="ctrl-box">
        <a href="#" class="ad-label">
          <span class="advertise"><span class="inco">投放</span>广告</span>
        </a>
      </div>
    </div>
    <div class="wechat-box">
      <img src="../assets/images/wechat-qr.jpg" height="100" width="100" alt="微信公众号" title="扫一扫">
      <section>
        <p>关注leafClub</p>
        <p class="sub-title">帮助你成为大牛</p>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    props: {
      adList: {
        type: Array,
        require: true
      }
    }
  };
</script>
<style lang="scss" scoped>
.ad-place {
  width: 2.4rem;
  min-width: 2.4rem;
  margin-left: 0.2rem;
  .ad-box {
    height: 2rem;
    margin-bottom: 0.18rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    .ad-image {
      width: 100%;
      height: 100%;
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .ctrl-box{
      a {
        text-decoration: none;
        position: absolute;
        right: 0.06rem;
        bottom: 0.06rem;
        line-height: 0.15rem;
        height: 0.15rem;
        font-size: 0.1rem;
        z-index: 1;
        color: #fff;
        background-color: rgba(0,0,0,.2);
        border: 1px solid #fff;
        border-radius: 4px;
        padding-left: 0.04rem;
        padding-right: 0.04rem;
      }
      .inco {
        display: none;
      }
      .advertise {
        &:hover {
          .inco {
            display: inline;
          }
        }
      }
      .inco {
        &:hover {
          display: none;
        }
      }
    }
  }
  .wechat-box {
    background-color: white;
    height: 1rem;
    padding: 0.1rem;
    section {
      float: right;
      margin-right: 0.14rem;
      .sub-title {
        font-size: 0.12rem;
        color: #666;
      }
    }
  }
}
</style>


