<template>
  <div class="feature-images-wrapper bg-gray section-space--ptb_100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-wrap text-center section-space--mb_10">
            <h6 class="section-sub-title mb-20">
              {{ data.serviceFour.sectionSubTitle }}
            </h6>
            <h3 class="heading" v-html="data.serviceFour.sectionTitle">
              {{ data.serviceFour.sectionTitle }}
            </h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="feature-images__two small-mt__10">
            <div class="modern-grid-image-box row row--30">
              <div
                v-for="service in data.services.slice(17, 19)"
                :key="service.id"
                class="single-item wow move-up col-lg-6 col-md-6 section-space--mt_60"
              >
                <ServiceItemStyleFour :service="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../../data/service.json";

import ServiceItemStyleFour from "@/components/aria/ServiceItemStyleFour";
export default {
  components: {
    ServiceItemStyleFour,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
