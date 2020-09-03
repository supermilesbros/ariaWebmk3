<template>
  <div class="main-container">
    <HeaderAria />

    <AboutPageHeader />

    <AboutAria />

    <AboutAriaFeatures />

    <AriaStatsBar />

    <AriaTestimonials class="pb-0 bg-white" />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import AboutPageHeader from '@/components/aria/AboutPageHeader'
import AboutAria from '@/components/aria/AboutAria'
import AboutAriaFeatures from '@/components/aria/AboutAriaFeatures'
import AriaStatsBar from '@/components/aria/AriaStatsBar'
import AriaTestimonials from '@/components/aria/AriaTestimonials'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'About',
  components: {
    HeaderAria,
    AboutPageHeader,
    AboutAria,
    AboutAriaFeatures,
    AriaStatsBar,
    AriaTestimonials,
    AriaFooter,
    OffCanvasMobileMenu
  },
  head () {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About our description'
        }
      ]
    }
  }
}
</script>
