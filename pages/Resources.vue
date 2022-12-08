<template>
  <div class="main-container">
    <HeaderAria />

    <HeroProcessing/>

    <ResourcesItemWrapper />

    <AriaCtaThree />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import HeroProcessing from '@/components/aria/HeroProcessing'
import ResourcesItemWrapper from '@/components/aria/ResourcesItemWrapper'
import AriaCtaThree from '@/components/aria/AriaCtaThree'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    HeroProcessing,
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
