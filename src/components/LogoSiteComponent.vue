<template>
  <div class="logo_site">
    <img src="@/assets/img/white-logo-2.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "LogoSiteComponent",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
  .logo_site {
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

    @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>