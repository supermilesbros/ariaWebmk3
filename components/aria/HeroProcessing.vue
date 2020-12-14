<template>
  <div class="processing-hero bg-cover" :style="{ backgroundImage: `url(${data.heroProcessing.bgImg})` }">
    <div class="container">
      <div class="row align-items-center">
        <!--baseline-->
        <div class="col-lg-8 col-md-7">
          <div class="processing-hero-text wow move-up">
            <h6>{{ data.heroProcessing.subTitle }}</h6>
            <h1 class="font-weight--reguler mb-15" v-html="data.heroProcessing.title">
              {{ data.heroProcessing.title }}
            </h1>
            <p>{{ data.heroProcessing.desc }}</p>
            <div class="hero-button mt-30">
              <n-link to="/CovidTesting" class="btn btn--secondary" style="background-color: #810831;">
                Learn More
              </n-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5">
          <div class="processing-hero-images-wrap wow move-up">
            <div class="processing-hero-images">
              <img class="img-fluid" :src="data.heroProcessing.image" alt="hero image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/hero.json'

import AppointmentForm from '@/components/aria/AppointmentForm'
export default {
  components: {
    AppointmentForm
  },
  data () {
    return {
      data
    }
  }
}
</script>
