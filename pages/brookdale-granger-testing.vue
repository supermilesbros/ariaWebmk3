
<template>
  <div class="main-container">
    <HeaderAria />

    <ContactUsForm />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ContactUsForm from '@/components/aria/sub-components/TestingContactForm'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'Contact',
  components: {
    HeaderAria,
    ContactUsForm,
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
      title: 'Brookdale Granger'
    }
  }
}
</script>
