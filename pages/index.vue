<template>
  <div class="main-container">
    <HeaderAria />

    <AboutPageHeader/>

  <div class="processing-hero bg-cover break-wrapper" style="margin-top: 15px; margin-bottom: 15px;">
      <div class="container">
        <div class="row align-items-center">
          <!--baseline-->
          <div class="col-lg-12">
            <div class=" wow move-up">
              <h6 style="color: black"><span style="color: #810831">ARIA DIAGNOSTICS</span> | <a style="text-decoration: underline; color: #de1a1b;" target="_blank" href="https://www.gravl.io">EMBLEEMA</a> | <a style="text-decoration: underline; color: #fe9b02;" target="_blank" href="https://embleema.com">GRAVL</a></h6>
              <h1 style="color: black" class="font-weight--heavy mb-15">
                $5M Department of Defense Contract
              </h1>
              <h6 style="color: black">Embleema, in partnership with GRAVL and Aria Diagnostics (ARIA), has secured a $5 million Department of Defense (DoD) contract to deploy ANTIDOT</h6>
              <p style="color: black">A pioneering biosecurity platform capable of real-time global pathogen detection.  This project marks a significant advancement in decentralized biosurveillance, enabling swift and coordinated responses to public health threats by linking/creating a distributed genomic network that is scalable, redundant and disaster-proof.</p>
              <div class="hero-button mt-30">
                <a href="https://aijourn.com/embleema-awarded-5m-department-of-defense-contract-partners-with-gravl-and-aria-diagnostics-to-create-global-pathogen-bio-surveillance-infrastructure/" target="_blank" class="btn btn--secondary" style="background-color: #810831; border-style: solid; border-width: 1px; border-color: white; ">
                  GET MORE INFORMATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

    <HomeBreakthrough/>

    <ServiceStyleThree />

    <AboutAriaFeatures />

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import HomeBreakthrough from '@/components/aria/HomeBreakthrough'
import HeaderAria from '@/components/aria/HeaderAria'
import AboutPageHeader from '@/components/aria/AboutPageHeader'

import ServiceStyleThree from '@/components/aria/sub-components/ServiceStyleThree'
import AboutAriaFeatures from '@/components/aria/AboutAriaFeatures'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
export default {
  components: {
    HeaderAria,
    AboutPageHeader,
    ServiceStyleThree,
    AboutAriaFeatures,
    AriaFooter,
    OffCanvasMobileMenu
  }
}
</script>
