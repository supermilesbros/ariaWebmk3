<template>
  <div class="about-banner-wrap banner-space about-us-bg bg-cover" :style="{ backgroundImage: `url('images/aria/contact-hero.jpg')` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ml-auto mr-auto">
          <div class="about-banner-content text-center">
            <h1 class="mb-15 text-white">
              CONTACT US
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'breadcrumbTitle']
}
</script>
