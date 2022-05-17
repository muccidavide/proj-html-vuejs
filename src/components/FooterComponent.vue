<template>
  <footer>
    <div class="container-fluid">
      <div class="row services align-items-center">
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
      <div class="footer_nav pc_text_secondary">
        <div class="row row-cols-4 text_primary">
          <div class="col logo_link">
            <div class="logo">
              <LogoSiteComponent></LogoSiteComponent>
            </div>

            <div class="logo_info w-75">
              <p>
                When, while the lovely valley teems with vapour around meand the
                meridian sun strikes the upperc surface.
              </p>
            </div>
          </div>
          <div class="col quick_links">
            <h4 class="fw-bold">
              <a href="#">Quick Links</a>
            </h4>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div class="col resources">
            <h4 class="fw-bold">
              <a href="#">Resources</a>
            </h4>
            <ul>
              <li>
                <a href="#">Art Design</a>
              </li>
              <li>
                <a href="#">Computer</a>
              </li>
              <li>
                <a href="#">IT News</a>
              </li>
              <li>
                <a href="#">Networking</a>
              </li>
              <li>
                <a href="#">Web Security</a>
              </li>
            </ul>
          </div>

          <div class="col contact_us">
            <h4 class="fw-bold">
              <a href="#">Contact Us</a>
            </h4>
            <address>
              <span>Address:</span> Patricia C. amadee 4401 Waldeck Street
              Grapevine Nashville, Tx 76051
            </address>
            <p><span>Phone:</span> +99(0)101 0000 888</p>
            <p><span>Email:</span> Info@mydomain.com</p>
          </div>
        </div>
      </div>
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
import LogoSiteComponent from "@/components/LogoSiteComponent.vue";
export default {
  name: "FooterComponent",
  components: {
    LogoSiteComponent,
  },
  data() {
    return {};
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
  .services {
    margin: 5rem;
    padding: 4rem;
    border-radius: 50px;
    background: rgb(182, 36, 110);
    background: linear-gradient(
      121deg,
      rgba(182, 36, 110, 1) 0%,
      rgba(249, 99, 107, 1) 100%
    );

    .subscribe_input {
      height: 3rem;
      padding: 0rem 1rem;
      border-radius: 50px;
    }
  }
  .footer_nav {
    .logo{
      margin-bottom: 2rem ;
    }


    a {
      display: inline-block;
    }
    a:hover {
      color: $pc-text-alert;
    }

    a,
    p {
      color: $pc-text-light-secondary;
      font-size: 1rem;
      margin: 0.5rem 0;
    }
    address {
      margin: 2rem 0;
    }

    h4 > a,
    span {
      color: white;
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