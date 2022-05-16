<template>
  <main>
    <JumboComponent></JumboComponent>
    <WhatWeDoComponent></WhatWeDoComponent>
    <GrowYourBusinessComponent></GrowYourBusinessComponent>
    <PortfolioComponent></PortfolioComponent>
    <PricingComponent></PricingComponent>
    <LatestPostsComponent></LatestPostsComponent>
    <WhatPeopleSayComponent></WhatPeopleSayComponent>
  </main>
</template>

<script>
import JumboComponent from "@/components/JumboComponent.vue";
import WhatWeDoComponent from "@/components/WhatWeDoComponent.vue";
import GrowYourBusinessComponent from "@/components/GrowYourBusinessComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
import PricingComponent from "@/components/PricingComponent.vue";
import WhatPeopleSayComponent from "@/components/WhatPeopleSayComponent.vue";
import LatestPostsComponent from "@/components/LatestPostsComponent.vue";

export default {
  name: "SiteMainComponent",
  components: {
    JumboComponent,
    WhatWeDoComponent,
    GrowYourBusinessComponent,
    PortfolioComponent,
    PricingComponent,
    WhatPeopleSayComponent,
    LatestPostsComponent,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>





<style lang='scss' scoped>
</style>