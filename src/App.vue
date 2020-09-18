<template>
  <div id="app">
    <transition :name="transitionName" :mode="this.$router.back ? 'out-in' : 'in-out' ">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  created() {
    const counterMap = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCounterMap', counterMap);
  },
  data() {
    return {
      transitionName: 'left',
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === 'classify' && from.name === 'search') {
        this.$router.back = true;
      }
      if (this.$router.back) {
        this.transitionName = 'right';
      } else {
        this.transitionName = 'left';
      }
      this.$router.back = false;
    },
  },
};

</script>

<style lang="less">
  .view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transition: transform .3s linear;
  }
  .left-enter {
    transform: translate(100%, 0);
  }
  .right-leave-to {
    transform: translate(100%, 0);
  }
</style>
