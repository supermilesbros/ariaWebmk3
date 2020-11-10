<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div v-for="project in data.press" :key="project.id" class="col-lg-4 col-md-6">
          <nuxt-link :to="project.link" target="_blank" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading">
                  {{ project.heading }}
                </h6>
                <div class="text">
                  {{ project.desc }}
                </div>
                <div class="box-projects-arrow">
                  <span class="button-text">View </span>
                  <i class="fa fa-long-arrow-right ml-1" />
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/press.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
