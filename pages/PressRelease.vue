<template>
  <div class="main-container">
    <HeaderAria />

    <div class="projects-wrapper pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center pb-5">
            <h2>Press Releases</h2>
          </div>
        </div>
      </div>
    </div>

    <PressItemsWrapper />
    <div class="mx-5 faq-two-wrapper">
      <b-card no-body>
        <b-card-header header-tag="header">
          <h5 class="mb-0 font-weight--bold">
            <b-button v-b-toggle.accordion-two block class="btn-link">
              Past Press Releases
              <span>
                <i class="far fa-caret-circle-down" />
                <i class="far fa-caret-circle-right" />
              </span>
            </b-button>
          </h5>
        </b-card-header>
        <b-collapse id="accordion-two" accordion="my-accordion">
          <b-card-body class="row">
            <div v-for="press in data.pastPress" :key="press.name" class="col-12 py-1">
              <a :href="press.link" target="_blank"> {{ press.name }} - {{ press.desc }}</a>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/pastPress.json'
import HeaderAria from '@/components/aria/HeaderAria'
import PressItemsWrapper from '@/components/aria/PressItemsWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    PressItemsWrapper,
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
      ],
      data
    }
  },
  head () {
    return {
      title: 'Press Releases'
    }
  }
}
</script>
