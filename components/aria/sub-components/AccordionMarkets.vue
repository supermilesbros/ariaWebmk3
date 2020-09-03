<template>
  <div id="accordion-scope">
    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-one block class="btn-link">
            Pain Management
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
            Urine drug testing (UDT) is a useful tool in pain management that provides valuable objective information to assist in diagnostic and therapeutic decision-making. Results of a UDT provide presumptive and definitive analyses of the agreed-upon treatment plan (adherence/compliance). UDT can help diagnose relapse or drug misuse as early as possible.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-two block class="btn-link">
            Addiction Medicine
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
            Addiction is a chronic disease that while not curable, is treatable. Once stabilized, patient’s recover in their natural environment. While transitioning to on-going recovery drug testing can be utilized, in conjunction with medical detoxification, medication-assisted treatment, psychiatric assessment and behavioral relapse prevention. Drug testing can be imperative to ensure addiction patients comply with an expert wellness and recovery program. It can also alert caregivers to patient relapses and potentially dangerous drug interactions and other complications. This is especially important when prescribing medications like buprenorphine (Suboxone® and Subutex®), antipsychotic and/or antidepressant medications to address chronic illnesses and comorbities. Addiction monitoring can be an important adjunct to behavior therapy.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-three block class="btn-link">
            Medication Monitoring
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
            The goal of adherence monitoring or therapeutic drug monitoring is to confirm the patient is complying with a medication regimen, while also ensuring the patient is avoiding potentially dangerous drug interactions and other complications. This is especially important for those taking large numbers of medications to address chronic illnesses and comorbities. Taking multiple medications is known as poly-pharmacy, and it is particularly common among older adults, as they are more likely to need medications to manage an array of chronic conditions.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-four block class="btn-link">
            Pre and Post Operative
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
            If a surgeon is potentially going to prescribe pain medication post operatively it can be beneficial to screen patients pre & post operatively to establish a baseline and ensure they are not treating any patients on illicits. UDT can also be a valuable tool for screening patients prior to involving anesthesia. Post operatively it is important to maintain the correct medication regimen and to make sure patients aren’t self-medicating. It's important to know about any tobacco, alcohol, illegal drugs, or medicines taken prior to surgery. This includes over-the-counter medicines, vitamins, and supplements, such as St. John's wort and diet aids. Use of substances or medicines may affect a patient’s reaction to anesthesia or pain medicines
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-five block class="btn-link">
            Drug Testing
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
            A drug test is a technical analysis of a biological specimen, for example urine, hair, blood, breath air, sweat, or oral fluid/saliva, to determine the presence or absence of specified parent drugs or their metabolites. Major applications of drug testing include detection of performance enhancing drugs in sports, workplace compliance and student screening for illicit drugs.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <h5 class="mb-0 font-weight--bold">
          <b-button v-b-toggle.accordion-six block class="btn-link">
            Designer Drugs
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
            Upon request ARIA Diagnostics can provide extensive testing options for Designer Drugs. Designer Drugs are synthetic or manmade drugs that are usually produced in a laboratory. They may be derivatives of popular known drugs, including both illegal drugs and prescription medications, or they may be designed to simulate the effects of such drugs. In many cases, they are stronger and more dangerous than the drugs they are designed to resemble. Drugs like Flakka (bath salts), Molly (MDMA), Ketamine and synthetic cannabis (K2, Spice) are constantly emerging and evolving.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
