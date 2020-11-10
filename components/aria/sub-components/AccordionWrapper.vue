<template>
  <div class="accordion-wrapper section-space--ptb_100">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="faq-wrapper faq-custom-col">
            <div class="section-title section-space--mb_40">
              <h6 class="section-sub-title mb-20">
                Our company
              </h6>
              <h3 class="heading">
                Our mission is to provide the <span> tools needed</span> to keep our community safe.
              </h3>
            </div>

            <div id="accordion">
              <b-card no-body>
                <b-card-header header-tag="header">
                  <b-button v-b-toggle.accordion-1 block class="faq-title">
                    How we can help.
                    <span>
                      <i class="fas fa-chevron-down" />
                      <i class="fas fa-chevron-up" />
                    </span>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion">
                  <b-card-body>
                    <b-card-text>
                      Aria aims to produce high quality drug testing results using professionally developed and validated methodologies designed to detect prescription narcotics, opiates/opioids, sedatives, gabapentanoids, antipsychotics/antidepressants, stimulants, and drugs of abuse.
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header">
                  <b-button v-b-toggle.accordion-2 block class="faq-title">
                    How we make managing a workplace easier.
                    <span>
                      <i class="fas fa-chevron-down" />
                      <i class="fas fa-chevron-up" />
                    </span>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" visible accordion="my-accordion">
                  <b-card-body>
                    <b-card-text>
                      You need a simple solution to manage your re-employment drug testing, random testing program, reasonable suspicion, post-incident and back-to-work drug and Covid-19 testing
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header">
                  <b-button v-b-toggle.accordion-3 block class="faq-title">
                    We can create custom operations.
                    <span>
                      <i class="fas fa-chevron-down" />
                      <i class="fas fa-chevron-up" />
                    </span>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" visible accordion="my-accordion">
                  <b-card-body>
                    <b-card-text>
                      Through the collaboration with clients in discussing your needs and demands, we're able to build a custom solution to whatever needs your company may have.
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="rv-video-section">
            <div class="ht-banner-01 ">
              <img class="img-fluid border-radus-5 animation_images one wow fadeInDown" src="/images/aria/home-col-2.jpg" alt="image">
            </div>

            <div class="ht-banner-02">
              <img class="img-fluid border-radus-5 animation_images two wow fadeInDown" src="/images/aria/home-col-4.jpg" alt="image">
            </div>

            <div class="main-video-box video-popup">
              <div class="video-link mt-30">
                <div class="single-popup-wrap">
                  <img class="img-fluid border-radus-5" src="/images/aria/home-col-1.jpg" alt="">
                </div>
              </div>
            </div>

            <div class="ht-banner-03">
              <img class="img-fluid border-radus-5 animation_images three wow fadeInDown" src="/images/aria/home-col-3.jpg" alt="image">
            </div>

            <div class="ht-banner-04">
              <img class="img-fluid border-radus-5 animation_images four wow fadeInDown" src="/images/aria/home-col-5.jpg" alt="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
