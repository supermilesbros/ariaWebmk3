<template>
  <div class="projects-wrapper pt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h6>More COVID-19 Testing Resources</h6>
        </div>
      </div>

      <div class="row">
        <div class="pb-5 col-lg-12">
          <div class="feature-list-button-box mt-30 text-center">
            <a style="width: 250px;" href="/doctorOrder.pdf" target="_blank" class="ht-btn ht-btn-md ht-btn">
              Physician Order Form
            </a>
            <a href="/COVID-19FAQs.pdf" target="_blank" class="ht-btn ht-btn-md ht-btn" style="width: 250px;">
              PCR Test FAQ
            </a>
            <a style="width: 250px;" href="/pcrSampleResults.pdf" target="_blank" class="ht-btn ht-btn-md ht-btn">
              Sample PCR Test Results
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/covidTestingFAQ.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
