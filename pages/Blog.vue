<template>
  <div class="main">
    <HeaderAria />
    <div class="projects-wrapper section-space--ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <AriaSectionTitle
              class="text-center section-space--mb_40"
              title="Blog Articles"
              sub-title="Aria Diagnostics"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            <n-link to="/Chronic-Pain" class="projects-wrap style-01">
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">Chronic Pain</h6>
                  <div class="text">
                    &quot;Chronic pain is a significant health concern in the
                    United States.....&quot;
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>

          <div class="col-lg-6 col-md-6">
            <n-link to="/POC-Advantages" class="projects-wrap style-01">
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">POC Advantages</h6>
                  <div class="text">
                    &quot;In-office diagnostic testing allows for more
                    personalized and targeted treatment...&quot;
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>
          <div class="col-lg-6 col-md-6">
            <n-link to="/Central-Labs" class="projects-wrap style-01">
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">Centralized Labs</h6>
                  <div class="text">
                    &quot;Standardization is key to ensuring the accuracy and
                    reliability of clinical trial data....&quot;
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>
          <div class="col-lg-6 col-md-6">
            <n-link to="/ENFD-Testing" class="projects-wrap style-01">
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">ENFD Testing</h6>
                  <div class="text">
                    &quot;ENFD testing is a crucial tool in the diagnosis and
                    management of idiopathic peripheral neuropathy.....&quot;
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>
          <div class="col-lg-6 col-md-6">
            <n-link to="/Picking-The-Right" class="projects-wrap style-01">
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">Picking the Right Partner</h6>
                  <div class="text">
                    &quot;Clinical trials are a complex and time-consuming
                    process. From start to finish.....&quot;
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>
          <div class="col-lg-6 col-md-6">
            <n-link
              to="/Reimbursemen-Medical-Necessity-for-UDS"
              class="projects-wrap style-01"
            >
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">
                    Medical Necessity for Urine Drug Screens in Pain Management
                  </h6>
                  <div class="text">
                    Open communication and collaboration between healthcare
                    providers and payers are essential
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>
          <div class="col-lg-6 col-md-6">
            <n-link
              to="/rethinking-the-necessity"
              class="projects-wrap style-01"
            >
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">
                    Rethinking the Necessity of D and L Isomer Testing as a
                    Follow-Up to Positive Methamphetamine Results in LCMS Urine
                    Drug Testing
                  </h6>
                  <div class="text" />
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>

          <div class="col-lg-6 col-md-6">
            <n-link
              to="/pitfalls-high-complexity-pol"
              class="projects-wrap style-01"
            >
              <div class="projects-image-box">
                <div class="content text-color-primary">
                  <h6 class="heading">
                    The Pitfalls of a High Complexity POL for LCMS Urine Drug
                    Testing
                  </h6>
                  <div class="text">
                    Open communication and collaboration between healthcare
                    providers and payers are essential
                  </div>
                  <div class="box-projects-arrow">
                    <span class="button-text">View </span>
                    <i class="fa fa-long-arrow-right ml-1" />
                  </div>
                </div>
              </div>
            </n-link>
          </div>
        </div>
      </div>
    </div>
    <AriaFooter />
  </div>
</template>

<script>
import data from "../data/resources.json";
import AriaSectionTitle from "@/components/aria/sub-components/AriaSectionTitle";
import HeaderAria from "@/components/aria/HeaderAria";
import AriaFooter from "@/components/aria/AriaFooter";

export default {
  components: {
    AriaSectionTitle,
    HeaderAria,
    AriaFooter,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
