<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
    const counterMap = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCounterMap', counterMap);
  },
};

</script>

<style lang="less">

</style>
