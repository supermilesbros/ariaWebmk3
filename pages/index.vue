<template>
  <div class="main-container">
    <HeaderAria />

    <AboutPageHeader/>

    <!-- <HomeBreakthrough/> -->


    <ServiceStyleThree />

    <AboutAriaFeatures />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import AboutPageHeader from '@/components/aria/AboutPageHeader'
// import HomeBreakthrough from '@/components/aria/HomeBreakthrough'

import ServiceStyleThree from '@/components/aria/sub-components/ServiceStyleThree'
import AboutAriaFeatures from '@/components/aria/AboutAriaFeatures'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
export default {
  components: {
    HeaderAria,
    AboutPageHeader,
    ServiceStyleThree,
    AboutAriaFeatures,
    AriaFooter,
    OffCanvasMobileMenu
  }
}
</script>
