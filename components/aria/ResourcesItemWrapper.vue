<template>
  <div class="projects-wrapper section-space--ptb_100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <AriaSectionTitle class="text-center section-space--mb_40" :title="data.sectionTitle" :sub-title="data.sectionSubTitle" />
        </div>
      </div>

      <div class="row ">
        <div v-for="project in data.projects" :key="project.id" class="col-lg-4 col-md-6">
          <ResourcesItem :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/resources.json'
import AriaSectionTitle from '@/components/aria/sub-components/AriaSectionTitle'
import ResourcesItem from '@/components/aria/sub-components/ResourcesItem'

export default {
  components: {
    AriaSectionTitle,
    ResourcesItem
  },
  data () {
    return {
      data
    }
  }
}
</script>
