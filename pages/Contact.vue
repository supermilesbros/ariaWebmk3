
<template>
  <div class="main-container">
    <HeaderAria />

    <ContactUsHeader breadcrumb-title="Contact Us" />

    <ContactUsForm />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ContactUsHeader from '@/components/aria/sub-components/ContactUsHeader'
import ContactUsForm from '@/components/aria/sub-components/ContactUsForm'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'Contact',
  components: {
    HeaderAria,
    ContactUsHeader,
    ContactUsForm,
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
          text: 'Contact Us',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Contact Us'
    }
  }
}
</script>
