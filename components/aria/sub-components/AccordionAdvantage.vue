<template>
  <div id="accordion-two">
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-two block class="btn-link">
            Proven Test Accuracy
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
            ARIA Diagnostics combines Presumptive Immunoassay testing with
            Definitive LC-MS/MS testing to ensure the most accurate analysis
            possible. Following the specimen analyses, ARIA will certify the
            laboratory results. Results are reviewed to identify any false or
            unexpected results as well as uncovering any cross-reactivity
            interference from structurally similar substances. ARIA applies CAP
            standards to our Quality Control and Quality Assurance, documenting
            throughout testing to help physicians’ confidently and accurately
            maximize compliance and mitigate risk.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-three block class="btn-link">
            Specimen Collectors
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
            ARIA has trained specimen collectors upon request for observed and
            unobserved collection and courier services to help you accommodate
            the needs of our clients. Combined with Specimen Adulteration
            Testing, these added services help ensure your specimens are viable,
            preventing rejection.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-four block class="btn-link">
            Specialized Lab Requests
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
            ARIA offers assistance in developing compliance and testing protocol
            for many applications including pain management, adherence
            monitoring, rehab abstinence and workplace and student drug testing.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-five block class="btn-link">
            Web-based Online Portal
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
            ARIA's StratusDX Laboratory Information System offers web, EMR and
            cloud-based reporting. Paperless reports can be delivered
            conveniently and securely to the client. Sample analysis results are
            delivered in a comprehensive and easy-to-interpret report that
            highlights positive and inconsistent results. Test results are
            released to clients after they are scrutinized and dual data review
            approved. Patient confidentiality is paramount throughout each phase
            of testing, and thus ARIA uses an encrypted, HIPAA compliant,
            customer specific web portal. ARIA certified technicians are
            available for consultation to clarify and explain the technical
            findings.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-six block class="btn-link">
            Client Service Specialist
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
            Our greatest asset is our staff. Providing fast, accurate, and
            secure results requires highly qualified, professional lab
            personnel. In the field, we rely on our professional and motivated
            team of client service specialists to help you navigate testing
            needs. We apply CAP standards to quality control and quality
            assurance, documenting throughout testing to help clients'
            confidently and accurately maximize compliance and mitigate risk.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
