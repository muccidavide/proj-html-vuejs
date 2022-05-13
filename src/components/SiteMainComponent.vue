<template>
  <main>
    <JumboComponent></JumboComponent>
    <WhatWeDoComponent></WhatWeDoComponent>
    <GrowYourBusinessComponent></GrowYourBusinessComponent>
    <PortfolioComponent></PortfolioComponent>


  </main>
</template>

<script>
import JumboComponent from "@/components/JumboComponent.vue";
import WhatWeDoComponent from "@/components/WhatWeDoComponent.vue";
import GrowYourBusinessComponent from "@/components/GrowYourBusinessComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";

export default {
  name: "SiteMainComponent",
  components: {
    JumboComponent,
    WhatWeDoComponent,
    GrowYourBusinessComponent,
    PortfolioComponent,
  },
  data() {
    return {

    };
  },
  methods: {},
  mounted() {},
};
</script>





<style lang='scss' scoped>

</style>