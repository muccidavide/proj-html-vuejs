<template>
  <div class="footer_nav pc_text_secondary">
    <div
      class="
        row row-cols-1
        text-center
        m-auto
        row-cols-lg-2 row-cols-xl-4
        text_primary
        justify-content-center
      "
    >
      <div class="col logo_link">
        <div class="logo">
          <LogoSiteComponent></LogoSiteComponent>
        </div>

        <div class="logo_info">
          <p>
            {{ logoInfo }}
          </p>
        </div>
      </div>
      <div
        v-for="(navItem, index) in navFooterItems"
        :key="index"
        class="col nav_col"
      >
        <div v-if="index < 2">
          <h4 class="fw-bold">
            <a href="#">{{ navItem.title }}</a>
          </h4>
          <ul>
            <li v-for="(link, i) in navItem.links" :key="i">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="col contact_us" v-if="index === 2">
          <h4 class="fw-bold">
            <a href="#">Contact Us</a>
          </h4>
          <ul>
            <li>
              <address>
                <span>Address: </span><small>{{ navItem.adress }}</small>
              </address>
            </li>

            <li><span>Phone:</span> {{ navItem.phone }}</li>
            <li><span>Email:</span> {{ navItem.email }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSiteComponent from "@/components/LogoSiteComponent.vue";
export default {
  name: "FooterNavComponent",
  components: {
    LogoSiteComponent,
  },
  props: {
    logoInfo: String,
    navFooterItems: Array,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.footer_nav {


  .logo {
    margin-bottom: 2rem;
  }
  .logo_info {
    width: 50%;
    margin: 1rem auto;
  }

  a {
    display: inline-block;
  }
  a:hover {
    color: $pc-text-alert;
  }

  a,
  li,
  p {
    color: $pc-text-light-secondary;
    font-size: 1rem;
    margin: 0.3rem;
  }
  address {
    margin: 2rem auto;
    max-width: 80%;
  }

  h4 > a,
  span {
    color: $pc-text-light-primary;
  }

  h4 > a {
    font-size: 1.5rem;
  }
}
</style>