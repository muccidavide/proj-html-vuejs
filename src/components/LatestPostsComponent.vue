<template>
  <section class="latest_posts">
    <div class="container-fluid ">
      <div class="section_header text-center">
        <p class="pc_text_alert">Blog</p>
        <h2 class="display-4"><span class="fw-bold">Latest</span> Posts</h2>
        <p>When, while the lovely valley teems with vapour around meand the, and the meridian su s...</p>
      </div>
    </div>
    <div class="posts">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="amazon">
            <div class="info">
              <span
                >April 21,2019
                <font-awesome-icon icon="fa-solid fa-circle" class="mx-2" size="2xs" /> by
                Paul</span
              >
              <h5 class="my-3">Amazon gets CCI to acquire 49% stake in</h5>
              <p>
                When, while the lovely valley teems with vapour around meand
                the...
              </p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="corporation">
            <span
              >April 21,2019
              <font-awesome-icon icon="fa-solid fa-circle" class="mx-2" size="2xs" /> by
              Paul</span
            >
            <h5 class="my-3 py-3">Amazon gets CCI to acquire 49% stake in</h5>
            <p>
              When, while the lovely valley teems with vapour around meand
              the...
            </p>
            <button class="pc_btn">
                Read More
            </button>
          </div>
        </div>
        <div class="col-3">
          <div class="london">
                          <span
              >April 21,2019
              <font-awesome-icon icon="fa-solid fa-circle" class="mx-2" size="2xs" /> by
              Paul</span
            >
            <h5 class="my-3 py-3">Amazon gets CCI to acquire 49% stake in</h5>
            <p>
              When, while the lovely valley teems with vapour around meand
              the...
            </p>
                        <button class="pc_btn">
                Read More
            </button>
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
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.row {
  color: white;
  margin: 3rem;
  .amazon {
    position: relative;
    margin: 2rem;
    border-radius: 20px;
    height: 350px;
    background-image: url("@/assets/img/amazon.jpg");
    background-size: cover;
    max-width: 100%;
    background-repeat: no-repeat;
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
  .corporation,
  .london {
      margin: 0 1rem;
          border-radius: 20px;
      min-height: 350px;
      padding: 2rem;
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
}
</style>