<template>
  <div class="main-container">
    <HeaderAria />

    <div class="container mt-25">
      <div class="row">
        <div class="col-lg-12 pt-3 ml-auto mr-auto">
          <div class="about-banner-content text-center">
            <h5 class="font-weight--normal text-black">
              ARIA's StratusDX Laboratory Information System offers web, EMR and cloud-based reporting. Paperless reports can be delivered conveniently and securely to the client. Sample analysis results are delivered in a comprehensive and easy-to-interpret report that highlights positive and inconsistent results. Test results are released to clients after they are scrutinized and dual data review approved. Patient confidentiality is paramount throughout each phase of testing, and thus ARIA uses an encrypted, HIPAA compliant, customer specific web portal. ARIA certified technicians are available for consultation to clarify and explain the technical findings. For more information, please view our Online Portal Manual.
            </h5>
          </div>
          <div class="about-banner-content text-center pt-lg-5">
            <a href="https://ariadxs.stratusdx.net/" class="font-weight-normal pb-5 text-color-default" style="font-size: 55px;">
              Access Client Portal
            </a>
          </div>
        </div>
      </div>
    </div>

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
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
          text: 'Leadership',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Leadership'
    }
  }
}
</script>
