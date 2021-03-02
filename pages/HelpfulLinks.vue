<template>
  <div class="main-container">
    <HeaderAria />

    <HelpfulLinksItemWrapper />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import HelpfulLinksItemWrapper from '@/components/aria/HelpfulLinksItemWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    HelpfulLinksItemWrapper,
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
      ]
    }
  },
  head () {
    return {
      title: 'Helpful Links'
    }
  }
}
</script>
