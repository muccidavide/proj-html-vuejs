<template>
  <div class="what_people_say">
    <div class="container-fluid">
      <div class="section_header text-center">
        <p class="pc_text_alert">Testimonials</p>
        <h2 class="display-4"><span class="fw-bold">What</span> Peolple Say</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upperc surface.
        </p>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="testimonial_card text-center">
            <div class="profile_img">
              <img
                src="@/assets/img/testimonial_1.png"
                alt="profile img testimonial"
              />
            </div>
            <div class="rating my-3">
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-regular fa-star" />
              <font-awesome-icon icon="fa-regular fa-star" />
            </div>
            <div class="details">
              <p>
                When, while the lovely valley teems with vapor around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a thousand
              </p>
              <p class="fw-bold">Michkel Anegl</p>
              <p>Marketing Managment</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="testimonial_card text-center">
            <div class="profile_img">
              <img
                src="@/assets/img/testimonial_2.png"
                alt="profile img testimonial"
              />
            </div>
            <div class="rating my-3">
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-regular fa-star" />
              <font-awesome-icon icon="fa-regular fa-star" />
            </div>
            <div class="details">
              <p>
                When, while the lovely valley teems with vapor around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a thousand
              </p>
              <p class="fw-bold">Michkel Anegl</p>
              <p>Marketing Managment</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="testimonial_card text-center">
            <div class="profile_img">
              <img
                src="@/assets/img/testimonial_3.png"
                alt="profile img testimonial"
              />
            </div>
            <div class="rating my-3">
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-regular fa-star" />
              <font-awesome-icon icon="fa-regular fa-star" />
            </div>
            <div class="details">
              <p>
                When, while the lovely valley teems with vapor around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a thousand
              </p>
              <p class="fw-bold">Michkel Anegl</p>
              <p>Marketing Managment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="logo_box">
            <img src="@/assets/img/client-1-1.png" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="logo_box">
            <img src="@/assets/img/clienty-2.png" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="logo_box">
            <img src="@/assets/img/clienty-3.png" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="logo_box">
            <img src="@/assets/img/clienty-4.png" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="logo_box">
            <img src="@/assets/img/client-5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatPeopleSayComponent",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.testimonial_card {
  width: 80%;
  margin: 8rem auto;
  .profile_img {
    margin: auto;
    max-width: 130px;
    img {
      border-radius: 50%;
      border: 5px solid #b6256f;
    }
  }

  .rating {
    color: $pc_text_alert;
  }
}
</style>