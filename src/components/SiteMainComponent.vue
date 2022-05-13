<template>
  <main>
    <JumboComponent></JumboComponent>
    <WhatWeDoComponent></WhatWeDoComponent>
    <GrowYourBusinessComponent></GrowYourBusinessComponent>

  </main>
</template>

<script>
import JumboComponent from "@/components/JumboComponent.vue";
import WhatWeDoComponent from "@/components/WhatWeDoComponent.vue";
import GrowYourBusinessComponent from "@/components/GrowYourBusinessComponent.vue";

export default {
  name: "SiteMainComponent",
  components: {
    JumboComponent,
    WhatWeDoComponent,
    GrowYourBusinessComponent,
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