/* eslint-disable no-irregular-whitespace */
<template>
  <div id="accordion-scope">
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-one block class="btn-link">
            Why is LC-MS technology used, rather than GCMS?
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
            Although both technologies are used to separate (via chromatography) and identify (via mass spectrometry) chemicals from within a mixture, LC-MS is more commonly used in the field of toxicology and pharmacokinetics to identify biological molecules and metabolites. LC-MS offers higher throughput, easier sample preparation, and the ability to analyze thermally unstable analytes that are soluble in a liquid phase, such as those found in biological fluids.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-two block class="btn-link">
            Can urine confirmations be ordered as a single class (à la carte) or must they be ordered as a panel?
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
            The tests can be ordered either as panels or as individual analytes (please see report for a full list of analytes). With LC-MS technology multiple analytes are processed per run, so data from all analytes in that panel are collected; however, only the analyte(s) of interest are reported. For example, if you were interested in methadone, we would only provide data for methadone and its metabolite EDDP. Data from the other analytes in the panel would be collected, though not reported, and the report would state “additional analytes detected, please contact laboratory for additional data.”
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-three block class="btn-link">
            What manufacturer do you use for your LC-MS/MS instrumentation?
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
            The lab uses a Shimadzu HPLC and a SCIEX 4500 LC-MS/MS. The LC-MS/MS is run in two configurations to improve overall performance and sensitivity.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-four block class="btn-link">
            Can you supply me with a list of lower and upper limits of detection for all analytes you test for?
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
            The limits of detection are listed on the report. All of the analytes have been validated for 1:5, 1:10, and 1:50 dilutions.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-five block class="btn-link">
            What volume of urine is required for a class of drugs (e.g. opiates)?
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
            We request a volume of 5 mL be collected and submitted. Although as little as 1.5 mL of urine is required to run all of our analytes, additional samples may be necessary to account for preparation and/or for re-analysis.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-six block class="btn-link">
            How do you test for sample validity? (e.g. what does the presence of oxidants indicate on the report?)
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
            While tampering with specimens is not common, it is necessary to ensure that the samples we test have not been diluted or adulterated. The presence of oxidants, for example, is one such indicator. Human urine should not have oxidants, but in some cases household products such as bleach, soap, etc. are mixed with the sample to interfere with the assay. A test for oxidants will detect these and if so, be indicated on the report.
          </b-card-text>
          <b-card-text>
            Other parameters are also checked to verify the integrity of the sample. Temperature is checked using the collection cup where green indicates that it is within biological range. Altering the pH of the sample might be done to degrade drugs present in the urine, therefore pH is tested to determine if it is in the biological range. A normal urine specimen has a pH between 5 and 8. Lastly, samples are tested for creatinine which is normally present in urine. It is used to normalize concentrations of drug results but if it is absent or very low, it may also indicate intentional dilution of sample. The physician will be notified of this result.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-seven block class="btn-link">
            Where will the testing of our specimens take place?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-seven" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Testing is performed at our headquarters located at: 5635 W. 96th Street, Suite 300, Indianapolis, IN 46278.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-eight block class="btn-link">
            How will the specimens be shipped to this location?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-eight" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            We use FedEx and UPS for all of our customers located more than 25 miles away. For larger volumes, a courier may be required.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-nine block class="btn-link">
            Do you offer med matching?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-nine" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Yes, we can track the patient’s medications and match these to the test results.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-ten block class="btn-link">
            Do you offer a toxicology hotline?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-ten" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            A toxicologist is available and can be reached directly by phone from 7AM until 6PM, Monday through Friday (317-733-9454 x107). Additionally, our medical director is available by appointment, usually within 12 hours. We can also be reached at: labsupport@ariadxs.com
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-eleven block class="btn-link">
            What is CAP accreditation?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-eleven" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            According to the College of American Pathologists, “the CAP Laboratory Accreditation Program's goal is to improve patient safety by advancing the quality of pathology and laboratory services through education, standard setting, and ensuring laboratories meet or exceed regulatory requirements.” CAP accreditation helps labs meet regulatory requirements by ensuring compliance and maintaining the accuracy of test results to ensure accurate diagnoses for patients.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-twelve block class="btn-link">
            Do you place specimen collectors within offices?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-twelve" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Yes, although specimen collection is rather simple. In lieu of a dedicated sample collector, we can train your staff to efficiently collect and store the samples to minimize any inconvenience.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-thirteen block class="btn-link">
            How long do you keep the specimens after testing?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-thirteen" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            • Urine – Two weeks, unless otherwise specified
          </b-card-text>
          <b-card-text>
            • Oral swabs – One month, unless otherwise specified
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-fourteen block class="btn-link">
            Have you interfaced your demographics and results with Electronic Medical Records (EMR)?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-fourteen" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            We can interface with any HL-7 based system; however, our system is flexible and therefore we are not restricted to specific EMRs.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-fifteen block class="btn-link">
            Do you offer any support or help with the interpretation of results?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-fifteen" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            For added decision-making confidence, experienced toxicology specialists are available to help consult and interpret the results. Available by phone to answer any medication monitoring questions, they offer expertise and knowledge in the areas of pain medication toxicology, illicit drug toxicology, and drug testing science.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-sixteen block class="btn-link">
            Do you monitor how frequently patients are getting tested?
            <span>
              <i class="far fa-caret-circle-down" />
              <i class="far fa-caret-circle-right" />
            </span>
          </b-button>
        </h5>
      </b-card-header>
      <b-collapse id="accordion-sixteen" accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Yes, we can generate reports indicating which patients have not provided a sample within any given time frame (e.g. 30 or 90 days).
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
