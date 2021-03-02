<template>
  <div class="main-container">
    <HeaderAria />

    <ToxEduWrapper />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ToxEduWrapper from '@/components/aria/ToxEduWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    ToxEduWrapper,
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
      title: 'Tox Education'
    }
  }
}
</script>
