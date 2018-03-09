<template>
  <div>
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
        <li v-if="!isLogin" class="login">
          <span class="btn-login" @click="login">登录</span>
          <span class="btn-register" @click="register">注册</span>
        </li>
        <li class="write">
          <router-link to="/edit" class="btn-write">写文章</router-link>
        </li>
      </ul>
    </header>
    <section :class="doLogin ? 'login-wrap' : 'login-wrap register-wrap'" v-if="doLogin || doRegister">
      <form class="login-box">
        <h2><span v-if="doLogin">登录</span><span v-if="doRegister">注册</span><span class="close"><i class="fa fa-close" @click="close"></i></span></h2>
        <input type="text" name="name" placeholder="请填写用户名" v-if="doRegister">
        <input type="text" name="phone" placeholder="请填写手机号或邮箱">
        <input type="password" name="pwd" placeholder="请输入密码">
        <button class="do-login"><span v-if="doLogin">登录</span><span v-if="doRegister">注册</span></button>
        <p v-if="doLogin"><span>没有账号？</span><span class="register" @click="register">注册</span><span class="forgetPwd">忘记密码？</span></p>
        <p v-if="doRegister" class="registerToLogin" @click="login">已有账号登录</p>
        <p>第三方账号登录：</p>
        <div class="third-account-box">
          <a href="#" class="qq">
            <i class="fa fa-qq"></i>
          </a>
          <a href="#" class="wx">
            <i class="fa fa-weixin"></i>
          </a>
          <a href="#" class="wb">
            <i class="fa fa-weibo"></i>
          </a>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        // activeId: 0
        doLogin: false,
        doRegister: false
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
    },
    methods: {
      register () {
        this.doLogin = false;
        this.doRegister = true;
      },
      login () {
        this.doLogin = true;
        this.doRegister = false;
      },
      close () {
        this.doLogin = false;
        this.doRegister = false;
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
    z-index: 999999;
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
        span {
          color: #999;
          cursor: pointer;
        }
        span:hover {
          color: #4eb2a3;
        }
        span.btn-login:after {
          content: "\B7";
          margin: 0 .04rem 0 .07rem;
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
      li.login {
        width: 1.2rem
      }
      li.write {
        a.btn-write {
          color: white;
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
  .login-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999999;
    font-size: 0.16rem;
    .login-box{
      width: 2.7rem;
      height: 3.3rem;
      background-color: #fff;
      padding: .24rem;
      h2 {
        font-size: 0.16rem;
        margin: 0 0 .3rem;
        font-weight: normal;
        span.close {
          float: right;
          cursor: pointer;
          opacity: .4;
        }
      }
      input {
        width: 2.48rem;
        height: .2rem;
        padding: .08rem .1rem;
        margin-bottom: .15rem;
      }
      .do-login {
        width: 100%;
        text-align: center;
        padding: .08rem .16rem;
        background-color: #4eb2a3;
        color: #fff;
        cursor: pointer;
      }
      p {
        font-size: .13rem;
        color: #666;
        line-height: 2;
        span.register {
          color: #4eb2a3;
          cursor: pointer;
        }
        span.forgetPwd {
          float: right;
          color: #4eb2a3;
          cursor: pointer;
        }
      }
      p.registerToLogin {
        color: #4eb2a3;
        text-align: center;
        cursor: pointer;
      }
      .third-account-box {
        display: flex;
        justify-content: center;
        a {
          margin-right: .7rem;
          color: black;
          cursor: pointer;
        }
        a:hover {
          color: #4eb2a3;
        }
        a:last-child {
          margin-right: .0;
        }
      }
    }
    
  }
  .register-wrap {
    .login-box {
      height: 3.7rem;
    }
  }
</style>
