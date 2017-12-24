<template>
  <div class="loading">
    <mt-spinner type="snake" color="#26a2ff"></mt-spinner>
  </div>
</template>
<style>
  .loading {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
