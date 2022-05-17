<template>
  <section class="jumbo business_planning py-3">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col col-lg-5 text-center text-lg-start jumbo_col">
          <div class="jumbo_header">
            <h2 class="fw-bold display-3">Business Planning</h2>
            <h2 class="display-3">Digital Technology</h2>
            <h2 class="fw-bold display-3">Modern Solution!</h2>
          </div>
          <div class="jumbo_info m-auto m-lg-0">
            <p class="info pc_text_tertiary">
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
  padding: 0 2rem;
  .jumbo_col {
    .jumbo_info {
      width: 75%;
      .info {
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }

  }
      .jumbo_img_box{
      margin: 1rem 0 5rem 2rem;
    }
}
</style>