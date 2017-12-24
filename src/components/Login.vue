<template>
  <div class="login">
    <mt-header title="登陆">
      <router-link to="/userInfo" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="login-header">
      <img src="../assets/img/headimg.png"/>
    </div>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" v-bind:state="states[0]" v-on:change="judgeUsername()"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" v-bind:state="states[1]" v-on:change="judgePassword()"></mt-field>
      <mt-button size="large" type="primary" v-on:click="login">登陆</mt-button>
    </div>
    <div>
      <router-link to="/forget-password" class="link-forget-password">忘记密码</router-link>
      <router-link to="/logout" class="link-logout">注册</router-link>
    </div>
  </div>
</template>
<style scoped>
  .login-header {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .link-forget-password {
    float: left;
    margin-top: 10px;
    margin-left: 1.2rem;
    font-size: 1.6rem;
    cursor: pointer;
  }
  .link-logout {
    margin-top: 10px;
    font-size: 1.6rem;
    float: right;
    margin-right: 1.2rem;
    cursor: pointer;
  }
</style>
<script>
  export default {
    mounted() {
      this.username = '';
      this.password = '';
      this.states = [];
    },
    data() {
      return {
        username: '',
        password: '',
        states: ['',''],
      }
    },
    methods: {
      judgeUsername() {
        if (this.username.trim().length < 2) {
          this.$set(this.states, 0, 'error');
        } else {
          this.$set(this.states, 0, 'success');
        }
      },
      judgePassword() {
        if (this.password.trim().length < 7) {
          this.$set(this.states, 1, 'error');
        } else {
          this.$set(this.states, 1, 'success');
        }
      },
      login() {
        if(this.username == 'sunji' && this.password == '88888888') {
          this.$router.push({path:'/home'});
        } else {
          console.log('error');
        }
      }
    }
  }
</script>
