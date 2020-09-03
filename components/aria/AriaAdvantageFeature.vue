<template>
  <div class="feature-icon-wrapper section-space--ptb_100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <AriaSectionTitle class="text-center section-space--mb_40" :title="data.serviceStyleTwo.sectionTitle" :sub-title="data.serviceStyleTwo.sectionSubTitle" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="feature-list__two">
            <div class="row">
              <div v-for="service in data.services.slice(6, 12)" :key="service.id" class="col-lg-4 col-md-6 wow move-up">
                <AdvantageItem :service="service" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="feature-list-button-box mt-30 text-center">
            <n-link to="/contact" class="ht-btn ht-btn-md">
              Talk to a consultant
            </n-link>
            <n-link to="/contact" class="ht-btn ht-btn-md ht-btn--outline">
              Contact us now
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/service.json'

import AriaSectionTitle from '@/components/aria/sub-components/AriaSectionTitle'
import AdvantageItem from '@/components/aria/sub-components/AdvantageItem'
export default {
  components: {
    AriaSectionTitle,
    AdvantageItem
  },
  data () {
    return {
      data
    }
  }
}
</script>
