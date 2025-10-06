<template>
  
  <div class="about-banner-wrap banner-space about-us-bg bg-cover" :style="{ backgroundImage: `url('images/aria/about-hero.jpg')` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ml-auto mr-auto">
          <div class="about-banner-content text-center">
            <h1 class="mb-15 text-white">
              ARIA DIAGNOSTICS
            </h1>
            <h5 class="font-weight--normal text-white">
              Accelerating clinical testing through a fully integrated central laboratory led by innovative experts.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subTitle', 'bgImg']
}
</script>
