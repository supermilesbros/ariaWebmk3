<template>
  <div class="main-container">
    <HeaderAria />

    <div class="about-banner-wrap service-banner-space bg-cover" :style="{ backgroundImage: `url('images/hero/advantage-hero.jpg')` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 ml-auto mr-auto">
            <div class="service-hero-wrap wow move-up">
              <div class="service-hero-text text-center">
                <h3 class="text-white mb-1">
                  Fast and Accurate
                </h3>
                <h2 class="font-weight--bold text-color-primary">
                  ARIA ADVANTAGE
                </h2>

                <div class="hero-button-group section-space--mt_50">
                  <button class="ht-btn ht-btn-md">
                    <a href="https://sdx.stratusdx.net/testing/covid19.aspx?loc=self_pay" target="_blank">Schedule A Test</a>
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
                  Our greatest asset is our staff. Providing fast, accurate, and secure results requires highly qualified, professional lab personnel. Our team combines over 70 years of diagnostic laboratory and clinical toxicology experience with the highest quality equipment and a world-class Laboratory Information System (LIS).
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
