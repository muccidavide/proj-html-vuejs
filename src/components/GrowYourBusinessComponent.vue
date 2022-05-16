<template>
  <section class="jumbo grow_your_business pc_bg_dark pc_text_primary">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class=" d-none d-xl-block col-xl-7">
          <div class="jumbo_img_box">
            <img src="@/assets/img/men-data.png" alt="employer at office" />
          </div>
        </div>
        <div class="col col-xl-5">
          <div class="jumbo_header">
            <p class="mb-3">Start Your Project</p>
            <h2 class="fw-bold display-3">Grow Your Business</h2>
            <h2 class="display-3">With Our Strategy</h2>
          </div>
          <div class="jumbo_info">
            <p class="info">
              When, while the lovely valley teems with vapour around meand the
              meridian sun strikes the upper surface.of the impenetrable follage
              of my trees, and but a few stray gleams steal into the inner
              sanctuary.
            </p>
            <button class="pc_btn btn_primary me-3">Try It Now</button>
            <button class="pc_btn btn_secondary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GrowYourBusiness",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.jumbo {
  padding: 5rem 10%;
}

.jumbo_img_box {
  margin: auto;
  padding: 5%;

  img {
  background-image: url("@/assets/img/nemoodar.png");
  background-repeat: no-repeat;
  background-size: 90%;
  background-position-y: 2.3rem;
  width: 70%;
  max-width: 500px;
  }
}
</style>