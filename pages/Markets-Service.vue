<template>
  <div class="main-container">
    <HeaderAria />

    <div class="about-banner-wrap service-banner-space bg-cover" :style="{ backgroundImage: `url('images/hero/igg-hero.jpg')` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 ml-auto mr-auto">
            <div class="service-hero-wrap wow move-up">
              <div class="service-hero-text text-center">
                <h3 class="text-white mb-1">
                  Fast and Accurate
                </h3>
                <h2 class="font-weight--bold text-color-primary">
                  SPECIALTIES
                </h2>
                <h5 class="text-white">
                  MEETING YOUR DEMANDS
                </h5>

                <!-- <div class="hero-button-group section-space--mt_50">
                  <button class="ht-btn ht-btn-md">
                    <a href="https://sdx.stratusdx.net/testing/covid19.aspx?loc=self_pay" target="_blank">Schedule A Test</a>
                  </button>
                  <button class="ht-btn ht-btn-md btn--white">
                    <a href="/doctorOrder.pdf">Physician Order Form</a>
                  </button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0">
      <div class="container">
        <div class="cybersecurity-about-box">
          <div class="row">
            <div class="col-lg-4">
              <div class="modern-number-01">
                <h3 class="heading mt-0">
                  Learn More About Our <span class="text-color-primary"> Specialties </span>
                </h3>
              </div>
            </div>
            <div class="col-lg-7 offset-lg-1">
              <div class="conact-us-wrap-one managed-it">
                <h5 class="heading ">
                  We are now offering <span class="text-color-primary">Nasal PCR</span> This test is a critical next step in battling this virus.
                </h5>

                <div class="sub-heading">
                  Using the PCR Test will help determine if a person is currently <br> infected with the virus that causes COVID-19.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-wrapper section-space--pb_100">
      <div class="container">
        <div class="row ">
          <div class="col-lg-12 pr-5">
            <div class="faq-two-wrapper">
              <AccordionMarkets />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AriaCtaThree />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/service.json'
import HeaderAria from '@/components/aria/HeaderAria'
import AccordionMarkets from '@/components/aria/sub-components/AccordionMarkets'
import AriaCtaThree from '@/components/aria/AriaCtaThree'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    AccordionMarkets,
    AriaCtaThree,
    AriaFooter,
    OffCanvasMobileMenu
  },
  data () {
    return {
      data,
      id: this.$route.params.id
    }
  }
}
</script>
