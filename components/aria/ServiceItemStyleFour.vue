<template>
  <n-link :to="`/${service.link}`" class="ht-box-images style-02">
    <div class="image-box-wrap">
      <div class="box-image">
        <img class="img-fulid" :src="service.icon" alt="icon">
      </div>
      <div class="content">
        <h6 class="heading">
          {{ service.heading }}
        </h6>
      </div>
    </div>
  </n-link>
  <!-- <div class="ht-box-images style-02">
    <div class="image-box-wrap">
      <div class="box-image">
        <img class="img-fulid" :src="service.icon" alt="icon">
      </div>
      <div class="content">
        <h6 class="heading">
          {{ service.heading }}
        </h6>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: ['service']
}
</script>
