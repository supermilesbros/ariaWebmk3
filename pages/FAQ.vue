<template>
  <div class="main-container">
    <HeaderAria />

    <ToolkitHero breadcrumb-title="Frequently Asked Questions" />

    <div class="accordion-wrapper pt-5 section-space--pb_100">
      <div class="container">
        <div class="row ">
          <div class="col-lg-12 pr-5">
            <div class="faq-two-wrapper">
              <AccordionFAQ />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import ToolkitHero from '@/components/aria/ToolkitHero'
import AccordionFAQ from '@/components/aria/sub-components/AccordionFAQ'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    ToolkitHero,
    AccordionFAQ,
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
