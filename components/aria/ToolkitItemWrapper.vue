<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <p>The purpose of this plan is to outline the steps that every employer and employee can take to reduce the risk of exposure to covid-19. The plan describes how to prevent worker exposure to coronavirus, protective measures to be taken at work, and work practice controls to be used, cleaning and disinfecting procedures, and what to do if a worker becomes sick. </p>
        </div>
      </div>

      <div class="row">
        <div v-for="project in data.projects" :key="project.id" class="col-lg-6 col-md-6">
          <a :href="project.image" target="_blank" class="projects-wrap style-01 wow move-up">
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
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/toolKit.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
