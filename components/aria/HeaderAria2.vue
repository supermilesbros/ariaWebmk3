<template>
  <div class="header-area">
    <fixed-header :threshold="300">
      <div class="header-bottom-wrap  bg-white header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header position-relative">
                <!-- brand logo -->
                <div class="header__logo">
                  <n-link to="/">
                    <img src="images/logo/ARIARed.png" class="img-fluid" alt="logo">
                  </n-link>
                </div>

                <div class="header-right">
                  <!-- navigation menu -->
                  <div class="header__navigation menu-style-three d-none d-xl-block">
                    <nav class="navigation-menu">
                      <AriaNavigation />
                    </nav>
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
