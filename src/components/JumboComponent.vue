<template>
  <section class="jumbo business_planning py-3">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-5">
          <div class="jumbo_header">
            <h2 class="fw-bold display-3">Business Planning</h2>
            <h2 class="display-3">Digital Technology</h2>
            <h2 class="fw-bold display-3">Modern Solution!</h2>
          </div>
          <div class="jumbo_info">
            <p class="info">
              When, while the lovely valley teems with vapour around meand the
              meridian sun strikes the upper surface.
            </p>
            <button class="pc_btn btn_primary me-3">Try It Now</button>
            <button class="pc_btn btn_secondary">Explore More</button>
          </div>
        </div>
        <div class="col-7">
          <div class="jumbo_img_box">
            <img src="@/assets/img/header.png" alt="employer at office" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "JumboComponent",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.jumbo {
  color: $pc-text-light-primary;
  background-color: $pc-bg-dark;
  .col-5 {
    .jumbo_info {
      max-width: 75%;
      .info {
        margin-bottom: 3rem;
      }
    }
  }
}
</style>