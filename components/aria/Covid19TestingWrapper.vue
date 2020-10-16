<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h6>Access Self-Pay Scheduling and online payment</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <p>Respiratory Pathogen Panel with COVID 19 $500</p>
        </div>
      </div>

      <div class="row">
        <div v-for="project in data.projects" :key="project.id" class="col-lg-12 col-md-12">
          <a :href="project.image" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading text-right">
                  Self-Pay
                </h6>
                <h5 class="heading">
                  {{ project.heading }}
                </h5>
                <div class="text">
                  {{ project.desc }}
                </div>
                <div class="box-projects-arrow">
                  <span class="button-text">Schedule Now</span>
                  <i class="fa fa-long-arrow-right ml-1" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="pb-5 col-lg-12">
          <div class="feature-list-button-box mt-30 text-center">
            <a href="https://b2092daf-f52f-4aaf-b359-f8e1a2285be4.filesusr.com/ugd/9041d5_3072334b9f144d5592741763738f98cf.pdf" class="ht-btn ht-btn-md">
              Should I Get An Antibody Test?
            </a>
            <a href="https://b2092daf-f52f-4aaf-b359-f8e1a2285be4.filesusr.com/ugd/9041d5_aceeaddbdade4affa2a5f4596b066a96.pdf" class="ht-btn ht-btn-md ht-btn--outline">
              Physician Order Form
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/covidTesting.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
