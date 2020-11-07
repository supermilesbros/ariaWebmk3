<template>
  <div class="projects-wrapper projectinfotechno-bg section-space--ptb_100" :style="{ backgroundImage: `url('images/patterns/mitech-home-infotechno-case-study-section-bg.png')` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <AriaSectionTitle class="text-center section-space--mb_40" :title="data.sectionTitle" :sub-title="data.sectionSubTitle" />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="projects-wrap">
            <swiper :options="swiperOption">
              <div v-for="project in data.projects" :key="project.id" class="swiper-slide">
                <ResourcesFeatureItem :project="project" />
              </div>
            </swiper>
            <div class="swiper-pagination swiper-pagination-project mt_20" />
          </div>
          <div class="section-under-heading text-center section-space--mt_40">
            {{ data.underHeading }}
            <n-link to="/CovidTesting">
              GET TESTED TODAY!
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/caseStidies.json'
import AriaSectionTitle from '@/components/aria/sub-components/AriaSectionTitle'
import ResourcesFeatureItem from '@/components/aria/sub-components/ResourcesFeatureItem'

export default {
  components: {
    AriaSectionTitle,
    ResourcesFeatureItem
  },
  data () {
    return {
      data,
      swiperOption: {
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination-project',
          type: 'bullets',
          clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
          1200: {
            slidesPerView: 3
          },

          768: {
            slidesPerView: 2
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>
