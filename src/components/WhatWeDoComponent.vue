<template>
  <section class="what_we_do text-center">
    <div class="container-fluid">
      <div class="section_header text-center">
        <p class="pc_text_alert">Our Services</p>
        <h2 class="display-5"><span class="fw-bold">What</span> We Do</h2>
        <p>When, while the lovely valley teems with vapour around meand the</p>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-4 px-3">
        <div
          class="pc_card col"
          v-for="(card, index) in whatWeDo"
          :key="'whatWeDo:' + index"
        >
          <img
            :src="require('@/assets/img/' + card.img)"
            :alt="'display' + card.title"
            srcset=""
          />
          <div class="card_details">
            <h3 class="fw-bold">{{ card.title }}</h3>
            <p>{{ card.details }}</p>
          </div>
        </div>
      </div>
      <button class="pc_btn btn_primary me-3">View All Services</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatWeDoComponent",
  data() {
    return {
      whatWeDo: [
        {
          title: "Data Analysis",
          details:
            "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
          img: "Group-247.png",
        },
        {
          title: "SEO Optimization",
          details:
            "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
          img: "Group-567.png",
        },
        {
          title: "Security Data",
          details:
            "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
          img: "Group-538.png",
        },
        {
          title: "Branding Strategy",
          details:
            "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
          img: "Group-566.png",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.what_we_do {
  min-height: 100vh;
  margin: 5rem 3rem;
  .pc_card {
padding: 5.5rem 4rem 3rem;
    position: relative;
    margin: 10rem 0;

    img {
      position: absolute;
      aspect-ratio: 1/1;
      width: 150px;
      top: 0%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

    h3 {
      margin: 2rem 0;
    }
  }
  .pc_btn{
    box-shadow: 0 0 25px 20px #f8626c37;
  }

  .pc_card:hover{
    color: white;
    background: linear-gradient(0deg, rgb(3, 3, 49) 20%, rgb(24, 50, 112) 100%,white 0%,);
    border-radius:20px ;
    

  }
}
</style>