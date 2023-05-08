<template>
  <div class="main-container">
    <HeaderAria />

    <div
      class="blog-pages-wrapper"
      style="padding-top: 50px; padding-bottom: 50px"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Post Feature Start -->
            <div class="post-feature blog-thumbnail wow move-up">
              <img
                class="img-fluid"
                src="/images/aria/chronic-pain.jpg"
                alt="Aria Blog - Vipin Adhlakha"
                style="object-fit: cover; height: 500px"
              />
            </div>
            <!-- Post Feature End -->
          </div>
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="main-blog-wrap">
              <!--======= Single Blog Item Start ========-->
              <div class="single-blog-item wow move-up">
                <!-- Post info Start -->
                <div class="post-info lg-blog-post-info">
                  <div class="post-categories text-center">
                    <n-link to="/blog"> Aria Diagnostics </n-link>
                  </div>

                  <h3 class="post-title text-center">
                    Chronic pain is a complex issue with no easy solutions.
                  </h3>

                  <div class="post-excerpt mt-15">
                    <p>
                      Chronic pain is a significant health concern in the United
                      States, affecting over 51 million adults or over 20% of
                      the population, as reported by a recent survey conducted
                      annually by the Centers for Disease Control and Prevention
                      (CDC) from 2019 to 2021. The same survey revealed that
                      6.9% of adults had high-impact chronic pain, which
                      significantly restricted their daily activities. These
                      findings highlight the seriousness of chronic pain as a
                      public health issue, with a significant impact on the
                      lives of those affected.
                    </p>

                    <p>
                      The survey also showed significant disparities in the
                      prevalence of chronic pain among different populations.
                      For instance, Black adults were more likely than White
                      adults to report chronic pain, with rates of 24.4% and
                      18.9%, respectively. This disparity was even more
                      significant for high-impact chronic pain, with rates of
                      10.2% and 5.4% among Black and White adults, respectively.
                    </p>
                    <p>
                      Other populations who were at higher risk for chronic pain
                      included adults who were American Indian or Alaska Native,
                      identified as bisexual, or were divorced or separated. The
                      prevalence of chronic pain was highest among those with a
                      history of chronic fatigue syndrome/myalgic
                      encephalomyelitis or dementia, with rates of 70% and
                      54.9%, respectively. These findings suggest that certain
                      populations may be more vulnerable to chronic pain, and
                      healthcare providers need to be aware of these disparities
                      when developing treatment plans.
                    </p>

                    <p>
                      Several factors may contribute to the race disparity in
                      chronic pain, such as Black Americans being more likely to
                      experience chronic health conditions associated with pain,
                      including heart disease, stroke, and diabetes.
                      Additionally, Black Americans are less likely to have
                      access to quality healthcare, making it more difficult to
                      obtain the necessary treatment for chronic pain.
                    </p>
                    <p>
                      The race disparity in chronic pain is a serious issue that
                      needs to be addressed. Healthcare providers must take
                      steps to ensure that all patients, regardless of their
                      race, have equal access to quality pain management care.
                      The impact of chronic pain is not limited to one's
                      physical health but can also affect their mental health,
                      relationships, work, and overall quality of life.
                    </p>
                    <p>
                      Apart from the race disparity, other disparities in
                      chronic pain exist, such as those based on gender,
                      socioeconomic status, and insurance status. We should be
                      aware of these disparities and take necessary steps to
                      ensure that all patients receive equitable access to
                      quality pain management care.
                    </p>
                    <p>
                      Chronic pain is a complex issue with no easy solutions.
                      However, raising awareness of the problem and addressing
                      disparities can make a difference in the lives of those
                      who are suffering from chronic pain. Healthcare providers
                      must be cognizant of the existing disparities and make it
                      a priority to provide equitable access to pain management
                      care to all patients.
                    </p>
                    <a
                      style="color: #d31037; text-decoration: underline"
                      href="https://vipinadhlakha.com/"
                      target="_blank"
                      >-Vipin Adhlakha</a
                    >
                    <div style="padding-top: 10px">
                      <p>References:</p>
                      <ol>
                        <li>
                          Centers for Disease Control and Prevention. (2021).
                          Prevalence of Chronic Pain and High-Impact Chronic
                          Pain Among Adults — United States, 2019. MMWR Morb
                          Mortal Wkly Rep, 70(10), 332–336.
                          https://doi.org/10.15585/mmwr.mm7010a1
                        </li>
                        <li>
                          Hassouneh, B., & Vyas, D. A. (2021). Race and Chronic
                          Pain: A Comparative Effectiveness Review of Analgesic
                          Treatment Outcomes. Pain Medicine, 22(Supplement_1),
                          S72–S81. https://doi.org/10.1093/pm/pnaa483
                        </li>
                      </ol>
                    </div>
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
import data from "../data/blog.json";
import HeaderAria from "@/components/aria/HeaderAria";
import AriaFooter from "@/components/aria/AriaFooter";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

export default {
  components: {
    HeaderAria,
    AriaFooter,
    OffCanvasMobileMenu,
  },
  data() {
    return {
      data,
    };
  },
  head() {
    return {
      title: "Chronic Pain - Vipin Adhlakha",
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "description",
          name: "description",
          content: "Chronic pain is a complex issue with no easy solutions.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Chronic pain is a complex issue with no easy solutions.",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Chronic pain is a complex issue with no easy solutions. ",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.ariadxs.com/images/aria/chronic-pain.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.ariadxs.com/Chronic-Pain",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Aria Blog - Vipin Adhlakha",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Chronic pain is a complex issue with no easy solutions.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://www.ariadxs.com/images/aria/chronic-pain.jpg",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
};
</script>
