<template>
  <div class="testimonial-slider-area section-space--ptb_120 bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <AriaSectionTitle class="text-center section-space--mb_60" :title="data.sectionTitle" :sub-title="data.sectionSubTitle" />
          <div class="testimonial-slider">
            <div class="testimonial-slider__container">
              <div class="testimonial-slider__wrapper">
                <swiper :options="swiperOption">
                  <div v-for="testimonial in data.testimonials" :key="testimonial.id" class="swiper-slide">
                    <div class="testimonial-slider__one wow move-up">
                      <div class="testimonial-slider--info">
                        <div class="testimonial-slider__media">
                          <img :src="testimonial.thumb" class="img-fluid" alt="client thumbnail">
                        </div>
                        <div class="testimonial-slider__author">
                          <div class="testimonial-rating">
                            <span class="fa fa-star" />
                            <span class="fa fa-star" />
                            <span class="fa fa-star" />
                            <span class="fa fa-star" />
                            <span class="fa fa-star" />
                          </div>
                          <div class="author-info">
                            <h6 class="name">
                              {{ testimonial.name }}
                            </h6>
                            <span class="designation">{{ testimonial.designation }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="testimonial-slider__text">
                        {{ testimonial.desc }}
                      </div>
                    </div>
                  </div>
                </swiper>
              </div>
            </div>
            <div slot="button-prev" class="swiper-button-prev pr-5" style="color: #c12443" />
            <div slot="button-next" class="swiper-button-next pl-5" style="color: #c12443" />
            <div class="swiper-pagination swiper-pagination-t01 section-space--mt_30" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/testimonial.json'
import AriaSectionTitle from '@/components/aria/sub-components/AriaSectionTitle'

export default {
  components: {
    AriaSectionTitle
  },
  data () {
    return {
      data,
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination-t01',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {

          992: {
            slidesPerView: 2
          },

          320: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>
