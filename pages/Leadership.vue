<template>
  <div class="main-container">
    <HeaderAria />

    <LeadershipHero breadcrumb-title="Leadership" />

    <AriaTeam />

    <LeadershipCtaContact />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HeaderAria from '@/components/aria/HeaderAria'
import LeadershipHero from '@/components/aria/sub-components/LeadershipHero'
import AriaTeam from '@/components/aria/AriaTeam'
import LeadershipCtaContact from '@/components/aria/LeadershipCtaContact'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    LeadershipHero,
    AriaTeam,
    LeadershipCtaContact,
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
          text: 'Leadership',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Leadership'
    }
  }
}
</script>
