<template>
  <div class="column">
    <div class="columnList">
      <router-link v-bind:to="{path:'/detail',query:{'id':index+1,'name':'article'}}" class="columnDetail" v-for="(column,index) in columnList" v-bind:key="index">
        <h2 class="title">{{column.title}}</h2>
        <p>{{column.content}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.getColumnData();
    },
    data() {
      return {
        columnList: []
      }
    },
    methods: {
      getColumnData() {
        var that = this;
        this.axios.get('./src/data/article.data')
          .then(function(res) {
            that.columnList = res.data;
          }).catch(function(err) {
            console.log(err);
        })
      }
    }
  }
</script>
