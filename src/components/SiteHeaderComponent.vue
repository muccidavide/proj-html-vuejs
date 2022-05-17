<template>
  <header>
    <nav>
      <div class="container-fluid">
        <div class="row row-cols-2 align-items-center justify-content-between">
          <div class="col">
            <LogoSiteComponent></LogoSiteComponent>

          </div>
          <NavbarHeaderComponent :navItems="navItems"></NavbarHeaderComponent>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoSiteComponent from "@/components/LogoSiteComponent.vue";
import NavbarHeaderComponent from "@/components/NavbarHeaderComponent.vue";
export default {
  name: "SiteHeaderComponent",
  components:{
    LogoSiteComponent,
    NavbarHeaderComponent,
  },
  data() {
    return {
      navItems: {
        items: ["Home", "About", "Services", "Blog", "Contact", "Portfoglio"],
        logo: "white-logo-2.png",
        login: "Sing In",
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
header {
  margin-bottom: -1px;
  background-color: $pc-bg-dark;
  color: $pc-text-light-primary;

  nav {
    padding: 1rem 3%;


  }
}
</style>