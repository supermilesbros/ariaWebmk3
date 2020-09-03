/* eslint-disable no-irregular-whitespace */
<template>
  <div id="accordion-scope">
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-one block class="btn-link">
            Specimen Adulteration
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
            Upon receipt a specimen is scanned and designated a unique lab accession number by ARIA’s Laboratory Information System (LIS) for the most reliable identification and tracking. An aliquot sample of the patients sample undergoes adulteration testing (pH, creatinine, specific gravity & oxidants) to ensure the sample’s integrity and that it has not been adulterated.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-two block class="btn-link">
            ​Presumptive Testing
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
            Presumptive testing or screening is a negative/positive result for specific drugs and/or their metabolites. ARIA employs an Automated Enzyme-linked Immunosorbent Assay (ELISA or EIA) system for this analysis. Specimens that test positive, or unexpected for drugs can be subjected to the definitive or confirmation phase.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-three block class="btn-link">
            Definitive Testing
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
            Definitive analyses using sophisticated, calibrated equipment with higher sensitivities provides the quantitative (ng/ml) result. Definitive, or confirmatory, testing may be performed on positive or unexpected results to corroborate the initial screening result. Definitive testing is conducted via High Performance Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS).
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-four block class="btn-link">
            Advanced Response Medical Review
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
            Following the specimen analyses ARIA will certify the results. Results are reviewed to identify any false or unexpected results as well as uncovering any cross-reactivity interference from structurally similar substances. ARIA applies CAP standards to our Quality Control and Quality Assurance, documenting throughout testing to help clients confidently and accurately maximize compliance and mitigate risk.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-five block class="btn-link">
            Drug Compliance Reporting
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-five" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            ARIA offers web, EMR and cloud-based reporting. Paperless reports can be delivered conveniently and securely to the customer. Sample analysis results are delivered in a comprehensive and easy-to-interpret report that highlights positive and inconsistent results. Certified technicians are available for consultation to clarify and explain the technical findings.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-six block class="btn-link">
            The ARIA Team
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-six" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Providing fast, accurate results requires a highly qualified, professional staff. Our team combines 70+ years of experience. ARIA uses the highest quality equipment and a world-class Laboratory Information System (LIS). Test results are released to clients after they are scrutinized and dual-data review approved. Customer confidentiality is paramount throughout each phase of testing, and thus ARIA uses an encrypted, HIPAA compliant portal.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
