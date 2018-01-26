<template>
  <div class="login">
    <div class="loginBox">
      <div class="info">
        <div class="input name">
          <p>用户名</p>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div class="input password">
          <p>密码</p>
          <input type="password" placeholder="请输入密码">
        </div>
        <p class="logon">登录</p>
        <a href="javascript:void(0)" class="forget">忘记密码</a>
        <div class="others">
          <p>快捷登录:</p>
          <a href="javascript:void(0)" class="qq">
            <i class="fa fa-qq fa-fw fa-lg"></i>
          </a>
          <a href="javascript:void(0)" class="wx">
            <i class="fa fa-weixin fa-fw fa-lg"></i>
          </a>
        </div>
      </div>
      <div class="qrcode">
        <img src="../../assets/images/qrcode.png" alt="二维码">
        <p>微信扫一扫</p>
        <p>关注leafClub公众号</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="scss">
  .login{
    position:fixed;
    left:0;
    top:0;
    z-index:-1;
    width:100%;
    height:100%;
    background:url("../../assets/images/loginbg.png") repeat;
    .loginBox{
      width:6.8rem;
      height:3.6rem;
      margin:1.6rem auto;
      background-color:rgba(255,255,255,.3);
      border-radius:0.08rem;
      padding:0.4rem 0 0 0.2rem;
      .info{
        float:left;
        width:3.74rem;
        padding-right:0.5rem;
        border-right:0.01rem solid white;
        .input{
          width:100%;
          height:0.54rem;
          background-color:rgb(134,134,134);
          border-radius:0.05rem;
          margin-bottom:0.2rem;
          p{
            width:0.75rem;
            height:0.34rem;
            line-height:0.34rem;
            margin:0.1rem 0;
            text-align:center;
            float:left;
            color:white;
            font-size:0.18rem;
            border-right:1px solid white;
          }
          input{
            width:2.8rem;
            height:0.34rem;
            margin:0.1rem 0 0.1rem 0.1rem;
            color:#ccc;
            background-color: rgb(134,134,134);
            border:none;
            &:focus{
              outline:none;
            }
          }
        }
        .logon{
          width:100%;
          height:0.54rem;
          line-height:0.54rem;
          background-color: #434343;
          font-size:0.22rem;
          color:white;
          text-align:center;
          border-radius:0.08rem;
          cursor:pointer;
        }
        .forget{
          display:block;
          font-size:0.14rem;
          color:#5e5e5e;
          cursor:pointer;
        }
        .others{
          width:100%;
          height:0.64rem;
          margin-top:0.1rem;
          p{
            float:left;
            line-height:0.64rem;
            margin:0;
            height:0.64rem;
            font-size:0.16rem;
            color: rgba(9, 9, 10, 0.9);
          }
          a{
            float:left;
            display:block;
            width:0.44rem;
            height:0.44rem;
            margin:0.13rem 0 0.13rem 0.4rem;
            cursor:pointer;
            border-radius: 50%;
            text-decoration: none;
            i{
              display:block;
              margin:0.13rem auto;
              color:#fff;
            }
            &.qq{
              background-color:#498ad5;
            }
            &.wx{
              background-color:#00bb29;
            }
          }
        }
      }
      .qrcode{
        width:1.51rem;
        height:auto;
        float:left;
        margin:0.2rem 0.5rem 0;
        img{
          display:block;
          width:1.51rem;
          height:1.51rem;
        }
        p{
          width:100%;
          height:0.3rem;
          line-height:0.3rem;
          text-align:center;
          color:#434343;
          font-size:0.16rem;
          margin:0.2rem 0 0 0;
        }
      }
    }
  }
</style>
