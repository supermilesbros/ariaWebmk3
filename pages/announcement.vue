<template>
  <div class="main-container">
    <HeaderAria />
    <div class="blog-pages-wrapper section-space--ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Post Feature Start -->
            <div class="post-feature blog-thumbnail  wow move-up">
              <img class="img-fluid" src="/images/aria/press1.jpg" alt="Blog Images">
            </div>
            <!-- Post Feature End -->
          </div>
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="main-blog-wrap">
              <!--======= Single Blog Item Start ========-->
              <div class="single-blog-item  wow move-up">
                <!-- Post info Start -->
                <div class="post-info lg-blog-post-info">
                  <div class="post-categories text-center">
                    <n-link to="/blog">
                      Latest News
                    </n-link>
                  </div>

                  <h3 class="post-title text-center">
                    Aria Diagnostics Announces COVID-19 Antibody Testing
                  </h3>

                  <div class="post-excerpt mt-15">
                    <p>
                      “The SARS-CoV-2 IgG assay can provide a broader picture of the SARS-Co-2 virus, such that if someone has been
                      previously infected with the virus, it can show up in the body long after the initial infection,” said Zak Khan, CoFounder of Aria Diagnostic Laboratories. “This knowledge will help in making decisions as to when and how to go
                      back to work, school, etc. - a key piece of the puzzle for reopening our economy,” said Khan.
                    </p>
                    <p>
                      The Abbott designed and manufactured test is the only FDA approved automated platform test for detecting the
                      SARS-CoV- 2 IgG assays at this point in time.
                    </p>

                    <blockquote>
                      <p class="p1">
                        INDIANAPOLIS, May 6, 2020---Aria Diagnostics announced today they have secured an FDA approved test for antibody testing for the SARS-CoV-2 IgG assay, a serology test (antibody test) which is a critical next step to fighting
                        this virus. The test helps to detect the IgG antibody to SARS-Co-2 virus. An antibody is a protein which the body
                        produces in the late stages of infection and can remain for months and even years after a person has recovered.
                        Detecting these antibodies is a key next step towards winning the battle against COVID-19.
                      </p>
                    </blockquote>

                    <p>
                      To get tested, simply log onto the the Aria Diagnostics website at https://www.ariadxs.com/. Aria unveiled last week
                      a new self-pay web portal that allows for people wishing to get tested for COVID-19 the ability to request the test
                      online, pick the date and time they want to come get the test administered, and pay for it all from the comfort and
                      safety of their home. Once the test is scheduled, they drive up to the test sites, Aria Laboratories on the Northwest
                      side of Indianapolis or Northview Church on Hazel Dell drive in Carmel, and the professional staff will perform the
                      test. “A sample of your blood is taken and loaded into a special instrument that detects whether IgG antibodies to the
                      SARS-Co-2 virus are present in the blood sample,’’ said Khan. “The instrument can provide up to 6,000 tests per
                      hour.” Patients can expect their results within 48 hours via email.
                    </p>

                    <p>
                      After successfully providing thousands of COVID-19 test kits to area municipalities and New York City, as well as
                      numerous companies and first responders, Aria Diagnostics has continued to seek out solutions to help get
                      Hoosiers and people around the country get back to resuming normal activity with the peace of mind that they are
                      not carrying or contagious of the virus that causes Covid-19. It is Aria’s driving mission and belief that, in order to
                      beat this virus, everyone should be tested. To do this, the tests must be affordable, accessible and accurate. “It’s not
                      just about getting back to work,” Khan said. “It’s about getting back to Life.”
                    </p>

                    <p>Source: Aria Diagnostics</p>
                  </div>
                </div>
                <!-- Post info End -->
              </div>
              <!--===== Single Blog Item End =========-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/blog.json'
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
      data,
      breadcrumbNavigation: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Blogs',
          to: '/blog'
        },
        {
          text: 'Blog Details',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Press Release'
    }
  }
}
</script>
