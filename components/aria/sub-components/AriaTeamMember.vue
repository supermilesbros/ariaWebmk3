<template>
  <div class="grid-item">
    <div class="ht-team-member">
      <div class="team-image">
        <img class="img-fluid" :src="teamMember.image" alt="team member">
        <div class="social-networks">
          <div class="inner">
            <a target="_blank" :href="teamMember.linkedinUrl" class=" hint--bounce hint--top hint--theme-two" aria-label="Linkedin"><i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div class="team-info ">
        <h5 class="name">
          {{ teamMember.name }}
        </h5>
        <div class="position">
          {{ teamMember.designation }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['teamMember']
}
</script>
