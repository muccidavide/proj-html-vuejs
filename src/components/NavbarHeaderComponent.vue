<template>
  <div class="col d-flex align-items-center justify-content-end">
    <div>
      <ul class="d-lg-flex d-none">
        <li
          class="nav_item px-3"
          v-for="item in navItems.items"
          :key="'item_key:' + item"
        >
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>

    <div class="ps-3 sign_up">
      <button class="pc_btn btn_secondary">
        {{ navItems.login }}
      </button>
    </div>
    <div class="nav_item bars d-lg-none">
      <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarHeaderComponent",
  props: {
    navItems: Object,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.nav_item a {
  color: $pc-text-light-primary;
  font-size: 1rem;
}
.nav_item a:hover {
  color: $pc-text-alert;
}

.nav_item:hover{
animation: slide-top 0.2s linear both;

}


  .nav_item,button {
    animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }




@keyframes slide-top {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
  0%{
 
    transform: translateY(0);
  
  }
}

</style>