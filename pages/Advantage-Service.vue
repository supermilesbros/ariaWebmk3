<template>
  <div class="main-container">
    <HeaderAria />

    <div class="about-banner-wrap banner-space about-us-bg bg-cover" :style="{ backgroundImage: `url('images/aria/advantage-hero.jpg')` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="about-banner-content text-center">
              <h1 class="mb-15 text-white">
                ARIA ADVANTAGE
              </h1>
              <h5 class="font-weight--normal text-white">
                Our greatest asset is our staff. Providing fast, accurate, and secure results requires highly qualified, professional lab personnel.
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
                  Learn More About The <span class="text-color-primary"> ARIA Advantage</span>
                </h3>
              </div>
            </div>
            <div class="col-lg-7 offset-lg-1">
              <div class="conact-us-wrap-one managed-it">
                <h5 class="heading ">
                  Our team combines over 70 years of diagnostic laboratory and clinical toxicology experience with the highest quality equipment and a world-class Laboratory Information System (LIS).
                </h5>

                <div class="sub-heading">
                  In the field, we rely on our professional and motivated team of client service specialists to help you navigate testing needs. We apply CAP standards to quality control and quality assurance, documenting throughout testing to help clients' confidently and accurately maximize compliance and mitigate risk.
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
              <AccordionAdvantage />
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
import AccordionAdvantage from '@/components/aria/sub-components/AccordionAdvantage'
import HeaderAria from '@/components/aria/HeaderAria'
import AriaCtaThree from '@/components/aria/AriaCtaThree'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    AccordionAdvantage,
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
