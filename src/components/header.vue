<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/images/logo.png" width="150" alt="logo-picture">
      </router-link>
      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/article">博文</router-link></li>
        <li><router-link to="/work">作品</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
    </nav>
    <ul id="options">
      <li v-if="isLogin" class="user-info">
        <span class="avatar">
          <img src="../assets/images/github-avatar.jpeg" width="40" alt="用户头像">
        </span>
        <ul class="drop-menu">
          <li class="item">
            <router-link to="/personal" class="link">我的主页</router-link>
          </li>
          <li class="item">
            <router-link to="/personal" class="link">我的收藏</router-link>
          </li>
          <li class="item">
            <router-link to="/edit" class="link">发布文章</router-link>
          </li>
          <li class="item">
            <router-link to="/work" class="link">发布作品</router-link>
          </li>
          <li class="item">
            <router-link to="/home" class="link">设置</router-link>
          </li>
          <li class="item">
            <router-link to="/home" class="link">退出</router-link>
          </li>
        </ul>
      </li>
      <li v-if="!isLogin">
        <router-link to="/login" class="btn-login">登录</router-link>
      </li>
      <li class="write">
        <router-link to="/edit" class="btn-write">写文章</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        // activeId: 0
      };
    },
    props: {
      isLogin: {
        type: Boolean,
        required: true
      },
      activeId: {
        type: Number,
        default: 0
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/css/mixin.scss';
  html {
    font-size: 0.16rem;
  }
  header {
    width: 100%;
    height: 0.60rem;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    background: #fff;
    z-index: 99;
    nav, #options {
      display: flex;
      font-size: 0.16rem;
    }
    nav {
      margin-left: 0.20rem;
      .logo {
        display: flex;
        align-items: center;
      }
      ul {
        margin: 0;
        padding-left: 0.20rem;
        display: flex;
        align-items: center;
        list-style: none;
        li{
          width: 0.50rem;
          text-align: center;
          margin-right: 0.20rem;
          a{
            color: $mainFontColor;
            text-decoration: none;
          }
          a.router-link-active, a:hover{
            color: $mainColor;
          }
        }
      }
    }
    #options {
      margin-right: 0.20rem;
      padding: 0 0.20rem 0 0;
      align-items: center;
      list-style: none;
      li {
        width: 0.50rem;
        text-align: center;
        margin-right: 0.20rem;
        a{
          color: $mainFontColor;
          text-decoration: none;
        }
        a.router-link-active, a:hover {
          color: $mainColor;
        }
        .btn-write {
          color: #fff;
          background-color: $mainColor;
          border-radius: 0.07rem;
          display: inline-block;
          width: 0.80rem;
          height: 0.35rem;
          line-height: 0.35rem;
          &:hover {
            background-color: $hoverColor;
            color: #fff;
          }
        }
      }
      .user-info {
        height: 0.60rem;
        display: flex;
        align-items: center;
        width: 0.40rem;
        &:hover {
          ul {
            display: block;
          }
        }
        .avatar {
          width: 0.40rem;
          height: 0.40rem;
          display: inline-block;
          cursor: pointer;
          img {
            border-radius: 50%;
          }
        }
        ul {
          display: none;
          position: absolute;
          top: 100%;
          margin-top: -0.02rem;
          padding: 0 0.10rem;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 0.01rem solid rgba(0, 0, 0, -0.85);
          border-radius: 0.01rem;
          -webkit-box-shadow: 0 0.06rem 0.12rem rgba(0, 0, 0, 0.175);
          box-shadow: 0 0.03rem 0.12rem rgba(0, 0, 0, 0.175);
          li {
            width: 0.80rem;
            margin: 0.10rem 0.05rem;
            text-align: left;
          }
        }
      }
    }
  }
</style>
