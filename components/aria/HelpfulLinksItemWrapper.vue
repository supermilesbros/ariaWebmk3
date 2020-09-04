<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <h2>Helpful Links</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="links in data.links" :key="links.id" class="col-lg-4 col-md-4">
          <a :href="links.url" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading">
                  {{ links.heading }}
                </h6>
                <div class="text">
                  {{ links.desc }}
                </div>
                <div class="box-projects-arrow">
                  <span class="button-text">View </span>
                  <i class="fa fa-long-arrow-right ml-1" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/helpfulLinks.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
