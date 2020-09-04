<template>
  <div class="projects-wrapper pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <h2>Toxicology Education</h2>
        </div>
      </div>

      <div class="row pb-5">
        <div class="col-12">
          <div class="row row--35">
            <div class="col-lg-4 col-md-6 mt-30">
              <a href="images/aria/tox-benzo.webp" class="box-large-image__wrap wow move-up">
                <div class="box-large-image__box">
                  <div class="box-large-image__midea">
                    <div class="images-midea">
                      <img src="images/aria/tox-benzo.webp" class="img-fluid" alt="feature thumbnail">
                      <div class="button-wrapper">
                        <div class="btn tm-button">
                          <span class="button-text">Learn more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 mt-30">
              <a href="images/aria/opiods.webp" class="box-large-image__wrap wow move-up">
                <div class="box-large-image__box">
                  <div class="box-large-image__midea">
                    <div class="images-midea">
                      <img src="images/aria/opiods.webp" class="img-fluid" alt="feature thumbnail">
                      <div class="button-wrapper">
                        <div class="btn tm-button">
                          <span class="button-text">Learn more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 mt-30">
              <a href="images/aria/detectionWindow.webp" class="box-large-image__wrap wow move-up">
                <div class="box-large-image__box">
                  <div class="box-large-image__midea">
                    <div class="images-midea">
                      <img src="images/aria/detectionWindow.webp" class="img-fluid" alt="feature thumbnail">
                      <div class="button-wrapper">
                        <div class="btn tm-button">
                          <span class="button-text">Learn more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/helpfulLinks.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
