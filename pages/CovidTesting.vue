<template>
  <div class="main-container">
    <HeaderAria2 />

    <div class="projects-wrapper pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1>COVID-19 Testing</h1>
          </div>
        </div>
      </div>
    </div>
    <Covid19TestingWrapper />
    <div class="col-lg-12 text-center pt-5">
      <h2>Testing Locations</h2>
      <h6 class="text-lg text-color-red">
        *Now Offering Same Day Testing*
      </h6>
    </div>
    <div class="col-lg-12 align-center pb-5 text-center">
      <div class="">
        <!-- <b-button v-b-modal.modal-1>
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
        </b-modal> -->
        <div class="row  px-1">
          <a href="https://goo.gl/maps/aeyT9MpNzyaHND4HA" target="_blank" class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="ht-box-images style-06a">
              <div class="image-box-wrap">
                <div class="content">
                  <h4 class="heading">
                    Carmel Faith Apostolic Church
                  </h4>
                  <div class="text-left">
                    <h4 class="text-lg pt-5">
                      Address
                    </h4>
                    <h6 class="pb-3">1212 E 116th St Carmel, IN 46032</h6>
                  </div>
                  <div class="row">
                    <div class="text-left col-lg-6 col-md-6 col-sm-12">
                      <h5 class="text-lg">
                        Same Day Results
                      </h5>
                      <h6 class="pb-3">Mon &nbsp; 8am - 4:30pm<br> Tues &nbsp;  8am - 4:30pm <br> Wed &nbsp;  8am - 4:30pm <br> Thurs &nbsp; 8am - 4:30pm <br> Fri &nbsp; 8am - 4:30pm</h6>
                      <p style="font-size: 14px;">*Same day results are available before 8pm</p>
                    </div>
                    <div class="text-left col-lg-4 col-md-6 col-sm-12">
                      <h5 class="text-lg">
                        Next Day Results
                      </h5>
                      <h6>Mon &nbsp; 8am - 1pm<br> Tues &nbsp;  8am - 1pm <br> Wed &nbsp;  8am - 1pm <br> Thurs &nbsp; 8am - 1pm <br> Fri &nbsp; 8am - 1pm</h6>
                      <p style="font-size: 14px;">*Next day results are available by end of next business day</p>
                    </div>
                  </div>
                  <div class="box-images-arrow">
                    <p class="button-text">Open Maps</p>
                    <i class="far fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://goo.gl/maps/Jt9adbnq4ixPAFHL6" target="_blank" class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="ht-box-images style-06a">
              <div class="image-box-wrap">
                <div class="content">
                  <h4 class="heading">
                    Downtown Off the Circle
                  </h4>
                  <div class="text-left">
                    <h4 class="text-lg pt-5">
                      Address
                    </h4>
                    <h6 class="pb-3">17 N Pennsylvania St Indianapolis, IN 46204</h6>
                  </div>
                  <div class="row">
                    <div class="text-left col-lg-6 col-md-6 col-sm-12">
                      <h5 class="text-lg">
                        Same Day Results
                      </h5>
                      <h6 class="pb-3">Mon &nbsp; 8am - 12pm<br> Tues &nbsp;  8am - 12pm <br> Wed &nbsp;  8am - 12pm <br> Thurs &nbsp; 8am - 12pm <br> Fri &nbsp; 8am - 12pm</h6>
                      <p style="font-size: 14px;">*Same day results are available before 8pm</p>
                    </div>
                    <div class="text-left col-lg-4 col-md-6 col-sm-12">
                      <h5 class="text-lg">
                        Next Day Results
                      </h5>
                      <h6>Mon &nbsp; 8am - 6pm<br> Tues &nbsp;  8am - 6pm <br> Wed &nbsp;  8am - 6pm <br> Thurs &nbsp; 8am - 6pm <br> Fri &nbsp; 8am - 6pm <br> Sat &nbsp; 9am - 2pm</h6>
                      <p style="font-size: 14px;">*Next day results are available by end of next business day</p>
                    </div>
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

    <Covid19TestingFAQWrapper />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/about.json'
import HeaderAria2 from '@/components/aria/HeaderAria2'
import Covid19TestingWrapper from '@/components/aria/Covid19TestingWrapper'
import Covid19TestingFAQWrapper from '@/components/aria/Covid19TestingFAQWrapper'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria2,
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
      title: 'COVID Testing Resources'
    }
  }
}
</script>
