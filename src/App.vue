<template>
  <div id="app">
    <loading v-show="loadingShow"></loading>
    <nav-header v-show="headerShow"></nav-header>
    <!--<keep-alive>-->
      <router-view class="router-view"></router-view>
    <!--</keep-alive>-->
    <my-footer v-show="footerShow"></my-footer>
  </div>
</template>
<style>
</style>
<script>
  import NavHeader from './components/NavView.vue'
  import MyFooter from './components/FooterView.vue'
  import loading from './components/Loading.vue'
  //import FilterTime from './filters/filterTime.js'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    // filters: {
    //   filterTime: FilterTime
    // },
    computed:mapGetters([
        'headerShow',
        'footerShow',
        'loadingShow'
    ]),
    data() {
      return {
        date: new Date()
      }
    },
    watch: {
      $route(to) {
        var path = this.$route.path;
        this.headerChange(path);
        this.footerChange(path);
      }
    },
    components: {
      NavHeader,MyFooter,loading
    },
    methods: {
      headerChange(path) {
        if(path.indexOf('userInfo')!==-1||path.indexOf('login')!==-1||path.indexOf('logout')!==-1||path.indexOf('detail')!==-1) {
          this.$store.dispatch('hideHeader');
        } else {
          this.$store.dispatch('showHeader');
        }
      },
      footerChange(path) {
        if(path.indexOf('login')!==-1||path.indexOf('logout')!==-1) {
          this.$store.dispatch('hideFooter');
        } else {
          this.$store.dispatch('showFooter');
        }
      }
    }
  }
</script>
