<template>
  <div class="feature-images-wrapper bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="feature-images__five resolutions-hero-bottom">
            <div class="row">
              <div v-for="service in data.services" :key="service.id" class="col-lg-4 col-md-6 wow move-up">
                <HomePageCardItem :service="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/homeCardData.json'

import HomePageCardItem from '@/components/aria/sub-components/HomePageCardItem'
export default {
  components: {
    HomePageCardItem
  },
  data () {
    return {
      data
    }
  }
}
</script>
