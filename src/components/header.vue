<template>
  <header id="header">
    <div class="left">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo-picture">
      </div>
      <ul>
        <li :class="activeId === 1 ? 'active' : ''">
          <router-link to="/home">首页</router-link>
        </li>
        <li :class="activeId === 2 ? 'active' : ''">
          <router-link to="/article">博文</router-link>
        </li>
        <li :class="activeId === 3 ? 'active' : ''">
          <router-link to="/work">作品</router-link>
        </li>
        <li :class="activeId === 4 ? 'active' : ''">
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <div v-if="isLogin" class="login user-info">
        <router-link to="/personal" class="avatar">
          <img src="../assets/images/github-avatar.jpeg" alt="用户头像">
        </router-link>
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
      </div>
      <div v-if="!isLogin" class="login">
        <router-link to="/login" class="btn-login">登录</router-link>
      </div>
      <div class="write">
        <router-link to="/edit" class="btn-write">写文章</router-link>
      </div>
    </div>
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
  @import '../assets/css/mixin';
  #header {
    width: 100%;
    height: 80px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    .left {
      float: left;
      width: 60%;
      margin-top: 10px;
      .logo {
        float: left;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      ul {
        list-style: none;
        margin: 0;
        padding-left: 10px;
        height: 60px;
        line-height: 60px;
        display: flex;
        font-size: 24px;
        li {
          width: 60px;
          text-align: center;
          margin-right: 10px;
          a {
            color: $mainFontColor;
            text-decoration: none;
          }
          &.active {
            a {
              color: $mainColor;
            }
          }
        }
      }
    }
    .right {
      float: right;
      height: 100%;
      margin-right: 30px;
      font-size: 18px;
      .login {
        float: left;
        display: flex;
        align-items: center;
        height: 60px;
        margin-top: 10px;
        .btn-login {
            display: block;
            position: relative;
            text-decoration: none;
            text-align: center;
            width: 60px;
            height: 44px;
            line-height: 44px;
            color: #999;
            // &::after {
            //   content: '';
            //   display: block;
            //   position: absolute;
            //   top: 0;
            //   left: 0;
            //   box-sizing: border-box;
            //   width: 100%;
            //   height: 100%;
            //   border: 1px solid #ccc;
            //   border-radius: 8px;
            // }
        }
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
      .write {
        float: left;
        display: flex;
        align-items: center;
        margin-left: 20px;
        height: 60px;
        margin-top: 10px;
        .btn-write {
            display: block;
            position: relative;
            text-decoration: none;
            text-align: center;
            width: 80px;
            height: 44px;
            line-height: 44px;
            color: #fff;
            background-color: $mainColor;
            border-radius: 22px;
          }
      }
    }
  }
</style>
