<template>
  <div class="logout">
    <mt-header title="注册">
      <router-link to="/userInfo" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="logout-header">
      <img src="../assets/img/headimg.png"/>
    </div>
    <div class="logout-content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" v-bind:state="states[0]" v-on:change="judgeUsername()"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" v-bind:state="states[1]" v-on:change="judgePassword()"></mt-field>
      <mt-field label="确认密码" placeholder="请输入密码" type="password" v-bind:state="states[2]" v-model="confirmPassword" v-on:change="judgeConfirmPassword()"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"  v-bind:state="states[3]" v-model="email"  v-on:change="judgeEmail()"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"  v-bind:state="states[4]" v-model="phone" v-on:change="judgePhone()"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date"  v-bind:state="states[5]" v-model="birthday" v-on:change="judgeBirthday()"></mt-field>
      <mt-field label="验证码"  v-bind:state="states[6]" v-model="captcha" v-on:change="judgeCaptcha()">
        <img src="../assets/img/zan.png" height="45px" width="100px">
      </mt-field>
      <mt-button size="large" type="primary">注册</mt-button>
    </div>
  </div>
</template>
<style scoped>
  .logout-header {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        birthday: '',
        captcha: '',
        states: ['','','','','',''],
        isSuccess: false
      }
    },
    methods: {
      judgeUsername() {
        if(this.username.trim().length < 2) {
          this.$set(this.states,0,'error');
        } else {
          this.$set(this.states,0,'success');
        }
      },
      judgePassword() {
        if(this.password.trim().length < 7) {
          this.$set(this.states,1,'error');
        } else {
          this.$set(this.states,1,'success');
        }
      },
      judgeConfirmPassword() {
        if(this.confirmPassword.trim()!=this.password.trim()) {
          this.$set(this.states,2,'error');
        } else {
          this.$set(this.states,2,'success');
        }
      },
      judgeEmail() {
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        let isEmail = reg.test(this.email);
        if(!isEmail) {
          this.$set(this.states,3,'error');
        } else {
          this.$set(this.states,3,'success');
        }
      },
      judgePhone() {
        let reg = /^(([0+]d{2,3}-)?(0d{2,3})-)(d{7,8})(-(d{3,}))?$/;
        let isPhone = reg.test(this.phone);
        if(!isPhone) {
          this.$set(this.states,4,'error');
        } else {
          this.$set(this.states,4,'success');
        }
      },
      judgeBirthday() {
        console.log(this.birthday);
      },
      judgeCaptcha() {
      }
    }
  }
</script>
