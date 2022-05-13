<template>
  <div id="app">
    <SiteHeaderComponent></SiteHeaderComponent>
    <SiteMainComponent></SiteMainComponent>
  </div>
</template>

<script>
import SiteHeaderComponent from "@/components/SiteHeaderComponent.vue";
import SiteMainComponent from '@/components/SiteMainComponent.vue';



export default {
  name: 'App',
  components: {
    SiteHeaderComponent,
    SiteMainComponent,

  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';


</style>
