<template>
  <header>
    <nav>
      <div class="container-fluid">
        <div class="row row-cols-2 align-items-center justify-content-between">
          <div class="col">
            <div class="logo_site">
              <img src="@/assets/img/white-logo-2.png" alt="" />
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end">
            <ul class="d-flex">
              <li
                class="nav_item px-3"
                v-for="item in navItems.items"
                :key="'item_key:' + item"
              >
                <a href="#">{{ item }}</a>
              </li>
            </ul>
            <div class="ps-3 sign_up">
              <button class="pc_btn btn_secondary">
                {{ navItems.login }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
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
  background-color: $pc-bg-dark;
  color: $pc-text-light-primary;

  nav {
      padding: 1rem 0;
    .nav_item a {
      color: $pc-text-light-primary;
    }
    .nav_item a:hover {
      color: $pc-text-alert;
    }
    .sign_up{
        .pc_btn{
            padding: 0.4rem 1.5rem;
            border-radius: 15px;
            background-color: $pc-btn-secondary;
            background: linear-gradient(90deg,  $pc-btn-secondary 0%, $pc-light-tertiary 100%);;
            color: $pc-text-light-primary;
        }
    }
  }
}
</style>