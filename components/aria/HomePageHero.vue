<template>
  <div class="resolutions-hero-space position-relative bg-cover" :style="{ backgroundImage: `url(${data.heroResolution.bgImg})` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 ml-auto mr-auto">
          <div class="service-hero-wrap wow move-up">
            <div class="service-hero-text text-center">
              <h3 class="text-white">
                {{ data.heroResolution.subTitle }}
              </h3>
              <h1 class="font-weight--reguler text-white mb-30">
                {{ data.heroResolution.title }}
              </h1>
              <p class="text-white">
                {{ data.heroResolution.desc }}
              </p>

              <div class="hero-button-group section-space--mt_50">
                <button class="ht-btn ht-btn-md">
                  Schedule A Test
                </button>
                <button class="ht-btn ht-btn-md btn--white">
                  <a href="/doctorOrder.pdf">Physician Order Form</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vc_row-separator center_curve_alt bottom">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0" />
      </svg>
    </div>
  </div>
</template>

<script>
import data from '../../data/hero.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
