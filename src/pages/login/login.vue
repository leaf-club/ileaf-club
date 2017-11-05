<template>
  <div class="login">
    <div class="loginBox">
      <div class="info">
        <div class="input name">
          <p>用户名</p>
          <input type="text">
        </div>
        <div class="input password">
          <p>密码</p>
          <input type="password">
        </div>
        <p class="logon">登录</p>
        <span class="forget">忘记密码?</span>
        <div class="others">
          <p>其他账号登录:</p>
          <img src="../../assets/images/qqlogin.png" alt="qq登录">
          <img src="../../assets/images/wxlogin.png" alt="qq登录">
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
    height:6.27rem;
    background:url("../../assets/images/loginbg.png");
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
            margin:0.1rem 0;
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
            height:100%;
            font-size:0.16rem;
            color:black;
          }
          img{
            float:left;
            width:0.64rem;
            height:100%;
            border-radius:50%;
            margin-left:0.3rem;
            cursor:pointer;
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
          width:100%;
          height:100%;
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
