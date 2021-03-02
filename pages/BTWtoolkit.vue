<template>
  <div class="main-container">
    <HeaderAria />

    <div class="projects-wrapper pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center pb-5">
            <h2>Back To Work Toolkit</h2>
          </div>
        </div>
      </div>
    </div>

    <ToolkitItemWrapper />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ToolkitItemWrapper from '@/components/aria/ToolkitItemWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
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
      title: 'Back to Work Toolkit'
    }
  }
}
</script>
