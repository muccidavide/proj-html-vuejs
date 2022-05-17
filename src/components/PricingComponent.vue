<template>
  <section class="pricing">
    <div class="container-fluid">
      <div class="section_header text-center pc_text_primary w-50 m-auto">
        <p class="pc_text_alert">Price List</p>
        <h2 class="display-4"><span class="fw-bold">Our</span> Pricing</h2>
        <p class="pc_text_secondary">When, while the lovely valley teems with vapour around meand the meridian sun strikesupperface</p>
      </div>
      <div class="prices_list row row-cols-1 row-cols-lg-2 row-cols-xl-3">
        <div
          class="text-center col"
          v-for="(card, index) in pricesCard"
          :key="index"
        >
          <div
            class="card_price p-relative"
            :class="index === 1 ? 'central' : ''"
          >
            <div class="section_header">
              <h3 class="fw-bold">{{ card.title }}</h3>
              <h5>{{ card.subTitle }}</h5>
              <div class="price">
                <span class="price_number position-relative" data-title="40"
                  >{{ card.price }}
                  <span class="dollar_icon text-start position-absolute">$</span
                  ><br />
                </span>

                <small class="month">Per Month</small>
              </div>
            </div>
            <div class="details">
              <ul>
                <li>
                  Creative: <span>{{ card.creative }}</span>
                </li>
                <li>
                  Vibrant: <span>{{ card.vibrant }}</span>
                </li>
                <li>
                  Eye: <span>{{ card.eye }}</span>
                </li>
                <li>
                  Extreme: <span>{{ card.extreme }}</span>
                </li>
                <li>
                  Exceptional: <span>{{ card.exceptional }}</span>
                </li>
              </ul>
            </div>
            <div class="order_now">
              <button class="pc_btn btn_primary me-3">
                Order Now
                <font-awesome-icon
                  class="rounded-circle arrow_icon"
                  icon="fas fa-arrow-right rounded-circle circle"
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingComponent",
  data() {
    return {
      pricesCard: [
        {
          title: "Designing",
          subTitle: "Process",
          price: "40",
          creative: "Design Enabled",
          vibrant: "Color Usage",
          eye: "Catching Design",
          extreme: "Typography",
          exceptional: "Design",
        },
        {
          title: "Developing",
          subTitle: "Process",
          price: "60",
          creative: "Design Enabled",
          vibrant: "Color Usage",
          eye: "Catching Design",
          extreme: "Typography",
          exceptional: "Design",
        },
        {
          title: "Supporting",
          subTitle: "Clients",
          price: "80",
          creative: "Design Enabled",
          vibrant: "Color Usage",
          eye: "Catching Design",
          extreme: "Typography",
          exceptional: "Design",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.pricing {
  background: linear-gradient($pc-bg-dark 500px, white 500px 100%);
  padding: 3rem 0;

  .card_price {
    padding: 3rem;
    margin: 3rem auto;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0px 0px 2px 2px hsl(0deg 0% 94%);
    max-width: 95%;

    .price_number {
      margin-top: 1.5rem;
      display: inline-block;
      font-size: 6rem;
      font-weight: bold;
      padding-top: 0.5rem;
    }

    .dollar_icon {
      font-size: 1rem;
      font-weight: 400;
      top: 10%;
      left: 0;
      transform: translate(-50%, -50%);
    }

    .details {
      margin-bottom: 2rem;
    }

    .month {
      display: block;
      margin-bottom: 3rem;
    }

    li {
      margin: 0.6rem 0;
      span {
        font-size: smaller;
        color: rgb(92, 92, 92);
      }
    }
    .pc_btn {
      padding: 0.3rem 2rem;
      border-radius: 20px;
    }
    .btn_primary:hover {
      background-color: white;
      background: white;
      color: #f8626b;
      border: 1px solid #f8626b;
    }
  }
  .central {
    box-shadow: 0px 0px 3px $pc-btn-primary;
    color: white;
    background: linear-gradient(90deg, $pc-btn-primary 0%, #f8626b 100%);
    li span {
      color: rgb(216, 216, 216);
    }
    .pc_btn {
      font-size: 1rem;
      padding: 0.3rem 2rem;
      border-radius: 20px;
      color: $pc-btn-primary;
      background: white;
    }
    .btn_primary:hover {
      background-color: $pc-btn-primary;
      background: linear-gradient(90deg, $pc-btn-primary 0%, #f8626b 100%);
      color: $pc-text-light-primary;
      border: 1px solid white;
    }
  }
  .order_now {
    height: 4rem;
  }
  .arrow_icon {
    padding-left: 2rem;
  }
}
</style>