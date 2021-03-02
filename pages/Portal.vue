<template>
  <div class="main-container">
    <HeaderAria />

    <div class="about-banner-wrap banner-space about-us-bg bg-cover" :style="{ backgroundImage: `url('images/aria/portal-hero.jpg')` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="about-banner-content text-center">
              <h1 class="mb-15 text-white">
                ONLINE PORTAL
              </h1>
              <div class="hero-button-group section-space--mt_50">
                <button class="ht-btn ht-btn-md">
                  <a href="https://ariadxs.stratusdx.net/" target="_blank">Provider Portal</a>
                </button>
                <button class="ht-btn ht-btn-md btn--white">
                  <a href="https://ariadxs.stratusdx.net/default.aspx?login=patientportal" target="_blank">Patient Portal</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="accordion-two" class="mx-5 my-5 faq-two-wrapper">
      <b-card no-body>
        <b-card-header header-tag="header">
          <h5 class="mb-0 font-weight--bold">
            <b-button v-b-toggle.accordion-one block class="btn-link">
              Portal Information
              <span>
                <i class="far fa-caret-circle-down" />
                <i class="far fa-caret-circle-right" />
              </span>
            </b-button>
          </h5>
        </b-card-header>
        <b-collapse id="accordion-one" accordion="my-accordion">
          <b-card-body>
            <b-card-text>
              ARIA's StratusDX Laboratory Information System offers web, EMR and cloud-based reporting. Paperless reports can be delivered conveniently and securely to the client. Sample analysis results are delivered in a comprehensive and easy-to-interpret report that highlights positive and inconsistent results. Test results are released to clients after they are scrutinized and dual data review approved. Patient confidentiality is paramount throughout each phase of testing, and thus ARIA uses an encrypted, HIPAA compliant, customer specific web portal. ARIA certified technicians are available for consultation to clarify and explain the technical findings. For more information, please view our <span style="color: #d31037;"><a href="/portalManual.pdf" target="_blank">Online Portal Manual</a></span>.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/payors.json'
import HeaderAria from '@/components/aria/HeaderAria'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
export default {
  components: {
    HeaderAria,
    AriaFooter,
    OffCanvasMobileMenu
  },
  data () {
    return {
      breadcrumbNavigation: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Case Studies',
          active: true
        }
      ],
      data
    }
  },
  head () {
    return {
      title: 'Client Portal'
    }
  }
}
</script>
