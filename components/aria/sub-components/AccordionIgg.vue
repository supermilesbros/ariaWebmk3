<template>
  <div id="accordion-two">
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-one block class="btn-link">
            SARS-COV2- IMMUNOASSAYS (IgG)
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-one" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            The SARS-COV2- IMMUNOASSAYS (IgG) can provide a broader picture of the SARS-CoV-2 virus such that if someone has been previously infected with the virus it can show up in the body long after the initial infection.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-two block class="btn-link">
            Swab Testing
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-two" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            While molecular testing (swab testing) can identify people currently infected with the virus, only the antibody test can tell whether someone has been previously infected. This type of information will help scientists better understand how long these antibodies stay in the body and if they provide immunity.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-three block class="btn-link">
            FDA Approved
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-three" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            The IgG Antibody test that Aria Diagnostics uses is the only FDA approved test for detecting the SARS-COV2-IgG Antibody at this point in time.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-four block class="btn-link">
            IgM Antibody Test
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-four" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            It is important to note that a similar test called the IgM antibody test is unreliable and has not been approved by the FDA, the China’s Center for Medical Device Evaluation, or the NMPA, which is China’s equivalent of the U.S. Food and Drug Administration. These tests, supplied by Chinese manufacturers, are unreliable and can produce false results (either negative or positive).
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
