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
                    Aria Diagnostics Launches Saliva PCR Test for COVID-19
                  </h3>

                  <div class="post-excerpt mt-15">
                    <p>
                      “For the past 6 weeks, we have been collecting saliva utilizing this breakthrough technology, which uses a unique, proprietary rinse to stimulate the production of adequate fresh saliva needed to test for the SARS-CoV-19 virus that is responsible for COVID-19,” said Vipin Adhlakha, President of Aria Diagnostics. “This new method also stabilizes the collected specimen, in ways that had been unable to be achieved through prior saliva collection methods, providing the necessary conditions to accurately detect the presence or absence of the virus.”
                    </p>
                    <blockquote>
                      <p class="p1">
                        INDIANAPOLIS, Nov. 17, 2020---Aria Diagnostics announced today it has successfully completed COVID 19 validation studies on saliva collections and is ready to offer it to the public. The new PCR testing process uses saliva dropped into a tube, decreasing the discomfort sometimes associated with the nasal swab and allowing those with injuries, or small children, to be more comfortably tested with equally dependable results. The nasal pharyngeal swab continues to be to most widely used and reliable test, however this new saliva method offers options to those who wish to get tested.
                      </p>
                    </blockquote>

                    <p>
                      Nasal swabs – the nasopharyngeal swab used to perform the PCR test to detect the SARS-CoV-19 virus that is responsible for COVID 19 - has been the gold standard for sample collection but it can be uncomfortable and difficult for some. With this new method, a pleasant-tasting mouth rinse is swirled in the mouth and spit into a collection tube, which is then handed to the technician. “We are able to provide this reliable, comfortable PCR test as we have with our drive through nasopharyngeal tests, so you schedule and provide your information on-line or by calling our scheduling line, drive to our testing sites and have the test performed, never having to leave your car,” said Mr. Adhlakha.  “We are eager to make this new less invasive collection method available so we can test people for whom a NP swab specimen can’t be obtained without discomfort, specifically children and individuals with pre-existing nasal cavity issues.”
                    </p>

                    <p>
                      As fall brings more people inside, and its common ailments along with it, Aria has begun offering a three-in-one-stop testing so individuals may have the Flu, Strep and COVID-19 tests administered in one stop. Results for Flu and Strep are delivered within 15 minutes and COVID-19 in less than 48 hours. And to keep on track with the driving goal of making sure everyone gets tested, Aria has launched a Telehealth hotline, where people can have quick and easy access to a health professional for consultation by calling the Telehealth hotline: 317-623-4003. With the support of a medical professional, people can qualify for insurance coverage of the tests they need.
                      All testing is available at the locations and times below and will be administered by appointment only.
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
