<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div v-for="project in data.projects" :key="project.id" class="col-lg-12 col-md-12">
          <a :href="project.image" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading text-right">
                  Self-Pay
                </h6>
                <h5 class="heading">Same Day COVID 19 PCR Cash Pay $165</h5>
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
