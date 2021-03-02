<template>
  <div class="main-container">
    <HeaderAria />

    <div class="projects-wrapper pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center pb-5">
            <h2>Billing Information</h2>
          </div>
        </div>
      </div>
    </div>

    <div id="accordion-two" class="mx-5 faq-two-wrapper">
      <b-card no-body>
        <b-card-header header-tag="header">
          <h5 class="mb-0 font-weight--bold">
            <b-button v-b-toggle.accordion-one block class="btn-link">
              Aria Diagnostics's Billing Policy
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
              We have worked to reduce the costs of testing by negotiating in-network status with most major insurance companies, including Anthem and Blue Cross Blue Shield. Some individual insurance plans may hold the patient responsible for a portion of charges.

              The patient may receive an Explanation of Benefits from their insurance company and it is to be noted that this is not a bill, but a simple statement of services.
            </b-card-text>
            <b-card-text>
              ARIA Diagnostics does not participate in any fraudulent billing practices. We hold ourselves to a high ethical standard in the billing process, never having participated in unethical billing methods.
            </b-card-text>
            <b-card-text>
              If a balance is due on any patient accounts, the patient will receive a billing statement from PractiSource, ARIA’s billing company, on behalf of the lab from which the test was ordered. The statement will outline the application of any payments and insurance adjustments, and the patient responsibility. If a patient feels as if a claim was improperly processed, direct them to contact their insurance company.
            </b-card-text>
            <b-card-text>
              If a patient has any questions concerning their laboratory statement, please direct them to contact the billing company directly. The billing company telephone number will be listed on the Explanation of Benefits or billing statement.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header">
          <h5 class="mb-0 font-weight--bold">
            <b-button v-b-toggle.accordion-two block class="btn-link">
              Contracted Payors
              <span>
                <i class="far fa-caret-circle-down" />
                <i class="far fa-caret-circle-right" />
              </span>
            </b-button>
          </h5>
        </b-card-header>
        <b-collapse id="accordion-two" accordion="my-accordion">
          <b-card-body class="row">
            <div v-for="payors in data.payors" :key="payors.name" class="col-lg-4 col-md-6 col-sm-12">
              {{ payors.name }}
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/payors.json'
import HeaderAria from '@/components/aria/HeaderAria'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
export default {
  components: {
    HeaderAria,
    AriaFooter,
    OffCanvasMobileMenu
  },
  data () {
    return {
      breadcrumbNavigation: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Case Studies',
          active: true
        }
      ],
      data
    }
  },
  head () {
    return {
      title: 'Billing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About our description'
        }
      ]
    }
  }
}
</script>
