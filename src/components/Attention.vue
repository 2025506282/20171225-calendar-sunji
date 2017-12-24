<template>
  <div class="attention">
    <div class="attentionList">
      <router-link v-bind:to="{path:'/detail',query:{'id':index+1,'name':'follow'}}" class="attentionDetail" v-for="(attention,index) in attentionList" v-bind:key="index">
        <h2 class="title">{{attention.title}}</h2>
        <p>{{attention.detail}}</p>
      </router-link>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    mounted() {
        this.getColumnData();
    },
    data() {
      return {
        attentionList: []
      }
    },
    methods: {
      getColumnData() {
        var that = this;
        this.axios.get('./src/data/follow.data')
          .then(function(res) {
            that.attentionList = res.data;
          }).catch(function(err) {
          console.log(err);
        })
      }
    }
  }
</script>
