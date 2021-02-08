<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div v-for="project in data.projects" :key="project.id" class="col-lg-6 col-md-6">
          <a href="https://ariadxs.stratusdx.net/testing/covid19.aspx?loc=sameday_selfpay" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading text-right" />
                <h5 class="heading">
                  Same Day COVID-19 PCR Test
                </h5>
                <div class="text">
                  COVID 19 PCR - $165
                </div>
                <div class="box-projects-arrow">
                  <span class="button-text">Schedule Now</span>
                  <i class="fa fa-long-arrow-right ml-1" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div v-for="project in data.projects" :key="project.id" class="col-lg-6 col-md-6">
          <a href="https://ariadxs.stratusdx.net/testing/covid19.aspx?loc=self_pay" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading text-right" />
                <h5 class="heading">
                  Two Day COVID-19 PCR Test
                </h5>
                <div class="text">
                  COVID 19 PCR - $135
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
