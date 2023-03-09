<template>
  <div class="main-container">
    <HeaderAria />

    <div class="blog-pages-wrapper " style="padding-top: 50px; padding-bottom: 50px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Post Feature Start -->
            <div class="post-feature blog-thumbnail  wow move-up">
              <img class="img-fluid" src="/images/aria/blogTwo.jpg" alt="Aria Blog - Vipin Adhlakha">
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
                      Aria Diagnostics
                    </n-link>
                  </div>

                  <h3 class="post-title text-center">
                    The growing trend towards in-office or point-of-care (POC) clinical diagnostic testing.
                  </h3>

                  <div class="post-excerpt mt-15">
                    <p>
                      In recent years, there has been a growing trend towards in-office or point-of-care (POC) clinical
                      diagnostic testing. This type of testing allows healthcare providers to diagnose a wide range of medical
                      conditions quickly and accurately, often without the need for costly and time-consuming laboratory
                      testing. In this article, we will explore the advantages of POC testing, with a special emphasis on the
                      insights of Vipin Adhlakha, a laboratorian with over two decades experience in the field.
                    </p>

                    <blockquote>
                      <p class="p1">
                        &quot;In-office diagnostic testing allows for more personalized and targeted
                        treatment, which can result in better outcomes for patients. By identifying the underlying cause of a
                        patient&#39;s symptoms quickly and accurately, healthcare providers can develop a treatment plan that is
                        tailored to the individual patient&#39;s needs.&quot; - Vipin Adhlakha
                      </p>
                    </blockquote>

                    <p>
                      One of the most significant advantages of POC testing is speed. Because the testing is performed on-site,
                      results are typically available within minutes or hours, rather than days or weeks. This can be especially
                      valuable in emergency situations, where a quick diagnosis can mean the difference between life and
                      death. Additionally, faster results mean that patients can receive treatment more quickly, which can
                      lead to better outcomes.
                    </p>

                    <p>
                      In-office testing is less prone to error and often more accurate since the testing is performed on-site by
                      trained technicians rather than sent out to a reference laboratory testing. Additionally, because the
                      testing is performed in a controlled environment, there is less risk of contamination or other factors that
                      can affect the accuracy of the results.
                    </p>

                    <p>
                      POC testing is also more convenient for patients. Patients can often receive testing and treatment in the
                      same visit, rather than having to schedule multiple appointments and travel to different locations. This
                      can be especially beneficial for patients with chronic conditions that require frequent testing, as it can
                      reduce the time and expense associated with managing their condition.
                    </p>

                    <p>
                      POC testing is also more environmentally friendly than reference laboratory testing requiring less need
                      for samples to be transported to a laboratory, which can contribute to greenhouse gas emissions and
                      other environmental concerns.
                    </p>

                    <p>
                      In conclusion, POC testing offers a number of advantages including speed, accuracy, convenience, cost
                      savings, and environmental benefits. As Vipin Adhlakha notes, &quot;In-office diagnostic testing is an
                      important tool for improving patient outcomes and reducing the overall cost of care. By embracing this
                      technology, healthcare providers can provide better, more efficient care to their patients.&quot;
                    </p>
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
      data
    }
  },
  head () {
    return {
      title: 'Aria Blog - Vipin Adhlakha'
    }
  }
}
</script>
