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
                src="/images/aria/blog-three.jpg"
                alt="Aria Blog - Vipin Adhlakha"
                style="height: 500px"
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
                    ENFD testing can provide a sensitive and specific diagnostic
                    test for peripheral neuropathy
                  </h3>

                  <div class="post-excerpt mt-15">
                    <p>
                      Peripheral neuropathy is a complex condition that can
                      present with a wide range of symptoms, including pain,
                      numbness, tingling, and weakness. When no specific cause
                      can be identified, the condition is referred to as
                      idiopathic peripheral neuropathy (IPN). It can be
                      challenging to diagnose IPN, as it requires a thorough
                      evaluation of the patient&#39;s symptoms, medical history,
                      and a series of tests to rule out other potential causes.
                    </p>

                    <p>
                      One of the most important tests used in the diagnosis of
                      IPN is epidermal nerve fiber density (ENFD) testing. ENFD
                      testing is a minimally invasive diagnostic tool that
                      measures the density of nerve fibers in the skin, which
                      can be used to detect early signs of peripheral
                      neuropathy. This testing is important because it can help
                      physicians make a more accurate diagnosis of IPN, which
                      can lead to more effective treatment options and can help
                      prevent unnecessary opioid prescriptions.
                    </p>
                    <p>
                      According to a study published in the Journal of Clinical
                      Neuromuscular Disease, ENFD testing has been found to be a
                      reliable and valid diagnostic tool for early detection of
                      peripheral neuropathy. The study concluded that &quot;ENFD
                      testing can provide a sensitive and specific diagnostic
                      test for peripheral neuropathy and may be used in
                      conjunction with other diagnostic tools to aid in the
                      diagnosis of idiopathic peripheral neuropathy.&quot;
                    </p>

                    <blockquote>
                      <p class="p1">
                        &quot;ENFD testing can be used to evaluate the severity
                        of small fiber neuropathy, assess disease progression,
                        and monitor the efficacy of treatment.&quot; -<span
                          style="color: #d31037"
                          ><a href="https://vipinadhlakha.com/" target="_blank"
                            >Journal of Clinical Neuromuscular Disease</a
                          ></span
                        >
                      </p>
                    </blockquote>

                    <p>
                      In addition to helping physicians make a more accurate
                      diagnosis and monitor disease progression, ENFD testing
                      can also help prevent the over-prescription of opioids.
                      According to an ENFD expert, Dr. Roy Freeman,
                      &quot;Misdiagnosis of small fiber neuropathy can lead to
                      the inappropriate use of opioids, which can be highly
                      addictive and have serious side effects.&quot; By using
                      ENFD testing to properly diagnose IPN, physicians can
                      avoid prescribing opioids when they may not be necessary,
                      which can help prevent addiction and other negative
                      outcomes.
                    </p>

                    <p>
                      Miratech Laboratory Services offers ENFD testing utilizing
                      the latest technology through their development partner at
                      Michigan. Dr. Ali Gabali, Head of Hematopathology at Wayne
                      State, states “ENFD testing is a crucial tool in the
                      diagnosis and management of idiopathic peripheral
                      neuropathy. It can provide a more accurate diagnosis, help
                      monitor disease progression and treatment response, and
                      prevent the over-prescription of opioids.” As the
                      prevalence of peripheral neuropathy continues to rise, it
                      is important for healthcare professionals to use all
                      available tools, including ENFD testing, to provide the
                      best possible care for their patients.
                    </p>

                    <p>References:</p>
                    <p>
                      Lauria G, Bakkers M, Schmitz C, et al. Intraepidermal
                      nerve fiber density at the distal leg: a worldwide
                      normative reference study. J Peripher Nerv Syst.
                      2010;15(3):202-207.
                    </p>
                    <p>
                      Therapath. Epidermal Nerve Fiber Density Testing.
                      https://therapath.com/tests/epidermal-nerve-fiber-
                      density-testing/. Accessed March 16, 2023.
                    </p>
                    <p>
                      Freeman R. Small fiber neuropathy: overview, diagnosis,
                      and treatment options.
                      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5665543/.
                      Published 2017. Accessed March 16, 2023.
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
      title: "Aria Blog - Vipin Adhlakha",
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "description",
          name: "description",
          content:
            "ENFD testing can be used to evaluate the severity of small fiber neuropathy",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "ENFD testing can be used to evaluate the severity of small fiber neuropathy",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "ENFD testing can provide a sensitive and specific diagnostic test for peripheral neuropathy",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.ariadxs.com/images/aria/blog-three.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.ariadxs.com/ENFD-Testing",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Aria Blog - Vipin Adhlakha",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "ENFD testing can be used to evaluate the severity of small fiber neuropathy",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://www.ariadxs.com/images/aria/blog-three.jpg",
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
