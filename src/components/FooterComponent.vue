<template>
  <footer>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-xl-2 services align-items-center">
        <div class="col text-light">
          <h2 class="display-5 fw-bold ">We Offer Awesome Services</h2>
          <p>
            When, while the lovely valley teems with vapour around meand the
            meridian sun strikes the upper surface.
          </p>
        </div>
        <div class="col d-none d-lg-flex">
          <div class="subscribe_bar w-100 d-flex align-items-center">
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
      <FooterNavComponent
        :logoInfo="logoInfo"
        :navFooterItems="navFooterItems"
      ></FooterNavComponent>
    </div>
    <div class="footer_copyrights pc_text_secondary align-items-center">
      <div class="container-fluid">
        <div class="row mx-3">
          <div class="col d-flex align-items-center">
            <small>&#169; 2022 Boolean Srl. All Right Reserved</small>
          </div>
          <div class="col">
            <div
              class="
                socials
                text-end
                d-flex
                align-items-center
                justify-content-end
              "
            >
              <font-awesome-icon
                class="social_icon"
                size="lg"
                icon="fa-brands fa-instagram"
              />
              <font-awesome-icon
                class="social_icon"
                size="lg"
                icon="fa-brands fa-linkedin-in"
              />
              <font-awesome-icon
                class="social_icon"
                size="lg"
                icon="fa-brands fa-facebook-f"
              />
              <font-awesome-icon
                class="social_icon"
                size="lg"
                icon="fa-brands fa-twitter"
              />

              <div>
                <font-awesome-icon
                  class="arrow_up"
                  icon="fa-solid fa-arrow-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterNavComponent from "@/components/FooterNavComponent.vue";
export default {
  name: "FooterComponent",
  components: {
    FooterNavComponent,
  },
  data() {
    return {
      logoInfo:
        "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upperc surface.",
      navFooterItems: [
        { title: "Quick Links", links: ["Services", "Contact", "Blog"] },
        {
          title: "Resources",
          links: [
            "Art Design",
            "Computer",
            "IT News",
            "Networking",
            "Web Security",
          ],
        },
        {
          title: "Contact Us",
          adress:
            "Patricia C. amadee 4401 Waldeck StreetGrapevine Nashville, Tx 76051",

          phone: "+99(0)101 0000 888",
          email: "Info@mydomain.coms",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
footer {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 150px,
    $pc_bg_dark 150px
  );
  p {
    font-size: 1rem;
  }
  .services {
    margin: 5rem 2rem;
    padding: 6rem 4rem;
    border-radius: 50px;
    background: rgb(182, 36, 110);
    background: linear-gradient(
      121deg,
      rgba(182, 36, 110, 1) 0%,
      rgba(249, 99, 107, 1) 100%
    );

    .subscribe_bar {
            border-radius: 50px;
            background-color: white;
            padding: 0rem;
            margin-top:1rem ;
            button{
              margin: 0.4rem;
            }
      .subscribe_input {
        height: 3rem;
        padding: 0rem 1rem;
        border-radius: 50px;
        border: none;
      }
    }
  }

  .footer_copyrights {
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.229);
    .socials {
      position: relative;

      .social_icon {
        padding: 2rem 1.6rem;
      }
      .arrow_up {
        color: black;
        background-color: white;
        border-radius: 50%;
        padding: 0.6rem;
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        right: 0%;
        transform: translate(50%, -50%);
      }
    }
  }
}
</style>