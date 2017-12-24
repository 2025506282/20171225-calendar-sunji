<template>
  <div class="userInfo">
    <div class="login-logout">
      <div class="heading">
        <img src="../assets/img/headimg.png">
      </div>
      <div class="link">
        <router-link to="/login" class="router-link">登陆</router-link>
        /
        <router-link to="/logout" class="router-link">注册</router-link>
      </div>
      <div class="fans-attention">
        <div class="attention1">
          <p class="attentionNumber">0</p>
          <p>关注</p>
        </div>
        <div class="fans">
          <p class="fansNumber">0</p>
          <p>粉丝</p>
        </div>
      </div>
    </div>
    <mt-cell title="公开博文" to="//github.com" is-link value="0">
      <img slot="icon" src="../assets/img/gk_text.png" width="24" height="24" >
    </mt-cell>
    <mt-cell title="秘密博文" to="//github.com" is-link value="0">
      <img slot="icon" src="../assets/img/mm_text.png" width="24" height="24" >
    </mt-cell>
    <mt-cell title="草稿箱" to="//github.com" is-link value="0">
      <img slot="icon" src="../assets/img/cg_text.png" width="24" height="24" >
    </mt-cell>
    <mt-cell title="收藏夹" to="//github.com" is-link value="0">
      <img slot="icon" src="../assets/img/sc_text.png" width="24" height="24" >
    </mt-cell>
  </div>
</template>
<style scoped>
  .userInfo {
    width: 100%;
    top: 0;
    background-color: gray;
    color: #ffffff;
  }
  .login-logout {
    width: 100%;
  }
  .login-logout .heading {
    padding-top: 20px;
    width: 100%;
    height: 102px;
    text-align: center;
    border-radius: 50%;
  }
  .login-logout .link {
    margin-top: 15px;
    width: 100%;
    text-align: center;
    overflow: hidden;
  }
  .login-logout .heading img {
    width: 102px;
    height: 102px;
    border-radius: 50%;
  }
  .login-logout .router-link {
    text-decoration: none;
    font-size: 1.6em;
    color: #ffffff;
  }
  .mint-cell {
    color: gray
  }
  .login-logout .fans-attention {
    overflow: hidden;
    width: 100%;
  }
  .attention1,.fans {
    font-size: 1.6rem;
    margin: 10px 0;
    width: 50%;
    float: left;
    text-align: center;
  }
</style>
<script>
export default {
  mounted() {
    this.$store.dispatch('hideHeader');
  }
}
</script>
