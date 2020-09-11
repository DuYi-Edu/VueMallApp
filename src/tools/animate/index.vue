<template>
  <div class="item"
  v-if="exist"
  :style="{
    width: `${width}px`,
    height: `${height}px`,
    opacity,
    transform: `translate(${moveX}px, ${moveY}px) scale(${sx}, ${sy})`
  }"
  >
    <img :src="src">
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .item {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transition: all .7s;
    transform-origin: 0% 0%;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
</style>
