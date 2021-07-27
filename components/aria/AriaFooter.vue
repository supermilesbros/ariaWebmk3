<template>
  <div class="footer-area-wrapper bg-gray">
    <div class="footer-area section-space--ptb_80">
      <div class="container">
        <div class="row footer-widget-wrapper">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <AriaFooterAbout :footer-about="data.footerAboutData" />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <AriaFooterWidgetLink :title="data.footerWidgetTitleOne" :nav-lists="data.navListOne" />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <AriaFooterWidgetLink :title="data.footerWidgetTitleTwo" :nav-lists="data.navListTwo" />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 footer-widget">
            <AriaFooterWidgetLink :title="data.footerWidgetTitleThree" :nav-lists="data.navListThree" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright-area section-space--pb_30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-left">
            <span class="copyright-text">{{ data.footerBottom.copyright }}</span>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <ul class="list ht-social-networks solid-rounded-icon">
              <li class="item">
                <a :href="data.footerBottom.linkedinUrl" target="_blank" aria-label="Linkedin" class="social-link hint--bounce hint--top hint--primary">
                  <i class="fab fa-linkedin link-icon" />
                </a>
              </li>
              <li class="item">
                <a :href="data.footerBottom.fbUrl" target="_blank" aria-label="Facebook" class="social-link hint--bounce hint--top hint--primary">
                  <i class="fab fa-facebook-f link-icon" />
                </a>
              </li>
              <li class="item">
                <a :href="data.footerBottom.instagramUrl" target="_blank" aria-label="Instagram" class="social-link hint--bounce hint--top hint--primary">
                  <i class="fab fa-instagram link-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/footer.json'

import AriaFooterAbout from '@/components/aria/sub-components/AriaFooterAbout'
import AriaFooterWidgetLink from '@/components/aria/sub-components/AriaFooterWidgetLink'
export default {
  components: {
    AriaFooterAbout,
    AriaFooterWidgetLink
  },
  data () {
    return {
      data
    }
  }
}
</script>
