<template>
  <n-link :to="`/${project.link}`" class="projects-wrap style-01 wow move-up">
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
  </n-link>
</template>

<script>
export default {
  props: ['project']
}
</script>
