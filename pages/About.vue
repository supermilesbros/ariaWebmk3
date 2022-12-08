<template>
  <div class="main-container">
    <HeaderAria />

    <AboutPageHeader />

    <AboutAria />

    <AboutAriaFeatures />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import AboutPageHeader from '@/components/aria/AboutPageHeaderLab'
import AboutAria from '@/components/aria/AboutAria'
import AboutAriaFeatures from '@/components/aria/AboutAriaFeatures'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  name: 'About',
  components: {
    HeaderAria,
    AboutPageHeader,
    AboutAria,
    AboutAriaFeatures,
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
