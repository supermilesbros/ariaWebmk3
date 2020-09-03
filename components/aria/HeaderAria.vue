<template>
  <div class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header position-relative">
            <!-- brand logo -->
            <div class="header__logo top-logo">
              <n-link to="/">
                <img src="images/logo/ARIARed.png" class="img-fluid" alt="Brand Logo">
              </n-link>
            </div>

            <div class="header-right flexible-image-slider-wrap">
              <div id="hidden-icon-wrapper" class="header-right-inner">
                <!-- Header Search Form -->
                <div class="header-search-form d-md-none d-block">
                  <form class="search-form-top">
                    <input class="search-field" type="text" placeholder="Search…">
                    <button class="search-submit">
                      <i class="search-btn-icon fa fa-search" />
                    </button>
                  </form>
                </div>

                <!-- Header Top Info -->
                <div class="header-top-info-slider-werap top-info-slider__container">
                  <div class="header-top-info-inner default-color">
                    <swiper :options="swiperOption">
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-phone" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              317-733-9454
                            </h6>
                            <div class="info-sub-title">
                              labsupport@airadxs.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-map-marker-alt" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              5635 W. 96th St, Suite 300
                            </h6>
                            <div class="info-sub-title">
                              Indianapolis, IN 46278
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="info-item">
                          <div class="info-icon">
                            <span class="fa fa-clock" />
                          </div>
                          <div class="info-content">
                            <h6 class="info-title">
                              8:00AM - 5:00PM
                            </h6>
                            <div class="info-sub-title">
                              Monday to Friday
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper>
                  </div>
                </div>

                <!-- Header Social Networks -->
                <div class="header-social-networks style-icons">
                  <div class="inner">
                    <a class=" social-link hint--black hint--bottom-left" aria-label="Twitter" href="https://twitter.com/AriaDiagnostics" data-hover="Twitter" target="_blank">
                      <i class="social-icon fab fa-twitter" />
                    </a>
                    <a class=" social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://www.facebook.com/ARIADiagnostics" data-hover="Facebook" target="_blank">
                      <i class="social-icon fab fa-facebook-f" />
                    </a>
                    <a class=" social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://www.instagram.com/ariadiagnostics/" data-hover="Instagram" target="_blank">
                      <i class="social-icon fab fa-instagram" />
                    </a>
                    <a class=" social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://www.linkedin.com/company/aria-diagnostics-llc/" data-hover="Linkedin" target="_blank">
                      <i class="social-icon fab fa-linkedin" />
                    </a>
                  </div>
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

    <fixed-header :threshold="300">
      <div class="header-bottom-wrap bg-theme-default d-lg-block d-none">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-bottom-inner">
                <div class="header-bottom-left-wrap">
                  <!-- navigation menu -->
                  <div class="header__navigation d-none d-xl-block">
                    <nav class="navigation-menu navigation-menu--text_white">
                      <AriaNavigation />
                    </nav>
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
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoplay: true,
        spaceBetween: 30,
        breakpoints: {
          1200: {
            slidesPerView: 3
          },

          992: {
            slidesPerView: 2
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  mounted () {
    (function (d, m) {
      const kommunicateSettings =
            { appId: '38cbaee05dc3f5c4448d0319dfa307d2c', popupWidget: true, automaticChatOpenOnNavigation: true }
      const s = document.createElement('script'); s.type = 'text/javascript'; s.async = true
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app'
      const h = document.getElementsByTagName('head')[0]; h.appendChild(s)
      window.kommunicate = m; m._globals = kommunicateSettings
    })(document, window.kommunicate || {})
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
    }
  }
}
</script>
