<template>
  <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_one" :style="{ backgroundImage: `url('images/patterns/mitech-call-to-action-image-global.png')` }">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-8 col-lg-7">
          <div class="cta-content md-text-center">
            <h3 class="heading text-white" v-html="data.ctaOne.title">
              {{ data.ctaOne.title }}
            </h3>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="cta-button-group--one text-center">
            <n-link to="/contact" class="btn btn--white btn-one">
              <span class="btn-icon mr-2"><i class="far fa-comment-alt-dots" /></span> Let's talk
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/cta.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
