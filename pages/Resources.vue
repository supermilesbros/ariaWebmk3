<template>
  <div class="main-container">
    <HeaderAria />

    <ResourcesItemWrapper />

    <AriaCtaThree />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ResourcesItemWrapper from '@/components/aria/ResourcesItemWrapper'
import AriaCtaThree from '@/components/aria/AriaCtaThree'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    ResourcesItemWrapper,
    AriaCtaThree,
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
      title: 'Resources'
    }
  }
}
</script>
