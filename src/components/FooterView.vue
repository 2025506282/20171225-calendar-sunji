<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/home" class="router-link home-logo"></router-link>
      </li>
      <li>
        <router-link to="/edit"  class="router-link write"></router-link>
      </li>
      <li>
        <router-link to="/userInfo"  class="router-link myself-logo"></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style>
  .footer {
    position: fixed;
    bottom: 0;
    height: 4.9em;
    line-height: 4.9em;
    text-align: center;
    background-color: #ffffff;
  }
  .footer ul li {
    list-style: none;
    float: left;
    width: 33.33%;
    text-align: center;
  }
  .footer ul li .router-link {
    text-decoration: none;
    display: block;
    width: 33.33%;
    margin: 0.4em auto;
    height: 4.1em;
    text-align: center;
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
  }
  .footer ul li .home-logo {
    background-size: 60%;
    background-image: url("../assets/img/home1.png");
  }
  .footer ul li .home-logo:hover {
    background-size: 60%;
    background-image: url("../assets/img/home.png");
  }
  .footer ul li .myself-logo {
    background-image: url("../assets/img/my.png");
  }
  .footer ul li .myself-logo:hover {
    background-image: url("../assets/img/my1.png");
  }
  .footer ul li .write {
    background-image: url("../assets/img/write.png");
  }
</style>
