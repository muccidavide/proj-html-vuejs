<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col text-light">
          <h2>We Offer Awesome Services</h2>
          <p>
            When, while the lovely valley teems with vapour around meand the
            meridian sun strikes the upper surface.
          </p>
        </div>
        <div class="col">
          <div class="subscribe_bar d-flex align-items-center">
            <label for="" class="form-label"></label>
            <input
              type="text"
              class="form-control subscribe_input"
              name="subscribe"
              id="subscribe"
              placeholder="Enter Your Email Adress"
            />
            
            <button class="pc_btn btn_secondary">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="footer_nav">
          <div class="row row-cols-4">
              <div class="col">
                  
              </div>
              
          </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
footer {
  .row {
    margin: 5rem;
    padding: 4rem;
    border-radius: 50px;
    background: rgb(182, 36, 110);
    background: linear-gradient(
      121deg,
      rgba(182, 36, 110, 1) 0%,
      rgba(249, 99, 107, 1) 100%
    );
    .subscribe_input{
        height: 3rem;
        padding: 0rem 1rem;
        border-radius: 50px;
    }
  }
}
</style>