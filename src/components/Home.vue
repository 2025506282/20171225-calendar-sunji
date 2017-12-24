<template>
  <div class="home">
    <slide></slide>
    <div class="articleList">
      <router-link v-bind:to="{path:'detail',query:{id:article.id,'name':'index'}}" class="articleDetail" v-for="(article,index) in articleList" v-bind:key="index">
        <h2 class="title">{{article.title}}</h2>
        <p>{{article.detail}}</p>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
  .articleList {
    margin-bottom: 4.9em;
  }
  .articleDetail {
    color: #000000;
    text-decoration: none;
  }
  .articleDetail:hover {
    text-decoration: underline;
  }
  .articleDetail h2 {
    margin-top: 10px;
    padding:0 10px;
  }
  .articleDetail p {
    padding:0 10px;
    text-indent: 21px;
  }
</style>
<script>
  import axios from 'axios'
  import slide from '../components/Slide.vue'
  export default {
    components: {
      slide
    },
    data() {
      return {
        articleList: {}
      }
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      getArticles() {
        var that = this;
        axios.get("./src/data/index.data")
          .then(function(res){
            that.articleList = res.data;
          }).catch(function(err){
            console.log(err);
        })
      }
    }
  }
</script>
