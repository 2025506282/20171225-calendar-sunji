<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-hash="slide1">
        <img src=".././assets/images/img_1.jpg"/>
      </div>
      <div class="swiper-slide" data-hash="slide2">
        <img src=".././assets/images/img_2.jpg"/>
      </div>
      <div class="swiper-slide" data-hash="slide3">
        <img src=".././assets/images/img_3.jpg"/>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<style>
  .swiper-container,.swiper-container img {
    width: 100%;
    height: 201px;
  }
</style>
<script>
  export default {
    mounted() {
      this.slide();
    },
    methods: {
      slide() {
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 5000,//5秒切换一次
          },
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
          }
        });
      }
    }
  }
</script>
