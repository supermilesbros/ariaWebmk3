<template>
  <div class="service-hero-wrapper service-hero-space service-hero-bg" style=" backgroundImage: url('images/aria/home-hero.jpg') ">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 ml-auto mr-auto">
          <div class="service-hero-wrap wow move-up">
            <div class="service-hero-text text-center">
              <h3 class="text-brand">
                {{ data.heroResolution.subTitle }}
              </h3>
              <h1 class="font-weight--reguler text-white mb-30">
                {{ data.heroResolution.title }}
              </h1>
              <div class="service-solution-form-wrap mr-auto ml-auto">
                <form action="#" method="post">
                  <div class="hero-select-form">
                    <div class="contact-select">
                      <div class="form-item contact-inner">
                        <span class="inquiry">
                          <select v-model="newRoute" class="select-item" :style="{ backgroundImage: `url('images/icons/hero-selector-icon.png')` }" @change="changeRoute()">
                            <option value="HowCanWeHelpYou">How Can We Help You?</option>
                            <option value="CovidTesting">COVID 19 Testing</option>
                            <option value="resources">COVID-19 Information</option>
                            <option value="markets-service">Other Drug Testing</option>
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <p class="text-white">
                {{ data.heroResolution.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/hero.json'
export default {
  data () {
    return {
      data,
      newRoute: 'HowCanWeHelpYou'
    }
  },
  methods: {
    changeRoute () {
      this.$router.push({ path: '/' + this.newRoute })
    }
  }
}
</script>
