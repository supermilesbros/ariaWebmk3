<template>
  <div class="main-container">
    <HeaderAria />

    <HomePageHero />

    <HomePageCardFeature />

    <AriaAdvantageFeature />

    <!-- <AriaCtaOne /> -->

    <!-- <HomePageResourcesFeature /> -->

    <!-- <AriaTestimonials /> -->

    <!-- <AriaStatsBar /> -->

    <HomePageContactUsForm />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import HomePageHero from '@/components/aria/HomePageHero'
import AriaAdvantageFeature from '@/components/aria/AriaAdvantageFeature'
import HomePageContactUsForm from '@/components/aria/HomePageContactUsForm'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
import HomePageCardFeature from '@/components/aria/HomePageCardFeature'

export default {
  components: {
    HeaderAria,
    AriaAdvantageFeature,
    HomePageContactUsForm,
    AriaFooter,
    OffCanvasMobileMenu,
    HomePageHero,
    HomePageCardFeature
  },
  head () {
    return {
      title: 'Aria Diagnostics'
    }
  }
}
</script>
