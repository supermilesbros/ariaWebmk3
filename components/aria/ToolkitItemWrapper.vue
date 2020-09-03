<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <p>THE PURPOSE OF THIS PLAN IS TO OUTLINE THE STEPS THAT EVERY EMPLOYER AND EMPLOYEE CAN TAKE TO REDUCE THE RISK OF EXPOSURE TO COVID-19. THE PLAN DESCRIBES HOW TO PREVENT WORKER EXPOSURE TO CORONAVIRUS, PROTECTIVE MEASURES TO BE TAKEN AT WORK, AND WORK PRACTICE CONTROLS TO BE USED, CLEANING AND DISINFECTING PROCEDURES, AND WHAT TO DO IF A WORKER BECOMES SICK. </p>
        </div>
      </div>

      <div class="row">
        <div v-for="project in data.projects" :key="project.id" class="col-lg-6 col-md-6">
          <a :href="project.image" class="projects-wrap style-01 wow move-up">
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
