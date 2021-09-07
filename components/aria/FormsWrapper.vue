<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <h2>Laboratory Forms</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="form in forms" :key="form.id" class="col-lg-4 col-md-4">
          <a :href="form.url" target="_blank" class="projects-wrap style-01 wow move-up">
            <div class="projects-image-box">
              <div class="content text-color-primary">
                <h6 class="heading">
                  {{ form.heading }}
                </h6>
                <div class="box-projects-arrow">
                  <span class="button-text">Coming Soon </span>
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
export default {
  data () {
    return {
      forms: [
        {
          id: 1,
          image: '/btwBest.pdf',
          heading: 'Respiratory Conditions (COVID-19) Laboratory Order Form',
          category: 'Information Technology',
          desc: '',
          url: ''
        },
        {
          id: 2,
          image: '/workQF.pdf',
          heading: 'Molecular Analysis Laboratory Order Form',
          category: 'Cyber Security',
          desc: '',
          url: ''
        },
        {
          id: 3,
          heading: 'Toxicology Laboratory Order Form',
          category: 'Web Development',
          desc: '',
          url: ''
        },
        {
          id: 4,
          heading: 'Blood Chemistry Laboratory Order Form',
          category: 'Cyber Security',
          desc: '',
          url: ''
        }
      ]

    }
  }
}
</script>
