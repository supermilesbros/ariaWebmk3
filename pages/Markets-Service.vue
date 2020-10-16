<template>
  <div class="main-container">
    <HeaderAria />

    <div class="about-banner-wrap banner-space bg-cover" :style="{ backgroundImage: `url('images/hero/igg-hero.jpg')` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="about-banner-content text-center">
              <h1 class="mb-15 text-white">
                {{ data.heading }}
              </h1>
              <h5 class="font-weight--normal text-white">
                At Aria Diagnostics, we care about the health and safety of our community.
              </h5>
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
