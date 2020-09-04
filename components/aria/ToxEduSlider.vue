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
              <div class="swiper-slide">
                <n-link to="#" class="projects-wrap style-01 wow move-up">
                  <div class="projects-image-box">
                    <div class="content text-color-primary">
                      <h6 class="heading">
                        First
                      </h6>
                      <div class="text">
                        Second
                      </div>
                      <div class="box-projects-arrow">
                        <span class="button-text">View </span>
                        <i class="fa fa-long-arrow-right ml-1" />
                      </div>
                    </div>
                  </div>
                </n-link>
              </div>
              <div class="swiper-slide">
                <n-link to="#" class="projects-wrap style-01 wow move-up">
                  <div class="projects-image-box">
                    <div class="content text-color-primary">
                      <h6 class="heading">
                        2nd box
                      </h6>
                      <div class="text">
                        Second
                      </div>
                      <div class="box-projects-arrow">
                        <span class="button-text">View </span>
                        <i class="fa fa-long-arrow-right ml-1" />
                      </div>
                    </div>
                  </div>
                </n-link>
              </div>
            </swiper>
            <div class="swiper-pagination swiper-pagination-project mt_20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/caseStidies.json'
import AriaSectionTitle from '@/components/aria/sub-components/AriaSectionTitle'

export default {
  components: {
    AriaSectionTitle
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
