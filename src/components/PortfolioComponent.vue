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
              class="rounded-circle pc_text_alert arrow_icon"
              icon="fas fa-arrow-left "
            />
            <font-awesome-icon
              class="rounded-circle pc_text_alert arrow_icon"
              icon="fas fa-arrow-right rounded-circle circle"
            />
          </div>
        </div>
      </div>
      <div class="container_row">
        <div class="row justify-content-center flex-nowrap gx-5">
          <div
            class="col"
            v-for="(work, index) in recentWorks"
            :key="'workKey' + index"
          >
            <div class="project_card">
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
    </section>

</template>

<script>
    export default {
        name: 'PortfolioComponent',
        data() {
        return{
                  recentWorks: [
        {
          title: "Basket of Flower on table",
          category: "Branding Strategy",
          img: "latest_work_1.jpg",
        },
        {
          title: "Purinky Products",
          category: "Digital Experience",
          img: "latest_work_2.jpg",
        },
        {
          title: "Satisfy Poster",
          category: "Branding Strategy",
          img: "latest_work_3.jpg",
        },
        {
          title: "Mock Up",
          category: "Digital Experience",
          img: "latest_work_4.jpg",
        },
        {
          title: "Purinky Products",
          category: "Digital Experience",
          img: "latest_work_2.jpg",
        },
      ],
        }
        },
        methods: {}, 
        mounted() {},
    }
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
        width: 500px;
        border-radius: 20px;
        box-shadow: 0 0 20px lightgray;
        .project_img img {
          border-radius: 20px;
        }
        .project_details{
          padding: 2rem 2rem 1rem ;
        }
      }
    }
  }
}

</style>