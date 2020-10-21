<template>
  <div class="header-area">
    <div class="header-top-bar-info bg-gray d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="top-bar-wrap">
              <div class="top-bar-left">
                <div class="top-bar-text">
                  <a href="tel:317-623-4003" class="font-medium display-inline" style="color: #d31037;">Call 317-623-4003</a> for Telehealth consult to qualify for insurance covered COVID 19 testing
                </div>
              </div>
              <div class="top-bar-right">
                <ul class="top-bar-info">
                  <li class="info-item">
                    <a href="tel:317-733-9454" class="info-link">
                      <i class="info-icon fa fa-phone" />
                      <span class="info-text"><strong>317-733-9454</strong></span>
                    </a>
                  </li>
                  <li class="info-item">
                    <i class="info-icon fa fa-map-marker-alt" />
                    <span class="info-text">5635 W. 96th St, Suite 300, Indianapolis, IN 46278</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fixed-header :threshold="300">
      <div class="header-bottom-wrap  bg-white header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header position-relative">
                <!-- brand logo -->
                <div class="header__logo">
                  <n-link to="/">
                    <img src="images/logo/AriaRed.png" class="img-fluid" alt="logo">
                  </n-link>
                </div>

                <div class="header-right">
                  <!-- navigation menu -->
                  <div class="header__navigation menu-style-three d-none d-xl-block">
                    <nav class="navigation-menu">
                      <AriaNavigation />
                    </nav>
                  </div>

                  <div class="header-search-form-two">
                    <div id="search-overlay-trigger" class="search-icon" @click="toggleClass('addClass', 'active')">
                      <a href="javascript:void(0)">
                        <i class="fa fa-search" />
                      </a>
                    </div>
                  </div>

                  <!-- mobile menu -->
                  <div id="mobile-menu-trigger" class="mobile-navigation-icon d-block d-xl-none" @click="mobiletoggleClass('addClass', 'active')">
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fixed-header>
  </div>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
import AriaNavigation from '@/components/aria/sub-components/AriaNavigation'
export default {
  components: {
    FixedHeader,
    AriaNavigation
  },
  methods: {
    // offcanvas mobilemenu open
    mobiletoggleClass (addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },

    toggleClass (addRemoveClass, className) {
      const el = document.querySelector('#search-overlay')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }
}
</script>
