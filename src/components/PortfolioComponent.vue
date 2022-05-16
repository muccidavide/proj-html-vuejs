<template>
  <section class="portfolio">
    <div class="container-fluid">
      <div class="section_header row row-cols-2">
        <div class="col">
          <p class="pc_text_alert">Portfolio</p>
          <h2 class="display-4"><span class="fw-bold">Latest</span> Work</h2>
        </div>
        <div class="col d-flex align-items-center justify-content-end">
          <font-awesome-icon
            @click="previousSlide"
            class="rounded-circle pc_text_alert arrow_icon"
            icon="fas fa-arrow-left "
          />
          <font-awesome-icon
            @click="nextSlide"
            class="rounded-circle pc_text_alert arrow_icon"
            icon="fas fa-arrow-right rounded-circle circle"
          />
        </div>
      </div>
    </div>
    <div class="container_row">
      <div class="row justify-content-center flex-nowrap">
        <div
          class="col-md-12 col-xl-6 col-xxl-3"
          v-for="(work, index) in recentWorks"
          :key="'workKey' + index"
          
        >
          <div class="project_card m-auto">
            <div class="project_img">
              <img :src="require('@/assets/img/' + work.img)" alt="" />
            </div>
            <div
              class="
                project_details
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <h5 class="fw-bold">
                {{ work.title }}
              </h5>
              <h6 class="pc_text_secondary">{{ work.category }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slider_nav text-center ">
      <font-awesome-icon
        v-for="(n, index) in recentWorks.length"
        :key="index"
        class="px-1 pc_text_secondary"
        :class="isActive(index) ? 'selected ' : ''"
        icon="fas fa-circle"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioComponent",
  data() {
    return {
      activeWork: 2,
      recentWorks: [
        {
          id: 1,
          title: "Basket of Flower on table",
          category: "Branding Strategy",
          img: "latest_work_1.jpg",
        },
        {
          id: 2,
          title: "Purinky Products",
          category: "Digital Experience",
          img: "latest_work_2.jpg",
        },
        {
          id: 3,
          title: "Satisfy Poster",
          category: "Branding Strategy",
          img: "latest_work_3.jpg",
        },
        {
          id: 4,
          title: "Mock Up",
          category: "Digital Experience",
          img: "latest_work_4.jpg",
        },
        {
          id: 5,
          title: "Purinky Products",
          category: "Digital Experience",
          img: "latest_work_2.jpg",
        },
      ],
    };
  },
  methods: {
    previousSlide() {
      this.recentWorks.forEach((work, index) => {
        if (index === 0) {
          this.recentWorks.push(work);
          this.recentWorks.shift();
          this.activeWork--;
          if (this.activeWork < 0) {
            this.activeWork = this.recentWorks.length -1;
          }
        }
      });
    },
    nextSlide() {
      this.recentWorks.forEach((work, index) => {
        console.log(index);
        if (index === this.recentWorks.length - 1) {
          this.recentWorks.unshift(work);
          this.recentWorks.pop();
          this.activeWork++;
          if (this.activeWork === this.recentWorks.length) {
            this.activeWork = 0;
          }
        }
      });
    },
    isActive(index) {
      return index === this.activeWork;
    },
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.portfolio {
  overflow-x: hidden;
  margin: 4rem 0;
  .arrow_icon {
    border: solid 1px;
    padding: 0.7rem;
    margin: 0 1rem;
  }
  .container_row {
    max-width: 98%;
    padding: 2rem;
    margin: auto;
    margin-top: 2rem;

    .row {
      flex-wrap: nowrap;
      .project_card {
        width: 600px;
        min-width: 70%;
        max-width: 100%;
        border-radius: 20px;
        box-shadow: 0 0 20px lightgray;
        .project_img img {
          border-radius: 20px;
        }
        .project_details {
          min-height: 110px;
          padding: 2rem 2rem 1rem;
        }
      }
    }
  }
}
.selected {
  color: $pc-text-alert;
}
</style>