<template>
  <div class="main-container">
    <HeaderAria />

    <div class="about-banner-wrap banner-space bg-cover" :style="{ backgroundImage: `url('images/hero/pcr-hero.jpg')` }">
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
                  Learn More About Our <span class="text-color-primary"> Testing <br> Process</span>
                </h3>
              </div>
            </div>
            <div class="col-lg-7 offset-lg-1">
              <div class="conact-us-wrap-one managed-it">
                <h5 class="heading ">
                  Toxicology includes both Presumptive (Qualitative immunoassay screening) and Definitive (Quantitative or Confirmatory) analyses. Drug testing involves one or more techniques used to identify specific drugs or their metabolites.
                </h5>

                <div class="sub-heading">
                  Presumptive screens attempt to identify a wide range of illicit and therapeutic substances. There is no simple presumptive process that can identify all drugs.
                </div>
                <div class="sub-heading">
                  A definitive analysis both identifies particular substances and establishes how much is present. Definitive analyses are more complicated than presumptive analyses because they must be calibrated and controlled for each particular substance.
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
              <AccordionScope />
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
import AccordionScope from '@/components/aria/sub-components/AccordionScope'
import AriaCtaThree from '@/components/aria/AriaCtaThree'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    AccordionScope,
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
