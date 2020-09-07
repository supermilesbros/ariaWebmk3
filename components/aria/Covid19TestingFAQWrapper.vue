<template>
  <div class="projects-wrapper pt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h6>More Covid-19 Testing Resources</h6>
        </div>
      </div>

      <div class="row">
        <div class="pb-5 col-lg-12">
          <div class="feature-list-button-box mt-30 text-center">
            <a href="/IgGAnitbodyTestFAQs.pdf" class="ht-btn ht-btn-md">
              IgG Test FAQ
            </a>
            <a href="/COVID-19FAQs.pdf" class="ht-btn ht-btn-md ht-btn--outline">
              PCR Test FAQ
            </a>
            <a href="https://b2092daf-f52f-4aaf-b359-f8e1a2285be4.filesusr.com/ugd/9041d5_b737eaaadb354e53b43f843723643e01.pdf" class="ht-btn ht-btn-md">
              Sample IgG Test Results
            </a>
            <a href="https://b2092daf-f52f-4aaf-b359-f8e1a2285be4.filesusr.com/ugd/9041d5_96f2717245fa41d2b5aa4a86a367227e.pdf" class="ht-btn ht-btn-md ht-btn--outline">
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
