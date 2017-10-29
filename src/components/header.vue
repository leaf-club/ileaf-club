<template>
  <header>
    <nav>
      <router-link to="/personal" class="logo">
        <img src="../../static/images/logo.png" width="150" alt="logo-picture">
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
          <img src="../../static/images/github-avatar.jpeg" width="40" alt="用户头像">
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
  @import '../../static/css/mixin.scss';
  @media screen and (min-width: 1400px) {
    html {
      font-size: 20px;
      header {
        height: 60px;
      }
    }
    html>article {
      margin: 70px auto 0;
    }
  }
  html {
    font-size: 16px;
  }
  header {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    background: #fff;
    nav, #options {
      display: flex;
      ul {
        font-size: 1rem;
      }
    }
    nav {
      margin-left: 10px;
      .logo {
        display: flex;
        align-items: center;
      }
      ul {
        margin: 0;
        padding-left: 10px;
        display: flex;
        align-items: center;
        list-style: none;
        li{
          width: 50px;
          text-align: center;
          margin-right: 10px;
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
      margin-right: 10px;
      padding: 0 20px 0 0;
      align-items: center;
      list-style: none;
      li {
        width: 50px;
        text-align: center;
        margin-right: 10px;
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
          border-radius: 22px;
          display: inline-block;
          width: 80px;
          height: 35px;
          line-height: 35px;
        }
      }
      .user-info {
        height: 50px;
        display: flex;
        align-items: center;
        width: 40px;
        &:hover {
          ul {
            display: block;
          }
        }
        .avatar {
          width: 40px;
          height: 40px;
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
          margin-top: -2px;
          padding: 0 10px;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, -0.85);
          border-radius: 1px;
          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.175);
          li {
            width: 80px;
            margin: 10px 5px;
          }
        }
      }
    }
  }
  #header {
    .right {
      .login {
        .avatar {
          display: block;
          width: 44px;
          height: 44px;
          margin-right: 25px;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            top: 20px;
            right: -20px;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid $mainColor;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        &.user-info {
          position: relative;
          .drop-menu {
            display: none;
            list-style: none;
            margin: 0;
            padding:10px 0 0 0;
            width: 100px;
            position: absolute;
            top: 60px;
            left: 0;
            background-color: #fff;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            box-shadow: 8px 8px 5px #cccccc;
            .item {
              height: 44px;
              line-height: 44px;
              padding-left: 10px;
              &:hover {
                .link {
                  color: $mainColor;
                }
              }
              .link {
                text-decoration: none;
                color: $mainFontColor;
              }
            }
          }
          &:hover {
            .drop-menu {
              display: block;
            }
          }
        }
      }
    }
  }
</style>
