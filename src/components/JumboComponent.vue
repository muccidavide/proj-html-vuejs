<template>
  <section class="jumbo business_planning py-3">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-xxl-5 text-center text-xxl-start jumbo_col">
          <div class="jumbo_header">
            <h2 class="fw-bold display-3">Business Planning</h2>
            <h2 class="display-3">Digital Technology</h2>
            <h2 class="fw-bold display-3">Modern Solution!</h2>
          </div>
          <div class="jumbo_info m-auto m-xxl-0">
            <p class="info pc_text_tertiary">
              When, while the lovely valley teems with vapour around meand the
              meridian sun strikes the upper surface.
            </p>
            <button class="pc_btn btn_primary me-3">Try It Now</button>
            <button class="pc_btn btn_secondary">Explore More</button>
          </div>
        </div>
        <div class="col-12 col-xxl-7">
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
  .container-fluid {
    animation: slide-in-fwd-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slide-in-fwd-center {
    0% {
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
  .jumbo_col {
    .jumbo_info {
      width: 75%;
      .info {
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }

    button {
      animation: bounce-top 0.9s both;
    }
    @keyframes bounce-top {
      0% {
        transform: translateY(-45px);
        animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        transform: translateY(-24px);
        animation-timing-function: ease-in;
      }
      65% {
        transform: translateY(-12px);
        animation-timing-function: ease-in;
      }
      82% {
        transform: translateY(-6px);
        animation-timing-function: ease-in;
      }
      93% {
        transform: translateY(-4px);
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
        opacity: 1;
      }
    }
  }

  .jumbo_img_box {
    margin: 1rem 0 5rem 2rem;
  }
}
</style>