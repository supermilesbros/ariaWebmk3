<template>
  <div class="main-container">
    <HeaderAria />

    <div class="projects-wrapper pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center pb-5">
            <h2>Covid-19 Testing</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 align-center text-center">
      <div class="">
        <b-button v-b-modal.modal-1>
          Launch Test modal
        </b-button>

        <b-modal id="modal-1" size="xl" scrollable centered title="BootstrapVue">
          <div style="height: 80vh; width: 80vw">
            <iframe
              style="width: 100%; height: 100%"
              src="https://checkout.square.site/buy/NHNYMYSGN2L2WHHRJYBFREPM"
              title="W3Schools Free Online Web Tutorials"
            />
          </div>
        </b-modal>
        <div class="row">
          <a href="https://goo.gl/maps/8GYcxVjzUzcodq4v6" class="col-lg-6 col-md-6 ">
            <div class="ht-box-images style-06a">
              <div class="image-box-wrap">
                <div class="content">
                  <div class="text">
                    <h6 class="text-lg">
                      Drive-thru Location
                    </h6>
                  </div>
                  <h4 class="heading">
                    Northview Church Carmel
                  </h4>
                  <div class="text-left">
                    <h6 class="text-lg">
                      Address
                    </h6>
                    <p>12900 Hazel Dell Parkway Carmel, IN  </p>
                  </div>
                  <div class="text-left">
                    <h6 class="text-lg">
                      Hours
                    </h6>
                    <p>M-Thurs 10am- 3:30 F- Sat 10am-3pm</p>
                  </div>
                  <div class="box-images-arrow">
                    <p class="button-text">Open Maps</p>
                    <i class="far fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://checkout.square.site/buy/NHNYMYSGN2L2WHHRJYBFREPM" class="col-lg-6 col-md-6">
            <div class="ht-box-images style-06a">
              <div class="image-box-wrap">
                <div class="content">
                  <div class="text">
                    <h6 class="text-lg">
                      Drive-thru Location
                    </h6>
                  </div>
                  <h4 class="heading">
                    St Luke's United Methodist
                  </h4>
                  <div class="text-left">
                    <h6 class="text-lg">
                      Address
                    </h6>
                    <p>100 W 86th Street Indianapolis,IN 46260 </p>
                  </div>
                  <div class="text-left">
                    <h6 class="text-lg">
                      Hours
                    </h6>
                    <p>M-Thurs 9am-7pm  F- Sat 9am-3pm</p>
                  </div>
                  <div class="box-images-arrow">
                    <p class="button-text">Open Maps</p>
                    <i class="far fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <Covid19TestingWrapper />

    <Covid19TestingFAQWrapper />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/about.json'
import HeaderAria from '@/components/aria/HeaderAria'
import Covid19TestingWrapper from '@/components/aria/Covid19TestingWrapper'
import Covid19TestingFAQWrapper from '@/components/aria/Covid19TestingFAQWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    Covid19TestingWrapper,
    Covid19TestingFAQWrapper,
    AriaFooter,
    OffCanvasMobileMenu
  },
  data () {
    return {
      data,
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
