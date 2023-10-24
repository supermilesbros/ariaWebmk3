<template>
  <div class="main-container">
    <HeaderAria />

    <div
      class="blog-pages-wrapper"
      style="padding-top: 50px; padding-bottom: 50px"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-10 ml-auto mr-auto">
            <div class="main-blog-wrap">
              <!--======= Single Blog Item Start ========-->
              <div class="single-blog-item wow move-up">
                <!-- Post info Start -->
                <div class="post-info lg-blog-post-info">
                  <div class="post-categories text-center">
                    <h6 style="color: black"><span style="color: #810831">ARIA DIAGNOSTICS</span> | <a style="text-decoration: underline; color: #de1a1b;" target="_blank" href="https://sigtuple.com/">SIGTUPLE</a> | <a style="text-decoration: underline; color: #fe9b02;" target="_blank" href="https://fdamapclinical.com/">FDAMAP</a></h6>
                  </div>

                  <h3 class="post-title text-center">
                    ARIA DIAGNOSTICS, SIGTUPLE, AND FDAMAP COLLABORATE ON DIGITAL PATHOLOGY BREAKTHROUGH
                  </h3>

                  <p>Indianapolis, October 24, 2023</p>

                  <div class="post-excerpt mt-15">
                    <p>
                      Aria Diagnostics, a central clinical laboratory specializing in advanced diagnostic testing, announces the U.S. FDA 510(k) clearance for SigTuple's novel artificial intelligence based peripheral blood smear application AI100 with ShonitTM, transforming disease detection and diagnosis. Aria Diagnostics served as the central laboratory for patient testing and platform validation testing while CRO, FDAMap, aided in project administration and management.

                    </p>

                    <p>
                      This approval marks a critical advancement in the world of clinical pathology. The AI100 with ShonitTM is an in-vitro diagnostic device designed to automate manual microscopy in a diagnostic laboratory by digitally imaging physical samples. SigTuple’s advanced AI models extract and classify each cell into over 30 different cell types, providing precision and efficiency in the pathology diagnostic process.
                    </p>

                    <p>
                      For all hematological disorders, such as blood cancers, infections, anemia, and allergies, the microscopic examination of the peripheral blood smear (PBS) is the gold standard test, but microscopy today is predominantly a manual process, necessitating a highly skilled pathologist to be present on-site. At a time when only 14 qualified pathologists exists per 1 million people, manners to increase the speed, consistency, and accuracy of digital pathology are crucial to improving patient care.

                    </p>

                    <p>
                      This device automates one of the last remaining manual pieces in the clinical review process, improving lab workflow (and thus throughput) and enabling remote pathology review. Through automation and purposeful AI, we can now expedite disease detection and diagnosis,” said Vipin Adhlakha, President and Clinical Lead at Aria Diagnostics.

                    </p>

                    <blockquote>
                      <p class="p1">
                        This partnership signifies a new era in digital pathology,” said Apurv Manjrekar, “Our collaboration with Aria Diagnostics and FDAmap reinforces our commitment to transforming healthcare by harnessing the power of artificial intelligence. Together, we are redefining the landscape of diagnostic testing, making it more accessible, efficient, and reliable for healthcare providers and patients alike.
                      </p>
                      <p>- Apurv Manjrekar, Chief Product Officer at SigTuple</p>
                    </blockquote>

                    <a
                      href="https://vipinadhlakha.com/"
                      target="_blank"
                      style="color: red; padding-bottom: 25px;"
                      >Vipin Adhlakha - CEO Aria Diagnostics</a
                    >
                    <p>
                      For more information on AI100 with ShonitTM or specific research findings, contact info has been provided below.

                    </p>
                    <h5 style="padding-top: 10px">Resources:</h5>
                    <a style="text-decoration: underline;" target="_blank"
                      href="https://thepathologist.com/outside-the-lab/constant-demand-patchy-supply#:~:text=It%20also%20reveals%20glaring%20disparities,than%20three%20pathologists%20per%20million."
                      >Constant Demand, Patchy Supply: The first comprehensive study on the global pathologist workforce</a
                    >
                  </div>
                </div>
                <!-- Post info End -->
              </div>
              <div>
                <div class="feature-large-images-wrapper section-space--ptb_100">
    <div class="container">
      <div class="row company-card">
          <div class="col-2 card-content">
            <img src="images/logo/ARIARed.png" class="img-fluid" alt="logo" style="width: 80%;">
          </div>
          <div class="col-10 card-content">
            <h5 style="color: #810831;">Aria Diagnostics</h5>
            <p> Aria is a high complexity CLIA-certified & CAP-accredited commercial clinical laboratory that offers an integrated diagnostic approach to patient testing.</p>
            <p>Read more at <a style="text-decoration: underline;" href="https://www.ariadxs.com/" target="_blank"><span style="color: #810831;">ariadxs.com</span></a></p>
          </div>
        
      </div>
      <div class="row company-card">
          <div class="col-2 card-content">
            <img src="images/aria/stigLogo.png" class="img-fluid" alt="logo" style="width: 90%;">
          </div>
          <div class="col-10 card-content">
            <h5 style="color: #de1a1b;">Sigtuple</h5>
            <p> Sigtuple Technologies builds intelligent screening solutions to aid diagnosis through robotics and AI-powered analysis of visual medical data.</p>
            <p>Read more at <a style="text-decoration: underline;" href="https://sigtuple.com/" target="_blank"><span style="color: #de1a1b;">sigtuple.com</span></a></p>
          </div>
        
      </div>
      <div class="row company-card">
          <div class="col-2 card-content">
            <img src="images/aria/fdaLogo.webp" class="img-fluid" alt="logo" style="width: 80%;">
          </div>
          <div class="col-10 card-content">
            <h5 style="color: #fe9b02;">FDAMap</h5>
            <p> FDAMap is a Maryland-based CRO that consists of a group of clinical industry experts in healthcare and food regulations, business, and public policy.</p>
            <p>Read more at <a style="text-decoration: underline;" href="https://fdamapclinical.com/" target="_blank"><span style="color: #fe9b02;">fdamapclinical.com</span></a></p>
          </div>
        
      </div>
    </div>
  </div>
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
            "The Pitfalls of a High Complexity POL for LCMS Urine Drug Testing",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Physician office laboratories (POLs) have revolutionized healthcare by allowing clinicians to perform a wide range of diagnostic tests within their own practices.",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "The Pitfalls of a High Complexity POL for LCMS Urine Drug Testing",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.ariadxs.com/images/aria/blogTwo.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.ariadxs.com/pitfalls-high-complexity-pol",
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
            "The Pitfalls of a High Complexity POL for LCMS Urine Drug Testing",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://www.ariadxs.com/images/aria/blogTwo.jpg",
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
<style scoped>
.card-wrapper {
  background-color: beige;
  border-radius: 20px;
}
.company-card {
  padding: 25px;
  margin-bottom: 25px;
  background-color: #f0f0f0;
  height: 200px;
  border-radius: 20px;
  box-shadow: 2px 4px rgba(26, 27, 30, .3)
;

}
.card-content {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
