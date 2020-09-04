<template>
  <div class="main-container">
    <HeaderAria />

    <ToolkitHero breadcrumb-title="Covid-19 Testing Information" />

    <ToolkitItemWrapper />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ToolkitHero from '@/components/aria/ToolkitHero'
import ToolkitItemWrapper from '@/components/aria/ToolkitItemWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    ToolkitHero,
    ToolkitItemWrapper,
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
