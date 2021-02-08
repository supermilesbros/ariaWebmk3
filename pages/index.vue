<template>
  <div class="main-container">
    <HeaderAria />

    <HeroProcessing />

  <AccordionWrapper />

    <ServiceStyleThree />

    <AriaTestimonials />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import HeroProcessing from '@/components/aria/HeroProcessing'
import AccordionWrapper from '@/components/aria/sub-components/AccordionWrapper'
import ServiceStyleThree from '@/components/aria/sub-components/ServiceStyleThree'
import AriaTestimonials from '@/components/aria/AriaTestimonials'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
export default {
  components: {
    HeaderAria,
    HeroProcessing,
    AccordionWrapper,
    ServiceStyleThree,
    AriaTestimonials,
    AriaFooter,
    OffCanvasMobileMenu
  }
}
</script>
