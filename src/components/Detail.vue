<template>
  <div class="detail">
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" v-on:click="backUrl">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="detail-content">
      <h2>
        <span>{{id}} 、</span>
        <span>{{detailResult.title}}</span>
      </h2>
      <p v-html="detailResult.detail?detailResult.detail:detailResult.content">
      </p>
    </div>
  </div>
</template>
<style>
  .detail {
    width: 100%;
  }
  .detail-content h2 {
    margin-top: 50px;
    padding: 10px;
  }
  .detail-content p {
    font-size: 1.6rem;
    padding: 10px;
  }
</style>
<script>
  export default {
    mounted() {
      this.id = this.$route.query.id;
      this.name = this.$route.query.name;
      this.getData();
    },
    data() {
      return {
        id: '',
        name: '',
        detailResult: {}
      }
    },
    methods: {
      backUrl() {
        window.history.go(-1)
      },
      getData() {
        var that = this;
        var url = "./src/data/" + this.name + ".data";
        this.axios.get(url)
          .then(function(res){
            for(var index in res.data) {
              if(res.data[index].id == that.id) {
                that.detailResult = res.data[index];
              } else {
                that.detailResult = res.data[that.id - 1];
              }
            }
          }).catch(function(err){
            console.log(err);
        })
      }
    }
  }

</script>
