<template>
  <div id="app">
    <SiteHeaderComponent></SiteHeaderComponent>
    <SiteMainComponent></SiteMainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import SiteHeaderComponent from "@/components/SiteHeaderComponent.vue";
import SiteMainComponent from "@/components/SiteMainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    SiteHeaderComponent,
    SiteMainComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
