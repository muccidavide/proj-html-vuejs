<template>
  <section class="latest_posts">
    <div class="container-fluid">
      <div class="section_header text-center">
        <p class="pc_text_alert">Blog</p>
        <h2 class="display-4"><span class="fw-bold">Latest</span> Posts</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the, and
          the meridian su s...
        </p>
      </div>

      <div class="posts">
        <div class="row align-items-center">
          <div class="col-xl-1 col-xxl-6">
            <div class="amazon" @click="showMeMore">
              <div class="info">
                <span
                  >April 21,2019
                  <font-awesome-icon
                    icon="fa-solid fa-circle"
                    class="mx-2"
                    size="2xs"
                  />
                  by Paul</span
                >
                <h5 class="my-3">Amazon gets CCI to acquire 49% stake in</h5>
                <p>
                  When, while the lovely valley teems with vapour around meand
                  the, and the meridian su s...
                </p>
              </div>
              <div  v-if="active" class="additional_info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur similique consequuntur quidem, quod facilis
                  praesentium explicabo illum fugiat impedit accusamus fugit
                  molestias ab eum excepturi inventore! Optio dolorem porro
                  repudiandae?
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-xxl-3">
            <div class="corporation">
              <span
                >April 21,2019
                <font-awesome-icon
                  icon="fa-solid fa-circle"
                  class="mx-2"
                  size="2xs"
                />
                by Paul</span
              >
              <h5 class="my-3 py-3">
                Clearing Corporations get SEBI nod to invest in overnight funds
              </h5>
              <p>
                When, while the lovely valley teems with vapour around meand
                the, and the meridian su s...
              </p>
              <button class="pc_btn">Read More</button>
            </div>
          </div>
          <div class="col-xl-2 col-xxl-3">
            <div class="london">
              <span
                >April 21,2019
                <font-awesome-icon
                  icon="fa-solid fa-circle"
                  class="mx-2"
                  size="2xs"
                />
                by Paul</span
              >
              <h5 class="my-3 py-3">
                Shabnam Dhillion, wife of RSSB chief gurinder Dhillon, passes
                away in London
              </h5>
              <p>
                When, while the lovely valley teems with vapour around meand
                the, and the meridian su s...
              </p>
              <button class="pc_btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LatestPostsComponent",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    showMeMore() {
      if (this.active) {
        this.active = false;
      } else {
        this.active = true;
      }
    },
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.latest_posts {
  margin-top: 8rem;
  .row {
    color: white;
    margin: 6rem 0 8rem 0;

    .amazon {
      position: relative;
      margin: 2rem 0.5rem;
      border-radius: 20px;
      height: 400px;
      background-image: url("@/assets/img/amazon.jpg");
      background-size: cover;
      max-width: 100%;
      background-repeat: no-repeat;
      .additional_info {
        border: 1px solid rgba(167, 167, 167, 0.347);
        border-radius: 20px;
        box-shadow: 0 0 20px lightgrey;
        background-color: rgb(255, 255, 255);
        color: $pc-text-dark;
        position: absolute;
        padding: 2rem;
        bottom: -160px;
        left: 0;
      }
    }
    .amazon::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 20px;
    }
    h5 {
      font-size: 1.3rem;
      font-weight: bold;
    }
    p,
    span,
    button {
      font-size: 1rem;
    }
    .corporation,
    .london {
      margin: 2rem 0.5rem;
      border-radius: 20px;
      height: 400px;
      padding: 3.5rem;
      background: rgb(3, 3, 49);
      background: linear-gradient(
        121deg,
        rgba(3, 3, 49, 1) 0%,
        rgba(24, 50, 112, 1) 100%
      );
    }
    .info {
      position: absolute;
      bottom: 1rem;
      left: 2rem;
    }
    button {
      margin: 1rem 0;
      padding: 0.5rem 2rem;
    }
  }
}

@media only screen and (max-width: 1700px) {
  .col-xxl-6 {
    width: 100%;
    padding: 0 2rem;
  }
  .col-xxl-3 {
    padding: 0 2rem;
    width: 50%;
  }
}

@media only screen and (max-width: 1024px) {
  .col-xxl-6 {
    width: 100%;
    padding: 0 2rem;
  }
  .col-xxl-3 {
    padding: 0 2rem;
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .col-xl-1 {
    padding: 0;
    margin: 0;
  }

  .corporation p,
  .london p {
    display: none;
  }
}
</style>