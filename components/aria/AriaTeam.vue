<template>
  <div class="team-member-wrapper section-space--pt_100 section-space--pb_70">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title section-space--mb_60 text-center">
            <h3 class="heading" v-html="data.leadershipHeading">
              {{ data.leadershipHeading }}
            </h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center ht-team-member-style-three">
        <div v-for="teamMember in data.teamMembers.slice(0, 4)" :key="teamMember.id" class="col-lg-6 col-md-6  text-center wow move-up">
          <AriaTeamMember :team-member="teamMember" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import data from '../../data/team.json'
import AriaTeamMember from '@/components/aria/sub-components/AriaTeamMember'

export default {
  components: {
    AriaTeamMember
  },
  data () {
    return {
      data
    }
  }
}
</script>
