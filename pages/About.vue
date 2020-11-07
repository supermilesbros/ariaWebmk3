<template>
  <div class="main-container">
    <HeaderAria />

    <AboutPageHeader />

    <AboutAria />

    <AboutAriaFeatures />

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
