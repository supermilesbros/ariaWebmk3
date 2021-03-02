<template>
  <div>
    <!-- Calendly inline widget begin -->
    <client-only>
      <div class="calendly-inline-widget" data-url="https://calendly.com/aria-pcrtest" style="min-width:320px;height:630px;" />
    <!-- Calendly inline widget end -->
    </client-only>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'PCR Scheduler Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About our description'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
